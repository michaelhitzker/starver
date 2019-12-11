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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"about\">About</h3>\n\n<p>\n  the starbucks versioning specification was written by\n  <a target=\"_blank\" href=\"http://michaelhitzker.com\">michael hitzker</a>, the\n  creator of\n  <a target=\"_blank\" href=\"https://www.spotfindr.app\">spotfindr</a>\n</p>\n\n<p>\n  in case you'd like to leave me a message, feel free to\n  <a href=\"https://github.com/michaelhitzker/starver-code/issues\"\n    >create an issue on github</a\n  >.\n</p>\n\n<h3 class=\"license\">license</h3>\n\n<p>\n  <a href=\"https://www.apache.org/licenses/LICENSE-2.0\">apache license 2.0</a>\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"header-container\">\n    <img\n      src=\"./assets/starver_icon.svg\"\n      class=\"starbucks-versioning-header-img\"\n    />\n    <h1 class=\"header\">\n      starbucks versioning\n    </h1>\n  </div>\n\n  <div class=\"tldr\">\n    <h3>tl;dr</h3>\n    <p>Given a version number <code>venti.grande.tall</code>, increment the:</p>\n    <ol>\n      <li>\n        <img\n          src=\"./assets/starver_icon.svg\"\n          class=\"starbucks-versioning-icon\"\n        />\n        <b>venti</b> version when you make incompatible code changes,\n      </li>\n      <li>\n        <img\n          src=\"./assets/starver_icon.svg\"\n          class=\"starbucks-versioning-icon\"\n        />\n        <b>grande</b> version when you add functionality in a backwards\n        compatible manner, and\n      </li>\n      <li>\n        <img\n          src=\"./assets/starver_icon.svg\"\n          class=\"starbucks-versioning-icon\"\n        />\n        <b>tall</b> version when you make backwards compatible bug fixes.\n      </li>\n    </ol>\n    <p>\n      Additional labels for pre-release and build metadata are available as\n      extensions to the venti.grande.tall format.\n    </p>\n  </div>\n  <div class=\"introduction\">\n    <h3>cool, but why?</h3>\n    <p>\n      every dev knows the situation of trying to fix a bug for a whole freaking\n      day. when you then suddenly are able to solve it (or declare it as a\n      feature), you are excited to merge it into production. <br />\n      but just as a grande update or tall? isn't that depressing? i mean, you\n      worked your ass off just for a \"grande\" update?!<br />\n      that's why i invented starbucks versioning (well, it's basically just\n      semantic versioning, but way better). now you didn't create a grande\n      update or tall, you created a <b>grande</b> or <b>tall</b> update! (cool,\n      eh?) this sounds way cooler and also boosts your motivation. when telling\n      your one friend that you merged a minor update into production, he'd\n      probably say \"whatever\", but if you tell him that you merged a\n      <b>grande</b> update into production, he'd probably say something like\n      \"amazing! but why do you use italian words?\"<br />\n      also, as a coffee lover (as every dev is, right?), the fancy-sounding\n      words <b>venti</b>, <b>grande</b> and <b>tall</b> are by far easier to\n      remember than those strange, english-sounding words major, minor and patch\n    </p>\n    <app-specification></app-specification>\n    <app-faq></app-faq>\n    <app-about></app-about>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faq/faq.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq\">\n  <h3>faq</h3>\n  <h5>how much did starbucks pay you?</h5>\n  <p>nothing, but if you are starbucks reading this, hit me up😉</p>\n  <h5>does it actually boost motivation?</h5>\n  <p>\n    i've tested it in the spotfindr team (an app created by me) and everyone in\n    that team has said that they now have a venti motivation, whereas they just\n    had minor motivation before\n  </p>\n  <h5>do you like coffee?</h5>\n  <p>yeet.</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/specification/specification.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/specification/specification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"specification\">\n  <h3>specification bla-bla</h3>\n  <p class=\"copied-txt\">\n    (i copied it from <a href=\"semver.org\" target=\"_blank\">semver.org</a>,\n    therefore it sounds boring)\n  </p>\n  <p>\n    The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”,\n    “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this\n    document are to be interpreted as described in\n    <a href=\"http://tools.ietf.org/html/rfc2119\">RFC 2119</a>.\n  </p>\n\n  <ol>\n    <li>\n      <p>\n        A normal version number MUST take the form X.Y.Z where X, Y, and Z are\n        non-negative integers, and MUST NOT contain leading zeroes. X is the\n        venti version, Y is the grande version, and Z is the tall version. Each\n        element MUST increase numerically. For instance: 1.9.0 -&gt; 1.10.0\n        -&gt; 1.11.0.\n      </p>\n    </li>\n    <li>\n      <p>\n        Once a versioned package has been released, the contents of that version\n        MUST NOT be modified. Any modifications MUST be released as a new\n        version.\n      </p>\n    </li>\n    <li>\n      <p>\n        venti version zero (0.y.z) is for initial development. Anything MAY\n        change at any time. The public API SHOULD NOT be considered stable.\n      </p>\n    </li>\n    <li>\n      <p>\n        Version 1.0.0 defines the public API. The way in which the version\n        number is incremented after this release is dependent on this public API\n        and how it changes.\n      </p>\n    </li>\n    <li>\n      <p>\n        tall version Z (x.y.Z | x &gt; 0) MUST be incremented if only backwards\n        compatible bug fixes are introduced. A bug fix is defined as an internal\n        change that fixes incorrect behavior. A bug can also be fixed by calling\n        it a feature\n      </p>\n    </li>\n    <li>\n      <p>\n        grande version Y (x.Y.z | x &gt; 0) MUST be incremented if new,\n        backwards compatible functionality is introduced to the public API. It\n        MUST be incremented if any public API functionality is marked as\n        deprecated. It MAY be incremented if substantial new functionality or\n        improvements are introduced within the private code. It MAY include tall\n        level changes. tall version MUST be reset to 0 when grande version is\n        incremented.\n      </p>\n    </li>\n    <li>\n      <p>\n        venti version X (X.y.z | X &gt; 0) MUST be incremented if any backwards\n        incompatible changes are introduced to the public API. It MAY also\n        include grande and tall level changes. tall and grande version MUST be\n        reset to 0 when venti version is incremented.\n      </p>\n    </li>\n    <li>\n      <p>\n        A pre-release version MAY be denoted by appending a hyphen and a series\n        of dot separated identifiers immediately following the tall version.\n        Identifiers MUST comprise only ASCII alphanumerics and hyphen\n        [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST\n        NOT include leading zeroes. Pre-release versions have a lower precedence\n        than the associated normal version. A pre-release version indicates that\n        the version is unstable and might not satisfy the intended compatibility\n        requirements as denoted by its associated normal version. Examples:\n        1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.\n      </p>\n    </li>\n    <li>\n      <p>\n        Build metadata MAY be denoted by appending a plus sign and a series of\n        dot separated identifiers immediately following the tall or pre-release\n        version. Identifiers MUST comprise only ASCII alphanumerics and hyphen\n        [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be\n        ignored when determining version precedence. Thus two versions that\n        differ only in the build metadata, have the same precedence. Examples:\n        1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.\n      </p>\n    </li>\n    <li>\n      <p>\n        Precedence refers to how versions are compared to each other when\n        ordered. Precedence MUST be calculated by separating the version into\n        venti, grande, tall and pre-release identifiers in that order (Build\n        metadata does not figure into precedence). Precedence is determined by\n        the first difference when comparing each of these identifiers from left\n        to right as follows: venti, grande, and tall versions are always\n        compared numerically. Example: 1.0.0 &lt; 2.0.0 &lt; 2.1.0 &lt; 2.1.1.\n        When venti, grande, and tall are equal, a pre-release version has lower\n        precedence than a normal version. Example: 1.0.0-alpha &lt; 1.0.0.\n        Precedence for two pre-release versions with the same venti, grande, and\n        tall version MUST be determined by comparing each dot separated\n        identifier from left to right until a difference is found as follows:\n        identifiers consisting of only digits are compared numerically and\n        identifiers with letters or hyphens are compared lexically in ASCII sort\n        order. Numeric identifiers always have lower precedence than non-numeric\n        identifiers. A larger set of pre-release fields has a higher precedence\n        than a smaller set, if all of the preceding identifiers are equal.\n        Example: 1.0.0-alpha &lt; 1.0.0-alpha.1 &lt; 1.0.0-alpha.beta &lt;\n        1.0.0-beta &lt; 1.0.0-beta.2 &lt; 1.0.0-beta.11 &lt; 1.0.0-rc.1 &lt;\n        1.0.0.\n      </p>\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.sass":
/*!********************************************!*\
  !*** ./src/app/about/about.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about, .license {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFByb2plY3RzXFxBbmd1bGFyXFxzdGFydmVyL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LCAubGljZW5zZVxyXG4gICAgbWFyZ2luLXRvcDogMzBweCIsIi5hYm91dCwgLmxpY2Vuc2Uge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.sass */ "./src/app/about/about.component.sass")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  padding: 30px 100px 30px 100px;\n}\n.main .header-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main .header-container .starbucks-versioning-header-img {\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n}\n.main .header-container .header {\n  margin: 0px;\n}\n.main .subheader {\n  margin-top: 5px;\n}\n.main .introduction {\n  margin-top: 30px;\n}\n.main .ol, .main li {\n  list-style-type: none;\n}\n.main .starbucks-versioning-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxBbmd1bGFyXFxzdGFydmVyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7QUNFWjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxxQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblxyXG4gICAgcGFkZGluZzogMzBweCAxMDBweCAzMHB4IDEwMHB4XHJcblxyXG4gICAgLmhlYWRlci1jb250YWluZXJcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICAuc3RhcmJ1Y2tzLXZlcnNpb25pbmctaGVhZGVyLWltZ1xyXG4gICAgICAgICAgICB3aWR0aDogNDhweFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHhcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4XHJcblxyXG4gICAgICAgIC5oZWFkZXJcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHhcclxuXHJcbiAgICAuc3ViaGVhZGVyXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4XHJcblxyXG4gICAgLmludHJvZHVjdGlvblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuXHJcbiAgICAub2wsIGxpXHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lXHJcblxyXG4gICAgLnN0YXJidWNrcy12ZXJzaW9uaW5nLWljb25cclxuICAgICAgICB3aWR0aDogMTZweFxyXG4gICAgICAgIGhlaWdodDogMTZweFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4XHJcbiIsIi5tYWluIHtcbiAgcGFkZGluZzogMzBweCAxMDBweCAzMHB4IDEwMHB4O1xufVxuLm1haW4gLmhlYWRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbiAuaGVhZGVyLWNvbnRhaW5lciAuc3RhcmJ1Y2tzLXZlcnNpb25pbmctaGVhZGVyLWltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5tYWluIC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbn1cbi5tYWluIC5zdWJoZWFkZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubWFpbiAuaW50cm9kdWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYWluIC5vbCwgLm1haW4gbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubWFpbiAuc3RhcmJ1Y2tzLXZlcnNpb25pbmctaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */"

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
        this.title = 'starver';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _specification_specification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specification/specification.component */ "./src/app/specification/specification.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _specification_specification_component__WEBPACK_IMPORTED_MODULE_4__["SpecificationComponent"],
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/faq/faq.component.sass":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq {\n  margin-top: 30px;\n}\n.faq h5, .faq p {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.faq p {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL0M6XFxQcm9qZWN0c1xcQW5ndWxhclxcc3RhcnZlci9zcmNcXGFwcFxcZmFxXFxmYXEuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGFBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFxXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4XHJcblxyXG4gICAgaDUsIHBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBcclxuXHJcbiAgICBwXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMFxyXG4iLCIuZmFxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5mYXEgaDUsIC5mYXEgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmZhcSBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html"),
        styles: [__webpack_require__(/*! ./faq.component.sass */ "./src/app/faq/faq.component.sass")]
    })
], FaqComponent);



