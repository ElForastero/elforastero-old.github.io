((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/migracija-s-ubuntu-na-mac-mini.js"],{

/***/ "./node_modules/@mdx-js/tag/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__(/*! ./mdx-tag */ "./node_modules/@mdx-js/tag/dist/mdx-tag.js");

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__(/*! ./mdx-provider */ "./node_modules/@mdx-js/tag/dist/mdx-provider.js");

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-provider.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/mdx-provider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createReactContext2 = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-tag.js":
/*!**************************************************!*\
  !*** ./node_modules/@mdx-js/tag/dist/mdx-tag.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _mdxProvider = __webpack_require__(/*! ./mdx-provider */ "./node_modules/@mdx-js/tag/dist/mdx-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function (_Component) {
  _inherits(MDXTag, _Component);

  function MDXTag() {
    _classCallCheck(this, MDXTag);

    return _possibleConstructorReturn(this, (MDXTag.__proto__ || Object.getPrototypeOf(MDXTag)).apply(this, arguments));
  }

  _createClass(MDXTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          parentName = _props.parentName,
          _props$props = _props.props,
          childProps = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          _props$components = _props.components,
          components = _props$components === undefined ? {} : _props$components,
          Layout = _props.Layout,
          layoutProps = _props.layoutProps;


      var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

      if (Layout) {
        (0, _hoistNonReactStatics2.default)(this, Layout);

        return _react2.default.createElement(
          Layout,
          _extends({ components: components }, layoutProps),
          _react2.default.createElement(
            Component,
            childProps,
            children
          )
        );
      }

      return _react2.default.createElement(
        Component,
        childProps,
        children
      );
    }
  }]);

  return MDXTag;
}(_react.Component);

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/migracija-s-ubuntu-na-mac-mini.mdx":
/*!**************************************************!*\
  !*** ./pages/migracija-s-ubuntu-na-mac-mini.mdx ***!
  \**************************************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/tag */ "./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/elforastero/www/elforastero/pages/migracija-s-ubuntu-na-mac-mini.mdx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var meta = {
  title: "Миграция с Ubuntu на Mac Mini",
  subtitle: "Как это было и к чему привело",
  date: '2016-09-15',
  categories: ['операционки'],
  tag: 'os',
  cover: 'wood-coffee-iphone-notebook.jpg'
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0421\u043F\u0443\u0441\u0442\u044F \u0433\u043E\u0434\u0430 4 \u0442\u0435\u0441\u043D\u043E\u0439 \u0434\u0440\u0443\u0436\u0431\u044B \u0441 Ubuntu \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u041E\u0421 \u0437\u0430\u0434\u0443\u043C\u0430\u043B\u0441\u044F \u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043D\u0430 Mac, \u0438\u0431\u043E \u043A\u0442\u043E \u0436 \u043D\u0435 \u0441\u043B\u044B\u0448\u0430\u043B \u043F\u0440\u043E \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438,\n\u043D\u0435\u0441\u0443\u0449\u0443\u044E \u043D\u0438\u0440\u0432\u0430\u043D\u0443 \u0441\u0432\u043E\u0438\u043C \u0445\u043E\u0437\u044F\u0435\u0432\u0430\u043C. Ubuntu \u043A \u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u043C\u0435\u043D\u0442\u0443 \u0443\u0436\u0435 \u0443\u0441\u043F\u0435\u043B\u0430 \u0438\u0437\u0440\u044F\u0434\u043D\u043E \u043F\u043E\u0434\u043D\u0430\u0434\u043E\u0435\u0441\u0442\u044C \u0438 \u043F\u043E\u0442\u0440\u0435\u043F\u0430\u0442\u044C \u043D\u0435\u0440\u0432\u044B, \u0430 \u0441\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B \u043D\u0430 youtube \u0441 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0439,\n\u043F\u043B\u0430\u0432\u043D\u043E\u0439 \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 Mac OS \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0441\u043B\u044E\u043D\u043E\u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435. \u0418 \u044D\u0442\u043E \u043D\u0435 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u0433\u0434\u0430 \u043F\u044B\u0442\u0430\u0435\u0448\u044C\u0441\u044F \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438\u0437 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u043B\u0435\u0433\u043A\u043E\u0432\u0435\u0441\u043D\u043E\u0439\n\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0448\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043A\u0438\u0439 \u043D\u043E\u0436 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0441\u0442\u0441\u043A\u0438\u0445 \u0436\u0435\u043B\u0430\u043D\u0438\u0439."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u041D\u0435\u043B\u044C\u0437\u044F \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0442 Canonical \u043F\u043B\u043E\u0445\u0430 \u0438 \u0428\u0430\u0442\u0442\u043B\u0432\u043E\u0440\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442 \u0434\u043E\u0445\u043B\u0443\u044E \u0441\u043E\u0431\u0430\u043A\u0443. \u041D\u0430\u043F\u0440\u043E\u0442\u0438\u0432, \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043A\u0430 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F, \u043E\u0434\u043D\u0430\u043A\u043E\n\u0440\u043E\u0432\u043D\u043E \u0434\u043E \u0442\u0435\u0445 \u043F\u043E\u0440, \u043F\u043E\u043A\u0430 \u0432\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043E\u0442 \u043D\u0435\u0435 \u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E. \u0418 \u0437\u0434\u0435\u0441\u044C, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0412\u044B \u043D\u0435 \u0433\u0438\u043A, \u0443 \u0412\u0430\u0441 \u043D\u0435\u0442 \u043D\u0435\u0441\u0447\u0435\u0440\u043F\u0430\u0435\u043C\u043E\u0433\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043A\u0435 \u0434\u043E \u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043B\u0430\u0437\u0438\u044F,\n\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0448\u044C \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u0437\u043E\u0439\u043B\u0438\u0432\u044B\u043C\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430\u043C\u0438, \u0442\u044F\u043D\u0443\u0449\u0438\u043C\u0438\u0441\u044F \u043E\u0442 \u0440\u0435\u043B\u0438\u0437\u0430 \u043A \u0440\u0435\u043B\u0438\u0437\u0443, \u043E\u0442 \u0430\u043F\u0434\u0435\u0439\u0442\u0430 \u043A \u0430\u043F\u0434\u0435\u0439\u0442\u0443. \u041F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0438 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441,\n\u0445\u043E\u0440\u043E\u0448\u0430\u044F \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u043E\u0441\u0442\u044C, \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043F\u0440\u0438\u0432\u044B\u0447\u043D\u043E\u0433\u043E \u043A\u0440\u043E\u0441\u0441\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0444\u0442\u0430 \u043F\u043E\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0435\u0433\u043E 90% \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0422\u0430\u043A \u0447\u0442\u043E \u0436\u0435 \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Ubuntu \u043F\u043E\u0445\u043E\u0436\u0430 \u043D\u0430 \u044D\u0434\u0430\u043A\u043E\u0432\u043E \u043B\u0435\u043D\u0438\u0432\u043E\u0433\u043E \u0434\u0435\u0432\u0435\u043B\u043E\u043F\u0435\u0440\u0430 - \u0432\u043E\u0442 \u0442\u0435\u0431\u0435 PHPStorm, \u043D\u043E \u043C\u043D\u0435 \u043B\u0435\u043D\u044C \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0448\u0440\u0438\u0444\u0442\u043E\u0432. \u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0441\u0430\u043C!\n\u0418 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0448\u044C \u043F\u0440\u0438\u0434\u0443\u043C\u044B\u0432\u0430\u0442\u044C: \u0433\u0443\u0433\u043B\u0438\u0448\u044C, \u0441\u0442\u0430\u0432\u0438\u0448\u044C \u043F\u0430\u0442\u0447\u0435\u043D\u044B\u0439 JDK \u0438\u043B\u0438 fontconfig-infinality, \u0443\u0434\u0430\u043B\u044F\u0435\u0448\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0443\u044E jre \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u0443\u044E \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 PHPStorm \u0438\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438,\n\u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u0443\u0435\u0448\u044C \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u0438\u043F\u0430\u043C\u0438 \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u043D\u0438\u044F. \u0413\u043E\u0432\u043E\u0440\u0438\u0448\u044C \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0443 \u0442\u0435\u0431\u044F \u0432 \u0445\u0440\u043E\u043C\u0435 \u0448\u0440\u0438\u0444\u0442\u044B \u0441\u0442\u0430\u043B\u0438 \u0436\u0438\u0442\u044C \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u044C\u044E, \u0434\u0435\u0440\u0433\u0430\u0442\u044C\u0441\u044F, \u0438\u043B\u0438 \u0432\u043E\u043E\u0431\u0449\u0435 \u043F\u0440\u043E\u043F\u0430\u043B\u043E \u0441\u0433\u043B\u0430\u0436\u0438\u0432\u0430\u043D\u0438\u0435?\n\u0418\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443 \u0442\u0435\u0431\u044F \u0441\u0442\u0430\u043B\u0438 \u0432\u0438\u0441\u043D\u0443\u0442\u044C \u0438\u043A\u0441\u044B \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C? \u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0441\u0430\u043C! \u0418 \u0441\u043D\u043E\u0432\u0430 \u0438\u0434\u0435\u0448\u044C \u0433\u0443\u0433\u043B\u0438\u0442\u044C."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0434\u0430\u0436\u0435 \u043D\u0435 \u0432 \u0441\u0430\u043C\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043A\u0435 \u0430 \u0432\u043E \u0432\u0441\u0435\u0445 Linux \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u0430\u0445 \u043A\u0430\u043A \u0442\u0430\u043A\u043E\u0432\u044B\u0445. \u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F \u0443\u0441\u043F\u0435\u043B \u043F\u043E\u0442\u044B\u043A\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043E\u0432:\nUbuntu, Xubuntu, Kubuntu, Lubuntu, Elementary \u0438 \u0434\u0430\u0436\u0435 Arch. \u041D\u043E \u0432 \u0441\u0438\u043B\u0443 \u043D\u0435\u043E\u0431\u044A\u044F\u0441\u043D\u0438\u043C\u044B\u0445 \u0432\u0441\u0435\u043B\u0435\u043D\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u043B\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043A Unity, \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043C\u043E\u0433\u0443 \u0441 \u044D\u0442\u0438\u043C \u043F\u043E\u0434\u0435\u043B\u0430\u0442\u044C.\n\u0412\u043E\u0437\u043E\u043C\u0436\u043D\u043E \u0434\u0435\u043B\u043E \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0438, \u0430 \u043C\u043E\u0436\u0435\u0442 \u0442\u0430\u043C \u0432\u0441\u0435 \u0431\u044B\u043B\u043E \u0435\u0449\u0435 \u0445\u0443\u0436\u0435."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Finaly, \u0431\u044B\u043B\u043E \u0440\u0435\u0448\u0435\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0434\u0443\u0448\u0443 \u044F\u0431\u043B\u043E\u0447\u043D\u043E\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u0438 \u0437\u0430 \u043A\u0443\u0441\u043E\u0447\u0435\u043A \u0441\u0447\u0430\u0441\u0442\u044C\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0412\u044B\u0431\u043E\u0440 \u043F\u0430\u043B \u043D\u0430 Mac Mini, \u043A\u0430\u043A \u043D\u0430 \u043C\u043B\u0430\u0434\u0448\u0443\u044E \u043C\u0430\u0448\u0438\u043D\u043A\u0443 \u0432\u0441\u0435\u0433\u043E Mac OS \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u0430, \u043D\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u043A\u0443\u0441\u0430\u044E\u0449\u0443\u044E\u0441\u044F \u0446\u0435\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0449\u0443\u044E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044E \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/design_hero_image_large.png",
      "alt": "Mac Mini"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0412\u0441\u0442\u0430\u043B \u0432\u043E\u043F\u0440\u043E\u0441 \u043E \u0432\u044B\u0431\u043E\u0440\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438. \u041D\u0430 \u043B\u0435\u0442\u043E 2016 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u0434\u0432\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0434\u0435\u043B\u0438 2012 \u0438 2014 \u0433\u043E\u0434\u0430.\n\u0421 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C\u044E 80% Apple \u0434\u043E\u043B\u0436\u043D\u0430 \u0430\u043D\u043E\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0433\u0434\u0435-\u0442\u043E \u0432 \u043A\u043E\u043D\u0446\u0435 \u043E\u043A\u0442\u044F\u0431\u0440\u044F, \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 iPhone 7.\n\u0422\u0435\u043C \u0431\u043E\u043B\u0435\u0435 \u0447\u0442\u043E INTEL \u043A\u0430\u043A \u0440\u0430\u0437 \u043F\u0443\u0441\u0442\u0438\u043B\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u0441\u0435\u0434\u044C\u043C\u043E\u0435 \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u043E\u0432 Kaby Lake. \u041D\u043E \u0436\u0434\u0430\u0442\u044C \u0434\u043E\u043B\u0433\u043E \u0438 \u043D\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0432\u044B\u043B\u043E\u0436\u0438\u0442\u044C \u0437\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439\n\u043C\u0438\u043D\u0438\u043A \u0440\u0430\u0437\u0430 \u0432 3 \u0431\u043E\u043B\u044C\u0448\u0435."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u041F\u043E\u0441\u043B\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0434\u0435\u0442\u0430\u043B\u044F\u043C\u0438 \u043E\u0431\u043E\u0438\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u043A\u0440\u0443\u0433 \u0441\u0443\u0437\u0438\u043B\u0441\u044F \u0434\u043E \u043E\u0434\u043D\u043E\u0433\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430, \u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0434\u0435\u043B\u0438 Late 2012. \u0423\u0432\u044B, \u043D\u043E \u0432 Mac Mini 2014 \u0433\u043E\u0434\u0430\nApple \u0440\u0435\u0448\u0438\u043B\u0430 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u043C\u043E\u0441\u0442\u044C\u044E \u0432 \u0443\u0433\u043E\u0434\u0443 \u0443\u0434\u0435\u0448\u0435\u0432\u043B\u0435\u043D\u0438\u044E \u0438 \u043D\u0430\u043F\u0440\u043E\u0447 \u043B\u0438\u0448\u0438\u043B\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0430\u043F\u0433\u0440\u0435\u0439\u0434\u0438\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443. \u0415\u0441\u043B\u0438 \u0432 \u043C\u0438\u043D\u0438\u043A\u0435 2012 \u0433\u043E\u0434\u0430\n\u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u0438\u0441\u044C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u044B INTEL \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F, \u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0431\u0437\u0430\u0432\u0435\u043B\u0430\u0441\u044C \u0443\u0440\u0435\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u043A\u0430\u043C\u0443\u0448\u043A\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u0438 \u0432\nMacBook Air \u0442\u043E\u0433\u043E \u0436\u0435 \u043F\u0435\u0440\u0438\u043E\u0434\u0430. \u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C \u0440\u0430\u0441\u043F\u0430\u044F\u043D\u0430 \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u0435\n\u0430 \u0442\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C M2, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0430\u043B\u043E \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0448\u0442\u0443\u0447\u043D\u044B\u0435 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u044B \u0434\u0430\u0436\u0435 \u0432 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0440\u0438\u0442\u0435\u0439\u043B\u0435\u0440\u0441\u043A\u0438\u0445 \u0441\u0435\u0442\u044F\u0445\n\u0432\u0440\u043E\u0434\u0435 \u0441\u0438\u0442\u0438\u043B\u0438\u043D\u043A\u0430, \u0442\u0430\u043A \u0435\u0449\u0435 \u0438 \u0441\u0442\u043E\u044F\u0442 - \u043C\u0430\u043C\u0430 \u043D\u0435 \u0433\u043E\u0440\u044E\u0439! \u0412\u044B\u0445\u043E\u0434 - \u043B\u0438\u0431\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u0442\u043E\u043F\u043E\u0432\u0443\u044E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044E, \u043B\u0438\u0431\u043E \u0431\u0440\u0430\u0442\u044C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0430 2 \u0433\u043E\u0434\u0430 \u0441\u0442\u0430\u0440\u0448\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043A \u0442\u043E\u043C\u0443 \u0436\u0435\n\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u0441\u0438\u043B\u0443 \u0431\u043E\u043B\u0435\u0435 \u043C\u043E\u0449\u043D\u043E\u0433\u043E CPU."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u041F\u043E \u0438\u0442\u043E\u0440\u0430\u043C \u0441\u043E\u0438\u0441\u043A\u0430\u043D\u0438\u0439 \u044F \u0441\u0442\u0430\u043B \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0435\u043C \u043C\u043B\u0430\u0434\u0448\u0435\u0439 \u043C\u043E\u0434\u0435\u043B\u0438 \u043B\u0438\u043D\u0435\u0439\u043A\u0438 Late 2012 \u0441 4GB \u041E\u0417\u0423, \u0432\u0438\u043D\u0447\u0435\u0441\u0442\u0435\u0440\u043E\u043C \u043D\u0430 500GB \u0438 \u0434\u0432\u0443\u0445\u044A\u044F\u0434\u0435\u0440\u043D\u044B\u043C i5. \u0421\u0440\u0430\u0437\u0443 \u0436\u0435 \u0431\u044B\u043B\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430\n\u043F\u043B\u0430\u043D\u043A\u0430 \u043F\u0430\u043C\u044F\u0442\u0438 \u043D\u0430 8GB, \u0447\u0442\u043E \u0432 \u0441\u0443\u043C\u043C\u0435 \u0441 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0440\u043E\u0434\u043D\u044B\u0445 \u0434\u0430\u043B\u043E 10GB RAM. \u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u043D\u0435\u0445\u0432\u0430\u0442\u043A\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043A\u0438 \u043D\u0435 \u043E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F, \u043D\u043E \u043A\u0430\u043A \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442 \u043F\u043E\u0434\u043E\u0437\u0440\u0435\u043D\u0438\u044F - \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\n\u0432\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u0438 \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u043E\u0431\u044A\u0435\u043C \u043F\u0430\u043C\u044F\u0442\u0438 \u0434\u043E 16GB."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/mac_info.png",
      "alt": "Mac info"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "16GB should be enough for everyone")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u0411\u0443\u0434\u044C\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u043A \u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043C\u0430\u0448\u0438\u043D\u043A\u0443 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0430\u043F\u0433\u0440\u0435\u0439\u0434\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0436\u0435\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043F\u0435\u0440\u0432\u0430 \u043E\u0431\u0437\u0430\u0432\u0435\u0441\u0442\u0438\u0441\u044C \u043F\u0440\u044F\u043C\u044B\u043C\u0438 \u0440\u0443\u043A\u0430\u043C\u0438 \u0438 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u0440\u0430\u0437\u0431\u043E\u0440\u043A\u0438 \u043D\u0430 YT, \u0438\u043B\u0438 \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u044C\nifixit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u0415\u0441\u043B\u0438 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u043A\u0435 \u043D\u0435\u0447\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u0433\u0440\u0435\u0442\u044C \u0437\u0438\u043C\u043E\u0439 \u0440\u0443\u043A\u0438, \u0442\u043E \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0436\u0435\u0441\u0442\u043A\u0438\u0439 \u0434\u0438\u0441\u043A \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439\n\u0442\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C, \u0447\u0435\u043C \u044F \u0438 \u0437\u0430\u043D\u044F\u043B\u0441\u044F \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C. \u041F\u0440\u0438\u0440\u043E\u0441\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0442\u0430\u0440\u043E\u0433\u043E 90 \u0433\u0438\u0433\u043E\u0432\u043E\u0433\u043E Kingston'a \u043D\u0430 MLT \u043F\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u044F\u043C \u0440\u0430\u0437\u0430 \u0432 3.\n\u0418 \u044D\u0442\u043E \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0435\u0433\u043E \u043D\u0435\u0442\u043E\u0440\u043E\u043F\u043B\u0438\u0432\u043E\u0441\u0442\u0438. \u0420\u0430\u043D\u044C\u0448\u0435 \u043D\u0430 \u043D\u0435\u043C \u0441\u0442\u043E\u044F\u043B\u0430 Ubuntu, \u0442\u0435\u043F\u0435\u0440\u044C \u043A\u0440\u0443\u0442\u0438\u0442\u044C\u0441\u044F Mac OS."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043D\u0443\u0436\u043D\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C Trim \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 SSD. \u0412 \u044F\u0434\u0440\u0435 Linux \u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0435\u043D \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0437\u0434\u0435\u0441\u044C \u0436\u0435 \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043B\u0438\u0448\u043D\u0438\u0445\n\u0442\u0435\u043B\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0439. \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u044C \u043E\u0442 Apple, \u0442\u043E Trim \u0442\u0430\u043C \u0432\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u0438 \u044D\u0442\u043E\u0433\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C \u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u0438\u043A\u0443\u043F\u0438\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0448\u0443\u0441\u0442\u0440\u044B\u0439 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440, \u0445\u043E\u0442\u044F \u0441\u0443\u0434\u044F\n\u043F\u043E \u0442\u0435\u0441\u0442\u0430\u043C \u043F\u0440\u0438\u0440\u043E\u0441\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438\u0434\u0435\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0437\u0430 \u0441\u0447\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0447\u0442\u0435\u043D\u0438\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u0442\u043E\u0438\u0442 \u0434\u0432\u0430\u0436\u0434\u044B \u043F\u043E\u0434\u0443\u043C\u0430\u0442\u044C. \u0414\u043B\u044F \u043C\u0435\u043D\u044F \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E\u0439 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F\n\u0438\u043C\u0435\u043D\u043D\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u0430 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043D\u0430 \u0434\u0438\u0441\u043A \u0447\u0442\u043E-\u0442\u043E \u0440\u0435\u0434\u043A\u043E \u0438 \u0432 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043E\u0431\u044A\u0435\u043C\u0430\u0445. \u0415\u0441\u043B\u0438 \u0432 \u0412\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u0445\u043E\u0434\u044F\u0442 \u0447\u0430\u0441\u0442\u044B\u0435 \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043E\u0431\u044A\u0435\u043C\u044B \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0434\u0438\u0441\u043A,\n\u0432\u0440\u043E\u0434\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u0438\u0434\u0435\u043E \u0438\u043B\u0438 \u0444\u043E\u0442\u043E, \u0442\u043E\u0433\u0434\u0430, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0441\u043A\u0443\u043F\u0438\u0442\u044C\u0441\u044F \u043D\u0430 SSD."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/DiskSpeedTestHDD.png",
      "alt": "HDD Apple 500GB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/DiskSpeedTestSSD.png",
      "alt": "SSD Kingston v200+ 90GB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u0421\u043B\u0435\u0432\u0430 HDD, \u0441\u043F\u0440\u0430\u0432\u0430 SSD. \u0421\u043A\u0440\u0438\u043D\u044B \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u0441\u0430\u043C\u0438 \u0437\u0430 \u0441\u0435\u0431\u044F. \u0421 SSD \u0432\u0440\u0435\u043C\u044F \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043C\u0430\u0448\u0438\u043D\u043A\u0438 \u0434\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043A\u0440\u0430\u043D\u0430 \u043B\u043E\u0433\u0438\u043D\u0430 \u0443\u043F\u0430\u043B\u043E \u0441 ~40 \u0434\u043E ~9 \u0441\u0435\u043A\u0443\u043D\u0434.\n\u0414\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u043C\u043E\u0436\u043D\u043E \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0442\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u0442\u0430\u043B\u0430 \u0433\u0440\u0443\u0437\u0438\u0442\u044C\u0441\u044F \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u044B\u0441\u0442\u0440\u0435\u0435, \u0438 \u044D\u0442\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0435 \u0440\u0430\u0434\u043E\u0432\u0430\u0442\u044C."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "h4",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u0422\u0435 \u043A\u043E\u043C\u0443 \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 Linux \u0431\u0443\u0434\u0443\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0431\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u043A\u0430\u043A \u0443 \u0441\u0435\u0431\u044F \u0434\u043E\u043C\u0430. \u041F\u0440\u0438\u043C\u0435\u0440\u043D\u043E - \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0441\u043C\u043E\u0442\u0435\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435\n\u0441\u043E\u0444\u0442\u0430 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u0412 Mac \u043D\u0435 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0430\u043A\u0435\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0432\u0440\u043E\u0434\u0435 apt \u0432 Ubuntu - based \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u0430\u0445. \u0414\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0434\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://brew.sh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "brew.sh"), "{:target=\"_blank\"}.\n\u042D\u0442\u043E \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u043E\u0434\u0430 \u043F\u0430\u043A\u0435\u0442\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u044B \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443: mc, wget, php-mcrypt... \u0427\u0430\u0441\u0442\u044C \u0441\u043E\u0444\u0442\u0430 \u0443\u0436\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 Mac OS \u0438\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438,\n\u043D\u043E \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0439 \u0432\u0441\u0435-\u0440\u0430\u0432\u043D\u043E \u043F\u0440\u0438\u0439\u0434\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C brew.sh \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043D\u0430\u043B\u043E\u0433."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/software.png",
      "alt": "Software"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u0441\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043A \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0431\u0438\u043D\u0430\u0440\u043D\u0438\u043A\u0430 \u0432 \u043F\u0430\u043F\u043A\u0443 Applications. \u0414\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043D\u0443\u0436\u043D\u043E \u0435\u0433\u043E \u043E\u0442\u0442\u0443\u0434\u0430 \u0443\u0434\u0430\u043B\u0438\u0442\u044C.\n\u0412\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 FM Finder. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 dpkg, \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439. \u0412\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0438 \u0434\u043B\u044F \u0445\u043E\u043C\u044F\u043A\u043E\u0432."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u0418\u0437 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "PHPStorm"), " \u0434\u043B\u044F \u0442\u0435\u0445 \u043A\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u043D\u0430 PHP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Sequel Pro"), " \u043A\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u0430\u044F \u0437\u0430\u043C\u0435\u043D\u0430 PhpMyAdmin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "iTerm2"), " \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u044D\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u0430. \u0423\u043C\u0435\u0435\u0442 \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u0442\u044C \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438, \u0438\u043C\u0435\u0435\u0442 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 shell"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Cloud App"), " \u0432\u043C\u0435\u0441\u0442\u043E Shutter \u0438 Joxi \u0432 Ubuntu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Vox"), " - \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u043B\u0435\u0435\u0440 \u0443\u043C\u0435\u044E\u0449\u0438\u0439 \u043C\u043D\u043E\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 flac \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 losless"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "VLC"), " \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0444\u0438\u043B\u044C\u043C\u043E\u0432. QuickTime \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u043E\u0447\u0435\u043D\u044C \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0432"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u0412\u0441\u044F\u043A\u0438\u0435 \u043C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u044B \u0432\u0440\u043E\u0434\u0435 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Telegram"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Slack"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Skype"), "...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u041D\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0438\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u0440\u0430\u0441\u043B\u0430\u0434\u043A\u0438 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Dvorak for programmers"), " \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0432\u0435\u0441\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043B\u0430\u0434\u043E\u043A \u043D\u0430 Caps lock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u0412 Mac OS \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u043E\u0444\u0442\u0430 \u0438 \u043F\u043E\u0438\u0441\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u0435\u0441\u0442\u044C Spotlight. \u0414\u043E \u044D\u0442\u043E\u0433\u043E \u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B Synapse, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043D\u0435\u043B\u044C\u0437\u044F \u043C\u0435\u043D\u044F\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B.\n\u0411\u0430\u0433 \u0435\u0441\u0442\u044C, \u043E\u0442\u043F\u0438\u0441\u0430\u043D \u043D\u0430 launchpad, \u043D\u043E \u0444\u0438\u043A\u0441\u0438\u0442\u044C \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0441\u043F\u0435\u0448\u0438\u0442 \u0443\u0436\u0435 \u0433\u043E\u0434\u0430 2. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u0447\u0430\u0441\u0442\u044C\u044E \u043D\u0435\u0442 \u043F\u0440\u0435\u0434\u0435\u043B\u0430."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "h4",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "\u041A\u043D\u043E\u043F\u043A\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u043D\u0430\u043C\u0438 \u043D\u0430 \u043F\u0440\u0438\u0432\u044B\u0447\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435, \u043D\u043E \u0432\u043E\u0442 \u0438\u0445 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043A\u0430\u0440\u0434\u0438\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C. \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u043A\u043D\u043E \u043D\u0430\n\u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043D\u0430 Maximize, \u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u0430 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C \u043D\u0430 Close.\n\u0425\u043E\u0447\u0435\u0448\u044C \u043E\u043A\u043D\u043E \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D, \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 - \u0437\u0430\u0436\u0438\u043C\u0430\u0439 \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Option + Shift"), ", \u0438\u043D\u0430\u0447\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\n\u0432 \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u043C\u044B\u0441\u043B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0435\u0442\u0441\u044F ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D"), " - \u043F\u0440\u043E\u043F\u0430\u0434\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0430 \u043C\u0435\u043D\u044E \u0438 \u0441\u0430\u043C\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u0432\u0438\u0434\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430, \u043A\u0430\u043A \u044D\u0442\u043E\n\u0441\u0434\u0435\u043B\u0430\u043D\u043E \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 PHPStorm \u043D\u0430 \u0441\u043A\u0440\u0438\u043D\u0435 \u043D\u0438\u0436\u0435. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Option + Click"), " \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442 \u043E\u043A\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0442\u0430\u043A, \u0447\u0442\u043E \u0435\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043C\u0435\u0449\u0430\u043B\u043E\u0441\u044C \u0432 \u043D\u0435\u0433\u043E \u0431\u0435\u0437 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438.\n\u041A\u043B\u0438\u043D \u043F\u043E Close \u043D\u0435 \u0437\u0430\u043A\u0440\u043E\u0435\u043A\u0442 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432\u043E\u0432\u0441\u0435, \u0430 \u0441\u0432\u0435\u0440\u043D\u0435\u0442 \u0432 \u0434\u043E\u043A."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\u0415\u0441\u0442\u044C \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0441\u0442\u043E\u043B\u044B. \u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438, \u043D\u043E \u0437\u0430\u0442\u043E \u0438\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043E,\n\u0438 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432 \u044D\u0442\u043E \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442. \u0412 Ubuntu \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Compiz."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/desktops.png",
      "alt": "Multiple desktops"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 Notification Center, \u043A\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u043F\u043E\u0447\u0442\u0430, \u0441\u043E\u0446\u0441\u0435\u0442\u0438, \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F. \u041F\u043E\u043B\u044C\u0437\u0443\u044E\u0441\u044C, \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "h4",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u041F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "\u0423 Apple \u0435\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043C\u043D\u044B\u0445 \u0438 \u0441\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u0434\u0430\u0436\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0445 \u043F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u0439\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432. \u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B, \u043C\u044B\u0448\u0438, \u0442\u0440\u0435\u043A\u043F\u0430\u0434."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u0422\u0430\u043A \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 Mac Mini \u044F \u043E\u0431\u0437\u0430\u0432\u0435\u043B\u0441\u044F \u0435\u0449\u0435 \u0438 \u0434\u0432\u0443\u043C\u044F \u044F\u0431\u043B\u043E\u0433\u0430\u0434\u0436\u0435\u0442\u0430\u043C\u0438 \u0432 \u043B\u0438\u0446\u0435 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Apple Keyboard"), " \u0438 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Apple Magic Mouse"), ". \u0418 \u0435\u0441\u043B\u0438\n\u043F\u0435\u0440\u0432\u0443\u044E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043C\u0435\u043B\u043E \u0432\u044B\u043A\u0440\u0430\u0441\u0438\u0442\u044C \u0432 \u0437\u0435\u043B\u0435\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u0438 \u0432\u044B\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0435, \u0447\u0442\u043E\u0431\u044B \u0435\u0435 \u043D\u0435 \u0434\u0430\u0439 \u0431\u043E\u0433 \u043D\u0435 \u043D\u0430\u0448\u0435\u043B \u043A\u0442\u043E-\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0439, \u0442\u043E \u0441 \u043C\u044B\u0448\u044C\u044E \u044F \u0441\u0434\u0440\u0443\u0436\u0438\u043B\u0441\u044F."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/static/img/2016-9-15/gadgets.jpg",
      "alt": "Gadgets"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043D\u0435\u0443\u0434\u043E\u0431\u043D\u0430, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438, \u0443\u0437\u043A\u0438\u0439 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Enter"), " \u0438 \u043B\u0435\u0432\u044B\u0439 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Shift"), " \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0441\u043B\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C \u043C\u0438\u0437\u0438\u043D\u0446\u0430\u043C\u0438,\n\u0442\u0443\u0433\u043E\u0439 \u0445\u043E\u0434 \u043A\u043B\u0430\u0432\u0438\u0448. \u0418\u0437 \u0435\u0435 \u043F\u043B\u044E\u0441\u043E\u0432 - \u0442\u043E\u043B\u044C\u043A\u043E \u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A Launchpad, \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043E\u0431\u0437\u043E\u0440\u0443 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0441\u0442\u043E\u043B\u043E\u0432 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C\u044E.\n\u0412\u0441\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 - \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0439 \u0438 \u0440\u0430\u0441\u043F\u0438\u0430\u0440\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0441\u043E\u043A \u0430\u043B\u043B\u044E\u043C\u0438\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0439, \u043A \u0442\u043E\u043C\u0443 \u0436\u0435, \u043F\u043E \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u043C\u0443 \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0441\u044A\u0435\u043B \u0432\u0435\u0441\u044C \u0437\u0430\u0440\u044F\u0434 \u0434\u0432\u0443\u0445 \u043F\u0430\u043B\u044C\u0447\u0438\u043A\u043E\u0432\u044B\u0445\n\u0431\u0430\u0442\u0430\u0440\u0435\u0435\u043A DURACELL \u0437\u0430 \u043D\u043E\u0447\u044C, \u043F\u043E\u043A\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0430\u0445\u043E\u0434\u0438\u043B\u0441\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0441\u043D\u0430. \u0411\u044B\u043B\u043E \u044D\u0442\u043E, \u043F\u0440\u0430\u0432\u0434\u0430, \u043B\u0438\u0448\u044C \u0440\u0430\u0437, \u043D\u043E \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u043E\u0441\u0430\u0434\u043E\u043A."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u041C\u044B\u0448\u044C \u043E\u043A\u0430\u0437\u0430\u043B\u0430\u0441\u044C \u0431\u043E\u043B\u0435\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0433\u0430\u0434\u0436\u0435\u0442\u043E\u043C. \u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C - \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u043C\u0443\u043B\u044F\u0446\u0438\u044E \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u0438 \u043C\u044B\u0448\u0438. \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043A\u043D\u043E\u043F\u043A\u0430 \u0437\u0434\u0435\u0441\u044C \u0432\u0441\u0435\u0433\u043E \u043E\u0434\u043D\u0430\n\u0432\u043C\u0435\u0441\u0442\u043E \u0434\u0432\u0443\u0445 \u043F\u0440\u0438\u0432\u044B\u0447\u043D\u044B\u0445, \u0442\u043E \u043F\u0440\u0430\u0432\u044B\u0439 \u043A\u043B\u0438\u043A \u043F\u043E \u0434\u0435\u0444\u043E\u043B\u0442\u0443 \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u0437\u0430\u0436\u0430\u0442\u0438\u044F ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Option"), " \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435. \u042D\u0442\u043E \u043F\u043E\u043B\u043D\u0435\u0439\u0448\u0438\u0439 \u0431\u0443\u043B\u0448\u0438\u0442, \u043D\u043E \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0435\u0441\u0442\u044C fallback, \u0442\u043E \u0437\u0430\u0431\u0443\u0434\u0435\u043C \u043E \u043D\u0435\u043C.\n\u0423\u0434\u043E\u0431\u043D\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0440\u0430\u0431\u043E\u0447\u0438\u043C\u0438 \u0441\u0442\u043E\u043B\u0430\u043C\u0438 \u0441\u0432\u0430\u0439\u043F\u0430\u043C\u0438 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u0432\u043B\u0435\u0432\u043E \u0438 \u0432\u043F\u0440\u0430\u0432\u043E, \u0430 \u0435\u0449\u0435 \u0443\u0434\u043E\u0431\u043D\u043E \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C \u043F\u043E \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u043E\u0439\n\u043F\u0430\u043D\u0435\u043B\u0438 \u043A\u0430\u043A \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438 \u0442\u0430\u043A \u0438 \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438. \u0421\u043A\u0440\u043E\u043B\u043B \u043D\u0435 \u043F\u043E\u0441\u0442\u0440\u043E\u043A\u043E\u0432\u044B\u0439, \u0430 smooth, \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u044B\u0448\u044C\u044E."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "\u0414\u0432\u0430 \u043A\u0430\u0441\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u0440\u044F\u0434 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u0434\u0430\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0431\u0437\u043E\u0440\u0443 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0441\u0442\u043E\u043B\u043E\u0432.\n\u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0436\u0435\u0441\u0442\u043E\u0432 \u0442\u043E\u0433\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043C\u0438 \u0443\u0442\u0438\u043B\u0438\u0442\u0430\u043C\u0438. \u0417\u0430\u0440\u044F\u0434 \u0435\u0441\u0442 \u044D\u043A\u043E\u043D\u043E\u043C\u043D\u043E, \u0438 \u043F\u0440\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u044B\u0448\u044C\u044E \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0432 \u0440\u0430\u0439\u043E\u043D\u0435 8-12 \u0447\u0430\u0441\u043E\u0432\n\u0437\u0430\u0440\u044F\u0434\u0430 \u0434\u043E\u043B\u0436\u043D\u043E \u0445\u0432\u0430\u0442\u0430\u0442\u044C \u043D\u0430 \u043C\u0435\u0441\u044F\u0446 \u0438 \u0431\u043E\u043B\u044C\u0448\u0435. \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0435\u0435 \u043C\u0438\u043D\u0443\u0441 - \u043D\u043E\u0436\u043A\u0438 \u0438\u0437 \u0436\u0435\u0441\u0442\u043A\u043E\u0439 \u043F\u043B\u0430\u0441\u0442\u043C\u0430\u0441\u0441\u044B, \u043E\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u0442\u043E\u0438\u0442 \u0443\u0436\u0430\u0441\u043D\u044B\u0439\n\u0441\u043A\u0440\u0435\u0436\u0435\u0442 \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0442\u0440\u043E\u0432, \u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0435, \u043F\u043E\u043B\u0430\u0433\u0430\u044E, \u0441\u043E\u0442\u0440\u0443\u0442 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u0440\u043E\u0433\u043E\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0441\u0442\u043E\u043B\u0430 \u0438\u0437 IKEA \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0447\u0435\u043C \u0432\u044B \u0434\u0443\u043C\u0430\u0435\u0442\u0435. \u041B\u044E\u0431\u0438\u0442\u0435 \u0442\u0438\u0448\u0438\u043D\u0443 \u043A\u0430\u043A \u0438 \u044F - \u0438\u0449\u0438\u0442\u0435 \u043A\u043E\u0432\u0440\u0438\u043A."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "h4",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "\u0418\u0442\u043E\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "\u0415\u0441\u043B\u0438 \u043A\u0440\u0430\u0442\u043A\u043E - \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u043C \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u0434\u043E\u0432\u043E\u043B\u0435\u043D \u0447\u0443\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E. \u0412\u0435\u0441 \u0447\u0443\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 1.4\u043A\u0433, \u0438\u043B\u0438 \u043F\u043E\u043B\u0442\u043E\u0440\u0430 \u043A\u0438\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u043E \u0448\u043D\u0443\u0440\u043E\u043C \u043F\u0438\u0442\u0430\u043D\u0438\u044F\n\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043D\u0438\u043A\u043E\u043C HDMI - DVI. \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C 80lvl."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_1__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043F\u043B\u0430\u0432\u043D\u044B\u0439, \u0434\u0443\u043C\u0430\u0435\u0442 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E, \u0431\u0430\u0433 \u0440\u0435\u043F\u043E\u0440\u0442\u043E\u0432 \u043D\u0435 \u0448\u043B\u0435\u0442. \u041E\u0434\u043E\u0431\u0440\u044F\u043C\u0441!"));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/migracija-s-ubuntu-na-mac-mini")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/*!********************************************************!*\
  !*** multi ./pages/migracija-s-ubuntu-na-mac-mini.mdx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/migracija-s-ubuntu-na-mac-mini', function() {
module.exports = __webpack_require__(/*! ./pages/migracija-s-ubuntu-na-mac-mini.mdx */"./pages/migracija-s-ubuntu-na-mac-mini.mdx");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_5d62d38be3592dca3a42":
/*!*******************************************!*\
  !*** external "dll_5d62d38be3592dca3a42" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5d62d38be3592dca3a42;

/***/ })

},[[4,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=migracija-s-ubuntu-na-mac-mini.js.map