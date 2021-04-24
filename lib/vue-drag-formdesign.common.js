module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9896");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0089":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (options.includeInheritedProps && (currentPath === '__proto__' ||
        (currentPath === 'constructor' && typeof currentValue === 'function'))) {
        throw new Error('For security reasons, object\'s magic properties cannot be set')
      }
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),

/***/ "0260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("28e0");
var isBuffer = __webpack_require__("2d02");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "0288":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "02c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "046d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "0617":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3"),
    root = __webpack_require__("b6b5");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "0623":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("5374");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "083c":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("0623");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "0d2b":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "0d3b":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("779e"),
    keys = __webpack_require__("6be8");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "0f51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "12b6":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "12cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4930");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "159d":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("779e"),
    keysIn = __webpack_require__("c277");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "15c4":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("ffc7"),
    isObjectLike = __webpack_require__("4923");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "173d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("a44d");
var utils = __webpack_require__("0260");
var InterceptorManager = __webpack_require__("0f51");
var dispatchRequest = __webpack_require__("96e2");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "190f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "1aff":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("b6b5"),
    stubFalse = __webpack_require__("3dfe");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("97bb")(module)))

/***/ }),

/***/ "1bb3":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("542d");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "1c9c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("9822"),
    isLength = __webpack_require__("9791"),
    isObjectLike = __webpack_require__("4923");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "1ed2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("32fb"),
    Map = __webpack_require__("bb91"),
    Promise = __webpack_require__("66e6"),
    Set = __webpack_require__("0617"),
    WeakMap = __webpack_require__("3189"),
    baseGetTag = __webpack_require__("9822"),
    toSource = __webpack_require__("9da1");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "1f47":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("866b");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "2131":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("5e96"),
    getPrototype = __webpack_require__("3cf9"),
    getSymbols = __webpack_require__("c28a"),
    stubArray = __webpack_require__("0d2b");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "2303":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("df70"),
    isMasked = __webpack_require__("b11a"),
    isObject = __webpack_require__("82d7"),
    toSource = __webpack_require__("9da1");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "243c":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2480":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "2480f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "2535":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_base_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6557");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_base_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_base_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "28e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "2d02":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "2dca":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("779e"),
    getSymbolsIn = __webpack_require__("2131");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "2e12":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("82d7"),
    isPrototype = __webpack_require__("c021"),
    nativeKeysIn = __webpack_require__("79a2");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "2e64":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3118":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("b6b5");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("97bb")(module)))

/***/ }),

/***/ "3189":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3"),
    root = __webpack_require__("b6b5");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "321b":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("3f25"),
    baseUnary = __webpack_require__("f76d"),
    nodeUtil = __webpack_require__("9c18");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "32fb":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3"),
    root = __webpack_require__("b6b5");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "3335":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("2480f"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }),

/***/ "366f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3cf9":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("f39a");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "3dfe":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "3f25":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("1ed2"),
    isObjectLike = __webpack_require__("4923");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "4024":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("407d"),
    cloneDataView = __webpack_require__("cda4"),
    cloneRegExp = __webpack_require__("bfb2"),
    cloneSymbol = __webpack_require__("dc98"),
    cloneTypedArray = __webpack_require__("c070");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "407d":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("86c4");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "40b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "41a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_form_properties_vue_vue_type_style_index_0_id_16906ed2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e64");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_form_properties_vue_vue_type_style_index_0_id_16906ed2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_form_properties_vue_vue_type_style_index_0_id_16906ed2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "48a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4923":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5123":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "5330":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_551cf144_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7091");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_551cf144_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_551cf144_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5374":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "542d":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("ac14");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "5500":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "5849":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("0623");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "59c9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "5a21":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("b6b5");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "5e96":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "5fad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "6016":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "618f":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("f39a");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "6266":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eef6")))

/***/ }),

/***/ "6557":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "66e6":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3"),
    root = __webpack_require__("b6b5");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "6be8":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("8852"),
    baseKeys = __webpack_require__("940b"),
    isArrayLike = __webpack_require__("9072");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "6d41":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "6f8f":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("866b");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "7091":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70e3":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("8175"),
    arrayEach = __webpack_require__("9b26"),
    assignValue = __webpack_require__("b81e"),
    baseAssign = __webpack_require__("0d3b"),
    baseAssignIn = __webpack_require__("159d"),
    cloneBuffer = __webpack_require__("3118"),
    copyArray = __webpack_require__("5500"),
    copySymbols = __webpack_require__("c592"),
    copySymbolsIn = __webpack_require__("2dca"),
    getAllKeys = __webpack_require__("b5c3"),
    getAllKeysIn = __webpack_require__("750c"),
    getTag = __webpack_require__("1ed2"),
    initCloneArray = __webpack_require__("d114"),
    initCloneByTag = __webpack_require__("4024"),
    initCloneObject = __webpack_require__("bc6e"),
    isArray = __webpack_require__("8b3f"),
    isBuffer = __webpack_require__("1aff"),
    isMap = __webpack_require__("321b"),
    isObject = __webpack_require__("82d7"),
    isSet = __webpack_require__("f7eb"),
    keys = __webpack_require__("6be8"),
    keysIn = __webpack_require__("c277");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "717f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "750c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("a79c"),
    getSymbolsIn = __webpack_require__("2131"),
    keysIn = __webpack_require__("c277");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "779e":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("b81e"),
    baseAssignValue = __webpack_require__("cd52");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "7847":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "79a2":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7a07":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7b7b":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("eb9c");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "8021":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "8053":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8175":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("eb9c"),
    stackClear = __webpack_require__("7b7b"),
    stackDelete = __webpack_require__("9798"),
    stackGet = __webpack_require__("a71c"),
    stackHas = __webpack_require__("b7df"),
    stackSet = __webpack_require__("8dac");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "82d7":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "8589":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b350");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85b3":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("2303"),
    getValue = __webpack_require__("d8e7");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "866b":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "86c4":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("b6b5");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "87fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("48a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8852":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("6d41"),
    isArguments = __webpack_require__("15c4"),
    isArray = __webpack_require__("8b3f"),
    isBuffer = __webpack_require__("1aff"),
    isIndex = __webpack_require__("c531"),
    isTypedArray = __webpack_require__("b6e4");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "8b3f":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "8c18":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("b6b5");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "8dac":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("eb9c"),
    Map = __webpack_require__("bb91"),
    MapCache = __webpack_require__("a6e1");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "9072":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("df70"),
    isLength = __webpack_require__("9791");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "9269":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("1f47"),
    hashDelete = __webpack_require__("2480"),
    hashGet = __webpack_require__("c720"),
    hashHas = __webpack_require__("b3f8"),
    hashSet = __webpack_require__("6f8f");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "940b":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("c021"),
    nativeKeys = __webpack_require__("618f");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "967c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "96e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var transformData = __webpack_require__("02c8");
var isCancel = __webpack_require__("046d");
var defaults = __webpack_require__("a44d");
var isAbsoluteURL = __webpack_require__("8021");
var combineURLs = __webpack_require__("40b2");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "975b":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("542d");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "9791":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "9798":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "97bb":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "9822":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("8c18"),
    getRawTag = __webpack_require__("fe3c"),
    objectToString = __webpack_require__("243c");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "9896":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.4.6@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/index.vue?vue&type=template&id=460c34a7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{staticClass:"form-design"},[_c('el-aside',{attrs:{"width":"260px"}},[_vm._t("drag"),_c('DragItem')],2),_c('el-main',[_c('el-row',{staticClass:"form-design",attrs:{"gutter":20}},[_c('el-col',{staticClass:"height-all",attrs:{"span":18}},[_c('el-card',{staticClass:"box-card form-contains",attrs:{"header":"表单面板"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"el-card__header"},[_vm._t("formName",[_vm._v("表单面板")])],2),_c('span',{staticStyle:{"float":"right"}},[_vm._t("controlButton"),_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-delete"},on:{"click":_vm.handleClear}},[_vm._v("清空")]),_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-view"},on:{"click":_vm.handlePreview}},[_vm._v("预览")]),_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-view"},on:{"click":_vm.handleRender}},[_vm._v("渲染")]),_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-download"},on:{"click":_vm.handleImport}},[_vm._v("导入")]),_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-upload2"},on:{"click":_vm.handleGenerateJson}},[_vm._v("导出")])],2)]),_c('DragPanel',{ref:"dragPanel",attrs:{"data":_vm.data,"selectForm":_vm.selectForm},on:{"changeSelectItem":_vm.changeSelectItem}})],1)],1),_c('el-col',{staticClass:"height-all",attrs:{"span":6}},[_c('el-card',{staticClass:"box-card form-properties",attrs:{"header":"属性配置"}},[_c('Properties',{attrs:{"data":_vm.data,"selectItem":_vm.selectItem}},[_c('template',{attrs:{"selectItem":_vm.selectItem},slot:"custom-properties"},[_vm._t("custom-properties",null,{"selectItem":_vm.selectItem})],2),_c('template',{attrs:{"data":_vm.data},slot:"form-extend-properties"},[_vm._t("form-extend-properties",null,{"data":_vm.data})],2),_c('template',{attrs:{"data":_vm.data},slot:"extend-tab"},[_vm._t("extend-tab",null,{"data":_vm.data})],2)],2)],1)],1)],1)],1),(_vm.previewVisible)?_c('Preview',{ref:"preview"}):_vm._e(),(_vm.renderVisisble)?_c('renderPreview',{ref:"renderPreview"}):_vm._e(),_c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"模板数据","visible":_vm.modelVisible,"append-to-body":true,"width":"850px"},on:{"update:visible":function($event){_vm.modelVisible=$event}}},[_c('previewCode',{attrs:{"editorJson":_vm.modelJson}}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.modelVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.modelVisible = false}}},[_vm._v("确 定")])],1)],1),_c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"模板数据","visible":_vm.importVisible,"append-to-body":true,"width":"850px"},on:{"update:visible":function($event){_vm.importVisible=$event}}},[_c('el-input',{attrs:{"type":"textarea","rows":3},model:{value:(_vm.importText),callback:function ($$v) {_vm.importText=$$v},expression:"importText"}}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.importVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.importModel}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/index.vue?vue&type=template&id=460c34a7&

// EXTERNAL MODULE: ./node_modules/_lodash@4.17.20@lodash/cloneDeep.js
var cloneDeep = __webpack_require__("e7e5");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue?vue&type=template&id=a0e73ce6&
var drag_itemvue_type_template_id_a0e73ce6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card form-item ",attrs:{"header":"组件列表"}},[_c('el-collapse',{model:{value:(_vm.actives),callback:function ($$v) {_vm.actives=$$v},expression:"actives"}},[_c('el-collapse-item',{attrs:{"title":"基础组件","name":"1"}},[_c('DragItem',{attrs:{"list":_vm.basicsArray},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart}})],1),(_vm.customComponents.length > 0)?_c('el-collapse-item',{attrs:{"title":"自定义组件","name":"3"}},[_c('DragItem',{attrs:{"list":_vm.customComponents},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart}})],1):_vm._e(),_c('el-collapse-item',{attrs:{"title":"布局组件","name":"3"}},[_c('DragItem',{attrs:{"list":_vm.layoutArray},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart}})],1)],1)],1)}
var drag_itemvue_type_template_id_a0e73ce6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue?vue&type=template&id=a0e73ce6&

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/utils/index.js

const http_get_file_list_url = 'http://localhost:9000/sxfw/file/list';
const http_upload_file_url = 'http://localhost:9000/sxfw/file/upload'
const http_down_file_url = 'http://localhost:9000/sxfw/file/fileDown'

 

function dynamicFun(script , model , key="$") {
  if(!script) return false 
  const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
  const Fn = new Function(key, func)
  return Fn(model)
}
 
 
 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/config/index.js


/*
 * author lyf
 * date 2020-07-06
 * description 表单控件配置
 */
// 基础控件
const basicsList = [
  {
    type: "input", // 表单类型
    label: "输入框", // 标题文字 
    index: 'A',
    options: {
      type: "text",
      width: "100%", // 宽度
      defaultValue: "", // 默认值
      placeholder: "请输入", // 没有输入时，提示文字
      clearable: false,
      maxLength: null,
      prepend: '', // 前缀
      append: '', // 后缀
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    model: "", // 数据字段
    key: "",
    rules: [
      //验证规则
      {
        required: false, // 必须填写
        message: "必填项",
        trigger: ['change','blur']
      }
    ]
  },
  {
    type: "textarea", // 表单类型
    label: "文本框", // 标题文字 
    index: 'B',
    options: {
      width: "100%", // 宽度 
      maxLength: null,
      defaultValue: "",
      rows: 4,
      clearable: false,
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      placeholder: "请输入"
    },
    model: "", // 数据字段
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "number", // 表单类型
    label: "数字输入框", // 标题文字 
    index: 'C',
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值
      min: 0, // 可输入最小值
      max: 100, // 可输入最大值
      precision: null,
      tooptip: '', // 提示
      prepend: '', // 前缀
      append: '', // 后缀
      step: 1, // 步长，点击加减按钮时候，加减多少
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false, //是否禁用
      placeholder: "请输入"
    },
    model: "", // 数据字段
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "select", // 表单类型
    label: "下拉选择器", // 标题文字 
    index: 'D',
    options: {
      width: "100%", // 宽度
      defaultValue: undefined, // 下拉选框请使用undefined为默认值
      multiple: false, // 是否允许多选
      disabled: false, // 是否禁用
      clearable: false, // 是否显示清除按钮
      hidden: false, // 是否隐藏，false显示，true隐藏
      placeholder: "请选择", // 默认提示文字
      valueKey: 'value',
      tooptip: '', // 提示
      dynamic: 0,
      remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        // 下拉选择项配置
        {
          value: "1",
          label: "下拉框1"
        }
      ],
      showSearch: false // 是否显示搜索框，搜索选择的项的值，而不是文字
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "checkbox",
    label: "多选框", 
    index: 'E',
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: [], 
      dynamic: 0,
      tooptip: '', // 提示
        remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "radio", // 表单类型
    label: "单选框", // 标题文字 
    index: 'F',
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: "", // 默认值 
      dynamic: 0,
      tooptip: '', // 提示
        remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      linkage: false,
      options: [
        {
          value: "1",
          label: "选项1"
        },
        {
          value: "2",
          label: "选项2"
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "date", // 表单类型
    label: "日期选择框", // 标题文字 
    index: 'G',
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      rangeDefaultValue: [], // 默认值，字符串 12:00:00
      range: false, // 范围日期选择，为true则会显示两个时间选择框（同时defaultValue和placeholder要改成数组），
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      tooptip: '', // 提示
      rangeStartPlaceholder: "开始时间",
      rangeEndPlaceholder: "结束时间",
      format: "yyyy-MM-dd" // 展示格式  （请按照这个规则写 YYYY-MM-DD HH:mm:ss，区分大小写）
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "time", // 表单类型
    label: "时间选择框", // 标题文字 
    index: 'H',
    options: {
      width: "100%", // 宽度
      defaultValue: "", // 默认值，字符串 12:00:00
      disabled: false, // 是否禁用
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      clearable: false, // 是否显示清除按钮
      placeholder: "请选择",
      format: "HH:mm:ss" // 展示格式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "rate", // 表单类型
    label: "评分", // 标题文字 
    index: 'I',
    options: {
      defaultValue: 0,
      max: 5, // 最大值
      tooptip: '', // 提示
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      allowHalf: false // 是否允许半选
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "slider", // 表单类型
    label: "滑动输入条", // 标题文字 
    index: 'J',
    options: {
      width: "100%", // 宽度
      defaultValue: 0, // 默认值， 如果range为true的时候，则需要改成数组,如：[12,15]
      disabled: false, // 是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      min: 0, // 最小值
      tooptip: '', // 提示
      max: 100, // 最大值
      step: 1, // 步长，取值必须大于 0，并且可被 (max - min) 整除
      showInput: false, // 是否显示输入框，range为true时，请勿开启
      marks: [] , //标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式
      // range: false // 双滑块模式
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
 /* {
    type: "uploadFile", // 表单类型
    label: "上传文件", // 标题文字 
    index: 'K',
    options: {
      defaultValue: "[]",
      multiple: false,
      disabled: false,
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏 
      width: "100%",
      limit: 3, 
      headers: {},
      action: http_upload_file_url,
      placeholder: "上传"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "uploadImg",
    label: "上传图片", 
    index: 'L',
    options: {
      defaultValue: "[]",
      multiple: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      width: "100%", 
      tooptip: '', // 提示
      limit: 3,
      placeholder: "上传", 
      headers: {},
      action: http_upload_file_url,
      listType: "picture-card"
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  }, */
  {
    type: "cascader", // 表单类型
    label: "级联选择器", // 标题文字 
    index: 'M',
    options: {
      disabled: false, //是否禁用
      hidden: false, // 是否隐藏，false显示，true隐藏
      defaultValue: undefined, // 默认值
      showSearch: false, // 是否显示搜索框，搜索选择的项的值，而不是文字
      placeholder: "请选择",
      multiple: false,
      clearable: false, // 是否显示清除按钮 
      dynamic: 0,
      tooptip: '', // 提示
        remoteFunc: '',
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      options: [
        {
          value: "1",
          label: "选项1",
          children: [
            {
              value: "11",
              label: "选项11"
            }
          ]
        },
        {
          value: "2",
          label: "选项2",
          children: [
            {
              value: "22",
              label: "选项22"
            }
          ]
        }
      ]
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  
  {
    type: "switch", // 表单类型
    label: "开关", // 标题文字  
    index: 'N',
    options: {
      defaultValue: false, // 默认值 Boolean 类型
      activeText: '',
      inactiveText: '',
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  },
  {
    type: "button", // 表单类型
    label: "按钮", // 标题文字 
    index: 'O',
    options: {
      type: "primary",
      handle: "submit",
      dynamicFun: "",
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    key: ""
  } ,{
      type: "batch",
      label: "动态表格", 
       index: 'P',
      list: [],
      options: {
        scrollY: 0,
        disabled: false,
        hidden: false, // 是否隐藏，false显示，true隐藏
        showLabel: false,
        hideSequence: false,
        labelWidth: "100",
        addType: 'dialog', // 默认增加一条数据的方式为弹出框
        labelPosition: 'left',
        customStyle: "",
        customClass: '',
        showItem:[] ,
        width: "100%"
      },
      model: "",
      key: ""
    }, 
     {
      type: "text",
      label: "标签", 
      options: {
        textAlign: "left",
        tooptip: '', // 提示
        hidden: false, // 是否隐藏，false显示，true隐藏
        showRequiredMark: false
      },
      key: ""
    },
    {
      type: "html",
      label: "HTML", 
      options: {
        tooptip: '', // 提示
        hidden: false, // 是否隐藏，false显示，true隐藏
        defaultValue: "<strong>HTML</strong>"
      },
      key: ""
    },
];
 
  
// 布局控件
const layoutList = [
  {
    type: "divider",
    label: "分割线", 
    options: {
      tooptip: '', // 提示
      orientation: "left",
      direction: 'horizontal'
    },
    key: "",
    model: ""
  },
 /* {
    type: "card",
    label: "卡片布局",
    icon: "icon-qiapian",
    list: [],
    key: "",
    model: ""
  },*/
  {
    type: "grid",
    label: "栅格布局", 
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0
    },
    key: "",
    model: ""
  },
  {
    type: "table",
    label: "表格布局", 
    trs: [
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      },
      {
        tds: [
          {
            colspan: 1,
            rowspan: 1,
            list: []
          },
          {
            colspan: 1,
            rowspan: 1,
            list: []
          }
        ]
      }
    ],
    options: {
      width: "100%",
      bordered: true,
      bright: false,
      small: true,
      customStyle: "",
      customClass: ''
    },
    key: "",
    model: ""
  }
];

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/drag-item/module/dragItem.vue?vue&type=template&id=c1c2da4a&
var dragItemvue_type_template_id_c1c2da4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-list"},[_c('draggable',_vm._b({attrs:{"tag":"ul","value":_vm.list},on:{"start":function($event){return _vm.handleStart($event, _vm.list)}}},'draggable',{
	      group: { name: 'form-draggable', pull: 'clone', put: false },
	      sort: false,
	      animation: 180,
	      ghostClass: 'moving'
	    },false),_vm._l((_vm.list),function(val,index){return _c('li',{key:index,staticClass:"form-edit-widget-label",on:{"dragstart":function($event){return _vm.$emit('generateKey', _vm.list, index)},"click":function($event){return _vm.$emit('handleListPush', val)}}},[_c('a',[_c('span',[_vm._v(_vm._s(val.label))])])])}),0)],1)}
var dragItemvue_type_template_id_c1c2da4a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/module/dragItem.vue?vue&type=template&id=c1c2da4a&

// EXTERNAL MODULE: ./node_modules/_vuedraggable@2.24.3@vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__("3335");
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/drag-item/module/dragItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dragItemvue_type_script_lang_js_ = ({
  name: "dragItem",
  props: {
  	list: {
  		type: Array,
  		default: ()=> []
  	}
  },
  components: {
    draggable: vuedraggable_umd_default.a
  },
  methods: {
    handleStart(e, list) {
      this.$emit("start", list[e.oldIndex].type);
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/module/dragItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_dragItemvue_type_script_lang_js_ = (dragItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/module/dragItem.vue





/* normalize component */

var component = normalizeComponent(
  module_dragItemvue_type_script_lang_js_,
  dragItemvue_type_template_id_c1c2da4a_render,
  dragItemvue_type_template_id_c1c2da4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dragItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var drag_itemvue_type_script_lang_js_ = ({
	components: {
		DragItem: dragItem
	},
	data(){
		return {
			actives:['1','2','3'],
			noModel: [
		        "button",
		        "divider",
		        "card",
		        "grid",
		        "table",
		        "alert",
		        "text",
		        "html"
		    ],
		    startType: "",
		    data: {
		        list: [],
		        config: {
		          layout: "horizontal",
		          labelCol: { span: 4 },
		          wrapperCol: { span: 18 },
		          hideRequiredMark: false,
		          customStyle: ""
		        }
		      },
		      previewOptions: {
		        width: 850
		    },
		    selectItem: {
		       key: ""
		    } ,
		    customComponents: []
		}
	},
	computed: {
	    basicsArray() {
	      	// 计算需要显示的基础字段
	      	const blist = basicsList
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
	      	}) ;
	      	return blist
	    },
	    layoutArray(){ 
	    	const llist = layoutList
	    	llist.forEach(t=>{
	      		t.options.dynamicVisible = false
        		t.options.dynamicVisibleValue = ''
	      	}) ;
	      	return llist
	    } 
	},
	created() { 
		if(window.customComponents) {
			this.customComponents = window.customComponents
		}
		 
	},
	methods: {
		generateKey(list, index) {
	      // 生成key值
	      const key = list[index].type + "_" + new Date().getTime();
	      this.$set(list, index, {
	        ...list[index],
	        key,
	        model: key
	      });
	      if (this.noModel.includes(list[index].type)) {
	        // 删除不需要的model属性
	        delete list[index].model;
	      }
	    },
	    handleListPush(item) {
	      // 双击控件按钮push到list
	      // 生成key值
	      if (!this.selectItem.key) {
	        // 在没有选择表单时，将数据push到this.data.list
	        const key = item.type + "_" + new Date().getTime();
	        item = {
	          ...item,
	          key,
	          model: key
	        };
	        if (this.noModel.includes(item.type)) {
	          // 删除不需要的model属性
	          delete item.model;
	        }
	        const itemString = JSON.stringify(item);
	        const record = JSON.parse(itemString);
	        // 删除icon及compoent属性
	        delete record.icon;
	        delete record.component;
	        this.data.list.push(record);
	       
	        this.$emit('handleSetSelectItem' , record)
	        return false;
	      }
	     
	    },
	    handleStart(type) {
	      this.startType = type;
	    },
	}
});


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_drag_itemvue_type_script_lang_js_ = (drag_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue?vue&type=style&index=0&lang=css&
var drag_itemvue_type_style_index_0_lang_css_ = __webpack_require__("87fc");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/drag-item/index.vue






/* normalize component */

var drag_item_component = normalizeComponent(
  form_item_drag_itemvue_type_script_lang_js_,
  drag_itemvue_type_template_id_a0e73ce6_render,
  drag_itemvue_type_template_id_a0e73ce6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drag_item = (drag_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/index.vue?vue&type=template&id=be31b91c&
var drag_panelvue_type_template_id_be31b91c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FormPanel',{ref:"KFCP",attrs:{"data":_vm.data,"selectItem":_vm.selectItem,"noModel":_vm.noModel,"hideModel":_vm.hideModel,"selectForm":_vm.selectForm,"startType":_vm.startType},on:{"handleSetSelectItem":_vm.handleSetSelectItem}})}
var drag_panelvue_type_template_id_be31b91c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/index.vue?vue&type=template&id=be31b91c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/formPanel.vue?vue&type=template&id=67f46ffd&
var formPanelvue_type_template_id_67f46ffd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-panel"},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.list.length === 0),expression:"data.list.length === 0"}],staticClass:"hint-text"},[_vm._v(" 从左侧选择组件添加 ")]),_c('el-form',{ref:"form",staticClass:"a-form-box form-build",style:(_vm.data.config.customStyle),attrs:{"label-width":_vm.data.config.labelWidth + 'px',"label-position":_vm.data.config.labelPosition,"hide-required-asterisk":_vm.data.config.hideRequiredMark,"size":_vm.data.config.size}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div"},on:{"add":_vm.deepClone,"start":function($event){return _vm.dragStart($event, _vm.data.list)}},model:{value:(_vm.data.list),callback:function ($$v) {_vm.$set(_vm.data, "list", $$v)},expression:"data.list"}},'draggable',{
        group: 'form-draggable',
        ghostClass: 'moving',
        animation: 180,
        handle: '.drag-move'
      },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((_vm.data.list),function(record){return _c('layoutItem',{key:record.key,staticClass:"drag-move",attrs:{"record":record,"config":_vm.data.config,"selectItem":_vm.selectItem,"startType":_vm.startType,"insertAllowedType":_vm.insertAllowedType,"hideModel":_vm.hideModel},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"dragStart":_vm.dragStart,"handleSelectItem":_vm.handleSelectItem,"handleCopy":_vm.handleCopy,"handleDetele":_vm.handleDetele,"handleColAdd":_vm.handleColAdd,"handleShowRightMenu":_vm.handleShowRightMenu}})}),1)],1)],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showRightMenu),expression:"showRightMenu"}],staticClass:"right-menu",style:({ 'top': _vm.menuTop + 'px', 'left': _vm.menuLeft + 'px' }),attrs:{"id":"rightMenu"}},[_c('ul',[_c('li',{on:{"click":_vm.handleSettingStyle}},[_c('i',{staticClass:"el-icon-magic-stick"}),_vm._v("样式配置")]),_c('hr'),(_vm.isMergeCol)?[_c('li',{on:{"click":_vm.handleDropMerge}},[_c('i',{staticClass:"el-icon-delete"}),_vm._v("解除合并")]),_c('hr')]:_vm._e(),_c('li',{on:{"click":_vm.handleDownMerge}},[_c('i',{staticClass:"el-icon-bottom"}),_vm._v("向下合并")]),_c('li',{on:{"click":_vm.handleRightMerge}},[_c('i',{staticClass:"el-icon-right"}),_vm._v("向右合并")]),_c('li',{on:{"click":_vm.handleAddCol}},[_c('i',{staticClass:"el-icon-zoom-in"}),_vm._v("增加一列")]),_c('li',{on:{"click":_vm.handleAddRow}},[_c('i',{staticClass:"el-icon-zoom-in"}),_vm._v("增加一行")]),_c('hr'),_c('li',{on:{"click":_vm.handleRemoveRow}},[_c('i',{staticClass:"el-icon-zoom-out"}),_vm._v("删除当前行")]),_c('li',{on:{"click":_vm.handleRemoveCol}},[_c('i',{staticClass:"el-icon-zoom-out"}),_vm._v("删除当前列")])],2)]),_c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"表内单元格样式配置","visible":_vm.styleVisible,"append-to-body":true},on:{"update:visible":function($event){_vm.styleVisible=$event}}},[_c('el-form',{attrs:{"size":"mini","model":_vm.tdStyle,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"class"}},[_c('el-input',{attrs:{"placeholder":"请输入class名称"},model:{value:(_vm.tdStyle.class),callback:function ($$v) {_vm.$set(_vm.tdStyle, "class", $$v)},expression:"tdStyle.class"}})],1),_c('el-form-item',{attrs:{"label":"style"}},[_c('el-input',{attrs:{"type":"textarea","rows":3,"placeholder":"请输入css样式"},model:{value:(_vm.tdStyle.style),callback:function ($$v) {_vm.$set(_vm.tdStyle, "style", $$v)},expression:"tdStyle.style"}})],1)],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.styleVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.settingStyle}},[_vm._v("确 定")])],1)],1)],1)}