/***/ }),

/***/ "./src/app/specification/specification.component.sass":
/*!************************************************************!*\
  !*** ./src/app/specification/specification.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".specification {\n  margin-top: 30px;\n}\n.specification h3 {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.specification .copied-txt {\n  font-size: 0.6em;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lmaWNhdGlvbi9DOlxcUHJvamVjdHNcXEFuZ3VsYXJcXHN0YXJ2ZXIvc3JjXFxhcHBcXHNwZWNpZmljYXRpb25cXHNwZWNpZmljYXRpb24uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NwZWNpZmljYXRpb24vc3BlY2lmaWNhdGlvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc3BlY2lmaWNhdGlvbi9zcGVjaWZpY2F0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWNpZmljYXRpb25cclxuICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgIGgzXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwXHJcblxyXG4gICAgLmNvcGllZC10eHRcclxuICAgICAgICBmb250LXNpemU6IC42ZW1cclxuICAgICAgICBtYXJnaW46IDBcclxuICAgICAgICBwYWRkaW5nOiAwIiwiLnNwZWNpZmljYXRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNwZWNpZmljYXRpb24gaDMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zcGVjaWZpY2F0aW9uIC5jb3BpZWQtdHh0IHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/specification/specification.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/specification/specification.component.ts ***!
  \**********************************************************/
/*! exports provided: SpecificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationComponent", function() { return SpecificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpecificationComponent = class SpecificationComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpecificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-specification',
        template: __webpack_require__(/*! raw-loader!./specification.component.html */ "./node_modules/raw-loader/index.js!./src/app/specification/specification.component.html"),
        styles: [__webpack_require__(/*! ./specification.component.sass */ "./src/app/specification/specification.component.sass")]
    })
], SpecificationComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Angular\starver\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map