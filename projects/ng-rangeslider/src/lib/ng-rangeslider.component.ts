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
         [class]="rangeClass" id="{{identifier}}">
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
  private handleDown;
  private xvalue = 0;

  identifier = 'ng-rangeslider-' + (NgRangesliderComponent.pluginIdentifier++);

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
  @Input() disabled = false;
  @Input() step = 1;

  @Input()
  set value(v: number) {
    this.xvalue = v;
    const pos = this.getPositionFromValue(v);
    this.setPosition(pos, false);
  }

  get value() {
    return this.xvalue;
  }

  @Input() min = 0;
  @Input() max = 100;

  constructor() {
    const self = this;

    // tslint:disable-next-line:only-arrow-functions
    const handleMove = function (e) {
      e.preventDefault();
      const posX = self.getRelativePosition(e);
      self.setPosition(posX - self.grabX);
    };

    // tslint:disable-next-line:only-arrow-functions
    const handleEnd = function (e) {
      e.preventDefault();
      document.removeEventListener('pointermove', handleMove, true);
      document.removeEventListener('pointerup', handleEnd, true);
    };

    // tslint:disable-next-line:only-arrow-functions
    const handleDown = function (e) {
      console.log('down');
      const local = self.isLocalClick(e.target);
      if (self.disabled || !local) {
        return;
      }
      if (local) {
        e.preventDefault();
      }
      document.addEventListener('pointermove', handleMove, true);
      document.addEventListener('pointerup', handleEnd, true);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(/[\n\t]/g, ' ').indexOf(self.handleClass) > -1) {
        return;
      }

      const posX = self.getRelativePosition(e);
      const rangeX = self.$range.nativeElement.getBoundingClientRect().left;
      const handleX = self.getPositionFromNode(self.$handle.nativeElement) - rangeX;

      self.setPosition(posX - self.grabX);

      if (posX >= handleX && posX < handleX + self.handleWidth) {
        self.grabX = posX - handleX;
      }
    };
    document.removeEventListener('pointerdown', handleDown);
    document.addEventListener('pointerdown', handleDown);

    this.handleDown = handleDown;
  }

  ngAfterViewInit(): void {
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
    if (this.disabled) {
      this.$range.nativeElement.classList.add(this.disabledClass);
    } else {
      this.$range.nativeElement.classList.remove(this.disabledClass);
    }

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

    // console.log('setValue', value, this.value);
    //
    // console.trace('setValue');

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
    return Number((value).toFixed(this.toFixed));
  }

  isLocalClick(e: HTMLElement) {
    if (e === null) {
      return false;
    }
    if (e.id === this.identifier) {
      return true;
    }
    return this.isLocalClick(e.parentElement);
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
    // document.removeEventListener('pointerdown', this.handleDown);
  }

}