var formPanelvue_type_template_id_67f46ffd_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formPanel.vue?vue&type=template&id=67f46ffd&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/layerItem.vue?vue&type=template&id=72053be4&
var layerItemvue_type_template_id_72053be4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'layout-width': ['grid', 'table', 'card', 'divider', 'html'].includes(
      _vm.record.type
    )
  }},[(_vm.record.type === 'batch')?[_c('div',{class:[
        'batch-box',
        _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
        _vm.record.key === _vm.selectItem.key ? 'active' : ''
      ],style:(_vm.record.options.customStyle),on:{"click":function($event){return _vm.handleSelectItem(_vm.record)}}},[_c('div',{staticClass:"batch-label"},[_vm._v("动态表格")]),_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div"},on:{"start":function($event){return _vm.$emit('dragStart', $event, _vm.record.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, _vm.record.list)}},model:{value:(_vm.record.list),callback:function ($$v) {_vm.$set(_vm.record, "list", $$v)},expression:"record.list"}},'draggable',{
          group: _vm.insertAllowed ? 'form-draggable' : '',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((_vm.record.list),function(item){return _c('formNode',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])],1)]:(_vm.record.type === 'grid')?[_c('div',{staticClass:"grid-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.handleSelectItem(_vm.record)}}},[_c('el-row',{staticClass:"grid-row",attrs:{"gutter":_vm.record.options.gutter}},_vm._l((_vm.record.columns),function(colItem,idnex){return _c('el-col',{key:idnex,staticClass:"grid-col",attrs:{"span":colItem.span || 0}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div"},on:{"start":function($event){return _vm.$emit('dragStart', $event, colItem.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, colItem.list)}},model:{value:(colItem.list),callback:function ($$v) {_vm.$set(colItem, "list", $$v)},expression:"colItem.list"}},'draggable',{
              group: 'form-draggable',
              ghostClass: 'moving',
              animation: 180,
              handle: '.drag-move'
            },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((colItem.list),function(item){return _c('layoutItem',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"startType":_vm.startType,"insertAllowedType":_vm.insertAllowedType,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1)],1)}),1),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])],1)]:(_vm.record.type === 'table')?[_c('div',{staticClass:"table-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.handleSelectItem(_vm.record)}}},[_c('table',{class:[
          'table-layout','form-table',
          _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
          _vm.record.options.bright ? 'bright' : '' ,
          _vm.record.options.small ? 'small' : '' ,
          _vm.record.options.bordered ? 'bordered' : '' 
        ],style:(_vm.record.options.customStyle)},_vm._l((_vm.record.trs),function(trItem,trIndex){return _c('tr',{key:trIndex},_vm._l((trItem.tds),function(tdItem,tdIndex){return _c('td',{key:tdIndex,class:['table-td', tdItem.class],style:(tdItem.style),attrs:{"colspan":tdItem.colspan,"rowspan":tdItem.rowspan},on:{"contextmenu":function($event){$event.preventDefault();return _vm.$emit('handleShowRightMenu', $event, _vm.record, trIndex, tdIndex , tdItem.colspan > 1 || tdItem.rowspan > 1)}}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div"},on:{"start":function($event){return _vm.$emit('dragStart', $event, tdItem.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, tdItem.list)}},model:{value:(tdItem.list),callback:function ($$v) {_vm.$set(tdItem, "list", $$v)},expression:"tdItem.list"}},'draggable',{
                group: 'form-draggable',
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move'
              },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((tdItem.list),function(item){return _c('layoutItem',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"startType":_vm.startType,"insertAllowedType":_vm.insertAllowedType,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1)],1)}),0)}),0),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])])]:[_c('formNode',{key:_vm.record.key,attrs:{"selectItem":_vm.selectItem,"record":_vm.record,"config":_vm.config,"hideModel":_vm.hideModel},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleDetele":function($event){return _vm.$emit('handleDetele')},"handleShowRightMenu":function($event){return _vm.$emit('handleShowRightMenu')}}})]],2)}
var layerItemvue_type_template_id_72053be4_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/layerItem.vue?vue&type=template&id=72053be4&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/formNode.vue?vue&type=template&id=1a1fe25a&
var formNodevue_type_template_id_1a1fe25a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drag-move-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleSelectItem', _vm.record)}}},[_c('div',{staticClass:"form-item-box"},[_c('FormItem',{attrs:{"formConfig":_vm.config,"models":_vm.models,"record":_vm.record,"isDragPanel":true}})],1),(!_vm.hideModel)?_c('div',{staticClass:"show-key-box",domProps:{"textContent":_vm._s(_vm.record.model)}}):_vm._e(),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-document-copy"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])])}
var formNodevue_type_template_id_1a1fe25a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formNode.vue?vue&type=template&id=1a1fe25a&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/index.vue?vue&type=template&id=551cf144&scoped=true&
var form_itemvue_type_template_id_551cf144_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (
    !(_vm.record.options.hidden === true) &&
      ( [
        'input',
        'textarea',
        'date',
        'time',
        'number',
        'radio',
        'checkbox',
        'select',
        'rate',
        'switch',
        'slider',
        'uploadImg',
        'uploadFile',
        'cascader'
      ].includes(_vm.record.type) || _vm.customList.includes(_vm.record.type) ) && _vm.dynamicVisibleItem && !(_vm.record.type == 'select' && _vm.renderPreview &&  _vm.record.options.previewHidden )
  )?_c('el-form-item',{attrs:{"label":_vm.formConfig.labelWidth > 0 ? _vm.record.label : null,"rules":_vm.recordRules,"prop":_vm.recordRules && _vm.recordRules.length > 0 ? _vm.record.model : null,"id":_vm.record.model,"name":_vm.record.model}},[_c('BaseItem',{attrs:{"models":_vm.models,"formConfig":_vm.formConfig,"renderPreview":_vm.renderPreview,"record":_vm.record,"disabled":_vm.disabled || _vm.record.options.disabled,"isDragPanel":_vm.isDragPanel},on:{"forceUpdate":_vm.forceUpdate}})],1):((_vm.record.type === 'batch' || _vm.record.type === 'editor') && _vm.dynamicVisibleItem)?_c('el-form-item',{attrs:{"id":_vm.record.model,"name":_vm.record.model,"label":!_vm.record.options.showLabel ? '' : _vm.record.label,"label-width":_vm.record.options.showLabel ? null : '0px'}},[(_vm.record.type === 'batch')?_c('TableBatch',{ref:"TableBatch",style:(("width:" + (_vm.record.options.width))),attrs:{"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"config":_vm.formConfig,"parentDisabled":_vm.disabled},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):_vm._e()],1):(_vm.record.type === 'button' && _vm.dynamicVisibleItem)?_c('el-form-item',[_c('el-button',{attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"type":_vm.record.options.type},domProps:{"textContent":_vm._s(_vm.record.label)},on:{"click":_vm.buttonClick}})],1):(_vm.record.type === 'text' && _vm.dynamicVisibleItem )?_c('div',{staticClass:"form-label",style:({ textAlign: _vm.record.options.textAlign })},[_c('label',{class:{ 'is-required': _vm.record.options.showRequiredMark || _vm.showRequiredMark },domProps:{"textContent":_vm._s(_vm.record.label)}})]):(_vm.record.type === 'html' && _vm.dynamicVisibleItem)?_c('div',{attrs:{"id":_vm.record.model,"name":_vm.record.model},domProps:{"innerHTML":_vm._s(_vm.record.options.defaultValue)}}):(_vm.dynamicVisibleItem)?_c('div',[( _vm.record.type === 'divider' && _vm.record.label !== '' && _vm.record.options.orientation )?_c('el-divider',{attrs:{"content-position":_vm.record.options.orientation,"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}},[_vm._v(" "+_vm._s(_vm.record.label)+" ")]):(_vm.record.type === 'divider' && _vm.record.label !== '')?_c('el-divider',{attrs:{"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}},[_vm._v(" "+_vm._s(_vm.record.label)+" ")]):(_vm.record.type === 'divider' && _vm.record.label === '')?_c('el-divider',{attrs:{"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}}):_vm._e()],1):_vm._e()}
var form_itemvue_type_template_id_551cf144_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/index.vue?vue&type=template&id=551cf144&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/index.vue?vue&type=template&id=5bef0058&scoped=true&
var tablevue_type_template_id_5bef0058_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.record.model,"name":_vm.record.model}},[_c('el-table',{class:[
       'form-table',
       _vm.record.options.customClass ? _vm.record.options.customClass : '' 
     ],style:(_vm.record.options.customStyle),attrs:{"rowKey":function (record) { return record.key; },"data":_vm.models[_vm.record.model],"bordered":"","scroll":{
       x:
         _vm.record.list.length * 190 +
         80 +
         (!_vm.record.options.hideSequence ? 60 : 0),
       y: _vm.record.options.scrollY
     }}},[(_vm.isVisible)?[(!_vm.record.options.hideSequence)?_c('el-table-column',{attrs:{"label":"序号","align":"center","type":"index","width":"50"}}):_vm._e(),_vm._l((_vm.record.list),function(item,index){return [(_vm.record.options.addType != 'dialog' || (_vm.record.options.showItem && _vm.record.options.showItem.includes(item.model) ))?_c('el-table-column',{key:index,attrs:{"label":item.label,"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('TableItem',{attrs:{"record":item,"renderPreview":_vm.renderPreview || _vm.record.options.addType == 'dialog',"domains":_vm.models[_vm.record.model][scope.$index]}})]}}],null,true)}):_vm._e()]}),(!_vm.renderPreview || _vm.record.options.addType == 'dialog')?_c('el-table-column',{attrs:{"label":"操作","align":"center","width":_vm.renderPreview ? 120 : (_vm.record.options.copyRow ? 250 : 200)},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.renderPreview && _vm.record.options.addType == 'dialog')?_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){return _vm.updateDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-eye"}),_vm._v("查看 ")]):_vm._e(),(!_vm.renderPreview && _vm.record.options.addType == 'dialog')?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.updateDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v("修改 ")]):_vm._e(),(!_vm.renderPreview && _vm.record.options.copyRow)?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.copyDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-copy-document"}),_vm._v("复制 ")]):_vm._e(),(!_vm.renderPreview)?_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){return _vm.removeDomain(scope.$index)}}},[_c('i',{staticClass:"el-icon-delete"}),_vm._v("删除 ")]):_vm._e()]}}],null,false,2814633969)}):_vm._e()]:_vm._e()],2),(!_vm.renderPreview)?_c('el-button',{attrs:{"type":"dashed","disabled":_vm.disabled},on:{"click":_vm.addDomain}},[_c('i',{staticClass:"el-icon-circle-plus-outline"}),_vm._v("增加 ")]):_vm._e(),(_vm.addOrUpdateVisible)?_c('AddOrUpdate',{ref:"addOrUpdate",attrs:{"formConfig":_vm.config,"formTemplate":_vm.templateData,"renderPreview":_vm.renderPreview},on:{"formAdd":_vm.formAdd,"formUpdate":_vm.formUpdate}}):_vm._e()],1)}
var tablevue_type_template_id_5bef0058_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/index.vue?vue&type=template&id=5bef0058&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/table-item.vue?vue&type=template&id=29a51940&
var table_itemvue_type_template_id_29a51940_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.record.type === 'text')?_c('div',{style:({ textAlign: _vm.record.options.textAlign })},[_c('span',[_vm._v(_vm._s(_vm.record.label))])]):(_vm.record.type === 'html')?_c('div',{domProps:{"innerHTML":_vm._s(_vm.record.options.defaultValue)}}):_c('div',[_c('BaseItem',{attrs:{"models":_vm.domains,"record":_vm.record,"renderPreview":_vm.renderPreview}})],1)}
var table_itemvue_type_template_id_29a51940_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/table-item.vue?vue&type=template&id=29a51940&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/base-item.vue?vue&type=template&id=40023938&
var base_itemvue_type_template_id_40023938_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.renderPreview)?_c('div',[( [
        'input',
        'textarea',
        'date',
        'time',
        'number', 
        'rate',
        'switch',
        'slider' 
      ].includes(_vm.record.type))?[(_vm.record.options.prepend)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.prepend))}}):_vm._e(),(!_vm.loading)?_c('span',[_vm._v(_vm._s(_vm.models[_vm.record.model])+" ")]):_vm._e(),(_vm.record.options.append)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))}}):_vm._e()]:([
        'radio',
        'checkbox',
        'select',
        'cascader'
      ].includes(_vm.record.type))?[_vm._v(" "+_vm._s(_vm.models[_vm.record.model+'_label'])+" ")]:([
        'uploadImg',
        'uploadFile'
      ].includes(_vm.record.type))?[(_vm.record.type == 'uploadImg')?_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"fileForm":_vm.models,"fileKey":_vm.record.model,"updateNow":true,"accept":"image/*","list-type":_vm.record.options.listType,"readOnly":true}}):_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"fileForm":_vm.models,"updateNow":true,"fileKey":_vm.record.model,"readOnly":true}})]:(_vm.customList.includes(_vm.record.type))?[_c('customComponent',{attrs:{"models":_vm.models,"record":_vm.record,"disabled":_vm.disabled || _vm.record.options.disabled,"renderPreview":true},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}})]:[_vm._v(" "+_vm._s("")+" ")]],2):_c('div',{staticClass:"base-item"},[(_vm.record.type === 'input')?_c('el-input',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder,"type":_vm.record.options.type,"clearable":_vm.record.options.clearable,"maxlength":_vm.record.options.maxLength > 0 ? _vm.record.options.maxLength : null},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[(_vm.record.options.prepend)?_c('span',{attrs:{"slot":"prepend"},domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.prepend))},slot:"prepend"}):_vm._e(),(_vm.record.options.append)?_c('span',{attrs:{"slot":"append"},domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))},slot:"append"}):_vm._e()]):(_vm.record.type === 'textarea')?_c('el-input',{style:(("width:" + (_vm.record.options.width))),attrs:{"type":"textarea","disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder,"clearable":_vm.record.options.clearable,"maxlength":_vm.record.options.maxLength > 0 ? _vm.record.options.maxLength : null,"rows":_vm.record.options.rows,"show-word-limit":_vm.record.options.maxLength > 0 && _vm.record.options.maxLength > 10},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'number')?[_c('div',{staticClass:"el-input-number-diaplay",style:(("width:" + (_vm.record.options.width)))},[_c('el-input-number',{class:_vm.record.options.append ? 'el-input-number__append' : null,style:("width:100%;float:left;"),attrs:{"min":_vm.record.options.min || _vm.record.options.min === 0
            ? _vm.record.options.min
            : -Infinity,"max":_vm.record.options.max || _vm.record.options.max === 0
            ? _vm.record.options.max
            : Infinity,"disabled":_vm.disabled || _vm.record.options.disabled,"step":_vm.record.options.step,"precision":_vm.record.options.precision > 50 ||
          (!_vm.record.options.precision && _vm.record.options.precision !== 0)
            ? null
            : _vm.record.options.precision,"controls-position":"right","placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}),(_vm.record.options.append)?_c('div',{staticClass:"el-input-group__append el-input-number-group__append ",domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))}}):_vm._e()],1)]:(_vm.record.type === 'select' )?[(_vm.record.options.multiple)?_c('el-select',{style:(("width:" + (_vm.record.options.width))),attrs:{"value-key":_vm.itemProp.value,"remote":_vm.record.options.onlineSearch && _vm.record.options.showSearch,"remote-method":_vm.remoteMethod,"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.disabled || _vm.record.options.disabled,"clearable":_vm.record.options.clearable,"multiple":""},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model ,  true)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) ? _vm.checkValues : _vm.record.options.options)),function(item){return [(_vm.itemVisible(item))?_c('el-option',{key:item[_vm.itemProp.value],attrs:{"label":item[_vm.itemProp.label],"value":item[_vm.itemProp.value]}}):_vm._e()]})],2):_c('el-select',{style:(("width:" + (_vm.record.options.width))),attrs:{"value-key":_vm.itemProp.value,"remote":_vm.record.options.onlineSearch && _vm.record.options.showSearch,"remote-method":_vm.remoteMethod,"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.disabled || _vm.record.options.disabled,"clearable":_vm.record.options.clearable},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model , true)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) ? _vm.checkValues : _vm.record.options.options)),function(item){return [(_vm.itemVisible(item))?_c('el-option',{key:item[_vm.itemProp.value],attrs:{"label":item[_vm.itemProp.label],"value":item[_vm.itemProp.value]}}):_vm._e()]})],2)]:(_vm.record.type === 'checkbox')?_c('el-checkbox-group',{attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_vm._l((( (_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) ? _vm.checkValues : _vm.record.options.options)),function(checkitem){return [(_vm.itemVisible(checkitem))?_c('el-checkbox',{key:checkitem[_vm.itemProp.value],attrs:{"label":checkitem[_vm.itemProp.value]}},[_vm._v(" "+_vm._s(checkitem[_vm.itemProp.label])+" ")]):_vm._e()]})],2):(_vm.record.type === 'radio')?_c('el-radio-group',{attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) ? _vm.checkValues : _vm.record.options.options)),function(radioitem){return [(_vm.itemVisible(radioitem))?_c('el-radio',{key:radioitem[_vm.itemProp.value],attrs:{"label":radioitem[_vm.itemProp.value]}},[_vm._v(" "+_vm._s(radioitem[_vm.itemProp.label])+" ")]):_vm._e()]})],2):(_vm.record.type === 'date')?[(_vm.record.options.range)?_c('el-date-picker',{attrs:{"align":"right","type":"daterange","clearable":_vm.record.options.clearable,"disabled":_vm.disabled || _vm.record.options.disabled,"start-placeholder":_vm.record.options.rangeStartPlaceholder,"end-placeholder":_vm.record.options.rangeEndPlaceholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}}):_c('el-date-picker',{attrs:{"align":"right","type":"date","clearable":_vm.record.options.clearable,"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})]:(_vm.record.type === 'time')?_c('el-time-select',{attrs:{"clearable":_vm.record.options.clearable,"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'rate')?_c('el-rate',{attrs:{"max":_vm.record.options.max,"disabled":_vm.disabled || _vm.record.options.disabled,"placeholder":_vm.record.options.placeholder,"allowHalf":_vm.record.options.allowHalf},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'slider')?_c('el-slider',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"min":_vm.record.options.min,"max":_vm.record.options.max,"show-input":_vm.record.options.showInput,"step":_vm.record.options.step,"marks":_vm.sliderMarks},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'uploadImg')?_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.disabled,"fileForm":_vm.models,"fileKey":_vm.record.model,"accept":"image/*","list-type":_vm.record.options.listType,"multiple":true,"action":_vm.record.options.action,"limit":_vm.record.options.limit},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}}):(_vm.record.type === 'uploadFile')?_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.disabled,"fileForm":_vm.models,"fileKey":_vm.record.model,"multiple":true,"action":_vm.record.options.action,"limit":_vm.record.options.limit},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}}):(_vm.record.type === 'cascader')?_c('el-cascader',{ref:"cascader",style:(("width:" + (_vm.record.options.width))),attrs:{"options":(_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc ? _vm.checkValues : _vm.record.options.options),"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.disabled || _vm.record.options.disabled,"clearable":_vm.record.options.clearable,"props":_vm.itemProp},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}}):(_vm.record.type === 'switch')?_c('el-switch',{attrs:{"active-text":_vm.record.options.activeText,"inactive-text":_vm.record.options.inactiveText,"disabled":_vm.disabled || _vm.record.options.disabled},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.customList.includes(_vm.record.type))?_c('customComponent',{attrs:{"models":_vm.models,"record":_vm.record,"disabled":_vm.disabled || _vm.record.options.disabled,"formConfig":_vm.formConfig,"renderPreview":_vm.renderPreview},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}}):_vm._e()],2)}
var base_itemvue_type_template_id_40023938_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/base-item.vue?vue&type=template&id=40023938&

// EXTERNAL MODULE: ./node_modules/_axios@0.18.1@axios/index.js
var _axios_0_18_1_axios = __webpack_require__("f753");
var _axios_0_18_1_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axios);

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/utils/request.js


const request = _axios_0_18_1_axios_default.a.create({
  withCredentials: false
})

/**
 * 请求拦截
 */
request.interceptors.request.use(
  config => {
    // 判断是否有自定义的配置
    if(window.httpConfig) {
      let _config = window.httpConfig(config)
      if(_config) {
        config = _config 
      }
    }
    return config
  },
  error => {
    console.log('error', error)
    return Promise.reject(new Error(error).message)
  }
)

request.interceptors.response.use(
  response => { 
    return response.data
  },
  error => {
    console.log('error', error)
    return Promise.reject(new Error(error).message)
  }
)

/* harmony default export */ var utils_request = (request);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue?vue&type=template&id=7d4e7325&
var file_uploadvue_type_template_id_7d4e7325_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-div"},[(_vm.readOnly == null || _vm.readOnly == false)?_c('el-upload',{ref:"upload",attrs:{"list-type":_vm.listType,"with-credentials":true,"action":_vm.doUpload,"file-list":_vm.fileList,"on-remove":_vm.handleRemove,"on-preview":_vm.handlePreview,"before-remove":_vm.beforeRemove,"on-success":_vm.handleSuccess,"on-error":_vm.handerError,"before-upload":_vm.beforeAvatarUpload,"accept":_vm.accept,"multiple":_vm.multiple && (_vm.multiple == true || _vm.multiple == 'true'),"limit":_vm.limit,"on-exceed":_vm.handleExceed}},[(_vm.accept &&  _vm.accept.indexOf('image') >= 0 &&  _vm.listType && _vm.listType.indexOf('picture') >= 0 )?_c('i',{staticClass:"el-icon-plus"}):_c('div',[_c('el-button',{attrs:{"icon":"el-icon-plus"}},[_vm._v("请上传文件")])],1)]):_vm._e(),(_vm.readOnly == null || _vm.readOnly == false)?_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v(" "+_vm._s(_vm.accept && _vm.accept.indexOf('image') >= 0 && _vm.listType && _vm.listType.indexOf('picture') >= 0 ? '* 图片最大不能超过'+(this.fileSize ==undefined ? 10 :this.fileSize)+'Mb,图片格式支持(bmp,jpg,jpeg,png)' : '* 文件最大不能超过'+(this.fileSize ==undefined ? 10 :this.fileSize)+'Mb,文件格式支持(bmp,jpg,jpeg,png,xls,xlsx,doc,docx,pdf,mp4,wmv,zip,txt,csv)')+" ")]):_c('div',[(_vm.accept && _vm.accept.indexOf('image') >= 0 && _vm.listType && _vm.listType.indexOf('picture-card') >= 0)?_c('div',[_c('ul',{staticStyle:{"list-style":"none"}},_vm._l((_vm.fileList),function(item,index){return _c('li',{key:index,staticStyle:{"float":"left","margin-right":"20px"}},[_c('img',{class:[_vm.direction == null || _vm.direction == false?'avatar':'vertical'],style:(_vm.imgDownBut?'float: left;':''),attrs:{"src":item.url},on:{"click":function($event){return _vm.reviewDown(item.id)}}}),(_vm.imgDownBut)?_c('el-button',{staticStyle:{"padding":"90px 0 16px 30px","float":"left"},attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.imgDown(item.id)}}},[_c('i',{staticClass:"el-icon-download"})]):_vm._e(),(_vm.imgDownBut)?_c('div',{staticStyle:{"clear":"both"}}):_vm._e()],1)}),0)]):_c('ul',{staticClass:"el-upload-list el-upload-list--text"},_vm._l((_vm.fileList),function(item,index){return _c('li',{key:item.id,staticClass:"el-upload-list__item pointer",attrs:{"tabindex":index},on:{"click":function($event){return _vm.reviewDown(item.id , item.fileSuffix)}}},[_c('a',{staticClass:"el-upload-list__item-name"},[_c('i',{staticClass:"el-icon-document"}),_vm._v(" "+_vm._s(item.oldFileName)+" ")]),_vm._m(0,true)])}),0)]),_c('el-dialog',{attrs:{"append-to-body":true,"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1)}
var file_uploadvue_type_template_id_7d4e7325_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-upload-list__item-status-label"},[_c('i',{staticClass:"el-icon-upload-success el-icon-circle-check"})])}]


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue?vue&type=template&id=7d4e7325&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var file_uploadvue_type_script_lang_js_ = ({
  name: "fileUpload",
  data () {
    return {
      fileList: [],
      files: [],
      doUpload: this.action,
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  watch: {
    formFiles: {// 深度监听，可监听到对象、数组的变化
      handler (val, oldVal) { 
        /* if (this.files != null && this.files.length > 0) {
          return
        } */

        let fs = val

        if (JSON.stringify(fs) == JSON.stringify(this.files)) return

        if (fs != null && this.files.length != fs.length) {
          this.files = []
          this.fileList = []
          this.initFiles()
        } else {
          this.files = []
          this.fileList = []
        }
      },
      deep: true
    },
    updateNow (val) {
      if (val) {
        this.files = []
        this.fileList = []
        this.initFiles()
      }
    }
  },
  computed: {
    formFiles () {
　　　　return this.fileForm[this.fileKey]
    }
  },
  // notPhysicalDels 不能够物理删除的文件ID列表
  props: ['fileKey', 'fileForm', 'readOnly', 'accept', 'limit', 'listType', 'direction', 'notPhysicalDels', 'imgDownBut', 'updateNow', 'multiple', 'fileSize' , 'action'],
   
  mounted(){ 
    this.initFiles()
  },
  methods: {
    // 钩子函数上传附件成功后
    handleSuccess (res, file) { 
      if (res.code == 401) {
        this.$message.error('当前账号已在其他地方登录,请重新登录!')
        this.$router.replace({ name: 'login' })
        return
      }
      if (!res || res.code != 0) {
        // 上传失败时候  去除进度条
        let list = this.$refs['upload'].uploadFiles
        this.$refs['upload'].uploadFiles = list.filter(item => {
          return item.uid != file.uid
        })
        this.$message.error(res.msg ? res.msg : '上传失败')
        return
      } 
      file.id = res.data.id
      file.url = res.data.url
      this.files.push(res.data.id)
      if (this.fileForm != null && (this.fileForm[this.fileKey] == null || this.fileForm[this.fileKey].length == 0)) {
        const key = this.fileKey
        // this.fileForm = {}
        this.fileForm[key] = this.files
      } else {
        this.fileForm[this.fileKey] = this.files
      }
      this.$message('上传成功') 
      this.$emit('uploadChange', {id: res.data.id, url: res.data.url, type: 'add', fileForm: this.fileForm})

    },
    handerError (err, file, fileList) {
      console.log('error', err, file, fileList)
      // download
    },
    beforeAvatarUpload (file) {
     // console.log('file', file)
      const fileName = file.name
    // const isJPG = file.type === 'image/jpeg';
      const isLt10M = file.size / 1024 / 1024 < (this.fileSize == undefined ? 10 : this.fileSize)

      var index1 = fileName.lastIndexOf('.')

      var index2 = fileName.length
      var postf = fileName.substring(index1 + 1, index2)// 后缀名

   // console.log('ff' , postf)
    /*  if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      } */

   // console.log('file' , file)
      const fileType = file.type
      if (this.accept && this.accept.indexOf('image') >= 0 && !this.isAssetTypeAnImage(postf)) {
        this.$message.error('当前图片格式只支持:[png,jpg,jpeg,bmp]')
        return false
      }

      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过' + (this.fileSize == undefined ? 10 : this.fileSize) + 'MB!')
      }
      return isLt10M
    },
    isAssetTypeAnImage (ext) {
      return [
        'png', 'jpg', 'jpeg', 'bmp']
  .indexOf(ext.toLowerCase()) !== -1
},
    // 文件溢出
    handleExceed (files, fileList) {
      this.$message.error('最多只能上传 ' + this.limit + ' 个文件')
    },
    handleRemove (file, fileList) {
      // console.log('fileList' , fileList)
      // console.log('file' , file)

      let id = file.id
      if (id == null && file.response) {
        id = file.response.id
      }
      let url = file.url
      if (url == null && file.response) {
        url = file.response.fileUrl
      }
      let itemId = file.itemId
      if (itemId == null && file.response) {
        itemId = file.response.itemId
      }

      // 判断是否再非物理删除的文件列表内
      if (this.notPhysicalDels && this.notPhysicalDels.indexOf(id) >= 0) {
        for (var i in this.files) {
          if (this.files[i] == id) {
            this.files.splice(i, 1)
            break
          }
        }
        this.fileForm[this.fileKey] = this.files
        this.$emit('uploadChange', {id: id, url: url, type: 'delete', itemId: itemId, fileForm: this.fileForm})
            // this.$emit('uploadChanges' , this.files)
             // 清除 删除的数据
        let list = this.$refs['upload'].uploadFiles
        this.$refs['upload'].uploadFiles = list.filter(item => {
          return item.response.id != id
        })
        this.$message('删除成功')
        return
      }

      if (id != null && id != '') {
        // 后台删除
      
            // console.log('this files 152' , this.files)
            for (var j in this.files) {
              if (this.files[j] == id) {
                this.files.splice(j, 1)
                break
              }
            }
            // console.log('this files 159' ,  {id:res.id , url:res.url,type:"delete",itemId:data.file.itemId})
            this.fileForm[this.fileKey] = this.files

           
            // this.$emit('uploadChanges' , this.files)
          
      }

      // console.log(file, fileList);
    },
    initFiles () { 
      if (!this.fileForm || !this.fileForm[this.fileKey]) { return }

      let upFiles = this.fileForm[this.fileKey]
    
      // 判断类型
      if (typeof upFiles === 'string') {
        upFiles = upFiles.split(',')
      }

      if (upFiles.length == 0) {
        return
      } 
      // 拼接ids
      const ids = upFiles.join(',')
      const this_ = this 
      utils_request({
        url:  http_get_file_list_url + `?ids=` + ids ,
        method: 'get',
        params: {}
      }).then((data) => { 
        if (data && data.code === 0) {
          let efiles = data.data
          let fs = []
          if (efiles != null && efiles.length > 0) {
            efiles.forEach(t => {
              t.name = t.oldFileName
              t.url = t.fileUrl
              fs.push(t.id)
            })
          }

          this_.fileList = efiles
          this_.files = fs
          //  console.log('end files ' , this.fileList)
        }
      })
    },
    // 浏览下载文件
    reviewDown (id , fileSuffix) {
      this.handlePreview({id: id , fileSuffix:fileSuffix})
    },
    handlePreview (file) {
    
      if (file && file.id) {
        // 判断是不是图片 如果是图片进行预览
        if ((this.accept && this.accept.indexOf('image') >= 0) || (file.fileSuffix && this.isAssetTypeAnImage(file.fileSuffix) ))  {
          this.dialogImageUrl = http_down_file_url + '?uuid=' + file.id 
          this.dialogVisible = true
        } else { 
          window.location.href = http_down_file_url +'?uuid=' + file.id 
        }
      }
    },
    // 图片下载
    imgDown (id) { 
      window.location.href = http_down_file_url + '?uuid=' + id 
    },

    beforeRemove (file, fileList) {
     // console.log('file remove', file)
      return !file.id || this.$confirm(`确定移除 ${file.oldFileName}？`)
    }
   

  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_file_uploadvue_type_script_lang_js_ = (file_uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue?vue&type=style&index=0&lang=css&
var file_uploadvue_type_style_index_0_lang_css_ = __webpack_require__("d81e");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/file-upload/index.vue






/* normalize component */

var file_upload_component = normalizeComponent(
  form_item_file_uploadvue_type_script_lang_js_,
  file_uploadvue_type_template_id_7d4e7325_render,
  file_uploadvue_type_template_id_7d4e7325_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var file_upload = (file_upload_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/custom-component.vue?vue&type=template&id=4390095b&
var custom_componentvue_type_template_id_4390095b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.customComponent,{tag:"component",style:(("width:" + (_vm.record.options.width))),attrs:{"record":_vm.record,"disabled":_vm.disabled,"preview":_vm.renderPreview,"models":_vm.models},on:{"change":_vm.handleChange}})],1)}
var custom_componentvue_type_template_id_4390095b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/custom-component.vue?vue&type=template&id=4390095b&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/custom-component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var custom_componentvue_type_script_lang_js_ = ({
	data() {
		return {

		}
	},
	props: {
	    // 表单数组 
	    record: {
	      type: Object,
	      required: true
	    },
	    // form-item 宽度配置
	    formConfig: {
	      type: Object,
	      required: false
	    },
	    // form-item 宽度配置
	    models: {
	      type: Object,
	      required: true
	    }, 
	    disabled: {
	      type: Boolean,
	      default: false
	    } ,
	      // 是否预览结果表单
	    renderPreview: {
	      type: Boolean ,
	      default: false
	    } 
	},
	computed: {
	    customComponent() {
	      // 计算需要显示的组件
	      let customComponentList = {};
	      if (window.customComponents) {
	        // 将数组映射成json
	        window.customComponents.forEach(item => {
	          customComponentList[item.type] = item.component;
	        });
	      }
	      return customComponentList[this.record.type];
	    }
	},
	methods: {
		handleChange(value, key) {
	      this.$emit("change", value, key);
	    }
	}
});


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/custom-component.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_custom_componentvue_type_script_lang_js_ = (custom_componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/custom-component.vue





/* normalize component */

var custom_component_component = normalizeComponent(
  form_item_custom_componentvue_type_script_lang_js_,
  custom_componentvue_type_template_id_4390095b_render,
  custom_componentvue_type_template_id_4390095b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var custom_component = (custom_component_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/base-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 


 

/* harmony default export */ var base_itemvue_type_script_lang_js_ = ({
  name: "VueDragBaseItem",
  data(){
    return{
      loading: false,
      checkList: [],
      checkValues: [], // ajax获取的动态数据绑定
      itemProp: {
        children: 'children',
        value: 'value',
        label: 'label',
        multiple: this.record.options.multiple,

      },
      // 2021-03-13 针对实时搜索回调的时候将动态的url放置在外部，方便组件联动的时候引用
      remoteUrl: '' ,

      // 2021-03-13 如果该字段带有本地数据过滤,则这里保存本地过滤的过滤条件
      localFilter: [],
      remoteFilter: {} , // 远程过滤搜索 结构 {key:xx,value:xx}
    }
  },
  props: {
    // 表单数组

    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    formConfig: {
      type: Object,
      required: false
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    }, 
    disabled: {
      type: Boolean,
      default: false
    } ,
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
     // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean ,
      default: false
    } 
  },
  components: {
     FileUpload: file_upload,CustomComponent: custom_component
  }, 
  computed: {
    sliderMarks() {
        
      if(this.record.type !== 'slider' || !this.record.options.marks || this.record.options.marks.length == 0) {
        return null 
      }

      let p = {}  

      this.record.options.marks.forEach(t=> {
       
        p[t.value] = t.label 
        
      })

      return p ;

    },
    customList() {
     
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    },
    linkageData() {
       if(!this.isDragPanel && this.record.options.linkage ) {
          const linkData = this.record.options.linkData
          if(!linkData) return null

          let vs = []
          for(let i = 0 ; i < linkData.length ; i++) {
            // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
            const ld = linkData[i]
            if(ld.model) {
              // local script
              vs.push(this.models[ld.model])

            }
          }
          return vs 

        }
        return null
    }
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        //this.models[this.record.model] = val
        this.$set(this.models , this.record.model , val)
      },
      deep:true
    },
    // 远程方法获取的数据尝试再这里回填label
    checkValues: {
      handler(val, oldVal){
         this.handleChange(val ,this.record.model , 1)
      },
      deep:true
    },
    // 监听关联字段
    linkageData: {
      handler(val , oldVal) { 
        if(this.record.options.linkage ) {
          const linkData = this.record.options.linkData
          if(!linkData) return  

          // 本地搜索
          let localScript = []
          let remoteQuery = {}
          for(let i = 0 ; i < linkData.length ; i++) {
            // 判断类型 vtype=1 本地搜索 vtype=2 远程过滤
            const ld = linkData[i]
            if(ld.vtype == 1) {
              // local script
              localScript.push(ld.script) 
            } else if(ld.vtype == 2 
              // 确定有远程搜索
                &&  this.record.options.dynamic == 1 && this.record.options.remoteFunc
                // 确定搜索的key 和value存在
                && ld.queryKey && ld.queryValue) {
              // remote 远程过滤 

              // 解析queryValue
              const queryValue = dynamicFun(ld.queryValue , this.models)

              remoteQuery[ld.queryKey] = queryValue 
                
            }
          }

          this.localFilter = localScript
          this.remoteFilter = remoteQuery

          // 将当前选中值设置为空 防止选择的值目前展示不出来后永远不能反选
          if( (this.record.type === 'select' && this.record.options.multiple) || this.record.type === 'checkbox') {
            this.checkList = []
          } else {
             this.$set(this.models , this.record.model , null)
          }
    

          if(this.remoteFilter) {
            this.getRemoteData()
          }

        }
         
      },
      deep:true
    } 
  },
  methods: {
    transformAppend(append){
      if(append && (append.indexOf('return') >= 0 || append.indexOf('$') >= 0 )){
        // 创建函数 返回结果
          const script = append

          // 打开了开关 这里获取函数内容 
          const fvalue = dynamicFun(script,this.models) 

          return fvalue 
      } 
      return append 
    },
    remoteMethod(query){
      let queryParam = this.record.options.onlineParams
      queryParam = queryParam.replace('$' , query)

      let url =  this.record.options.remoteFunc 

      if(url.indexOf('?') >= 0){
        url += '&' + queryParam
      } else {
        url += '?' + queryParam
      }

      this.remoteUrl = url 

      this.getRemoteData()
    },
    // 获取远程数据
    getRemoteData() { 

      const objectPath = __webpack_require__("0089");
      
      const dataPath = this.record.options.dataPath

      utils_request({
        url: this.remoteUrl,
        method: 'get',
        params: {
          ...this.remoteFilter
        }
      }).then((data) => {
        if (data) { 
          // 获取list 根据dataPath 
          const rdata = objectPath.get(data, dataPath);

          this.checkValues = rdata
        }
      })



    },
    // 2021-03-13 判断列表中具体某个值是否应该显示
    dynamicVisible(script , item) {
       const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
      const Fn = new Function('$','$item', func)
      return Fn(this.models , item)
    },
    // 2021-03-13 针对select radio checkbox判断如果有本地过滤关联，判断该条数据是否该显示 
    itemVisible(item) {
      // 没有过滤条件 直接全部展示
     // console.log('this.localFilter' , this.localFilter)
      if(this.isDragPanel || !this.localFilter || this.localFilter.length == 0) return true 

      //挨个过滤判断 
            // 本地搜索开始
      for(let i = 0 ; i < this.localFilter.length ; i++) {
          const v = this.dynamicVisible(this.localFilter[i] , item )
         // console.log('sitem' , item , v)
          if(!v) {
            return false
          }
      }  
      return true 
    },
    handleChange(value, key , type) {
      // change事件 
      this.$emit("change", value, key); 

      // 根据类型判断 如果是 select , radio , checkbox , cascader 则回带具体的显示值
      if(['select' , 'radio' , 'checkbox' , 'cascader'].includes(this.record.type)){
        let labels = []
        // 获取数据 判断从ajax 还是本地默认配置
        let datas = this.record.options.dynamic > 0 ? this.checkValues : this.record.options.options
        if(!datas) {
          datas = []
        }

        // 回填数据
        if(this.record.type == 'cascader'){
          let as = [] 
          // 判断是不是复选
          if(!this.itemProp.multiple) {
            // 复选
            as = [value]
          } else {
            as = value
          }

          const checkNodes = this.$refs.cascader.getCheckedNodes()
          for(let i = 0 ; i < as.length ; i++){
              const v = as[i] 
              // 比对nodes 显示值
              const fs = checkNodes.filter(t=>t.path == v) 
              
              if(fs && fs.length > 0) {
                const label = fs[0].pathLabels
                if(label && label.length > 0)
                 labels.push(label.join('/'))
              }
              
          }



        } else {
          let as = []

           if(!(value instanceof Array)){
            as = [value]
           } else {
            as = value
           }

           for(let i = 0 ; i < as.length ; i++){
              const v = as[i] 
              const fs = datas.filter(t=>t[this.itemProp.value] == v)
              if(fs && fs.length > 0) {
                const label = fs[0][this.itemProp.label]

                labels.push(label)
              }
              
            }

        }

        const modelLabel = this.record.model + '_label'
        //this.models[modelLabel] = labels.join(',')
        this.$set(this.models , modelLabel , labels.join(','))


        // 2020-08-01 如果有远程调用并且有选择回调 再这里进行回调 
        if(/*this.record.options.onlineSearch && this.record.options.showSearch &&*/ type && this.record.options.selectCb) {

          // 找到当前选择的数据实体  
          // 获取数据
          const cvalues = (this.record.options.dynamic == 1 && this.record.options.remoteFunc  ?  this.checkValues : this.record.options.options)
 
          const fs = cvalues.filter(t=>t[this.itemProp.value] == value)
 
          if(fs && fs.length > 0) {
            const select = fs[0] 

            // 构建函数 去执行 
            this.$nextTick(()=>{
              const scriptFunc = this.record.options.selectCb
              const func =  '{' + scriptFunc + '}'  
              const Fn = new Function('$' , '$select', func)
            
              Fn(this.models,select)

              
            })
           
          }


         

        }


      }
    }
  },
  activated(){
    

  },
  mounted() { 
     // 2020-07-30 如果有cbColumn 则尝试从data中回填数据  
   
    if(this.record.options.cbColumn && !this.isDragPanel) {
      this.loading = true
      const value = this.data[this.record.options.cbColumn] 
     // this.models[this.record.model] = value  
      this.$set(this.models , this.record.model , value)
      this.loading = false
      return
    }

     // 判断如果是远程方法的话 远程请求数据
    if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
      const url =  this.record.options.remoteFunc 
      this.remoteUrl = url 
      

      this.getRemoteData()
 

      this.itemProp.label = this.record.options.remoteLabel
      this.itemProp.value = this.record.options.remoteValue
      this.itemProp.children = this.record.options.remoteChildren
    } 

    
    // 如果已经赋值了 则不管默认值了 
    if(this.models && Object.prototype.hasOwnProperty.call(this.models, this.record.model)) {
      // 判断数据类型是否正确 
      // 类型为checkbox cascader 但数据非array类型 则强制转array
      let modelValue = this.models[this.record.model]
      if(  this.record.type == 'checkbox' || this.record.type == 'cascader' || (
        // 2020-07-31 如果时下拉复选 这里也绑定的是数组
          this.record.type == 'select' && this.record.options.multiple 
        )) {
        if(!(modelValue instanceof Array)){
          modelValue = [modelValue]
          this.$set(this.models , this.record.model , modelValue)
        }
  
        //this.models[this.record.model] = vs
        this.checkList = modelValue 
      }

      return ;
    }

    const defaultValue = this.record.options.defaultValue
    if(defaultValue) {
      if(this.record.type == 'checkbox' || this.record.type == 'cascader'){
        this.checkList = defaultValue
      } else {
        //this.models[this.record.model] = defaultValue
        this.$set(this.models , this.record.model , defaultValue)
      } 

      this.handleChange(defaultValue , this.record.model)
    }


      // 2021-03-16 lyf 判断当前没有值并且类型是input 或者textarea 给初始化model

    if(!this.isDragPanel && !Object.prototype.hasOwnProperty.call(this.models, this.record.model)  ) {
      this.$set(this.models , this.record.model , '')
       
    }
  
 
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/base-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_base_itemvue_type_script_lang_js_ = (base_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/form-item/base-item.vue?vue&type=style&index=0&lang=css&
var base_itemvue_type_style_index_0_lang_css_ = __webpack_require__("2535");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/base-item.vue






/* normalize component */

var base_item_component = normalizeComponent(
  form_item_base_itemvue_type_script_lang_js_,
  base_itemvue_type_template_id_40023938_render,
  base_itemvue_type_template_id_40023938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var base_item = (base_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/table-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 

 
/* harmony default export */ var table_itemvue_type_script_lang_js_ = ({
  name: "TableItem",
  props: {
     record: {
      type: Object,
      required : true
    }, 
    domains: {
      type: Object,
      required : true
    },  
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  }, 
  computed: {
     customList() {
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  components: {
     BaseItem: base_item
  },  
  methods: {
    
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/table-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_table_itemvue_type_script_lang_js_ = (table_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/table-item.vue





/* normalize component */

var table_item_component = normalizeComponent(
  table_table_itemvue_type_script_lang_js_,
  table_itemvue_type_template_id_29a51940_render,
  table_itemvue_type_template_id_29a51940_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_item = (table_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/add-or-update.vue?vue&type=template&id=3c518ba6&
var add_or_updatevue_type_template_id_3c518ba6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm._id ? '新增' : '修改',"close-on-click-modal":false,"append-to-body":true,"lock-scroll":false,"visible":_vm.visible,"id":_vm.randomId},on:{"update:visible":function($event){_vm.visible=$event}}},[(
        typeof _vm.formTemplate.list !== 'undefined' && typeof _vm.formTemplate.config !== 'undefined'
      )?_c('el-form',{ref:"dataForm",staticClass:"form-build form-design",attrs:{"label-position":_vm.formTemplate.config.labelPosition,"hide-required-asterisk":_vm.formTemplate.config.hideRequiredMark,"label-width":_vm.formTemplate.config.labelWidth + 'px',"model":_vm.dataForm,"size":"mini"}},[_vm._l((_vm.formTemplate.list),function(item,index){return [(
      !(item.options.hidden === true) &&
        ([
          'input',
          'textarea',
          'date',
          'time',
          'number',
          'radio',
          'checkbox',
          'select',
          'rate',
          'switch',
          'slider',
          'uploadImg',
          'uploadFile',
          'cascader'
        ].includes(item.type) || _vm.customList.includes(item.type) ) && _vm.dynamicVisibleItem(item)  )?_c('el-form-item',{key:index,attrs:{"label":_vm.formTemplate.config.labelWidth > 0 ? item.label : null,"rules":_vm.recordRules(item),"prop":item.rules && item.rules.length > 0 ? item.model : null,"id":item.model,"name":item.model}},[(item.options.tooptip && item.options.tooptip.trim())?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","enterable":false,"open-delay":500,"placement":"top-start"}},[_c('div',{staticClass:"tooltip-content",attrs:{"slot":"content"},slot:"content"},[_vm._v(" "+_vm._s(item.options.tooptip))]),_c('BaseItem',{attrs:{"models":_vm.dataForm,"formConfig":_vm.formTemplate.config,"renderPreview":_vm.renderPreview,"record":item,"disabled":_vm.disabled || item.options.disabled}})],1):_c('BaseItem',{attrs:{"models":_vm.dataForm,"formConfig":_vm.formTemplate.config,"renderPreview":_vm.renderPreview,"record":item,"disabled":_vm.disabled || item.options.disabled}})],1):_vm._e()]}),_c('el-form-item',{attrs:{"label":"排序","prop":"seq"}},[(_vm.renderPreview)?[_vm._v(" "+_vm._s(_vm.dataForm.seq)+" ")]:[_c('el-input-number',{attrs:{"controls-position":"right","min":0,"label":"排序号","disabled":_vm.renderPreview},model:{value:(_vm.dataForm.seq),callback:function ($$v) {_vm.$set(_vm.dataForm, "seq", $$v)},expression:"dataForm.seq"}})]],2)],2):_vm._e(),_c('div',{staticClass:"mod-footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),(!_vm.renderPreview)?_c('el-button',{attrs:{"disabled":_vm.loading,"type":"primary"},on:{"click":function($event){return _vm.dataFormSubmit()}}},[_vm._v("确定")]):_vm._e()],1)],1)}
var add_or_updatevue_type_template_id_3c518ba6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/add-or-update.vue?vue&type=template&id=3c518ba6&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/add-or-update.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import FormBuild from '../../form-build/index' 
  
  
  
  /* harmony default export */ var add_or_updatevue_type_script_lang_js_ = ({
    name: 'table-add-or-update' ,
    components: {
      //FormBuild
      BaseItem: base_item
    },  
    data () {
      return {
        randomId: '' ,
        loading: false,
        visible: false,
        dataForm: {
          _id: '',
          seq: 0
        }, 
        dataRule: { 
        }
      }
    },
    computed: {
     customList() {
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    }
    },
    props: {
      // 表格内部的配置
      formTemplate: {
        type: Object, 
        default: () => ({})
      },
      //动态表格整体的配置
      formConfig: {
        type: Object, 
        default: () => ({})
      },
         // 是否预览结果表单
      renderPreview: {
        type: Boolean ,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },  
    methods: {
      recordRules(record){
        // 2020-07-29 如果是预览 不需要规则验证
        if(this.renderPreview) {
          return []
        }
        const rules = record.rules  

        // 循环判断
        for(var i = 0 ; i < rules.length ; i++){
          const t = rules[i]
           if(t.vtype == 1 || t.vtype == 2){ 
            t.validator =  this.validatorFiled 
          } 

          // 判断trigger
          if(!t.trigger) {
            t.trigger =  ['change','blur']
          }
        }
       

        return rules 

      },
      dynamicVisibleItem(record){ 
      
        if(!record.options || !record.options.dynamicVisible){
          return true
        }
        if(!record.options.dynamicVisibleValue){
          return true
        }
        let fstr = record.options.dynamicVisibleValue;
        // 打开了开关 这里获取函数内容
        const func =  dynamicFun(fstr , this.dataForm)
        return func
      },
       // 2021-03-12 清理没有显示的组件的数据
      clearHiddenValue() {
        // 根据组件ID 是否隐藏为准
        // 根据 formTemplate.config.outputHidden 来判断是否要输出隐藏 
        if(!this.formConfig || !this.formConfig.outputHidden) {
     
          const formdesign = document.getElementById(this.randomId)
         
          // 循环当前数据 非P 开头的统一不深入第二层
          for(let key in this.dataForm) {
            if(key.indexOf('_label') > 0 || key == '_id' || key == 'seq') continue 
            //  判断key的id是否还在
            const key_div = formdesign.querySelector('#' + key) 
            if(!key_div) {
              // 删除
              delete this.dataForm[key]
              delete this.dataForm[key + '_label']
            }  
          } 
        } 
      }, 
       validatorFiled (rule , value , callback) {
      
        // 判断rule类型 
        if(rule.vtype == 1) {
          // 正则
          if(!rule.pattern) {
            callback()
            return
          }
          // 正则匹配
          var patt1=new RegExp(rule.pattern);
          //document.write(patt1.test("free"));

          if(patt1.test(value)) {
            callback() 
           } else {
            callback(new Error(rule.message)) 
           }

           return
        } else if(rule.vtype == 2) {
          // 表达式
          const script = rule.script

          // 打开了开关 这里获取函数内容
         const fvalue =  dynamicFun(script , this.dataForm)
          
          if (!fvalue) {
            callback(new Error(rule.message))
          } else {
            callback()
          }


        }

       
      } ,
       
      init (data) {
          this.randomId = 'sxfw_table_dialog' + parseInt(Math.random() * 1000000)
          this.visible = true 
          this.dataForm._id = null  
          if(data) {
            //this.dataForm = data
            for(var i in data){
              this.dataForm[i] = data[i]
            }
          } else {
            // 初始化数据  
             
            const d = {}
            this.formTemplate.list.forEach(item => {
              if(item.options.defaultValue)
                d[item.model] = item.options.defaultValue;
              else 
                d[item.model] = null
            }); 
 
            this.dataForm = {_id:null,seq: 0 , ...d}

            this.$nextTick(() => {
              this.$refs['dataForm'].resetFields()
         
            })
          }
             

        },
        // 表单提交
        dataFormSubmit () {
          this.$refs['dataForm'].validate((valid) => {
            if (valid) { 
              this.loading = true
              this.clearHiddenValue()
              if(!this.dataForm._id) {
                // 回填一个ID 
                const id = new Date().getTime() * 10 + parseInt(Math.random() * 100)
                this.dataForm._id = id 
                this.$emit('formAdd' , cloneDeep_default()(this.dataForm))
              } else {
                this.$emit('formUpdate' , cloneDeep_default()(this.dataForm))
              }
              this.loading = false
              this.visible = false
            }
          })

 
        }
    }
  });

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/add-or-update.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_add_or_updatevue_type_script_lang_js_ = (add_or_updatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/add-or-update.vue





/* normalize component */

var add_or_update_component = normalizeComponent(
  table_add_or_updatevue_type_script_lang_js_,
  add_or_updatevue_type_template_id_3c518ba6_render,
  add_or_updatevue_type_template_id_3c518ba6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var add_or_update = (add_or_update_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/table/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import TableFormItem from "./table-form-item";


/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: "TableBatch",
  props:{
    record: {
      type: Object,
      required : true
    },
    value: {
      type: [Object , Array],
      required : false
    },
    models: {
      type: Object,
      required : true
    }, 
    config: {
      type: Object,
      required : false
    },
    parentDisabled: {
      type: Boolean,
      default: false
    },
      // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }
  }, 
  components: {
    TableItem: table_item,AddOrUpdate: add_or_update
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler(val) { 
        if(val instanceof Array){ 
           this.models[this.record.model] = val || [];
        }
  
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      addOrUpdateVisible: false,
      isVisible: true 
    };
  },
  computed: { 
    disabled() {
      return this.record.options.disabled || this.parentDisabled;
    },
    templateData() {
      return {list: this.record.list, config: { "labelPosition": this.record.options.labelPosition ? this.record.options.labelPosition : "right", "labelWidth": this.record.options.labelWidth, "size": "mini", "hideRequiredMark": false } }
    },
   /* controlWidth() {
      let w = 0 
      if(!this.renderPreview || this.record.options.addType == 'dialog') {
        return w 
      }
      if(this.renderPreview) {
        w = 100 
      } 
      return w 
    }*/
  },
  methods: {
    validationSubform() { 
      return true ;
    },
    resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain(index) { 

      this.$confirm(`确定删除此数据?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        let domains = this.models[this.record.model] 
        if(domains) { 
          if (index !== -1) {
            domains.splice(index, 1);

            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000 
            })
          }
        }
      }) 
      
    },
    updateDomain(data) {
      this.addOrUpdateVisible = true
      
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(data)
      })
    },
    // 行复制 2021-02-17 lyf
    copyDomain(data) {
      let copyData = {...data}
      copyData._id = null
      if(this.record.options.addType == 'dialog') {
        this.addOrUpdateVisible = true 
        
        this.$nextTick(() => {
           this.$refs.addOrUpdate.init(copyData) 
        })
      } else {
        // 直接添加一行数据
        this.isVisible = false 
        
        let domains = this.models[this.record.model] 
        
        domains.push(copyData)   
         this.isVisible = true 
      }
      
    },
    addDomain() {  
      if(this.record.options.addType == 'dialog') {
        this.addOrUpdateVisible = true 
        this.$nextTick(() => {
           this.$refs.addOrUpdate.init() 
        })
      } else {
        // 直接添加一行数据
        this.isVisible = false 
        const items = this.record.list

        const itemObject = {} 
        items.forEach(t=>{
          itemObject[t.model] = ''
        })
 
        let domains = this.models[this.record.model] 
        if(!domains) {
          const ds = [itemObject] 

          domains = ds
        } else {
          domains.push(itemObject)  
        }

        this.$set(this.models , this.record.model , domains)
         this.isVisible = true 
      } 
    },
    formAdd(form){
      this.isVisible = false 
      let domains = this.models[this.record.model] 
      if(!domains) {
        const ds = [form]
        this.models[this.record.model]  = ds
        domains = this.models[this.record.model]
      } else {
        domains.push(form)  
      }

      // 排序
      domains.sort(function(a, b){
        return a.seq - b.seq
      });
      this.isVisible = true
      this.$message({
        message: '添加成功',
        type: 'success',
        duration: 1000 
      })

      
    },
    formUpdate(form){ 
      let domains = this.models[this.record.model] 

      for(var i in this.models[this.record.model] ){
        if(this.models[this.record.model] [i]._id == form._id){
          this.models[this.record.model].splice(i,1,form)
          break
        }
      } 

       this.models[this.record.model].sort(function(a, b){
          return a.seq - b.seq
        });
      this.$message({
        message: '更新成功',
        type: 'success',
        duration: 1000 
      }) 

    },
    handleInput() {
      this.$emit("change", this.models);
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/form-item/table/index.vue?vue&type=style&index=0&id=5bef0058&scoped=true&lang=css&
var tablevue_type_style_index_0_id_5bef0058_scoped_true_lang_css_ = __webpack_require__("f1b8");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/table/index.vue






/* normalize component */

var table_component = normalizeComponent(
  form_item_tablevue_type_script_lang_js_,
  tablevue_type_template_id_5bef0058_scoped_true_render,
  tablevue_type_template_id_5bef0058_scoped_true_staticRenderFns,
  false,
  null,
  "5bef0058",
  null
  
)

/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-item/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 
 
 


/* harmony default export */ var form_itemvue_type_script_lang_js_ = ({
  name: "VueDragFormItem", 
  data(){  
    return{
      checkList: [] ,
 
    }
  },
  props: {
    // 表单数组
    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    formConfig: {
      type: Object,
      default: () => ({
        labelWidth: 120
      })
     // required: true
    },
    // form-item 宽度配置
    models: {
      type: Object,
      required: true
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
     // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    },
    // 是否拖拽面板引用
    isDragPanel: {
      type: Boolean ,
      default: false
    } 
  },
  components: {
     TableBatch: table,BaseItem: base_item 
  },
  watch: {
    checkList:{
      handler(val, oldVal){
          // 默认所有val 全部补一个id 标明顺序
        //this.models[this.record.model] = val
        this.$set(this.models , this.record.model , val)
      },
      deep:true
    }
  },
  computed: {
    customList() {
      if (window.customComponents) {
        return window.customComponents.map(item => item.type);
      } else {
        return [];
      }
    },
    showRequiredMark(){
      //##############
      const fstr = this.record.options.showRequiredMarkScript
      if(!fstr){
        return false
      }

      const mark = dynamicFun(fstr , this.models)  

      return mark 
    },
    // 是否动态显示当前元素 
     // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){ 
      if(this.isDragPanel) {
        return true
      }
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
      const func =  dynamicFun(fstr , this.models)
      return func
    },
    recordRules(){
      // 2020-07-29 如果是预览 不需要规则验证
      if(this.isDragPanel || this.renderPreview || !this.record.rules || this.record.rules.length == 0) {
        return []
      }
      let rules =this.record.rules

      // 2020-09-12 判断是否必填 ,非必填得没有值得时候不校验

      const isRequire = rules[0].required

      // 循环判断
      for(var i = 0 ; i < rules.length ; i++){
        const t = rules[i]
        
        t.required = isRequire
        if(t.vtype == 1 || t.vtype == 2){ 
          t.validator =  this.validatorFiled 
        } 

        // 判断trigger
        if(!t.trigger) {
          t.trigger =  ['change','blur']
        }
      }
     
      //2020-12-08 lyf 如果是batch类型的话增加一个内部校验的标记

      if(this.record.type == 'batch') {
        rules.push({vtype: 3,trigger:['change','blur'] ,validator: this.validatorFiled ,message: '待完善'  })
      }  

      
      return rules 

    }
  },
  methods: {
    validatorFiled (rule , value , callback) {
      
        // 判断rule类型 
        if(rule.vtype == 1) {
          // 正则
          if(!rule.pattern) {
            callback()
            return
          }
          // 正则匹配
          var patt1=new RegExp(rule.pattern);
          //document.write(patt1.test("free"));

          if(patt1.test(value)) {
            callback() 
           } else {
            callback(new Error(rule.message)) 
           }

           return
        } else if(rule.vtype == 2) {
          // 表达式
          const script = rule.script

          // 打开了开关 这里获取函数内容
         const fvalue =  dynamicFun(script , this.models)
          
          if (!fvalue) {
            callback(new Error(rule.message))
          } else {
            callback()
          }


        }else if(rule.vtype == 3) {
          // 2020-12-08 lyf 表单内部校验
          if(!this.$refs.TableBatch) {
             callback()

          } else {
            const v = this.$refs.TableBatch.validatorRule()
            if(v) {
               callback()
             } else {
                callback(new Error(rule.message))
            }

          }
          
        }

       
      } ,
    forceUpdate(){ 
       this.$emit("forceUpdate" );
    },
    handleChange(value, key) {
      // change事件
      this.$emit("change", value, key);
 
    },
    // 按钮点击事件 2021-02-17 lyf
    buttonClick() { 
      if(this.record.type != 'button' || !this.record.options.dynamicFun) {
        return 
      } 
      // 有回调函数 去执行
      dynamicFun(this.record.options.dynamicFun , this.models)

    }
  },
  mounted() {  
    // 如果已经赋值了 则不管默认值了
    if(this.models[this.record.model]) 
      return ;

    const defaultValue = this.record.options.defaultValue
    if(defaultValue) {
      if(this.record.type == 'checkbox'){
        this.checkList = defaultValue
      } else {
        this.models[this.record.model] = defaultValue
      } 
    } 
 
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/form-item/index.vue?vue&type=style&index=0&id=551cf144&scoped=true&lang=css&
var form_itemvue_type_style_index_0_id_551cf144_scoped_true_lang_css_ = __webpack_require__("5330");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-item/index.vue






/* normalize component */

var form_item_component = normalizeComponent(
  src_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_551cf144_scoped_true_render,
  form_itemvue_type_template_id_551cf144_scoped_true_staticRenderFns,
  false,
  null,
  "551cf144",
  null
  
)

/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/formNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var formNodevue_type_script_lang_js_ = ({
  props: {
    record: {
      type: Object,
      required: true
    }, 
    selectItem: {
      type: Object,
      default: () => {}
    },
    config: {
      type: Object,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      models: {}
    }
  },
  components: {
    FormItem: form_item
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_formNodevue_type_script_lang_js_ = (formNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formNode.vue





/* normalize component */

var formNode_component = normalizeComponent(
  module_formNodevue_type_script_lang_js_,
  formNodevue_type_template_id_1a1fe25a_render,
  formNodevue_type_template_id_1a1fe25a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formNode = (formNode_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/layerItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 


/* harmony default export */ var layerItemvue_type_script_lang_js_ = ({
  name: "layoutItem",
  props: {
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    startType: {
      type: String,
      required: true
    },
    insertAllowedType: {
      type: Array,
      required: true
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    insertAllowed() {
      return this.insertAllowedType.includes(this.startType);
    }
  },
  components: {
    formNode: formNode,
    draggable: vuedraggable_umd_default.a
  },
  methods: {
    handleShowRightMenu(e, record, trIndex, tdIndex , isMergeCol) {
      this.$emit("handleShowRightMenu", e, record, trIndex, tdIndex , isMergeCol);
    },
    handleSelectItem(record) { 
      this.$emit("handleSelectItem", record);
    },
    handleColAdd(e, list) {
      this.$emit("handleColAdd", e, list);
    },

  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/layerItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_layerItemvue_type_script_lang_js_ = (layerItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/layerItem.vue





/* normalize component */

var layerItem_component = normalizeComponent(
  module_layerItemvue_type_script_lang_js_,
  layerItemvue_type_template_id_72053be4_render,
  layerItemvue_type_template_id_72053be4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layerItem = (layerItem_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/module/formPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



  
//import "codemirror/mode/javascript/javascript";
/* harmony default export */ var formPanelvue_type_script_lang_js_ = ({
  name: "FormPanel",
  data() {
    return {
      form: this.$refs.form,
      insertAllowedType: [
        "input",
        "textarea",
        "number",
        "select",
         "batch",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "uploadFile",
        "uploadImg",
        "cascader",
        "treeSelect",
        "switch",
        "text",
        "html"
      ],
      rightMenuSelectValue: {},
      showRightMenu: false,
      isMergeCol: false,
      menuTop: 0,
      menuLeft: 0,
      trIndex: 0,
      tdIndex: 0,

      styleVisible: false,
      tdStyle: {
        style: '',
        class: ''
      }
    };
  },
  props: {
    noModel: {
      type: Array,
      required: true
    },
    startType: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {}
    },
    hideModel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    draggable: vuedraggable_umd_default.a,
    layoutItem: layerItem
  },
  methods: { 
    deepClone(evt) {
      const newIndex = evt.newIndex;
      // json深拷贝一次
      const listString = JSON.stringify(this.data.list);
      this.data.list = JSON.parse(listString);
      // 删除icon及compoent属性
      delete this.data.list[newIndex].icon;
      delete this.data.list[newIndex].component;
      this.$emit("handleSetSelectItem", this.data.list[newIndex]);
    }, 
    handleColAdd(evt, columns, isCopy = false) {
      // 重置或者生成key值
      const newIndex = evt.newIndex;
      const key = columns[newIndex].type + "_" + new Date().getTime();
      if (columns[newIndex].key === "" || isCopy) {
        this.$set(columns, newIndex, {
          ...columns[newIndex],
          key,
          model: key
        });
        if (this.noModel.includes(columns[newIndex].type)) {
          // 删除不需要的model属性
          delete columns[newIndex].model;
        }
        if (typeof columns[newIndex].options !== "undefined") {
          // 深拷贝options
          const optionsStr = JSON.stringify(columns[newIndex].options);
          columns[newIndex].options = JSON.parse(optionsStr);
        }
        if (typeof columns[newIndex].rules !== "undefined") {
          // 深拷贝rules
          const rulesStr = JSON.stringify(columns[newIndex].rules);
          columns[newIndex].rules = JSON.parse(rulesStr);
        }
        if (typeof columns[newIndex].list !== "undefined") {
          // list 不为空 则重置list下的组件model
          columns[newIndex].list.forEach(t=>{
            t.model = t.model + 1
            t.key = t.key + 1
          })
        }
        if (typeof columns[newIndex].columns !== "undefined") {
          // 深拷贝columns
          const columnsStr = JSON.stringify(columns[newIndex].columns);
          columns[newIndex].columns = JSON.parse(columnsStr);
          // 复制时，重置key和model
          columns[newIndex].columns.forEach(item => {
            if(item.list && item.list.length > 0) {
                item.list.forEach(t => {
                  t.model = t.model + 1
                  t.key = t.key + 1
                });
              }
            
          });
        }
        if (columns[newIndex].type === "table") {
          // 深拷贝trs
          const trsStr = JSON.stringify(columns[newIndex].trs);
          columns[newIndex].trs = JSON.parse(trsStr);
          // 复制时，重置key和model
          columns[newIndex].trs.forEach(item => {

            item.tds.forEach(val => {
              if(val.list && val.list.length > 0) {
                val.list.forEach(t => {
                  t.model = t.model + 1
                  t.key = t.key + 1
                });
              }
             
            });
          });
        }
      }
      // 深拷贝数据
      const listString = JSON.stringify(columns[newIndex]);
      columns[newIndex] = JSON.parse(listString);
      this.$emit("handleSetSelectItem", columns[newIndex]);
    },
    dragStart(evt, list) {
      // console.log('drag start , event' , evt)
      // if(!this.selectForm || !this.selectForm.id) {
      //   this.$message.error('请先选择具体的表单')
      //   return  
      // }

      // 拖拽结束,自动选择拖拽的控件项
      this.$emit("handleSetSelectItem", list[evt.oldIndex]);
    },
    handleSelectItem(record) {
      // 修改选择Item
      this.$emit("handleSetSelectItem", record);
    },
    handleCopy(isCopy = true, data) { 
      const traverse = array => {
        array.forEach((element, index) => { 
          if (element.key === this.selectItem.key) {
            if (isCopy) {
              // 复制添加到选择节点后面
              array.splice(index + 1, 0, cloneDeep_default()(element)); 
            } else {
              // 双击添加到选择节点后面
              array.splice(index + 1, 0, cloneDeep_default()(data));
            }
            // 复制完成，重置key值
            const evt = {
              newIndex: index + 1
            };
            this.handleColAdd(evt, array, true);
            return;
          }
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              traverse(item.list);
            });
          } else if (element.type === "card") {
            // 卡片布局
            traverse(element.list);
          } else if (element.type === "batch") {
            // 动态表格内复制
            traverse(element.list);
          }
          if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                traverse(val.list);
              });
            });
          }
        
        });
      };
      traverse(this.data.list);
    },
    handleDetele() {
      // 删除已选择
      const traverse = array => {
        array = array.filter((element, index) => {
          if (element.type === "grid") {
            // 栅格布局
            element.columns.forEach(item => {
              item.list = traverse(item.list);
            });
          }
          if (element.type === "card" || element.type === "batch") {
            // 卡片布局
            element.list = traverse(element.list);
          }
          if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                val.list = traverse(val.list);
              });
            });
          }
          if (element.key !== this.selectItem.key) {
            return true;
          } else {
            if (array.length === 1) {
              this.handleSelectItem({ key: "" });
            } else if (array.length - 1 > index) {
              this.handleSelectItem(array[index + 1]);
            } else {
              this.handleSelectItem(array[index - 1]);
            }
            return false;
          }
        });
        return array;
      };

      this.data.list = traverse(this.data.list);
    },
    // 解除合并
    handleDropMerge(){ 

      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
 
      const colspan = td.colspan
      const rowspan = td.rowspan

      if(td && (colspan > 1 || rowspan > 1)) {
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex].colspan = 1
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex].rowspan = 1

        // 开始拆解
        let cols = []
        if(colspan > 1) { 
          for(var i = 0 ; i < colspan - 1 ; i++){
            cols.push({colspan:1 , rowspan:1,list:[]})
          }

          this.rightMenuSelectValue.trs[this.trIndex].tds.splice(this.tdIndex + 1, 0 ,...cols )

        } 
        if(rowspan > 1) {
          //cols + 1 
          cols.push({colspan:1 , rowspan:1,list:[]})  
          
          for(var j = this.trIndex + 1 ; j < this.trIndex + rowspan ; j++){
             
            this.rightMenuSelectValue.trs[j].tds.splice(this.tdIndex + 1, 0 ,...cols )
          }
        
        }

      
      }


    },
    handleDownMerge() {
      // 向下合并
      if (
        this.rightMenuSelectValue.trs.length -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .rowspan <=
        this.trIndex
      ) {
        this.$message.error("当前是最后一行，无法向下合并");
        return false;
      }

      // 计算rowspan超过自身的td
      let rows = 0;
      this.rightMenuSelectValue.trs[this.trIndex].tds.forEach(
        (element, index) => {
          if (index >= this.tdIndex) {
            return false;
          }
          if (
            element.rowspan >
            this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
              .rowspan
          ) {
            rows += 1;
          }
        }
      );
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .colspan !==
        this.rightMenuSelectValue.trs[this.trIndex + 1].tds[this.tdIndex - rows]
          .colspan
      ) {
        this.$message.error("当前表格无法向下合并");
        return false;
      }

      // 可能会存在rowspan


      // 获取当前得rowspan 
      let rowspan =  this.rightMenuSelectValue.trs[this.trIndex].tds[ this.tdIndex ].rowspan

      // 获取当前要合并得row
      const mergeRowIndex =  this.trIndex + rowspan
      // 获取当前要合并行得tdindex之前是否

      // 获取带合并得行
      const mergeRow =  this.rightMenuSelectValue.trs[mergeRowIndex]
      const mergeCol = mergeRow.tds[ this.tdIndex ]


      this.rightMenuSelectValue.trs[this.trIndex].tds[ this.tdIndex ].rowspan = rowspan +  mergeCol.rowspan

      // 在rowspan行进行td得裁剪
      this.rightMenuSelectValue.trs[
        this.trIndex + rowspan
      ].tds = this.rightMenuSelectValue.trs[this.trIndex + rowspan].tds.filter(
        (item, index) => index != this.tdIndex //- rows
      );

     /* this.rightMenuSelectValue.trs[
        this.trIndex + 1
      ].tds = this.rightMenuSelectValue.trs[this.trIndex + rows].tds.filter(
        (item, index) => index != this.tdIndex //- rows
      );*/


      // }
    },
    handleRightMerge() {
      // 向右合并
      const sumCols = this.rightMenuSelectValue.trs[this.trIndex].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      if (
        sumCols -
          this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
            .colspan <=
        this.tdIndex
      ) {
        this.$message.error("当前是最后一列，无法向右合并");
        return false;
      }
      if (
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
          .rowspan !==
        this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex + 1]
          .rowspan
      ) {
        this.$message.error("当前表格无法向右合并");
        return false;
      }

      this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex
      ].colspan += this.rightMenuSelectValue.trs[this.trIndex].tds[
        this.tdIndex + 1
      ].colspan;

      this.rightMenuSelectValue.trs[
        this.trIndex
      ].tds = this.rightMenuSelectValue.trs[this.trIndex].tds.filter(
        (item, index) => {
          return index !== this.tdIndex + 1;
        }
      );
      // }
    },
    handleAddCol() {
      // 增加列
      this.rightMenuSelectValue.trs.forEach(item => {
        item.tds.splice(this.tdIndex + 1, 0, {
          colspan: 1,
          rowspan: 1,
          list: []
        });
      });
    },
    handleAddRow() {
      // 增加行
      // 获取总col值
      const sumCols = this.rightMenuSelectValue.trs[0].tds
        .map(item => item.colspan)
        .reduce(function(partial, value) {
          return partial + value;
        });
      const rowJson = { tds: [] };
      for (let i = 0; i < sumCols; i++) {
        rowJson.tds.push({
          colspan: 1,
          rowspan: 1,
          list: []
        });
      }
      this.rightMenuSelectValue.trs.splice(this.trIndex + 1, 0, rowJson);
    },
    handleRemoveRow(){
      // 删除一行
      const tri = this.trIndex
      const len = this.rightMenuSelectValue.trs.length
      if(len <= 1) {
        this.$message.error("当前是最后一行,无法删除");
        return
      }
      this.rightMenuSelectValue.trs.splice(tri , 1)

    },
    handleRemoveCol(){
      // 删除一列
      const tdi = this.tdIndex
      // 存在任意行中的列数 <= 1 不允许删除
      
      for(let i in  this.rightMenuSelectValue.trs){
        let tds = this.rightMenuSelectValue.trs[i].tds
        if(tds.length <= 1){
          this.$message.error("当前只剩下最后一列,无法删除");
          return
        }
      }
        
      this.rightMenuSelectValue.trs.forEach(t=>{
        t.tds.splice(tdi , 1)
      })

    },
    handleSettingStyle(){
      // 样式配置
      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]

      const class_ = td.class 
      const style_ = td.style 

      this.tdStyle.style = style_
      this.tdStyle.class = class_

      this.styleVisible = true

    },
    settingStyle(){
      // 样式生效
      const td = this.rightMenuSelectValue.trs[this.trIndex].tds[this.tdIndex]
      td.style = this.tdStyle.style
      td.class = this.tdStyle.class

      // 重新绘制 修改数据
      this.rightMenuSelectValue.trs[this.trIndex].tds.splice(this.tdIndex , 1 , td)

      this.styleVisible = false

    },
    handleShowRightMenu(e, val, trIndex, tdIndex , mergeCol) {
      // 显示右键菜单
      e.stopPropagation();
      // this.fileItem = item
      // 显示
      this.showRightMenu = true;
 

      // 计算rightMenu得高度和宽度 和当前屏幕对比 来决定菜单出现得起始位置
      let height = 210;// document.getElementById('rightMenu').clientHeight ;
      let width = 280 ;//document.getElementById('rightMenu').clientWidth ;

      // 获取屏幕高度和宽度 比对
      const bodyHeight = document.body.clientHeight  ;
      const bodyWidth = document.body.clientWidth ;
 
        
      // 定位 
      if(e.clientY + height > bodyHeight) {
        this.menuTop = e.clientY - height;
      } else {
        this.menuTop = e.clientY;
      }

      if(e.clientX + width > bodyWidth) {
        this.menuLeft = e.clientX - width;
      } else {
        this.menuLeft = e.clientX + 20 ;
      }
       

      // this.rightMenuType = type
      // this.rightId = id
      this.activeArr = [val];
      this.rightMenuSelectValue = val;
      this.trIndex = trIndex;
      this.tdIndex = tdIndex;


      // 判断是否是已经合并过的单元格 isMergeCol 
      this.isMergeCol = mergeCol


      return false;
    },
    handleRemoveRightMenu() {
      // 取消右键菜单
      this.showRightMenu = false;
    }
  },
  mounted() {
    // 添加监听取消右键菜单
    document.addEventListener("click", this.handleRemoveRightMenu, true);
    document.addEventListener("contextmenu", this.handleRemoveRightMenu, true);
  },
  destroyed() {
    // 移除监听
    document.removeEventListener("click", this.handleRemoveRightMenu, true);
    document.removeEventListener(
      "contextmenu",
      this.handleRemoveRightMenu,
      true
    );
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_formPanelvue_type_script_lang_js_ = (formPanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/module/formPanel.vue





/* normalize component */

var formPanel_component = normalizeComponent(
  module_formPanelvue_type_script_lang_js_,
  formPanelvue_type_template_id_67f46ffd_render,
  formPanelvue_type_template_id_67f46ffd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var formPanel = (formPanel_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/drag-panel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var drag_panelvue_type_script_lang_js_ = ({
	components:{
		FormPanel: formPanel 
	},
	data(){
		return {
			updateTime: 0,
			hideModel: false, 
			 
			noModel: [
		        "button",
		        "divider",
		        "card",
		        "grid",
		        "table",
		        "alert",
		        "text",
		        "html"
		    ],
		    startType: "", 
		    selectItem: {}, 
		}
	},
	props: {
		data: {
			type: Object ,
			required: true
		},
		selectForm: {
			type: Object
		}
	}, 
	methods: {
		handleSetSelectItem(record) {

	      // 操作间隔不能低于100毫秒
	      let newTime = new Date().getTime();
	      if (newTime - this.updateTime < 100) {
	        return false;
	      }

	      this.updateTime = newTime;

	      // 设置selectItem的值
	      this.selectItem = record; 

	      this.$emit('changeSelectItem' , this.selectItem)

	      // 判断是否选中控件，如果选中则弹出属性面板，否则关闭属性面板
	      if (record.key) {
	        this.startType = record.type; 
	      }  
	    },
	   
	}
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_drag_panelvue_type_script_lang_js_ = (drag_panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/drag-panel/index.vue?vue&type=style&index=0&lang=css&
var drag_panelvue_type_style_index_0_lang_css_ = __webpack_require__("8589");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/drag-panel/index.vue






/* normalize component */

var drag_panel_component = normalizeComponent(
  src_drag_panelvue_type_script_lang_js_,
  drag_panelvue_type_template_id_be31b91c_render,
  drag_panelvue_type_template_id_be31b91c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drag_panel = (drag_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/index.vue?vue&type=template&id=745b4370&
var propertiesvue_type_template_id_745b4370_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-tabs',{attrs:{"type":"card"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('el-tab-pane',{attrs:{"label":"控件属性","name":"item"}},[_c('ItemProperties',{ref:"itemProperties",attrs:{"selectItem":_vm.selectItem}},[_c('template',{attrs:{"selectItem":_vm.selectItem},slot:"custom-properties"},[_vm._t("custom-properties",null,{"selectItem":_vm.selectItem})],2)],2)],1),_c('el-tab-pane',{attrs:{"label":"表单属性","name":"form"}},[_c('FormProperties',{ref:"formProperties",attrs:{"config":_vm.data.config,"previewOptions":_vm.previewOptions}},[_c('template',{attrs:{"data":_vm.data},slot:"form-extend-properties"},[_vm._t("form-extend-properties",null,{"data":_vm.data})],2)],2)],1),_vm._t("extend-tab",null,{"data":_vm.data})],2)}
var propertiesvue_type_template_id_745b4370_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/index.vue?vue&type=template&id=745b4370&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/item-properties.vue?vue&type=template&id=10aba29f&
var item_propertiesvue_type_template_id_10aba29f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"properties-centent"},[_c('div',{staticClass:"properties-body"},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(!_vm.selectItem.key),expression:"!selectItem.key"}],staticClass:"hint-box"},[_vm._v("未选择控件")]),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectItem.key),expression:"selectItem.key"}],attrs:{"size":"mini","disabled":_vm.disabled}},[(!_vm.hideModel)?_c('el-form-item',{attrs:{"label":"标签"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.selectItem.label),callback:function ($$v) {_vm.$set(_vm.selectItem, "label", $$v)},expression:"selectItem.label"}})],1):_vm._e(),(!_vm.hideModel && !['table','grid','divider','label','html','button' ].includes(_vm.selectItem.type))?_c('el-form-item',{attrs:{"label":"数据字段"}},[_c('el-input',{attrs:{"placeholder":"请输入","disabled":(_vm.selectItem.item != undefined && _vm.selectItem.item.id != undefined)},model:{value:(_vm.selectItem.model),callback:function ($$v) {_vm.$set(_vm.selectItem, "model", $$v)},expression:"selectItem.model"}})],1):_vm._e(),_c('el-divider'),(_vm.selectItem.type == 'input' || _vm.selectItem.type == 'textarea')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input',{attrs:{"placeholder":typeof _vm.options.format === 'undefined' ? '请输入' : _vm.options.format},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-form-item',{attrs:{"label":"最大长度"}},[_c('el-input-number',{attrs:{"placeholder":"最大长度,为0表示不限制","min":0},model:{value:(_vm.options.maxLength),callback:function ($$v) {_vm.$set(_vm.options, "maxLength", $$v)},expression:"options.maxLength"}})],1),(_vm.selectItem.type === 'input')?_c('el-form-item',{attrs:{"label":"前后缀"}},[_c('el-input',{attrs:{"placeholder":"前缀标签"},model:{value:(_vm.options.prepend),callback:function ($$v) {_vm.$set(_vm.options, "prepend", $$v)},expression:"options.prepend"}},[_c('template',{slot:"prepend"},[_vm._v("前缀")])],2),_c('el-input',{attrs:{"placeholder":"后缀标签"},model:{value:(_vm.options.append),callback:function ($$v) {_vm.$set(_vm.options, "append", $$v)},expression:"options.append"}},[_c('template',{slot:"append"},[_vm._v("后缀")])],2)],1):_vm._e(),_c('el-divider'),(_vm.selectItem.type === 'textarea')?_c('el-form-item',{attrs:{"label":"输入框行数"}},[_c('el-input-number',{staticStyle:{"width":"100%"},attrs:{"placeholder":"输入框行数"},model:{value:(_vm.options.rows),callback:function ($$v) {_vm.$set(_vm.options, "rows", $$v)},expression:"options.rows"}})],1):_vm._e(),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}})],1)]:_vm._e(),(_vm.selectItem.type == 'number')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"步长"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.step),callback:function ($$v) {_vm.$set(_vm.options, "step", $$v)},expression:"options.step"}})],1),_c('el-form-item',{attrs:{"label":"最小值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.min),callback:function ($$v) {_vm.$set(_vm.options, "min", $$v)},expression:"options.min"}})],1),_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1),_c('el-form-item',{attrs:{"label":"数值精度"}},[_c('el-input-number',{attrs:{"min":0,"max":5,"placeholder":"请输入"},model:{value:(_vm.options.precision),callback:function ($$v) {_vm.$set(_vm.options, "precision", $$v)},expression:"options.precision"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input-number',{attrs:{"step":_vm.options.step,"min":_vm.options.min || -Infinity,"max":_vm.options.max || Infinity},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"后缀"}},[_c('el-input',{attrs:{"placeholder":"后缀标签"},model:{value:(_vm.options.append),callback:function ($$v) {_vm.$set(_vm.options, "append", $$v)},expression:"options.append"}},[_c('template',{slot:"append"},[_vm._v("后缀")])],2)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'select')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")])],1),(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):_vm._e(),_c('OptionChange',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-select',{attrs:{"clearable":true},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l((_vm.options.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}}),_c('el-checkbox',{attrs:{"label":"可搜索"},on:{"change":function (v){
            if(!v){
              _vm.options.onlineSearch = false
            }
          }},model:{value:(_vm.options.showSearch),callback:function ($$v) {_vm.$set(_vm.options, "showSearch", $$v)},expression:"options.showSearch"}}),(_vm.options.showSearch)?_c('el-checkbox',{attrs:{"label":"实时搜索"},model:{value:(_vm.options.onlineSearch),callback:function ($$v) {_vm.$set(_vm.options, "onlineSearch", $$v)},expression:"options.onlineSearch"}}):_vm._e()],1),_c('el-divider'),(_vm.options.showSearch && _vm.options.onlineSearch)?_c('el-form-item',{attrs:{"label":"实时搜索回调"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"搜索带参,eg: name=$, $表示当前输入关键字"},model:{value:(_vm.options.onlineParams),callback:function ($$v) {_vm.$set(_vm.options, "onlineParams", $$v)},expression:"options.onlineParams"}})],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"选择后回调"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"选择后回调方法,eg: $.A004=$select.name, $表示当前表单数据,$select标示当前选择元素实体"},model:{value:(_vm.options.selectCb),callback:function ($$v) {_vm.$set(_vm.options, "selectCb", $$v)},expression:"options.selectCb"}})],1)]:_vm._e(),(_vm.selectItem.type == 'checkbox')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")])],1),(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):_vm._e(),_c('OptionChange',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-checkbox-group',{attrs:{"options":_vm.options.options},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l(([].concat(_vm.options.options)),function(checkitem){return _c('el-checkbox',{key:checkitem.value,attrs:{"label":checkitem.value}},[_vm._v(" "+_vm._s(checkitem.label)+" ")])}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'radio')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")])],1),(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):_vm._e(),_c('OptionChange',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-radio-group',{attrs:{"options":_vm.options.options},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l(([].concat(_vm.options.options)),function(checkitem){return _c('el-radio',{key:checkitem.value,attrs:{"label":checkitem.value}},[_vm._v(" "+_vm._s(checkitem.label)+" ")])}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'date' || _vm.selectItem.type == 'time')?[(_vm.selectItem.type == 'date' && _vm.options.range )?_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.rangeStartPlaceholder),callback:function ($$v) {_vm.$set(_vm.options, "rangeStartPlaceholder", $$v)},expression:"options.rangeStartPlaceholder"}}),_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.rangeEndPlaceholder),callback:function ($$v) {_vm.$set(_vm.options, "rangeEndPlaceholder", $$v)},expression:"options.rangeEndPlaceholder"}})],1):_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"默认值"}},[(_vm.selectItem.type == 'time' || !_vm.options.range)?_c('el-input',{attrs:{"placeholder":typeof _vm.options.format === 'undefined' ? '' : _vm.options.format},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}}):_vm._e(),(_vm.selectItem.type == 'date' && _vm.options.range)?_c('el-input',{attrs:{"placeholder":typeof _vm.options.format === 'undefined' ? '' : _vm.options.format},model:{value:(_vm.options.rangeDefaultValue[0]),callback:function ($$v) {_vm.$set(_vm.options.rangeDefaultValue, 0, $$v)},expression:"options.rangeDefaultValue[0]"}}):_vm._e(),(_vm.selectItem.type == 'date' && _vm.options.range)?_c('el-input',{attrs:{"placeholder":typeof _vm.options.format === 'undefined' ? '' : _vm.options.format},model:{value:(_vm.options.rangeDefaultValue[1]),callback:function ($$v) {_vm.$set(_vm.options.rangeDefaultValue, 1, $$v)},expression:"options.rangeDefaultValue[1]"}}):_vm._e()],1),_c('el-form-item',{attrs:{"label":"时间格式"}},[_c('el-input',{attrs:{"placeholder":_vm.selectItem.type == 'date' ? 'YYYY-MM-DD' : 'HH:mm:ss'},model:{value:(_vm.options.format),callback:function ($$v) {_vm.$set(_vm.options, "format", $$v)},expression:"options.format"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),(_vm.selectItem.type == 'date')?_c('el-checkbox',{attrs:{"label":"范围选择"},model:{value:(_vm.options.range),callback:function ($$v) {_vm.$set(_vm.options, "range", $$v)},expression:"options.range"}}):_vm._e()],1)]:_vm._e(),(_vm.selectItem.type == 'rate')?[(typeof _vm.options.max !== 'undefined')?_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},on:{"change":function (v){  
              if(_vm.options.defaultValue > v){
                _vm.options.defaultValue = v
              } 
          }},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1):_vm._e(),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-rate',{attrs:{"allowHalf":_vm.options.allowHalf,"max":_vm.options.max},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"允许半选"},model:{value:(_vm.options.allowHalf),callback:function ($$v) {_vm.$set(_vm.options, "allowHalf", $$v)},expression:"options.allowHalf"}})],1)]:_vm._e(),(_vm.selectItem.type == 'slider')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"步长"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.step),callback:function ($$v) {_vm.$set(_vm.options, "step", $$v)},expression:"options.step"}})],1),_c('el-form-item',{attrs:{"label":"最小值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.min),callback:function ($$v) {_vm.$set(_vm.options, "min", $$v)},expression:"options.min"}})],1),_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input-number',{attrs:{"step":_vm.options.step,"min":_vm.options.min || -Infinity,"max":_vm.options.max || Infinity},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标记marks"}},[_c('br'),_c('OptionChange',{staticStyle:{"width":"100%"},attrs:{"keyNumber":true,"type":"keyvalue"},model:{value:(_vm.options.marks),callback:function ($$v) {_vm.$set(_vm.options, "marks", $$v)},expression:"options.marks"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"显示输入框"},model:{value:(_vm.options.showInput),callback:function ($$v) {_vm.$set(_vm.options, "showInput", $$v)},expression:"options.showInput"}})],1)]:_vm._e(),(_vm.selectItem.type == 'uploadFile')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"最大上传数量"}},[_c('el-input-number',{attrs:{"min":1},model:{value:(_vm.options.limit),callback:function ($$v) {_vm.$set(_vm.options, "limit", $$v)},expression:"options.limit"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}})],1)]:_vm._e(),(_vm.selectItem.type == 'uploadImg')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"最大上传数量"}},[_c('el-input-number',{attrs:{"min":1},model:{value:(_vm.options.limit),callback:function ($$v) {_vm.$set(_vm.options, "limit", $$v)},expression:"options.limit"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"样式"}},[_c('el-radio-group',{model:{value:(_vm.options.listType),callback:function ($$v) {_vm.$set(_vm.options, "listType", $$v)},expression:"options.listType"}},[_c('el-radio-button',{attrs:{"label":"text"}},[_vm._v("text")]),_c('el-radio-button',{attrs:{"label":"picture"}},[_vm._v("picture")]),_c('el-radio-button',{attrs:{"label":"picture-card"}},[_vm._v("card")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}})],1)]:_vm._e(),(_vm.selectItem.type == 'cascader')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")])],1),(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据jsonPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteChildren),callback:function ($$v) {_vm.$set(_vm.options, "remoteChildren", $$v)},expression:"options.remoteChildren"}},[_c('template',{slot:"prepend"},[_vm._v("下级字段")])],2)],1):_vm._e(),_c('OptionChange',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}}),_c('el-checkbox',{attrs:{"label":"可搜索"},model:{value:(_vm.options.showSearch),callback:function ($$v) {_vm.$set(_vm.options, "showSearch", $$v)},expression:"options.showSearch"}})],1)]:_vm._e(),(_vm.selectItem.type == 'batch')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"对话框标签宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.labelWidth),callback:function ($$v) {_vm.$set(_vm.options, "labelWidth", $$v)},expression:"options.labelWidth"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标签对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.options.labelPosition),callback:function ($$v) {_vm.$set(_vm.options, "labelPosition", $$v)},expression:"options.labelPosition"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"滚动高度"}},[_c('el-input-number',{attrs:{"min":0},model:{value:(_vm.options.scrollY),callback:function ($$v) {_vm.$set(_vm.options, "scrollY", $$v)},expression:"options.scrollY"}})],1),_c('el-form-item',{attrs:{"label":"表格样式Class名称"}},[_c('el-input',{model:{value:(_vm.selectItem.options.customClass),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customClass", $$v)},expression:"selectItem.options.customClass"}})],1),_c('el-form-item',{attrs:{"label":"表格样式CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.selectItem.options.customStyle),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customStyle", $$v)},expression:"selectItem.options.customStyle"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"新增行方式"}},[_c('el-radio-group',{model:{value:(_vm.options.addType),callback:function ($$v) {_vm.$set(_vm.options, "addType", $$v)},expression:"options.addType"}},[_c('el-radio-button',{attrs:{"label":"line"}},[_vm._v("增加行")]),_c('el-radio-button',{attrs:{"label":"dialog"}},[_vm._v("弹出框")])],1)],1),(_vm.options.addType == 'dialog')?_c('el-form-item',{attrs:{"label":"外部展示字段"}},[_c('el-checkbox-group',{model:{value:(_vm.selectItem.options.showItem),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "showItem", $$v)},expression:"selectItem.options.showItem"}},_vm._l((_vm.selectItem.list),function(item){return _c('el-checkbox',{key:item.model,attrs:{"label":item.model}},[_vm._v(_vm._s(item.label))])}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"显示Label"},model:{value:(_vm.options.showLabel),callback:function ($$v) {_vm.$set(_vm.options, "showLabel", $$v)},expression:"options.showLabel"}}),_c('el-checkbox',{attrs:{"label":"隐藏序号"},model:{value:(_vm.options.hideSequence),callback:function ($$v) {_vm.$set(_vm.options, "hideSequence", $$v)},expression:"options.hideSequence"}}),_c('el-checkbox',{attrs:{"label":"行复制"},model:{value:(_vm.options.copyRow),callback:function ($$v) {_vm.$set(_vm.options, "copyRow", $$v)},expression:"options.copyRow"}})],1)]:_vm._e(),(_vm.selectItem.type == 'switch')?[_c('el-form-item',{attrs:{"label":"打开标签值"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.activeText),callback:function ($$v) {_vm.$set(_vm.options, "activeText", $$v)},expression:"options.activeText"}})],1),_c('el-form-item',{attrs:{"label":"关闭标签值"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.inactiveText),callback:function ($$v) {_vm.$set(_vm.options, "inactiveText", $$v)},expression:"options.inactiveText"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-switch',{model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'button')?[_c('el-form-item',{attrs:{"label":"类型"}},[_c('el-radio-group',{model:{value:(_vm.options.type),callback:function ($$v) {_vm.$set(_vm.options, "type", $$v)},expression:"options.type"}},[_c('el-radio',{attrs:{"label":"primary"}},[_vm._v("Primary")]),_c('el-radio',{attrs:{"label":"default"}},[_vm._v("Default")]),_c('el-radio',{attrs:{"label":"dashed"}},[_vm._v("Dashed")]),_c('el-radio',{attrs:{"label":"danger"}},[_vm._v("Danger")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"按钮操作"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"动态JS,表单数据绑定值符号$"},model:{value:(_vm.options.dynamicFun),callback:function ($$v) {_vm.$set(_vm.options, "dynamicFun", $$v)},expression:"options.dynamicFun"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'text')?[_c('el-form-item',{attrs:{"label":"文字对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.options.textAlign),callback:function ($$v) {_vm.$set(_vm.options, "textAlign", $$v)},expression:"options.textAlign"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左")]),_c('el-radio-button',{attrs:{"label":"center"}},[_vm._v("居中")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"显示必选标记"},model:{value:(_vm.options.showRequiredMark),callback:function ($$v) {_vm.$set(_vm.options, "showRequiredMark", $$v)},expression:"options.showRequiredMark"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"动态必选"}},[_c('el-input',{attrs:{"type":"textarea","rows":4,"placeholder":"请输入表达式或者动态函数,数据实体以$标识"},model:{value:(_vm.options.showRequiredMarkScript),callback:function ($$v) {_vm.$set(_vm.options, "showRequiredMarkScript", $$v)},expression:"options.showRequiredMarkScript"}})],1)]:_vm._e(),(_vm.selectItem.type == 'html')?[_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input',{attrs:{"type":"textarea","rows":4},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}})],1)]:_vm._e(),(_vm.selectItem.type == 'divider')?[_c('el-form-item',{attrs:{"label":"方向"}},[_c('el-radio-group',{model:{value:(_vm.options.direction),callback:function ($$v) {_vm.$set(_vm.options, "direction", $$v)},expression:"options.direction"}},[_c('el-radio-button',{attrs:{"label":"horizontal"}},[_vm._v("横向")]),_c('el-radio-button',{attrs:{"label":"vertical"}},[_vm._v("竖向")])],1)],1),_c('el-divider'),(_vm.options.direction && _vm.options.direction == 'horizontal')?_c('el-form-item',{attrs:{"label":"标签位置"}},[_c('el-radio-group',{model:{value:(_vm.options.orientation),callback:function ($$v) {_vm.$set(_vm.options, "orientation", $$v)},expression:"options.orientation"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左")]),_c('el-radio-button',{attrs:{"label":"center"}},[_vm._v("居中")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右")])],1)],1):_vm._e()]:_vm._e(),(_vm.selectItem.type == 'grid')?[_c('el-form-item',{attrs:{"label":"栅格间距"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.selectItem.options.gutter),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "gutter", $$v)},expression:"selectItem.options.gutter"}})],1),_c('el-form-item',{attrs:{"label":"列配置项"}},[_c('OptionChange',{attrs:{"type":"colspan"},model:{value:(_vm.selectItem.columns),callback:function ($$v) {_vm.$set(_vm.selectItem, "columns", $$v)},expression:"selectItem.columns"}})],1)]:_vm._e(),(_vm.selectItem.type == 'table')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"表格样式Class名称"}},[_c('el-input',{model:{value:(_vm.selectItem.options.customClass),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customClass", $$v)},expression:"selectItem.options.customClass"}})],1),_c('el-form-item',{attrs:{"label":"表格样式CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.selectItem.options.customStyle),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customStyle", $$v)},expression:"selectItem.options.customStyle"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"显示边框"},model:{value:(_vm.options.bordered),callback:function ($$v) {_vm.$set(_vm.options, "bordered", $$v)},expression:"options.bordered"}}),_c('el-checkbox',{attrs:{"label":"鼠标经过点亮"},model:{value:(_vm.options.bright),callback:function ($$v) {_vm.$set(_vm.options, "bright", $$v)},expression:"options.bright"}}),_c('el-checkbox',{attrs:{"label":"紧凑型"},model:{value:(_vm.options.small),callback:function ($$v) {_vm.$set(_vm.options, "small", $$v)},expression:"options.small"}})],1)]:_vm._e(),_vm._t("custom-properties"),([
        'input',
        'textarea',
        'number',
        'select',
        'checkbox',
        'radio',
        'date',
        'time',
        'rate',
        'slider',
        'uploadFile',
        'uploadImg',
        'cascader',
        'switch',
        'button',
        'text',
        'html',
        'divider' 
      ].includes(_vm.selectItem.type))?_c('el-form-item',{attrs:{"label":"tooptip提示"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"鼠标移动到组件上的提示信息"},model:{value:(_vm.options.tooptip),callback:function ($$v) {_vm.$set(_vm.options, "tooptip", $$v)},expression:"options.tooptip"}})],1):_vm._e(),_c('el-divider'),(_vm.selectItem.rules  && _vm.selectItem.rules.length > 0 )?_c('el-form-item',{attrs:{"label":"校验"}},[_c('el-checkbox',{attrs:{"label":"必填"},model:{value:(_vm.selectItem.rules[0].required),callback:function ($$v) {_vm.$set(_vm.selectItem.rules[0], "required", $$v)},expression:"selectItem.rules[0].required"}}),_c('el-input',{attrs:{"placeholder":"必填校验提示信息"},model:{value:(_vm.selectItem.rules[0].message),callback:function ($$v) {_vm.$set(_vm.selectItem.rules[0], "message", $$v)},expression:"selectItem.rules[0].message"}}),_c('OptionChange',{attrs:{"type":"rules","disabled":_vm.disabled},model:{value:(_vm.selectItem.rules),callback:function ($$v) {_vm.$set(_vm.selectItem, "rules", $$v)},expression:"selectItem.rules"}}),_c('el-divider')],1):_vm._e(),(!_vm.hideModel && _vm.selectItem && _vm.selectItem.options)?[_c('el-form-item',{attrs:{"label":"动态显示"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:(_vm.selectItem.options.dynamicVisible),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicVisible", $$v)},expression:"selectItem.options.dynamicVisible"}})],1),(_vm.selectItem.options.dynamicVisible)?_c('el-form-item',{attrs:{"label":"显示条件"}},[_c('el-input',{attrs:{"type":"textarea","rows":3,"placeholder":"请输入显示条件,$标识当前整个表单的绑定数据"},model:{value:(_vm.selectItem.options.dynamicVisibleValue),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicVisibleValue", $$v)},expression:"selectItem.options.dynamicVisibleValue"}})],1):_vm._e(),_c('el-divider')]:_vm._e(),(_vm.selectItem.type === 'table')?_c('el-form-item',{attrs:{"label":"提示"}},[_c('p',{staticStyle:{"line-height":"26px"}},[_vm._v(" 请点击右键增加行列，或者合并单元格 ")])]):_vm._e()],2)],1)])}
var item_propertiesvue_type_template_id_10aba29f_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/item-properties.vue?vue&type=template&id=10aba29f&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/option-change/index.vue?vue&type=template&id=172256cf&
var option_changevue_type_template_id_172256cf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"option-change-container"},[([ 
      'radio',
      'checkbox',
      'select',
      'keyvalue'
      ].includes(_vm.type))?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('div',{key:index,staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":9}},[(_vm.keyNumber)?_c('el-input',{attrs:{"type":"number","placeholder":"值"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}}):_c('el-input',{attrs:{"type":"text","placeholder":"名称"},model:{value:(val.label),callback:function ($$v) {_vm.$set(val, "label", $$v)},expression:"val.label"}})],1),_c('el-col',{attrs:{"span":9}},[(_vm.keyNumber)?_c('el-input',{attrs:{"placeholder":"名称"},model:{value:(val.label),callback:function ($$v) {_vm.$set(val, "label", $$v)},expression:"val.label"}}):_c('el-input',{attrs:{"placeholder":"值"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}})],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],2):_vm._e(),(_vm.type === 'cascader')?_c('el-row',{attrs:{"gutter":8}},[_c('div',[_c('el-tree',{attrs:{"data":_vm.value ? _vm.value : [],"show-checkbox":"","node-key":"value","default-expand-all":"","expand-on-click-node":false},scopedSlots:_vm._u([{key:"default",fn:function(ref){
      var node = ref.node;
      var data = ref.data;
return _c('span',{staticClass:"custom-tree-node"},[_c('span',[_c('el-row',{attrs:{"gutter":4}},[_c('el-col',{attrs:{"span":9}},[_c('el-input',{attrs:{"type":_vm.keyNumber ? 'number' : 'text',"placeholder":"名称"},model:{value:(data.label),callback:function ($$v) {_vm.$set(data, "label", $$v)},expression:"data.label"}})],1),_c('el-col',{attrs:{"span":9}},[_c('el-input',{attrs:{"placeholder":"值"},model:{value:(data.value),callback:function ($$v) {_vm.$set(data, "value", $$v)},expression:"data.value"}})],1),_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.append(data); }}},[_c('i',{staticClass:"el-icon-circle-plus-outline"})]),_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.remove(node, data); }}},[_c('i',{staticClass:"el-icon-delete"})])],1)],1)],1)])}}],null,false,3814658901)})],1),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],1):_vm._e(),(_vm.type === 'rules')?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('span',{key:index},[(index !== 0)?_c('div',{staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":18}},[[_c('el-radio',{attrs:{"label":1},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("正则")]),_c('el-radio',{attrs:{"label":2},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("表达式")])]],2),_c('el-col',{attrs:{"span":18}},[_c('el-input',{attrs:{"placeholder":"提示信息"},model:{value:(val.message),callback:function ($$v) {_vm.$set(val, "message", $$v)},expression:"val.message"}})],1),_c('el-col',{attrs:{"span":18}},[(val.vtype == 1)?_c('el-input',{attrs:{"placeholder":"正则表达式pattern"},model:{value:(val.pattern),callback:function ($$v) {_vm.$set(val, "pattern", $$v)},expression:"val.pattern"}}):(val.vtype == 2)?_c('el-input',{attrs:{"type":"textarea","placeholder":"条件表达式"},model:{value:(val.script),callback:function ($$v) {_vm.$set(val, "script", $$v)},expression:"val.script"}}):_vm._e()],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1):_vm._e()])}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAddRules}},[_vm._v("增加校验")])],1):_vm._e()],2):(_vm.type === 'colspan')?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('div',{key:index,staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":18}},[_c('el-input-number',{staticStyle:{"width":"100%"},attrs:{"max":24,"placeholder":"名称"},model:{value:(val.span),callback:function ($$v) {_vm.$set(val, "span", $$v)},expression:"val.span"}})],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAddCol}},[_vm._v("添加")])],1):_vm._e()],2):_vm._e()],1)}
var option_changevue_type_template_id_172256cf_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/option-change/index.vue?vue&type=template&id=172256cf&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/option-change/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 
/* harmony default export */ var option_changevue_type_script_lang_js_ = ({
  name: "ChangeOption",
  props: {
    value: {
      type: Array,
      default: ()=> [],
      required: true
    },
    type: {
      type: String,
      default: "option"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // key必须为数字 2021-02-17 lyf
    keyNumber: {
      type: Boolean ,
      default: false
    },
  },
  methods: {
    handleAdd() {
      // 添加
      let addData = [
        ...this.value,
        {
          value: "",
          label: ""
        }
      ];
      this.$emit("input", addData);
    },
    handleAddCol() {
      // 添加栅格Col
      let addData = [
        ...this.value,
        {
          span: 12,
          list: []
        }
      ];
      this.$emit("input", addData);
    },
    handleAddRules() {
      let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          pattern: "",
          script: "",
          message: ""
        }
      ];
      this.$emit("input", addData);
    },
    handleDelete(deleteIndex) {
      // 删除
      this.$emit(
        "input",
        this.value.filter((val, index) => index !== deleteIndex)
      );
    },
    append(data) {
        const newChild = { value: '', label: '', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
    },

    remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.value === data.value);
        children.splice(index, 1);
    },

  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/option-change/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_option_changevue_type_script_lang_js_ = (option_changevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/option-change/index.vue





/* normalize component */

var option_change_component = normalizeComponent(
  properties_option_changevue_type_script_lang_js_,
  option_changevue_type_template_id_172256cf_render,
  option_changevue_type_template_id_172256cf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var option_change = (option_change_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/linkage/index.vue?vue&type=template&id=3970dbe7&
var linkagevue_type_template_id_3970dbe7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"option-change-container"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('span',{key:index},[_c('div',{staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":21}},[[_vm._v(" "+_vm._s(index+1)+"、 "),_c('el-radio',{attrs:{"label":1},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("本地")]),_c('el-radio',{attrs:{"label":2},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("远程")])]],2),_c('el-col',{attrs:{"span":21}},[_c('el-input',{attrs:{"size":"mini","placeholder":"关联字段"},model:{value:(val.model),callback:function ($$v) {_vm.$set(val, "model", $$v)},expression:"val.model"}},[_c('template',{slot:"prepend"},[_vm._v("关联字段")])],2)],1),_c('el-col',{attrs:{"span":21}},[(val.vtype == 1)?[_vm._v(" 表达式: "),_c('el-input',{attrs:{"size":"mini","type":"textarea","placeholder":"表达式,eg: $item.value>$.age . 其中$item表示当前数据中具体一条数据,$表示当前整个表单数据"},model:{value:(val.script),callback:function ($$v) {_vm.$set(val, "script", $$v)},expression:"val.script"}})]:(val.vtype == 2)?_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"mini","placeholder":"query key"},model:{value:(val.queryKey),callback:function ($$v) {_vm.$set(val, "queryKey", $$v)},expression:"val.queryKey"}})],1),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"mini","placeholder":"query value"},model:{value:(val.queryValue),callback:function ($$v) {_vm.$set(val, "queryValue", $$v)},expression:"val.queryValue"}})],1)],1):_vm._e()],2),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)])}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],2)],1)}
var linkagevue_type_template_id_3970dbe7_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/linkage/index.vue?vue&type=template&id=3970dbe7&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/linkage/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 
/* harmony default export */ var linkagevue_type_script_lang_js_ = ({
  name: "ChangeOption",
  props: {
    value: {
      type: Array,
      default: ()=> [],
      required: true
    },
     
    disabled: {
      type: Boolean,
      default: false
    },
    
  },
  methods: {
     
    handleAdd() {
      if(!this.value) {
        this.value = []
      }
      let addData = [
        ...this.value,
        {
          vtype: 1,
          //validator: 'validatorFiled',
          model: "",
          script: "",
          queryKey: "",
          queryValue: ""
        }
      ]; 
      this.$emit("input", addData);
    },
    handleDelete(deleteIndex) {
      // 删除
      this.$emit(
        "input",
        this.value.filter((val, index) => index !== deleteIndex)
      );
    },
      
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/linkage/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_linkagevue_type_script_lang_js_ = (linkagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/linkage/index.vue





/* normalize component */

var linkage_component = normalizeComponent(
  properties_linkagevue_type_script_lang_js_,
  linkagevue_type_template_id_3970dbe7_render,
  linkagevue_type_template_id_3970dbe7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var linkage = (linkage_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/item-properties.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 


/* harmony default export */ var item_propertiesvue_type_script_lang_js_ = ({
  name: "formItemProperties",
  data() {
    return {
      options: {}
    };
  },
  watch: {
    selectItem(val) { 
      this.options = val.options || {}; 
    }
  },
  props: {
    selectItem: {
      type: Object,
      required: true
    },

    hideModel: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    OptionChange: option_change , Linkage: linkage
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/item-properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_item_propertiesvue_type_script_lang_js_ = (item_propertiesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/item-properties.vue





/* normalize component */

var item_properties_component = normalizeComponent(
  properties_item_propertiesvue_type_script_lang_js_,
  item_propertiesvue_type_template_id_10aba29f_render,
  item_propertiesvue_type_template_id_10aba29f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var item_properties = (item_properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/form-properties.vue?vue&type=template&id=16906ed2&scoped=true&
var form_propertiesvue_type_template_id_16906ed2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"properties-centent kk-checkbox"},[_c('div',{staticClass:"properties-body"},[_c('el-form',{attrs:{"label-position":"left","size":"mini"}},[_c('el-form-item',{attrs:{"label":"标签对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.config.labelPosition),callback:function ($$v) {_vm.$set(_vm.config, "labelPosition", $$v)},expression:"config.labelPosition"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标签宽度"}},[_c('el-input-number',{attrs:{"min":0,"max":200,"step":10},model:{value:(_vm.config.labelWidth),callback:function ($$v) {_vm.$set(_vm.config, "labelWidth", $$v)},expression:"config.labelWidth"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"组件尺寸"}},[_c('el-radio-group',{model:{value:(_vm.config.size),callback:function ($$v) {_vm.$set(_vm.config, "size", $$v)},expression:"config.size"}},[_c('el-radio-button',{attrs:{"label":"medium"}},[_vm._v("medium")]),_c('el-radio-button',{attrs:{"label":"small"}},[_vm._v("small")]),_c('el-radio-button',{attrs:{"label":"mini"}},[_vm._v("mini")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"校验字段提示"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-value":true,"active-value":false,"inactive-text":"关闭"},model:{value:(_vm.config.hideRequiredMark),callback:function ($$v) {_vm.$set(_vm.config, "hideRequiredMark", $$v)},expression:"config.hideRequiredMark"}})],1),_c('el-form-item',{attrs:{"label":"输出隐藏组件值"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:(_vm.config.outputHidden),callback:function ($$v) {_vm.$set(_vm.config, "outputHidden", $$v)},expression:"config.outputHidden"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"表单CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.config.customStyle),callback:function ($$v) {_vm.$set(_vm.config, "customStyle", $$v)},expression:"config.customStyle"}})],1),_c('el-divider'),_vm._t("form-extend-properties"),_c('el-form-item',{attrs:{"label":"提示"}},[_vm._v(" 实际预览效果请点击预览查看 ")])],2)],1)])}
var form_propertiesvue_type_template_id_16906ed2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/form-properties.vue?vue&type=template&id=16906ed2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/form-properties.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 
/* harmony default export */ var form_propertiesvue_type_script_lang_js_ = ({
  name: "formProperties", 
  props: {
    config: {
      type: Object,
      required: true
    },
    previewOptions: {
      type: Object,
      required: true
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/form-properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_form_propertiesvue_type_script_lang_js_ = (form_propertiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/properties/form-properties.vue?vue&type=style&index=0&id=16906ed2&scoped=true&lang=css&
var form_propertiesvue_type_style_index_0_id_16906ed2_scoped_true_lang_css_ = __webpack_require__("41a9");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/form-properties.vue






/* normalize component */

var form_properties_component = normalizeComponent(
  properties_form_propertiesvue_type_script_lang_js_,
  form_propertiesvue_type_template_id_16906ed2_scoped_true_render,
  form_propertiesvue_type_template_id_16906ed2_scoped_true_staticRenderFns,
  false,
  null,
  "16906ed2",
  null
  
)

/* harmony default export */ var form_properties = (form_properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/properties/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import ItemProperties2 from './item-properties2'


/* harmony default export */ var propertiesvue_type_script_lang_js_ = ({
	components: {
		ItemProperties: item_properties,FormProperties: form_properties/*,ItemProperties2*/
	},
	props: {
		data: {
			type: Object ,
			default : () => {}
		},
		selectItem: {
			type: Object,
			default: ()=>{}
		}
	},
	watch: {
	    selectItem(val) {
	      this.active = 'item'
	    }
	},
	data(){
		return{
			//selectItem: {}
			active: 'item',
			previewOptions: {
		        width: 850
		    },
		}
	}, 
	methods: {

	}
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_propertiesvue_type_script_lang_js_ = (propertiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/properties/index.vue?vue&type=style&index=0&lang=css&
var propertiesvue_type_style_index_0_lang_css_ = __webpack_require__("12cb");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/properties/index.vue






/* normalize component */

var properties_component = normalizeComponent(
  src_propertiesvue_type_script_lang_js_,
  propertiesvue_type_template_id_745b4370_render,
  propertiesvue_type_template_id_745b4370_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var properties = (properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/index.vue?vue&type=template&id=0ca38e4c&
var previewvue_type_template_id_0ca38e4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticClass:"design-preview",staticStyle:{"top":"20px"},attrs:{"title":"预览","visible":_vm.visible,"append-to-body":true,"destroy-on-close":true,"width":(_vm.previewWidth + "px")},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"item-main"},[_c('FormBuild',{ref:"formBuild",attrs:{"formTemplate":_vm.jsonData,"models":_vm.models}}),_c('jsonModel',{ref:"jsonModel"}),(_vm.renderVisisble)?_c('renderPreview',{ref:"renderPreview"}):_vm._e()],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_c('el-button',{on:{"click":_vm.handleGetData}},[_vm._v("获取数据")]),_c('el-button',{on:{"click":_vm.handleRender}},[_vm._v("渲染")]),_c('el-button',{on:{"click":_vm.handleValidator}},[_vm._v("验证")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)])}
var previewvue_type_template_id_0ca38e4c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/index.vue?vue&type=template&id=0ca38e4c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-build/index.vue?vue&type=template&id=3c602b80&
var form_buildvue_type_template_id_3c602b80_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (
    typeof _vm.formTemplate.list !== 'undefined' && typeof _vm.formTemplate.config !== 'undefined'
  )?_c('el-form',{key:_vm.randomId,ref:"form",staticClass:"form-build form-design",style:(_vm.formTemplate.config.customStyle),attrs:{"label-position":_vm.formTemplate.config.labelPosition,"hide-required-asterisk":_vm.formTemplate.config.hideRequiredMark,"label-width":_vm.formTemplate.config.labelWidth + 'px',"rules":_vm.rules,"model":_vm.models,"size":_vm.formTemplate.config.size,"id":_vm.randomId}},[_vm._l((_vm.formTemplate.list),function(record){return _c('buildBlocks',{key:record.model,ref:"buildBlocks",refInFor:true,attrs:{"renderPreview":_vm.renderPreview,"record":record,"models":_vm.models,"config":_vm.config,"disabled":_vm.disabled,"formConfig":_vm.formTemplate.config},on:{"handleReset":_vm.reset,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event},"change":_vm.handleChange}})})],2):_vm._e()}
var form_buildvue_type_template_id_3c602b80_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/index.vue?vue&type=template&id=3c602b80&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-build/build-block.vue?vue&type=template&id=62752724&
var build_blockvue_type_template_id_62752724_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.record.type === 'grid' && _vm.dynamicVisibleItem)?_c('el-row',{staticClass:"grid-row",attrs:{"gutter":_vm.record.options.gutter}},_vm._l((_vm.record.columns),function(colItem,idnex){return _c('el-col',{key:idnex,staticClass:"grid-col",attrs:{"span":colItem.span || 0}},_vm._l((colItem.list),function(item){return _c('buildBlocks',{key:item.key,ref:"nestedComponents",refInFor:true,attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":item,"formConfig":_vm.formConfig},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})}),1)}),1):(_vm.record.type === 'table' && _vm.dynamicVisibleItem)?_c('table',{class:[
    'table-layout','form-table',
    _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
    _vm.record.options.bright ? 'bright' : '' ,
    _vm.record.options.small ? 'small' : '' ,
    _vm.record.options.bordered ? 'bordered' : '' 
  ],style:(_vm.record.options.customStyle)},[_vm._l((_vm.record.trs),function(trItem,trIndex){return [(_vm.showTr(trItem , _vm.models))?_c('tr',{key:trIndex},_vm._l((trItem.tds),function(tdItem,tdIndex){return _c('td',{key:tdIndex,class:['table-td', tdItem.class],style:(tdItem.style),attrs:{"colspan":tdItem.colspan,"rowspan":tdItem.rowspan}},_vm._l((tdItem.list),function(item){return _c('buildBlocks',{key:item.key,ref:"nestedComponents",refInFor:true,attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":item,"formConfig":_vm.formConfig},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})}),1)}),0):_vm._e()]})],2):(_vm.dynamicVisibleItem && _vm.record.options.tooptip && _vm.record.options.tooptip.trim())?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","enterable":false,"open-delay":500,"placement":"top-start"}},[_c('div',{staticClass:"tooltip-content",attrs:{"slot":"content"},slot:"content"},[_vm._v(" "+_vm._s(_vm.record.options.tooptip))]),_c('form-item',{key:_vm.record.key,ref:"nestedComponents",attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"formConfig":_vm.formConfig},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})],1):(_vm.dynamicVisibleItem)?_c('form-item',{key:_vm.record.key,ref:"nestedComponents",attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"formConfig":_vm.formConfig},on:{"forceUpdate":_vm.forceUpdate,"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"update:models":function($event){_vm.models=$event}}}):_vm._e()}
var build_blockvue_type_template_id_62752724_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/build-block.vue?vue&type=template&id=62752724&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-build/build-block.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 


/* harmony default export */ var build_blockvue_type_script_lang_js_ = ({
  name: "buildBlocks",
  props: {
    record: {
      type: Object,
      required: true
    },
    models: {
      type: Object , 
      required: true
    },
    formConfig: {
      type: Object,
      default: ()=> ({
        labelWidth: 120
      })
      //required: true
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    } 
  },
  components: {
    FormItem: form_item
  },
  computed: { 
    // 是否动态显示当前元素 
    // 返回true 显示 false 不显示
    dynamicVisibleItem(){
      
      if(!this.record.options || !this.record.options.dynamicVisible){
        return true
      }
      if(!this.record.options.dynamicVisibleValue){
        return true
      }
      let fstr = this.record.options.dynamicVisibleValue;
      // 打开了开关 这里获取函数内容
  
      const ret = dynamicFun(fstr,this.models) 
      return ret ;
    }
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      if (
        typeof this.$refs.nestedComponents === "undefined" ||
        typeof this.$refs.nestedComponents.validationSubform === "undefined"
      )
        return true;

      return this.$refs.nestedComponents.validationSubform();
    },
    handleChange(value, key) { 
      this.$emit("change", value, key);
    },
    forceUpdate(){ 
       this.$emit("forceUpdate" );
    },
     showTr(trItem , model){
      // 判断tr中是否还存在需要显示的td数据 
      const tds = trItem.tds; 
      let fs = tds.map(t=>{
        const tdlist = t.list 
         // 判断list中每个数据是否需要显示
        for(let i in tdlist){
          const tdRecord = tdlist[i]

          if(!tdRecord.options || !tdRecord.options.dynamicVisible){
            return tdRecord
          }
          // 没有配置动态显示隐藏的函数
          if(!tdRecord.options.dynamicVisibleValue){
            return true
          }

          let fstr = tdRecord.options.dynamicVisibleValue;

           // 打开了开关 这里获取函数内容 
          const fvalue = dynamicFun(fstr,model)  

          if(fvalue) {
            return tdRecord
          }

        } 
 
      })

      for(let j in fs) {
        if(fs[j]){
          return true
        }
      }

      return false 

    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/build-block.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_build_build_blockvue_type_script_lang_js_ = (build_blockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/build-block.vue





/* normalize component */

var build_block_component = normalizeComponent(
  form_build_build_blockvue_type_script_lang_js_,
  build_blockvue_type_template_id_62752724_render,
  build_blockvue_type_template_id_62752724_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var build_block = (build_block_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/form-build/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 
  
/* harmony default export */ var form_buildvue_type_script_lang_js_ = ({
  name: "VueDragFormBuild",
  data() {
    return {
      randomId: '' ,
      //visible: true , 
      form: this.$refs.form,
      //models: {},
      rules: {}
    };
  }, 
  props: {
    formTemplate: {
      type: Object,
      required: true
    },
    models: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },  
    // 是否预览结果表单
    renderPreview: {
      type: Boolean ,
      default: false
    }, 
    customComponents: {
      type: Array,
      default: ()=>[]
    }, 
  },
  watch: {
    formTemplate: {
      handler (val, oldVal) {
        this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)
         
      },
      deep: true
    }
    
  },
  components: {
    buildBlocks: build_block
  },
  methods: { 
    reset() {
      // 重置表单
      this.$refs.form.resetFields();

      this.models = {} 

    },
    forceUpdate(){ 
      // this.visible = false
      // this.$nextTick(()=>{  
      //   this.visible = true
      // }) 
    },
    validator(){
      return new Promise((resolve, reject) => { 

          this.$refs.form.validate((valid,values)=>{ 
            
            resolve(valid); 
          })
 
      });
    },
    getData() {
      // 提交函数，提供父级组件调用
      return new Promise((resolve, reject) => { 

          this.$refs.form.validate((valid,values)=>{ 
            if (!valid) { 
              reject('验证失败');
            } 
            this.clearHiddenValue()
            resolve(this.models); 
          })
 
      });
    },
    // 初始化验证规则
    initRules(weights , key){
      if(!weights) return
 

    },
    // 2021-03-12 清理没有显示的组件的数据
    clearHiddenValue() {
      // 根据组件ID 是否隐藏为准
      // 根据 formTemplate.config.outputHidden 来判断是否要输出隐藏 
      if(!this.formTemplate.config || !this.formTemplate.config.outputHidden) {
       
        const formdesign = document.getElementById(this.randomId)
       
        // 循环当前数据 非P 开头的统一不深入第二层
        for(let key in this.models) {
          if(key.indexOf('_label') > 0) continue 
          //  判断key的id是否还在
          const key_div = formdesign.querySelector('#' + key) 
          if(!key_div) {
            // 删除
            delete this.models[key]
            delete this.models[key + '_label']
          }  
        } 
      }

      
    }, 
    // 初始化表单数据 默认值或者填充值
    initData(){

    }, 
    setData(json) { 
      this.models = json
 
    }, 
    handleChange(value, key) {
      // 触发change事件
      this.$emit("change", value, key);
    }
  },
  mounted() {  
    this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)
    this.$nextTick(() => {
      const list = this.formTemplate.list
      this.initRules(list)   

      if(!window.customComponents && this.customComponents && this.customComponents.length > 0) {
        window.customComponents = this.customComponents
      } 

      if(this.config.httpConfig && !window.httpConfig) {
        window.httpConfig = this.config.httpConfig
      }
      

    });
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_buildvue_type_script_lang_js_ = (form_buildvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/form-build/index.vue





/* normalize component */

var form_build_component = normalizeComponent(
  src_form_buildvue_type_script_lang_js_,
  form_buildvue_type_template_id_3c602b80_render,
  form_buildvue_type_template_id_3c602b80_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_build = (form_build_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/json-model.vue?vue&type=template&id=d4317646&
var json_modelvue_type_template_id_d4317646_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"JSON数据","visible":_vm.visible,"append-to-body":true,"width":"850px"},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('previewCode',{attrs:{"editorJson":_vm.editorJson}}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)],1)}
var json_modelvue_type_template_id_d4317646_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/json-model.vue?vue&type=template&id=d4317646&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/preview-code.vue?vue&type=template&id=370a8c9e&
var preview_codevue_type_template_id_370a8c9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"json-box"},[_c('el-input',{ref:"myEditor",staticStyle:{"min-height":"300px","height":"300px"},attrs:{"rows":15,"readonly":"","type":"textarea","value":_vm.editorJson}})],1),_c('div',{staticClass:"copy-btn-box"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleExportJson}},[_vm._v(" 导出代码 ")])],1)])}
var preview_codevue_type_template_id_370a8c9e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/preview-code.vue?vue&type=template&id=370a8c9e&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/preview-code.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 剪切板组件
//import Clipboard from "clipboard";
//import { codemirror } from "vue-codemirror-lite";
/* harmony default export */ var preview_codevue_type_script_lang_js_ = ({
  name: "PreviewCode",
  props: {
    fileFormat: {
      type: String,
      default: "json"
    },
    editorJson: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false
    };
  },

  components: {
    //codemirror
  },
  methods: {
    exportData(data, fileName = `demo.${this.fileFormat}`) {
      let content = "data:text/csv;charset=utf-8,";
      content += data;
      var encodedUri = encodeURI(content);
      var actions = document.createElement("a");
      actions.setAttribute("href", encodedUri);
      actions.setAttribute("download", fileName);
      actions.click();
    },
    handleExportJson() {
      // 导出JSON
      this.exportData(this.editorJson);
    },
   /* handleCopyJson() {
      // 复制数据
      let clipboard = new Clipboard(".copy-btn");
      clipboard.on("success", () => {
        this.$message.success("复制成功");
      });
      clipboard.on("error", () => {
        this.$message.error("复制失败");
      });
      setTimeout(() => {
        // 销毁实例
        clipboard.destroy();
      }, 122);
    }*/
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/preview-code.vue?vue&type=script&lang=js&
 /* harmony default export */ var preview_preview_codevue_type_script_lang_js_ = (preview_codevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/preview-code.vue





/* normalize component */

var preview_code_component = normalizeComponent(
  preview_preview_codevue_type_script_lang_js_,
  preview_codevue_type_template_id_370a8c9e_render,
  preview_codevue_type_template_id_370a8c9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var preview_code = (preview_code_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/json-model.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 

/* harmony default export */ var json_modelvue_type_script_lang_js_ = ({
  name: "JsonModal",
  data() {
    return {
      visible: false,
      editorJson: "",
      jsonData: {}
    };
  },
  watch: {
    visible(val) {
      if (val) { 
        this.editorJson = JSON.stringify(this.jsonData, null, "\t");
      }
    }
  },
  components: {
    previewCode: preview_code
  },
  methods: {
    handleCancel() {
      this.visible = false;
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/json-model.vue?vue&type=script&lang=js&
 /* harmony default export */ var preview_json_modelvue_type_script_lang_js_ = (json_modelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/json-model.vue





/* normalize component */

var json_model_component = normalizeComponent(
  preview_json_modelvue_type_script_lang_js_,
  json_modelvue_type_template_id_d4317646_render,
  json_modelvue_type_template_id_d4317646_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var json_model = (json_model_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e379ac7-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/render/preview.vue?vue&type=template&id=79daaf27&
var previewvue_type_template_id_79daaf27_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"预览","visible":_vm.visible,"append-to-body":true,"width":(_vm.previewWidth + "px")},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-tabs',{staticClass:"form-render-preview form-design",attrs:{"type":"card"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('el-tab-pane',{attrs:{"label":"模板","name":"template"}},[_c('el-input',{staticStyle:{"height":"100%"},attrs:{"rows":20,"type":"textarea"},on:{"change":_vm.changeTemplate},model:{value:(_vm.templdateText),callback:function ($$v) {_vm.templdateText=$$v},expression:"templdateText"}})],1),_c('el-tab-pane',{attrs:{"label":"数据","name":"second"}},[_c('el-input',{staticStyle:{"height":"100%"},attrs:{"rows":20,"type":"textarea"},on:{"change":_vm.changeValue},model:{value:(_vm.valueText),callback:function ($$v) {_vm.valueText=$$v},expression:"valueText"}})],1),_c('el-tab-pane',{attrs:{"label":"表单","name":"third"}},[(_vm.buildVisible)?_c('FormBuild',{ref:"buildPreview",attrs:{"formTemplate":_vm.formTemplate,"models":_vm.models}}):_vm._e()],1),_c('el-tab-pane',{attrs:{"label":"渲染","name":"four"}},[(_vm.formVisible)?_c('FormBuild',{ref:"formPreview",staticStyle:{"height":"100%"},attrs:{"formTemplate":_vm.formTemplate,"models":_vm.models,"renderPreview":true}}):_vm._e()],1)],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),(_vm.active == 'third')?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.syncModel}},[_vm._v("同 步")]):_vm._e(),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)],1)}
var previewvue_type_template_id_79daaf27_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/render/preview.vue?vue&type=template&id=79daaf27&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/render/preview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 
/* harmony default export */ var previewvue_type_script_lang_js_ = ({
  name: "FormPreview",
  data() {
    return {
      templdateText: '' ,
      valueText: '',

      active: 'template',
      visible: false, 
      formVisible: false,
      buildVisible: false,
      previewWidth: 850,
      formTemplate: {},
      models: {}
    };
  },
  components: {
    FormBuild: form_build
  },
  methods: { 
    init(template , value) { 
      
      this.visible = true
      this.$nextTick(() => {
        if(template) { 
          this.formTemplate = template
          this.templdateText =  JSON.stringify(this.formTemplate, null, "\t");  
        } else {
          this.formTemplate = {}
          this.templdateText =  ''
        }

       

        if(value){
          this.models = value 
          this.valueText =  JSON.stringify(this.models, null, "\t");  
        }

        if(this.models){
           
          this.handlerFormRender()
        }
      })
       
    },
    changeTemplate(v){
      this.formTemplate = JSON.parse(v)
    },
    changeValue(v){ 
      this.models = JSON.parse(v)

      this.handlerFormRender()
    },
    handlerFormRender(){
      this.formVisible = false 
      this.buildVisible = false
      const model = this.models 
      this.$nextTick(() => {
        this.formVisible = true 
        this.buildVisible = true
        if(model){
          this.$nextTick(() => {
            this.$refs.formPreview.setData(model)
            this.$refs.buildPreview.setData(model)
          })
        } 
      }) 
    },
    // 同步模型数据 根据填写的表单 
    syncModel(){
     
      this.$refs.buildPreview.getData()
        .then(res => { 
          this.$nextTick(() => {
            this.models = res ;
            this.valueText = JSON.stringify(res, null, "\t"); 
          })  
      })
      .catch(err => {
          console.log(err, "获取数据失败");
      });
    },
    handleCancel() {
      this.visible = false;
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/render/preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_previewvue_type_script_lang_js_ = (previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/render/preview.vue?vue&type=style&index=0&lang=css&
var previewvue_type_style_index_0_lang_css_ = __webpack_require__("9df2");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/render/preview.vue






/* normalize component */

var preview_component = normalizeComponent(
  render_previewvue_type_script_lang_js_,
  previewvue_type_template_id_79daaf27_render,
  previewvue_type_template_id_79daaf27_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var preview = (preview_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/preview/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 




/* harmony default export */ var src_previewvue_type_script_lang_js_ = ({
  name: "FormPreview",
  data() {
    return {
      visible: false,
      renderVisisble: false,
      previewWidth: 850,
      models:{},
      jsonData: {}
    };
  },
  components: {
    jsonModel: json_model,FormBuild: form_build,renderPreview: preview
  },
  methods: {
    
    handleGetData() {
      this.$refs.formBuild.getData()
        .then(res => { 

          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleValidator(){
       this.$refs.formBuild.getData()
        .then(res => { 
  
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$refs.formBuild.getData()
        .then(res => { 
          this.$nextTick(() => {
            this.$refs.renderPreview.init(this.jsonData , res)
          })  
      })
      .catch(err => {
          console.log(err, "获取数据失败");
      });
     
    },
    handleCancel() {
      this.visible = false;
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_drag_formdesign_src_previewvue_type_script_lang_js_ = (src_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/preview/index.vue?vue&type=style&index=0&lang=css&
var src_previewvue_type_style_index_0_lang_css_ = __webpack_require__("f717");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/preview/index.vue






/* normalize component */

var src_preview_component = normalizeComponent(
  vue_drag_formdesign_src_previewvue_type_script_lang_js_,
  previewvue_type_template_id_0ca38e4c_render,
  previewvue_type_template_id_0ca38e4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_preview = (src_preview_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-drag-formdesign/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 



 



 



/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'VueDragFormdesign',
  data(){
    return {
      previewVisible: false , 
      modelJson: {},

      modelVisible: false,
      importVisible: false,
      importText: '' ,

      renderVisisble: false,
      // 基础配置
      data: {
        list: [],
        config: {
          labelPosition: "left",
          labelWidth: 100, 
          size: 'mini',
          outputHidden: true ,//  是否输出隐藏字段的值 默认打开,所有字段都输出
          hideRequiredMark: true ,
          customStyle: ""
        }
      },

      previewOptions: {
        width: 850
      },
      selectItem: {} // 选中的元素
    }
  },
  watch: {
    data :{
      handler(newValue, oldValue){ 
        if(this.selectForm && this.selectForm.id) {
          // 修改数据发生变化
          //this.selectForm.change = true 
          const jsonForm = JSON.stringify(this.selectForm.htmlModel)
          const jsonData = JSON.stringify(this.data)
          if(jsonForm != jsonData){
            this.$set(this.selectForm , 'change' , true)
            this.$set(this.selectForm , 'htmlModel' , cloneDeep_default()(this.data))
          } 
        }
      },
      //对象的深度监听deep，默认为false不进行深度监听
      deep: true 
    },
    selectForm :{
      handler(newValue, oldValue){ 
        if(newValue && newValue.id != (oldValue ? oldValue.id: '')) {
          // 修改数据发生变化
          
          const htmlModel = newValue.htmlModel
      
          let jsonModel = htmlModel ? (typeof htmlModel == 'object' ? htmlModel : JSON.parse(htmlModel) ) : null

          this.initModel(cloneDeep_default()(htmlModel))
          
        }
      },
      //对象的深度监听deep，默认为false不进行深度监听
      deep: true 
    },
    
  },
  props:{
    selectForm: {
      type: Object,
    },
    customComponents: {
      type: Array,
      default: ()=>[]
    },
    config: {
      type: Object,
      default: ()=> {return {}}
    }
    
  },
   
  components: {
    DragItem: drag_item,DragPanel: drag_panel,Properties: properties,Preview: src_preview,previewCode: preview_code,renderPreview: preview
  },
  created(){  
    if( this.customComponents && this.customComponents.length > 0) {
      window.customComponents = this.customComponents
    }
    if(this.config.httpConfig) {
      window.httpConfig = this.config.httpConfig
    }
  },
  methods: {
    changeSelectItem(item) {
      this.selectItem = item
    },
    handlePreview () { 

          this.previewVisible = true
          const this_ = this
          this.$nextTick(() => {
            this_.$refs.preview.jsonData = this_.data;
            this_.$refs.preview.previewWidth = this_.previewOptions.width;
            this_.$refs.preview.visible = true;
          }) 
         
    },
    handleClear () {
       this.$confirm('清空后无法恢复,请确认操作?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.data.list = []
        }) 
     
    },
    // 导入
    handleImport(){
      this.importVisible = true 
      this.importText = ''
    },
    importModel(){
      if(!this.importText) {
        alert('文本不能为空')
        return
      }

      const importData = JSON.parse(this.importText)
      if(importData){
        this.data = importData
      }

      this.importVisible = false


    },
    initModel(model) { 
      if(model)
        this.data = model
      else {
        this.data.list = []
      }

      this.selectItem = {}
      this.$refs.dragPanel.selectItem = {}
    },
    getModel(){
      return this.data
    },
    handleRender(){
     
      this.renderVisisble = true ;
      this.$nextTick(() => {
        this.$refs.renderPreview.init(this.data)
      })
    },
    handleGenerateJson () { 

      this.modelJson =  JSON.stringify(this.data, null, "\t"); //JSON.stringify(this.data)
      this.modelVisible = true
 
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_drag_formdesign_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-drag-formdesign/src/index.vue?vue&type=style&index=0&lang=css&
var srcvue_type_style_index_0_lang_css_ = __webpack_require__("ca40");

// CONCATENATED MODULE: ./packages/vue-drag-formdesign/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  vue_drag_formdesign_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_drag_formdesign_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/vue-drag-formdesign/index.js
// 导入组件，组件必须声明 name


 
 
// 为组件提供 install 安装方法，供按需引入
vue_drag_formdesign_src.install = function (Vue) { 
  Vue.component(vue_drag_formdesign_src.name, vue_drag_formdesign_src)
}
// 为组件提供 install 安装方法，供按需引入
form_build.install = function (Vue) { 
  Vue.component(form_build.name, form_build)
}
 
form_item.install = function (Vue) { 
  Vue.component(form_item.name, form_item)
}

base_item.install = function (Vue) { 
  Vue.component(base_item.name, base_item)
}
// 默认导出组件
/* harmony default export */ var vue_drag_formdesign = ([ vue_drag_formdesign_src,form_build,form_item,base_item]);
 
// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件

 

// 存储组件列表 
 
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  vue_drag_formdesign.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...vue_drag_formdesign
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.4.6@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "9b26":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "9c18":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("a59e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("97bb")(module)))

/***/ }),

/***/ "9c46":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "9da1":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "9df2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a21");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a123":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("542d");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "a1c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var bind = __webpack_require__("28e0");
var Axios = __webpack_require__("173d");
var defaults = __webpack_require__("a44d");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a07");
axios.CancelToken = __webpack_require__("d053");
axios.isCancel = __webpack_require__("046d");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("6016");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "a35b":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "a44d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("0260");
var normalizeHeaderName = __webpack_require__("967c");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("eda7");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("eda7");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eef6")))

/***/ }),

/***/ "a59e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("0288")))

/***/ }),

/***/ "a6e1":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("e477"),
    mapCacheDelete = __webpack_require__("ce4d"),
    mapCacheGet = __webpack_require__("1bb3"),
    mapCacheHas = __webpack_require__("975b"),
    mapCacheSet = __webpack_require__("a123");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "a71c":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "a79c":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("5e96"),
    isArray = __webpack_require__("8b3f");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "ac14":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "aca7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ae86":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("82d7");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "b11a":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("5d58");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "b350":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b3f8":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("866b");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "b5c3":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("a79c"),
    getSymbols = __webpack_require__("c28a"),
    keys = __webpack_require__("6be8");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "b6b5":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("a59e");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "b6e4":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("1c9c"),
    baseUnary = __webpack_require__("f76d"),
    nodeUtil = __webpack_require__("9c18");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "b7df":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "b81e":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("cd52"),
    eq = __webpack_require__("5374");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "bb91":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("85b3"),
    root = __webpack_require__("b6b5");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "bc6e":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("ae86"),
    getPrototype = __webpack_require__("3cf9"),
    isPrototype = __webpack_require__("c021");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "bfb2":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "c021":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "c070":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("407d");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "c277":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("8852"),
    baseKeysIn = __webpack_require__("2e12"),
    isArrayLike = __webpack_require__("9072");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "c28a":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("a35b"),
    stubArray = __webpack_require__("0d2b");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "c531":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c592":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("779e"),
    getSymbols = __webpack_require__("c28a");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "c720":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("866b");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "ca40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8053");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("cc5a");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "cc5a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("190f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "cd52":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("5123");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "cda4":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("407d");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "cdbe":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("0623");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "ce4d":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("542d");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "d053":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a07");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "d114":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "d81e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("717f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d8e7":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "dc98":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("8c18");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "df70":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("9822"),
    isObject = __webpack_require__("82d7");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "e477":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("9269"),
    ListCache = __webpack_require__("eb9c"),
    Map = __webpack_require__("bb91");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "e7e5":
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__("70e3");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "eb9c":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("12b6"),
    listCacheDelete = __webpack_require__("5849"),
    listCacheGet = __webpack_require__("ff09"),
    listCacheHas = __webpack_require__("cdbe"),
    listCacheSet = __webpack_require__("083c");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "ed2f":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("1ed2"),
    isObjectLike = __webpack_require__("4923");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "eda7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0260");
var settle = __webpack_require__("cc26");
var buildURL = __webpack_require__("9c46");
var parseHeaders = __webpack_require__("5fad");
var isURLSameOrigin = __webpack_require__("7847");
var createError = __webpack_require__("cc5a");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("59c9");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "eef6":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("6266");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "f1b8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bef0058_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aca7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bef0058_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bef0058_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f39a":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "f717":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("366f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f753":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a1c5");

/***/ }),

/***/ "f76d":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "f7eb":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("ed2f"),
    baseUnary = __webpack_require__("f76d"),
    nodeUtil = __webpack_require__("9c18");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "fe3c":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("8c18");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "ff09":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("0623");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "ffc7":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("9822"),
    isObjectLike = __webpack_require__("4923");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ })

/******/ });