webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/readingProgress.js":
/*!***************************************!*\
  !*** ./components/readingProgress.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollprogress */ "./node_modules/scrollprogress/dist/scrollProgress.js");
/* harmony import */ var scrollprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollprogress__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elforastero/www/elforastero/components/readingProgress.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      progress: 0
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.progressObserver = new scrollprogress__WEBPACK_IMPORTED_MODULE_1___default.a(function (x, y) {
        _this2.setState({
          progress: y * 100
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.progressObserver.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        backgroundColor: 'rebeccapurple',
        height: '5px',
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: "".concat(this.state.progress, "%")
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-bar",
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./layouts/post.js":
/*!*************************!*\
  !*** ./layouts/post.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_readingProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/readingProgress */ "./components/readingProgress.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./layouts/styles.js");
var _jsxFileName = "/Users/elforastero/www/elforastero/layouts/post.js";







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      cover = _ref.cover,
      date = _ref.date,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3910941996" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    subtitle: subtitle,
    cover: cover,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3910941996" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3910941996" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_readingProgress__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3910941996",
    css: "#__next{min-height:100%;}.wrapper{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background-color:#fff;}.content{-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;max-width:900px;width:100%;padding:50px 30px;background-color:#fff;}.content img{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGZvcmFzdGVyby93d3cvZWxmb3Jhc3Rlcm8vbGF5b3V0cy9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCNEIsQUFHaUMsQUFJTixBQUtMLEFBU0UsQUFRUSxZQXJCSixHQXNCZixDQTFCQSxpQkFTZSxNQVNHLGdCQUNMLFdBQ08sa0JBQ0ksRUFoQnhCLG9CQWlCQSxDQVp3Qiw4RUFDSCw2RkFDSCxnQkFDTSxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2VsZm9yYXN0ZXJvL3d3dy9lbGZvcmFzdGVyby9sYXlvdXRzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBOYXZpZ2F0aW9uICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IEZvb3RlciAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgUmVhZGluZ1Byb2dyZXNzIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhZGluZ1Byb2dyZXNzJztcbmltcG9ydCBTdHlsZXMgICAgICAgICAgZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgc3VidGl0bGUsIGNvdmVyLCBkYXRlLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxTaWRlYmFyIHRpdGxlPXsgdGl0bGUgfSBzdWJ0aXRsZT17IHN1YnRpdGxlIH0gY292ZXI9eyBjb3ZlciB9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8UmVhZGluZ1Byb2dyZXNzIC8+XG4gICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57IGBcbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxleDogMSAwO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCB9PC9zdHlsZT5cbiAgICAgICAgPFN0eWxlcyAvPlxuICAgIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=/Users/elforastero/www/elforastero/layouts/post.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
});

/***/ }),

/***/ "./node_modules/scrollprogress/dist/scrollProgress.js":
/*!************************************************************!*\
  !*** ./node_modules/scrollprogress/dist/scrollProgress.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* scrollprogress v3.0.2 - 2017 Jeremias Menichelli - MIT License */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /**
   * Fallback noop function
   * @method noop
   * @returns {undefined}
   */
  function noop() {}

  /**
   * ScrollProgress class constructor
   * @constructor ScrollProgress
   * @param {Function} handleUpdate method to call on scroll update
   * @returns {undefined}
   */
  var ScrollProgress = function(handleUpdate) {
    // assign function to call on update
    this._handleUpdate = typeof handleUpdate === 'function'
      ? handleUpdate
      : noop;

    // set initial values
    this._viewportHeight = this._getViewportHeight();
    this._viewportWidth = this._getViewportWidth();

    this._progress = this._getProgress();

    // trigger initial update function
    this._handleUpdate(this._progress.x, this._progress.y);

    // bind event functions
    this._onScroll = this._onScroll.bind(this);
    this._onResize = this._onResize.bind(this);

    // add event listeners
    window.addEventListener('scroll', this._onScroll);
    window.addEventListener('resize', this._onResize);
  };

  /**
   * Get vertical trajectory of the viewport
   * @method _getViewportHeight
   * @returns {Number}
   */
  ScrollProgress.prototype._getViewportHeight = function() {
    return document.body.scrollHeight - window.innerHeight;
  };

  /**
   * Get horizontal trajectory of the viewport
   * @method _getViewportWidth
   * @returns {Number}
   */
  ScrollProgress.prototype._getViewportWidth = function() {
    return document.body.scrollWidth - window.innerWidth;
  };

  /**
   * Get scroll progress on both axis
   * @method _getProgress
   * @returns {Object}
   */
  ScrollProgress.prototype._getProgress = function() {
    var x = typeof window.scrollX === 'undefined'
      ? window.pageXOffset
      : window.scrollX;
    var y = typeof window.scrollY === 'undefined'
      ? window.pageYOffset
      : window.scrollY;

    return {
      x: this._viewportWidth === 0
        ? 0
        : x / this._viewportWidth,
      y: this._viewportHeight === 0
        ? 0
        : y / this._viewportHeight
    };
  };

  /**
   * Get scroll progress on both axis
   * @method _getProgress
   * @returns {undefined}
   */
  ScrollProgress.prototype._onScroll = function() {
    this._progress = this._getProgress();
    this._handleUpdate(this._progress.x, this._progress.y);
  };

  /**
   * Update viewport metrics, recalculate progress and call update callback
   * @method _onResize
   * @returns {undefined}
   */
  ScrollProgress.prototype._onResize = function() {
    this._viewportHeight = this._getViewportHeight();
    this._viewportWidth = this._getViewportWidth();

    this._progress = this._getProgress();

    // trigger update function
    this._handleUpdate(this._progress.x, this._progress.y);
  };

  /**
   * Trigger update callback
   * @method trigger
   * @returns {undefined}
   */
  ScrollProgress.prototype.trigger = function() {
    this._handleUpdate(this._progress.x, this._progress.y);
  };

  /**
   * Destroy scroll observer, remove listeners and update callback
   * @method destroy
   * @returns {undefined}
   */
  ScrollProgress.prototype.destroy = function() {
    window.removeEventListener('scroll', this._onScroll);
    window.removeEventListener('resize', this._onResize);
    this._handleUpdate = null;
  };

  return ScrollProgress;

})));


/***/ })

})
//# sourceMappingURL=_app.js.69604902644b86c63018.hot-update.js.map