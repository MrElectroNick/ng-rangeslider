import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnDestroy, Output, ViewChild} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-rangeslider',
  template: `
    <div #range
         [ngStyle]="{'height':fillSize+'px', 'margin-top':fillMarginTop+'px','border-radius':fillSize/2}"
         [class]="rangeClass" id="{{identifier}}">
      <div #fill [class]="fillClass" [ngStyle]="{'height':_fillSize+'px'}"></div>
      <div #handle [class]="handleClass" [ngStyle]="{width:handleSize+'px',height:handleSize+'px','top':handleTop+'px'}"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .rangeslider,
    .rangeslider__fill {
      background: #e6e6e6;
      display: block;
      height: 20px;
      width: 100%;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
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
  private xvalue = 0;
  private xmax = 100;
  private xmin = 0;
  private xstep = 1;
  private xdisabled = false;
  private xrtl = false;

  @Input()
  set value(v: number) {
    this.xvalue = v;
    this.update();
  }

  get value() {
    return this.xvalue;
  }

  @Input()
  set disabled(v: boolean) {
    this.xdisabled = v;
    this.update();
  }

  get disabled() {
    return this.xdisabled;
  }

  @Input()
  set rtl(v: boolean) {
    this.xrtl = v;
    this.update();
  }

  get rtl() {
    return this.xrtl;
  }

  @Input()
  get min(): number {
    return this.xmin;
  }

  set min(value: number) {
    this.xmin = value;
    this.update();
  }

  @Input()
  get max(): number {
    return this.xmax;
  }

  set max(value: number) {
    this.xmax = value;
    this.update();
  }

  @Input()
  get step(): number {
    return this.xstep;
  }

  set step(value: number) {
    this.xstep = value;
    this.update();
  }

  _handleSize = 40;
  @Input()
  set handleSize(v: number) {
    this._handleSize = v;
    this.update();
  }
  get handleSize() {
    return this._handleSize;
  }

  _fillSize = 20;
  @Input()
  set fillSize(v: number) {
    this._fillSize = v;
    this.update();
  }
  get fillSize() {
    return this._fillSize;
  }

  fillMarginTop = 10;
  handleTop = -10;

  @HostBinding('style.height') hostHeight = this.handleSize+'px';

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

  constructor() {

    // tslint:disable-next-line:only-arrow-functions
    const handleMove = (e) => {
      if (e.type !== 'touchmove') {
        e.preventDefault();
      }
      const posX = this.getRelativePosition(e);
      this.setPosition(posX - this.grabX);
    };

    // tslint:disable-next-line:only-arrow-functions
    const handleEnd = (e) => {
      e.preventDefault();
      document.removeEventListener('mousemove', handleMove, true);
      document.removeEventListener('touchmove', handleMove, true);
      document.removeEventListener('mouseup', handleEnd, true);
      document.removeEventListener('touchend', handleEnd, true);
    };

    // tslint:disable-next-line:only-arrow-functions
    const handleDown = (e) => {
      const local = this.isLocalClick(e.target);
      if (this.disabled || !local) {
        return;
      }
      if (local && e.type !== 'touchstart') {
        e.preventDefault();
      }
      document.addEventListener('mousemove', handleMove, true);
      document.addEventListener('mouseup', handleEnd, true);
      document.addEventListener('touchmove', handleMove, true);
      document.addEventListener('touchend', handleEnd, true);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(/[\n\t]/g, ' ').indexOf(this.handleClass) > -1) {
        return;
      }

      const posX = this.getRelativePosition(e);
      const rangeX = this.$range.nativeElement.getBoundingClientRect().left;
      const handleX = this.getPositionFromNode(this.$handle.nativeElement) - rangeX;

      this.setPosition(posX - this.grabX);

      if (posX >= handleX && posX < handleX + this.handleWidth) {
        this.grabX = posX - handleX;
      }
    };

    // tslint:disable-next-line:only-arrow-functions
    const winsize = () => {
      this.update();
    };

    window.removeEventListener('resize', winsize);
    window.addEventListener('resize', winsize);
    document.removeEventListener('touchstart', handleDown);
    document.addEventListener('touchstart', handleDown);
    document.removeEventListener('mousedown', handleDown);
    document.addEventListener('mousedown', handleDown);
  }

  ngAfterViewInit(): void {
    this.update();
  }

  /**
   * @param value number
   */
  getPositionFromValue(value: number): number {
    let percentage = (value - this.xmin) / (this.xmax - this.xmin);
    if (this.rtl) {
      percentage = 1 - percentage;
    }
    return percentage * this.maxHandleX;
  }

  update() {
    this.toFixed = (this.step + '').replace('.', '').length - 1;
    this.handleWidth = this.getDimension(this.$handle.nativeElement, 'offsetWidth');
    this.rangeWidth = this.getDimension(this.$range.nativeElement, 'offsetWidth');
    this.maxHandleX = this.rangeWidth - this.handleWidth;
    this.grabX = this.handleWidth / 2;
    this.position = this.getPositionFromValue(this.value);

    this.hostHeight = this.handleSize+'px';
    const margin = (this.handleSize/2) - (this.fillSize/2);
    this.fillMarginTop = margin;
    this.handleTop = -margin;

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
    // const left = this.cap(pos, 0, this.maxHandleX);

    // Update ui
    if (this.rtl) {
      this.$fill.nativeElement.style.right = 0;
      this.$fill.nativeElement.style.left = '';
      this.$fill.nativeElement.style.width = (this.rangeWidth - left) + 'px';
      this.$handle.nativeElement.style.left = left + 'px';
    } else {
      this.$fill.nativeElement.style.left = 0;
      this.$fill.nativeElement.style.right = '';
      this.$fill.nativeElement.style.width = (left + this.grabX) + 'px';
      this.$handle.nativeElement.style.left = left + 'px';
    }

    // Update globals
    this.position = this.rtl ? this.maxHandleX - left : left;

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
    this.changed.emit(value);
  }

  getValueFromPosition(pos) {
    let percentage;
    let value;
    percentage = ((pos) / (this.maxHandleX || 1));
    if (this.rtl) {
      percentage = 1 - percentage;
    }
    value = this.step * /*Math.round*/(percentage * (this.xmax - this.xmin) / this.step) + this.xmin;
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
    // Get the offset left relative to the viewport
    const rangeX = this.$range.nativeElement.getBoundingClientRect().left;
    let pageX = 0;

    if (typeof e.pageX !== 'undefined') {
      pageX = e.pageX;
    } else if (typeof e.clientX !== 'undefined') {
      pageX = e.clientX;
    } else if (e.touches && e.touches[0] && typeof e.touches[0].clientX !== 'undefined') {
      pageX = e.touches[0].clientX;
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
