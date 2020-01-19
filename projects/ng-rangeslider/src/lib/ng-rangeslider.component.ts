import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';

/*
         (mousedown)="handleDown($event)"
         (pointerdown)="handleDown($event)"
         (mousemove)="handleMove($event)"
         (pointermove)="handleMove($event)"
         (mouseup)="handleEnd($event)"
         (pointerup)="handleEnd($event)"

 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-rangeslider',
  template: `
    <div #range
         [class]="rangeClass" id="js-rangeslider-0">
      <div #fill [class]="fillClass"></div>
      <div #handle [class]="handleClass"></div>
    </div>
    <br>
    <br>
  `,
  styles: [`
    .rangeslider,
    .rangeslider__fill {
      background: #e6e6e6;
      display: block;
      height: 20px;
      width: 100%;
      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }

    .rangeslider {
      position: relative;
      width: 100%;
      display: inline-block;
    }

    .rangeslider--disabled {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
      opacity: 0.4;
    }

    .rangeslider__fill {
      background: #A0A0A0;
      position: absolute;
      top: 0;
    }

    .rangeslider__handle {
      border: 1px solid #ccc;
      cursor: pointer;
      display: inline-block;
      width: 40px;
      height: 40px;
      position: absolute;
      top: -10px;
      background: white linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      border-radius: 50%;
    }

    .rangeslider__handle:after {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(rgba(0, 0, 0, 0.13), rgba(255, 255, 255, 0));
      border-radius: 50%;
    }

    .rangeslider__handle:active {
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.12));
    }

    input[type="range"]:focus + .rangeslider .rangeslider__handle {
      -webkit-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
      -moz-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
      box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);
    }

  `]
})
export class NgRangesliderComponent implements AfterViewInit, OnDestroy {

  private static pluginIdentifier = 0;

  private identifier = 'ng-rangeslider-' + (NgRangesliderComponent.pluginIdentifier++);
  private xvalue = 0;

  handleWidth = 0;
  rangeWidth = 0;
  maxHandleX = 0;
  grabX = 0;
  position = 0;
  toFixed = 0;

  @ViewChild('handle', {static: true}) $handle;
  @ViewChild('fill', {static: true}) $fill;
  @ViewChild('range', {static: true}) $range;

  @Output() changed: EventEmitter<number> = new EventEmitter<number>();
  @Input() rangeClass = 'rangeslider';
  @Input() disabledClass = 'rangeslider--disabled';
  @Input() fillClass = 'rangeslider__fill';
  @Input() handleClass = 'rangeslider__handle';
  @Input() step = 1;

  @Input()
  set value(v: number) {
    this.xvalue = v;
    console.log('s', v);
    const pos = this.getPositionFromValue(v);
    this.setPosition(pos, false);
  }

  get value() {
    return this.xvalue;
  }

  @Input() min = 0;
  @Input() max = 100;

  constructor() {
    document.addEventListener('pointerdown', this.handleDown.bind(this));
  }

  ngAfterViewInit(): void {
    console.log('i', this.xvalue);
    this.update();
  }

  /**
   * @param value number
   */
  getPositionFromValue(value: number): number {
    let percentage;
    let pos;
    percentage = (value - this.min) / (this.max - this.min);
    pos = percentage * this.maxHandleX;
    return pos;
  }

  update() {
    this.handleWidth = this.getDimension(this.$handle.nativeElement, 'offsetWidth');
    this.rangeWidth = this.getDimension(this.$range.nativeElement, 'offsetWidth');
    this.maxHandleX = this.rangeWidth - this.handleWidth;
    this.grabX = this.handleWidth / 2;
    this.position = this.getPositionFromValue(this.value);

    // Consider disabled state
    // if (this.$element[0].disabled) {
    //   this.$range.addClass(this.options.disabledClass);
    // } else {
    //   this.$range.removeClass(this.options.disabledClass);
    // }

    this.setPosition(this.position, false);
  }

  getDimension(element, key) {
    const hiddenParentNodes = this.getHiddenParentNodes(element);
    const hiddenParentNodesLength = hiddenParentNodes.length;
    const displayProperty = [];
    let dimension = element[key];

    // Used for native `<details>` elements
    function toggleOpenProperty(telement) {
      if (typeof telement.open !== 'undefined') {
        telement.open = (!telement.open);
      }
    }

    if (hiddenParentNodesLength) {
      for (let i = 0; i < hiddenParentNodesLength; i++) {
        // Cache the display property to restore it later.
        displayProperty[i] = hiddenParentNodes[i].style.display;

        hiddenParentNodes[i].style.display = 'block';
        hiddenParentNodes[i].style.height = '0';
        hiddenParentNodes[i].style.overflow = 'hidden';
        hiddenParentNodes[i].style.visibility = 'hidden';
        toggleOpenProperty(hiddenParentNodes[i]);
      }

      dimension = element[key];

      for (let j = 0; j < hiddenParentNodesLength; j++) {
        toggleOpenProperty(hiddenParentNodes[j]);
        hiddenParentNodes[j].style.display = displayProperty[j];
        hiddenParentNodes[j].style.height = '';
        hiddenParentNodes[j].style.overflow = '';
        hiddenParentNodes[j].style.visibility = '';
      }
    }
    return dimension;
  }

  getHiddenParentNodes(element) {
    const parents = [];
    let node = element.parentNode;

    while (this.isHidden(node)) {
      parents.push(node);
      node = node.parentNode;
    }
    return parents;
  }

  isHidden(element) {
    return (element && true && (element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false));
  }

  setPosition(pos: number, updateValue = true) {
    // Snapping steps
    const value = this.getValueFromPosition(this.cap(pos, 0, this.maxHandleX));
    const left = this.getPositionFromValue(value);

    // Update ui
    this.$fill.nativeElement.style.width = (left + this.grabX) + 'px';
    this.$handle.nativeElement.style.left = left + 'px';

    // Update globals
    this.position = left;

    if (updateValue) {
      this.setValue(value);
    }
  }

  cap(pos, min, max) {
    if (pos < min) {
      return min;
    }
    if (pos > max) {
      return max;
    }
    return pos;
  }

  setValue(value) {
    if (value === this.value) {
      return;
    }

    console.log('setValue', value, this.value);

    console.trace('setValue');

    this.changed.emit(value);

    // this.changed.emit(value);
    // Set the new value and fire the `input` event
    // this.$element
    //   .val(value)
    //   .trigger('input', {origin: this.identifier});
  }

  getValueFromPosition(pos) {
    let percentage;
    let value;
    percentage = ((pos) / (this.maxHandleX || 1));
    value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;
    // console.log('getValueFromPosition', pos, percentage, value);
    return Number((value).toFixed(this.toFixed));
  }

  handleDown(e) {
    console.log('down', e);
    e.preventDefault();
    // this.$document.on(this.moveEvent, this.handleMove);
    // this.$document.on(this.endEvent, this.handleEnd);
    // If we click on the handle don't set the new position
    if ((' ' + e.target.className + ' ').replace(/[\n\t]/g, ' ').indexOf(this.handleClass) > -1) {
      return;
    }

    const posX = this.getRelativePosition(e);
    console.log(posX);
    const rangeX = this.$range.nativeElement.getBoundingClientRect().left;
    console.log(rangeX);
    const handleX = this.getPositionFromNode(this.$handle.nativeElement) - rangeX;
    console.log(handleX);

    this.setPosition(posX - this.grabX);

    if (posX >= handleX && posX < handleX + this.handleWidth) {
      this.grabX = posX - handleX;
    }
  }

  handleMove(e) {
    // console.log('move', e);
    e.preventDefault();
    const posX = this.getRelativePosition(e);
    this.setPosition(posX - this.grabX);
  }

  handleEnd(e) {
    // console.log('end', e);
    e.preventDefault();
    // this.$document.off(this.moveEvent, this.handleMove);
    // this.$document.off(this.endEvent, this.handleEnd);

    // Ok we're done fire the change event
    // this.$element.trigger('change', {origin: this.identifier});

    // if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
    //   this.onSlideEnd(this.position, this.value);
    // }
  }

  getRelativePosition(e) {
    // console.log('getRelativePosition', this.$range);
    // return;
    // Get the offset left relative to the viewport
    const rangeX = this.$range.nativeElement.getBoundingClientRect().left;
    // console.log(rangeX);
    let pageX = 0;

    if (typeof e.pageX !== 'undefined') {
      pageX = e.pageX;
    } else if (typeof e.originalEvent.clientX !== 'undefined') {
      pageX = e.originalEvent.clientX;
    } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0].clientX !== 'undefined') {
      pageX = e.originalEvent.touches[0].clientX;
    } else if (e.currentPoint && typeof e.currentPoint.x !== 'undefined') {
      pageX = e.currentPoint.x;
    }

    return pageX - rangeX;
  }

  getPositionFromNode(node) {
    let i = 0;
    while (node !== null) {
      i += node.offsetLeft;
      node = node.offsetParent;
    }
    return i;
  }

  ngOnDestroy(): void {
    document.removeEventListener('pointerdown', this.handleDown.bind(this));
  }

}
