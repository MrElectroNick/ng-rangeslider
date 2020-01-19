(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n  <h1>@mrelectronick/ng-rangeslider</h1>\r\n  <hr>\r\n  <br>\r\n  <label for=\"val\">Enter value:</label>\r\n  &nbsp;\r\n  <input id=\"val\" type=\"number\" size=\"3\" [value]=\"val\" (change)=\"changeVal($event)\" style=\"width: 75px\">\r\n  <br>\r\n  <br>\r\n\r\n  <ng-rangeslider [value]=\"val\"\r\n                  [step]=\"10\"\r\n                  (changed)=\"changeRange($event)\"></ng-rangeslider>\r\n\r\n  <hr>\r\n  <br>\r\n\r\n  <label for=\"val2\">Enter value:</label>\r\n  &nbsp;\r\n  <input id=\"val2\" type=\"number\" size=\"3\" [value]=\"val2\" (change)=\"val2 = $event.target.value\" style=\"width: 75px\">\r\n  <br>\r\n  <br>\r\n\r\n  <ng-rangeslider\r\n    [value]=\"val2\"\r\n    [min]=\"100\"\r\n    [max]=\"200\"\r\n    (changed)=\"val2 = $event\"></ng-rangeslider>\r\n\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ng-rangeslider/src/lib/ng-rangeslider.component.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng-rangeslider/src/lib/ng-rangeslider.component.ts ***!
  \*********************************************************************/
/*! exports provided: NgRangesliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRangesliderComponent", function() { return NgRangesliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var NgRangesliderComponent_1;


/*
         (mousedown)="handleDown($event)"
         (pointerdown)="handleDown($event)"
         (mousemove)="handleMove($event)"
         (pointermove)="handleMove($event)"
         (mouseup)="handleEnd($event)"
         (pointerup)="handleEnd($event)"

 */
let NgRangesliderComponent = NgRangesliderComponent_1 = class NgRangesliderComponent {
    constructor() {
        this.identifier = 'ng-rangeslider-' + (NgRangesliderComponent_1.pluginIdentifier++);
        this.xvalue = 0;
        this.handleWidth = 0;
        this.rangeWidth = 0;
        this.maxHandleX = 0;
        this.grabX = 0;
        this.position = 0;
        this.toFixed = 0;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rangeClass = 'rangeslider';
        this.disabledClass = 'rangeslider--disabled';
        this.fillClass = 'rangeslider__fill';
        this.handleClass = 'rangeslider__handle';
        this.step = 1;
        this.min = 0;
        this.max = 100;
        document.addEventListener('pointerdown', this.handleDown.bind(this));
    }
    set value(v) {
        this.xvalue = v;
        console.log('s', v);
        const pos = this.getPositionFromValue(v);
        this.setPosition(pos, false);
    }
    get value() {
        return this.xvalue;
    }
    ngAfterViewInit() {
        console.log('i', this.xvalue);
        this.update();
    }
    /**
     * @param value number
     */
    getPositionFromValue(value) {
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
    setPosition(pos, updateValue = true) {
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
        }
        else if (typeof e.originalEvent.clientX !== 'undefined') {
            pageX = e.originalEvent.clientX;
        }
        else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0].clientX !== 'undefined') {
            pageX = e.originalEvent.touches[0].clientX;
        }
        else if (e.currentPoint && typeof e.currentPoint.x !== 'undefined') {
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
    ngOnDestroy() {
        document.removeEventListener('pointerdown', this.handleDown.bind(this));
    }
};
NgRangesliderComponent.pluginIdentifier = 0;
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('handle', { static: true })
], NgRangesliderComponent.prototype, "$handle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fill', { static: true })
], NgRangesliderComponent.prototype, "$fill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('range', { static: true })
], NgRangesliderComponent.prototype, "$range", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgRangesliderComponent.prototype, "changed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "rangeClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "disabledClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "fillClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "handleClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "step", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "value", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "min", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgRangesliderComponent.prototype, "max", void 0);
NgRangesliderComponent = NgRangesliderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
        styles: ["\n    .rangeslider,\n    .rangeslider__fill {\n      background: #e6e6e6;\n      display: block;\n      height: 20px;\n      width: 100%;\n      box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);\n      border-radius: 10px;\n    }\n\n    .rangeslider {\n      position: relative;\n      width: 100%;\n      display: inline-block;\n    }\n\n    .rangeslider--disabled {\n      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);\n      opacity: 0.4;\n    }\n\n    .rangeslider__fill {\n      background: #A0A0A0;\n      position: absolute;\n      top: 0;\n    }\n\n    .rangeslider__handle {\n      border: 1px solid #ccc;\n      cursor: pointer;\n      display: inline-block;\n      width: 40px;\n      height: 40px;\n      position: absolute;\n      top: -10px;\n      background: white linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));\n      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n      border-radius: 50%;\n    }\n\n    .rangeslider__handle:after {\n      content: \"\";\n      display: block;\n      width: 18px;\n      height: 18px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: linear-gradient(rgba(0, 0, 0, 0.13), rgba(255, 255, 255, 0));\n      border-radius: 50%;\n    }\n\n    .rangeslider__handle:active {\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.12));\n    }\n\n    input[type=\"range\"]:focus + .rangeslider .rangeslider__handle {\n      -webkit-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);\n      -moz-box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);\n      box-shadow: 0 0 8px rgba(255, 0, 255, 0.9);\n    }\n\n  "]
    })
], NgRangesliderComponent);



/***/ }),

/***/ "./projects/ng-rangeslider/src/lib/ng-rangeslider.module.ts":
/*!******************************************************************!*\
  !*** ./projects/ng-rangeslider/src/lib/ng-rangeslider.module.ts ***!
  \******************************************************************/
/*! exports provided: NgRangesliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgRangesliderModule", function() { return NgRangesliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_rangeslider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-rangeslider.component */ "./projects/ng-rangeslider/src/lib/ng-rangeslider.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let NgRangesliderModule = class NgRangesliderModule {
};
NgRangesliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ng_rangeslider_component__WEBPACK_IMPORTED_MODULE_2__["NgRangesliderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        exports: [_ng_rangeslider_component__WEBPACK_IMPORTED_MODULE_2__["NgRangesliderComponent"]]
    })
], NgRangesliderModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-rangeslider';
        this.val = 10;
        this.val2 = 123;
    }
    changeVal(e) {
        this.val = parseInt(e.target.value, 10);
    }
    changeRange(v) {
        console.log('changeRange', v);
        this.val = v;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ng_rangeslider_src_lib_ng_rangeslider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ng-rangeslider/src/lib/ng-rangeslider.module */ "./projects/ng-rangeslider/src/lib/ng-rangeslider.module.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _projects_ng_rangeslider_src_lib_ng_rangeslider_module__WEBPACK_IMPORTED_MODULE_4__["NgRangesliderModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mrele\Projects\ng-rangeslider\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map