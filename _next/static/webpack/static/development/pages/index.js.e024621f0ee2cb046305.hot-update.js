webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/elforastero/www/elforastero/components/sidebar.js";


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
      isHidden: true,
      animated: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSidebar", function () {
      var isHidden = _this.state.isHidden;

      if (isHidden) {
        window.localStorage.setItem('hide-sidebar', 'false');
      } else {
        window.localStorage.setItem('hide-sidebar', 'true');
      }

      _this.setState({
        isHidden: !isHidden
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isHidden: window.localStorage.getItem('hide-sidebar') === 'true',
        animated: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isHidden = _this$state.isHidden,
          animated = _this$state.animated;
      var _this$props = this.props,
          title = _this$props.title,
          cover = _this$props.cover,
          subtitle = _this$props.subtitle;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url('".concat(cover, "')")
        },
        className: "jsx-2791461091" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('sidebar', {
          'sidebar--hidden': isHidden,
          'sidebar--animated': animated
        }) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2791461091" + " " + "sidebar__branding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2791461091",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2791461091",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, subtitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: this.toggleSidebar,
        className: "jsx-2791461091" + " " + "sidebar__hide-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2791461091",
        css: ".sidebar.jsx-2791461091{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:35%;height:100vh;background-size:cover;background-repeat:no-repeat;background-position:center;position:-webkit-sticky;position:sticky;top:0;}.sidebar--monochrome.jsx-2791461091{-webkit-filter:grayscale(60%);filter:grayscale(60%);}.sidebar__branding.jsx-2791461091{font-size:1.3em;line-height:1.8em;color:#f4f4f4;text-shadow:-2px 2px 2px #232323;text-align:center;margin-bottom:50%;}.sidebar__hide-area.jsx-2791461091{width:70px;height:100%;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;cursor:pointer;position:absolute;right:0;background-color:rgba(0,0,0,.05);-webkit-transition:all .2s ease-out;transition:all .2s ease-out;}.sidebar__hide-area.jsx-2791461091:hover{background-color:rgba(0,0,0,.2);}.sidebar--hidden.jsx-2791461091{margin-left:-32%;opacity:.05;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;}.sidebar--hidden.jsx-2791461091:hover{opacity:1;}.sidebar--animated.jsx-2791461091{-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out;}.sidebar.jsx-2791461091 .sidebar__hide-area.jsx-2791461091{cursor:w-resize;}.sidebar--hidden.jsx-2791461091 .sidebar__hide-area.jsx-2791461091{cursor:e-resize;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGZvcmFzdGVyby93d3cvZWxmb3Jhc3Rlcm8vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDNkIsQUFHa0IsQUFhUyxBQUlOLEFBU0wsQUFXd0IsQUFJbEIsQUFNUCxBQUlxQixBQUlmLEFBSUEsVUFYcEIsQ0FyQmdCLEtBVE0sQUFzQ3RCLEFBSUEsQ0FsQmdCLE1BZFEsTUFlWSxHQUxwQyxFQW5Ca0IsY0FDbUIsSUFOckMsa0JBc0NBLElBbkQyQixPQW9CTCxjQVFILElBUEcsRUFzQnRCLFNBZHNCLE9BUHRCLFdBUVksUUFDNEIsaUNBQ1IsSUEvQlAsNERBZ0N6Qix5Q0EvQmMsVUFDRyxhQUNTLHNCQUNNLDRCQUNELDJCQUNYLHdDQUNWLE1BQ1YiLCJmaWxlIjoiL1VzZXJzL2VsZm9yYXN0ZXJvL3d3dy9lbGZvcmFzdGVyby9jb21wb25lbnRzL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgICAgICAgICAgIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGlzSGlkZGVuOiB0cnVlLFxuICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzSGlkZGVuOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZGUtc2lkZWJhcicpID09PSAndHJ1ZScsXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc0hpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoaXNIaWRkZW4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlkZS1zaWRlYmFyJywgJ2ZhbHNlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZGUtc2lkZWJhcicsICd0cnVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNIaWRkZW46ICFpc0hpZGRlbiB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNIaWRkZW4sIGFuaW1hdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBjb3Zlciwgc3VidGl0bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcygnc2lkZWJhcicsIHsgJ3NpZGViYXItLWhpZGRlbic6IGlzSGlkZGVuLCAnc2lkZWJhci0tYW5pbWF0ZWQnOiBhbmltYXRlZCB9KSB9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7Y292ZXJ9JylgIH0gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfX2JyYW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57IHRpdGxlIH08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57IHN1YnRpdGxlIH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX19oaWRlLWFyZWFcIiBvbkNsaWNrPXsgdGhpcy50b2dnbGVTaWRlYmFyIH0gLz5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+eyBgXG4uc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG59XG5cbi5zaWRlYmFyLS1tb25vY2hyb21lIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg2MCUpO1xufVxuXG4uc2lkZWJhcl9fYnJhbmRpbmcge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCAycHggIzIzMjMyMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTAlO1xufVxuXG4uc2lkZWJhcl9faGlkZS1hcmVhIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuLnNpZGViYXJfX2hpZGUtYXJlYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7XG59XG5cbi5zaWRlYmFyLS1oaWRkZW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzIlO1xuICAgIG9wYWNpdHk6IC4wNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcbn1cblxuLnNpZGViYXItLWhpZGRlbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNpZGViYXItLWFuaW1hdGVkIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lkZWJhciAuc2lkZWJhcl9faGlkZS1hcmVhIHtcbiAgICBjdXJzb3I6IHctcmVzaXplO1xufVxuXG4uc2lkZWJhci0taGlkZGVuIC5zaWRlYmFyX19oaWRlLWFyZWEge1xuICAgIGN1cnNvcjogZS1yZXNpemU7XG59XG4gICAgICAgIGAgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/elforastero/www/elforastero/components/sidebar.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.e024621f0ee2cb046305.hot-update.js.map