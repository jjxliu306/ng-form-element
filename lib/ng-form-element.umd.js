(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ng-form-element"] = factory();
	else
		root["ng-form-element"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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

/***/ "1333":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "79c4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"c\":[{\"c\":[{\"l\":\"东城区\",\"v\":\"110101\"},{\"l\":\"西城区\",\"v\":\"110102\"},{\"l\":\"朝阳区\",\"v\":\"110105\"},{\"l\":\"丰台区\",\"v\":\"110106\"},{\"l\":\"石景山区\",\"v\":\"110107\"},{\"l\":\"海淀区\",\"v\":\"110108\"},{\"l\":\"门头沟区\",\"v\":\"110109\"},{\"l\":\"房山区\",\"v\":\"110111\"},{\"l\":\"通州区\",\"v\":\"110112\"},{\"l\":\"顺义区\",\"v\":\"110113\"},{\"l\":\"昌平区\",\"v\":\"110114\"},{\"l\":\"大兴区\",\"v\":\"110115\"},{\"l\":\"怀柔区\",\"v\":\"110116\"},{\"l\":\"平谷区\",\"v\":\"110117\"},{\"l\":\"密云区\",\"v\":\"110118\"},{\"l\":\"延庆区\",\"v\":\"110119\"}],\"l\":\"市辖区\",\"v\":\"110100\"}],\"l\":\"北京市\",\"v\":\"110000\"},{\"c\":[{\"c\":[{\"l\":\"和平区\",\"v\":\"120101\"},{\"l\":\"河东区\",\"v\":\"120102\"},{\"l\":\"河西区\",\"v\":\"120103\"},{\"l\":\"南开区\",\"v\":\"120104\"},{\"l\":\"河北区\",\"v\":\"120105\"},{\"l\":\"红桥区\",\"v\":\"120106\"},{\"l\":\"东丽区\",\"v\":\"120110\"},{\"l\":\"西青区\",\"v\":\"120111\"},{\"l\":\"津南区\",\"v\":\"120112\"},{\"l\":\"北辰区\",\"v\":\"120113\"},{\"l\":\"武清区\",\"v\":\"120114\"},{\"l\":\"宝坻区\",\"v\":\"120115\"},{\"l\":\"滨海新区\",\"v\":\"120116\"},{\"l\":\"宁河区\",\"v\":\"120117\"},{\"l\":\"静海区\",\"v\":\"120118\"},{\"l\":\"蓟州区\",\"v\":\"120119\"}],\"l\":\"市辖区\",\"v\":\"120100\"}],\"l\":\"天津市\",\"v\":\"120000\"},{\"c\":[{\"c\":[{\"l\":\"长安区\",\"v\":\"130102\"},{\"l\":\"桥西区\",\"v\":\"130104\"},{\"l\":\"新华区\",\"v\":\"130105\"},{\"l\":\"井陉矿区\",\"v\":\"130107\"},{\"l\":\"裕华区\",\"v\":\"130108\"},{\"l\":\"藁城区\",\"v\":\"130109\"},{\"l\":\"鹿泉区\",\"v\":\"130110\"},{\"l\":\"栾城区\",\"v\":\"130111\"},{\"l\":\"井陉县\",\"v\":\"130121\"},{\"l\":\"正定县\",\"v\":\"130123\"},{\"l\":\"行唐县\",\"v\":\"130125\"},{\"l\":\"灵寿县\",\"v\":\"130126\"},{\"l\":\"高邑县\",\"v\":\"130127\"},{\"l\":\"深泽县\",\"v\":\"130128\"},{\"l\":\"赞皇县\",\"v\":\"130129\"},{\"l\":\"无极县\",\"v\":\"130130\"},{\"l\":\"平山县\",\"v\":\"130131\"},{\"l\":\"元氏县\",\"v\":\"130132\"},{\"l\":\"赵县\",\"v\":\"130133\"},{\"l\":\"石家庄高新技术产业开发区\",\"v\":\"130171\"},{\"l\":\"石家庄循环化工园区\",\"v\":\"130172\"},{\"l\":\"辛集市\",\"v\":\"130181\"},{\"l\":\"晋州市\",\"v\":\"130183\"},{\"l\":\"新乐市\",\"v\":\"130184\"}],\"l\":\"石家庄市\",\"v\":\"130100\"},{\"c\":[{\"l\":\"路南区\",\"v\":\"130202\"},{\"l\":\"路北区\",\"v\":\"130203\"},{\"l\":\"古冶区\",\"v\":\"130204\"},{\"l\":\"开平区\",\"v\":\"130205\"},{\"l\":\"丰南区\",\"v\":\"130207\"},{\"l\":\"丰润区\",\"v\":\"130208\"},{\"l\":\"曹妃甸区\",\"v\":\"130209\"},{\"l\":\"滦南县\",\"v\":\"130224\"},{\"l\":\"乐亭县\",\"v\":\"130225\"},{\"l\":\"迁西县\",\"v\":\"130227\"},{\"l\":\"玉田县\",\"v\":\"130229\"},{\"l\":\"河北唐山芦台经济开发区\",\"v\":\"130271\"},{\"l\":\"唐山市汉沽管理区\",\"v\":\"130272\"},{\"l\":\"唐山高新技术产业开发区\",\"v\":\"130273\"},{\"l\":\"河北唐山海港经济开发区\",\"v\":\"130274\"},{\"l\":\"遵化市\",\"v\":\"130281\"},{\"l\":\"迁安市\",\"v\":\"130283\"},{\"l\":\"滦州市\",\"v\":\"130284\"}],\"l\":\"唐山市\",\"v\":\"130200\"},{\"c\":[{\"l\":\"海港区\",\"v\":\"130302\"},{\"l\":\"山海关区\",\"v\":\"130303\"},{\"l\":\"北戴河区\",\"v\":\"130304\"},{\"l\":\"抚宁区\",\"v\":\"130306\"},{\"l\":\"青龙满族自治县\",\"v\":\"130321\"},{\"l\":\"昌黎县\",\"v\":\"130322\"},{\"l\":\"卢龙县\",\"v\":\"130324\"},{\"l\":\"秦皇岛市经济技术开发区\",\"v\":\"130371\"},{\"l\":\"北戴河新区\",\"v\":\"130372\"}],\"l\":\"秦皇岛市\",\"v\":\"130300\"},{\"c\":[{\"l\":\"邯山区\",\"v\":\"130402\"},{\"l\":\"丛台区\",\"v\":\"130403\"},{\"l\":\"复兴区\",\"v\":\"130404\"},{\"l\":\"峰峰矿区\",\"v\":\"130406\"},{\"l\":\"肥乡区\",\"v\":\"130407\"},{\"l\":\"永年区\",\"v\":\"130408\"},{\"l\":\"临漳县\",\"v\":\"130423\"},{\"l\":\"成安县\",\"v\":\"130424\"},{\"l\":\"大名县\",\"v\":\"130425\"},{\"l\":\"涉县\",\"v\":\"130426\"},{\"l\":\"磁县\",\"v\":\"130427\"},{\"l\":\"邱县\",\"v\":\"130430\"},{\"l\":\"鸡泽县\",\"v\":\"130431\"},{\"l\":\"广平县\",\"v\":\"130432\"},{\"l\":\"馆陶县\",\"v\":\"130433\"},{\"l\":\"魏县\",\"v\":\"130434\"},{\"l\":\"曲周县\",\"v\":\"130435\"},{\"l\":\"邯郸经济技术开发区\",\"v\":\"130471\"},{\"l\":\"邯郸冀南新区\",\"v\":\"130473\"},{\"l\":\"武安市\",\"v\":\"130481\"}],\"l\":\"邯郸市\",\"v\":\"130400\"},{\"c\":[{\"l\":\"襄都区\",\"v\":\"130502\"},{\"l\":\"信都区\",\"v\":\"130503\"},{\"l\":\"任泽区\",\"v\":\"130505\"},{\"l\":\"南和区\",\"v\":\"130506\"},{\"l\":\"临城县\",\"v\":\"130522\"},{\"l\":\"内丘县\",\"v\":\"130523\"},{\"l\":\"柏乡县\",\"v\":\"130524\"},{\"l\":\"隆尧县\",\"v\":\"130525\"},{\"l\":\"宁晋县\",\"v\":\"130528\"},{\"l\":\"巨鹿县\",\"v\":\"130529\"},{\"l\":\"新河县\",\"v\":\"130530\"},{\"l\":\"广宗县\",\"v\":\"130531\"},{\"l\":\"平乡县\",\"v\":\"130532\"},{\"l\":\"威县\",\"v\":\"130533\"},{\"l\":\"清河县\",\"v\":\"130534\"},{\"l\":\"临西县\",\"v\":\"130535\"},{\"l\":\"河北邢台经济开发区\",\"v\":\"130571\"},{\"l\":\"南宫市\",\"v\":\"130581\"},{\"l\":\"沙河市\",\"v\":\"130582\"}],\"l\":\"邢台市\",\"v\":\"130500\"},{\"c\":[{\"l\":\"竞秀区\",\"v\":\"130602\"},{\"l\":\"莲池区\",\"v\":\"130606\"},{\"l\":\"满城区\",\"v\":\"130607\"},{\"l\":\"清苑区\",\"v\":\"130608\"},{\"l\":\"徐水区\",\"v\":\"130609\"},{\"l\":\"涞水县\",\"v\":\"130623\"},{\"l\":\"阜平县\",\"v\":\"130624\"},{\"l\":\"定兴县\",\"v\":\"130626\"},{\"l\":\"唐县\",\"v\":\"130627\"},{\"l\":\"高阳县\",\"v\":\"130628\"},{\"l\":\"容城县\",\"v\":\"130629\"},{\"l\":\"涞源县\",\"v\":\"130630\"},{\"l\":\"望都县\",\"v\":\"130631\"},{\"l\":\"安新县\",\"v\":\"130632\"},{\"l\":\"易县\",\"v\":\"130633\"},{\"l\":\"曲阳县\",\"v\":\"130634\"},{\"l\":\"蠡县\",\"v\":\"130635\"},{\"l\":\"顺平县\",\"v\":\"130636\"},{\"l\":\"博野县\",\"v\":\"130637\"},{\"l\":\"雄县\",\"v\":\"130638\"},{\"l\":\"保定高新技术产业开发区\",\"v\":\"130671\"},{\"l\":\"保定白沟新城\",\"v\":\"130672\"},{\"l\":\"涿州市\",\"v\":\"130681\"},{\"l\":\"定州市\",\"v\":\"130682\"},{\"l\":\"安国市\",\"v\":\"130683\"},{\"l\":\"高碑店市\",\"v\":\"130684\"}],\"l\":\"保定市\",\"v\":\"130600\"},{\"c\":[{\"l\":\"桥东区\",\"v\":\"130702\"},{\"l\":\"桥西区\",\"v\":\"130703\"},{\"l\":\"宣化区\",\"v\":\"130705\"},{\"l\":\"下花园区\",\"v\":\"130706\"},{\"l\":\"万全区\",\"v\":\"130708\"},{\"l\":\"崇礼区\",\"v\":\"130709\"},{\"l\":\"张北县\",\"v\":\"130722\"},{\"l\":\"康保县\",\"v\":\"130723\"},{\"l\":\"沽源县\",\"v\":\"130724\"},{\"l\":\"尚义县\",\"v\":\"130725\"},{\"l\":\"蔚县\",\"v\":\"130726\"},{\"l\":\"阳原县\",\"v\":\"130727\"},{\"l\":\"怀安县\",\"v\":\"130728\"},{\"l\":\"怀来县\",\"v\":\"130730\"},{\"l\":\"涿鹿县\",\"v\":\"130731\"},{\"l\":\"赤城县\",\"v\":\"130732\"},{\"l\":\"张家口经济开发区\",\"v\":\"130771\"},{\"l\":\"张家口市察北管理区\",\"v\":\"130772\"},{\"l\":\"张家口市塞北管理区\",\"v\":\"130773\"}],\"l\":\"张家口市\",\"v\":\"130700\"},{\"c\":[{\"l\":\"双桥区\",\"v\":\"130802\"},{\"l\":\"双滦区\",\"v\":\"130803\"},{\"l\":\"鹰手营子矿区\",\"v\":\"130804\"},{\"l\":\"承德县\",\"v\":\"130821\"},{\"l\":\"兴隆县\",\"v\":\"130822\"},{\"l\":\"滦平县\",\"v\":\"130824\"},{\"l\":\"隆化县\",\"v\":\"130825\"},{\"l\":\"丰宁满族自治县\",\"v\":\"130826\"},{\"l\":\"宽城满族自治县\",\"v\":\"130827\"},{\"l\":\"围场满族蒙古族自治县\",\"v\":\"130828\"},{\"l\":\"承德高新技术产业开发区\",\"v\":\"130871\"},{\"l\":\"平泉市\",\"v\":\"130881\"}],\"l\":\"承德市\",\"v\":\"130800\"},{\"c\":[{\"l\":\"新华区\",\"v\":\"130902\"},{\"l\":\"运河区\",\"v\":\"130903\"},{\"l\":\"沧县\",\"v\":\"130921\"},{\"l\":\"青县\",\"v\":\"130922\"},{\"l\":\"东光县\",\"v\":\"130923\"},{\"l\":\"海兴县\",\"v\":\"130924\"},{\"l\":\"盐山县\",\"v\":\"130925\"},{\"l\":\"肃宁县\",\"v\":\"130926\"},{\"l\":\"南皮县\",\"v\":\"130927\"},{\"l\":\"吴桥县\",\"v\":\"130928\"},{\"l\":\"献县\",\"v\":\"130929\"},{\"l\":\"孟村回族自治县\",\"v\":\"130930\"},{\"l\":\"河北沧州经济开发区\",\"v\":\"130971\"},{\"l\":\"沧州高新技术产业开发区\",\"v\":\"130972\"},{\"l\":\"沧州渤海新区\",\"v\":\"130973\"},{\"l\":\"泊头市\",\"v\":\"130981\"},{\"l\":\"任丘市\",\"v\":\"130982\"},{\"l\":\"黄骅市\",\"v\":\"130983\"},{\"l\":\"河间市\",\"v\":\"130984\"}],\"l\":\"沧州市\",\"v\":\"130900\"},{\"c\":[{\"l\":\"安次区\",\"v\":\"131002\"},{\"l\":\"广阳区\",\"v\":\"131003\"},{\"l\":\"固安县\",\"v\":\"131022\"},{\"l\":\"永清县\",\"v\":\"131023\"},{\"l\":\"香河县\",\"v\":\"131024\"},{\"l\":\"大城县\",\"v\":\"131025\"},{\"l\":\"文安县\",\"v\":\"131026\"},{\"l\":\"大厂回族自治县\",\"v\":\"131028\"},{\"l\":\"廊坊经济技术开发区\",\"v\":\"131071\"},{\"l\":\"霸州市\",\"v\":\"131081\"},{\"l\":\"三河市\",\"v\":\"131082\"}],\"l\":\"廊坊市\",\"v\":\"131000\"},{\"c\":[{\"l\":\"桃城区\",\"v\":\"131102\"},{\"l\":\"冀州区\",\"v\":\"131103\"},{\"l\":\"枣强县\",\"v\":\"131121\"},{\"l\":\"武邑县\",\"v\":\"131122\"},{\"l\":\"武强县\",\"v\":\"131123\"},{\"l\":\"饶阳县\",\"v\":\"131124\"},{\"l\":\"安平县\",\"v\":\"131125\"},{\"l\":\"故城县\",\"v\":\"131126\"},{\"l\":\"景县\",\"v\":\"131127\"},{\"l\":\"阜城县\",\"v\":\"131128\"},{\"l\":\"河北衡水高新技术产业开发区\",\"v\":\"131171\"},{\"l\":\"衡水滨湖新区\",\"v\":\"131172\"},{\"l\":\"深州市\",\"v\":\"131182\"}],\"l\":\"衡水市\",\"v\":\"131100\"}],\"l\":\"河北省\",\"v\":\"130000\"},{\"c\":[{\"c\":[{\"l\":\"小店区\",\"v\":\"140105\"},{\"l\":\"迎泽区\",\"v\":\"140106\"},{\"l\":\"杏花岭区\",\"v\":\"140107\"},{\"l\":\"尖草坪区\",\"v\":\"140108\"},{\"l\":\"万柏林区\",\"v\":\"140109\"},{\"l\":\"晋源区\",\"v\":\"140110\"},{\"l\":\"清徐县\",\"v\":\"140121\"},{\"l\":\"阳曲县\",\"v\":\"140122\"},{\"l\":\"娄烦县\",\"v\":\"140123\"},{\"l\":\"山西转型综合改革示范区\",\"v\":\"140171\"},{\"l\":\"古交市\",\"v\":\"140181\"}],\"l\":\"太原市\",\"v\":\"140100\"},{\"c\":[{\"l\":\"新荣区\",\"v\":\"140212\"},{\"l\":\"平城区\",\"v\":\"140213\"},{\"l\":\"云冈区\",\"v\":\"140214\"},{\"l\":\"云州区\",\"v\":\"140215\"},{\"l\":\"阳高县\",\"v\":\"140221\"},{\"l\":\"天镇县\",\"v\":\"140222\"},{\"l\":\"广灵县\",\"v\":\"140223\"},{\"l\":\"灵丘县\",\"v\":\"140224\"},{\"l\":\"浑源县\",\"v\":\"140225\"},{\"l\":\"左云县\",\"v\":\"140226\"},{\"l\":\"山西大同经济开发区\",\"v\":\"140271\"}],\"l\":\"大同市\",\"v\":\"140200\"},{\"c\":[{\"l\":\"城区\",\"v\":\"140302\"},{\"l\":\"矿区\",\"v\":\"140303\"},{\"l\":\"郊区\",\"v\":\"140311\"},{\"l\":\"平定县\",\"v\":\"140321\"},{\"l\":\"盂县\",\"v\":\"140322\"}],\"l\":\"阳泉市\",\"v\":\"140300\"},{\"c\":[{\"l\":\"潞州区\",\"v\":\"140403\"},{\"l\":\"上党区\",\"v\":\"140404\"},{\"l\":\"屯留区\",\"v\":\"140405\"},{\"l\":\"潞城区\",\"v\":\"140406\"},{\"l\":\"襄垣县\",\"v\":\"140423\"},{\"l\":\"平顺县\",\"v\":\"140425\"},{\"l\":\"黎城县\",\"v\":\"140426\"},{\"l\":\"壶关县\",\"v\":\"140427\"},{\"l\":\"长子县\",\"v\":\"140428\"},{\"l\":\"武乡县\",\"v\":\"140429\"},{\"l\":\"沁县\",\"v\":\"140430\"},{\"l\":\"沁源县\",\"v\":\"140431\"},{\"l\":\"山西长治高新技术产业园区\",\"v\":\"140471\"}],\"l\":\"长治市\",\"v\":\"140400\"},{\"c\":[{\"l\":\"城区\",\"v\":\"140502\"},{\"l\":\"沁水县\",\"v\":\"140521\"},{\"l\":\"阳城县\",\"v\":\"140522\"},{\"l\":\"陵川县\",\"v\":\"140524\"},{\"l\":\"泽州县\",\"v\":\"140525\"},{\"l\":\"高平市\",\"v\":\"140581\"}],\"l\":\"晋城市\",\"v\":\"140500\"},{\"c\":[{\"l\":\"朔城区\",\"v\":\"140602\"},{\"l\":\"平鲁区\",\"v\":\"140603\"},{\"l\":\"山阴县\",\"v\":\"140621\"},{\"l\":\"应县\",\"v\":\"140622\"},{\"l\":\"右玉县\",\"v\":\"140623\"},{\"l\":\"山西朔州经济开发区\",\"v\":\"140671\"},{\"l\":\"怀仁市\",\"v\":\"140681\"}],\"l\":\"朔州市\",\"v\":\"140600\"},{\"c\":[{\"l\":\"榆次区\",\"v\":\"140702\"},{\"l\":\"太谷区\",\"v\":\"140703\"},{\"l\":\"榆社县\",\"v\":\"140721\"},{\"l\":\"左权县\",\"v\":\"140722\"},{\"l\":\"和顺县\",\"v\":\"140723\"},{\"l\":\"昔阳县\",\"v\":\"140724\"},{\"l\":\"寿阳县\",\"v\":\"140725\"},{\"l\":\"祁县\",\"v\":\"140727\"},{\"l\":\"平遥县\",\"v\":\"140728\"},{\"l\":\"灵石县\",\"v\":\"140729\"},{\"l\":\"介休市\",\"v\":\"140781\"}],\"l\":\"晋中市\",\"v\":\"140700\"},{\"c\":[{\"l\":\"盐湖区\",\"v\":\"140802\"},{\"l\":\"临猗县\",\"v\":\"140821\"},{\"l\":\"万荣县\",\"v\":\"140822\"},{\"l\":\"闻喜县\",\"v\":\"140823\"},{\"l\":\"稷山县\",\"v\":\"140824\"},{\"l\":\"新绛县\",\"v\":\"140825\"},{\"l\":\"绛县\",\"v\":\"140826\"},{\"l\":\"垣曲县\",\"v\":\"140827\"},{\"l\":\"夏县\",\"v\":\"140828\"},{\"l\":\"平陆县\",\"v\":\"140829\"},{\"l\":\"芮城县\",\"v\":\"140830\"},{\"l\":\"永济市\",\"v\":\"140881\"},{\"l\":\"河津市\",\"v\":\"140882\"}],\"l\":\"运城市\",\"v\":\"140800\"},{\"c\":[{\"l\":\"忻府区\",\"v\":\"140902\"},{\"l\":\"定襄县\",\"v\":\"140921\"},{\"l\":\"五台县\",\"v\":\"140922\"},{\"l\":\"代县\",\"v\":\"140923\"},{\"l\":\"繁峙县\",\"v\":\"140924\"},{\"l\":\"宁武县\",\"v\":\"140925\"},{\"l\":\"静乐县\",\"v\":\"140926\"},{\"l\":\"神池县\",\"v\":\"140927\"},{\"l\":\"五寨县\",\"v\":\"140928\"},{\"l\":\"岢岚县\",\"v\":\"140929\"},{\"l\":\"河曲县\",\"v\":\"140930\"},{\"l\":\"保德县\",\"v\":\"140931\"},{\"l\":\"偏关县\",\"v\":\"140932\"},{\"l\":\"五台山风景名胜区\",\"v\":\"140971\"},{\"l\":\"原平市\",\"v\":\"140981\"}],\"l\":\"忻州市\",\"v\":\"140900\"},{\"c\":[{\"l\":\"尧都区\",\"v\":\"141002\"},{\"l\":\"曲沃县\",\"v\":\"141021\"},{\"l\":\"翼城县\",\"v\":\"141022\"},{\"l\":\"襄汾县\",\"v\":\"141023\"},{\"l\":\"洪洞县\",\"v\":\"141024\"},{\"l\":\"古县\",\"v\":\"141025\"},{\"l\":\"安泽县\",\"v\":\"141026\"},{\"l\":\"浮山县\",\"v\":\"141027\"},{\"l\":\"吉县\",\"v\":\"141028\"},{\"l\":\"乡宁县\",\"v\":\"141029\"},{\"l\":\"大宁县\",\"v\":\"141030\"},{\"l\":\"隰县\",\"v\":\"141031\"},{\"l\":\"永和县\",\"v\":\"141032\"},{\"l\":\"蒲县\",\"v\":\"141033\"},{\"l\":\"汾西县\",\"v\":\"141034\"},{\"l\":\"侯马市\",\"v\":\"141081\"},{\"l\":\"霍州市\",\"v\":\"141082\"}],\"l\":\"临汾市\",\"v\":\"141000\"},{\"c\":[{\"l\":\"离石区\",\"v\":\"141102\"},{\"l\":\"文水县\",\"v\":\"141121\"},{\"l\":\"交城县\",\"v\":\"141122\"},{\"l\":\"兴县\",\"v\":\"141123\"},{\"l\":\"临县\",\"v\":\"141124\"},{\"l\":\"柳林县\",\"v\":\"141125\"},{\"l\":\"石楼县\",\"v\":\"141126\"},{\"l\":\"岚县\",\"v\":\"141127\"},{\"l\":\"方山县\",\"v\":\"141128\"},{\"l\":\"中阳县\",\"v\":\"141129\"},{\"l\":\"交口县\",\"v\":\"141130\"},{\"l\":\"孝义市\",\"v\":\"141181\"},{\"l\":\"汾阳市\",\"v\":\"141182\"}],\"l\":\"吕梁市\",\"v\":\"141100\"}],\"l\":\"山西省\",\"v\":\"140000\"},{\"c\":[{\"c\":[{\"l\":\"新城区\",\"v\":\"150102\"},{\"l\":\"回民区\",\"v\":\"150103\"},{\"l\":\"玉泉区\",\"v\":\"150104\"},{\"l\":\"赛罕区\",\"v\":\"150105\"},{\"l\":\"土默特左旗\",\"v\":\"150121\"},{\"l\":\"托克托县\",\"v\":\"150122\"},{\"l\":\"和林格尔县\",\"v\":\"150123\"},{\"l\":\"清水河县\",\"v\":\"150124\"},{\"l\":\"武川县\",\"v\":\"150125\"},{\"l\":\"呼和浩特经济技术开发区\",\"v\":\"150172\"}],\"l\":\"呼和浩特市\",\"v\":\"150100\"},{\"c\":[{\"l\":\"东河区\",\"v\":\"150202\"},{\"l\":\"昆都仑区\",\"v\":\"150203\"},{\"l\":\"青山区\",\"v\":\"150204\"},{\"l\":\"石拐区\",\"v\":\"150205\"},{\"l\":\"白云鄂博矿区\",\"v\":\"150206\"},{\"l\":\"九原区\",\"v\":\"150207\"},{\"l\":\"土默特右旗\",\"v\":\"150221\"},{\"l\":\"固阳县\",\"v\":\"150222\"},{\"l\":\"达尔罕茂明安联合旗\",\"v\":\"150223\"},{\"l\":\"包头稀土高新技术产业开发区\",\"v\":\"150271\"}],\"l\":\"包头市\",\"v\":\"150200\"},{\"c\":[{\"l\":\"海勃湾区\",\"v\":\"150302\"},{\"l\":\"海南区\",\"v\":\"150303\"},{\"l\":\"乌达区\",\"v\":\"150304\"}],\"l\":\"乌海市\",\"v\":\"150300\"},{\"c\":[{\"l\":\"红山区\",\"v\":\"150402\"},{\"l\":\"元宝山区\",\"v\":\"150403\"},{\"l\":\"松山区\",\"v\":\"150404\"},{\"l\":\"阿鲁科尔沁旗\",\"v\":\"150421\"},{\"l\":\"巴林左旗\",\"v\":\"150422\"},{\"l\":\"巴林右旗\",\"v\":\"150423\"},{\"l\":\"林西县\",\"v\":\"150424\"},{\"l\":\"克什克腾旗\",\"v\":\"150425\"},{\"l\":\"翁牛特旗\",\"v\":\"150426\"},{\"l\":\"喀喇沁旗\",\"v\":\"150428\"},{\"l\":\"宁城县\",\"v\":\"150429\"},{\"l\":\"敖汉旗\",\"v\":\"150430\"}],\"l\":\"赤峰市\",\"v\":\"150400\"},{\"c\":[{\"l\":\"科尔沁区\",\"v\":\"150502\"},{\"l\":\"科尔沁左翼中旗\",\"v\":\"150521\"},{\"l\":\"科尔沁左翼后旗\",\"v\":\"150522\"},{\"l\":\"开鲁县\",\"v\":\"150523\"},{\"l\":\"库伦旗\",\"v\":\"150524\"},{\"l\":\"奈曼旗\",\"v\":\"150525\"},{\"l\":\"扎鲁特旗\",\"v\":\"150526\"},{\"l\":\"通辽经济技术开发区\",\"v\":\"150571\"},{\"l\":\"霍林郭勒市\",\"v\":\"150581\"}],\"l\":\"通辽市\",\"v\":\"150500\"},{\"c\":[{\"l\":\"东胜区\",\"v\":\"150602\"},{\"l\":\"康巴什区\",\"v\":\"150603\"},{\"l\":\"达拉特旗\",\"v\":\"150621\"},{\"l\":\"准格尔旗\",\"v\":\"150622\"},{\"l\":\"鄂托克前旗\",\"v\":\"150623\"},{\"l\":\"鄂托克旗\",\"v\":\"150624\"},{\"l\":\"杭锦旗\",\"v\":\"150625\"},{\"l\":\"乌审旗\",\"v\":\"150626\"},{\"l\":\"伊金霍洛旗\",\"v\":\"150627\"}],\"l\":\"鄂尔多斯市\",\"v\":\"150600\"},{\"c\":[{\"l\":\"海拉尔区\",\"v\":\"150702\"},{\"l\":\"扎赉诺尔区\",\"v\":\"150703\"},{\"l\":\"阿荣旗\",\"v\":\"150721\"},{\"l\":\"莫力达瓦达斡尔族自治旗\",\"v\":\"150722\"},{\"l\":\"鄂伦春自治旗\",\"v\":\"150723\"},{\"l\":\"鄂温克族自治旗\",\"v\":\"150724\"},{\"l\":\"陈巴尔虎旗\",\"v\":\"150725\"},{\"l\":\"新巴尔虎左旗\",\"v\":\"150726\"},{\"l\":\"新巴尔虎右旗\",\"v\":\"150727\"},{\"l\":\"满洲里市\",\"v\":\"150781\"},{\"l\":\"牙克石市\",\"v\":\"150782\"},{\"l\":\"扎兰屯市\",\"v\":\"150783\"},{\"l\":\"额尔古纳市\",\"v\":\"150784\"},{\"l\":\"根河市\",\"v\":\"150785\"}],\"l\":\"呼伦贝尔市\",\"v\":\"150700\"},{\"c\":[{\"l\":\"临河区\",\"v\":\"150802\"},{\"l\":\"五原县\",\"v\":\"150821\"},{\"l\":\"磴口县\",\"v\":\"150822\"},{\"l\":\"乌拉特前旗\",\"v\":\"150823\"},{\"l\":\"乌拉特中旗\",\"v\":\"150824\"},{\"l\":\"乌拉特后旗\",\"v\":\"150825\"},{\"l\":\"杭锦后旗\",\"v\":\"150826\"}],\"l\":\"巴彦淖尔市\",\"v\":\"150800\"},{\"c\":[{\"l\":\"集宁区\",\"v\":\"150902\"},{\"l\":\"卓资县\",\"v\":\"150921\"},{\"l\":\"化德县\",\"v\":\"150922\"},{\"l\":\"商都县\",\"v\":\"150923\"},{\"l\":\"兴和县\",\"v\":\"150924\"},{\"l\":\"凉城县\",\"v\":\"150925\"},{\"l\":\"察哈尔右翼前旗\",\"v\":\"150926\"},{\"l\":\"察哈尔右翼中旗\",\"v\":\"150927\"},{\"l\":\"察哈尔右翼后旗\",\"v\":\"150928\"},{\"l\":\"四子王旗\",\"v\":\"150929\"},{\"l\":\"丰镇市\",\"v\":\"150981\"}],\"l\":\"乌兰察布市\",\"v\":\"150900\"},{\"c\":[{\"l\":\"乌兰浩特市\",\"v\":\"152201\"},{\"l\":\"阿尔山市\",\"v\":\"152202\"},{\"l\":\"科尔沁右翼前旗\",\"v\":\"152221\"},{\"l\":\"科尔沁右翼中旗\",\"v\":\"152222\"},{\"l\":\"扎赉特旗\",\"v\":\"152223\"},{\"l\":\"突泉县\",\"v\":\"152224\"}],\"l\":\"兴安盟\",\"v\":\"152200\"},{\"c\":[{\"l\":\"二连浩特市\",\"v\":\"152501\"},{\"l\":\"锡林浩特市\",\"v\":\"152502\"},{\"l\":\"阿巴嘎旗\",\"v\":\"152522\"},{\"l\":\"苏尼特左旗\",\"v\":\"152523\"},{\"l\":\"苏尼特右旗\",\"v\":\"152524\"},{\"l\":\"东乌珠穆沁旗\",\"v\":\"152525\"},{\"l\":\"西乌珠穆沁旗\",\"v\":\"152526\"},{\"l\":\"太仆寺旗\",\"v\":\"152527\"},{\"l\":\"镶黄旗\",\"v\":\"152528\"},{\"l\":\"正镶白旗\",\"v\":\"152529\"},{\"l\":\"正蓝旗\",\"v\":\"152530\"},{\"l\":\"多伦县\",\"v\":\"152531\"},{\"l\":\"乌拉盖管委会\",\"v\":\"152571\"}],\"l\":\"锡林郭勒盟\",\"v\":\"152500\"},{\"c\":[{\"l\":\"阿拉善左旗\",\"v\":\"152921\"},{\"l\":\"阿拉善右旗\",\"v\":\"152922\"},{\"l\":\"额济纳旗\",\"v\":\"152923\"},{\"l\":\"内蒙古阿拉善经济开发区\",\"v\":\"152971\"}],\"l\":\"阿拉善盟\",\"v\":\"152900\"}],\"l\":\"内蒙古自治区\",\"v\":\"150000\"},{\"c\":[{\"c\":[{\"l\":\"和平区\",\"v\":\"210102\"},{\"l\":\"沈河区\",\"v\":\"210103\"},{\"l\":\"大东区\",\"v\":\"210104\"},{\"l\":\"皇姑区\",\"v\":\"210105\"},{\"l\":\"铁西区\",\"v\":\"210106\"},{\"l\":\"苏家屯区\",\"v\":\"210111\"},{\"l\":\"浑南区\",\"v\":\"210112\"},{\"l\":\"沈北新区\",\"v\":\"210113\"},{\"l\":\"于洪区\",\"v\":\"210114\"},{\"l\":\"辽中区\",\"v\":\"210115\"},{\"l\":\"康平县\",\"v\":\"210123\"},{\"l\":\"法库县\",\"v\":\"210124\"},{\"l\":\"新民市\",\"v\":\"210181\"}],\"l\":\"沈阳市\",\"v\":\"210100\"},{\"c\":[{\"l\":\"中山区\",\"v\":\"210202\"},{\"l\":\"西岗区\",\"v\":\"210203\"},{\"l\":\"沙河口区\",\"v\":\"210204\"},{\"l\":\"甘井子区\",\"v\":\"210211\"},{\"l\":\"旅顺口区\",\"v\":\"210212\"},{\"l\":\"金州区\",\"v\":\"210213\"},{\"l\":\"普兰店区\",\"v\":\"210214\"},{\"l\":\"长海县\",\"v\":\"210224\"},{\"l\":\"瓦房店市\",\"v\":\"210281\"},{\"l\":\"庄河市\",\"v\":\"210283\"}],\"l\":\"大连市\",\"v\":\"210200\"},{\"c\":[{\"l\":\"铁东区\",\"v\":\"210302\"},{\"l\":\"铁西区\",\"v\":\"210303\"},{\"l\":\"立山区\",\"v\":\"210304\"},{\"l\":\"千山区\",\"v\":\"210311\"},{\"l\":\"台安县\",\"v\":\"210321\"},{\"l\":\"岫岩满族自治县\",\"v\":\"210323\"},{\"l\":\"海城市\",\"v\":\"210381\"}],\"l\":\"鞍山市\",\"v\":\"210300\"},{\"c\":[{\"l\":\"新抚区\",\"v\":\"210402\"},{\"l\":\"东洲区\",\"v\":\"210403\"},{\"l\":\"望花区\",\"v\":\"210404\"},{\"l\":\"顺城区\",\"v\":\"210411\"},{\"l\":\"抚顺县\",\"v\":\"210421\"},{\"l\":\"新宾满族自治县\",\"v\":\"210422\"},{\"l\":\"清原满族自治县\",\"v\":\"210423\"}],\"l\":\"抚顺市\",\"v\":\"210400\"},{\"c\":[{\"l\":\"平山区\",\"v\":\"210502\"},{\"l\":\"溪湖区\",\"v\":\"210503\"},{\"l\":\"明山区\",\"v\":\"210504\"},{\"l\":\"南芬区\",\"v\":\"210505\"},{\"l\":\"本溪满族自治县\",\"v\":\"210521\"},{\"l\":\"桓仁满族自治县\",\"v\":\"210522\"}],\"l\":\"本溪市\",\"v\":\"210500\"},{\"c\":[{\"l\":\"元宝区\",\"v\":\"210602\"},{\"l\":\"振兴区\",\"v\":\"210603\"},{\"l\":\"振安区\",\"v\":\"210604\"},{\"l\":\"宽甸满族自治县\",\"v\":\"210624\"},{\"l\":\"东港市\",\"v\":\"210681\"},{\"l\":\"凤城市\",\"v\":\"210682\"}],\"l\":\"丹东市\",\"v\":\"210600\"},{\"c\":[{\"l\":\"古塔区\",\"v\":\"210702\"},{\"l\":\"凌河区\",\"v\":\"210703\"},{\"l\":\"太和区\",\"v\":\"210711\"},{\"l\":\"黑山县\",\"v\":\"210726\"},{\"l\":\"义县\",\"v\":\"210727\"},{\"l\":\"凌海市\",\"v\":\"210781\"},{\"l\":\"北镇市\",\"v\":\"210782\"}],\"l\":\"锦州市\",\"v\":\"210700\"},{\"c\":[{\"l\":\"站前区\",\"v\":\"210802\"},{\"l\":\"西市区\",\"v\":\"210803\"},{\"l\":\"鲅鱼圈区\",\"v\":\"210804\"},{\"l\":\"老边区\",\"v\":\"210811\"},{\"l\":\"盖州市\",\"v\":\"210881\"},{\"l\":\"大石桥市\",\"v\":\"210882\"}],\"l\":\"营口市\",\"v\":\"210800\"},{\"c\":[{\"l\":\"海州区\",\"v\":\"210902\"},{\"l\":\"新邱区\",\"v\":\"210903\"},{\"l\":\"太平区\",\"v\":\"210904\"},{\"l\":\"清河门区\",\"v\":\"210905\"},{\"l\":\"细河区\",\"v\":\"210911\"},{\"l\":\"阜新蒙古族自治县\",\"v\":\"210921\"},{\"l\":\"彰武县\",\"v\":\"210922\"}],\"l\":\"阜新市\",\"v\":\"210900\"},{\"c\":[{\"l\":\"白塔区\",\"v\":\"211002\"},{\"l\":\"文圣区\",\"v\":\"211003\"},{\"l\":\"宏伟区\",\"v\":\"211004\"},{\"l\":\"弓长岭区\",\"v\":\"211005\"},{\"l\":\"太子河区\",\"v\":\"211011\"},{\"l\":\"辽阳县\",\"v\":\"211021\"},{\"l\":\"灯塔市\",\"v\":\"211081\"}],\"l\":\"辽阳市\",\"v\":\"211000\"},{\"c\":[{\"l\":\"双台子区\",\"v\":\"211102\"},{\"l\":\"兴隆台区\",\"v\":\"211103\"},{\"l\":\"大洼区\",\"v\":\"211104\"},{\"l\":\"盘山县\",\"v\":\"211122\"}],\"l\":\"盘锦市\",\"v\":\"211100\"},{\"c\":[{\"l\":\"银州区\",\"v\":\"211202\"},{\"l\":\"清河区\",\"v\":\"211204\"},{\"l\":\"铁岭县\",\"v\":\"211221\"},{\"l\":\"西丰县\",\"v\":\"211223\"},{\"l\":\"昌图县\",\"v\":\"211224\"},{\"l\":\"调兵山市\",\"v\":\"211281\"},{\"l\":\"开原市\",\"v\":\"211282\"}],\"l\":\"铁岭市\",\"v\":\"211200\"},{\"c\":[{\"l\":\"双塔区\",\"v\":\"211302\"},{\"l\":\"龙城区\",\"v\":\"211303\"},{\"l\":\"朝阳县\",\"v\":\"211321\"},{\"l\":\"建平县\",\"v\":\"211322\"},{\"l\":\"喀喇沁左翼蒙古族自治县\",\"v\":\"211324\"},{\"l\":\"北票市\",\"v\":\"211381\"},{\"l\":\"凌源市\",\"v\":\"211382\"}],\"l\":\"朝阳市\",\"v\":\"211300\"},{\"c\":[{\"l\":\"连山区\",\"v\":\"211402\"},{\"l\":\"龙港区\",\"v\":\"211403\"},{\"l\":\"南票区\",\"v\":\"211404\"},{\"l\":\"绥中县\",\"v\":\"211421\"},{\"l\":\"建昌县\",\"v\":\"211422\"},{\"l\":\"兴城市\",\"v\":\"211481\"}],\"l\":\"葫芦岛市\",\"v\":\"211400\"}],\"l\":\"辽宁省\",\"v\":\"210000\"},{\"c\":[{\"c\":[{\"l\":\"南关区\",\"v\":\"220102\"},{\"l\":\"宽城区\",\"v\":\"220103\"},{\"l\":\"朝阳区\",\"v\":\"220104\"},{\"l\":\"二道区\",\"v\":\"220105\"},{\"l\":\"绿园区\",\"v\":\"220106\"},{\"l\":\"双阳区\",\"v\":\"220112\"},{\"l\":\"九台区\",\"v\":\"220113\"},{\"l\":\"农安县\",\"v\":\"220122\"},{\"l\":\"长春经济技术开发区\",\"v\":\"220171\"},{\"l\":\"长春净月高新技术产业开发区\",\"v\":\"220172\"},{\"l\":\"长春高新技术产业开发区\",\"v\":\"220173\"},{\"l\":\"长春汽车经济技术开发区\",\"v\":\"220174\"},{\"l\":\"榆树市\",\"v\":\"220182\"},{\"l\":\"德惠市\",\"v\":\"220183\"},{\"l\":\"公主岭市\",\"v\":\"220184\"}],\"l\":\"长春市\",\"v\":\"220100\"},{\"c\":[{\"l\":\"昌邑区\",\"v\":\"220202\"},{\"l\":\"龙潭区\",\"v\":\"220203\"},{\"l\":\"船营区\",\"v\":\"220204\"},{\"l\":\"丰满区\",\"v\":\"220211\"},{\"l\":\"永吉县\",\"v\":\"220221\"},{\"l\":\"吉林经济开发区\",\"v\":\"220271\"},{\"l\":\"吉林高新技术产业开发区\",\"v\":\"220272\"},{\"l\":\"吉林中国新加坡食品区\",\"v\":\"220273\"},{\"l\":\"蛟河市\",\"v\":\"220281\"},{\"l\":\"桦甸市\",\"v\":\"220282\"},{\"l\":\"舒兰市\",\"v\":\"220283\"},{\"l\":\"磐石市\",\"v\":\"220284\"}],\"l\":\"吉林市\",\"v\":\"220200\"},{\"c\":[{\"l\":\"铁西区\",\"v\":\"220302\"},{\"l\":\"铁东区\",\"v\":\"220303\"},{\"l\":\"梨树县\",\"v\":\"220322\"},{\"l\":\"伊通满族自治县\",\"v\":\"220323\"},{\"l\":\"双辽市\",\"v\":\"220382\"}],\"l\":\"四平市\",\"v\":\"220300\"},{\"c\":[{\"l\":\"龙山区\",\"v\":\"220402\"},{\"l\":\"西安区\",\"v\":\"220403\"},{\"l\":\"东丰县\",\"v\":\"220421\"},{\"l\":\"东辽县\",\"v\":\"220422\"}],\"l\":\"辽源市\",\"v\":\"220400\"},{\"c\":[{\"l\":\"东昌区\",\"v\":\"220502\"},{\"l\":\"二道江区\",\"v\":\"220503\"},{\"l\":\"通化县\",\"v\":\"220521\"},{\"l\":\"辉南县\",\"v\":\"220523\"},{\"l\":\"柳河县\",\"v\":\"220524\"},{\"l\":\"梅河口市\",\"v\":\"220581\"},{\"l\":\"集安市\",\"v\":\"220582\"}],\"l\":\"通化市\",\"v\":\"220500\"},{\"c\":[{\"l\":\"浑江区\",\"v\":\"220602\"},{\"l\":\"江源区\",\"v\":\"220605\"},{\"l\":\"抚松县\",\"v\":\"220621\"},{\"l\":\"靖宇县\",\"v\":\"220622\"},{\"l\":\"长白朝鲜族自治县\",\"v\":\"220623\"},{\"l\":\"临江市\",\"v\":\"220681\"}],\"l\":\"白山市\",\"v\":\"220600\"},{\"c\":[{\"l\":\"宁江区\",\"v\":\"220702\"},{\"l\":\"前郭尔罗斯蒙古族自治县\",\"v\":\"220721\"},{\"l\":\"长岭县\",\"v\":\"220722\"},{\"l\":\"乾安县\",\"v\":\"220723\"},{\"l\":\"吉林松原经济开发区\",\"v\":\"220771\"},{\"l\":\"扶余市\",\"v\":\"220781\"}],\"l\":\"松原市\",\"v\":\"220700\"},{\"c\":[{\"l\":\"洮北区\",\"v\":\"220802\"},{\"l\":\"镇赉县\",\"v\":\"220821\"},{\"l\":\"通榆县\",\"v\":\"220822\"},{\"l\":\"吉林白城经济开发区\",\"v\":\"220871\"},{\"l\":\"洮南市\",\"v\":\"220881\"},{\"l\":\"大安市\",\"v\":\"220882\"}],\"l\":\"白城市\",\"v\":\"220800\"},{\"c\":[{\"l\":\"延吉市\",\"v\":\"222401\"},{\"l\":\"图们市\",\"v\":\"222402\"},{\"l\":\"敦化市\",\"v\":\"222403\"},{\"l\":\"珲春市\",\"v\":\"222404\"},{\"l\":\"龙井市\",\"v\":\"222405\"},{\"l\":\"和龙市\",\"v\":\"222406\"},{\"l\":\"汪清县\",\"v\":\"222424\"},{\"l\":\"安图县\",\"v\":\"222426\"}],\"l\":\"延边朝鲜族自治州\",\"v\":\"222400\"}],\"l\":\"吉林省\",\"v\":\"220000\"},{\"c\":[{\"c\":[{\"l\":\"道里区\",\"v\":\"230102\"},{\"l\":\"南岗区\",\"v\":\"230103\"},{\"l\":\"道外区\",\"v\":\"230104\"},{\"l\":\"平房区\",\"v\":\"230108\"},{\"l\":\"松北区\",\"v\":\"230109\"},{\"l\":\"香坊区\",\"v\":\"230110\"},{\"l\":\"呼兰区\",\"v\":\"230111\"},{\"l\":\"阿城区\",\"v\":\"230112\"},{\"l\":\"双城区\",\"v\":\"230113\"},{\"l\":\"依兰县\",\"v\":\"230123\"},{\"l\":\"方正县\",\"v\":\"230124\"},{\"l\":\"宾县\",\"v\":\"230125\"},{\"l\":\"巴彦县\",\"v\":\"230126\"},{\"l\":\"木兰县\",\"v\":\"230127\"},{\"l\":\"通河县\",\"v\":\"230128\"},{\"l\":\"延寿县\",\"v\":\"230129\"},{\"l\":\"尚志市\",\"v\":\"230183\"},{\"l\":\"五常市\",\"v\":\"230184\"}],\"l\":\"哈尔滨市\",\"v\":\"230100\"},{\"c\":[{\"l\":\"龙沙区\",\"v\":\"230202\"},{\"l\":\"建华区\",\"v\":\"230203\"},{\"l\":\"铁锋区\",\"v\":\"230204\"},{\"l\":\"昂昂溪区\",\"v\":\"230205\"},{\"l\":\"富拉尔基区\",\"v\":\"230206\"},{\"l\":\"碾子山区\",\"v\":\"230207\"},{\"l\":\"梅里斯达斡尔族区\",\"v\":\"230208\"},{\"l\":\"龙江县\",\"v\":\"230221\"},{\"l\":\"依安县\",\"v\":\"230223\"},{\"l\":\"泰来县\",\"v\":\"230224\"},{\"l\":\"甘南县\",\"v\":\"230225\"},{\"l\":\"富裕县\",\"v\":\"230227\"},{\"l\":\"克山县\",\"v\":\"230229\"},{\"l\":\"克东县\",\"v\":\"230230\"},{\"l\":\"拜泉县\",\"v\":\"230231\"},{\"l\":\"讷河市\",\"v\":\"230281\"}],\"l\":\"齐齐哈尔市\",\"v\":\"230200\"},{\"c\":[{\"l\":\"鸡冠区\",\"v\":\"230302\"},{\"l\":\"恒山区\",\"v\":\"230303\"},{\"l\":\"滴道区\",\"v\":\"230304\"},{\"l\":\"梨树区\",\"v\":\"230305\"},{\"l\":\"城子河区\",\"v\":\"230306\"},{\"l\":\"麻山区\",\"v\":\"230307\"},{\"l\":\"鸡东县\",\"v\":\"230321\"},{\"l\":\"虎林市\",\"v\":\"230381\"},{\"l\":\"密山市\",\"v\":\"230382\"}],\"l\":\"鸡西市\",\"v\":\"230300\"},{\"c\":[{\"l\":\"向阳区\",\"v\":\"230402\"},{\"l\":\"工农区\",\"v\":\"230403\"},{\"l\":\"南山区\",\"v\":\"230404\"},{\"l\":\"兴安区\",\"v\":\"230405\"},{\"l\":\"东山区\",\"v\":\"230406\"},{\"l\":\"兴山区\",\"v\":\"230407\"},{\"l\":\"萝北县\",\"v\":\"230421\"},{\"l\":\"绥滨县\",\"v\":\"230422\"}],\"l\":\"鹤岗市\",\"v\":\"230400\"},{\"c\":[{\"l\":\"尖山区\",\"v\":\"230502\"},{\"l\":\"岭东区\",\"v\":\"230503\"},{\"l\":\"四方台区\",\"v\":\"230505\"},{\"l\":\"宝山区\",\"v\":\"230506\"},{\"l\":\"集贤县\",\"v\":\"230521\"},{\"l\":\"友谊县\",\"v\":\"230522\"},{\"l\":\"宝清县\",\"v\":\"230523\"},{\"l\":\"饶河县\",\"v\":\"230524\"}],\"l\":\"双鸭山市\",\"v\":\"230500\"},{\"c\":[{\"l\":\"萨尔图区\",\"v\":\"230602\"},{\"l\":\"龙凤区\",\"v\":\"230603\"},{\"l\":\"让胡路区\",\"v\":\"230604\"},{\"l\":\"红岗区\",\"v\":\"230605\"},{\"l\":\"大同区\",\"v\":\"230606\"},{\"l\":\"肇州县\",\"v\":\"230621\"},{\"l\":\"肇源县\",\"v\":\"230622\"},{\"l\":\"林甸县\",\"v\":\"230623\"},{\"l\":\"杜尔伯特蒙古族自治县\",\"v\":\"230624\"},{\"l\":\"大庆高新技术产业开发区\",\"v\":\"230671\"}],\"l\":\"大庆市\",\"v\":\"230600\"},{\"c\":[{\"l\":\"伊美区\",\"v\":\"230717\"},{\"l\":\"乌翠区\",\"v\":\"230718\"},{\"l\":\"友好区\",\"v\":\"230719\"},{\"l\":\"嘉荫县\",\"v\":\"230722\"},{\"l\":\"汤旺县\",\"v\":\"230723\"},{\"l\":\"丰林县\",\"v\":\"230724\"},{\"l\":\"大箐山县\",\"v\":\"230725\"},{\"l\":\"南岔县\",\"v\":\"230726\"},{\"l\":\"金林区\",\"v\":\"230751\"},{\"l\":\"铁力市\",\"v\":\"230781\"}],\"l\":\"伊春市\",\"v\":\"230700\"},{\"c\":[{\"l\":\"向阳区\",\"v\":\"230803\"},{\"l\":\"前进区\",\"v\":\"230804\"},{\"l\":\"东风区\",\"v\":\"230805\"},{\"l\":\"郊区\",\"v\":\"230811\"},{\"l\":\"桦南县\",\"v\":\"230822\"},{\"l\":\"桦川县\",\"v\":\"230826\"},{\"l\":\"汤原县\",\"v\":\"230828\"},{\"l\":\"同江市\",\"v\":\"230881\"},{\"l\":\"富锦市\",\"v\":\"230882\"},{\"l\":\"抚远市\",\"v\":\"230883\"}],\"l\":\"佳木斯市\",\"v\":\"230800\"},{\"c\":[{\"l\":\"新兴区\",\"v\":\"230902\"},{\"l\":\"桃山区\",\"v\":\"230903\"},{\"l\":\"茄子河区\",\"v\":\"230904\"},{\"l\":\"勃利县\",\"v\":\"230921\"}],\"l\":\"七台河市\",\"v\":\"230900\"},{\"c\":[{\"l\":\"东安区\",\"v\":\"231002\"},{\"l\":\"阳明区\",\"v\":\"231003\"},{\"l\":\"爱民区\",\"v\":\"231004\"},{\"l\":\"西安区\",\"v\":\"231005\"},{\"l\":\"林口县\",\"v\":\"231025\"},{\"l\":\"牡丹江经济技术开发区\",\"v\":\"231071\"},{\"l\":\"绥芬河市\",\"v\":\"231081\"},{\"l\":\"海林市\",\"v\":\"231083\"},{\"l\":\"宁安市\",\"v\":\"231084\"},{\"l\":\"穆棱市\",\"v\":\"231085\"},{\"l\":\"东宁市\",\"v\":\"231086\"}],\"l\":\"牡丹江市\",\"v\":\"231000\"},{\"c\":[{\"l\":\"爱辉区\",\"v\":\"231102\"},{\"l\":\"逊克县\",\"v\":\"231123\"},{\"l\":\"孙吴县\",\"v\":\"231124\"},{\"l\":\"北安市\",\"v\":\"231181\"},{\"l\":\"五大连池市\",\"v\":\"231182\"},{\"l\":\"嫩江市\",\"v\":\"231183\"}],\"l\":\"黑河市\",\"v\":\"231100\"},{\"c\":[{\"l\":\"北林区\",\"v\":\"231202\"},{\"l\":\"望奎县\",\"v\":\"231221\"},{\"l\":\"兰西县\",\"v\":\"231222\"},{\"l\":\"青冈县\",\"v\":\"231223\"},{\"l\":\"庆安县\",\"v\":\"231224\"},{\"l\":\"明水县\",\"v\":\"231225\"},{\"l\":\"绥棱县\",\"v\":\"231226\"},{\"l\":\"安达市\",\"v\":\"231281\"},{\"l\":\"肇东市\",\"v\":\"231282\"},{\"l\":\"海伦市\",\"v\":\"231283\"}],\"l\":\"绥化市\",\"v\":\"231200\"},{\"c\":[{\"l\":\"漠河市\",\"v\":\"232701\"},{\"l\":\"呼玛县\",\"v\":\"232721\"},{\"l\":\"塔河县\",\"v\":\"232722\"},{\"l\":\"加格达奇区\",\"v\":\"232761\"},{\"l\":\"松岭区\",\"v\":\"232762\"},{\"l\":\"新林区\",\"v\":\"232763\"},{\"l\":\"呼中区\",\"v\":\"232764\"}],\"l\":\"大兴安岭地区\",\"v\":\"232700\"}],\"l\":\"黑龙江省\",\"v\":\"230000\"},{\"c\":[{\"c\":[{\"l\":\"黄浦区\",\"v\":\"310101\"},{\"l\":\"徐汇区\",\"v\":\"310104\"},{\"l\":\"长宁区\",\"v\":\"310105\"},{\"l\":\"静安区\",\"v\":\"310106\"},{\"l\":\"普陀区\",\"v\":\"310107\"},{\"l\":\"虹口区\",\"v\":\"310109\"},{\"l\":\"杨浦区\",\"v\":\"310110\"},{\"l\":\"闵行区\",\"v\":\"310112\"},{\"l\":\"宝山区\",\"v\":\"310113\"},{\"l\":\"嘉定区\",\"v\":\"310114\"},{\"l\":\"浦东新区\",\"v\":\"310115\"},{\"l\":\"金山区\",\"v\":\"310116\"},{\"l\":\"松江区\",\"v\":\"310117\"},{\"l\":\"青浦区\",\"v\":\"310118\"},{\"l\":\"奉贤区\",\"v\":\"310120\"},{\"l\":\"崇明区\",\"v\":\"310151\"}],\"l\":\"市辖区\",\"v\":\"310100\"}],\"l\":\"上海市\",\"v\":\"310000\"},{\"c\":[{\"c\":[{\"l\":\"玄武区\",\"v\":\"320102\"},{\"l\":\"秦淮区\",\"v\":\"320104\"},{\"l\":\"建邺区\",\"v\":\"320105\"},{\"l\":\"鼓楼区\",\"v\":\"320106\"},{\"l\":\"浦口区\",\"v\":\"320111\"},{\"l\":\"栖霞区\",\"v\":\"320113\"},{\"l\":\"雨花台区\",\"v\":\"320114\"},{\"l\":\"江宁区\",\"v\":\"320115\"},{\"l\":\"六合区\",\"v\":\"320116\"},{\"l\":\"溧水区\",\"v\":\"320117\"},{\"l\":\"高淳区\",\"v\":\"320118\"}],\"l\":\"南京市\",\"v\":\"320100\"},{\"c\":[{\"l\":\"锡山区\",\"v\":\"320205\"},{\"l\":\"惠山区\",\"v\":\"320206\"},{\"l\":\"滨湖区\",\"v\":\"320211\"},{\"l\":\"梁溪区\",\"v\":\"320213\"},{\"l\":\"新吴区\",\"v\":\"320214\"},{\"l\":\"江阴市\",\"v\":\"320281\"},{\"l\":\"宜兴市\",\"v\":\"320282\"}],\"l\":\"无锡市\",\"v\":\"320200\"},{\"c\":[{\"l\":\"鼓楼区\",\"v\":\"320302\"},{\"l\":\"云龙区\",\"v\":\"320303\"},{\"l\":\"贾汪区\",\"v\":\"320305\"},{\"l\":\"泉山区\",\"v\":\"320311\"},{\"l\":\"铜山区\",\"v\":\"320312\"},{\"l\":\"丰县\",\"v\":\"320321\"},{\"l\":\"沛县\",\"v\":\"320322\"},{\"l\":\"睢宁县\",\"v\":\"320324\"},{\"l\":\"徐州经济技术开发区\",\"v\":\"320371\"},{\"l\":\"新沂市\",\"v\":\"320381\"},{\"l\":\"邳州市\",\"v\":\"320382\"}],\"l\":\"徐州市\",\"v\":\"320300\"},{\"c\":[{\"l\":\"天宁区\",\"v\":\"320402\"},{\"l\":\"钟楼区\",\"v\":\"320404\"},{\"l\":\"新北区\",\"v\":\"320411\"},{\"l\":\"武进区\",\"v\":\"320412\"},{\"l\":\"金坛区\",\"v\":\"320413\"},{\"l\":\"溧阳市\",\"v\":\"320481\"}],\"l\":\"常州市\",\"v\":\"320400\"},{\"c\":[{\"l\":\"虎丘区\",\"v\":\"320505\"},{\"l\":\"吴中区\",\"v\":\"320506\"},{\"l\":\"相城区\",\"v\":\"320507\"},{\"l\":\"姑苏区\",\"v\":\"320508\"},{\"l\":\"吴江区\",\"v\":\"320509\"},{\"l\":\"苏州工业园区\",\"v\":\"320571\"},{\"l\":\"常熟市\",\"v\":\"320581\"},{\"l\":\"张家港市\",\"v\":\"320582\"},{\"l\":\"昆山市\",\"v\":\"320583\"},{\"l\":\"太仓市\",\"v\":\"320585\"}],\"l\":\"苏州市\",\"v\":\"320500\"},{\"c\":[{\"l\":\"崇川区\",\"v\":\"320602\"},{\"l\":\"港闸区\",\"v\":\"320611\"},{\"l\":\"通州区\",\"v\":\"320612\"},{\"l\":\"如东县\",\"v\":\"320623\"},{\"l\":\"南通经济技术开发区\",\"v\":\"320671\"},{\"l\":\"启东市\",\"v\":\"320681\"},{\"l\":\"如皋市\",\"v\":\"320682\"},{\"l\":\"海门市\",\"v\":\"320684\"},{\"l\":\"海安市\",\"v\":\"320685\"}],\"l\":\"南通市\",\"v\":\"320600\"},{\"c\":[{\"l\":\"连云区\",\"v\":\"320703\"},{\"l\":\"海州区\",\"v\":\"320706\"},{\"l\":\"赣榆区\",\"v\":\"320707\"},{\"l\":\"东海县\",\"v\":\"320722\"},{\"l\":\"灌云县\",\"v\":\"320723\"},{\"l\":\"灌南县\",\"v\":\"320724\"},{\"l\":\"连云港经济技术开发区\",\"v\":\"320771\"},{\"l\":\"连云港高新技术产业开发区\",\"v\":\"320772\"}],\"l\":\"连云港市\",\"v\":\"320700\"},{\"c\":[{\"l\":\"淮安区\",\"v\":\"320803\"},{\"l\":\"淮阴区\",\"v\":\"320804\"},{\"l\":\"清江浦区\",\"v\":\"320812\"},{\"l\":\"洪泽区\",\"v\":\"320813\"},{\"l\":\"涟水县\",\"v\":\"320826\"},{\"l\":\"盱眙县\",\"v\":\"320830\"},{\"l\":\"金湖县\",\"v\":\"320831\"},{\"l\":\"淮安经济技术开发区\",\"v\":\"320871\"}],\"l\":\"淮安市\",\"v\":\"320800\"},{\"c\":[{\"l\":\"亭湖区\",\"v\":\"320902\"},{\"l\":\"盐都区\",\"v\":\"320903\"},{\"l\":\"大丰区\",\"v\":\"320904\"},{\"l\":\"响水县\",\"v\":\"320921\"},{\"l\":\"滨海县\",\"v\":\"320922\"},{\"l\":\"阜宁县\",\"v\":\"320923\"},{\"l\":\"射阳县\",\"v\":\"320924\"},{\"l\":\"建湖县\",\"v\":\"320925\"},{\"l\":\"盐城经济技术开发区\",\"v\":\"320971\"},{\"l\":\"东台市\",\"v\":\"320981\"}],\"l\":\"盐城市\",\"v\":\"320900\"},{\"c\":[{\"l\":\"广陵区\",\"v\":\"321002\"},{\"l\":\"邗江区\",\"v\":\"321003\"},{\"l\":\"江都区\",\"v\":\"321012\"},{\"l\":\"宝应县\",\"v\":\"321023\"},{\"l\":\"扬州经济技术开发区\",\"v\":\"321071\"},{\"l\":\"仪征市\",\"v\":\"321081\"},{\"l\":\"高邮市\",\"v\":\"321084\"}],\"l\":\"扬州市\",\"v\":\"321000\"},{\"c\":[{\"l\":\"京口区\",\"v\":\"321102\"},{\"l\":\"润州区\",\"v\":\"321111\"},{\"l\":\"丹徒区\",\"v\":\"321112\"},{\"l\":\"镇江新区\",\"v\":\"321171\"},{\"l\":\"丹阳市\",\"v\":\"321181\"},{\"l\":\"扬中市\",\"v\":\"321182\"},{\"l\":\"句容市\",\"v\":\"321183\"}],\"l\":\"镇江市\",\"v\":\"321100\"},{\"c\":[{\"l\":\"海陵区\",\"v\":\"321202\"},{\"l\":\"高港区\",\"v\":\"321203\"},{\"l\":\"姜堰区\",\"v\":\"321204\"},{\"l\":\"泰州医药高新技术产业开发区\",\"v\":\"321271\"},{\"l\":\"兴化市\",\"v\":\"321281\"},{\"l\":\"靖江市\",\"v\":\"321282\"},{\"l\":\"泰兴市\",\"v\":\"321283\"}],\"l\":\"泰州市\",\"v\":\"321200\"},{\"c\":[{\"l\":\"宿城区\",\"v\":\"321302\"},{\"l\":\"宿豫区\",\"v\":\"321311\"},{\"l\":\"沭阳县\",\"v\":\"321322\"},{\"l\":\"泗阳县\",\"v\":\"321323\"},{\"l\":\"泗洪县\",\"v\":\"321324\"},{\"l\":\"宿迁经济技术开发区\",\"v\":\"321371\"}],\"l\":\"宿迁市\",\"v\":\"321300\"}],\"l\":\"江苏省\",\"v\":\"320000\"},{\"c\":[{\"c\":[{\"l\":\"上城区\",\"v\":\"330102\"},{\"l\":\"下城区\",\"v\":\"330103\"},{\"l\":\"江干区\",\"v\":\"330104\"},{\"l\":\"拱墅区\",\"v\":\"330105\"},{\"l\":\"西湖区\",\"v\":\"330106\"},{\"l\":\"滨江区\",\"v\":\"330108\"},{\"l\":\"萧山区\",\"v\":\"330109\"},{\"l\":\"余杭区\",\"v\":\"330110\"},{\"l\":\"富阳区\",\"v\":\"330111\"},{\"l\":\"临安区\",\"v\":\"330112\"},{\"l\":\"桐庐县\",\"v\":\"330122\"},{\"l\":\"淳安县\",\"v\":\"330127\"},{\"l\":\"建德市\",\"v\":\"330182\"}],\"l\":\"杭州市\",\"v\":\"330100\"},{\"c\":[{\"l\":\"海曙区\",\"v\":\"330203\"},{\"l\":\"江北区\",\"v\":\"330205\"},{\"l\":\"北仑区\",\"v\":\"330206\"},{\"l\":\"镇海区\",\"v\":\"330211\"},{\"l\":\"鄞州区\",\"v\":\"330212\"},{\"l\":\"奉化区\",\"v\":\"330213\"},{\"l\":\"象山县\",\"v\":\"330225\"},{\"l\":\"宁海县\",\"v\":\"330226\"},{\"l\":\"余姚市\",\"v\":\"330281\"},{\"l\":\"慈溪市\",\"v\":\"330282\"}],\"l\":\"宁波市\",\"v\":\"330200\"},{\"c\":[{\"l\":\"鹿城区\",\"v\":\"330302\"},{\"l\":\"龙湾区\",\"v\":\"330303\"},{\"l\":\"瓯海区\",\"v\":\"330304\"},{\"l\":\"洞头区\",\"v\":\"330305\"},{\"l\":\"永嘉县\",\"v\":\"330324\"},{\"l\":\"平阳县\",\"v\":\"330326\"},{\"l\":\"苍南县\",\"v\":\"330327\"},{\"l\":\"文成县\",\"v\":\"330328\"},{\"l\":\"泰顺县\",\"v\":\"330329\"},{\"l\":\"温州经济技术开发区\",\"v\":\"330371\"},{\"l\":\"瑞安市\",\"v\":\"330381\"},{\"l\":\"乐清市\",\"v\":\"330382\"},{\"l\":\"龙港市\",\"v\":\"330383\"}],\"l\":\"温州市\",\"v\":\"330300\"},{\"c\":[{\"l\":\"南湖区\",\"v\":\"330402\"},{\"l\":\"秀洲区\",\"v\":\"330411\"},{\"l\":\"嘉善县\",\"v\":\"330421\"},{\"l\":\"海盐县\",\"v\":\"330424\"},{\"l\":\"海宁市\",\"v\":\"330481\"},{\"l\":\"平湖市\",\"v\":\"330482\"},{\"l\":\"桐乡市\",\"v\":\"330483\"}],\"l\":\"嘉兴市\",\"v\":\"330400\"},{\"c\":[{\"l\":\"吴兴区\",\"v\":\"330502\"},{\"l\":\"南浔区\",\"v\":\"330503\"},{\"l\":\"德清县\",\"v\":\"330521\"},{\"l\":\"长兴县\",\"v\":\"330522\"},{\"l\":\"安吉县\",\"v\":\"330523\"}],\"l\":\"湖州市\",\"v\":\"330500\"},{\"c\":[{\"l\":\"越城区\",\"v\":\"330602\"},{\"l\":\"柯桥区\",\"v\":\"330603\"},{\"l\":\"上虞区\",\"v\":\"330604\"},{\"l\":\"新昌县\",\"v\":\"330624\"},{\"l\":\"诸暨市\",\"v\":\"330681\"},{\"l\":\"嵊州市\",\"v\":\"330683\"}],\"l\":\"绍兴市\",\"v\":\"330600\"},{\"c\":[{\"l\":\"婺城区\",\"v\":\"330702\"},{\"l\":\"金东区\",\"v\":\"330703\"},{\"l\":\"武义县\",\"v\":\"330723\"},{\"l\":\"浦江县\",\"v\":\"330726\"},{\"l\":\"磐安县\",\"v\":\"330727\"},{\"l\":\"兰溪市\",\"v\":\"330781\"},{\"l\":\"义乌市\",\"v\":\"330782\"},{\"l\":\"东阳市\",\"v\":\"330783\"},{\"l\":\"永康市\",\"v\":\"330784\"}],\"l\":\"金华市\",\"v\":\"330700\"},{\"c\":[{\"l\":\"柯城区\",\"v\":\"330802\"},{\"l\":\"衢江区\",\"v\":\"330803\"},{\"l\":\"常山县\",\"v\":\"330822\"},{\"l\":\"开化县\",\"v\":\"330824\"},{\"l\":\"龙游县\",\"v\":\"330825\"},{\"l\":\"江山市\",\"v\":\"330881\"}],\"l\":\"衢州市\",\"v\":\"330800\"},{\"c\":[{\"l\":\"定海区\",\"v\":\"330902\"},{\"l\":\"普陀区\",\"v\":\"330903\"},{\"l\":\"岱山县\",\"v\":\"330921\"},{\"l\":\"嵊泗县\",\"v\":\"330922\"}],\"l\":\"舟山市\",\"v\":\"330900\"},{\"c\":[{\"l\":\"椒江区\",\"v\":\"331002\"},{\"l\":\"黄岩区\",\"v\":\"331003\"},{\"l\":\"路桥区\",\"v\":\"331004\"},{\"l\":\"三门县\",\"v\":\"331022\"},{\"l\":\"天台县\",\"v\":\"331023\"},{\"l\":\"仙居县\",\"v\":\"331024\"},{\"l\":\"温岭市\",\"v\":\"331081\"},{\"l\":\"临海市\",\"v\":\"331082\"},{\"l\":\"玉环市\",\"v\":\"331083\"}],\"l\":\"台州市\",\"v\":\"331000\"},{\"c\":[{\"l\":\"莲都区\",\"v\":\"331102\"},{\"l\":\"青田县\",\"v\":\"331121\"},{\"l\":\"缙云县\",\"v\":\"331122\"},{\"l\":\"遂昌县\",\"v\":\"331123\"},{\"l\":\"松阳县\",\"v\":\"331124\"},{\"l\":\"云和县\",\"v\":\"331125\"},{\"l\":\"庆元县\",\"v\":\"331126\"},{\"l\":\"景宁畲族自治县\",\"v\":\"331127\"},{\"l\":\"龙泉市\",\"v\":\"331181\"}],\"l\":\"丽水市\",\"v\":\"331100\"}],\"l\":\"浙江省\",\"v\":\"330000\"},{\"c\":[{\"c\":[{\"l\":\"瑶海区\",\"v\":\"340102\"},{\"l\":\"庐阳区\",\"v\":\"340103\"},{\"l\":\"蜀山区\",\"v\":\"340104\"},{\"l\":\"包河区\",\"v\":\"340111\"},{\"l\":\"长丰县\",\"v\":\"340121\"},{\"l\":\"肥东县\",\"v\":\"340122\"},{\"l\":\"肥西县\",\"v\":\"340123\"},{\"l\":\"庐江县\",\"v\":\"340124\"},{\"l\":\"合肥高新技术产业开发区\",\"v\":\"340171\"},{\"l\":\"合肥经济技术开发区\",\"v\":\"340172\"},{\"l\":\"合肥新站高新技术产业开发区\",\"v\":\"340173\"},{\"l\":\"巢湖市\",\"v\":\"340181\"}],\"l\":\"合肥市\",\"v\":\"340100\"},{\"c\":[{\"l\":\"镜湖区\",\"v\":\"340202\"},{\"l\":\"弋江区\",\"v\":\"340203\"},{\"l\":\"鸠江区\",\"v\":\"340207\"},{\"l\":\"三山区\",\"v\":\"340208\"},{\"l\":\"芜湖县\",\"v\":\"340221\"},{\"l\":\"繁昌县\",\"v\":\"340222\"},{\"l\":\"南陵县\",\"v\":\"340223\"},{\"l\":\"芜湖经济技术开发区\",\"v\":\"340271\"},{\"l\":\"安徽芜湖长江大桥经济开发区\",\"v\":\"340272\"},{\"l\":\"无为市\",\"v\":\"340281\"}],\"l\":\"芜湖市\",\"v\":\"340200\"},{\"c\":[{\"l\":\"龙子湖区\",\"v\":\"340302\"},{\"l\":\"蚌山区\",\"v\":\"340303\"},{\"l\":\"禹会区\",\"v\":\"340304\"},{\"l\":\"淮上区\",\"v\":\"340311\"},{\"l\":\"怀远县\",\"v\":\"340321\"},{\"l\":\"五河县\",\"v\":\"340322\"},{\"l\":\"固镇县\",\"v\":\"340323\"},{\"l\":\"蚌埠市高新技术开发区\",\"v\":\"340371\"},{\"l\":\"蚌埠市经济开发区\",\"v\":\"340372\"}],\"l\":\"蚌埠市\",\"v\":\"340300\"},{\"c\":[{\"l\":\"大通区\",\"v\":\"340402\"},{\"l\":\"田家庵区\",\"v\":\"340403\"},{\"l\":\"谢家集区\",\"v\":\"340404\"},{\"l\":\"八公山区\",\"v\":\"340405\"},{\"l\":\"潘集区\",\"v\":\"340406\"},{\"l\":\"凤台县\",\"v\":\"340421\"},{\"l\":\"寿县\",\"v\":\"340422\"}],\"l\":\"淮南市\",\"v\":\"340400\"},{\"c\":[{\"l\":\"花山区\",\"v\":\"340503\"},{\"l\":\"雨山区\",\"v\":\"340504\"},{\"l\":\"博望区\",\"v\":\"340506\"},{\"l\":\"当涂县\",\"v\":\"340521\"},{\"l\":\"含山县\",\"v\":\"340522\"},{\"l\":\"和县\",\"v\":\"340523\"}],\"l\":\"马鞍山市\",\"v\":\"340500\"},{\"c\":[{\"l\":\"杜集区\",\"v\":\"340602\"},{\"l\":\"相山区\",\"v\":\"340603\"},{\"l\":\"烈山区\",\"v\":\"340604\"},{\"l\":\"濉溪县\",\"v\":\"340621\"}],\"l\":\"淮北市\",\"v\":\"340600\"},{\"c\":[{\"l\":\"铜官区\",\"v\":\"340705\"},{\"l\":\"义安区\",\"v\":\"340706\"},{\"l\":\"郊区\",\"v\":\"340711\"},{\"l\":\"枞阳县\",\"v\":\"340722\"}],\"l\":\"铜陵市\",\"v\":\"340700\"},{\"c\":[{\"l\":\"迎江区\",\"v\":\"340802\"},{\"l\":\"大观区\",\"v\":\"340803\"},{\"l\":\"宜秀区\",\"v\":\"340811\"},{\"l\":\"怀宁县\",\"v\":\"340822\"},{\"l\":\"太湖县\",\"v\":\"340825\"},{\"l\":\"宿松县\",\"v\":\"340826\"},{\"l\":\"望江县\",\"v\":\"340827\"},{\"l\":\"岳西县\",\"v\":\"340828\"},{\"l\":\"安徽安庆经济开发区\",\"v\":\"340871\"},{\"l\":\"桐城市\",\"v\":\"340881\"},{\"l\":\"潜山市\",\"v\":\"340882\"}],\"l\":\"安庆市\",\"v\":\"340800\"},{\"c\":[{\"l\":\"屯溪区\",\"v\":\"341002\"},{\"l\":\"黄山区\",\"v\":\"341003\"},{\"l\":\"徽州区\",\"v\":\"341004\"},{\"l\":\"歙县\",\"v\":\"341021\"},{\"l\":\"休宁县\",\"v\":\"341022\"},{\"l\":\"黟县\",\"v\":\"341023\"},{\"l\":\"祁门县\",\"v\":\"341024\"}],\"l\":\"黄山市\",\"v\":\"341000\"},{\"c\":[{\"l\":\"琅琊区\",\"v\":\"341102\"},{\"l\":\"南谯区\",\"v\":\"341103\"},{\"l\":\"来安县\",\"v\":\"341122\"},{\"l\":\"全椒县\",\"v\":\"341124\"},{\"l\":\"定远县\",\"v\":\"341125\"},{\"l\":\"凤阳县\",\"v\":\"341126\"},{\"l\":\"苏滁现代产业园\",\"v\":\"341171\"},{\"l\":\"滁州经济技术开发区\",\"v\":\"341172\"},{\"l\":\"天长市\",\"v\":\"341181\"},{\"l\":\"明光市\",\"v\":\"341182\"}],\"l\":\"滁州市\",\"v\":\"341100\"},{\"c\":[{\"l\":\"颍州区\",\"v\":\"341202\"},{\"l\":\"颍东区\",\"v\":\"341203\"},{\"l\":\"颍泉区\",\"v\":\"341204\"},{\"l\":\"临泉县\",\"v\":\"341221\"},{\"l\":\"太和县\",\"v\":\"341222\"},{\"l\":\"阜南县\",\"v\":\"341225\"},{\"l\":\"颍上县\",\"v\":\"341226\"},{\"l\":\"阜阳合肥现代产业园区\",\"v\":\"341271\"},{\"l\":\"阜阳经济技术开发区\",\"v\":\"341272\"},{\"l\":\"界首市\",\"v\":\"341282\"}],\"l\":\"阜阳市\",\"v\":\"341200\"},{\"c\":[{\"l\":\"埇桥区\",\"v\":\"341302\"},{\"l\":\"砀山县\",\"v\":\"341321\"},{\"l\":\"萧县\",\"v\":\"341322\"},{\"l\":\"灵璧县\",\"v\":\"341323\"},{\"l\":\"泗县\",\"v\":\"341324\"},{\"l\":\"宿州马鞍山现代产业园区\",\"v\":\"341371\"},{\"l\":\"宿州经济技术开发区\",\"v\":\"341372\"}],\"l\":\"宿州市\",\"v\":\"341300\"},{\"c\":[{\"l\":\"金安区\",\"v\":\"341502\"},{\"l\":\"裕安区\",\"v\":\"341503\"},{\"l\":\"叶集区\",\"v\":\"341504\"},{\"l\":\"霍邱县\",\"v\":\"341522\"},{\"l\":\"舒城县\",\"v\":\"341523\"},{\"l\":\"金寨县\",\"v\":\"341524\"},{\"l\":\"霍山县\",\"v\":\"341525\"}],\"l\":\"六安市\",\"v\":\"341500\"},{\"c\":[{\"l\":\"谯城区\",\"v\":\"341602\"},{\"l\":\"涡阳县\",\"v\":\"341621\"},{\"l\":\"蒙城县\",\"v\":\"341622\"},{\"l\":\"利辛县\",\"v\":\"341623\"}],\"l\":\"亳州市\",\"v\":\"341600\"},{\"c\":[{\"l\":\"贵池区\",\"v\":\"341702\"},{\"l\":\"东至县\",\"v\":\"341721\"},{\"l\":\"石台县\",\"v\":\"341722\"},{\"l\":\"青阳县\",\"v\":\"341723\"}],\"l\":\"池州市\",\"v\":\"341700\"},{\"c\":[{\"l\":\"宣州区\",\"v\":\"341802\"},{\"l\":\"郎溪县\",\"v\":\"341821\"},{\"l\":\"泾县\",\"v\":\"341823\"},{\"l\":\"绩溪县\",\"v\":\"341824\"},{\"l\":\"旌德县\",\"v\":\"341825\"},{\"l\":\"宣城市经济开发区\",\"v\":\"341871\"},{\"l\":\"宁国市\",\"v\":\"341881\"},{\"l\":\"广德市\",\"v\":\"341882\"}],\"l\":\"宣城市\",\"v\":\"341800\"}],\"l\":\"安徽省\",\"v\":\"340000\"},{\"c\":[{\"c\":[{\"l\":\"鼓楼区\",\"v\":\"350102\"},{\"l\":\"台江区\",\"v\":\"350103\"},{\"l\":\"仓山区\",\"v\":\"350104\"},{\"l\":\"马尾区\",\"v\":\"350105\"},{\"l\":\"晋安区\",\"v\":\"350111\"},{\"l\":\"长乐区\",\"v\":\"350112\"},{\"l\":\"闽侯县\",\"v\":\"350121\"},{\"l\":\"连江县\",\"v\":\"350122\"},{\"l\":\"罗源县\",\"v\":\"350123\"},{\"l\":\"闽清县\",\"v\":\"350124\"},{\"l\":\"永泰县\",\"v\":\"350125\"},{\"l\":\"平潭县\",\"v\":\"350128\"},{\"l\":\"福清市\",\"v\":\"350181\"}],\"l\":\"福州市\",\"v\":\"350100\"},{\"c\":[{\"l\":\"思明区\",\"v\":\"350203\"},{\"l\":\"海沧区\",\"v\":\"350205\"},{\"l\":\"湖里区\",\"v\":\"350206\"},{\"l\":\"集美区\",\"v\":\"350211\"},{\"l\":\"同安区\",\"v\":\"350212\"},{\"l\":\"翔安区\",\"v\":\"350213\"}],\"l\":\"厦门市\",\"v\":\"350200\"},{\"c\":[{\"l\":\"城厢区\",\"v\":\"350302\"},{\"l\":\"涵江区\",\"v\":\"350303\"},{\"l\":\"荔城区\",\"v\":\"350304\"},{\"l\":\"秀屿区\",\"v\":\"350305\"},{\"l\":\"仙游县\",\"v\":\"350322\"}],\"l\":\"莆田市\",\"v\":\"350300\"},{\"c\":[{\"l\":\"梅列区\",\"v\":\"350402\"},{\"l\":\"三元区\",\"v\":\"350403\"},{\"l\":\"明溪县\",\"v\":\"350421\"},{\"l\":\"清流县\",\"v\":\"350423\"},{\"l\":\"宁化县\",\"v\":\"350424\"},{\"l\":\"大田县\",\"v\":\"350425\"},{\"l\":\"尤溪县\",\"v\":\"350426\"},{\"l\":\"沙县\",\"v\":\"350427\"},{\"l\":\"将乐县\",\"v\":\"350428\"},{\"l\":\"泰宁县\",\"v\":\"350429\"},{\"l\":\"建宁县\",\"v\":\"350430\"},{\"l\":\"永安市\",\"v\":\"350481\"}],\"l\":\"三明市\",\"v\":\"350400\"},{\"c\":[{\"l\":\"鲤城区\",\"v\":\"350502\"},{\"l\":\"丰泽区\",\"v\":\"350503\"},{\"l\":\"洛江区\",\"v\":\"350504\"},{\"l\":\"泉港区\",\"v\":\"350505\"},{\"l\":\"惠安县\",\"v\":\"350521\"},{\"l\":\"安溪县\",\"v\":\"350524\"},{\"l\":\"永春县\",\"v\":\"350525\"},{\"l\":\"德化县\",\"v\":\"350526\"},{\"l\":\"金门县\",\"v\":\"350527\"},{\"l\":\"石狮市\",\"v\":\"350581\"},{\"l\":\"晋江市\",\"v\":\"350582\"},{\"l\":\"南安市\",\"v\":\"350583\"}],\"l\":\"泉州市\",\"v\":\"350500\"},{\"c\":[{\"l\":\"芗城区\",\"v\":\"350602\"},{\"l\":\"龙文区\",\"v\":\"350603\"},{\"l\":\"云霄县\",\"v\":\"350622\"},{\"l\":\"漳浦县\",\"v\":\"350623\"},{\"l\":\"诏安县\",\"v\":\"350624\"},{\"l\":\"长泰县\",\"v\":\"350625\"},{\"l\":\"东山县\",\"v\":\"350626\"},{\"l\":\"南靖县\",\"v\":\"350627\"},{\"l\":\"平和县\",\"v\":\"350628\"},{\"l\":\"华安县\",\"v\":\"350629\"},{\"l\":\"龙海市\",\"v\":\"350681\"}],\"l\":\"漳州市\",\"v\":\"350600\"},{\"c\":[{\"l\":\"延平区\",\"v\":\"350702\"},{\"l\":\"建阳区\",\"v\":\"350703\"},{\"l\":\"顺昌县\",\"v\":\"350721\"},{\"l\":\"浦城县\",\"v\":\"350722\"},{\"l\":\"光泽县\",\"v\":\"350723\"},{\"l\":\"松溪县\",\"v\":\"350724\"},{\"l\":\"政和县\",\"v\":\"350725\"},{\"l\":\"邵武市\",\"v\":\"350781\"},{\"l\":\"武夷山市\",\"v\":\"350782\"},{\"l\":\"建瓯市\",\"v\":\"350783\"}],\"l\":\"南平市\",\"v\":\"350700\"},{\"c\":[{\"l\":\"新罗区\",\"v\":\"350802\"},{\"l\":\"永定区\",\"v\":\"350803\"},{\"l\":\"长汀县\",\"v\":\"350821\"},{\"l\":\"上杭县\",\"v\":\"350823\"},{\"l\":\"武平县\",\"v\":\"350824\"},{\"l\":\"连城县\",\"v\":\"350825\"},{\"l\":\"漳平市\",\"v\":\"350881\"}],\"l\":\"龙岩市\",\"v\":\"350800\"},{\"c\":[{\"l\":\"蕉城区\",\"v\":\"350902\"},{\"l\":\"霞浦县\",\"v\":\"350921\"},{\"l\":\"古田县\",\"v\":\"350922\"},{\"l\":\"屏南县\",\"v\":\"350923\"},{\"l\":\"寿宁县\",\"v\":\"350924\"},{\"l\":\"周宁县\",\"v\":\"350925\"},{\"l\":\"柘荣县\",\"v\":\"350926\"},{\"l\":\"福安市\",\"v\":\"350981\"},{\"l\":\"福鼎市\",\"v\":\"350982\"}],\"l\":\"宁德市\",\"v\":\"350900\"}],\"l\":\"福建省\",\"v\":\"350000\"},{\"c\":[{\"c\":[{\"l\":\"东湖区\",\"v\":\"360102\"},{\"l\":\"西湖区\",\"v\":\"360103\"},{\"l\":\"青云谱区\",\"v\":\"360104\"},{\"l\":\"青山湖区\",\"v\":\"360111\"},{\"l\":\"新建区\",\"v\":\"360112\"},{\"l\":\"红谷滩区\",\"v\":\"360113\"},{\"l\":\"南昌县\",\"v\":\"360121\"},{\"l\":\"安义县\",\"v\":\"360123\"},{\"l\":\"进贤县\",\"v\":\"360124\"}],\"l\":\"南昌市\",\"v\":\"360100\"},{\"c\":[{\"l\":\"昌江区\",\"v\":\"360202\"},{\"l\":\"珠山区\",\"v\":\"360203\"},{\"l\":\"浮梁县\",\"v\":\"360222\"},{\"l\":\"乐平市\",\"v\":\"360281\"}],\"l\":\"景德镇市\",\"v\":\"360200\"},{\"c\":[{\"l\":\"安源区\",\"v\":\"360302\"},{\"l\":\"湘东区\",\"v\":\"360313\"},{\"l\":\"莲花县\",\"v\":\"360321\"},{\"l\":\"上栗县\",\"v\":\"360322\"},{\"l\":\"芦溪县\",\"v\":\"360323\"}],\"l\":\"萍乡市\",\"v\":\"360300\"},{\"c\":[{\"l\":\"濂溪区\",\"v\":\"360402\"},{\"l\":\"浔阳区\",\"v\":\"360403\"},{\"l\":\"柴桑区\",\"v\":\"360404\"},{\"l\":\"武宁县\",\"v\":\"360423\"},{\"l\":\"修水县\",\"v\":\"360424\"},{\"l\":\"永修县\",\"v\":\"360425\"},{\"l\":\"德安县\",\"v\":\"360426\"},{\"l\":\"都昌县\",\"v\":\"360428\"},{\"l\":\"湖口县\",\"v\":\"360429\"},{\"l\":\"彭泽县\",\"v\":\"360430\"},{\"l\":\"瑞昌市\",\"v\":\"360481\"},{\"l\":\"共青城市\",\"v\":\"360482\"},{\"l\":\"庐山市\",\"v\":\"360483\"}],\"l\":\"九江市\",\"v\":\"360400\"},{\"c\":[{\"l\":\"渝水区\",\"v\":\"360502\"},{\"l\":\"分宜县\",\"v\":\"360521\"}],\"l\":\"新余市\",\"v\":\"360500\"},{\"c\":[{\"l\":\"月湖区\",\"v\":\"360602\"},{\"l\":\"余江区\",\"v\":\"360603\"},{\"l\":\"贵溪市\",\"v\":\"360681\"}],\"l\":\"鹰潭市\",\"v\":\"360600\"},{\"c\":[{\"l\":\"章贡区\",\"v\":\"360702\"},{\"l\":\"南康区\",\"v\":\"360703\"},{\"l\":\"赣县区\",\"v\":\"360704\"},{\"l\":\"信丰县\",\"v\":\"360722\"},{\"l\":\"大余县\",\"v\":\"360723\"},{\"l\":\"上犹县\",\"v\":\"360724\"},{\"l\":\"崇义县\",\"v\":\"360725\"},{\"l\":\"安远县\",\"v\":\"360726\"},{\"l\":\"定南县\",\"v\":\"360728\"},{\"l\":\"全南县\",\"v\":\"360729\"},{\"l\":\"宁都县\",\"v\":\"360730\"},{\"l\":\"于都县\",\"v\":\"360731\"},{\"l\":\"兴国县\",\"v\":\"360732\"},{\"l\":\"会昌县\",\"v\":\"360733\"},{\"l\":\"寻乌县\",\"v\":\"360734\"},{\"l\":\"石城县\",\"v\":\"360735\"},{\"l\":\"瑞金市\",\"v\":\"360781\"},{\"l\":\"龙南市\",\"v\":\"360783\"}],\"l\":\"赣州市\",\"v\":\"360700\"},{\"c\":[{\"l\":\"吉州区\",\"v\":\"360802\"},{\"l\":\"青原区\",\"v\":\"360803\"},{\"l\":\"吉安县\",\"v\":\"360821\"},{\"l\":\"吉水县\",\"v\":\"360822\"},{\"l\":\"峡江县\",\"v\":\"360823\"},{\"l\":\"新干县\",\"v\":\"360824\"},{\"l\":\"永丰县\",\"v\":\"360825\"},{\"l\":\"泰和县\",\"v\":\"360826\"},{\"l\":\"遂川县\",\"v\":\"360827\"},{\"l\":\"万安县\",\"v\":\"360828\"},{\"l\":\"安福县\",\"v\":\"360829\"},{\"l\":\"永新县\",\"v\":\"360830\"},{\"l\":\"井冈山市\",\"v\":\"360881\"}],\"l\":\"吉安市\",\"v\":\"360800\"},{\"c\":[{\"l\":\"袁州区\",\"v\":\"360902\"},{\"l\":\"奉新县\",\"v\":\"360921\"},{\"l\":\"万载县\",\"v\":\"360922\"},{\"l\":\"上高县\",\"v\":\"360923\"},{\"l\":\"宜丰县\",\"v\":\"360924\"},{\"l\":\"靖安县\",\"v\":\"360925\"},{\"l\":\"铜鼓县\",\"v\":\"360926\"},{\"l\":\"丰城市\",\"v\":\"360981\"},{\"l\":\"樟树市\",\"v\":\"360982\"},{\"l\":\"高安市\",\"v\":\"360983\"}],\"l\":\"宜春市\",\"v\":\"360900\"},{\"c\":[{\"l\":\"临川区\",\"v\":\"361002\"},{\"l\":\"东乡区\",\"v\":\"361003\"},{\"l\":\"南城县\",\"v\":\"361021\"},{\"l\":\"黎川县\",\"v\":\"361022\"},{\"l\":\"南丰县\",\"v\":\"361023\"},{\"l\":\"崇仁县\",\"v\":\"361024\"},{\"l\":\"乐安县\",\"v\":\"361025\"},{\"l\":\"宜黄县\",\"v\":\"361026\"},{\"l\":\"金溪县\",\"v\":\"361027\"},{\"l\":\"资溪县\",\"v\":\"361028\"},{\"l\":\"广昌县\",\"v\":\"361030\"}],\"l\":\"抚州市\",\"v\":\"361000\"},{\"c\":[{\"l\":\"信州区\",\"v\":\"361102\"},{\"l\":\"广丰区\",\"v\":\"361103\"},{\"l\":\"广信区\",\"v\":\"361104\"},{\"l\":\"玉山县\",\"v\":\"361123\"},{\"l\":\"铅山县\",\"v\":\"361124\"},{\"l\":\"横峰县\",\"v\":\"361125\"},{\"l\":\"弋阳县\",\"v\":\"361126\"},{\"l\":\"余干县\",\"v\":\"361127\"},{\"l\":\"鄱阳县\",\"v\":\"361128\"},{\"l\":\"万年县\",\"v\":\"361129\"},{\"l\":\"婺源县\",\"v\":\"361130\"},{\"l\":\"德兴市\",\"v\":\"361181\"}],\"l\":\"上饶市\",\"v\":\"361100\"}],\"l\":\"江西省\",\"v\":\"360000\"},{\"c\":[{\"c\":[{\"l\":\"历下区\",\"v\":\"370102\"},{\"l\":\"市中区\",\"v\":\"370103\"},{\"l\":\"槐荫区\",\"v\":\"370104\"},{\"l\":\"天桥区\",\"v\":\"370105\"},{\"l\":\"历城区\",\"v\":\"370112\"},{\"l\":\"长清区\",\"v\":\"370113\"},{\"l\":\"章丘区\",\"v\":\"370114\"},{\"l\":\"济阳区\",\"v\":\"370115\"},{\"l\":\"莱芜区\",\"v\":\"370116\"},{\"l\":\"钢城区\",\"v\":\"370117\"},{\"l\":\"平阴县\",\"v\":\"370124\"},{\"l\":\"商河县\",\"v\":\"370126\"},{\"l\":\"济南高新技术产业开发区\",\"v\":\"370171\"}],\"l\":\"济南市\",\"v\":\"370100\"},{\"c\":[{\"l\":\"市南区\",\"v\":\"370202\"},{\"l\":\"市北区\",\"v\":\"370203\"},{\"l\":\"黄岛区\",\"v\":\"370211\"},{\"l\":\"崂山区\",\"v\":\"370212\"},{\"l\":\"李沧区\",\"v\":\"370213\"},{\"l\":\"城阳区\",\"v\":\"370214\"},{\"l\":\"即墨区\",\"v\":\"370215\"},{\"l\":\"青岛高新技术产业开发区\",\"v\":\"370271\"},{\"l\":\"胶州市\",\"v\":\"370281\"},{\"l\":\"平度市\",\"v\":\"370283\"},{\"l\":\"莱西市\",\"v\":\"370285\"}],\"l\":\"青岛市\",\"v\":\"370200\"},{\"c\":[{\"l\":\"淄川区\",\"v\":\"370302\"},{\"l\":\"张店区\",\"v\":\"370303\"},{\"l\":\"博山区\",\"v\":\"370304\"},{\"l\":\"临淄区\",\"v\":\"370305\"},{\"l\":\"周村区\",\"v\":\"370306\"},{\"l\":\"桓台县\",\"v\":\"370321\"},{\"l\":\"高青县\",\"v\":\"370322\"},{\"l\":\"沂源县\",\"v\":\"370323\"}],\"l\":\"淄博市\",\"v\":\"370300\"},{\"c\":[{\"l\":\"市中区\",\"v\":\"370402\"},{\"l\":\"薛城区\",\"v\":\"370403\"},{\"l\":\"峄城区\",\"v\":\"370404\"},{\"l\":\"台儿庄区\",\"v\":\"370405\"},{\"l\":\"山亭区\",\"v\":\"370406\"},{\"l\":\"滕州市\",\"v\":\"370481\"}],\"l\":\"枣庄市\",\"v\":\"370400\"},{\"c\":[{\"l\":\"东营区\",\"v\":\"370502\"},{\"l\":\"河口区\",\"v\":\"370503\"},{\"l\":\"垦利区\",\"v\":\"370505\"},{\"l\":\"利津县\",\"v\":\"370522\"},{\"l\":\"广饶县\",\"v\":\"370523\"},{\"l\":\"东营经济技术开发区\",\"v\":\"370571\"},{\"l\":\"东营港经济开发区\",\"v\":\"370572\"}],\"l\":\"东营市\",\"v\":\"370500\"},{\"c\":[{\"l\":\"芝罘区\",\"v\":\"370602\"},{\"l\":\"福山区\",\"v\":\"370611\"},{\"l\":\"牟平区\",\"v\":\"370612\"},{\"l\":\"莱山区\",\"v\":\"370613\"},{\"l\":\"蓬莱区\",\"v\":\"370614\"},{\"l\":\"烟台高新技术产业开发区\",\"v\":\"370671\"},{\"l\":\"烟台经济技术开发区\",\"v\":\"370672\"},{\"l\":\"龙口市\",\"v\":\"370681\"},{\"l\":\"莱阳市\",\"v\":\"370682\"},{\"l\":\"莱州市\",\"v\":\"370683\"},{\"l\":\"招远市\",\"v\":\"370685\"},{\"l\":\"栖霞市\",\"v\":\"370686\"},{\"l\":\"海阳市\",\"v\":\"370687\"}],\"l\":\"烟台市\",\"v\":\"370600\"},{\"c\":[{\"l\":\"潍城区\",\"v\":\"370702\"},{\"l\":\"寒亭区\",\"v\":\"370703\"},{\"l\":\"坊子区\",\"v\":\"370704\"},{\"l\":\"奎文区\",\"v\":\"370705\"},{\"l\":\"临朐县\",\"v\":\"370724\"},{\"l\":\"昌乐县\",\"v\":\"370725\"},{\"l\":\"潍坊滨海经济技术开发区\",\"v\":\"370772\"},{\"l\":\"青州市\",\"v\":\"370781\"},{\"l\":\"诸城市\",\"v\":\"370782\"},{\"l\":\"寿光市\",\"v\":\"370783\"},{\"l\":\"安丘市\",\"v\":\"370784\"},{\"l\":\"高密市\",\"v\":\"370785\"},{\"l\":\"昌邑市\",\"v\":\"370786\"}],\"l\":\"潍坊市\",\"v\":\"370700\"},{\"c\":[{\"l\":\"任城区\",\"v\":\"370811\"},{\"l\":\"兖州区\",\"v\":\"370812\"},{\"l\":\"微山县\",\"v\":\"370826\"},{\"l\":\"鱼台县\",\"v\":\"370827\"},{\"l\":\"金乡县\",\"v\":\"370828\"},{\"l\":\"嘉祥县\",\"v\":\"370829\"},{\"l\":\"汶上县\",\"v\":\"370830\"},{\"l\":\"泗水县\",\"v\":\"370831\"},{\"l\":\"梁山县\",\"v\":\"370832\"},{\"l\":\"济宁高新技术产业开发区\",\"v\":\"370871\"},{\"l\":\"曲阜市\",\"v\":\"370881\"},{\"l\":\"邹城市\",\"v\":\"370883\"}],\"l\":\"济宁市\",\"v\":\"370800\"},{\"c\":[{\"l\":\"泰山区\",\"v\":\"370902\"},{\"l\":\"岱岳区\",\"v\":\"370911\"},{\"l\":\"宁阳县\",\"v\":\"370921\"},{\"l\":\"东平县\",\"v\":\"370923\"},{\"l\":\"新泰市\",\"v\":\"370982\"},{\"l\":\"肥城市\",\"v\":\"370983\"}],\"l\":\"泰安市\",\"v\":\"370900\"},{\"c\":[{\"l\":\"环翠区\",\"v\":\"371002\"},{\"l\":\"文登区\",\"v\":\"371003\"},{\"l\":\"威海火炬高技术产业开发区\",\"v\":\"371071\"},{\"l\":\"威海经济技术开发区\",\"v\":\"371072\"},{\"l\":\"威海临港经济技术开发区\",\"v\":\"371073\"},{\"l\":\"荣成市\",\"v\":\"371082\"},{\"l\":\"乳山市\",\"v\":\"371083\"}],\"l\":\"威海市\",\"v\":\"371000\"},{\"c\":[{\"l\":\"东港区\",\"v\":\"371102\"},{\"l\":\"岚山区\",\"v\":\"371103\"},{\"l\":\"五莲县\",\"v\":\"371121\"},{\"l\":\"莒县\",\"v\":\"371122\"},{\"l\":\"日照经济技术开发区\",\"v\":\"371171\"}],\"l\":\"日照市\",\"v\":\"371100\"},{\"c\":[{\"l\":\"兰山区\",\"v\":\"371302\"},{\"l\":\"罗庄区\",\"v\":\"371311\"},{\"l\":\"河东区\",\"v\":\"371312\"},{\"l\":\"沂南县\",\"v\":\"371321\"},{\"l\":\"郯城县\",\"v\":\"371322\"},{\"l\":\"沂水县\",\"v\":\"371323\"},{\"l\":\"兰陵县\",\"v\":\"371324\"},{\"l\":\"费县\",\"v\":\"371325\"},{\"l\":\"平邑县\",\"v\":\"371326\"},{\"l\":\"莒南县\",\"v\":\"371327\"},{\"l\":\"蒙阴县\",\"v\":\"371328\"},{\"l\":\"临沭县\",\"v\":\"371329\"},{\"l\":\"临沂高新技术产业开发区\",\"v\":\"371371\"}],\"l\":\"临沂市\",\"v\":\"371300\"},{\"c\":[{\"l\":\"德城区\",\"v\":\"371402\"},{\"l\":\"陵城区\",\"v\":\"371403\"},{\"l\":\"宁津县\",\"v\":\"371422\"},{\"l\":\"庆云县\",\"v\":\"371423\"},{\"l\":\"临邑县\",\"v\":\"371424\"},{\"l\":\"齐河县\",\"v\":\"371425\"},{\"l\":\"平原县\",\"v\":\"371426\"},{\"l\":\"夏津县\",\"v\":\"371427\"},{\"l\":\"武城县\",\"v\":\"371428\"},{\"l\":\"德州经济技术开发区\",\"v\":\"371471\"},{\"l\":\"德州运河经济开发区\",\"v\":\"371472\"},{\"l\":\"乐陵市\",\"v\":\"371481\"},{\"l\":\"禹城市\",\"v\":\"371482\"}],\"l\":\"德州市\",\"v\":\"371400\"},{\"c\":[{\"l\":\"东昌府区\",\"v\":\"371502\"},{\"l\":\"茌平区\",\"v\":\"371503\"},{\"l\":\"阳谷县\",\"v\":\"371521\"},{\"l\":\"莘县\",\"v\":\"371522\"},{\"l\":\"东阿县\",\"v\":\"371524\"},{\"l\":\"冠县\",\"v\":\"371525\"},{\"l\":\"高唐县\",\"v\":\"371526\"},{\"l\":\"临清市\",\"v\":\"371581\"}],\"l\":\"聊城市\",\"v\":\"371500\"},{\"c\":[{\"l\":\"滨城区\",\"v\":\"371602\"},{\"l\":\"沾化区\",\"v\":\"371603\"},{\"l\":\"惠民县\",\"v\":\"371621\"},{\"l\":\"阳信县\",\"v\":\"371622\"},{\"l\":\"无棣县\",\"v\":\"371623\"},{\"l\":\"博兴县\",\"v\":\"371625\"},{\"l\":\"邹平市\",\"v\":\"371681\"}],\"l\":\"滨州市\",\"v\":\"371600\"},{\"c\":[{\"l\":\"牡丹区\",\"v\":\"371702\"},{\"l\":\"定陶区\",\"v\":\"371703\"},{\"l\":\"曹县\",\"v\":\"371721\"},{\"l\":\"单县\",\"v\":\"371722\"},{\"l\":\"成武县\",\"v\":\"371723\"},{\"l\":\"巨野县\",\"v\":\"371724\"},{\"l\":\"郓城县\",\"v\":\"371725\"},{\"l\":\"鄄城县\",\"v\":\"371726\"},{\"l\":\"东明县\",\"v\":\"371728\"},{\"l\":\"菏泽经济技术开发区\",\"v\":\"371771\"},{\"l\":\"菏泽高新技术开发区\",\"v\":\"371772\"}],\"l\":\"菏泽市\",\"v\":\"371700\"}],\"l\":\"山东省\",\"v\":\"370000\"},{\"c\":[{\"c\":[{\"l\":\"中原区\",\"v\":\"410102\"},{\"l\":\"二七区\",\"v\":\"410103\"},{\"l\":\"管城回族区\",\"v\":\"410104\"},{\"l\":\"金水区\",\"v\":\"410105\"},{\"l\":\"上街区\",\"v\":\"410106\"},{\"l\":\"惠济区\",\"v\":\"410108\"},{\"l\":\"中牟县\",\"v\":\"410122\"},{\"l\":\"郑州经济技术开发区\",\"v\":\"410171\"},{\"l\":\"郑州高新技术产业开发区\",\"v\":\"410172\"},{\"l\":\"郑州航空港经济综合实验区\",\"v\":\"410173\"},{\"l\":\"巩义市\",\"v\":\"410181\"},{\"l\":\"荥阳市\",\"v\":\"410182\"},{\"l\":\"新密市\",\"v\":\"410183\"},{\"l\":\"新郑市\",\"v\":\"410184\"},{\"l\":\"登封市\",\"v\":\"410185\"}],\"l\":\"郑州市\",\"v\":\"410100\"},{\"c\":[{\"l\":\"龙亭区\",\"v\":\"410202\"},{\"l\":\"顺河回族区\",\"v\":\"410203\"},{\"l\":\"鼓楼区\",\"v\":\"410204\"},{\"l\":\"禹王台区\",\"v\":\"410205\"},{\"l\":\"祥符区\",\"v\":\"410212\"},{\"l\":\"杞县\",\"v\":\"410221\"},{\"l\":\"通许县\",\"v\":\"410222\"},{\"l\":\"尉氏县\",\"v\":\"410223\"},{\"l\":\"兰考县\",\"v\":\"410225\"}],\"l\":\"开封市\",\"v\":\"410200\"},{\"c\":[{\"l\":\"老城区\",\"v\":\"410302\"},{\"l\":\"西工区\",\"v\":\"410303\"},{\"l\":\"瀍河回族区\",\"v\":\"410304\"},{\"l\":\"涧西区\",\"v\":\"410305\"},{\"l\":\"吉利区\",\"v\":\"410306\"},{\"l\":\"洛龙区\",\"v\":\"410311\"},{\"l\":\"孟津县\",\"v\":\"410322\"},{\"l\":\"新安县\",\"v\":\"410323\"},{\"l\":\"栾川县\",\"v\":\"410324\"},{\"l\":\"嵩县\",\"v\":\"410325\"},{\"l\":\"汝阳县\",\"v\":\"410326\"},{\"l\":\"宜阳县\",\"v\":\"410327\"},{\"l\":\"洛宁县\",\"v\":\"410328\"},{\"l\":\"伊川县\",\"v\":\"410329\"},{\"l\":\"洛阳高新技术产业开发区\",\"v\":\"410371\"},{\"l\":\"偃师市\",\"v\":\"410381\"}],\"l\":\"洛阳市\",\"v\":\"410300\"},{\"c\":[{\"l\":\"新华区\",\"v\":\"410402\"},{\"l\":\"卫东区\",\"v\":\"410403\"},{\"l\":\"石龙区\",\"v\":\"410404\"},{\"l\":\"湛河区\",\"v\":\"410411\"},{\"l\":\"宝丰县\",\"v\":\"410421\"},{\"l\":\"叶县\",\"v\":\"410422\"},{\"l\":\"鲁山县\",\"v\":\"410423\"},{\"l\":\"郏县\",\"v\":\"410425\"},{\"l\":\"平顶山高新技术产业开发区\",\"v\":\"410471\"},{\"l\":\"平顶山市城乡一体化示范区\",\"v\":\"410472\"},{\"l\":\"舞钢市\",\"v\":\"410481\"},{\"l\":\"汝州市\",\"v\":\"410482\"}],\"l\":\"平顶山市\",\"v\":\"410400\"},{\"c\":[{\"l\":\"文峰区\",\"v\":\"410502\"},{\"l\":\"北关区\",\"v\":\"410503\"},{\"l\":\"殷都区\",\"v\":\"410505\"},{\"l\":\"龙安区\",\"v\":\"410506\"},{\"l\":\"安阳县\",\"v\":\"410522\"},{\"l\":\"汤阴县\",\"v\":\"410523\"},{\"l\":\"滑县\",\"v\":\"410526\"},{\"l\":\"内黄县\",\"v\":\"410527\"},{\"l\":\"安阳高新技术产业开发区\",\"v\":\"410571\"},{\"l\":\"林州市\",\"v\":\"410581\"}],\"l\":\"安阳市\",\"v\":\"410500\"},{\"c\":[{\"l\":\"鹤山区\",\"v\":\"410602\"},{\"l\":\"山城区\",\"v\":\"410603\"},{\"l\":\"淇滨区\",\"v\":\"410611\"},{\"l\":\"浚县\",\"v\":\"410621\"},{\"l\":\"淇县\",\"v\":\"410622\"},{\"l\":\"鹤壁经济技术开发区\",\"v\":\"410671\"}],\"l\":\"鹤壁市\",\"v\":\"410600\"},{\"c\":[{\"l\":\"红旗区\",\"v\":\"410702\"},{\"l\":\"卫滨区\",\"v\":\"410703\"},{\"l\":\"凤泉区\",\"v\":\"410704\"},{\"l\":\"牧野区\",\"v\":\"410711\"},{\"l\":\"新乡县\",\"v\":\"410721\"},{\"l\":\"获嘉县\",\"v\":\"410724\"},{\"l\":\"原阳县\",\"v\":\"410725\"},{\"l\":\"延津县\",\"v\":\"410726\"},{\"l\":\"封丘县\",\"v\":\"410727\"},{\"l\":\"新乡高新技术产业开发区\",\"v\":\"410771\"},{\"l\":\"新乡经济技术开发区\",\"v\":\"410772\"},{\"l\":\"新乡市平原城乡一体化示范区\",\"v\":\"410773\"},{\"l\":\"卫辉市\",\"v\":\"410781\"},{\"l\":\"辉县市\",\"v\":\"410782\"},{\"l\":\"长垣市\",\"v\":\"410783\"}],\"l\":\"新乡市\",\"v\":\"410700\"},{\"c\":[{\"l\":\"解放区\",\"v\":\"410802\"},{\"l\":\"中站区\",\"v\":\"410803\"},{\"l\":\"马村区\",\"v\":\"410804\"},{\"l\":\"山阳区\",\"v\":\"410811\"},{\"l\":\"修武县\",\"v\":\"410821\"},{\"l\":\"博爱县\",\"v\":\"410822\"},{\"l\":\"武陟县\",\"v\":\"410823\"},{\"l\":\"温县\",\"v\":\"410825\"},{\"l\":\"焦作城乡一体化示范区\",\"v\":\"410871\"},{\"l\":\"沁阳市\",\"v\":\"410882\"},{\"l\":\"孟州市\",\"v\":\"410883\"}],\"l\":\"焦作市\",\"v\":\"410800\"},{\"c\":[{\"l\":\"华龙区\",\"v\":\"410902\"},{\"l\":\"清丰县\",\"v\":\"410922\"},{\"l\":\"南乐县\",\"v\":\"410923\"},{\"l\":\"范县\",\"v\":\"410926\"},{\"l\":\"台前县\",\"v\":\"410927\"},{\"l\":\"濮阳县\",\"v\":\"410928\"},{\"l\":\"河南濮阳工业园区\",\"v\":\"410971\"},{\"l\":\"濮阳经济技术开发区\",\"v\":\"410972\"}],\"l\":\"濮阳市\",\"v\":\"410900\"},{\"c\":[{\"l\":\"魏都区\",\"v\":\"411002\"},{\"l\":\"建安区\",\"v\":\"411003\"},{\"l\":\"鄢陵县\",\"v\":\"411024\"},{\"l\":\"襄城县\",\"v\":\"411025\"},{\"l\":\"许昌经济技术开发区\",\"v\":\"411071\"},{\"l\":\"禹州市\",\"v\":\"411081\"},{\"l\":\"长葛市\",\"v\":\"411082\"}],\"l\":\"许昌市\",\"v\":\"411000\"},{\"c\":[{\"l\":\"源汇区\",\"v\":\"411102\"},{\"l\":\"郾城区\",\"v\":\"411103\"},{\"l\":\"召陵区\",\"v\":\"411104\"},{\"l\":\"舞阳县\",\"v\":\"411121\"},{\"l\":\"临颍县\",\"v\":\"411122\"},{\"l\":\"漯河经济技术开发区\",\"v\":\"411171\"}],\"l\":\"漯河市\",\"v\":\"411100\"},{\"c\":[{\"l\":\"湖滨区\",\"v\":\"411202\"},{\"l\":\"陕州区\",\"v\":\"411203\"},{\"l\":\"渑池县\",\"v\":\"411221\"},{\"l\":\"卢氏县\",\"v\":\"411224\"},{\"l\":\"河南三门峡经济开发区\",\"v\":\"411271\"},{\"l\":\"义马市\",\"v\":\"411281\"},{\"l\":\"灵宝市\",\"v\":\"411282\"}],\"l\":\"三门峡市\",\"v\":\"411200\"},{\"c\":[{\"l\":\"宛城区\",\"v\":\"411302\"},{\"l\":\"卧龙区\",\"v\":\"411303\"},{\"l\":\"南召县\",\"v\":\"411321\"},{\"l\":\"方城县\",\"v\":\"411322\"},{\"l\":\"西峡县\",\"v\":\"411323\"},{\"l\":\"镇平县\",\"v\":\"411324\"},{\"l\":\"内乡县\",\"v\":\"411325\"},{\"l\":\"淅川县\",\"v\":\"411326\"},{\"l\":\"社旗县\",\"v\":\"411327\"},{\"l\":\"唐河县\",\"v\":\"411328\"},{\"l\":\"新野县\",\"v\":\"411329\"},{\"l\":\"桐柏县\",\"v\":\"411330\"},{\"l\":\"南阳高新技术产业开发区\",\"v\":\"411371\"},{\"l\":\"南阳市城乡一体化示范区\",\"v\":\"411372\"},{\"l\":\"邓州市\",\"v\":\"411381\"}],\"l\":\"南阳市\",\"v\":\"411300\"},{\"c\":[{\"l\":\"梁园区\",\"v\":\"411402\"},{\"l\":\"睢阳区\",\"v\":\"411403\"},{\"l\":\"民权县\",\"v\":\"411421\"},{\"l\":\"睢县\",\"v\":\"411422\"},{\"l\":\"宁陵县\",\"v\":\"411423\"},{\"l\":\"柘城县\",\"v\":\"411424\"},{\"l\":\"虞城县\",\"v\":\"411425\"},{\"l\":\"夏邑县\",\"v\":\"411426\"},{\"l\":\"豫东综合物流产业聚集区\",\"v\":\"411471\"},{\"l\":\"河南商丘经济开发区\",\"v\":\"411472\"},{\"l\":\"永城市\",\"v\":\"411481\"}],\"l\":\"商丘市\",\"v\":\"411400\"},{\"c\":[{\"l\":\"浉河区\",\"v\":\"411502\"},{\"l\":\"平桥区\",\"v\":\"411503\"},{\"l\":\"罗山县\",\"v\":\"411521\"},{\"l\":\"光山县\",\"v\":\"411522\"},{\"l\":\"新县\",\"v\":\"411523\"},{\"l\":\"商城县\",\"v\":\"411524\"},{\"l\":\"固始县\",\"v\":\"411525\"},{\"l\":\"潢川县\",\"v\":\"411526\"},{\"l\":\"淮滨县\",\"v\":\"411527\"},{\"l\":\"息县\",\"v\":\"411528\"},{\"l\":\"信阳高新技术产业开发区\",\"v\":\"411571\"}],\"l\":\"信阳市\",\"v\":\"411500\"},{\"c\":[{\"l\":\"川汇区\",\"v\":\"411602\"},{\"l\":\"淮阳区\",\"v\":\"411603\"},{\"l\":\"扶沟县\",\"v\":\"411621\"},{\"l\":\"西华县\",\"v\":\"411622\"},{\"l\":\"商水县\",\"v\":\"411623\"},{\"l\":\"沈丘县\",\"v\":\"411624\"},{\"l\":\"郸城县\",\"v\":\"411625\"},{\"l\":\"太康县\",\"v\":\"411627\"},{\"l\":\"鹿邑县\",\"v\":\"411628\"},{\"l\":\"河南周口经济开发区\",\"v\":\"411671\"},{\"l\":\"项城市\",\"v\":\"411681\"}],\"l\":\"周口市\",\"v\":\"411600\"},{\"c\":[{\"l\":\"驿城区\",\"v\":\"411702\"},{\"l\":\"西平县\",\"v\":\"411721\"},{\"l\":\"上蔡县\",\"v\":\"411722\"},{\"l\":\"平舆县\",\"v\":\"411723\"},{\"l\":\"正阳县\",\"v\":\"411724\"},{\"l\":\"确山县\",\"v\":\"411725\"},{\"l\":\"泌阳县\",\"v\":\"411726\"},{\"l\":\"汝南县\",\"v\":\"411727\"},{\"l\":\"遂平县\",\"v\":\"411728\"},{\"l\":\"新蔡县\",\"v\":\"411729\"},{\"l\":\"河南驻马店经济开发区\",\"v\":\"411771\"}],\"l\":\"驻马店市\",\"v\":\"411700\"},{\"c\":[{\"l\":\"济源市\",\"v\":\"419001\"}],\"l\":\"省直辖县级行政区划\",\"v\":\"419000\"}],\"l\":\"河南省\",\"v\":\"410000\"},{\"c\":[{\"c\":[{\"l\":\"江岸区\",\"v\":\"420102\"},{\"l\":\"江汉区\",\"v\":\"420103\"},{\"l\":\"硚口区\",\"v\":\"420104\"},{\"l\":\"汉阳区\",\"v\":\"420105\"},{\"l\":\"武昌区\",\"v\":\"420106\"},{\"l\":\"青山区\",\"v\":\"420107\"},{\"l\":\"洪山区\",\"v\":\"420111\"},{\"l\":\"东西湖区\",\"v\":\"420112\"},{\"l\":\"汉南区\",\"v\":\"420113\"},{\"l\":\"蔡甸区\",\"v\":\"420114\"},{\"l\":\"江夏区\",\"v\":\"420115\"},{\"l\":\"黄陂区\",\"v\":\"420116\"},{\"l\":\"新洲区\",\"v\":\"420117\"}],\"l\":\"武汉市\",\"v\":\"420100\"},{\"c\":[{\"l\":\"黄石港区\",\"v\":\"420202\"},{\"l\":\"西塞山区\",\"v\":\"420203\"},{\"l\":\"下陆区\",\"v\":\"420204\"},{\"l\":\"铁山区\",\"v\":\"420205\"},{\"l\":\"阳新县\",\"v\":\"420222\"},{\"l\":\"大冶市\",\"v\":\"420281\"}],\"l\":\"黄石市\",\"v\":\"420200\"},{\"c\":[{\"l\":\"茅箭区\",\"v\":\"420302\"},{\"l\":\"张湾区\",\"v\":\"420303\"},{\"l\":\"郧阳区\",\"v\":\"420304\"},{\"l\":\"郧西县\",\"v\":\"420322\"},{\"l\":\"竹山县\",\"v\":\"420323\"},{\"l\":\"竹溪县\",\"v\":\"420324\"},{\"l\":\"房县\",\"v\":\"420325\"},{\"l\":\"丹江口市\",\"v\":\"420381\"}],\"l\":\"十堰市\",\"v\":\"420300\"},{\"c\":[{\"l\":\"西陵区\",\"v\":\"420502\"},{\"l\":\"伍家岗区\",\"v\":\"420503\"},{\"l\":\"点军区\",\"v\":\"420504\"},{\"l\":\"猇亭区\",\"v\":\"420505\"},{\"l\":\"夷陵区\",\"v\":\"420506\"},{\"l\":\"远安县\",\"v\":\"420525\"},{\"l\":\"兴山县\",\"v\":\"420526\"},{\"l\":\"秭归县\",\"v\":\"420527\"},{\"l\":\"长阳土家族自治县\",\"v\":\"420528\"},{\"l\":\"五峰土家族自治县\",\"v\":\"420529\"},{\"l\":\"宜都市\",\"v\":\"420581\"},{\"l\":\"当阳市\",\"v\":\"420582\"},{\"l\":\"枝江市\",\"v\":\"420583\"}],\"l\":\"宜昌市\",\"v\":\"420500\"},{\"c\":[{\"l\":\"襄城区\",\"v\":\"420602\"},{\"l\":\"樊城区\",\"v\":\"420606\"},{\"l\":\"襄州区\",\"v\":\"420607\"},{\"l\":\"南漳县\",\"v\":\"420624\"},{\"l\":\"谷城县\",\"v\":\"420625\"},{\"l\":\"保康县\",\"v\":\"420626\"},{\"l\":\"老河口市\",\"v\":\"420682\"},{\"l\":\"枣阳市\",\"v\":\"420683\"},{\"l\":\"宜城市\",\"v\":\"420684\"}],\"l\":\"襄阳市\",\"v\":\"420600\"},{\"c\":[{\"l\":\"梁子湖区\",\"v\":\"420702\"},{\"l\":\"华容区\",\"v\":\"420703\"},{\"l\":\"鄂城区\",\"v\":\"420704\"}],\"l\":\"鄂州市\",\"v\":\"420700\"},{\"c\":[{\"l\":\"东宝区\",\"v\":\"420802\"},{\"l\":\"掇刀区\",\"v\":\"420804\"},{\"l\":\"沙洋县\",\"v\":\"420822\"},{\"l\":\"钟祥市\",\"v\":\"420881\"},{\"l\":\"京山市\",\"v\":\"420882\"}],\"l\":\"荆门市\",\"v\":\"420800\"},{\"c\":[{\"l\":\"孝南区\",\"v\":\"420902\"},{\"l\":\"孝昌县\",\"v\":\"420921\"},{\"l\":\"大悟县\",\"v\":\"420922\"},{\"l\":\"云梦县\",\"v\":\"420923\"},{\"l\":\"应城市\",\"v\":\"420981\"},{\"l\":\"安陆市\",\"v\":\"420982\"},{\"l\":\"汉川市\",\"v\":\"420984\"}],\"l\":\"孝感市\",\"v\":\"420900\"},{\"c\":[{\"l\":\"沙市区\",\"v\":\"421002\"},{\"l\":\"荆州区\",\"v\":\"421003\"},{\"l\":\"公安县\",\"v\":\"421022\"},{\"l\":\"监利县\",\"v\":\"421023\"},{\"l\":\"江陵县\",\"v\":\"421024\"},{\"l\":\"荆州经济技术开发区\",\"v\":\"421071\"},{\"l\":\"石首市\",\"v\":\"421081\"},{\"l\":\"洪湖市\",\"v\":\"421083\"},{\"l\":\"松滋市\",\"v\":\"421087\"}],\"l\":\"荆州市\",\"v\":\"421000\"},{\"c\":[{\"l\":\"黄州区\",\"v\":\"421102\"},{\"l\":\"团风县\",\"v\":\"421121\"},{\"l\":\"红安县\",\"v\":\"421122\"},{\"l\":\"罗田县\",\"v\":\"421123\"},{\"l\":\"英山县\",\"v\":\"421124\"},{\"l\":\"浠水县\",\"v\":\"421125\"},{\"l\":\"蕲春县\",\"v\":\"421126\"},{\"l\":\"黄梅县\",\"v\":\"421127\"},{\"l\":\"龙感湖管理区\",\"v\":\"421171\"},{\"l\":\"麻城市\",\"v\":\"421181\"},{\"l\":\"武穴市\",\"v\":\"421182\"}],\"l\":\"黄冈市\",\"v\":\"421100\"},{\"c\":[{\"l\":\"咸安区\",\"v\":\"421202\"},{\"l\":\"嘉鱼县\",\"v\":\"421221\"},{\"l\":\"通城县\",\"v\":\"421222\"},{\"l\":\"崇阳县\",\"v\":\"421223\"},{\"l\":\"通山县\",\"v\":\"421224\"},{\"l\":\"赤壁市\",\"v\":\"421281\"}],\"l\":\"咸宁市\",\"v\":\"421200\"},{\"c\":[{\"l\":\"曾都区\",\"v\":\"421303\"},{\"l\":\"随县\",\"v\":\"421321\"},{\"l\":\"广水市\",\"v\":\"421381\"}],\"l\":\"随州市\",\"v\":\"421300\"},{\"c\":[{\"l\":\"恩施市\",\"v\":\"422801\"},{\"l\":\"利川市\",\"v\":\"422802\"},{\"l\":\"建始县\",\"v\":\"422822\"},{\"l\":\"巴东县\",\"v\":\"422823\"},{\"l\":\"宣恩县\",\"v\":\"422825\"},{\"l\":\"咸丰县\",\"v\":\"422826\"},{\"l\":\"来凤县\",\"v\":\"422827\"},{\"l\":\"鹤峰县\",\"v\":\"422828\"}],\"l\":\"恩施土家族苗族自治州\",\"v\":\"422800\"},{\"c\":[{\"l\":\"仙桃市\",\"v\":\"429004\"},{\"l\":\"潜江市\",\"v\":\"429005\"},{\"l\":\"天门市\",\"v\":\"429006\"},{\"l\":\"神农架林区\",\"v\":\"429021\"}],\"l\":\"省直辖县级行政区划\",\"v\":\"429000\"}],\"l\":\"湖北省\",\"v\":\"420000\"},{\"c\":[{\"c\":[{\"l\":\"芙蓉区\",\"v\":\"430102\"},{\"l\":\"天心区\",\"v\":\"430103\"},{\"l\":\"岳麓区\",\"v\":\"430104\"},{\"l\":\"开福区\",\"v\":\"430105\"},{\"l\":\"雨花区\",\"v\":\"430111\"},{\"l\":\"望城区\",\"v\":\"430112\"},{\"l\":\"长沙县\",\"v\":\"430121\"},{\"l\":\"浏阳市\",\"v\":\"430181\"},{\"l\":\"宁乡市\",\"v\":\"430182\"}],\"l\":\"长沙市\",\"v\":\"430100\"},{\"c\":[{\"l\":\"荷塘区\",\"v\":\"430202\"},{\"l\":\"芦淞区\",\"v\":\"430203\"},{\"l\":\"石峰区\",\"v\":\"430204\"},{\"l\":\"天元区\",\"v\":\"430211\"},{\"l\":\"渌口区\",\"v\":\"430212\"},{\"l\":\"攸县\",\"v\":\"430223\"},{\"l\":\"茶陵县\",\"v\":\"430224\"},{\"l\":\"炎陵县\",\"v\":\"430225\"},{\"l\":\"云龙示范区\",\"v\":\"430271\"},{\"l\":\"醴陵市\",\"v\":\"430281\"}],\"l\":\"株洲市\",\"v\":\"430200\"},{\"c\":[{\"l\":\"雨湖区\",\"v\":\"430302\"},{\"l\":\"岳塘区\",\"v\":\"430304\"},{\"l\":\"湘潭县\",\"v\":\"430321\"},{\"l\":\"湖南湘潭高新技术产业园区\",\"v\":\"430371\"},{\"l\":\"湘潭昭山示范区\",\"v\":\"430372\"},{\"l\":\"湘潭九华示范区\",\"v\":\"430373\"},{\"l\":\"湘乡市\",\"v\":\"430381\"},{\"l\":\"韶山市\",\"v\":\"430382\"}],\"l\":\"湘潭市\",\"v\":\"430300\"},{\"c\":[{\"l\":\"珠晖区\",\"v\":\"430405\"},{\"l\":\"雁峰区\",\"v\":\"430406\"},{\"l\":\"石鼓区\",\"v\":\"430407\"},{\"l\":\"蒸湘区\",\"v\":\"430408\"},{\"l\":\"南岳区\",\"v\":\"430412\"},{\"l\":\"衡阳县\",\"v\":\"430421\"},{\"l\":\"衡南县\",\"v\":\"430422\"},{\"l\":\"衡山县\",\"v\":\"430423\"},{\"l\":\"衡东县\",\"v\":\"430424\"},{\"l\":\"祁东县\",\"v\":\"430426\"},{\"l\":\"衡阳综合保税区\",\"v\":\"430471\"},{\"l\":\"湖南衡阳高新技术产业园区\",\"v\":\"430472\"},{\"l\":\"湖南衡阳松木经济开发区\",\"v\":\"430473\"},{\"l\":\"耒阳市\",\"v\":\"430481\"},{\"l\":\"常宁市\",\"v\":\"430482\"}],\"l\":\"衡阳市\",\"v\":\"430400\"},{\"c\":[{\"l\":\"双清区\",\"v\":\"430502\"},{\"l\":\"大祥区\",\"v\":\"430503\"},{\"l\":\"北塔区\",\"v\":\"430511\"},{\"l\":\"新邵县\",\"v\":\"430522\"},{\"l\":\"邵阳县\",\"v\":\"430523\"},{\"l\":\"隆回县\",\"v\":\"430524\"},{\"l\":\"洞口县\",\"v\":\"430525\"},{\"l\":\"绥宁县\",\"v\":\"430527\"},{\"l\":\"新宁县\",\"v\":\"430528\"},{\"l\":\"城步苗族自治县\",\"v\":\"430529\"},{\"l\":\"武冈市\",\"v\":\"430581\"},{\"l\":\"邵东市\",\"v\":\"430582\"}],\"l\":\"邵阳市\",\"v\":\"430500\"},{\"c\":[{\"l\":\"岳阳楼区\",\"v\":\"430602\"},{\"l\":\"云溪区\",\"v\":\"430603\"},{\"l\":\"君山区\",\"v\":\"430611\"},{\"l\":\"岳阳县\",\"v\":\"430621\"},{\"l\":\"华容县\",\"v\":\"430623\"},{\"l\":\"湘阴县\",\"v\":\"430624\"},{\"l\":\"平江县\",\"v\":\"430626\"},{\"l\":\"岳阳市屈原管理区\",\"v\":\"430671\"},{\"l\":\"汨罗市\",\"v\":\"430681\"},{\"l\":\"临湘市\",\"v\":\"430682\"}],\"l\":\"岳阳市\",\"v\":\"430600\"},{\"c\":[{\"l\":\"武陵区\",\"v\":\"430702\"},{\"l\":\"鼎城区\",\"v\":\"430703\"},{\"l\":\"安乡县\",\"v\":\"430721\"},{\"l\":\"汉寿县\",\"v\":\"430722\"},{\"l\":\"澧县\",\"v\":\"430723\"},{\"l\":\"临澧县\",\"v\":\"430724\"},{\"l\":\"桃源县\",\"v\":\"430725\"},{\"l\":\"石门县\",\"v\":\"430726\"},{\"l\":\"常德市西洞庭管理区\",\"v\":\"430771\"},{\"l\":\"津市市\",\"v\":\"430781\"}],\"l\":\"常德市\",\"v\":\"430700\"},{\"c\":[{\"l\":\"永定区\",\"v\":\"430802\"},{\"l\":\"武陵源区\",\"v\":\"430811\"},{\"l\":\"慈利县\",\"v\":\"430821\"},{\"l\":\"桑植县\",\"v\":\"430822\"}],\"l\":\"张家界市\",\"v\":\"430800\"},{\"c\":[{\"l\":\"资阳区\",\"v\":\"430902\"},{\"l\":\"赫山区\",\"v\":\"430903\"},{\"l\":\"南县\",\"v\":\"430921\"},{\"l\":\"桃江县\",\"v\":\"430922\"},{\"l\":\"安化县\",\"v\":\"430923\"},{\"l\":\"益阳市大通湖管理区\",\"v\":\"430971\"},{\"l\":\"湖南益阳高新技术产业园区\",\"v\":\"430972\"},{\"l\":\"沅江市\",\"v\":\"430981\"}],\"l\":\"益阳市\",\"v\":\"430900\"},{\"c\":[{\"l\":\"北湖区\",\"v\":\"431002\"},{\"l\":\"苏仙区\",\"v\":\"431003\"},{\"l\":\"桂阳县\",\"v\":\"431021\"},{\"l\":\"宜章县\",\"v\":\"431022\"},{\"l\":\"永兴县\",\"v\":\"431023\"},{\"l\":\"嘉禾县\",\"v\":\"431024\"},{\"l\":\"临武县\",\"v\":\"431025\"},{\"l\":\"汝城县\",\"v\":\"431026\"},{\"l\":\"桂东县\",\"v\":\"431027\"},{\"l\":\"安仁县\",\"v\":\"431028\"},{\"l\":\"资兴市\",\"v\":\"431081\"}],\"l\":\"郴州市\",\"v\":\"431000\"},{\"c\":[{\"l\":\"零陵区\",\"v\":\"431102\"},{\"l\":\"冷水滩区\",\"v\":\"431103\"},{\"l\":\"祁阳县\",\"v\":\"431121\"},{\"l\":\"东安县\",\"v\":\"431122\"},{\"l\":\"双牌县\",\"v\":\"431123\"},{\"l\":\"道县\",\"v\":\"431124\"},{\"l\":\"江永县\",\"v\":\"431125\"},{\"l\":\"宁远县\",\"v\":\"431126\"},{\"l\":\"蓝山县\",\"v\":\"431127\"},{\"l\":\"新田县\",\"v\":\"431128\"},{\"l\":\"江华瑶族自治县\",\"v\":\"431129\"},{\"l\":\"永州经济技术开发区\",\"v\":\"431171\"},{\"l\":\"永州市金洞管理区\",\"v\":\"431172\"},{\"l\":\"永州市回龙圩管理区\",\"v\":\"431173\"}],\"l\":\"永州市\",\"v\":\"431100\"},{\"c\":[{\"l\":\"鹤城区\",\"v\":\"431202\"},{\"l\":\"中方县\",\"v\":\"431221\"},{\"l\":\"沅陵县\",\"v\":\"431222\"},{\"l\":\"辰溪县\",\"v\":\"431223\"},{\"l\":\"溆浦县\",\"v\":\"431224\"},{\"l\":\"会同县\",\"v\":\"431225\"},{\"l\":\"麻阳苗族自治县\",\"v\":\"431226\"},{\"l\":\"新晃侗族自治县\",\"v\":\"431227\"},{\"l\":\"芷江侗族自治县\",\"v\":\"431228\"},{\"l\":\"靖州苗族侗族自治县\",\"v\":\"431229\"},{\"l\":\"通道侗族自治县\",\"v\":\"431230\"},{\"l\":\"怀化市洪江管理区\",\"v\":\"431271\"},{\"l\":\"洪江市\",\"v\":\"431281\"}],\"l\":\"怀化市\",\"v\":\"431200\"},{\"c\":[{\"l\":\"娄星区\",\"v\":\"431302\"},{\"l\":\"双峰县\",\"v\":\"431321\"},{\"l\":\"新化县\",\"v\":\"431322\"},{\"l\":\"冷水江市\",\"v\":\"431381\"},{\"l\":\"涟源市\",\"v\":\"431382\"}],\"l\":\"娄底市\",\"v\":\"431300\"},{\"c\":[{\"l\":\"吉首市\",\"v\":\"433101\"},{\"l\":\"泸溪县\",\"v\":\"433122\"},{\"l\":\"凤凰县\",\"v\":\"433123\"},{\"l\":\"花垣县\",\"v\":\"433124\"},{\"l\":\"保靖县\",\"v\":\"433125\"},{\"l\":\"古丈县\",\"v\":\"433126\"},{\"l\":\"永顺县\",\"v\":\"433127\"},{\"l\":\"龙山县\",\"v\":\"433130\"}],\"l\":\"湘西土家族苗族自治州\",\"v\":\"433100\"}],\"l\":\"湖南省\",\"v\":\"430000\"},{\"c\":[{\"c\":[{\"l\":\"荔湾区\",\"v\":\"440103\"},{\"l\":\"越秀区\",\"v\":\"440104\"},{\"l\":\"海珠区\",\"v\":\"440105\"},{\"l\":\"天河区\",\"v\":\"440106\"},{\"l\":\"白云区\",\"v\":\"440111\"},{\"l\":\"黄埔区\",\"v\":\"440112\"},{\"l\":\"番禺区\",\"v\":\"440113\"},{\"l\":\"花都区\",\"v\":\"440114\"},{\"l\":\"南沙区\",\"v\":\"440115\"},{\"l\":\"从化区\",\"v\":\"440117\"},{\"l\":\"增城区\",\"v\":\"440118\"}],\"l\":\"广州市\",\"v\":\"440100\"},{\"c\":[{\"l\":\"武江区\",\"v\":\"440203\"},{\"l\":\"浈江区\",\"v\":\"440204\"},{\"l\":\"曲江区\",\"v\":\"440205\"},{\"l\":\"始兴县\",\"v\":\"440222\"},{\"l\":\"仁化县\",\"v\":\"440224\"},{\"l\":\"翁源县\",\"v\":\"440229\"},{\"l\":\"乳源瑶族自治县\",\"v\":\"440232\"},{\"l\":\"新丰县\",\"v\":\"440233\"},{\"l\":\"乐昌市\",\"v\":\"440281\"},{\"l\":\"南雄市\",\"v\":\"440282\"}],\"l\":\"韶关市\",\"v\":\"440200\"},{\"c\":[{\"l\":\"罗湖区\",\"v\":\"440303\"},{\"l\":\"福田区\",\"v\":\"440304\"},{\"l\":\"南山区\",\"v\":\"440305\"},{\"l\":\"宝安区\",\"v\":\"440306\"},{\"l\":\"龙岗区\",\"v\":\"440307\"},{\"l\":\"盐田区\",\"v\":\"440308\"},{\"l\":\"龙华区\",\"v\":\"440309\"},{\"l\":\"坪山区\",\"v\":\"440310\"},{\"l\":\"光明区\",\"v\":\"440311\"}],\"l\":\"深圳市\",\"v\":\"440300\"},{\"c\":[{\"l\":\"香洲区\",\"v\":\"440402\"},{\"l\":\"斗门区\",\"v\":\"440403\"},{\"l\":\"金湾区\",\"v\":\"440404\"}],\"l\":\"珠海市\",\"v\":\"440400\"},{\"c\":[{\"l\":\"龙湖区\",\"v\":\"440507\"},{\"l\":\"金平区\",\"v\":\"440511\"},{\"l\":\"濠江区\",\"v\":\"440512\"},{\"l\":\"潮阳区\",\"v\":\"440513\"},{\"l\":\"潮南区\",\"v\":\"440514\"},{\"l\":\"澄海区\",\"v\":\"440515\"},{\"l\":\"南澳县\",\"v\":\"440523\"}],\"l\":\"汕头市\",\"v\":\"440500\"},{\"c\":[{\"l\":\"禅城区\",\"v\":\"440604\"},{\"l\":\"南海区\",\"v\":\"440605\"},{\"l\":\"顺德区\",\"v\":\"440606\"},{\"l\":\"三水区\",\"v\":\"440607\"},{\"l\":\"高明区\",\"v\":\"440608\"}],\"l\":\"佛山市\",\"v\":\"440600\"},{\"c\":[{\"l\":\"蓬江区\",\"v\":\"440703\"},{\"l\":\"江海区\",\"v\":\"440704\"},{\"l\":\"新会区\",\"v\":\"440705\"},{\"l\":\"台山市\",\"v\":\"440781\"},{\"l\":\"开平市\",\"v\":\"440783\"},{\"l\":\"鹤山市\",\"v\":\"440784\"},{\"l\":\"恩平市\",\"v\":\"440785\"}],\"l\":\"江门市\",\"v\":\"440700\"},{\"c\":[{\"l\":\"赤坎区\",\"v\":\"440802\"},{\"l\":\"霞山区\",\"v\":\"440803\"},{\"l\":\"坡头区\",\"v\":\"440804\"},{\"l\":\"麻章区\",\"v\":\"440811\"},{\"l\":\"遂溪县\",\"v\":\"440823\"},{\"l\":\"徐闻县\",\"v\":\"440825\"},{\"l\":\"廉江市\",\"v\":\"440881\"},{\"l\":\"雷州市\",\"v\":\"440882\"},{\"l\":\"吴川市\",\"v\":\"440883\"}],\"l\":\"湛江市\",\"v\":\"440800\"},{\"c\":[{\"l\":\"茂南区\",\"v\":\"440902\"},{\"l\":\"电白区\",\"v\":\"440904\"},{\"l\":\"高州市\",\"v\":\"440981\"},{\"l\":\"化州市\",\"v\":\"440982\"},{\"l\":\"信宜市\",\"v\":\"440983\"}],\"l\":\"茂名市\",\"v\":\"440900\"},{\"c\":[{\"l\":\"端州区\",\"v\":\"441202\"},{\"l\":\"鼎湖区\",\"v\":\"441203\"},{\"l\":\"高要区\",\"v\":\"441204\"},{\"l\":\"广宁县\",\"v\":\"441223\"},{\"l\":\"怀集县\",\"v\":\"441224\"},{\"l\":\"封开县\",\"v\":\"441225\"},{\"l\":\"德庆县\",\"v\":\"441226\"},{\"l\":\"四会市\",\"v\":\"441284\"}],\"l\":\"肇庆市\",\"v\":\"441200\"},{\"c\":[{\"l\":\"惠城区\",\"v\":\"441302\"},{\"l\":\"惠阳区\",\"v\":\"441303\"},{\"l\":\"博罗县\",\"v\":\"441322\"},{\"l\":\"惠东县\",\"v\":\"441323\"},{\"l\":\"龙门县\",\"v\":\"441324\"}],\"l\":\"惠州市\",\"v\":\"441300\"},{\"c\":[{\"l\":\"梅江区\",\"v\":\"441402\"},{\"l\":\"梅县区\",\"v\":\"441403\"},{\"l\":\"大埔县\",\"v\":\"441422\"},{\"l\":\"丰顺县\",\"v\":\"441423\"},{\"l\":\"五华县\",\"v\":\"441424\"},{\"l\":\"平远县\",\"v\":\"441426\"},{\"l\":\"蕉岭县\",\"v\":\"441427\"},{\"l\":\"兴宁市\",\"v\":\"441481\"}],\"l\":\"梅州市\",\"v\":\"441400\"},{\"c\":[{\"l\":\"城区\",\"v\":\"441502\"},{\"l\":\"海丰县\",\"v\":\"441521\"},{\"l\":\"陆河县\",\"v\":\"441523\"},{\"l\":\"陆丰市\",\"v\":\"441581\"}],\"l\":\"汕尾市\",\"v\":\"441500\"},{\"c\":[{\"l\":\"源城区\",\"v\":\"441602\"},{\"l\":\"紫金县\",\"v\":\"441621\"},{\"l\":\"龙川县\",\"v\":\"441622\"},{\"l\":\"连平县\",\"v\":\"441623\"},{\"l\":\"和平县\",\"v\":\"441624\"},{\"l\":\"东源县\",\"v\":\"441625\"}],\"l\":\"河源市\",\"v\":\"441600\"},{\"c\":[{\"l\":\"江城区\",\"v\":\"441702\"},{\"l\":\"阳东区\",\"v\":\"441704\"},{\"l\":\"阳西县\",\"v\":\"441721\"},{\"l\":\"阳春市\",\"v\":\"441781\"}],\"l\":\"阳江市\",\"v\":\"441700\"},{\"c\":[{\"l\":\"清城区\",\"v\":\"441802\"},{\"l\":\"清新区\",\"v\":\"441803\"},{\"l\":\"佛冈县\",\"v\":\"441821\"},{\"l\":\"阳山县\",\"v\":\"441823\"},{\"l\":\"连山壮族瑶族自治县\",\"v\":\"441825\"},{\"l\":\"连南瑶族自治县\",\"v\":\"441826\"},{\"l\":\"英德市\",\"v\":\"441881\"},{\"l\":\"连州市\",\"v\":\"441882\"}],\"l\":\"清远市\",\"v\":\"441800\"},{\"l\":\"东莞市\",\"v\":\"441900\"},{\"l\":\"中山市\",\"v\":\"442000\"},{\"c\":[{\"l\":\"湘桥区\",\"v\":\"445102\"},{\"l\":\"潮安区\",\"v\":\"445103\"},{\"l\":\"饶平县\",\"v\":\"445122\"}],\"l\":\"潮州市\",\"v\":\"445100\"},{\"c\":[{\"l\":\"榕城区\",\"v\":\"445202\"},{\"l\":\"揭东区\",\"v\":\"445203\"},{\"l\":\"揭西县\",\"v\":\"445222\"},{\"l\":\"惠来县\",\"v\":\"445224\"},{\"l\":\"普宁市\",\"v\":\"445281\"}],\"l\":\"揭阳市\",\"v\":\"445200\"},{\"c\":[{\"l\":\"云城区\",\"v\":\"445302\"},{\"l\":\"云安区\",\"v\":\"445303\"},{\"l\":\"新兴县\",\"v\":\"445321\"},{\"l\":\"郁南县\",\"v\":\"445322\"},{\"l\":\"罗定市\",\"v\":\"445381\"}],\"l\":\"云浮市\",\"v\":\"445300\"}],\"l\":\"广东省\",\"v\":\"440000\"},{\"c\":[{\"c\":[{\"l\":\"兴宁区\",\"v\":\"450102\"},{\"l\":\"青秀区\",\"v\":\"450103\"},{\"l\":\"江南区\",\"v\":\"450105\"},{\"l\":\"西乡塘区\",\"v\":\"450107\"},{\"l\":\"良庆区\",\"v\":\"450108\"},{\"l\":\"邕宁区\",\"v\":\"450109\"},{\"l\":\"武鸣区\",\"v\":\"450110\"},{\"l\":\"隆安县\",\"v\":\"450123\"},{\"l\":\"马山县\",\"v\":\"450124\"},{\"l\":\"上林县\",\"v\":\"450125\"},{\"l\":\"宾阳县\",\"v\":\"450126\"},{\"l\":\"横县\",\"v\":\"450127\"}],\"l\":\"南宁市\",\"v\":\"450100\"},{\"c\":[{\"l\":\"城中区\",\"v\":\"450202\"},{\"l\":\"鱼峰区\",\"v\":\"450203\"},{\"l\":\"柳南区\",\"v\":\"450204\"},{\"l\":\"柳北区\",\"v\":\"450205\"},{\"l\":\"柳江区\",\"v\":\"450206\"},{\"l\":\"柳城县\",\"v\":\"450222\"},{\"l\":\"鹿寨县\",\"v\":\"450223\"},{\"l\":\"融安县\",\"v\":\"450224\"},{\"l\":\"融水苗族自治县\",\"v\":\"450225\"},{\"l\":\"三江侗族自治县\",\"v\":\"450226\"}],\"l\":\"柳州市\",\"v\":\"450200\"},{\"c\":[{\"l\":\"秀峰区\",\"v\":\"450302\"},{\"l\":\"叠彩区\",\"v\":\"450303\"},{\"l\":\"象山区\",\"v\":\"450304\"},{\"l\":\"七星区\",\"v\":\"450305\"},{\"l\":\"雁山区\",\"v\":\"450311\"},{\"l\":\"临桂区\",\"v\":\"450312\"},{\"l\":\"阳朔县\",\"v\":\"450321\"},{\"l\":\"灵川县\",\"v\":\"450323\"},{\"l\":\"全州县\",\"v\":\"450324\"},{\"l\":\"兴安县\",\"v\":\"450325\"},{\"l\":\"永福县\",\"v\":\"450326\"},{\"l\":\"灌阳县\",\"v\":\"450327\"},{\"l\":\"龙胜各族自治县\",\"v\":\"450328\"},{\"l\":\"资源县\",\"v\":\"450329\"},{\"l\":\"平乐县\",\"v\":\"450330\"},{\"l\":\"恭城瑶族自治县\",\"v\":\"450332\"},{\"l\":\"荔浦市\",\"v\":\"450381\"}],\"l\":\"桂林市\",\"v\":\"450300\"},{\"c\":[{\"l\":\"万秀区\",\"v\":\"450403\"},{\"l\":\"长洲区\",\"v\":\"450405\"},{\"l\":\"龙圩区\",\"v\":\"450406\"},{\"l\":\"苍梧县\",\"v\":\"450421\"},{\"l\":\"藤县\",\"v\":\"450422\"},{\"l\":\"蒙山县\",\"v\":\"450423\"},{\"l\":\"岑溪市\",\"v\":\"450481\"}],\"l\":\"梧州市\",\"v\":\"450400\"},{\"c\":[{\"l\":\"海城区\",\"v\":\"450502\"},{\"l\":\"银海区\",\"v\":\"450503\"},{\"l\":\"铁山港区\",\"v\":\"450512\"},{\"l\":\"合浦县\",\"v\":\"450521\"}],\"l\":\"北海市\",\"v\":\"450500\"},{\"c\":[{\"l\":\"港口区\",\"v\":\"450602\"},{\"l\":\"防城区\",\"v\":\"450603\"},{\"l\":\"上思县\",\"v\":\"450621\"},{\"l\":\"东兴市\",\"v\":\"450681\"}],\"l\":\"防城港市\",\"v\":\"450600\"},{\"c\":[{\"l\":\"钦南区\",\"v\":\"450702\"},{\"l\":\"钦北区\",\"v\":\"450703\"},{\"l\":\"灵山县\",\"v\":\"450721\"},{\"l\":\"浦北县\",\"v\":\"450722\"}],\"l\":\"钦州市\",\"v\":\"450700\"},{\"c\":[{\"l\":\"港北区\",\"v\":\"450802\"},{\"l\":\"港南区\",\"v\":\"450803\"},{\"l\":\"覃塘区\",\"v\":\"450804\"},{\"l\":\"平南县\",\"v\":\"450821\"},{\"l\":\"桂平市\",\"v\":\"450881\"}],\"l\":\"贵港市\",\"v\":\"450800\"},{\"c\":[{\"l\":\"玉州区\",\"v\":\"450902\"},{\"l\":\"福绵区\",\"v\":\"450903\"},{\"l\":\"容县\",\"v\":\"450921\"},{\"l\":\"陆川县\",\"v\":\"450922\"},{\"l\":\"博白县\",\"v\":\"450923\"},{\"l\":\"兴业县\",\"v\":\"450924\"},{\"l\":\"北流市\",\"v\":\"450981\"}],\"l\":\"玉林市\",\"v\":\"450900\"},{\"c\":[{\"l\":\"右江区\",\"v\":\"451002\"},{\"l\":\"田阳区\",\"v\":\"451003\"},{\"l\":\"田东县\",\"v\":\"451022\"},{\"l\":\"德保县\",\"v\":\"451024\"},{\"l\":\"那坡县\",\"v\":\"451026\"},{\"l\":\"凌云县\",\"v\":\"451027\"},{\"l\":\"乐业县\",\"v\":\"451028\"},{\"l\":\"田林县\",\"v\":\"451029\"},{\"l\":\"西林县\",\"v\":\"451030\"},{\"l\":\"隆林各族自治县\",\"v\":\"451031\"},{\"l\":\"靖西市\",\"v\":\"451081\"},{\"l\":\"平果市\",\"v\":\"451082\"}],\"l\":\"百色市\",\"v\":\"451000\"},{\"c\":[{\"l\":\"八步区\",\"v\":\"451102\"},{\"l\":\"平桂区\",\"v\":\"451103\"},{\"l\":\"昭平县\",\"v\":\"451121\"},{\"l\":\"钟山县\",\"v\":\"451122\"},{\"l\":\"富川瑶族自治县\",\"v\":\"451123\"}],\"l\":\"贺州市\",\"v\":\"451100\"},{\"c\":[{\"l\":\"金城江区\",\"v\":\"451202\"},{\"l\":\"宜州区\",\"v\":\"451203\"},{\"l\":\"南丹县\",\"v\":\"451221\"},{\"l\":\"天峨县\",\"v\":\"451222\"},{\"l\":\"凤山县\",\"v\":\"451223\"},{\"l\":\"东兰县\",\"v\":\"451224\"},{\"l\":\"罗城仫佬族自治县\",\"v\":\"451225\"},{\"l\":\"环江毛南族自治县\",\"v\":\"451226\"},{\"l\":\"巴马瑶族自治县\",\"v\":\"451227\"},{\"l\":\"都安瑶族自治县\",\"v\":\"451228\"},{\"l\":\"大化瑶族自治县\",\"v\":\"451229\"}],\"l\":\"河池市\",\"v\":\"451200\"},{\"c\":[{\"l\":\"兴宾区\",\"v\":\"451302\"},{\"l\":\"忻城县\",\"v\":\"451321\"},{\"l\":\"象州县\",\"v\":\"451322\"},{\"l\":\"武宣县\",\"v\":\"451323\"},{\"l\":\"金秀瑶族自治县\",\"v\":\"451324\"},{\"l\":\"合山市\",\"v\":\"451381\"}],\"l\":\"来宾市\",\"v\":\"451300\"},{\"c\":[{\"l\":\"江州区\",\"v\":\"451402\"},{\"l\":\"扶绥县\",\"v\":\"451421\"},{\"l\":\"宁明县\",\"v\":\"451422\"},{\"l\":\"龙州县\",\"v\":\"451423\"},{\"l\":\"大新县\",\"v\":\"451424\"},{\"l\":\"天等县\",\"v\":\"451425\"},{\"l\":\"凭祥市\",\"v\":\"451481\"}],\"l\":\"崇左市\",\"v\":\"451400\"}],\"l\":\"广西壮族自治区\",\"v\":\"450000\"},{\"c\":[{\"c\":[{\"l\":\"秀英区\",\"v\":\"460105\"},{\"l\":\"龙华区\",\"v\":\"460106\"},{\"l\":\"琼山区\",\"v\":\"460107\"},{\"l\":\"美兰区\",\"v\":\"460108\"}],\"l\":\"海口市\",\"v\":\"460100\"},{\"c\":[{\"l\":\"海棠区\",\"v\":\"460202\"},{\"l\":\"吉阳区\",\"v\":\"460203\"},{\"l\":\"天涯区\",\"v\":\"460204\"},{\"l\":\"崖州区\",\"v\":\"460205\"}],\"l\":\"三亚市\",\"v\":\"460200\"},{\"c\":[{\"l\":\"西沙群岛\",\"v\":\"460321\"},{\"l\":\"南沙群岛\",\"v\":\"460322\"},{\"l\":\"中沙群岛的岛礁及其海域\",\"v\":\"460323\"}],\"l\":\"三沙市\",\"v\":\"460300\"},{\"l\":\"儋州市\",\"v\":\"460400\"},{\"c\":[{\"l\":\"五指山市\",\"v\":\"469001\"},{\"l\":\"琼海市\",\"v\":\"469002\"},{\"l\":\"文昌市\",\"v\":\"469005\"},{\"l\":\"万宁市\",\"v\":\"469006\"},{\"l\":\"东方市\",\"v\":\"469007\"},{\"l\":\"定安县\",\"v\":\"469021\"},{\"l\":\"屯昌县\",\"v\":\"469022\"},{\"l\":\"澄迈县\",\"v\":\"469023\"},{\"l\":\"临高县\",\"v\":\"469024\"},{\"l\":\"白沙黎族自治县\",\"v\":\"469025\"},{\"l\":\"昌江黎族自治县\",\"v\":\"469026\"},{\"l\":\"乐东黎族自治县\",\"v\":\"469027\"},{\"l\":\"陵水黎族自治县\",\"v\":\"469028\"},{\"l\":\"保亭黎族苗族自治县\",\"v\":\"469029\"},{\"l\":\"琼中黎族苗族自治县\",\"v\":\"469030\"}],\"l\":\"省直辖县级行政区划\",\"v\":\"469000\"}],\"l\":\"海南省\",\"v\":\"460000\"},{\"c\":[{\"c\":[{\"l\":\"万州区\",\"v\":\"500101\"},{\"l\":\"涪陵区\",\"v\":\"500102\"},{\"l\":\"渝中区\",\"v\":\"500103\"},{\"l\":\"大渡口区\",\"v\":\"500104\"},{\"l\":\"江北区\",\"v\":\"500105\"},{\"l\":\"沙坪坝区\",\"v\":\"500106\"},{\"l\":\"九龙坡区\",\"v\":\"500107\"},{\"l\":\"南岸区\",\"v\":\"500108\"},{\"l\":\"北碚区\",\"v\":\"500109\"},{\"l\":\"綦江区\",\"v\":\"500110\"},{\"l\":\"大足区\",\"v\":\"500111\"},{\"l\":\"渝北区\",\"v\":\"500112\"},{\"l\":\"巴南区\",\"v\":\"500113\"},{\"l\":\"黔江区\",\"v\":\"500114\"},{\"l\":\"长寿区\",\"v\":\"500115\"},{\"l\":\"江津区\",\"v\":\"500116\"},{\"l\":\"合川区\",\"v\":\"500117\"},{\"l\":\"永川区\",\"v\":\"500118\"},{\"l\":\"南川区\",\"v\":\"500119\"},{\"l\":\"璧山区\",\"v\":\"500120\"},{\"l\":\"铜梁区\",\"v\":\"500151\"},{\"l\":\"潼南区\",\"v\":\"500152\"},{\"l\":\"荣昌区\",\"v\":\"500153\"},{\"l\":\"开州区\",\"v\":\"500154\"},{\"l\":\"梁平区\",\"v\":\"500155\"},{\"l\":\"武隆区\",\"v\":\"500156\"}],\"l\":\"市辖区\",\"v\":\"500100\"},{\"c\":[{\"l\":\"城口县\",\"v\":\"500229\"},{\"l\":\"丰都县\",\"v\":\"500230\"},{\"l\":\"垫江县\",\"v\":\"500231\"},{\"l\":\"忠县\",\"v\":\"500233\"},{\"l\":\"云阳县\",\"v\":\"500235\"},{\"l\":\"奉节县\",\"v\":\"500236\"},{\"l\":\"巫山县\",\"v\":\"500237\"},{\"l\":\"巫溪县\",\"v\":\"500238\"},{\"l\":\"石柱土家族自治县\",\"v\":\"500240\"},{\"l\":\"秀山土家族苗族自治县\",\"v\":\"500241\"},{\"l\":\"酉阳土家族苗族自治县\",\"v\":\"500242\"},{\"l\":\"彭水苗族土家族自治县\",\"v\":\"500243\"}],\"l\":\"县\",\"v\":\"500200\"}],\"l\":\"重庆市\",\"v\":\"500000\"},{\"c\":[{\"c\":[{\"l\":\"锦江区\",\"v\":\"510104\"},{\"l\":\"青羊区\",\"v\":\"510105\"},{\"l\":\"金牛区\",\"v\":\"510106\"},{\"l\":\"武侯区\",\"v\":\"510107\"},{\"l\":\"成华区\",\"v\":\"510108\"},{\"l\":\"龙泉驿区\",\"v\":\"510112\"},{\"l\":\"青白江区\",\"v\":\"510113\"},{\"l\":\"新都区\",\"v\":\"510114\"},{\"l\":\"温江区\",\"v\":\"510115\"},{\"l\":\"双流区\",\"v\":\"510116\"},{\"l\":\"郫都区\",\"v\":\"510117\"},{\"l\":\"新津区\",\"v\":\"510118\"},{\"l\":\"金堂县\",\"v\":\"510121\"},{\"l\":\"大邑县\",\"v\":\"510129\"},{\"l\":\"蒲江县\",\"v\":\"510131\"},{\"l\":\"都江堰市\",\"v\":\"510181\"},{\"l\":\"彭州市\",\"v\":\"510182\"},{\"l\":\"邛崃市\",\"v\":\"510183\"},{\"l\":\"崇州市\",\"v\":\"510184\"},{\"l\":\"简阳市\",\"v\":\"510185\"}],\"l\":\"成都市\",\"v\":\"510100\"},{\"c\":[{\"l\":\"自流井区\",\"v\":\"510302\"},{\"l\":\"贡井区\",\"v\":\"510303\"},{\"l\":\"大安区\",\"v\":\"510304\"},{\"l\":\"沿滩区\",\"v\":\"510311\"},{\"l\":\"荣县\",\"v\":\"510321\"},{\"l\":\"富顺县\",\"v\":\"510322\"}],\"l\":\"自贡市\",\"v\":\"510300\"},{\"c\":[{\"l\":\"东区\",\"v\":\"510402\"},{\"l\":\"西区\",\"v\":\"510403\"},{\"l\":\"仁和区\",\"v\":\"510411\"},{\"l\":\"米易县\",\"v\":\"510421\"},{\"l\":\"盐边县\",\"v\":\"510422\"}],\"l\":\"攀枝花市\",\"v\":\"510400\"},{\"c\":[{\"l\":\"江阳区\",\"v\":\"510502\"},{\"l\":\"纳溪区\",\"v\":\"510503\"},{\"l\":\"龙马潭区\",\"v\":\"510504\"},{\"l\":\"泸县\",\"v\":\"510521\"},{\"l\":\"合江县\",\"v\":\"510522\"},{\"l\":\"叙永县\",\"v\":\"510524\"},{\"l\":\"古蔺县\",\"v\":\"510525\"}],\"l\":\"泸州市\",\"v\":\"510500\"},{\"c\":[{\"l\":\"旌阳区\",\"v\":\"510603\"},{\"l\":\"罗江区\",\"v\":\"510604\"},{\"l\":\"中江县\",\"v\":\"510623\"},{\"l\":\"广汉市\",\"v\":\"510681\"},{\"l\":\"什邡市\",\"v\":\"510682\"},{\"l\":\"绵竹市\",\"v\":\"510683\"}],\"l\":\"德阳市\",\"v\":\"510600\"},{\"c\":[{\"l\":\"涪城区\",\"v\":\"510703\"},{\"l\":\"游仙区\",\"v\":\"510704\"},{\"l\":\"安州区\",\"v\":\"510705\"},{\"l\":\"三台县\",\"v\":\"510722\"},{\"l\":\"盐亭县\",\"v\":\"510723\"},{\"l\":\"梓潼县\",\"v\":\"510725\"},{\"l\":\"北川羌族自治县\",\"v\":\"510726\"},{\"l\":\"平武县\",\"v\":\"510727\"},{\"l\":\"江油市\",\"v\":\"510781\"}],\"l\":\"绵阳市\",\"v\":\"510700\"},{\"c\":[{\"l\":\"利州区\",\"v\":\"510802\"},{\"l\":\"昭化区\",\"v\":\"510811\"},{\"l\":\"朝天区\",\"v\":\"510812\"},{\"l\":\"旺苍县\",\"v\":\"510821\"},{\"l\":\"青川县\",\"v\":\"510822\"},{\"l\":\"剑阁县\",\"v\":\"510823\"},{\"l\":\"苍溪县\",\"v\":\"510824\"}],\"l\":\"广元市\",\"v\":\"510800\"},{\"c\":[{\"l\":\"船山区\",\"v\":\"510903\"},{\"l\":\"安居区\",\"v\":\"510904\"},{\"l\":\"蓬溪县\",\"v\":\"510921\"},{\"l\":\"大英县\",\"v\":\"510923\"},{\"l\":\"射洪市\",\"v\":\"510981\"}],\"l\":\"遂宁市\",\"v\":\"510900\"},{\"c\":[{\"l\":\"市中区\",\"v\":\"511002\"},{\"l\":\"东兴区\",\"v\":\"511011\"},{\"l\":\"威远县\",\"v\":\"511024\"},{\"l\":\"资中县\",\"v\":\"511025\"},{\"l\":\"内江经济开发区\",\"v\":\"511071\"},{\"l\":\"隆昌市\",\"v\":\"511083\"}],\"l\":\"内江市\",\"v\":\"511000\"},{\"c\":[{\"l\":\"市中区\",\"v\":\"511102\"},{\"l\":\"沙湾区\",\"v\":\"511111\"},{\"l\":\"五通桥区\",\"v\":\"511112\"},{\"l\":\"金口河区\",\"v\":\"511113\"},{\"l\":\"犍为县\",\"v\":\"511123\"},{\"l\":\"井研县\",\"v\":\"511124\"},{\"l\":\"夹江县\",\"v\":\"511126\"},{\"l\":\"沐川县\",\"v\":\"511129\"},{\"l\":\"峨边彝族自治县\",\"v\":\"511132\"},{\"l\":\"马边彝族自治县\",\"v\":\"511133\"},{\"l\":\"峨眉山市\",\"v\":\"511181\"}],\"l\":\"乐山市\",\"v\":\"511100\"},{\"c\":[{\"l\":\"顺庆区\",\"v\":\"511302\"},{\"l\":\"高坪区\",\"v\":\"511303\"},{\"l\":\"嘉陵区\",\"v\":\"511304\"},{\"l\":\"南部县\",\"v\":\"511321\"},{\"l\":\"营山县\",\"v\":\"511322\"},{\"l\":\"蓬安县\",\"v\":\"511323\"},{\"l\":\"仪陇县\",\"v\":\"511324\"},{\"l\":\"西充县\",\"v\":\"511325\"},{\"l\":\"阆中市\",\"v\":\"511381\"}],\"l\":\"南充市\",\"v\":\"511300\"},{\"c\":[{\"l\":\"东坡区\",\"v\":\"511402\"},{\"l\":\"彭山区\",\"v\":\"511403\"},{\"l\":\"仁寿县\",\"v\":\"511421\"},{\"l\":\"洪雅县\",\"v\":\"511423\"},{\"l\":\"丹棱县\",\"v\":\"511424\"},{\"l\":\"青神县\",\"v\":\"511425\"}],\"l\":\"眉山市\",\"v\":\"511400\"},{\"c\":[{\"l\":\"翠屏区\",\"v\":\"511502\"},{\"l\":\"南溪区\",\"v\":\"511503\"},{\"l\":\"叙州区\",\"v\":\"511504\"},{\"l\":\"江安县\",\"v\":\"511523\"},{\"l\":\"长宁县\",\"v\":\"511524\"},{\"l\":\"高县\",\"v\":\"511525\"},{\"l\":\"珙县\",\"v\":\"511526\"},{\"l\":\"筠连县\",\"v\":\"511527\"},{\"l\":\"兴文县\",\"v\":\"511528\"},{\"l\":\"屏山县\",\"v\":\"511529\"}],\"l\":\"宜宾市\",\"v\":\"511500\"},{\"c\":[{\"l\":\"广安区\",\"v\":\"511602\"},{\"l\":\"前锋区\",\"v\":\"511603\"},{\"l\":\"岳池县\",\"v\":\"511621\"},{\"l\":\"武胜县\",\"v\":\"511622\"},{\"l\":\"邻水县\",\"v\":\"511623\"},{\"l\":\"华蓥市\",\"v\":\"511681\"}],\"l\":\"广安市\",\"v\":\"511600\"},{\"c\":[{\"l\":\"通川区\",\"v\":\"511702\"},{\"l\":\"达川区\",\"v\":\"511703\"},{\"l\":\"宣汉县\",\"v\":\"511722\"},{\"l\":\"开江县\",\"v\":\"511723\"},{\"l\":\"大竹县\",\"v\":\"511724\"},{\"l\":\"渠县\",\"v\":\"511725\"},{\"l\":\"达州经济开发区\",\"v\":\"511771\"},{\"l\":\"万源市\",\"v\":\"511781\"}],\"l\":\"达州市\",\"v\":\"511700\"},{\"c\":[{\"l\":\"雨城区\",\"v\":\"511802\"},{\"l\":\"名山区\",\"v\":\"511803\"},{\"l\":\"荥经县\",\"v\":\"511822\"},{\"l\":\"汉源县\",\"v\":\"511823\"},{\"l\":\"石棉县\",\"v\":\"511824\"},{\"l\":\"天全县\",\"v\":\"511825\"},{\"l\":\"芦山县\",\"v\":\"511826\"},{\"l\":\"宝兴县\",\"v\":\"511827\"}],\"l\":\"雅安市\",\"v\":\"511800\"},{\"c\":[{\"l\":\"巴州区\",\"v\":\"511902\"},{\"l\":\"恩阳区\",\"v\":\"511903\"},{\"l\":\"通江县\",\"v\":\"511921\"},{\"l\":\"南江县\",\"v\":\"511922\"},{\"l\":\"平昌县\",\"v\":\"511923\"},{\"l\":\"巴中经济开发区\",\"v\":\"511971\"}],\"l\":\"巴中市\",\"v\":\"511900\"},{\"c\":[{\"l\":\"雁江区\",\"v\":\"512002\"},{\"l\":\"安岳县\",\"v\":\"512021\"},{\"l\":\"乐至县\",\"v\":\"512022\"}],\"l\":\"资阳市\",\"v\":\"512000\"},{\"c\":[{\"l\":\"马尔康市\",\"v\":\"513201\"},{\"l\":\"汶川县\",\"v\":\"513221\"},{\"l\":\"理县\",\"v\":\"513222\"},{\"l\":\"茂县\",\"v\":\"513223\"},{\"l\":\"松潘县\",\"v\":\"513224\"},{\"l\":\"九寨沟县\",\"v\":\"513225\"},{\"l\":\"金川县\",\"v\":\"513226\"},{\"l\":\"小金县\",\"v\":\"513227\"},{\"l\":\"黑水县\",\"v\":\"513228\"},{\"l\":\"壤塘县\",\"v\":\"513230\"},{\"l\":\"阿坝县\",\"v\":\"513231\"},{\"l\":\"若尔盖县\",\"v\":\"513232\"},{\"l\":\"红原县\",\"v\":\"513233\"}],\"l\":\"阿坝藏族羌族自治州\",\"v\":\"513200\"},{\"c\":[{\"l\":\"康定市\",\"v\":\"513301\"},{\"l\":\"泸定县\",\"v\":\"513322\"},{\"l\":\"丹巴县\",\"v\":\"513323\"},{\"l\":\"九龙县\",\"v\":\"513324\"},{\"l\":\"雅江县\",\"v\":\"513325\"},{\"l\":\"道孚县\",\"v\":\"513326\"},{\"l\":\"炉霍县\",\"v\":\"513327\"},{\"l\":\"甘孜县\",\"v\":\"513328\"},{\"l\":\"新龙县\",\"v\":\"513329\"},{\"l\":\"德格县\",\"v\":\"513330\"},{\"l\":\"白玉县\",\"v\":\"513331\"},{\"l\":\"石渠县\",\"v\":\"513332\"},{\"l\":\"色达县\",\"v\":\"513333\"},{\"l\":\"理塘县\",\"v\":\"513334\"},{\"l\":\"巴塘县\",\"v\":\"513335\"},{\"l\":\"乡城县\",\"v\":\"513336\"},{\"l\":\"稻城县\",\"v\":\"513337\"},{\"l\":\"得荣县\",\"v\":\"513338\"}],\"l\":\"甘孜藏族自治州\",\"v\":\"513300\"},{\"c\":[{\"l\":\"西昌市\",\"v\":\"513401\"},{\"l\":\"木里藏族自治县\",\"v\":\"513422\"},{\"l\":\"盐源县\",\"v\":\"513423\"},{\"l\":\"德昌县\",\"v\":\"513424\"},{\"l\":\"会理县\",\"v\":\"513425\"},{\"l\":\"会东县\",\"v\":\"513426\"},{\"l\":\"宁南县\",\"v\":\"513427\"},{\"l\":\"普格县\",\"v\":\"513428\"},{\"l\":\"布拖县\",\"v\":\"513429\"},{\"l\":\"金阳县\",\"v\":\"513430\"},{\"l\":\"昭觉县\",\"v\":\"513431\"},{\"l\":\"喜德县\",\"v\":\"513432\"},{\"l\":\"冕宁县\",\"v\":\"513433\"},{\"l\":\"越西县\",\"v\":\"513434\"},{\"l\":\"甘洛县\",\"v\":\"513435\"},{\"l\":\"美姑县\",\"v\":\"513436\"},{\"l\":\"雷波县\",\"v\":\"513437\"}],\"l\":\"凉山彝族自治州\",\"v\":\"513400\"}],\"l\":\"四川省\",\"v\":\"510000\"},{\"c\":[{\"c\":[{\"l\":\"南明区\",\"v\":\"520102\"},{\"l\":\"云岩区\",\"v\":\"520103\"},{\"l\":\"花溪区\",\"v\":\"520111\"},{\"l\":\"乌当区\",\"v\":\"520112\"},{\"l\":\"白云区\",\"v\":\"520113\"},{\"l\":\"观山湖区\",\"v\":\"520115\"},{\"l\":\"开阳县\",\"v\":\"520121\"},{\"l\":\"息烽县\",\"v\":\"520122\"},{\"l\":\"修文县\",\"v\":\"520123\"},{\"l\":\"清镇市\",\"v\":\"520181\"}],\"l\":\"贵阳市\",\"v\":\"520100\"},{\"c\":[{\"l\":\"钟山区\",\"v\":\"520201\"},{\"l\":\"六枝特区\",\"v\":\"520203\"},{\"l\":\"水城县\",\"v\":\"520221\"},{\"l\":\"盘州市\",\"v\":\"520281\"}],\"l\":\"六盘水市\",\"v\":\"520200\"},{\"c\":[{\"l\":\"红花岗区\",\"v\":\"520302\"},{\"l\":\"汇川区\",\"v\":\"520303\"},{\"l\":\"播州区\",\"v\":\"520304\"},{\"l\":\"桐梓县\",\"v\":\"520322\"},{\"l\":\"绥阳县\",\"v\":\"520323\"},{\"l\":\"正安县\",\"v\":\"520324\"},{\"l\":\"道真仡佬族苗族自治县\",\"v\":\"520325\"},{\"l\":\"务川仡佬族苗族自治县\",\"v\":\"520326\"},{\"l\":\"凤冈县\",\"v\":\"520327\"},{\"l\":\"湄潭县\",\"v\":\"520328\"},{\"l\":\"余庆县\",\"v\":\"520329\"},{\"l\":\"习水县\",\"v\":\"520330\"},{\"l\":\"赤水市\",\"v\":\"520381\"},{\"l\":\"仁怀市\",\"v\":\"520382\"}],\"l\":\"遵义市\",\"v\":\"520300\"},{\"c\":[{\"l\":\"西秀区\",\"v\":\"520402\"},{\"l\":\"平坝区\",\"v\":\"520403\"},{\"l\":\"普定县\",\"v\":\"520422\"},{\"l\":\"镇宁布依族苗族自治县\",\"v\":\"520423\"},{\"l\":\"关岭布依族苗族自治县\",\"v\":\"520424\"},{\"l\":\"紫云苗族布依族自治县\",\"v\":\"520425\"}],\"l\":\"安顺市\",\"v\":\"520400\"},{\"c\":[{\"l\":\"七星关区\",\"v\":\"520502\"},{\"l\":\"大方县\",\"v\":\"520521\"},{\"l\":\"黔西县\",\"v\":\"520522\"},{\"l\":\"金沙县\",\"v\":\"520523\"},{\"l\":\"织金县\",\"v\":\"520524\"},{\"l\":\"纳雍县\",\"v\":\"520525\"},{\"l\":\"威宁彝族回族苗族自治县\",\"v\":\"520526\"},{\"l\":\"赫章县\",\"v\":\"520527\"}],\"l\":\"毕节市\",\"v\":\"520500\"},{\"c\":[{\"l\":\"碧江区\",\"v\":\"520602\"},{\"l\":\"万山区\",\"v\":\"520603\"},{\"l\":\"江口县\",\"v\":\"520621\"},{\"l\":\"玉屏侗族自治县\",\"v\":\"520622\"},{\"l\":\"石阡县\",\"v\":\"520623\"},{\"l\":\"思南县\",\"v\":\"520624\"},{\"l\":\"印江土家族苗族自治县\",\"v\":\"520625\"},{\"l\":\"德江县\",\"v\":\"520626\"},{\"l\":\"沿河土家族自治县\",\"v\":\"520627\"},{\"l\":\"松桃苗族自治县\",\"v\":\"520628\"}],\"l\":\"铜仁市\",\"v\":\"520600\"},{\"c\":[{\"l\":\"兴义市\",\"v\":\"522301\"},{\"l\":\"兴仁市\",\"v\":\"522302\"},{\"l\":\"普安县\",\"v\":\"522323\"},{\"l\":\"晴隆县\",\"v\":\"522324\"},{\"l\":\"贞丰县\",\"v\":\"522325\"},{\"l\":\"望谟县\",\"v\":\"522326\"},{\"l\":\"册亨县\",\"v\":\"522327\"},{\"l\":\"安龙县\",\"v\":\"522328\"}],\"l\":\"黔西南布依族苗族自治州\",\"v\":\"522300\"},{\"c\":[{\"l\":\"凯里市\",\"v\":\"522601\"},{\"l\":\"黄平县\",\"v\":\"522622\"},{\"l\":\"施秉县\",\"v\":\"522623\"},{\"l\":\"三穗县\",\"v\":\"522624\"},{\"l\":\"镇远县\",\"v\":\"522625\"},{\"l\":\"岑巩县\",\"v\":\"522626\"},{\"l\":\"天柱县\",\"v\":\"522627\"},{\"l\":\"锦屏县\",\"v\":\"522628\"},{\"l\":\"剑河县\",\"v\":\"522629\"},{\"l\":\"台江县\",\"v\":\"522630\"},{\"l\":\"黎平县\",\"v\":\"522631\"},{\"l\":\"榕江县\",\"v\":\"522632\"},{\"l\":\"从江县\",\"v\":\"522633\"},{\"l\":\"雷山县\",\"v\":\"522634\"},{\"l\":\"麻江县\",\"v\":\"522635\"},{\"l\":\"丹寨县\",\"v\":\"522636\"}],\"l\":\"黔东南苗族侗族自治州\",\"v\":\"522600\"},{\"c\":[{\"l\":\"都匀市\",\"v\":\"522701\"},{\"l\":\"福泉市\",\"v\":\"522702\"},{\"l\":\"荔波县\",\"v\":\"522722\"},{\"l\":\"贵定县\",\"v\":\"522723\"},{\"l\":\"瓮安县\",\"v\":\"522725\"},{\"l\":\"独山县\",\"v\":\"522726\"},{\"l\":\"平塘县\",\"v\":\"522727\"},{\"l\":\"罗甸县\",\"v\":\"522728\"},{\"l\":\"长顺县\",\"v\":\"522729\"},{\"l\":\"龙里县\",\"v\":\"522730\"},{\"l\":\"惠水县\",\"v\":\"522731\"},{\"l\":\"三都水族自治县\",\"v\":\"522732\"}],\"l\":\"黔南布依族苗族自治州\",\"v\":\"522700\"}],\"l\":\"贵州省\",\"v\":\"520000\"},{\"c\":[{\"c\":[{\"l\":\"五华区\",\"v\":\"530102\"},{\"l\":\"盘龙区\",\"v\":\"530103\"},{\"l\":\"官渡区\",\"v\":\"530111\"},{\"l\":\"西山区\",\"v\":\"530112\"},{\"l\":\"东川区\",\"v\":\"530113\"},{\"l\":\"呈贡区\",\"v\":\"530114\"},{\"l\":\"晋宁区\",\"v\":\"530115\"},{\"l\":\"富民县\",\"v\":\"530124\"},{\"l\":\"宜良县\",\"v\":\"530125\"},{\"l\":\"石林彝族自治县\",\"v\":\"530126\"},{\"l\":\"嵩明县\",\"v\":\"530127\"},{\"l\":\"禄劝彝族苗族自治县\",\"v\":\"530128\"},{\"l\":\"寻甸回族彝族自治县\",\"v\":\"530129\"},{\"l\":\"安宁市\",\"v\":\"530181\"}],\"l\":\"昆明市\",\"v\":\"530100\"},{\"c\":[{\"l\":\"麒麟区\",\"v\":\"530302\"},{\"l\":\"沾益区\",\"v\":\"530303\"},{\"l\":\"马龙区\",\"v\":\"530304\"},{\"l\":\"陆良县\",\"v\":\"530322\"},{\"l\":\"师宗县\",\"v\":\"530323\"},{\"l\":\"罗平县\",\"v\":\"530324\"},{\"l\":\"富源县\",\"v\":\"530325\"},{\"l\":\"会泽县\",\"v\":\"530326\"},{\"l\":\"宣威市\",\"v\":\"530381\"}],\"l\":\"曲靖市\",\"v\":\"530300\"},{\"c\":[{\"l\":\"红塔区\",\"v\":\"530402\"},{\"l\":\"江川区\",\"v\":\"530403\"},{\"l\":\"通海县\",\"v\":\"530423\"},{\"l\":\"华宁县\",\"v\":\"530424\"},{\"l\":\"易门县\",\"v\":\"530425\"},{\"l\":\"峨山彝族自治县\",\"v\":\"530426\"},{\"l\":\"新平彝族傣族自治县\",\"v\":\"530427\"},{\"l\":\"元江哈尼族彝族傣族自治县\",\"v\":\"530428\"},{\"l\":\"澄江市\",\"v\":\"530481\"}],\"l\":\"玉溪市\",\"v\":\"530400\"},{\"c\":[{\"l\":\"隆阳区\",\"v\":\"530502\"},{\"l\":\"施甸县\",\"v\":\"530521\"},{\"l\":\"龙陵县\",\"v\":\"530523\"},{\"l\":\"昌宁县\",\"v\":\"530524\"},{\"l\":\"腾冲市\",\"v\":\"530581\"}],\"l\":\"保山市\",\"v\":\"530500\"},{\"c\":[{\"l\":\"昭阳区\",\"v\":\"530602\"},{\"l\":\"鲁甸县\",\"v\":\"530621\"},{\"l\":\"巧家县\",\"v\":\"530622\"},{\"l\":\"盐津县\",\"v\":\"530623\"},{\"l\":\"大关县\",\"v\":\"530624\"},{\"l\":\"永善县\",\"v\":\"530625\"},{\"l\":\"绥江县\",\"v\":\"530626\"},{\"l\":\"镇雄县\",\"v\":\"530627\"},{\"l\":\"彝良县\",\"v\":\"530628\"},{\"l\":\"威信县\",\"v\":\"530629\"},{\"l\":\"水富市\",\"v\":\"530681\"}],\"l\":\"昭通市\",\"v\":\"530600\"},{\"c\":[{\"l\":\"古城区\",\"v\":\"530702\"},{\"l\":\"玉龙纳西族自治县\",\"v\":\"530721\"},{\"l\":\"永胜县\",\"v\":\"530722\"},{\"l\":\"华坪县\",\"v\":\"530723\"},{\"l\":\"宁蒗彝族自治县\",\"v\":\"530724\"}],\"l\":\"丽江市\",\"v\":\"530700\"},{\"c\":[{\"l\":\"思茅区\",\"v\":\"530802\"},{\"l\":\"宁洱哈尼族彝族自治县\",\"v\":\"530821\"},{\"l\":\"墨江哈尼族自治县\",\"v\":\"530822\"},{\"l\":\"景东彝族自治县\",\"v\":\"530823\"},{\"l\":\"景谷傣族彝族自治县\",\"v\":\"530824\"},{\"l\":\"镇沅彝族哈尼族拉祜族自治县\",\"v\":\"530825\"},{\"l\":\"江城哈尼族彝族自治县\",\"v\":\"530826\"},{\"l\":\"孟连傣族拉祜族佤族自治县\",\"v\":\"530827\"},{\"l\":\"澜沧拉祜族自治县\",\"v\":\"530828\"},{\"l\":\"西盟佤族自治县\",\"v\":\"530829\"}],\"l\":\"普洱市\",\"v\":\"530800\"},{\"c\":[{\"l\":\"临翔区\",\"v\":\"530902\"},{\"l\":\"凤庆县\",\"v\":\"530921\"},{\"l\":\"云县\",\"v\":\"530922\"},{\"l\":\"永德县\",\"v\":\"530923\"},{\"l\":\"镇康县\",\"v\":\"530924\"},{\"l\":\"双江拉祜族佤族布朗族傣族自治县\",\"v\":\"530925\"},{\"l\":\"耿马傣族佤族自治县\",\"v\":\"530926\"},{\"l\":\"沧源佤族自治县\",\"v\":\"530927\"}],\"l\":\"临沧市\",\"v\":\"530900\"},{\"c\":[{\"l\":\"楚雄市\",\"v\":\"532301\"},{\"l\":\"双柏县\",\"v\":\"532322\"},{\"l\":\"牟定县\",\"v\":\"532323\"},{\"l\":\"南华县\",\"v\":\"532324\"},{\"l\":\"姚安县\",\"v\":\"532325\"},{\"l\":\"大姚县\",\"v\":\"532326\"},{\"l\":\"永仁县\",\"v\":\"532327\"},{\"l\":\"元谋县\",\"v\":\"532328\"},{\"l\":\"武定县\",\"v\":\"532329\"},{\"l\":\"禄丰县\",\"v\":\"532331\"}],\"l\":\"楚雄彝族自治州\",\"v\":\"532300\"},{\"c\":[{\"l\":\"个旧市\",\"v\":\"532501\"},{\"l\":\"开远市\",\"v\":\"532502\"},{\"l\":\"蒙自市\",\"v\":\"532503\"},{\"l\":\"弥勒市\",\"v\":\"532504\"},{\"l\":\"屏边苗族自治县\",\"v\":\"532523\"},{\"l\":\"建水县\",\"v\":\"532524\"},{\"l\":\"石屏县\",\"v\":\"532525\"},{\"l\":\"泸西县\",\"v\":\"532527\"},{\"l\":\"元阳县\",\"v\":\"532528\"},{\"l\":\"红河县\",\"v\":\"532529\"},{\"l\":\"金平苗族瑶族傣族自治县\",\"v\":\"532530\"},{\"l\":\"绿春县\",\"v\":\"532531\"},{\"l\":\"河口瑶族自治县\",\"v\":\"532532\"}],\"l\":\"红河哈尼族彝族自治州\",\"v\":\"532500\"},{\"c\":[{\"l\":\"文山市\",\"v\":\"532601\"},{\"l\":\"砚山县\",\"v\":\"532622\"},{\"l\":\"西畴县\",\"v\":\"532623\"},{\"l\":\"麻栗坡县\",\"v\":\"532624\"},{\"l\":\"马关县\",\"v\":\"532625\"},{\"l\":\"丘北县\",\"v\":\"532626\"},{\"l\":\"广南县\",\"v\":\"532627\"},{\"l\":\"富宁县\",\"v\":\"532628\"}],\"l\":\"文山壮族苗族自治州\",\"v\":\"532600\"},{\"c\":[{\"l\":\"景洪市\",\"v\":\"532801\"},{\"l\":\"勐海县\",\"v\":\"532822\"},{\"l\":\"勐腊县\",\"v\":\"532823\"}],\"l\":\"西双版纳傣族自治州\",\"v\":\"532800\"},{\"c\":[{\"l\":\"大理市\",\"v\":\"532901\"},{\"l\":\"漾濞彝族自治县\",\"v\":\"532922\"},{\"l\":\"祥云县\",\"v\":\"532923\"},{\"l\":\"宾川县\",\"v\":\"532924\"},{\"l\":\"弥渡县\",\"v\":\"532925\"},{\"l\":\"南涧彝族自治县\",\"v\":\"532926\"},{\"l\":\"巍山彝族回族自治县\",\"v\":\"532927\"},{\"l\":\"永平县\",\"v\":\"532928\"},{\"l\":\"云龙县\",\"v\":\"532929\"},{\"l\":\"洱源县\",\"v\":\"532930\"},{\"l\":\"剑川县\",\"v\":\"532931\"},{\"l\":\"鹤庆县\",\"v\":\"532932\"}],\"l\":\"大理白族自治州\",\"v\":\"532900\"},{\"c\":[{\"l\":\"瑞丽市\",\"v\":\"533102\"},{\"l\":\"芒市\",\"v\":\"533103\"},{\"l\":\"梁河县\",\"v\":\"533122\"},{\"l\":\"盈江县\",\"v\":\"533123\"},{\"l\":\"陇川县\",\"v\":\"533124\"}],\"l\":\"德宏傣族景颇族自治州\",\"v\":\"533100\"},{\"c\":[{\"l\":\"泸水市\",\"v\":\"533301\"},{\"l\":\"福贡县\",\"v\":\"533323\"},{\"l\":\"贡山独龙族怒族自治县\",\"v\":\"533324\"},{\"l\":\"兰坪白族普米族自治县\",\"v\":\"533325\"}],\"l\":\"怒江傈僳族自治州\",\"v\":\"533300\"},{\"c\":[{\"l\":\"香格里拉市\",\"v\":\"533401\"},{\"l\":\"德钦县\",\"v\":\"533422\"},{\"l\":\"维西傈僳族自治县\",\"v\":\"533423\"}],\"l\":\"迪庆藏族自治州\",\"v\":\"533400\"}],\"l\":\"云南省\",\"v\":\"530000\"},{\"c\":[{\"c\":[{\"l\":\"城关区\",\"v\":\"540102\"},{\"l\":\"堆龙德庆区\",\"v\":\"540103\"},{\"l\":\"达孜区\",\"v\":\"540104\"},{\"l\":\"林周县\",\"v\":\"540121\"},{\"l\":\"当雄县\",\"v\":\"540122\"},{\"l\":\"尼木县\",\"v\":\"540123\"},{\"l\":\"曲水县\",\"v\":\"540124\"},{\"l\":\"墨竹工卡县\",\"v\":\"540127\"},{\"l\":\"格尔木藏青工业园区\",\"v\":\"540171\"},{\"l\":\"拉萨经济技术开发区\",\"v\":\"540172\"},{\"l\":\"西藏文化旅游创意园区\",\"v\":\"540173\"},{\"l\":\"达孜工业园区\",\"v\":\"540174\"}],\"l\":\"拉萨市\",\"v\":\"540100\"},{\"c\":[{\"l\":\"桑珠孜区\",\"v\":\"540202\"},{\"l\":\"南木林县\",\"v\":\"540221\"},{\"l\":\"江孜县\",\"v\":\"540222\"},{\"l\":\"定日县\",\"v\":\"540223\"},{\"l\":\"萨迦县\",\"v\":\"540224\"},{\"l\":\"拉孜县\",\"v\":\"540225\"},{\"l\":\"昂仁县\",\"v\":\"540226\"},{\"l\":\"谢通门县\",\"v\":\"540227\"},{\"l\":\"白朗县\",\"v\":\"540228\"},{\"l\":\"仁布县\",\"v\":\"540229\"},{\"l\":\"康马县\",\"v\":\"540230\"},{\"l\":\"定结县\",\"v\":\"540231\"},{\"l\":\"仲巴县\",\"v\":\"540232\"},{\"l\":\"亚东县\",\"v\":\"540233\"},{\"l\":\"吉隆县\",\"v\":\"540234\"},{\"l\":\"聂拉木县\",\"v\":\"540235\"},{\"l\":\"萨嘎县\",\"v\":\"540236\"},{\"l\":\"岗巴县\",\"v\":\"540237\"}],\"l\":\"日喀则市\",\"v\":\"540200\"},{\"c\":[{\"l\":\"卡若区\",\"v\":\"540302\"},{\"l\":\"江达县\",\"v\":\"540321\"},{\"l\":\"贡觉县\",\"v\":\"540322\"},{\"l\":\"类乌齐县\",\"v\":\"540323\"},{\"l\":\"丁青县\",\"v\":\"540324\"},{\"l\":\"察雅县\",\"v\":\"540325\"},{\"l\":\"八宿县\",\"v\":\"540326\"},{\"l\":\"左贡县\",\"v\":\"540327\"},{\"l\":\"芒康县\",\"v\":\"540328\"},{\"l\":\"洛隆县\",\"v\":\"540329\"},{\"l\":\"边坝县\",\"v\":\"540330\"}],\"l\":\"昌都市\",\"v\":\"540300\"},{\"c\":[{\"l\":\"巴宜区\",\"v\":\"540402\"},{\"l\":\"工布江达县\",\"v\":\"540421\"},{\"l\":\"米林县\",\"v\":\"540422\"},{\"l\":\"墨脱县\",\"v\":\"540423\"},{\"l\":\"波密县\",\"v\":\"540424\"},{\"l\":\"察隅县\",\"v\":\"540425\"},{\"l\":\"朗县\",\"v\":\"540426\"}],\"l\":\"林芝市\",\"v\":\"540400\"},{\"c\":[{\"l\":\"乃东区\",\"v\":\"540502\"},{\"l\":\"扎囊县\",\"v\":\"540521\"},{\"l\":\"贡嘎县\",\"v\":\"540522\"},{\"l\":\"桑日县\",\"v\":\"540523\"},{\"l\":\"琼结县\",\"v\":\"540524\"},{\"l\":\"曲松县\",\"v\":\"540525\"},{\"l\":\"措美县\",\"v\":\"540526\"},{\"l\":\"洛扎县\",\"v\":\"540527\"},{\"l\":\"加查县\",\"v\":\"540528\"},{\"l\":\"隆子县\",\"v\":\"540529\"},{\"l\":\"错那县\",\"v\":\"540530\"},{\"l\":\"浪卡子县\",\"v\":\"540531\"}],\"l\":\"山南市\",\"v\":\"540500\"},{\"c\":[{\"l\":\"色尼区\",\"v\":\"540602\"},{\"l\":\"嘉黎县\",\"v\":\"540621\"},{\"l\":\"比如县\",\"v\":\"540622\"},{\"l\":\"聂荣县\",\"v\":\"540623\"},{\"l\":\"安多县\",\"v\":\"540624\"},{\"l\":\"申扎县\",\"v\":\"540625\"},{\"l\":\"索县\",\"v\":\"540626\"},{\"l\":\"班戈县\",\"v\":\"540627\"},{\"l\":\"巴青县\",\"v\":\"540628\"},{\"l\":\"尼玛县\",\"v\":\"540629\"},{\"l\":\"双湖县\",\"v\":\"540630\"}],\"l\":\"那曲市\",\"v\":\"540600\"},{\"c\":[{\"l\":\"普兰县\",\"v\":\"542521\"},{\"l\":\"札达县\",\"v\":\"542522\"},{\"l\":\"噶尔县\",\"v\":\"542523\"},{\"l\":\"日土县\",\"v\":\"542524\"},{\"l\":\"革吉县\",\"v\":\"542525\"},{\"l\":\"改则县\",\"v\":\"542526\"},{\"l\":\"措勤县\",\"v\":\"542527\"}],\"l\":\"阿里地区\",\"v\":\"542500\"}],\"l\":\"西藏自治区\",\"v\":\"540000\"},{\"c\":[{\"c\":[{\"l\":\"新城区\",\"v\":\"610102\"},{\"l\":\"碑林区\",\"v\":\"610103\"},{\"l\":\"莲湖区\",\"v\":\"610104\"},{\"l\":\"灞桥区\",\"v\":\"610111\"},{\"l\":\"未央区\",\"v\":\"610112\"},{\"l\":\"雁塔区\",\"v\":\"610113\"},{\"l\":\"阎良区\",\"v\":\"610114\"},{\"l\":\"临潼区\",\"v\":\"610115\"},{\"l\":\"长安区\",\"v\":\"610116\"},{\"l\":\"高陵区\",\"v\":\"610117\"},{\"l\":\"鄠邑区\",\"v\":\"610118\"},{\"l\":\"蓝田县\",\"v\":\"610122\"},{\"l\":\"周至县\",\"v\":\"610124\"}],\"l\":\"西安市\",\"v\":\"610100\"},{\"c\":[{\"l\":\"王益区\",\"v\":\"610202\"},{\"l\":\"印台区\",\"v\":\"610203\"},{\"l\":\"耀州区\",\"v\":\"610204\"},{\"l\":\"宜君县\",\"v\":\"610222\"}],\"l\":\"铜川市\",\"v\":\"610200\"},{\"c\":[{\"l\":\"渭滨区\",\"v\":\"610302\"},{\"l\":\"金台区\",\"v\":\"610303\"},{\"l\":\"陈仓区\",\"v\":\"610304\"},{\"l\":\"凤翔县\",\"v\":\"610322\"},{\"l\":\"岐山县\",\"v\":\"610323\"},{\"l\":\"扶风县\",\"v\":\"610324\"},{\"l\":\"眉县\",\"v\":\"610326\"},{\"l\":\"陇县\",\"v\":\"610327\"},{\"l\":\"千阳县\",\"v\":\"610328\"},{\"l\":\"麟游县\",\"v\":\"610329\"},{\"l\":\"凤县\",\"v\":\"610330\"},{\"l\":\"太白县\",\"v\":\"610331\"}],\"l\":\"宝鸡市\",\"v\":\"610300\"},{\"c\":[{\"l\":\"秦都区\",\"v\":\"610402\"},{\"l\":\"杨陵区\",\"v\":\"610403\"},{\"l\":\"渭城区\",\"v\":\"610404\"},{\"l\":\"三原县\",\"v\":\"610422\"},{\"l\":\"泾阳县\",\"v\":\"610423\"},{\"l\":\"乾县\",\"v\":\"610424\"},{\"l\":\"礼泉县\",\"v\":\"610425\"},{\"l\":\"永寿县\",\"v\":\"610426\"},{\"l\":\"长武县\",\"v\":\"610428\"},{\"l\":\"旬邑县\",\"v\":\"610429\"},{\"l\":\"淳化县\",\"v\":\"610430\"},{\"l\":\"武功县\",\"v\":\"610431\"},{\"l\":\"兴平市\",\"v\":\"610481\"},{\"l\":\"彬州市\",\"v\":\"610482\"}],\"l\":\"咸阳市\",\"v\":\"610400\"},{\"c\":[{\"l\":\"临渭区\",\"v\":\"610502\"},{\"l\":\"华州区\",\"v\":\"610503\"},{\"l\":\"潼关县\",\"v\":\"610522\"},{\"l\":\"大荔县\",\"v\":\"610523\"},{\"l\":\"合阳县\",\"v\":\"610524\"},{\"l\":\"澄城县\",\"v\":\"610525\"},{\"l\":\"蒲城县\",\"v\":\"610526\"},{\"l\":\"白水县\",\"v\":\"610527\"},{\"l\":\"富平县\",\"v\":\"610528\"},{\"l\":\"韩城市\",\"v\":\"610581\"},{\"l\":\"华阴市\",\"v\":\"610582\"}],\"l\":\"渭南市\",\"v\":\"610500\"},{\"c\":[{\"l\":\"宝塔区\",\"v\":\"610602\"},{\"l\":\"安塞区\",\"v\":\"610603\"},{\"l\":\"延长县\",\"v\":\"610621\"},{\"l\":\"延川县\",\"v\":\"610622\"},{\"l\":\"志丹县\",\"v\":\"610625\"},{\"l\":\"吴起县\",\"v\":\"610626\"},{\"l\":\"甘泉县\",\"v\":\"610627\"},{\"l\":\"富县\",\"v\":\"610628\"},{\"l\":\"洛川县\",\"v\":\"610629\"},{\"l\":\"宜川县\",\"v\":\"610630\"},{\"l\":\"黄龙县\",\"v\":\"610631\"},{\"l\":\"黄陵县\",\"v\":\"610632\"},{\"l\":\"子长市\",\"v\":\"610681\"}],\"l\":\"延安市\",\"v\":\"610600\"},{\"c\":[{\"l\":\"汉台区\",\"v\":\"610702\"},{\"l\":\"南郑区\",\"v\":\"610703\"},{\"l\":\"城固县\",\"v\":\"610722\"},{\"l\":\"洋县\",\"v\":\"610723\"},{\"l\":\"西乡县\",\"v\":\"610724\"},{\"l\":\"勉县\",\"v\":\"610725\"},{\"l\":\"宁强县\",\"v\":\"610726\"},{\"l\":\"略阳县\",\"v\":\"610727\"},{\"l\":\"镇巴县\",\"v\":\"610728\"},{\"l\":\"留坝县\",\"v\":\"610729\"},{\"l\":\"佛坪县\",\"v\":\"610730\"}],\"l\":\"汉中市\",\"v\":\"610700\"},{\"c\":[{\"l\":\"榆阳区\",\"v\":\"610802\"},{\"l\":\"横山区\",\"v\":\"610803\"},{\"l\":\"府谷县\",\"v\":\"610822\"},{\"l\":\"靖边县\",\"v\":\"610824\"},{\"l\":\"定边县\",\"v\":\"610825\"},{\"l\":\"绥德县\",\"v\":\"610826\"},{\"l\":\"米脂县\",\"v\":\"610827\"},{\"l\":\"佳县\",\"v\":\"610828\"},{\"l\":\"吴堡县\",\"v\":\"610829\"},{\"l\":\"清涧县\",\"v\":\"610830\"},{\"l\":\"子洲县\",\"v\":\"610831\"},{\"l\":\"神木市\",\"v\":\"610881\"}],\"l\":\"榆林市\",\"v\":\"610800\"},{\"c\":[{\"l\":\"汉滨区\",\"v\":\"610902\"},{\"l\":\"汉阴县\",\"v\":\"610921\"},{\"l\":\"石泉县\",\"v\":\"610922\"},{\"l\":\"宁陕县\",\"v\":\"610923\"},{\"l\":\"紫阳县\",\"v\":\"610924\"},{\"l\":\"岚皋县\",\"v\":\"610925\"},{\"l\":\"平利县\",\"v\":\"610926\"},{\"l\":\"镇坪县\",\"v\":\"610927\"},{\"l\":\"旬阳县\",\"v\":\"610928\"},{\"l\":\"白河县\",\"v\":\"610929\"}],\"l\":\"安康市\",\"v\":\"610900\"},{\"c\":[{\"l\":\"商州区\",\"v\":\"611002\"},{\"l\":\"洛南县\",\"v\":\"611021\"},{\"l\":\"丹凤县\",\"v\":\"611022\"},{\"l\":\"商南县\",\"v\":\"611023\"},{\"l\":\"山阳县\",\"v\":\"611024\"},{\"l\":\"镇安县\",\"v\":\"611025\"},{\"l\":\"柞水县\",\"v\":\"611026\"}],\"l\":\"商洛市\",\"v\":\"611000\"}],\"l\":\"陕西省\",\"v\":\"610000\"},{\"c\":[{\"c\":[{\"l\":\"城关区\",\"v\":\"620102\"},{\"l\":\"七里河区\",\"v\":\"620103\"},{\"l\":\"西固区\",\"v\":\"620104\"},{\"l\":\"安宁区\",\"v\":\"620105\"},{\"l\":\"红古区\",\"v\":\"620111\"},{\"l\":\"永登县\",\"v\":\"620121\"},{\"l\":\"皋兰县\",\"v\":\"620122\"},{\"l\":\"榆中县\",\"v\":\"620123\"},{\"l\":\"兰州新区\",\"v\":\"620171\"}],\"l\":\"兰州市\",\"v\":\"620100\"},{\"l\":\"嘉峪关市\",\"v\":\"620200\"},{\"c\":[{\"l\":\"金川区\",\"v\":\"620302\"},{\"l\":\"永昌县\",\"v\":\"620321\"}],\"l\":\"金昌市\",\"v\":\"620300\"},{\"c\":[{\"l\":\"白银区\",\"v\":\"620402\"},{\"l\":\"平川区\",\"v\":\"620403\"},{\"l\":\"靖远县\",\"v\":\"620421\"},{\"l\":\"会宁县\",\"v\":\"620422\"},{\"l\":\"景泰县\",\"v\":\"620423\"}],\"l\":\"白银市\",\"v\":\"620400\"},{\"c\":[{\"l\":\"秦州区\",\"v\":\"620502\"},{\"l\":\"麦积区\",\"v\":\"620503\"},{\"l\":\"清水县\",\"v\":\"620521\"},{\"l\":\"秦安县\",\"v\":\"620522\"},{\"l\":\"甘谷县\",\"v\":\"620523\"},{\"l\":\"武山县\",\"v\":\"620524\"},{\"l\":\"张家川回族自治县\",\"v\":\"620525\"}],\"l\":\"天水市\",\"v\":\"620500\"},{\"c\":[{\"l\":\"凉州区\",\"v\":\"620602\"},{\"l\":\"民勤县\",\"v\":\"620621\"},{\"l\":\"古浪县\",\"v\":\"620622\"},{\"l\":\"天祝藏族自治县\",\"v\":\"620623\"}],\"l\":\"武威市\",\"v\":\"620600\"},{\"c\":[{\"l\":\"甘州区\",\"v\":\"620702\"},{\"l\":\"肃南裕固族自治县\",\"v\":\"620721\"},{\"l\":\"民乐县\",\"v\":\"620722\"},{\"l\":\"临泽县\",\"v\":\"620723\"},{\"l\":\"高台县\",\"v\":\"620724\"},{\"l\":\"山丹县\",\"v\":\"620725\"}],\"l\":\"张掖市\",\"v\":\"620700\"},{\"c\":[{\"l\":\"崆峒区\",\"v\":\"620802\"},{\"l\":\"泾川县\",\"v\":\"620821\"},{\"l\":\"灵台县\",\"v\":\"620822\"},{\"l\":\"崇信县\",\"v\":\"620823\"},{\"l\":\"庄浪县\",\"v\":\"620825\"},{\"l\":\"静宁县\",\"v\":\"620826\"},{\"l\":\"华亭市\",\"v\":\"620881\"}],\"l\":\"平凉市\",\"v\":\"620800\"},{\"c\":[{\"l\":\"肃州区\",\"v\":\"620902\"},{\"l\":\"金塔县\",\"v\":\"620921\"},{\"l\":\"瓜州县\",\"v\":\"620922\"},{\"l\":\"肃北蒙古族自治县\",\"v\":\"620923\"},{\"l\":\"阿克塞哈萨克族自治县\",\"v\":\"620924\"},{\"l\":\"玉门市\",\"v\":\"620981\"},{\"l\":\"敦煌市\",\"v\":\"620982\"}],\"l\":\"酒泉市\",\"v\":\"620900\"},{\"c\":[{\"l\":\"西峰区\",\"v\":\"621002\"},{\"l\":\"庆城县\",\"v\":\"621021\"},{\"l\":\"环县\",\"v\":\"621022\"},{\"l\":\"华池县\",\"v\":\"621023\"},{\"l\":\"合水县\",\"v\":\"621024\"},{\"l\":\"正宁县\",\"v\":\"621025\"},{\"l\":\"宁县\",\"v\":\"621026\"},{\"l\":\"镇原县\",\"v\":\"621027\"}],\"l\":\"庆阳市\",\"v\":\"621000\"},{\"c\":[{\"l\":\"安定区\",\"v\":\"621102\"},{\"l\":\"通渭县\",\"v\":\"621121\"},{\"l\":\"陇西县\",\"v\":\"621122\"},{\"l\":\"渭源县\",\"v\":\"621123\"},{\"l\":\"临洮县\",\"v\":\"621124\"},{\"l\":\"漳县\",\"v\":\"621125\"},{\"l\":\"岷县\",\"v\":\"621126\"}],\"l\":\"定西市\",\"v\":\"621100\"},{\"c\":[{\"l\":\"武都区\",\"v\":\"621202\"},{\"l\":\"成县\",\"v\":\"621221\"},{\"l\":\"文县\",\"v\":\"621222\"},{\"l\":\"宕昌县\",\"v\":\"621223\"},{\"l\":\"康县\",\"v\":\"621224\"},{\"l\":\"西和县\",\"v\":\"621225\"},{\"l\":\"礼县\",\"v\":\"621226\"},{\"l\":\"徽县\",\"v\":\"621227\"},{\"l\":\"两当县\",\"v\":\"621228\"}],\"l\":\"陇南市\",\"v\":\"621200\"},{\"c\":[{\"l\":\"临夏市\",\"v\":\"622901\"},{\"l\":\"临夏县\",\"v\":\"622921\"},{\"l\":\"康乐县\",\"v\":\"622922\"},{\"l\":\"永靖县\",\"v\":\"622923\"},{\"l\":\"广河县\",\"v\":\"622924\"},{\"l\":\"和政县\",\"v\":\"622925\"},{\"l\":\"东乡族自治县\",\"v\":\"622926\"},{\"l\":\"积石山保安族东乡族撒拉族自治县\",\"v\":\"622927\"}],\"l\":\"临夏回族自治州\",\"v\":\"622900\"},{\"c\":[{\"l\":\"合作市\",\"v\":\"623001\"},{\"l\":\"临潭县\",\"v\":\"623021\"},{\"l\":\"卓尼县\",\"v\":\"623022\"},{\"l\":\"舟曲县\",\"v\":\"623023\"},{\"l\":\"迭部县\",\"v\":\"623024\"},{\"l\":\"玛曲县\",\"v\":\"623025\"},{\"l\":\"碌曲县\",\"v\":\"623026\"},{\"l\":\"夏河县\",\"v\":\"623027\"}],\"l\":\"甘南藏族自治州\",\"v\":\"623000\"}],\"l\":\"甘肃省\",\"v\":\"620000\"},{\"c\":[{\"c\":[{\"l\":\"城东区\",\"v\":\"630102\"},{\"l\":\"城中区\",\"v\":\"630103\"},{\"l\":\"城西区\",\"v\":\"630104\"},{\"l\":\"城北区\",\"v\":\"630105\"},{\"l\":\"湟中区\",\"v\":\"630106\"},{\"l\":\"大通回族土族自治县\",\"v\":\"630121\"},{\"l\":\"湟源县\",\"v\":\"630123\"}],\"l\":\"西宁市\",\"v\":\"630100\"},{\"c\":[{\"l\":\"乐都区\",\"v\":\"630202\"},{\"l\":\"平安区\",\"v\":\"630203\"},{\"l\":\"民和回族土族自治县\",\"v\":\"630222\"},{\"l\":\"互助土族自治县\",\"v\":\"630223\"},{\"l\":\"化隆回族自治县\",\"v\":\"630224\"},{\"l\":\"循化撒拉族自治县\",\"v\":\"630225\"}],\"l\":\"海东市\",\"v\":\"630200\"},{\"c\":[{\"l\":\"门源回族自治县\",\"v\":\"632221\"},{\"l\":\"祁连县\",\"v\":\"632222\"},{\"l\":\"海晏县\",\"v\":\"632223\"},{\"l\":\"刚察县\",\"v\":\"632224\"}],\"l\":\"海北藏族自治州\",\"v\":\"632200\"},{\"c\":[{\"l\":\"同仁县\",\"v\":\"632321\"},{\"l\":\"尖扎县\",\"v\":\"632322\"},{\"l\":\"泽库县\",\"v\":\"632323\"},{\"l\":\"河南蒙古族自治县\",\"v\":\"632324\"}],\"l\":\"黄南藏族自治州\",\"v\":\"632300\"},{\"c\":[{\"l\":\"共和县\",\"v\":\"632521\"},{\"l\":\"同德县\",\"v\":\"632522\"},{\"l\":\"贵德县\",\"v\":\"632523\"},{\"l\":\"兴海县\",\"v\":\"632524\"},{\"l\":\"贵南县\",\"v\":\"632525\"}],\"l\":\"海南藏族自治州\",\"v\":\"632500\"},{\"c\":[{\"l\":\"玛沁县\",\"v\":\"632621\"},{\"l\":\"班玛县\",\"v\":\"632622\"},{\"l\":\"甘德县\",\"v\":\"632623\"},{\"l\":\"达日县\",\"v\":\"632624\"},{\"l\":\"久治县\",\"v\":\"632625\"},{\"l\":\"玛多县\",\"v\":\"632626\"}],\"l\":\"果洛藏族自治州\",\"v\":\"632600\"},{\"c\":[{\"l\":\"玉树市\",\"v\":\"632701\"},{\"l\":\"杂多县\",\"v\":\"632722\"},{\"l\":\"称多县\",\"v\":\"632723\"},{\"l\":\"治多县\",\"v\":\"632724\"},{\"l\":\"囊谦县\",\"v\":\"632725\"},{\"l\":\"曲麻莱县\",\"v\":\"632726\"}],\"l\":\"玉树藏族自治州\",\"v\":\"632700\"},{\"c\":[{\"l\":\"格尔木市\",\"v\":\"632801\"},{\"l\":\"德令哈市\",\"v\":\"632802\"},{\"l\":\"茫崖市\",\"v\":\"632803\"},{\"l\":\"乌兰县\",\"v\":\"632821\"},{\"l\":\"都兰县\",\"v\":\"632822\"},{\"l\":\"天峻县\",\"v\":\"632823\"},{\"l\":\"大柴旦行政委员会\",\"v\":\"632857\"}],\"l\":\"海西蒙古族藏族自治州\",\"v\":\"632800\"}],\"l\":\"青海省\",\"v\":\"630000\"},{\"c\":[{\"c\":[{\"l\":\"兴庆区\",\"v\":\"640104\"},{\"l\":\"西夏区\",\"v\":\"640105\"},{\"l\":\"金凤区\",\"v\":\"640106\"},{\"l\":\"永宁县\",\"v\":\"640121\"},{\"l\":\"贺兰县\",\"v\":\"640122\"},{\"l\":\"灵武市\",\"v\":\"640181\"}],\"l\":\"银川市\",\"v\":\"640100\"},{\"c\":[{\"l\":\"大武口区\",\"v\":\"640202\"},{\"l\":\"惠农区\",\"v\":\"640205\"},{\"l\":\"平罗县\",\"v\":\"640221\"}],\"l\":\"石嘴山市\",\"v\":\"640200\"},{\"c\":[{\"l\":\"利通区\",\"v\":\"640302\"},{\"l\":\"红寺堡区\",\"v\":\"640303\"},{\"l\":\"盐池县\",\"v\":\"640323\"},{\"l\":\"同心县\",\"v\":\"640324\"},{\"l\":\"青铜峡市\",\"v\":\"640381\"}],\"l\":\"吴忠市\",\"v\":\"640300\"},{\"c\":[{\"l\":\"原州区\",\"v\":\"640402\"},{\"l\":\"西吉县\",\"v\":\"640422\"},{\"l\":\"隆德县\",\"v\":\"640423\"},{\"l\":\"泾源县\",\"v\":\"640424\"},{\"l\":\"彭阳县\",\"v\":\"640425\"}],\"l\":\"固原市\",\"v\":\"640400\"},{\"c\":[{\"l\":\"沙坡头区\",\"v\":\"640502\"},{\"l\":\"中宁县\",\"v\":\"640521\"},{\"l\":\"海原县\",\"v\":\"640522\"}],\"l\":\"中卫市\",\"v\":\"640500\"}],\"l\":\"宁夏回族自治区\",\"v\":\"640000\"},{\"c\":[{\"c\":[{\"l\":\"天山区\",\"v\":\"650102\"},{\"l\":\"沙依巴克区\",\"v\":\"650103\"},{\"l\":\"新市区\",\"v\":\"650104\"},{\"l\":\"水磨沟区\",\"v\":\"650105\"},{\"l\":\"头屯河区\",\"v\":\"650106\"},{\"l\":\"达坂城区\",\"v\":\"650107\"},{\"l\":\"米东区\",\"v\":\"650109\"},{\"l\":\"乌鲁木齐县\",\"v\":\"650121\"}],\"l\":\"乌鲁木齐市\",\"v\":\"650100\"},{\"c\":[{\"l\":\"独山子区\",\"v\":\"650202\"},{\"l\":\"克拉玛依区\",\"v\":\"650203\"},{\"l\":\"白碱滩区\",\"v\":\"650204\"},{\"l\":\"乌尔禾区\",\"v\":\"650205\"}],\"l\":\"克拉玛依市\",\"v\":\"650200\"},{\"c\":[{\"l\":\"高昌区\",\"v\":\"650402\"},{\"l\":\"鄯善县\",\"v\":\"650421\"},{\"l\":\"托克逊县\",\"v\":\"650422\"}],\"l\":\"吐鲁番市\",\"v\":\"650400\"},{\"c\":[{\"l\":\"伊州区\",\"v\":\"650502\"},{\"l\":\"巴里坤哈萨克自治县\",\"v\":\"650521\"},{\"l\":\"伊吾县\",\"v\":\"650522\"}],\"l\":\"哈密市\",\"v\":\"650500\"},{\"c\":[{\"l\":\"昌吉市\",\"v\":\"652301\"},{\"l\":\"阜康市\",\"v\":\"652302\"},{\"l\":\"呼图壁县\",\"v\":\"652323\"},{\"l\":\"玛纳斯县\",\"v\":\"652324\"},{\"l\":\"奇台县\",\"v\":\"652325\"},{\"l\":\"吉木萨尔县\",\"v\":\"652327\"},{\"l\":\"木垒哈萨克自治县\",\"v\":\"652328\"}],\"l\":\"昌吉回族自治州\",\"v\":\"652300\"},{\"c\":[{\"l\":\"博乐市\",\"v\":\"652701\"},{\"l\":\"阿拉山口市\",\"v\":\"652702\"},{\"l\":\"精河县\",\"v\":\"652722\"},{\"l\":\"温泉县\",\"v\":\"652723\"}],\"l\":\"博尔塔拉蒙古自治州\",\"v\":\"652700\"},{\"c\":[{\"l\":\"库尔勒市\",\"v\":\"652801\"},{\"l\":\"轮台县\",\"v\":\"652822\"},{\"l\":\"尉犁县\",\"v\":\"652823\"},{\"l\":\"若羌县\",\"v\":\"652824\"},{\"l\":\"且末县\",\"v\":\"652825\"},{\"l\":\"焉耆回族自治县\",\"v\":\"652826\"},{\"l\":\"和静县\",\"v\":\"652827\"},{\"l\":\"和硕县\",\"v\":\"652828\"},{\"l\":\"博湖县\",\"v\":\"652829\"},{\"l\":\"库尔勒经济技术开发区\",\"v\":\"652871\"}],\"l\":\"巴音郭楞蒙古自治州\",\"v\":\"652800\"},{\"c\":[{\"l\":\"阿克苏市\",\"v\":\"652901\"},{\"l\":\"库车市\",\"v\":\"652902\"},{\"l\":\"温宿县\",\"v\":\"652922\"},{\"l\":\"沙雅县\",\"v\":\"652924\"},{\"l\":\"新和县\",\"v\":\"652925\"},{\"l\":\"拜城县\",\"v\":\"652926\"},{\"l\":\"乌什县\",\"v\":\"652927\"},{\"l\":\"阿瓦提县\",\"v\":\"652928\"},{\"l\":\"柯坪县\",\"v\":\"652929\"}],\"l\":\"阿克苏地区\",\"v\":\"652900\"},{\"c\":[{\"l\":\"阿图什市\",\"v\":\"653001\"},{\"l\":\"阿克陶县\",\"v\":\"653022\"},{\"l\":\"阿合奇县\",\"v\":\"653023\"},{\"l\":\"乌恰县\",\"v\":\"653024\"}],\"l\":\"克孜勒苏柯尔克孜自治州\",\"v\":\"653000\"},{\"c\":[{\"l\":\"喀什市\",\"v\":\"653101\"},{\"l\":\"疏附县\",\"v\":\"653121\"},{\"l\":\"疏勒县\",\"v\":\"653122\"},{\"l\":\"英吉沙县\",\"v\":\"653123\"},{\"l\":\"泽普县\",\"v\":\"653124\"},{\"l\":\"莎车县\",\"v\":\"653125\"},{\"l\":\"叶城县\",\"v\":\"653126\"},{\"l\":\"麦盖提县\",\"v\":\"653127\"},{\"l\":\"岳普湖县\",\"v\":\"653128\"},{\"l\":\"伽师县\",\"v\":\"653129\"},{\"l\":\"巴楚县\",\"v\":\"653130\"},{\"l\":\"塔什库尔干塔吉克自治县\",\"v\":\"653131\"}],\"l\":\"喀什地区\",\"v\":\"653100\"},{\"c\":[{\"l\":\"和田市\",\"v\":\"653201\"},{\"l\":\"和田县\",\"v\":\"653221\"},{\"l\":\"墨玉县\",\"v\":\"653222\"},{\"l\":\"皮山县\",\"v\":\"653223\"},{\"l\":\"洛浦县\",\"v\":\"653224\"},{\"l\":\"策勒县\",\"v\":\"653225\"},{\"l\":\"于田县\",\"v\":\"653226\"},{\"l\":\"民丰县\",\"v\":\"653227\"}],\"l\":\"和田地区\",\"v\":\"653200\"},{\"c\":[{\"l\":\"伊宁市\",\"v\":\"654002\"},{\"l\":\"奎屯市\",\"v\":\"654003\"},{\"l\":\"霍尔果斯市\",\"v\":\"654004\"},{\"l\":\"伊宁县\",\"v\":\"654021\"},{\"l\":\"察布查尔锡伯自治县\",\"v\":\"654022\"},{\"l\":\"霍城县\",\"v\":\"654023\"},{\"l\":\"巩留县\",\"v\":\"654024\"},{\"l\":\"新源县\",\"v\":\"654025\"},{\"l\":\"昭苏县\",\"v\":\"654026\"},{\"l\":\"特克斯县\",\"v\":\"654027\"},{\"l\":\"尼勒克县\",\"v\":\"654028\"}],\"l\":\"伊犁哈萨克自治州\",\"v\":\"654000\"},{\"c\":[{\"l\":\"塔城市\",\"v\":\"654201\"},{\"l\":\"乌苏市\",\"v\":\"654202\"},{\"l\":\"额敏县\",\"v\":\"654221\"},{\"l\":\"沙湾县\",\"v\":\"654223\"},{\"l\":\"托里县\",\"v\":\"654224\"},{\"l\":\"裕民县\",\"v\":\"654225\"},{\"l\":\"和布克赛尔蒙古自治县\",\"v\":\"654226\"}],\"l\":\"塔城地区\",\"v\":\"654200\"},{\"c\":[{\"l\":\"阿勒泰市\",\"v\":\"654301\"},{\"l\":\"布尔津县\",\"v\":\"654321\"},{\"l\":\"富蕴县\",\"v\":\"654322\"},{\"l\":\"福海县\",\"v\":\"654323\"},{\"l\":\"哈巴河县\",\"v\":\"654324\"},{\"l\":\"青河县\",\"v\":\"654325\"},{\"l\":\"吉木乃县\",\"v\":\"654326\"}],\"l\":\"阿勒泰地区\",\"v\":\"654300\"},{\"c\":[{\"l\":\"石河子市\",\"v\":\"659001\"},{\"l\":\"阿拉尔市\",\"v\":\"659002\"},{\"l\":\"图木舒克市\",\"v\":\"659003\"},{\"l\":\"五家渠市\",\"v\":\"659004\"},{\"l\":\"北屯市\",\"v\":\"659005\"},{\"l\":\"铁门关市\",\"v\":\"659006\"},{\"l\":\"双河市\",\"v\":\"659007\"},{\"l\":\"可克达拉市\",\"v\":\"659008\"},{\"l\":\"昆玉市\",\"v\":\"659009\"},{\"l\":\"胡杨河市\",\"v\":\"659010\"}],\"l\":\"自治区直辖县级行政区划\",\"v\":\"659000\"}],\"l\":\"新疆维吾尔自治区\",\"v\":\"650000\"}]");

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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/index.vue?vue&type=template&id=3359bf96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{staticClass:"form-design"},[_c('el-aside',{attrs:{"width":"260px"}},[_vm._t("drag"),_c('DragPanel',{attrs:{"basic-item":_vm.basicItem,"personal-item":_vm.personalItem,"layout-item":_vm.layoutItem},on:{"handleDragType":_vm.handleDragType}})],2),_c('el-main',[_c('el-row',{staticClass:"form-design",attrs:{"gutter":20}},[_c('el-col',{staticClass:"height-all",attrs:{"span":18}},[_c('el-card',{staticClass:"box-card form-contains",attrs:{"header":"表单面板"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"el-card__header"},[_vm._t("formName",[_vm._v("表单面板")])],2),_c('span',{staticStyle:{"float":"right"}},[_vm._t("controlButton"),(_vm.clear)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-delete"},on:{"click":_vm.handleClear}},[_vm._v("清空")]):_vm._e(),(_vm.preview)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-view"},on:{"click":_vm.handlePreview}},[_vm._v("预览")]):_vm._e(),(_vm.reder)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-view"},on:{"click":_vm.handleRender}},[_vm._v("渲染")]):_vm._e(),(_vm.imp)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-download"},on:{"click":_vm.handleImport}},[_vm._v("导入")]):_vm._e(),(_vm.exp)?_c('el-button',{attrs:{"type":"text","size":"medium","icon":"el-icon-upload2"},on:{"click":_vm.handleGenerateJson}},[_vm._v("导出")]):_vm._e()],2)]),_c('DesignPanel',{ref:"dragPanel",attrs:{"data":_vm.data,"dragType":_vm.dragType,"selectForm":_vm.selectForm},on:{"changeSelectItem":_vm.changeSelectItem}})],1)],1),_c('el-col',{staticClass:"height-all",attrs:{"span":6}},[_c('el-card',{staticClass:"box-card form-properties",attrs:{"header":"属性配置"}},[_c('Properties',{attrs:{"data":_vm.data,"selectItem":_vm.selectItem}},[_c('template',{attrs:{"selectItem":_vm.selectItem},slot:"custom-properties"},[_vm._t("custom-properties",null,{"selectItem":_vm.selectItem})],2),_c('template',{attrs:{"data":_vm.data},slot:"form-extend-properties"},[_vm._t("form-extend-properties",null,{"data":_vm.data})],2),_c('template',{attrs:{"data":_vm.data},slot:"extend-tab"},[_vm._t("extend-tab",null,{"data":_vm.data})],2)],2)],1)],1)],1)],1),(_vm.previewVisible)?_c('Preview',{ref:"preview"}):_vm._e(),(_vm.renderVisisble)?_c('renderPreview',{ref:"renderPreview"}):_vm._e(),(_vm.modelVisible)?_c('previewCode',{ref:"model"}):_vm._e(),_c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"模板数据","visible":_vm.importVisible,"append-to-body":true,"width":"850px"},on:{"update:visible":function($event){_vm.importVisible=$event}}},[_c('el-input',{attrs:{"type":"textarea","rows":3},model:{value:(_vm.importText),callback:function ($$v) {_vm.importText=$$v},expression:"importText"}}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.importVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":_vm.importModel}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/index.vue?vue&type=template&id=3359bf96&

// EXTERNAL MODULE: ./node_modules/_lodash@4.17.20@lodash/cloneDeep.js
var cloneDeep = __webpack_require__("e7e5");
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/drag-panel/index.vue?vue&type=template&id=7cb10758&
var drag_panelvue_type_template_id_7cb10758_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card form-item ",attrs:{"header":"组件列表"}},[_c('el-collapse',{attrs:{"accordion":""},model:{value:(_vm.actives),callback:function ($$v) {_vm.actives=$$v},expression:"actives"}},[(_vm.basicItem == true || _vm.basicItem.length > 0)?_c('el-collapse-item',{attrs:{"title":"基础组件","name":"1"}},[_c('DragItem',{attrs:{"list":_vm.basicsArray},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart,"end":_vm.handleEnd}})],1):_vm._e(),(_vm.personalArray.length > 0 && (_vm.personalItem == true || _vm.personalItem.length > 0))?_c('el-collapse-item',{attrs:{"title":"个性化组件","name":"2"}},[_c('DragItem',{attrs:{"list":_vm.personalArray},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart,"end":_vm.handleEnd}})],1):_vm._e(),(_vm.customComponents.length > 0)?_c('el-collapse-item',{attrs:{"title":"自定义组件","name":"3"}},[_c('DragItem',{attrs:{"list":_vm.customComponents},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart,"end":_vm.handleEnd}})],1):_vm._e(),(_vm.layoutItem == true || _vm.layoutItem.length > 0)?_c('el-collapse-item',{attrs:{"title":"布局组件","name":"4"}},[_c('DragItem',{attrs:{"list":_vm.layoutArray},on:{"generateKey":_vm.generateKey,"handleListPush":_vm.handleListPush,"start":_vm.handleStart,"end":_vm.handleEnd}})],1):_vm._e()],1)],1)}
var drag_panelvue_type_template_id_7cb10758_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/index.vue?vue&type=template&id=7cb10758&

// CONCATENATED MODULE: ./packages/form/src/utils/index.js

const http_get_file_list_url = 'http://localhost:9000/sxfw/file/list';
const http_upload_file_url = 'http://localhost:9000/sxfw/file/upload'
const http_down_file_url = 'http://localhost:9000/sxfw/file/fileDown'

 

function dynamicFun(script , model , key="$") {
  if(!script) return false 
  const func = script.indexOf('return') >= 0 ? '{' + script + '}' : 'return (' + script + ')' 
  const Fn = new Function(key, func)
  return Fn(model)
}
 
 
function dateFormater(date , fmt) {  
  const o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "H+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}
    
 
// CONCATENATED MODULE: ./packages/form/src/form-design/config.js



/**
* 不需要回填属性 model的组件 
*/
const noModelList = [
  "button",
            "divider",
            "card",
            
            "grid",
            "table",
            "alert",
            "text",
            "html"
]
 
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
        trigger: ['blur']
      }
    ]
  },
  {
    type: "textarea", // 表单类型
    label: "文本框", // 标题文字  
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
        message: "必填项",
        trigger: ['blur']
      }
    ]
  },
  {
    type: "number", // 表单类型
    label: "数字输入框", // 标题文字  
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
      dynamic: 0, // 数据获取方式
      remoteFunc: '',//远程获取数据链接
      dataPath: '',
      remoteValue:'' ,
      remoteLabel:'',
      dictType: '' ,// 数据字典类型
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
      dictType: '' ,// 数据字典类型
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
       dictType: '' ,// 数据字典类型
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
    type: "datePicker", // 表单类型
    label: "日期时间选择框", // 标题文字  
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
      format: "yyyy-MM-dd HH:mm:ss" // 展示格式
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
    options: {
      defaultValue: null,
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
    type: "alert", // 提示
    label: "提示", // 标题 
    options: { 
      tooptip: '',  // 提示 
      title: '' ,  //title
      type: 'info', //类型
      description: '',
      closable: true , // 是否可关闭
      center: true , // 是否居中
      showIcon: false, //  是否西安市图标
      effect: 'light' , // 主题 light/dark
      closeText: '' , //关闭按钮自定义文本 
    }, 
    key: "" 
  },
  {
    type: "slider", // 表单类型
    label: "滑动输入条", // 标题文字  
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
  { 
    type: "uploadFile", // 表单类型
    label: "上传文件", // 标题文字  
    options: {
      defaultValue: [],
      multiple: false,
      disabled: false,
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏 
      width: "100%", 
      limit: 3,  
      limitSize: 10, // 文件大小限制 单位MB
      accept:"", // 接受上传的文件类型
      name:"file" , //上传的文件字段名
      headers: [{"label":"token" , "value":"64685b8ab1aa962eab779b62716ee84d"}], //上传携带的头信息
      action: 'http://localhost:8990/ng-server/file/upload',
      responseFileUrl: 'data.url' , // 上传完成后需要从返回结果中获取文件地址的url
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
    options: {
      defaultValue: [ ],
      multiple: false,
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false,
      width: "100%", 
      tooptip: '', // 提示
      limit: 3,
      placeholder: "上传图片",  
      limitSize: 10, // 文件大小限制 单位MB 
      name:"file" , //上传的文件字段名
      headers: [],
      action: '',
      responseFileUrl: '' , // 上传完成后需要从返回结果中获取文件地址的url
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
  }, 
  {
    type: "cascader", // 表单类型
    label: "级联选择器", // 标题文字  
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
    options: {
      type: "primary",
      handle: "submit",
      textAlign: 'left',
      dynamicFun: "",
      tooptip: '', // 提示
      hidden: false, // 是否隐藏，false显示，true隐藏
      disabled: false // 是否禁用，false不禁用，true禁用
    },
    key: ""
  } ,
  {
      type: "batch",
      label: "动态表格",  
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
        colWidth:{},
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

// 2021-09-29 lyf 增加个性化组件 
const personalList = [
  {
    type: "state", // 表单类型
    label: "区划选择", // 标题文字   
    options: {
      defaultValue: '', // 默认值 Boolean 类型
      maxLevel: 3 , // 级别 1-省 2-地市 3-区县
      showAllPath: true , // 是否在label中回显所有路径
      separator: '-' , // 显示所有路径的时候分隔符
      oneByOne: true , // 递进式显示区划选择
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

]
  
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
   {
    type: "control",
    label: "弹性容器", 
    list: [],
    options: {  
      width: "100%",
      bordered: true,
      disabled: false,
      
      customStyle: "",
      customClass: '',
      noCopy: false,
      noAdd: false,
      noRemove: false
    },
    key: "",
    model: ""
  }, 
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/drag-panel/item.vue?vue&type=template&id=1f2475d0&
var itemvue_type_template_id_1f2475d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-list"},[_c('draggable',_vm._b({attrs:{"tag":"ul","value":_vm.list,"force-fallback":true},on:{"start":function($event){return _vm.handleStart($event, _vm.list)},"end":_vm.handleEnd}},'draggable',{
	      group: { name: 'form-draggable', pull: 'clone', put: true },
	      sort: false,
	      animation: 180,
	      ghostClass: 'moving'
	    },false),_vm._l((_vm.list),function(val,index){return _c('li',{key:index,staticClass:"form-edit-widget-label",on:{"click":function($event){return _vm.$emit('handleListPush', val)}}},[_c('a',[_c('span',[_vm._v(_vm._s(val.label))])])])}),0)],1)}
var itemvue_type_template_id_1f2475d0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/item.vue?vue&type=template&id=1f2475d0&

// EXTERNAL MODULE: ./node_modules/_vuedraggable@2.24.3@vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__("3335");
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/drag-panel/item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var itemvue_type_script_lang_js_ = ({
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
      //this.$emit("start", list ,[e.oldIndex].type);
      this.$emit('start', list, e.oldIndex)
    },
    handleEnd(){
    	this.$emit('end')
    }
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/item.vue?vue&type=script&lang=js&
 /* harmony default export */ var drag_panel_itemvue_type_script_lang_js_ = (itemvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/item.vue





/* normalize component */

var component = normalizeComponent(
  drag_panel_itemvue_type_script_lang_js_,
  itemvue_type_template_id_1f2475d0_render,
  itemvue_type_template_id_1f2475d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var item = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/drag-panel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	components: {
		DragItem: item
	},
	data(){
		return {
			actives:['1'],
			noModel: noModelList,
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
		    } 
		}
	},
	props: {
		 // 基础组件需要展示的列表 或者false全部不展示
	    basicItem: {
	      type: [Boolean , Array] 
	    }, 
	    // 个性化组件需要展示的列表 或者false全部不展示
	    personalItem: {
	      type: [Boolean , Array] 
	    },
	     //布局组件需要展示的列表 或者false全部不展示
	    layoutItem: {
	      type: [Boolean , Array] 
	    } 
	},
	computed: {
	    basicsArray() {
	    	if(this.basicItem == false) {
	    		return []
	    	}
	      	// 计算需要显示的基础字段
	      	let blist = basicsList
	      	if(this.basicItem && this.basicItem instanceof Array && this.basicItem.length > 0) {
	      		blist = blist.filter(t=> this.basicItem.indexOf(t.type) >= 0)
	      	}
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}

	      	}) ;
	      	return blist
	    },
	    personalArray(){
	    	if(this.personalItem == false) {
	    		return []
	    	}
	    	// 计算需要显示的基础字段
	      	let blist = personalList
	      	if(this.personalItem && this.personalItem instanceof Array && this.personalItem.length > 0) {
	      		blist = blist.filter(t=> this.personalItem.indexOf(t.type) >= 0)
	      	}
	      	blist.forEach(t=>{
	      		t.options.dynamicHide = false
        		t.options.dynamicHideValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}

	      	}) ;
	      	return blist
	    },
	    layoutArray(){ 
	    	if(this.layoutItem == false) {
	    		return []
	    	}
	    	let llist = layoutList
	    	if(this.layoutItem && this.layoutItem instanceof Array && this.layoutItem.length > 0) {
	      		llist = llist.filter(t=> this.layoutItem.indexOf(t.type) >= 0)
	      	}
	    	llist.forEach(t=>{
	      		t.options.dynamicVisible = false
        		t.options.dynamicVisibleValue = ''
        		if(!t.key) { 
        		 	const key = t.type + "_" + new Date().getTime()
        		 	t['key'] = key 
        		 	t['model'] = key
        		}
	      	}) ;
	      	return llist
	    } 
	},
	created() { 
		  

		// 2021-05-17 lyf 初始化回填默认key和model
		if(this.customComponents && this.customComponents.length > 0) {
				this.customComponents.forEach(t=>{
					if(!t.key) { 
	        		 	const key = t.type + "_" + new Date().getTime()
	        		 	t['key'] = key 
        		 		t['model'] = key
	        		}
				})
		}
		 
		 
	},
	inject: {
	    customComponents: {
	      from: 'customC',
	      default: ()=>[]
	    },
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
	    handleStart(list,index) {
	    	this.generateKey(list,index)
	      	const type = list[index].type
	      	this.startType = type;

	      	//console.log('startType' , this.startType)

	      	this.$emit('handleDragType' , type)

	    },
	    handleEnd(){
	    	this.startType = null
	    	this.$emit('handleDragType' , null)
	    }
	}
});


// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_design_drag_panelvue_type_script_lang_js_ = (drag_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/drag-panel/index.vue





/* normalize component */

var drag_panel_component = normalizeComponent(
  form_design_drag_panelvue_type_script_lang_js_,
  drag_panelvue_type_template_id_7cb10758_render,
  drag_panelvue_type_template_id_7cb10758_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drag_panel = (drag_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/index.vue?vue&type=template&id=c3ac2032&
var design_panelvue_type_template_id_c3ac2032_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FormPanel',{attrs:{"data":_vm.data,"selectItem":_vm.selectItem,"noModel":_vm.noModel,"hideModel":_vm.hideModel,"selectForm":_vm.selectForm,"dragType":_vm.dragType,"startType":_vm.startType},on:{"handleSetSelectItem":_vm.handleSetSelectItem}})}
var design_panelvue_type_template_id_c3ac2032_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/index.vue?vue&type=template&id=c3ac2032&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/index.vue?vue&type=template&id=02fe0751&
var itemvue_type_template_id_02fe0751_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-panel"},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.list.length === 0),expression:"data.list.length === 0"}],staticClass:"hint-text"},[_vm._v(" 从左侧选择组件添加 ")]),_c('el-form',{ref:"form",staticClass:"a-form-box form-build",style:(_vm.data.config.customStyle),attrs:{"label-width":_vm.data.config.labelWidth + 'px',"label-position":_vm.data.config.labelPosition,"hide-required-asterisk":_vm.data.config.hideRequiredMark,"size":_vm.data.config.size}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div","force-fallback":true},on:{"add":_vm.deepClone,"start":function($event){return _vm.dragStart($event, _vm.data.list)}},model:{value:(_vm.data.list),callback:function ($$v) {_vm.$set(_vm.data, "list", $$v)},expression:"data.list"}},'draggable',{
        group: 'form-draggable',
        ghostClass: 'moving',
        animation: 180,
        handle: '.drag-move'
      },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((_vm.data.list),function(record){return _c('layoutItem',{key:record.key,staticClass:"drag-move",attrs:{"record":record,"config":_vm.data.config,"selectItem":_vm.selectItem,"startType":_vm.startType,"dragType":_vm.dragType,"hideModel":_vm.hideModel},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"dragStart":_vm.dragStart,"handleSelectItem":_vm.handleSelectItem,"handleCopy":_vm.handleCopy,"handleDetele":_vm.handleDetele,"handleColAdd":_vm.handleColAdd,"handleShowRightMenu":_vm.handleShowRightMenu}})}),1)],1)],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showRightMenu),expression:"showRightMenu"}],staticClass:"right-menu",style:({ 'top': _vm.menuTop + 'px', 'left': _vm.menuLeft + 'px' }),attrs:{"id":"rightMenu"}},[_c('ul',[_c('li',{on:{"click":_vm.handleSettingStyle}},[_c('i',{staticClass:"el-icon-magic-stick"}),_vm._v("样式配置")]),_c('hr'),(_vm.isMergeCol)?[_c('li',{on:{"click":_vm.handleDropMerge}},[_c('i',{staticClass:"el-icon-delete"}),_vm._v("解除合并")]),_c('hr')]:_vm._e(),_c('li',{on:{"click":_vm.handleDownMerge}},[_c('i',{staticClass:"el-icon-bottom"}),_vm._v("向下合并")]),_c('li',{on:{"click":_vm.handleRightMerge}},[_c('i',{staticClass:"el-icon-right"}),_vm._v("向右合并")]),_c('li',{on:{"click":_vm.handleAddCol}},[_c('i',{staticClass:"el-icon-zoom-in"}),_vm._v("增加一列")]),_c('li',{on:{"click":_vm.handleAddRow}},[_c('i',{staticClass:"el-icon-zoom-in"}),_vm._v("增加一行")]),_c('hr'),_c('li',{on:{"click":_vm.handleRemoveRow}},[_c('i',{staticClass:"el-icon-zoom-out"}),_vm._v("删除当前行")]),_c('li',{on:{"click":_vm.handleRemoveCol}},[_c('i',{staticClass:"el-icon-zoom-out"}),_vm._v("删除当前列")])],2)]),_c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"表内单元格样式配置","visible":_vm.styleVisible,"append-to-body":true},on:{"update:visible":function($event){_vm.styleVisible=$event}}},[_c('el-form',{attrs:{"size":"mini","model":_vm.tdStyle,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"class"}},[_c('el-input',{attrs:{"placeholder":"请输入class名称"},model:{value:(_vm.tdStyle.class),callback:function ($$v) {_vm.$set(_vm.tdStyle, "class", $$v)},expression:"tdStyle.class"}})],1),_c('el-form-item',{attrs:{"label":"style"}},[_c('el-input',{attrs:{"type":"textarea","rows":3,"placeholder":"请输入css样式"},model:{value:(_vm.tdStyle.style),callback:function ($$v) {_vm.$set(_vm.tdStyle, "style", $$v)},expression:"tdStyle.style"}})],1)],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.styleVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.settingStyle}},[_vm._v("确 定")])],1)],1)],1)}
var itemvue_type_template_id_02fe0751_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/index.vue?vue&type=template&id=02fe0751&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/layout.vue?vue&type=template&id=5be622ae&
var layoutvue_type_template_id_5be622ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'layout-width': ['control', 'table', 'grid', 'divider', 'html'].includes(
      _vm.record.type
    )
  }},[(_vm.record && _vm.record.type === 'batch')?[_c('div',{class:[
        'batch-box',
        _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
        _vm.record.key === _vm.selectItem.key ? 'active' : ''
      ],style:(_vm.record.options.customStyle),on:{"click":function($event){return _vm.handleSelectItem(_vm.record)}}},[_c('div',{staticClass:"batch-label"},[_vm._v(_vm._s(_vm.record.label))]),_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div","force-fallback":true},on:{"start":function($event){return _vm.$emit('dragStart', $event, _vm.record.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, _vm.record.list)}},model:{value:(_vm.record.list),callback:function ($$v) {_vm.$set(_vm.record, "list", $$v)},expression:"record.list"}},'draggable',{
          group: _vm.insertAllowed ? 'form-draggable' : '',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((_vm.record.list),function(item){return _c('formNode',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])],1)]:(_vm.record &&  _vm.record.type === 'grid')?[_c('div',{staticClass:"grid-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.handleSelectItem(_vm.record)}}},[_c('el-row',{staticClass:"grid-row",attrs:{"gutter":_vm.record.options.gutter}},_vm._l((_vm.record.columns),function(colItem,idnex){return _c('el-col',{key:idnex,staticClass:"grid-col",attrs:{"span":colItem.span || 0}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div","force-fallback":true},on:{"start":function($event){return _vm.$emit('dragStart', $event, colItem.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, colItem.list)}},model:{value:(colItem.list),callback:function ($$v) {_vm.$set(colItem, "list", $$v)},expression:"colItem.list"}},'draggable',{
              group: 'form-draggable',
              ghostClass: 'moving',
              animation: 180,
              handle: '.drag-move'
            },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((colItem.list),function(item){return _c('layoutItem',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"startType":_vm.startType,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1)],1)}),1),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])],1)]:(_vm.record && _vm.record.type === 'control')?[_c('div',{class:[
        'grid-box','control-form', 
        _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
        _vm.record.key === _vm.selectItem.key ? 'active' : '',
        _vm.record.options && _vm.record.options.bordered ? 'form-table-bordered' : '' 
      ],style:(_vm.record.options.customStyle),on:{"click":function($event){return _vm.handleSelectItem(_vm.record)}}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div","force-fallback":true},on:{"start":function($event){return _vm.$emit('dragStart', $event, _vm.record.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, _vm.record.list)}},model:{value:(_vm.record.list),callback:function ($$v) {_vm.$set(_vm.record, "list", $$v)},expression:"record.list"}},'draggable',{
          group: _vm.insertAllowed ? 'form-draggable' : '',
          ghostClass: 'moving',
          animation: 180,
          handle: '.drag-move'
        },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((_vm.record.list),function(item){return _c('formNode',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])],1)]:(_vm.record && _vm.record.type === 'table')?[_c('div',{staticClass:"table-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.handleSelectItem(_vm.record)}}},[_c('table',{class:[
          'table-layout','form-table',
          _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
          _vm.record.options.bright ? 'bright' : '' ,
          _vm.record.options.small ? 'small' : '' ,
          _vm.record.options.bordered ? 'bordered' : '' 
        ],style:(_vm.record.options.customStyle)},_vm._l((_vm.record.trs),function(trItem,trIndex){return _c('tr',{key:trIndex},_vm._l((trItem.tds),function(tdItem,tdIndex){return _c('td',{key:tdIndex,class:['table-td', tdItem.class],style:(tdItem.style),attrs:{"colspan":tdItem.colspan,"rowspan":tdItem.rowspan},on:{"contextmenu":function($event){$event.preventDefault();return _vm.$emit('handleShowRightMenu', $event, _vm.record, trIndex, tdIndex , tdItem.colspan > 1 || tdItem.rowspan > 1)}}},[_c('draggable',_vm._b({staticClass:"draggable-box",attrs:{"tag":"div","force-fallback":true},on:{"start":function($event){return _vm.$emit('dragStart', $event, tdItem.list)},"add":function($event){return _vm.$emit('handleColAdd', $event, tdItem.list)}},model:{value:(tdItem.list),callback:function ($$v) {_vm.$set(tdItem, "list", $$v)},expression:"tdItem.list"}},'draggable',{
                group: 'form-draggable',
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move'
              },false),[_c('transition-group',{staticClass:"list-main",attrs:{"tag":"div","name":"list"}},_vm._l((tdItem.list),function(item){return _c('layoutItem',{key:item.key,staticClass:"drag-move",attrs:{"selectItem":_vm.selectItem,"startType":_vm.startType,"record":item,"hideModel":_vm.hideModel,"config":_vm.config},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleColAdd":_vm.handleColAdd,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleShowRightMenu":_vm.handleShowRightMenu,"handleDetele":function($event){return _vm.$emit('handleDetele')}}})}),1)],1)],1)}),0)}),0),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-copy-document"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])])]:(_vm.record != undefined)?[_c('formNode',{key:_vm.record.key,attrs:{"selectItem":_vm.selectItem,"record":_vm.record,"config":_vm.config,"hideModel":_vm.hideModel},on:{"update:selectItem":function($event){_vm.selectItem=$event},"update:select-item":function($event){_vm.selectItem=$event},"handleSelectItem":_vm.handleSelectItem,"handleCopy":function($event){return _vm.$emit('handleCopy')},"handleDetele":function($event){return _vm.$emit('handleDetele')},"handleShowRightMenu":function($event){return _vm.$emit('handleShowRightMenu')}}})]:_vm._e()],2)}
var layoutvue_type_template_id_5be622ae_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/layout.vue?vue&type=template&id=5be622ae&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/node.vue?vue&type=template&id=e6fa8dfe&
var nodevue_type_template_id_e6fa8dfe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drag-move-box",class:{ active: _vm.record.key === _vm.selectItem.key },on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleSelectItem', _vm.record)}}},[_c('div',{staticClass:"form-item-box"},[_c('FormItem',{attrs:{"formConfig":_vm.config,"models":_vm.models,"record":_vm.record,"isDragPanel":true}})],1),(!_vm.hideModel)?_c('div',{staticClass:"show-key-box",domProps:{"textContent":_vm._s(_vm.record.model)}}):_vm._e(),_c('div',{staticClass:"copy",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleCopy')}}},[_c('i',{staticClass:"el-icon-document-copy"})]),_c('div',{staticClass:"delete",class:_vm.record.key === _vm.selectItem.key ? 'active' : 'unactivated',on:{"click":function($event){$event.stopPropagation();return _vm.$emit('handleDetele')}}},[_c('i',{staticClass:"el-icon-delete"})])])}
var nodevue_type_template_id_e6fa8dfe_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/node.vue?vue&type=template&id=e6fa8dfe&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/index.vue?vue&type=template&id=26c2f1c8&
var form_itemvue_type_template_id_26c2f1c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (
    !(_vm.record.options.hidden === true) &&
      ( [
        'input',
        'textarea',
        'date',
        'time',
        'datePicker',
        'number',
        'radio',
        'checkbox',
        'select',
        'rate',
        'switch',
        'slider',
        'uploadImg',
        'uploadFile',
        'cascader',
        'state'
      ].includes(_vm.record.type) || _vm.customList.includes(_vm.record.type) ) && _vm.dynamicVisibleItem && !(_vm.record.type == 'select' && _vm.renderPreview &&  _vm.record.options.previewHidden )
  )?_c('el-form-item',{attrs:{"label":_vm.formConfig.labelWidth > 0 ? _vm.record.label : null,"rules":_vm.recordRules,"prop":_vm.recordProps,"id":_vm.record.model,"name":_vm.record.model,"label-width":(_vm.record.options.labelWidth >= 0 ? _vm.record.options.labelWidth : _vm.formConfig.labelWidth) + 'px'}},[_c('BaseItem',{attrs:{"models":_vm.models,"formConfig":_vm.formConfig,"renderPreview":_vm.renderPreview,"record":_vm.record,"disabled":_vm.disabled,"isDragPanel":_vm.isDragPanel},on:{"forceUpdate":_vm.forceUpdate}})],1):((_vm.record.type === 'batch' || _vm.record.type === 'editor') && _vm.dynamicVisibleItem)?_c('el-form-item',{attrs:{"id":_vm.record.model,"name":_vm.record.model,"label":!_vm.record.options.showLabel ? '' : _vm.record.label,"label-width":_vm.record.options.showLabel ? ((_vm.record.options.labelWidth >= 0 ? _vm.record.options.labelWidth : _vm.formConfig.labelWidth) + 'px') : '0px'}},[_c('TableBatch',{ref:"TableBatch",style:(("width:" + (_vm.record.options.width))),attrs:{"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"config":_vm.formConfig,"parentDisabled":_vm.disabled},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})],1):(_vm.record.type === 'button' && _vm.dynamicVisibleItem)?_c('el-form-item',{style:({ 'textAlign': _vm.record.options.textAlign }),attrs:{"label-width":(_vm.record.options.labelWidth >= 0 ? _vm.record.options.labelWidth : _vm.formConfig.labelWidth) + 'px'}},[_c('el-button',{attrs:{"disabled":_vm.disabled || _vm.record.options.disabled,"type":_vm.record.options.type},domProps:{"textContent":_vm._s(_vm.record.label)},on:{"click":_vm.buttonClick}})],1):(_vm.record.type === 'text' && _vm.dynamicVisibleItem )?_c('div',{staticClass:"form-label",style:({ textAlign: _vm.record.options.textAlign })},[_c('label',{class:{ 'is-required': _vm.record.options.showRequiredMark || _vm.showRequiredMark },domProps:{"textContent":_vm._s(_vm.record.label)}})]):(_vm.record.type === 'alert' && _vm.dynamicVisibleItem )?_c('div',{staticClass:"form-label",style:({ textAlign: _vm.record.options.textAlign })},[_c('el-alert',{attrs:{"title":_vm.record.options.title,"type":_vm.record.options.type,"description":_vm.record.options.description,"effect":_vm.record.options.effect,"closable":_vm.record.options.closable,"center":_vm.record.options.center,"close-text":_vm.record.options.closeText,"show-icon":_vm.record.options.showIcon}})],1):(_vm.record.type === 'html' && _vm.dynamicVisibleItem)?_c('div',{attrs:{"id":_vm.record.model,"name":_vm.record.model},domProps:{"innerHTML":_vm._s(_vm.record.options.defaultValue)}}):(_vm.dynamicVisibleItem)?_c('div',[( _vm.record.type === 'divider' && _vm.record.label !== '' && _vm.record.options.orientation )?_c('el-divider',{attrs:{"content-position":_vm.record.options.orientation,"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}},[_vm._v(" "+_vm._s(_vm.record.label)+" ")]):(_vm.record.type === 'divider' && _vm.record.label !== '')?_c('el-divider',{attrs:{"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}},[_vm._v(" "+_vm._s(_vm.record.label)+" ")]):(_vm.record.type === 'divider' && _vm.record.label === '')?_c('el-divider',{attrs:{"direction":_vm.record.options.direction ? _vm.record.options.direction : 'horizontal'}}):_vm._e()],1):_vm._e()}
var form_itemvue_type_template_id_26c2f1c8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/index.vue?vue&type=template&id=26c2f1c8&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/index.vue?vue&type=template&id=40688d01&
var tablevue_type_template_id_40688d01_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-table-index",attrs:{"id":_vm.record.model,"name":_vm.record.model}},[_c('el-table',{class:[
       'form-table',
       _vm.record.options.customClass ? _vm.record.options.customClass : '' 
     ],style:(_vm.record.options.customStyle),attrs:{"rowKey":function (record) { return record.key; },"data":_vm.models[_vm.record.model],"border":_vm.record.options.showBorder,"scroll":{
       x:
         _vm.record.list.length * 190 +
         80 +
         (!_vm.record.options.hideSequence ? 60 : 0),
       y: _vm.record.options.scrollY
     }}},[(_vm.isVisible)?[(!_vm.record.options.hideSequence)?_c('el-table-column',{attrs:{"label":"序号","align":"center","type":"index","width":"50"}}):_vm._e(),_vm._l((_vm.record.list),function(item,index){return [(_vm.record.options.addType != 'dialog' || (_vm.record.options.showItem && _vm.record.options.showItem.includes(item.model) ))?_c('el-table-column',{key:index,attrs:{"label":item.label,"width":_vm.record.options.colWidth && _vm.record.options.colWidth[item.model] ? _vm.record.options.colWidth[item.model] : undefined,"align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('TableItem',{attrs:{"record":item,"renderPreview":_vm.renderPreview || _vm.record.options.addType == 'dialog',"domains":_vm.models[_vm.record.model][scope.$index]}})]}}],null,true)}):_vm._e()]}),(!_vm.renderPreview || _vm.record.options.addType == 'dialog')?_c('el-table-column',{attrs:{"label":"操作","align":"center","width":_vm.controlWidth},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.renderPreview && _vm.record.options.addType == 'dialog')?_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){return _vm.updateDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-eye"}),_vm._v("查看 ")]):_vm._e(),(!_vm.renderPreview && _vm.record.options.addType == 'dialog')?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.updateDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-edit"}),_vm._v("修改 ")]):_vm._e(),(!_vm.renderPreview && _vm.record.options.copyRow)?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.copyDomain(scope.row)}}},[_c('i',{staticClass:"el-icon-copy-document"}),_vm._v("复制 ")]):_vm._e(),(!_vm.renderPreview)?_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){return _vm.removeDomain(scope.$index)}}},[_c('i',{staticClass:"el-icon-delete"}),_vm._v("删除 ")]):_vm._e()]}}],null,false,2814633969)}):_vm._e()]:_vm._e()],2),(!_vm.renderPreview)?_c('el-button',{attrs:{"type":"dashed","disabled":_vm.disabled},on:{"click":_vm.addDomain}},[_c('i',{staticClass:"el-icon-circle-plus-outline"}),_vm._v("增加 ")]):_vm._e(),(_vm.addOrUpdateVisible)?_c('AddOrUpdate',{ref:"addOrUpdate",attrs:{"formConfig":_vm.config,"formTemplate":_vm.templateData,"renderPreview":_vm.renderPreview},on:{"formAdd":_vm.formAdd,"formUpdate":_vm.formUpdate}}):_vm._e()],1)}
var tablevue_type_template_id_40688d01_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/table/index.vue?vue&type=template&id=40688d01&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/table-item.vue?vue&type=template&id=5228af3a&
var table_itemvue_type_template_id_5228af3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.record.type === 'text')?_c('div',{style:({ textAlign: _vm.record.options.textAlign })},[_c('span',[_vm._v(_vm._s(_vm.record.label))])]):(_vm.record.type === 'html')?_c('div',{domProps:{"innerHTML":_vm._s(_vm.record.options.defaultValue)}}):_c('div',[_c('BaseItem',{attrs:{"models":_vm.domains,"record":_vm.record,"renderPreview":_vm.renderPreview}})],1)}
var table_itemvue_type_template_id_5228af3a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/table/table-item.vue?vue&type=template&id=5228af3a&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/base.vue?vue&type=template&id=3f18e798&
var basevue_type_template_id_3f18e798_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.renderPreview)?_c('div',{staticClass:"base-item"},[( [
        'input',
        'textarea',
        //'date',
        'time',
        //'datePicker',
        'number', 
        'rate',
        'switch',
        'slider' 
      ].includes(_vm.record.type))?[(_vm.record.options.prepend)?_c('span',{staticClass:"base-item-span",domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.prepend))}}):_vm._e(),(!_vm.loading)?_c('span',{staticClass:"base-item-span"},[_vm._v(_vm._s(_vm.models[_vm.record.model])+" ")]):_vm._e(),(_vm.record.options.append)?_c('span',{staticClass:"base-item-span",domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))}}):_vm._e()]:_vm._e(),(_vm.record.type == 'date' || _vm.record.type == 'datePicker')?[(_vm.record.options.range && _vm.models[_vm.record.model] instanceof Array)?_c('span',[_vm._v(" "+_vm._s(_vm.models[_vm.record.model].join(' ~ '))+" ")]):_c('span',[_vm._v(" "+_vm._s(_vm.models[_vm.record.model])+" ")])]:(_vm.record.type == 'state')?_c('ng-state',{attrs:{"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"config":_vm.formConfig,"parentDisabled":_vm.disabled,"disabled":_vm.disabled || _vm.record.options.disabled},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):([
        'radio',
        'checkbox',
        'select',
        'cascader'
      ].includes(_vm.record.type))?[_vm._v(" "+_vm._s(_vm.models[_vm.record.model+'_label'])+" ")]:([
        'uploadImg',
        'uploadFile'
      ].includes(_vm.record.type))?[(_vm.record.type == 'uploadImg')?_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"accept":"image/*","list-type":_vm.record.options.listType,"render-preview":true,"record":_vm.record},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"render-preview":true,"record":_vm.record},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})]:(_vm.customList.includes(_vm.record.type))?[_c('customComponent',{attrs:{"models":_vm.models,"record":_vm.record,"disabled":_vm.disabled || _vm.record.options.disabled,"renderPreview":true},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}})]:[_vm._v(" "+_vm._s("")+" ")]],2):_c('div',{staticClass:"base-item"},[(_vm.record.type === 'input')?_c('el-input',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"type":_vm.record.options.type,"clearable":_vm.record.options.clearable,"maxlength":_vm.record.options.maxLength > 0 ? _vm.record.options.maxLength : null},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[(_vm.record.options.prepend)?_c('span',{attrs:{"slot":"prepend"},domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.prepend))},slot:"prepend"}):_vm._e(),(_vm.record.options.append)?_c('span',{attrs:{"slot":"append"},domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))},slot:"append"}):_vm._e()]):(_vm.record.type === 'textarea')?_c('el-input',{style:(("width:" + (_vm.record.options.width))),attrs:{"type":"textarea","disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"clearable":_vm.record.options.clearable,"maxlength":_vm.record.options.maxLength > 0 ? _vm.record.options.maxLength : null,"rows":_vm.record.options.rows,"show-word-limit":_vm.record.options.maxLength > 0 && _vm.record.options.maxLength > 10},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'number')?[_c('div',{staticClass:"el-input-number-diaplay",style:(("width:" + (_vm.record.options.width)))},[_c('el-input-number',{class:_vm.record.options.append ? 'el-input-number__append' : null,style:("width:100%;float:left;"),attrs:{"min":_vm.record.options.min || _vm.record.options.min === 0
            ? _vm.record.options.min
            : -Infinity,"max":_vm.record.options.max || _vm.record.options.max === 0
            ? _vm.record.options.max
            : Infinity,"disabled":_vm.dynamicDisabled,"step":_vm.record.options.step,"precision":_vm.record.options.precision > 50 ||
          (!_vm.record.options.precision && _vm.record.options.precision !== 0)
            ? null
            : _vm.record.options.precision,"controls-position":"right","placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}),(_vm.record.options.append)?_c('div',{staticClass:"el-input-group__append el-input-number-group__append ",domProps:{"innerHTML":_vm._s(_vm.transformAppend(_vm.record.options.append))}}):_vm._e()],1)]:(_vm.record.type === 'select' )?[(_vm.record.options.multiple)?_c('el-select',{style:(("width:" + (_vm.record.options.width))),attrs:{"value-key":_vm.itemProp.value,"remote":_vm.record.options.onlineSearch && _vm.record.options.showSearch,"remote-method":_vm.remoteMethod,"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.dynamicDisabled,"clearable":_vm.record.options.clearable,"multiple":""},on:{"clear":_vm.clearChange,"change":function($event){return _vm.handleChange($event, _vm.record.model ,  true)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) || (_vm.record.options.dynamic == 2 && _vm.record.options.dictType) ? _vm.checkValues : _vm.record.options.options)),function(item,index){return [(_vm.itemVisible(item))?_c('el-option',{key:item[_vm.itemProp.value] + index,attrs:{"label":item[_vm.itemProp.label],"value":item[_vm.itemProp.value]}}):_vm._e()]})],2):_c('el-select',{style:(("width:" + (_vm.record.options.width))),attrs:{"value-key":_vm.itemProp.value,"remote":_vm.record.options.onlineSearch && _vm.record.options.showSearch,"remote-method":_vm.remoteMethod,"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.dynamicDisabled,"clearable":_vm.record.options.clearable},on:{"clear":_vm.clearChange,"change":function($event){return _vm.handleChange($event, _vm.record.model , true)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) || (_vm.record.options.dynamic == 2 && _vm.record.options.dictType) ? _vm.checkValues : _vm.record.options.options)),function(item,index){return [(_vm.itemVisible(item))?_c('el-option',{key:item[_vm.itemProp.value] + index,attrs:{"label":item[_vm.itemProp.label],"value":item[_vm.itemProp.value]}}):_vm._e()]})],2)]:(_vm.record.type === 'checkbox')?_c('el-checkbox-group',{attrs:{"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_vm._l((( (_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) || (_vm.record.options.dynamic == 2 && _vm.record.options.dictType) ? _vm.checkValues : _vm.record.options.options)),function(checkitem,index){return [(_vm.itemVisible(checkitem))?_c('el-checkbox',{key:checkitem[_vm.itemProp.value] + index,attrs:{"label":checkitem[_vm.itemProp.value]}},[_vm._v(" "+_vm._s(checkitem[_vm.itemProp.label])+" ")]):_vm._e()]})],2):(_vm.record.type === 'radio')?[_c('el-radio-group',{attrs:{"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}},[_vm._l((((_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc) || (_vm.record.options.dynamic == 2 && _vm.record.options.dictType) ? _vm.checkValues : _vm.record.options.options)),function(radioitem,index){return [(_vm.itemVisible(radioitem))?_c('el-radio',{key:radioitem[_vm.itemProp.value] + index,attrs:{"label":radioitem[_vm.itemProp.value]}},[_vm._v(" "+_vm._s(radioitem[_vm.itemProp.label])+" ")]):_vm._e()]})],2)]:(_vm.record.type === 'date')?[(_vm.record.options.range)?_c('el-date-picker',{style:(("width:" + (_vm.record.options.width))),attrs:{"align":"right","type":"daterange","clearable":_vm.record.options.clearable,"disabled":_vm.dynamicDisabled,"start-placeholder":_vm.record.options.rangeStartPlaceholder,"end-placeholder":_vm.record.options.rangeEndPlaceholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):_c('el-date-picker',{style:(("width:" + (_vm.record.options.width))),attrs:{"align":"right","type":"date","clearable":_vm.record.options.clearable,"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})]:(_vm.record.type === 'datePicker')?[(_vm.record.options.range)?_c('el-date-picker',{style:(("width:" + (_vm.record.options.width))),attrs:{"align":"right","type":"datetimerange","clearable":_vm.record.options.clearable,"disabled":_vm.dynamicDisabled,"start-placeholder":_vm.record.options.rangeStartPlaceholder,"end-placeholder":_vm.record.options.rangeEndPlaceholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):_c('el-date-picker',{style:(("width:" + (_vm.record.options.width))),attrs:{"align":"right","type":"datetime","clearable":_vm.record.options.clearable,"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})]:(_vm.record.type === 'time')?_c('el-time-select',{style:(("width:" + (_vm.record.options.width))),attrs:{"clearable":_vm.record.options.clearable,"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value-format":_vm.record.options.format},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'rate')?_c('el-rate',{style:(("width:" + (_vm.record.options.width))),attrs:{"max":_vm.record.options.max,"disabled":_vm.dynamicDisabled,"placeholder":_vm.record.options.placeholder,"allowHalf":_vm.record.options.allowHalf},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'slider')?_c('el-slider',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.dynamicDisabled,"min":_vm.record.options.min,"max":_vm.record.options.max,"show-input":_vm.record.options.showInput,"step":_vm.record.options.step,"marks":_vm.sliderMarks},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'uploadImg')?_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.dynamicDisabled,"record":_vm.record,"accept":"image/*","list-type":_vm.record.options.listType,"multiple":_vm.record.options.multiple,"action":_vm.record.options.action,"limit":_vm.record.options.limit},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type === 'uploadFile')?[_c('FileUpload',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.dynamicDisabled,"multiple":_vm.record.options.multiple,"action":_vm.record.options.action,"record":_vm.record,"accept":_vm.record.options.accept,"limit":_vm.record.options.limit},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}})]:(_vm.record.type === 'cascader')?_c('el-cascader',{ref:"cascader",style:(("width:" + (_vm.record.options.width))),attrs:{"options":(_vm.record.options.dynamic == 1 && _vm.record.options.remoteFunc ? _vm.checkValues : _vm.record.options.options),"placeholder":_vm.record.options.placeholder,"filterable":_vm.record.options.showSearch,"disabled":_vm.dynamicDisabled,"clearable":_vm.record.options.clearable,"props":_vm.itemProp},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}}):(_vm.record.type === 'switch')?_c('el-switch',{attrs:{"active-text":_vm.record.options.activeText,"inactive-text":_vm.record.options.inactiveText,"disabled":_vm.dynamicDisabled},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.record.type == 'state')?_c('ng-state',{style:(("width:" + (_vm.record.options.width))),attrs:{"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"config":_vm.formConfig,"parentDisabled":_vm.disabled,"disabled":_vm.disabled || _vm.record.options.disabled},model:{value:(_vm.models[_vm.record.model]),callback:function ($$v) {_vm.$set(_vm.models, _vm.record.model, $$v)},expression:"models[record.model]"}}):(_vm.customList.includes(_vm.record.type))?_c('customComponent',{style:(("width:" + (_vm.record.options.width))),attrs:{"models":_vm.models,"record":_vm.record,"disabled":_vm.dynamicDisabled,"formConfig":_vm.formConfig,"renderPreview":_vm.renderPreview},on:{"change":function($event){return _vm.handleChange($event, _vm.record.model)}}}):_vm._e()],2)}
var basevue_type_template_id_3f18e798_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/base.vue?vue&type=template&id=3f18e798&

// EXTERNAL MODULE: ./node_modules/_axios@0.18.1@axios/index.js
var _axios_0_18_1_axios = __webpack_require__("f753");
var _axios_0_18_1_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_18_1_axios);

// CONCATENATED MODULE: ./packages/form/src/utils/request.js


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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/upload/index.vue?vue&type=template&id=7a56b06c&
var uploadvue_type_template_id_7a56b06c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-upload',{staticClass:"ng-form-upload",attrs:{"action":_vm.action,"drag":_vm.drag,"disabled":_vm.disabled,"multiple":_vm.multiple,"limit":_vm.limit,"headers":_vm.uploadHeader,"accept":_vm.accept,"list-type":_vm.listType,"with-credentials":_vm.withCredentials,"before-upload":_vm.beforeUpload,"on-success":_vm.handleSuccess,"on-remove":_vm.handleRemove,"on-preview":_vm.handlePreview,"auto-upload":_vm.autoUpload,"file-list":_vm.fileList}},[(!_vm.renderPreview)?[(_vm.listType != 'picture-card')?_c('el-button',{attrs:{"slot":"trigger","disabled":_vm.disabled,"size":"small","type":"primary"},slot:"trigger"},[_vm._v("选取文件")]):_c('i',{staticClass:"el-icon-plus"}),(_vm.tip != undefined)?_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("请选择图片，且不超过500kb")]):_vm._e()]:_vm._e()],2)],1)}
var uploadvue_type_template_id_7a56b06c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/upload/index.vue?vue&type=template&id=7a56b06c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/upload/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var uploadvue_type_script_lang_js_ = ({
	name: 'form-upload',
	data() {
		return {
			fileList: []
		}
	},
	props: {
	    value: {
	      type: Array,
	      default: ()=> [],
	      required: true
	    },
	    action: {
	      type: String,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    // key必须为数字 2021-02-17 lyf
	    multiple: {
	      type: Boolean ,
	      default: false
	    },
	    // 文件接收类型
	    accept: {
	    	type: String
	    },
	    listType: {
	    	type: String,
	    	default: 'text'
	    },
	    limit: {
	    	type: Number
	    },
	    // 是否支持发送cookie信息
	    withCredentials: {
	    	type: Boolean ,
	    	default: false
	    },
	    // 是否自动上传
	    autoUpload: {
	    	type: Boolean,
	    	default: true
	    },
	    // 提示说明文字
	    tip: {
	    	type: String
	    },
	    // 是否启用拖拽上传
	    drag: {
	    	type: Boolean,
	    	default: false
	    },
	    record: {
	    	type: Object
	    },
	    renderPreview: {
	    	type: Boolean,
	    	default: false
	    }
	},
	watch: {
		value(val) {
			if(val && val.length > 0) {
				const valueNames = val.map(t=>t.name).join(',');
				const fileListNames = this.fileList.map(t=>t.name).join(',')
				if(fileListNames != valueNames) {
					this.fileList = val 
				} 
			}
		}
	},
	computed: {
		// 需要携带的头数据
		uploadHeader() {
			if(this.record && this.record.options && this.record.options.headers) {
				const hs = {} 
				this.record.options.headers.forEach(t=> {
					hs[t.label] = t.value
				})

				return hs 
			} 
			return {}
		},
		// 文件上传成功后文件的url路径
		uploadResponseFileUrl() {
			if(this.record && this.record.options && this.record.options.responseFileUrl) {
				 
				return this.record.options.responseFileUrl 
			} 

			return null
		}
	},
	mounted() {
		if(this.value == null || this.value == undefined) {
			//this.$emit("input", []);
			this.fileList = []
		} else {
			this.fileList = this.value
		}
	}, 
	methods: {
		beforeUpload(file) {
			const fileName = file.name;
	       
	      	const ltSize = file.size / 1024 / 1024  

	      	const index1 = fileName.lastIndexOf(".");

	      	const index2 = fileName.length;
	      	const fileSuffix = fileName.substring(index1 + 1, index2); // 后缀名
 
	      	// console.log('file' , file)
	      	const fileType = file.type;
	      	if (
		        this.accept &&
		        this.accept.indexOf("image") >= 0 &&
		        !this.isAssetTypeAnImage(fileSuffix)
		    ) {
		        this.$message.error("当前图片格式只支持:[png,jpg,jpeg,bmp]");
		        return false;
		    }

	      	if (this.record.options.limitSize && ltSize > this.record.options.limitSize) {
	        	this.$message.error( "上传文件大小不能超过" + (this.record.options.limitSize) + "MB!" )

	        	return false
	         
	      	}
	      return true;
		},
		isAssetTypeAnImage(ext) {
      		return ["png", "jpg", "jpeg", "bmp"].indexOf(ext.toLowerCase()) !== -1;
    	},
		handleSuccess(response , file , fileList) {
			//console.log('add response' , response)
			//console.log('add file' , file)
			//console.log('add fileList' , fileList)

			// 根据返回结果的url来获取实际文件的url
			const responseFileUrl = this.uploadResponseFileUrl 
 

			const objectPath = __webpack_require__("0089")
			const fileUrl = objectPath.get(response, responseFileUrl)

			if(fileUrl) {
				// 重新组合
				const f_ = {name: file.name , size: file.size , url: fileUrl}

				console.log('this.value' , JSON.stringify(this.value))
				const addData = [
			        ...this.value,
			        {
			         name: file.name , size: file.size , url: fileUrl
			        }
			    ];

			     console.log('addData' , addData)
			    this.$emit("input", addData);
			}

			
		 
		},
		handleRemove(file , fileList) {
			//console.log('remove file' , file)
			//console.log('remove fileList' , fileList)

			// 根据文件名删除文件
			const name = file.name  

			 // 删除
		    this.$emit(
		        "input",
		        this.value.filter(val => val.name != name)
		    ) 
		},
		// 点击下载或者预览
		handlePreview(file) {
			//console.log('handlePreview file' , file)

			// 从url中下载
			if(file.url) {
				window.location.href = file.url
			} else {
				this.$message.error('找不到文件下载路径')
			}

		}
	}
});

// CONCATENATED MODULE: ./packages/form/src/form-item/upload/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_uploadvue_type_script_lang_js_ = (uploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/upload/index.vue





/* normalize component */

var upload_component = normalizeComponent(
  form_item_uploadvue_type_script_lang_js_,
  uploadvue_type_template_id_7a56b06c_render,
  uploadvue_type_template_id_7a56b06c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload = (upload_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/custom.vue?vue&type=template&id=f51bd384&
var customvue_type_template_id_f51bd384_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c(_vm.customComponent,{tag:"component",style:(("width:" + (_vm.record.options.width))),attrs:{"record":_vm.record,"disabled":_vm.disabled,"preview":_vm.renderPreview,"models":_vm.models},on:{"change":_vm.handleChange}})],1)}
var customvue_type_template_id_f51bd384_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/custom.vue?vue&type=template&id=f51bd384&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/custom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var customvue_type_script_lang_js_ = ({
	name: 'form-item-custom' ,
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
	inject: {
	    customComponents: {
	      from: 'customC',
	      default: ()=>[]
	    },
	},
	computed: {
	    customComponent() {
	      // 计算需要显示的组件
	      let customComponentList = {};
	      if (this.customComponents) {
	        // 将数组映射成json
	        this.customComponents.forEach(item => {
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


// CONCATENATED MODULE: ./packages/form/src/form-item/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_customvue_type_script_lang_js_ = (customvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/custom.vue





/* normalize component */

var custom_component = normalizeComponent(
  form_item_customvue_type_script_lang_js_,
  customvue_type_template_id_f51bd384_render,
  customvue_type_template_id_f51bd384_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var custom = (custom_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/state/index.vue?vue&type=template&id=2a2c7558&
var statevue_type_template_id_2a2c7558_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.renderPreview || _vm.isDragPanel)?_c('div',[_c('el-select',{staticClass:"width-select",attrs:{"value-key":"value","filterable":"","clearable":"","placeholder":"请选择省份","disabled":_vm.disabled},on:{"change":_vm.changeProvince,"clear":function($event){return _vm.changeProvince()}},model:{value:(_vm.dataForm.province),callback:function ($$v) {_vm.$set(_vm.dataForm, "province", $$v)},expression:"dataForm.province"}},_vm._l((_vm.provinces),function(item){return _c('el-option',{key:item.v,attrs:{"label":item.l,"value":item.v}})}),1),(_vm.record.options.maxLevel >1 && (!_vm.record.options.oneByOne || _vm.dataForm.province))?_c('el-select',{staticClass:"width-select",attrs:{"value-key":"value","filterable":"","clearable":"","placeholder":"请选择地市","disabled":_vm.disabled},on:{"change":_vm.changeCity,"clear":function($event){return _vm.changeCity()}},model:{value:(_vm.dataForm.city),callback:function ($$v) {_vm.$set(_vm.dataForm, "city", $$v)},expression:"dataForm.city"}},_vm._l((_vm.citys),function(item){return _c('el-option',{key:item.v,attrs:{"label":item.l,"value":item.v}})}),1):_vm._e(),(_vm.record.options.maxLevel > 2 && (!_vm.record.options.oneByOne || _vm.dataForm.city))?_c('el-select',{staticClass:"width-select",attrs:{"value-key":"value","filterable":"","clearable":"","placeholder":"请选择区县","disabled":_vm.disabled},on:{"change":_vm.changeDistrict,"clear":function($event){return _vm.changeDistrict()}},model:{value:(_vm.dataForm.district),callback:function ($$v) {_vm.$set(_vm.dataForm, "district", $$v)},expression:"dataForm.district"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.v,attrs:{"label":item.l,"value":item.v}})}),1):_vm._e()],1):_c('div',[_c('span',[_vm._v(_vm._s(_vm.models[_vm.record.model + '_label']))])])}
var statevue_type_template_id_2a2c7558_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/state/index.vue?vue&type=template&id=2a2c7558&

// EXTERNAL MODULE: ./packages/form/src/form-item/state/area.json
var state_area = __webpack_require__("79c4");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/state/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var statevue_type_script_lang_js_ = ({
	name: 'ng-state' ,
	data() {
		return {
			areas: state_area ,
			provinces: [],
			citys: [],
			districts: [],
			dataForm: {
				province: '' , 
				city: '' , 
				district: '' 
			} 
		}
	},
	props: {
    	// 表单数组 
    	value: {
    		type: String
    	},
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
  	mounted(){
  		this.init()
  	},
  	watch:{
  		value(val) {  
      		 	// 找名称
      	this.updateStateLabel(val)	 	
      		 
    	}
  	},
  	methods: {
  		validator() {

  		},
      // 更新区划label
      updateStateLabel(val) {
       

        let address = [] 

        const fs_ = (areas)=> {
          areas.forEach(t=> {
            if(t.v == val) {
              address.push(t.l)
            } else if(val.indexOf(t.v.replace(/0+$/ , '')) == 0 && t.c && t.c.length > 0) {
              address.push(t.l)
              fs_(t.c)
            }
          })
        }

        fs_(state_area) 
        let separator = this.record.options.separator 
        if(separator == null || separator == undefined) {
          separator = ''
        }

        let str_ = ''
        if(this.record.options.showAllPath) {
          str_ = address.join(separator)
        } else {
          str_ = address.length > 0 ? address[address.length - 1] : ''
        }
   
        this.$set(this.models , this.record.model + '_label' , str_)
            
      },
  		init() {
  			this.provinces = this.areas

  			// 判断当前是否有值
  			const value = this.models[this.record.model]
  			if(value) {

  				// 省
  				this.dataForm.province = value.substr(0,2) + '0000'
  				this.dataForm.city  = value.substr(0,4) + '00'
  				this.dataForm.district  = value 

  				this.changeProvince(this.dataForm.province , 1)
  				this.changeCity(this.dataForm.city , 1)
  				this.changeDistrict(this.dataForm.district , 1)

          if(!this.models[this.record.model + '_label']) {
            this.$nextTick(()=> { 
              this.updateStateLabel(value)
            })
            
          }

  			}
  		},
  		getOrgs (pid) {
	    	return new Promise((resolve, reject)=>{
	    		const ds = this.getOrgChild(pid)
	    		resolve(ds)
	    	})  
	    },
		  getOrgChild(pid ) {
		  	let ds = []
		  	if(!pid) {
		    	// 第一层
		   		return  this.areas.map(t=>{return {v: t.v , l: t.t}})
		  	}

		  	// 迭代
		  	let datas = []

		  	const fn = (data)=>{

		    	for(let i = 0 ; i < data.length ; i++) {
			      	if(data[i].v == pid) {
			        	datas = data[i].c
			        	break
			      	} else if(data[i].c && data[i].c.length > 0){

			        	fn(data[i].c)
			      	}
		    	}
		  	}

		  	fn(this.areas)

		  	return datas
		  },
  		changeProvince(v , type) {
  			// 过滤name
  			if(!type) {
  				this.dataForm.city = ''
  				this.dataForm.district = ''
  			}
  		
  			this.districts = []
  			if(v) {
  				this.getOrgs(v).then((data)=>{
  					this.citys = data
  				}).catch(()=>{
  					this.citys = []
  				})
  			} else {
  				this.citys = []
  			}
  			// 判断层级 如果是最小层级 则input change
  			if(!type) {
  				if(this.record.options.maxLevel == 1){
  					this.$emit("input", v);
  				}
  				else {
  					this.$emit("input", '');
  				}
  			}
			
  		},
  		changeCity(v,type) {
  			// 过滤name 
  			if(!type) {
  				this.dataForm.district = ''
  			}
  			
  			if(v) {
  				this.getOrgs(v).then((data)=>{
  					this.districts = data
  				}).catch(()=>{
  					this.districts = []
  				})
				// 判断层级 如果是最小层级 则input change
				if(!type) {
					if(this.record.options.maxLevel == 2){
						this.$emit("input", v);
					} else {
						this.$emit("input", '');
					}

				}
				
  			} else {
  				this.districts = [] 
  				if(!type) {
  					this.$emit("input", '');
  				}
  				
  			}
				 
  		},
  		changeDistrict(v , type){
  			if(type) return
  			if(v) {
  				if(this.record.options.maxLevel == 3) {
  					this.$emit("input", v);
  				}
  			} else {
  				this.$emit("input", '');
  			}
  		}
	},
});

// CONCATENATED MODULE: ./packages/form/src/form-item/state/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_statevue_type_script_lang_js_ = (statevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/state/index.vue





/* normalize component */

var state_component = normalizeComponent(
  form_item_statevue_type_script_lang_js_,
  statevue_type_template_id_2a2c7558_render,
  statevue_type_template_id_2a2c7558_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var state = (state_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/base.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 



 


/* harmony default export */ var basevue_type_script_lang_js_ = ({
  name: "ng-form-item-base",
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
  inject: {
    customComponents: {
      from: 'customC',
      default: ()=>[]
    },
    ngConfig: {
        from: 'ngConfigC',
        default: ()=>({})
    },

  },
  components: {
     FileUpload: upload,CustomComponent: custom,NgState: state
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
     
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
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
    },
    modelsRecord() {
      // 2021-04-21 lyf 目前只针对select多选\checkbox 两种进行监听
      return  this.models[this.record.model]
    },
     // 2021-05-06 lyf 组件内的动态禁用
    dynamicDisabled() {
      if(this.disabled) {
        return true 
      }
      
      if(this.record.options.disabled) {
        // 打开禁用但没有配置动态禁用 直接返回true 
        if(this.record.options.dynamicDisabled) {
          if(this.record.options.dynamicDisabledValue) {
            const script = this.record.options.dynamicDisabledValue

            // 打开了开关 这里获取函数内容
            const fvalue = dynamicFun(script,this.models , this.data) 
            return fvalue
          } else {
            // 打开了动态禁用,但没有配置脚本 返回 true 直接禁用
            return true
          }
        } else {
          // 没有配置动态禁用 直接返回true
          return true
        }

      } 
      return false  
    },
    // 2022-03-14 lyf 针对select radio checkbox这些数据的动态来源修改后进行刷新
    dynamicOption() {

      // 只在表单模板拖拽绘制的时候生效

      if(!this.isDragPanel || !['select','radio','checkbox'].includes(this.record.type)) {
        return null 
      }
      if(this.record.options.dynamic == 0){
        return null
      }
      if(this.record.options.dynamic == 1) {
        return this.record.options.dynamic + this.record.options.remoteFunc + this.record.options.dataPath + this.record.options.remoteValue + this.record.options.remoteLabel
      } else if(this.record.options.dynamic == 2) {
        return this.record.options.dynamic + this.record.options.dictType
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
        const value = this.models[this.record.model]
        this.handleChange(value ,this.record.model , 1)
      },
      deep:true
    },
    // 2022-03-14 lyf 监听下拉、多选、单选配置变化后如果当前是表单模板编辑状态 则刷新
    dynamicOption: {
      handler(val, oldVal){
         this.initDynamicValue()
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
    } ,
    modelsRecord :{
      handler(val, oldVal){
          // 2021-04-21 lyf 目前只针对select多选\checkbox 两种进行监听 
        if(this.record.type == 'checkbox' || (this.record.type == 'select' && this.record.options.multiple)
          ) {
           
          // 选择值重置
          if(val instanceof Array) {
            this.checkList = val
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
    // select 清除后回调
    clearChange() {
      // 2021-05-08 lyf 判断是否有清除后回调
      if(!this.record.options.clearCb) {
        return
      }

      const cbScript = this.record.options.clearCb
      const func =  '{' + cbScript + '}'
      const Fn = new Function('$' , 'data', func)
      Fn(this.models, this.data)
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
    },
    // 初始化远程数据或者数据字典 针对select radio checkbox
    initDynamicValue() {
      if(this.record.options.dynamic == 1 && this.record.options.remoteFunc) {
        const url =  this.record.options.remoteFunc 
        this.remoteUrl = url 
        

        this.getRemoteData()
   

        this.itemProp.label = this.record.options.remoteLabel
        this.itemProp.value = this.record.options.remoteValue
        this.itemProp.children = this.record.options.remoteChildren
      } else if(this.record.options.dynamic == 2 && this.record.options.dictType ) {

        // 2022-02-26 lyf  引入数据字典后判断数据字典
         
        //console.log('ngConfig' , this.ngConfig)
        if(this.ngConfig && this.ngConfig.dict && this.ngConfig.dict.length > 0) {
          const fsDict = this.ngConfig.dict.filter(t=>t.type == this.record.options.dictType)
          this.checkValues = cloneDeep_default()(fsDict)

          this.itemProp.label = 'label'
          this.itemProp.value = 'value'
          this.itemProp.children = 'children'
        } 
        

      }
    }
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
     this.initDynamicValue()
 
    // 如果已经赋值了 则不管默认值了 
    if(this.models && Object.prototype.hasOwnProperty.call(this.models, this.record.model) && this.models[this.record.model]) {
      // 判断数据类型是否正确 
      // 类型为checkbox cascader 但数据非array类型 则强制转array
      let modelValue = this.models[this.record.model]
      if(  this.record.type == 'checkbox' || this.record.type == 'cascader' || (
        // 2020-07-31 如果时下拉复选 这里也绑定的是数组
          this.record.type == 'select' && this.record.options.multiple 
        )) {
        if(!(modelValue instanceof Array)){
          modelValue = modelValue.split(',')
          this.$set(this.models , this.record.model , modelValue)
        }
  
        //this.models[this.record.model] = vs
        this.checkList = modelValue 
      }

      return ;
    }

    let defaultValue = this.record.options.defaultValue
     
    if(defaultValue != null) {
      if(this.record.type == 'checkbox' || this.record.type == 'cascader'){
        this.checkList = defaultValue
      } else {
        if((this.record.type == 'date' || this.record.type == 'time' || this.record.type == 'datePicker' ) && defaultValue == 'now') { 

          defaultValue = dateFormater(new Date() ,this.record.options.format)
 
        }  
        
        this.$set(this.models , this.record.model , defaultValue)
         
        
      } 

      this.handleChange(defaultValue , this.record.model)
    }

    // 2022-05-04 lyf 如果当前是时间范围或者日期范围 则从rangeDefaultValue 中取默认值
    if( (this.record.type == 'date' || this.record.type == 'time' || this.record.type == 'datePicker') 
      && this.record.options.range) {
      let defaultRangeValue = this.record.options.rangeDefaultValue 
      if(defaultRangeValue && defaultRangeValue.length == 2) {
        // 判断有么有设置为now的
        if(defaultRangeValue[0] == 'now'){
          defaultRangeValue[0] = dateFormater(new Date() ,this.record.options.format)
        }
        if(defaultRangeValue[1] == 'now'){
          defaultRangeValue[1] = dateFormater(new Date() ,this.record.options.format)
        }

        this.$set(this.models , this.record.model , defaultRangeValue)
      }
    }
   


    // 2021-03-16 lyf 判断当前没有值并且类型是input 或者textarea 给初始化model
    // 2021-08-05 lyf 为不同的组件初始化不同类型的初始值，防止类型不同后端解析异常
    if(!this.isDragPanel) {
      if(!Object.prototype.hasOwnProperty.call(this.models,this.record.model)){
        // 判断数据格式 刷数据
        if(this.record.type == 'checkbox' ||  this.record.type == 'cascader'
          || (this.record.type == 'select' && this.record.options.multiple)) {
          // 多选
          this.$set(this.models , this.record.model , [])
        } else if(this.record.type == 'number') {
          // 数字
          this.$set(this.models , this.record.model , null)
        } else {
          // 字符串
          this.$set(this.models , this.record.model , '')
        } 
      } else if(this.record.type == 'checkbox' ||  this.record.type == 'cascader'
          || (this.record.type == 'select' && this.record.options.multiple)){
        // 获取数据 校验格式 
        const mv = this.models[this.record.model]
         

        if(typeof mv == 'string') {
          if(mv == "") {
            this.$set(this.models , this.record.model , [])
          } else {
            const mvs = mv.split(',')
            this.$set(this.models , this.record.model , mvs)
          }
          
        }

      }

    }

      
  
 
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-item/base.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/base.vue





/* normalize component */

var base_component = normalizeComponent(
  form_item_basevue_type_script_lang_js_,
  basevue_type_template_id_3f18e798_render,
  basevue_type_template_id_3f18e798_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var base = (base_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/table-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
  },
  computed: {
     customList() {
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  components: {
     BaseItem: base
  },  
  methods: {
    
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-item/table/table-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_table_itemvue_type_script_lang_js_ = (table_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/table/table-item.vue





/* normalize component */

var table_item_component = normalizeComponent(
  table_table_itemvue_type_script_lang_js_,
  table_itemvue_type_template_id_5228af3a_render,
  table_itemvue_type_template_id_5228af3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table_item = (table_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/add-or-update.vue?vue&type=template&id=0dd73382&
var add_or_updatevue_type_template_id_0dd73382_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm._id ? '新增' : '修改',"close-on-click-modal":false,"append-to-body":true,"lock-scroll":false,"visible":_vm.visible,"id":_vm.randomId},on:{"update:visible":function($event){_vm.visible=$event}}},[(
        typeof _vm.formTemplate.list !== 'undefined' && typeof _vm.formTemplate.config !== 'undefined'
      )?_c('el-form',{ref:"dataForm",staticClass:"form-build form-design",attrs:{"label-position":_vm.formTemplate.config.labelPosition,"hide-required-asterisk":_vm.formTemplate.config.hideRequiredMark,"label-width":_vm.formTemplate.config.labelWidth + 'px',"model":_vm.dataForm,"size":"mini"}},[_vm._l((_vm.formTemplate.list),function(item,index){return [(
      !(item.options.hidden === true) &&
        ([
          'input',
          'textarea',
          'date',
          'time',
          'datePicker',
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
        ].includes(item.type) || _vm.customList.includes(item.type) ) && _vm.dynamicVisibleItem(item)  )?_c('el-form-item',{key:index,attrs:{"label":_vm.formTemplate.config.labelWidth > 0 ? item.label : null,"rules":_vm.recordRules(item),"prop":item.rules && item.rules.length > 0 ? item.model : null,"id":item.model,"name":item.model,"label-width":(item.options.labelWidth >= 0 ? item.options.labelWidth : _vm.formTemplate.config.labelWidth) + 'px'}},[(item.options.tooptip && item.options.tooptip.trim())?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","enterable":false,"open-delay":500,"placement":"top-start"}},[_c('div',{staticClass:"tooltip-content",attrs:{"slot":"content"},slot:"content"},[_vm._v(" "+_vm._s(item.options.tooptip))]),_c('BaseItem',{attrs:{"models":_vm.dataForm,"formConfig":_vm.formTemplate.config,"renderPreview":_vm.renderPreview,"record":item,"disabled":_vm.disabled || (item.options.disabled && !item.options.dynamicDisabled )}})],1):_c('BaseItem',{attrs:{"models":_vm.dataForm,"formConfig":_vm.formTemplate.config,"renderPreview":_vm.renderPreview,"record":item,"disabled":_vm.disabled || (item.options.disabled && !item.options.dynamicDisabled )}})],1):_vm._e()]}),_c('el-form-item',{attrs:{"label":"排序","prop":"seq"}},[(_vm.renderPreview)?[_vm._v(" "+_vm._s(_vm.dataForm.seq)+" ")]:[_c('el-input-number',{attrs:{"controls-position":"right","min":0,"label":"排序号","disabled":_vm.renderPreview},model:{value:(_vm.dataForm.seq),callback:function ($$v) {_vm.$set(_vm.dataForm, "seq", $$v)},expression:"dataForm.seq"}})]],2)],2):_vm._e(),_c('div',{staticClass:"mod-footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),(!_vm.renderPreview)?_c('el-button',{attrs:{"disabled":_vm.loading,"type":"primary"},on:{"click":function($event){return _vm.dataFormSubmit()}}},[_vm._v("确定")]):_vm._e()],1)],1)}
var add_or_updatevue_type_template_id_0dd73382_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-item/table/add-or-update.vue?vue&type=template&id=0dd73382&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/add-or-update.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      BaseItem: base
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
    inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
    },
    computed: {
     customList() {
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
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
 
          if(t.required && (record.type == 'input' || record.type == 'textarea') ){
            t.whitespace = true
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

// CONCATENATED MODULE: ./packages/form/src/form-item/table/add-or-update.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_add_or_updatevue_type_script_lang_js_ = (add_or_updatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/table/add-or-update.vue





/* normalize component */

var add_or_update_component = normalizeComponent(
  table_add_or_updatevue_type_script_lang_js_,
  add_or_updatevue_type_template_id_0dd73382_render,
  add_or_updatevue_type_template_id_0dd73382_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var add_or_update = (add_or_update_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/table/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
     controlWidth() {
      let w = 100 
     
      if(this.renderPreview) { 
        return w
      }
      if(this.record.options.copyRow) {
        w += 80
      }
      if(this.record.options.addType == 'dialog') {
        w += 80
      } 
       
      return w 
    } 
  },
  mounted(){ 
    // 2021-05-10 lyf 只要没有默认值都先给回填一个  这个可以处理初始化么有值，导致后面很多联动没法做，必须要通过v-if刷新 
    if(!Object.prototype.hasOwnProperty.call(this.models, this.record.model)  ) {
      this.$set(this.models , this.record.model , [])
    }

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

// CONCATENATED MODULE: ./packages/form/src/form-item/table/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_item_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/table/index.vue





/* normalize component */

var table_component = normalizeComponent(
  form_item_tablevue_type_script_lang_js_,
  tablevue_type_template_id_40688d01_render,
  tablevue_type_template_id_40688d01_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-item/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ng-form-item", 
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
    propPrepend: {
      // form-item的 prop前缀 默认不需要
      type: String
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
     TableBatch: table,BaseItem: base
  },
  inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
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
      if (this.customComponents) {
        return this.customComponents.map(item => item.type);
      } else {
        return [];
      }
    },
     // 校验的prop值 动态计算
    recordProps() {
      if(this.recordRules && this.recordRules.length > 0) {
        if(this.propPrepend) {
          return this.propPrepend + this.record.model
        } else {
          return this.record.model
        }
      }
      return null
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
        // 2021-08-12 lyf 针对必填而且是文本输入的组件增加纯空格校验
        if(t.required && (this.record.type == 'input' || this.record.type == 'textarea') ){
          t.whitespace = true
        }

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
    console.log('index defaultValue' , defaultValue)
    if(defaultValue) {
      if(this.record.type == 'checkbox'){
        this.checkList = defaultValue
      } else {
        this.models[this.record.model] = defaultValue
      } 
    } 
 
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_itemvue_type_script_lang_js_ = (form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-item/index.vue





/* normalize component */

var form_item_component = normalizeComponent(
  src_form_itemvue_type_script_lang_js_,
  form_itemvue_type_template_id_26c2f1c8_render,
  form_itemvue_type_template_id_26c2f1c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var nodevue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var item_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/node.vue





/* normalize component */

var node_component = normalizeComponent(
  item_nodevue_type_script_lang_js_,
  nodevue_type_template_id_e6fa8dfe_render,
  nodevue_type_template_id_e6fa8dfe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var node = (node_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 


/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
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
    },
    dragType: {
      type: String
    }
  },
  computed: {
    insertAllowed() {
      if(this.record.type == 'batch') {
        const disabledType = ['control' , 'batch' , 'batch' ,'divider', 'table']
        
        // 判断当前是在从原始组件拖拽还是从面板内组件拖拽
        if(this.dragType) {
          return !disabledType.includes(this.dragType)
        } else {
          return !disabledType.includes(this.startType)
        }

        
      }
      return true ;//this.insertAllowedType.includes(this.startType);
    }
  },
  components: {
    formNode: node,
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

// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var item_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/layout.vue





/* normalize component */

var layout_component = normalizeComponent(
  item_layoutvue_type_script_lang_js_,
  layoutvue_type_template_id_5be622ae_render,
  layoutvue_type_template_id_5be622ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layout = (layout_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/item/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var design_panel_itemvue_type_script_lang_js_ = ({
  name: "FormPanel",
  data() {
    return {
      form: this.$refs.form,
      // insertAllowedType: [
      //   "input",
      //   "textarea",
      //   "number",
      //   "select",
      //   "batch",
      //   "checkbox",
      //   "radio",
      //   "date",
      //   "time",
      //   "rate",
      //   "slider",
      //   "uploadFile",
      //   "uploadImg",
      //   "cascader",
      //   "treeSelect",
      //   "switch",
      //   "text",
      //   "html",
      //   "control"
      // ],
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
    },
    dragType: {
      type: String
    }
  },
  components: {
    draggable: vuedraggable_umd_default.a,
    layoutItem: layout
  },
  methods: { 
    deepClone(evt) { 
      const newIndex = evt.newIndex; 

      // json深拷贝一次
      const listString = JSON.stringify(this.data.list);
      this.data.list = JSON.parse(listString);
      // 删除icon及compoent属性
      
      if(this.data.list && this.data.list.length > newIndex) {
        delete this.data.list[newIndex].icon;
        delete this.data.list[newIndex].component;
        this.$emit("handleSetSelectItem", this.data.list[newIndex]);
      }
      
    }, 
    handleColAdd(evt, columns, isCopy = false) {
      // 重置或者生成key值
      const newIndex = evt.newIndex;
     // if(!this.columns || this.columns.length < newIndex ){
     //   return
     // }
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
          } else if (element.type === "batch" || element.type === "control") {
            // 动态表格内复制
            traverse(element.list);
          } else if (element.type === "table") {
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
          } else if (element.type === "control" || element.type === "batch") {
            // 动态表格布局，容器布局
            element.list = traverse(element.list);
          }else if (element.type === "table") {
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

// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_design_design_panel_itemvue_type_script_lang_js_ = (design_panel_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/item/index.vue





/* normalize component */

var item_component = normalizeComponent(
  form_design_design_panel_itemvue_type_script_lang_js_,
  itemvue_type_template_id_02fe0751_render,
  itemvue_type_template_id_02fe0751_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var design_panel_item = (item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/design-panel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var design_panelvue_type_script_lang_js_ = ({
	components:{
		FormPanel: design_panel_item 
	},
	data(){
		return {
			updateTime: 0,
			hideModel: false, 
			 
			noModel: noModelList,
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
		},
		// 当前正在拖拽的组件类型
		dragType: {
			type: String
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

// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_design_design_panelvue_type_script_lang_js_ = (design_panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/design-panel/index.vue





/* normalize component */

var design_panel_component = normalizeComponent(
  form_design_design_panelvue_type_script_lang_js_,
  design_panelvue_type_template_id_c3ac2032_render,
  design_panelvue_type_template_id_c3ac2032_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var design_panel = (design_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/index.vue?vue&type=template&id=0d333692&
var propertiesvue_type_template_id_0d333692_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-tabs',{attrs:{"type":"card"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('el-tab-pane',{attrs:{"label":"控件属性","name":"item"}},[_c('ItemProperties',{ref:"itemProperties",attrs:{"selectItem":_vm.selectItem}},[_c('template',{attrs:{"selectItem":_vm.selectItem},slot:"custom-properties"},[_vm._t("custom-properties",null,{"selectItem":_vm.selectItem})],2)],2)],1),_c('el-tab-pane',{attrs:{"label":"表单属性","name":"form"}},[_c('FormProperties',{ref:"formProperties",attrs:{"config":_vm.data.config,"previewOptions":_vm.previewOptions}},[_c('template',{attrs:{"data":_vm.data},slot:"form-extend-properties"},[_vm._t("form-extend-properties",null,{"data":_vm.data})],2)],2)],1),_vm._t("extend-tab",null,{"data":_vm.data})],2)}
var propertiesvue_type_template_id_0d333692_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/properties/index.vue?vue&type=template&id=0d333692&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/item-properties.vue?vue&type=template&id=01ef7bb0&
var item_propertiesvue_type_template_id_01ef7bb0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"properties-centent"},[_c('div',{staticClass:"properties-body"},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(!_vm.selectItem.key),expression:"!selectItem.key"}],staticClass:"hint-box"},[_vm._v("未选择控件")]),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectItem.key),expression:"selectItem.key"}],key:_vm.selectItem.key,attrs:{"size":"mini","disabled":_vm.disabled,"model":_vm.selectItem}},[(!_vm.hideModel)?_c('el-form-item',{attrs:{"label":"标签"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.selectItem.label),callback:function ($$v) {_vm.$set(_vm.selectItem, "label", $$v)},expression:"selectItem.label"}})],1):_vm._e(),(!_vm.hideModel && !_vm.noModel.includes(_vm.selectItem.type))?_c('el-form-item',{attrs:{"label":"数据字段"}},[_c('el-input',{attrs:{"placeholder":"请输入","disabled":(_vm.selectItem.item != undefined && _vm.selectItem.item.id != undefined)},model:{value:(_vm.selectItem.model),callback:function ($$v) {_vm.$set(_vm.selectItem, "model", $$v)},expression:"selectItem.model"}})],1):_vm._e(),(!_vm.hideModel && !_vm.noModel.includes(_vm.selectItem.type))?_c('el-form-item',{attrs:{"label":"标签宽度"}},[_c('el-input-number',{attrs:{"title":"-1表示跟随整体表达配置的宽度"},model:{value:(_vm.options.labelWidth),callback:function ($$v) {_vm.$set(_vm.options, "labelWidth", $$v)},expression:"options.labelWidth"}})],1):_vm._e(),_c('el-divider'),(_vm.selectItem.type == 'input' || _vm.selectItem.type == 'textarea')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input',{attrs:{"type":_vm.selectItem.type,"placeholder":typeof _vm.options.format === 'undefined' ? '请输入' : _vm.options.format},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-form-item',{attrs:{"label":"最大长度"}},[_c('el-input-number',{attrs:{"placeholder":"最大长度,为0表示不限制","min":0},model:{value:(_vm.options.maxLength),callback:function ($$v) {_vm.$set(_vm.options, "maxLength", $$v)},expression:"options.maxLength"}})],1),(_vm.selectItem.type === 'input')?_c('el-form-item',{attrs:{"label":"前后缀"}},[_c('el-input',{attrs:{"placeholder":"前缀标签"},model:{value:(_vm.options.prepend),callback:function ($$v) {_vm.$set(_vm.options, "prepend", $$v)},expression:"options.prepend"}},[_c('template',{slot:"prepend"},[_vm._v("前缀")])],2),_c('el-input',{attrs:{"placeholder":"后缀标签"},model:{value:(_vm.options.append),callback:function ($$v) {_vm.$set(_vm.options, "append", $$v)},expression:"options.append"}},[_c('template',{slot:"append"},[_vm._v("后缀")])],2)],1):_vm._e(),_c('el-divider'),(_vm.selectItem.type === 'textarea')?_c('el-form-item',{attrs:{"label":"输入框行数"}},[_c('el-input-number',{staticStyle:{"width":"100%"},attrs:{"placeholder":"输入框行数"},model:{value:(_vm.options.rows),callback:function ($$v) {_vm.$set(_vm.options, "rows", $$v)},expression:"options.rows"}})],1):_vm._e(),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),(_vm.selectItem.type == 'input')?_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}):_vm._e()],1)]:_vm._e(),(_vm.selectItem.type == 'number')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"步长"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.step),callback:function ($$v) {_vm.$set(_vm.options, "step", $$v)},expression:"options.step"}})],1),_c('el-form-item',{attrs:{"label":"最小值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.min),callback:function ($$v) {_vm.$set(_vm.options, "min", $$v)},expression:"options.min"}})],1),_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1),_c('el-form-item',{attrs:{"label":"数值精度"}},[_c('el-input-number',{attrs:{"min":0,"max":5,"placeholder":"请输入"},model:{value:(_vm.options.precision),callback:function ($$v) {_vm.$set(_vm.options, "precision", $$v)},expression:"options.precision"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input-number',{attrs:{"step":_vm.options.step,"min":_vm.options.min || -Infinity,"max":_vm.options.max || Infinity},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"后缀"}},[_c('el-input',{attrs:{"placeholder":"后缀标签"},model:{value:(_vm.options.append),callback:function ($$v) {_vm.$set(_vm.options, "append", $$v)},expression:"options.append"}},[_c('template',{slot:"append"},[_vm._v("后缀")])],2)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'select')?[_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")]),(_vm.hasDict)?_c('el-radio-button',{attrs:{"label":2}},[_vm._v("数据字典")]):_vm._e()],1)],1),_c('el-form-item',{attrs:{"label-width":"0px"}},[(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):(_vm.selectItem.options.dynamic == 2)?_c('div',[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.queryDictSearch,"value-key":"type","placeholder":"请输入"},on:{"select":_vm.handleDictSelect},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var item = ref.item;
return [_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.type))])]}}],null,false,4029474397),model:{value:(_vm.selectItem.options.dictType),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dictType", $$v)},expression:"selectItem.options.dictType"}},[_c('template',{slot:"prepend"},[_vm._v("字典分类")])],2)],1):_vm._e(),_c('Option',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-select',{attrs:{"clearable":true},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l((_vm.options.options),function(item,index){return _c('el-option',{key:item.value + index,attrs:{"label":item.label,"value":item.value}})}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}}),_c('el-checkbox',{attrs:{"label":"可搜索"},on:{"change":function (v){
            if(!v){
              _vm.options.onlineSearch = false
            }
          }},model:{value:(_vm.options.showSearch),callback:function ($$v) {_vm.$set(_vm.options, "showSearch", $$v)},expression:"options.showSearch"}}),(_vm.options.showSearch)?_c('el-checkbox',{attrs:{"label":"实时搜索"},model:{value:(_vm.options.onlineSearch),callback:function ($$v) {_vm.$set(_vm.options, "onlineSearch", $$v)},expression:"options.onlineSearch"}}):_vm._e()],1),_c('el-divider'),(_vm.options.showSearch && _vm.options.onlineSearch)?_c('el-form-item',{attrs:{"label":"实时搜索回调"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"搜索带参,eg: name=$, $表示当前输入关键字"},model:{value:(_vm.options.onlineParams),callback:function ($$v) {_vm.$set(_vm.options, "onlineParams", $$v)},expression:"options.onlineParams"}})],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"选择后回调"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"选择后回调方法,eg: $.A004=$select.name, $表示当前表单数据,$select标示当前选择元素实体"},model:{value:(_vm.options.selectCb),callback:function ($$v) {_vm.$set(_vm.options, "selectCb", $$v)},expression:"options.selectCb"}})],1),(_vm.selectItem.options.clearable)?_c('el-form-item',{attrs:{"label":"清除后回调"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"清除后回调方法,eg: $.A004= '', $表示当前表单数据"},model:{value:(_vm.selectItem.options.clearCb),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "clearCb", $$v)},expression:"selectItem.options.clearCb"}})],1):_vm._e()]:_vm._e(),(_vm.selectItem.type == 'checkbox')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")]),(_vm.hasDict)?_c('el-radio-button',{attrs:{"label":2}},[_vm._v("数据字典")]):_vm._e()],1)],1),_c('el-form-item',{attrs:{"label-width":"0px"}},[(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):(_vm.selectItem.options.dynamic == 2)?_c('div',[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.queryDictSearch,"value-key":"type","placeholder":"请输入"},on:{"select":_vm.handleDictSelect},scopedSlots:_vm._u([{key:"default",fn:function(ref){
          var item = ref.item;
return [_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.type))])]}}],null,false,4029474397),model:{value:(_vm.selectItem.options.dictType),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dictType", $$v)},expression:"selectItem.options.dictType"}},[_c('template',{slot:"prepend"},[_vm._v("字典分类")])],2)],1):_vm._e(),_c('Option',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-checkbox-group',{attrs:{"options":_vm.options.options},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l(([].concat(_vm.options.options)),function(checkitem,index){return _c('el-checkbox',{key:checkitem.value + index,attrs:{"label":checkitem.value}},[_vm._v(" "+_vm._s(checkitem.label)+" ")])}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'radio')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")]),(_vm.hasDict)?_c('el-radio-button',{attrs:{"label":2}},[_vm._v("数据字典")]):_vm._e()],1)],1),_c('el-form-item',{attrs:{"label-width":"0px"}},[(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini","title":"假设当前接口返回的数据结构为:{code:200,data:[{id:1,name:'11'},{id:2,name:'22'}]} , 则当前的dataPath填写: data"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据dataPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2)],1):(_vm.selectItem.options.dynamic == 2)?_c('div',[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.queryDictSearch,"value-key":"type","placeholder":"请输入"},on:{"select":_vm.handleDictSelect},scopedSlots:_vm._u([{key:"default",fn:function(ref){
          var item = ref.item;
return [_c('span',{staticClass:"name"},[_vm._v(_vm._s(item.type))])]}}],null,false,4029474397),model:{value:(_vm.selectItem.options.dictType),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dictType", $$v)},expression:"selectItem.options.dictType"}},[_c('template',{slot:"prepend"},[_vm._v("字典分类")])],2)],1):_vm._e(),_c('Option',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"联动关联"}},[_c('el-switch',{attrs:{"active-text":"是","inactive-text":"否"},model:{value:(_vm.options.linkage),callback:function ($$v) {_vm.$set(_vm.options, "linkage", $$v)},expression:"options.linkage"}})],1),(_vm.options.linkage)?[_c('Linkage',{model:{value:(_vm.options.linkData),callback:function ($$v) {_vm.$set(_vm.options, "linkData", $$v)},expression:"options.linkData"}})]:_vm._e(),_c('el-divider'),(_vm.options.dynamic == 0)?_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-radio-group',{attrs:{"options":_vm.options.options},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}},_vm._l(([].concat(_vm.options.options)),function(checkitem,index){return _c('el-radio',{key:checkitem.value + index,attrs:{"label":checkitem.value}},[_vm._v(" "+_vm._s(checkitem.label)+" ")])}),1)],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'date' || _vm.selectItem.type == 'time' || _vm.selectItem.type == 'datePicker')?[( (_vm.selectItem.type == 'date' || _vm.selectItem.type == 'datePicker' ) && _vm.options.range )?_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.rangeStartPlaceholder),callback:function ($$v) {_vm.$set(_vm.options, "rangeStartPlaceholder", $$v)},expression:"options.rangeStartPlaceholder"}}),_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.rangeEndPlaceholder),callback:function ($$v) {_vm.$set(_vm.options, "rangeEndPlaceholder", $$v)},expression:"options.rangeEndPlaceholder"}})],1):_c('el-form-item',{attrs:{"label":"占位内容"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.placeholder),callback:function ($$v) {_vm.$set(_vm.options, "placeholder", $$v)},expression:"options.placeholder"}})],1),_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"默认值"}},[(_vm.selectItem.type == 'time' || !_vm.options.range)?_c('el-input',{attrs:{"placeholder":(typeof _vm.options.format === 'undefined' ? '' : _vm.options.format) + ',当前日期使用now'},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}}):_vm._e(),((_vm.selectItem.type == 'date' || _vm.selectItem.type == 'datePicker' ) && _vm.options.range)?_c('el-input',{attrs:{"placeholder":'起始时间' + (typeof _vm.options.format === 'undefined' ? '' : _vm.options.format)},model:{value:(_vm.options.rangeDefaultValue[0]),callback:function ($$v) {_vm.$set(_vm.options.rangeDefaultValue, 0, $$v)},expression:"options.rangeDefaultValue[0]"}}):_vm._e(),((_vm.selectItem.type == 'date' || _vm.selectItem.type == 'datePicker' ) && _vm.options.range)?_c('el-input',{attrs:{"placeholder":'结束时间' + ( typeof _vm.options.format === 'undefined' ? '' : _vm.options.format)},model:{value:(_vm.options.rangeDefaultValue[1]),callback:function ($$v) {_vm.$set(_vm.options.rangeDefaultValue, 1, $$v)},expression:"options.rangeDefaultValue[1]"}}):_vm._e()],1),_c('el-form-item',{attrs:{"label":"时间格式"}},[_c('el-input',{attrs:{"placeholder":_vm.selectItem.type == 'date' ? 'YYYY-MM-DD' : (_vm.selectItem.type == 'datePicker' ? 'YYYY-MM-DD HH:mm:ss' : 'HH:mm:ss' )},model:{value:(_vm.options.format),callback:function ($$v) {_vm.$set(_vm.options, "format", $$v)},expression:"options.format"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),(_vm.selectItem.type == 'date' || _vm.selectItem.type == 'datePicker')?_c('el-checkbox',{attrs:{"label":"范围选择"},model:{value:(_vm.options.range),callback:function ($$v) {_vm.$set(_vm.options, "range", $$v)},expression:"options.range"}}):_vm._e()],1)]:_vm._e(),(_vm.selectItem.type == 'rate')?[(typeof _vm.options.max !== 'undefined')?_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},on:{"change":function (v){  
              if(_vm.options.defaultValue > v){
                _vm.options.defaultValue = v
              } 
          }},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1):_vm._e(),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-rate',{attrs:{"allowHalf":_vm.options.allowHalf,"max":_vm.options.max},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"允许半选"},model:{value:(_vm.options.allowHalf),callback:function ($$v) {_vm.$set(_vm.options, "allowHalf", $$v)},expression:"options.allowHalf"}})],1)]:_vm._e(),(_vm.selectItem.type == 'slider')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"步长"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.step),callback:function ($$v) {_vm.$set(_vm.options, "step", $$v)},expression:"options.step"}})],1),_c('el-form-item',{attrs:{"label":"最小值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.min),callback:function ($$v) {_vm.$set(_vm.options, "min", $$v)},expression:"options.min"}})],1),_c('el-form-item',{attrs:{"label":"最大值"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.max),callback:function ($$v) {_vm.$set(_vm.options, "max", $$v)},expression:"options.max"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input-number',{attrs:{"step":_vm.options.step,"min":_vm.options.min || -Infinity,"max":_vm.options.max || Infinity},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标记marks"}},[_c('br'),_c('Option',{staticStyle:{"width":"100%"},attrs:{"keyNumber":true,"type":"keyvalue"},model:{value:(_vm.options.marks),callback:function ($$v) {_vm.$set(_vm.options, "marks", $$v)},expression:"options.marks"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"显示输入框"},model:{value:(_vm.options.showInput),callback:function ($$v) {_vm.$set(_vm.options, "showInput", $$v)},expression:"options.showInput"}})],1)]:_vm._e(),(_vm.selectItem.type == 'uploadFile')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"上传地址","prop":"options.action"}},[_c('el-input',{attrs:{"placeholder":"上传地址"},model:{value:(_vm.selectItem.options.action),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "action", $$v)},expression:"selectItem.options.action"}})],1),_c('el-form-item',{attrs:{"label":"上传成功后解析文件url的epl地址","prop":"options.responseFileUrl"}},[_c('el-input',{attrs:{"placeholder":"上传成功后解析文件url的epl地址"},model:{value:(_vm.selectItem.options.responseFileUrl),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "responseFileUrl", $$v)},expression:"selectItem.options.responseFileUrl"}})],1),_c('el-form-item',{attrs:{"label":"文件类型"}},[_c('el-input',{attrs:{"placeholder":"文件类型"},model:{value:(_vm.options.accept),callback:function ($$v) {_vm.$set(_vm.options, "accept", $$v)},expression:"options.accept"}})],1),_c('el-form-item',{attrs:{"label":"大小限制(Mb)"}},[_c('el-input-number',{attrs:{"placeholder":"大小限制(Mb)"},model:{value:(_vm.options.limitSize),callback:function ($$v) {_vm.$set(_vm.options, "limitSize", $$v)},expression:"options.limitSize"}})],1),_c('el-divider',[_vm._v("携带信息")]),_c('el-form-item',[_c('Option',{attrs:{"type":"keyvalue"},model:{value:(_vm.options.headers),callback:function ($$v) {_vm.$set(_vm.options, "headers", $$v)},expression:"options.headers"}})],1),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}})],1),(_vm.options.multiple)?_c('el-form-item',{attrs:{"label":"最大上传数量"}},[_c('el-input-number',{attrs:{"min":1},model:{value:(_vm.options.limit),callback:function ($$v) {_vm.$set(_vm.options, "limit", $$v)},expression:"options.limit"}})],1):_vm._e()]:_vm._e(),(_vm.selectItem.type == 'uploadImg')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"最大上传数量"}},[_c('el-input-number',{attrs:{"min":1},model:{value:(_vm.options.limit),callback:function ($$v) {_vm.$set(_vm.options, "limit", $$v)},expression:"options.limit"}})],1),_c('el-form-item',{attrs:{"label":"上传地址"}},[_c('el-input',{attrs:{"placeholder":"上传地址"},model:{value:(_vm.options.action),callback:function ($$v) {_vm.$set(_vm.options, "action", $$v)},expression:"options.action"}})],1),_c('el-form-item',{attrs:{"label":"上传成功后解析文件url的epl地址"}},[_c('el-input',{attrs:{"placeholder":"上传成功后解析文件url的epl地址"},model:{value:(_vm.options.responseFileUrl),callback:function ($$v) {_vm.$set(_vm.options, "responseFileUrl", $$v)},expression:"options.responseFileUrl"}})],1),_c('el-form-item',{attrs:{"label":"大小限制(Mb)"}},[_c('el-input-number',{attrs:{"placeholder":"大小限制(Mb)"},model:{value:(_vm.options.limitSize),callback:function ($$v) {_vm.$set(_vm.options, "limitSize", $$v)},expression:"options.limitSize"}})],1),_c('el-divider',[_vm._v("携带信息")]),_c('el-form-item',[_c('Option',{attrs:{"type":"keyvalue"},model:{value:(_vm.options.headers),callback:function ($$v) {_vm.$set(_vm.options, "headers", $$v)},expression:"options.headers"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"样式"}},[_c('el-radio-group',{model:{value:(_vm.options.listType),callback:function ($$v) {_vm.$set(_vm.options, "listType", $$v)},expression:"options.listType"}},[_c('el-radio-button',{attrs:{"label":"text"}},[_vm._v("text")]),_c('el-radio-button',{attrs:{"label":"picture"}},[_vm._v("picture")]),_c('el-radio-button',{attrs:{"label":"picture-card"}},[_vm._v("card")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}})],1)]:_vm._e(),(_vm.selectItem.type == 'cascader')?[_c('el-form-item',{attrs:{"label":"选项配置"}},[_c('el-radio-group',{model:{value:(_vm.options.dynamic),callback:function ($$v) {_vm.$set(_vm.options, "dynamic", $$v)},expression:"options.dynamic"}},[_c('el-radio-button',{attrs:{"label":0}},[_vm._v("静态数据")]),_c('el-radio-button',{attrs:{"label":1}},[_vm._v("动态数据")])],1)],1),_c('el-form-item',{attrs:{"label-width":"0px"}},[(_vm.options.dynamic == 1)?_c('div',[_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteFunc),callback:function ($$v) {_vm.$set(_vm.options, "remoteFunc", $$v)},expression:"options.remoteFunc"}},[_c('template',{slot:"prepend"},[_vm._v("远端方法")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.dataPath),callback:function ($$v) {_vm.$set(_vm.options, "dataPath", $$v)},expression:"options.dataPath"}},[_c('template',{slot:"prepend"},[_vm._v("列表数据jsonPath")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteValue),callback:function ($$v) {_vm.$set(_vm.options, "remoteValue", $$v)},expression:"options.remoteValue"}},[_c('template',{slot:"prepend"},[_vm._v("值字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteLabel),callback:function ($$v) {_vm.$set(_vm.options, "remoteLabel", $$v)},expression:"options.remoteLabel"}},[_c('template',{slot:"prepend"},[_vm._v("标签字段")])],2),_c('el-input',{attrs:{"size":"mini"},model:{value:(_vm.options.remoteChildren),callback:function ($$v) {_vm.$set(_vm.options, "remoteChildren", $$v)},expression:"options.remoteChildren"}},[_c('template',{slot:"prepend"},[_vm._v("下级字段")])],2)],1):_vm._e(),_c('Option',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.dynamic == 0),expression:"options.dynamic == 0"}],attrs:{"type":_vm.selectItem.type},model:{value:(_vm.options.options),callback:function ($$v) {_vm.$set(_vm.options, "options", $$v)},expression:"options.options"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"可清除"},model:{value:(_vm.options.clearable),callback:function ($$v) {_vm.$set(_vm.options, "clearable", $$v)},expression:"options.clearable"}}),_c('el-checkbox',{attrs:{"label":"多选"},model:{value:(_vm.options.multiple),callback:function ($$v) {_vm.$set(_vm.options, "multiple", $$v)},expression:"options.multiple"}}),_c('el-checkbox',{attrs:{"label":"可搜索"},model:{value:(_vm.options.showSearch),callback:function ($$v) {_vm.$set(_vm.options, "showSearch", $$v)},expression:"options.showSearch"}})],1)]:_vm._e(),(_vm.selectItem.type == 'batch')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"对话框标签宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.labelWidth),callback:function ($$v) {_vm.$set(_vm.options, "labelWidth", $$v)},expression:"options.labelWidth"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标签对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.options.labelPosition),callback:function ($$v) {_vm.$set(_vm.options, "labelPosition", $$v)},expression:"options.labelPosition"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"滚动高度"}},[_c('el-input-number',{attrs:{"min":0},model:{value:(_vm.options.scrollY),callback:function ($$v) {_vm.$set(_vm.options, "scrollY", $$v)},expression:"options.scrollY"}})],1),_c('el-form-item',{attrs:{"label":"表格样式Class名称"}},[_c('el-input',{model:{value:(_vm.selectItem.options.customClass),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customClass", $$v)},expression:"selectItem.options.customClass"}})],1),_c('el-form-item',{attrs:{"label":"表格样式CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.selectItem.options.customStyle),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customStyle", $$v)},expression:"selectItem.options.customStyle"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"新增行方式"}},[_c('el-radio-group',{model:{value:(_vm.options.addType),callback:function ($$v) {_vm.$set(_vm.options, "addType", $$v)},expression:"options.addType"}},[_c('el-radio',{attrs:{"label":"line"}},[_vm._v("增加行")]),_c('el-radio',{attrs:{"label":"dialog"}},[_vm._v("弹出框")])],1)],1),_c('el-divider',{staticClass:"divider-center"},[_vm._v(" "+_vm._s(_vm.options.addType == 'dialog' ? '外部展示字段' : '字段宽度')+" ")]),_c('el-form-item',[_c('el-checkbox-group',{model:{value:(_vm.selectItem.options.showItem),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "showItem", $$v)},expression:"selectItem.options.showItem"}},_vm._l((_vm.selectItem.list),function(item){return _c('el-row',{key:item.model},[_c('el-col',{attrs:{"span":12}},[(_vm.options.addType == 'dialog')?_c('el-checkbox',{attrs:{"label":item.model}},[_vm._v(_vm._s(item.label))]):_c('span',[_vm._v(" "+_vm._s(item.label)+" ")])],1),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"placeholder":"宽度"},model:{value:(_vm.selectItem.options.colWidth[item.model]),callback:function ($$v) {_vm.$set(_vm.selectItem.options.colWidth, item.model, $$v)},expression:"selectItem.options.colWidth[item.model]"}})],1)],1)}),1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"显示Label"},model:{value:(_vm.options.showLabel),callback:function ($$v) {_vm.$set(_vm.options, "showLabel", $$v)},expression:"options.showLabel"}}),_c('el-checkbox',{attrs:{"label":"显示边框"},model:{value:(_vm.options.showBorder),callback:function ($$v) {_vm.$set(_vm.options, "showBorder", $$v)},expression:"options.showBorder"}}),_c('el-checkbox',{attrs:{"label":"隐藏序号"},model:{value:(_vm.options.hideSequence),callback:function ($$v) {_vm.$set(_vm.options, "hideSequence", $$v)},expression:"options.hideSequence"}}),_c('el-checkbox',{attrs:{"label":"行复制"},model:{value:(_vm.options.copyRow),callback:function ($$v) {_vm.$set(_vm.options, "copyRow", $$v)},expression:"options.copyRow"}})],1)]:_vm._e(),(_vm.selectItem.type == 'switch')?[_c('el-form-item',{attrs:{"label":"打开标签值"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.activeText),callback:function ($$v) {_vm.$set(_vm.options, "activeText", $$v)},expression:"options.activeText"}})],1),_c('el-form-item',{attrs:{"label":"关闭标签值"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.inactiveText),callback:function ($$v) {_vm.$set(_vm.options, "inactiveText", $$v)},expression:"options.inactiveText"}})],1),_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-switch',{model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'button')?[_c('el-form-item',{attrs:{"label":"类型"}},[_c('el-radio-group',{model:{value:(_vm.options.type),callback:function ($$v) {_vm.$set(_vm.options, "type", $$v)},expression:"options.type"}},[_c('el-radio',{attrs:{"label":"primary"}},[_vm._v("Primary")]),_c('el-radio',{attrs:{"label":"default"}},[_vm._v("Default")]),_c('el-radio',{attrs:{"label":"dashed"}},[_vm._v("Dashed")]),_c('el-radio',{attrs:{"label":"danger"}},[_vm._v("Danger")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"按钮对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.selectItem.options.textAlign),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "textAlign", $$v)},expression:"selectItem.options.textAlign"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左")]),_c('el-radio-button',{attrs:{"label":"center"}},[_vm._v("居中")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"按钮操作"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"动态JS,表单数据绑定值符号$"},model:{value:(_vm.options.dynamicFun),callback:function ($$v) {_vm.$set(_vm.options, "dynamicFun", $$v)},expression:"options.dynamicFun"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}})],1)]:_vm._e(),(_vm.selectItem.type == 'text')?[_c('el-form-item',{attrs:{"label":"文字对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.options.textAlign),callback:function ($$v) {_vm.$set(_vm.options, "textAlign", $$v)},expression:"options.textAlign"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左")]),_c('el-radio-button',{attrs:{"label":"center"}},[_vm._v("居中")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"显示必选标记"},model:{value:(_vm.options.showRequiredMark),callback:function ($$v) {_vm.$set(_vm.options, "showRequiredMark", $$v)},expression:"options.showRequiredMark"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"动态必选"}},[_c('el-input',{attrs:{"type":"textarea","rows":4,"placeholder":"请输入表达式或者动态函数,数据实体以$标识"},model:{value:(_vm.options.showRequiredMarkScript),callback:function ($$v) {_vm.$set(_vm.options, "showRequiredMarkScript", $$v)},expression:"options.showRequiredMarkScript"}})],1)]:_vm._e(),(_vm.selectItem.type == 'alert')?[_c('el-form-item',{attrs:{"label":"内容"}},[_c('el-input',{attrs:{"type":"textarea","rows":4,"placeholder":"提示内容"},model:{value:(_vm.options.title),callback:function ($$v) {_vm.$set(_vm.options, "title", $$v)},expression:"options.title"}})],1),_c('el-form-item',{attrs:{"label":"辅助文字"}},[_c('el-input',{attrs:{"type":"textarea","rows":4,"placeholder":"辅助文字"},model:{value:(_vm.options.description),callback:function ($$v) {_vm.$set(_vm.options, "description", $$v)},expression:"options.description"}})],1),_c('el-form-item',{attrs:{"label":"类型"}},[_c('el-radio-group',{model:{value:(_vm.options.type),callback:function ($$v) {_vm.$set(_vm.options, "type", $$v)},expression:"options.type"}},[_c('el-radio-button',{attrs:{"label":"success"}},[_vm._v("success")]),_c('el-radio-button',{attrs:{"label":"warning"}},[_vm._v("warning")]),_c('el-radio-button',{attrs:{"label":"info"}},[_vm._v("info")]),_c('el-radio-button',{attrs:{"label":"error"}},[_vm._v("error")])],1)],1),_c('el-form-item',{attrs:{"label":"主题"}},[_c('el-radio-group',{model:{value:(_vm.options.effect),callback:function ($$v) {_vm.$set(_vm.options, "effect", $$v)},expression:"options.effect"}},[_c('el-radio-button',{attrs:{"label":"light"}},[_vm._v("light")]),_c('el-radio-button',{attrs:{"label":"dark"}},[_vm._v("dark")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"可关闭"},model:{value:(_vm.options.closable),callback:function ($$v) {_vm.$set(_vm.options, "closable", $$v)},expression:"options.closable"}}),_c('el-checkbox',{attrs:{"label":"居中"},model:{value:(_vm.options.center),callback:function ($$v) {_vm.$set(_vm.options, "center", $$v)},expression:"options.center"}}),_c('el-checkbox',{attrs:{"label":"显示图标"},model:{value:(_vm.options.showIcon),callback:function ($$v) {_vm.$set(_vm.options, "showIcon", $$v)},expression:"options.showIcon"}})],1),(_vm.options.closable)?_c('el-form-item',{attrs:{"label":"关闭按钮文本"}},[_c('el-input',{attrs:{"placeholder":"不需要则不填"},model:{value:(_vm.options.closeText),callback:function ($$v) {_vm.$set(_vm.options, "closeText", $$v)},expression:"options.closeText"}})],1):_vm._e(),_c('el-divider'),_c('el-form-item',{attrs:{"label":"动态必选"}},[_c('el-input',{attrs:{"type":"textarea","rows":4,"placeholder":"请输入表达式或者动态函数,数据实体以$标识"},model:{value:(_vm.options.showRequiredMarkScript),callback:function ($$v) {_vm.$set(_vm.options, "showRequiredMarkScript", $$v)},expression:"options.showRequiredMarkScript"}})],1)]:_vm._e(),(_vm.selectItem.type == 'html')?[_c('el-form-item',{attrs:{"label":"默认值"}},[_c('el-input',{attrs:{"type":"textarea","rows":4},model:{value:(_vm.options.defaultValue),callback:function ($$v) {_vm.$set(_vm.options, "defaultValue", $$v)},expression:"options.defaultValue"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}})],1)]:_vm._e(),(_vm.selectItem.type == 'divider')?[_c('el-form-item',{attrs:{"label":"方向"}},[_c('el-radio-group',{model:{value:(_vm.options.direction),callback:function ($$v) {_vm.$set(_vm.options, "direction", $$v)},expression:"options.direction"}},[_c('el-radio-button',{attrs:{"label":"horizontal"}},[_vm._v("横向")]),_c('el-radio-button',{attrs:{"label":"vertical"}},[_vm._v("竖向")])],1)],1),_c('el-divider'),(_vm.options.direction && _vm.options.direction == 'horizontal')?_c('el-form-item',{attrs:{"label":"标签位置"}},[_c('el-radio-group',{model:{value:(_vm.options.orientation),callback:function ($$v) {_vm.$set(_vm.options, "orientation", $$v)},expression:"options.orientation"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左")]),_c('el-radio-button',{attrs:{"label":"center"}},[_vm._v("居中")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右")])],1)],1):_vm._e()]:_vm._e(),(_vm.selectItem.type == 'grid')?[_c('el-form-item',{attrs:{"label":"栅格间距"}},[_c('el-input-number',{attrs:{"placeholder":"请输入"},model:{value:(_vm.selectItem.options.gutter),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "gutter", $$v)},expression:"selectItem.options.gutter"}})],1),_c('el-form-item',{attrs:{"label":"列配置项"}},[_c('Option',{attrs:{"type":"colspan"},model:{value:(_vm.selectItem.columns),callback:function ($$v) {_vm.$set(_vm.selectItem, "columns", $$v)},expression:"selectItem.columns"}})],1)]:_vm._e(),(_vm.selectItem.type == 'table')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-form-item',{attrs:{"label":"表格样式Class名称"}},[_c('el-input',{model:{value:(_vm.selectItem.options.customClass),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customClass", $$v)},expression:"selectItem.options.customClass"}})],1),_c('el-form-item',{attrs:{"label":"表格样式CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.selectItem.options.customStyle),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customStyle", $$v)},expression:"selectItem.options.customStyle"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"显示边框"},model:{value:(_vm.options.bordered),callback:function ($$v) {_vm.$set(_vm.options, "bordered", $$v)},expression:"options.bordered"}}),_c('el-checkbox',{attrs:{"label":"鼠标经过点亮"},model:{value:(_vm.options.bright),callback:function ($$v) {_vm.$set(_vm.options, "bright", $$v)},expression:"options.bright"}}),_c('el-checkbox',{attrs:{"label":"紧凑型"},model:{value:(_vm.options.small),callback:function ($$v) {_vm.$set(_vm.options, "small", $$v)},expression:"options.small"}})],1)]:_vm._e(),(_vm.selectItem.type == 'control')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"样式Class名称"}},[_c('el-input',{model:{value:(_vm.selectItem.options.customClass),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customClass", $$v)},expression:"selectItem.options.customClass"}})],1),_c('el-form-item',{attrs:{"label":"样式CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.selectItem.options.customStyle),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "customStyle", $$v)},expression:"selectItem.options.customStyle"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"显示边框"},model:{value:(_vm.options.bordered),callback:function ($$v) {_vm.$set(_vm.options, "bordered", $$v)},expression:"options.bordered"}}),_c('el-checkbox',{attrs:{"label":"无新增"},model:{value:(_vm.options.noAdd),callback:function ($$v) {_vm.$set(_vm.options, "noAdd", $$v)},expression:"options.noAdd"}}),_c('el-checkbox',{attrs:{"label":"无删除"},model:{value:(_vm.options.noRemove),callback:function ($$v) {_vm.$set(_vm.options, "noRemove", $$v)},expression:"options.noRemove"}}),_c('el-checkbox',{attrs:{"label":"无复制"},model:{value:(_vm.options.noCopy),callback:function ($$v) {_vm.$set(_vm.options, "noCopy", $$v)},expression:"options.noCopy"}})],1)]:_vm._e(),(_vm.selectItem.type == 'state')?[_c('el-form-item',{attrs:{"label":"宽度"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.options.width),callback:function ($$v) {_vm.$set(_vm.options, "width", $$v)},expression:"options.width"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"区划层级"}},[_c('el-select',{attrs:{"placeholder":"请选择区划层级"},model:{value:(_vm.options.maxLevel),callback:function ($$v) {_vm.$set(_vm.options, "maxLevel", $$v)},expression:"options.maxLevel"}},_vm._l(([{value:1 , label: '省'},{value:2 , label: '地市'},{value:3 , label: '区县'}]),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"操作属性"}},[_c('el-checkbox',{attrs:{"label":"隐藏"},model:{value:(_vm.options.hidden),callback:function ($$v) {_vm.$set(_vm.options, "hidden", $$v)},expression:"options.hidden"}}),_c('el-checkbox',{attrs:{"label":"禁用"},model:{value:(_vm.options.disabled),callback:function ($$v) {_vm.$set(_vm.options, "disabled", $$v)},expression:"options.disabled"}}),_c('el-checkbox',{attrs:{"label":"递进式显示"},model:{value:(_vm.options.oneByOne),callback:function ($$v) {_vm.$set(_vm.options, "oneByOne", $$v)},expression:"options.oneByOne"}}),_c('el-checkbox',{attrs:{"label":"回显所有路径"},model:{value:(_vm.options.showAllPath),callback:function ($$v) {_vm.$set(_vm.options, "showAllPath", $$v)},expression:"options.showAllPath"}})],1),(_vm.options.showAllPath)?_c('el-form-item',{attrs:{"label":"路径分隔符"}},[_c('el-input',{attrs:{"max-length":"10"},model:{value:(_vm.options.separator),callback:function ($$v) {_vm.$set(_vm.options, "separator", $$v)},expression:"options.separator"}})],1):_vm._e()]:_vm._e(),_vm._t("custom-properties"),([
        'input',
        'textarea',
        'number',
        'select',
        'checkbox',
        'radio',
        'date',
        'time',
        'datePicker',
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
      ].includes(_vm.selectItem.type))?_c('el-form-item',{attrs:{"label":"tooptip提示"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"鼠标移动到组件上的提示信息"},model:{value:(_vm.options.tooptip),callback:function ($$v) {_vm.$set(_vm.options, "tooptip", $$v)},expression:"options.tooptip"}})],1):_vm._e(),_c('el-divider'),(_vm.selectItem.rules  && _vm.selectItem.rules.length > 0 )?_c('el-form-item',{attrs:{"label":"校验"}},[_c('el-checkbox',{attrs:{"label":"必填"},model:{value:(_vm.selectItem.rules[0].required),callback:function ($$v) {_vm.$set(_vm.selectItem.rules[0], "required", $$v)},expression:"selectItem.rules[0].required"}}),_c('el-input',{attrs:{"placeholder":"必填校验提示信息"},model:{value:(_vm.selectItem.rules[0].message),callback:function ($$v) {_vm.$set(_vm.selectItem.rules[0], "message", $$v)},expression:"selectItem.rules[0].message"}}),_c('Option',{attrs:{"type":"rules","disabled":_vm.disabled},model:{value:(_vm.selectItem.rules),callback:function ($$v) {_vm.$set(_vm.selectItem, "rules", $$v)},expression:"selectItem.rules"}}),_c('el-divider')],1):_vm._e(),(!_vm.hideModel && _vm.selectItem && _vm.selectItem.options)?[_c('el-form-item',{attrs:{"label":"动态显示"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:(_vm.selectItem.options.dynamicVisible),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicVisible", $$v)},expression:"selectItem.options.dynamicVisible"}})],1),(_vm.selectItem.options.dynamicVisible)?_c('el-form-item',{attrs:{"label":"显示条件"}},[_c('el-input',{attrs:{"type":"textarea","rows":3,"placeholder":"请输入显示条件,$标识当前整个表单的绑定数据"},model:{value:(_vm.selectItem.options.dynamicVisibleValue),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicVisibleValue", $$v)},expression:"selectItem.options.dynamicVisibleValue"}})],1):_vm._e(),_c('el-divider')]:_vm._e(),(!_vm.hideModel && _vm.selectItem && _vm.selectItem.options && _vm.selectItem.options.disabled)?[_c('el-form-item',{attrs:{"label":"动态禁用"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:(_vm.selectItem.options.dynamicDisabled),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicDisabled", $$v)},expression:"selectItem.options.dynamicDisabled"}})],1),(_vm.selectItem.options.dynamicDisabled)?_c('el-form-item',{attrs:{"label":"禁用条件"}},[_c('el-input',{attrs:{"type":"textarea","rows":3,"placeholder":"请输入禁用条件,$标识当前整个表单的绑定数据,data标识当前事项实体数据"},model:{value:(_vm.selectItem.options.dynamicDisabledValue),callback:function ($$v) {_vm.$set(_vm.selectItem.options, "dynamicDisabledValue", $$v)},expression:"selectItem.options.dynamicDisabledValue"}})],1):_vm._e()]:_vm._e(),(_vm.selectItem.type === 'table')?_c('el-form-item',{attrs:{"label":"提示"}},[_c('p',{staticStyle:{"line-height":"26px"}},[_vm._v(" 请点击右键增加行列，或者合并单元格 ")])]):_vm._e()],2)],1)])}
var item_propertiesvue_type_template_id_01ef7bb0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/properties/item-properties.vue?vue&type=template&id=01ef7bb0&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/option/index.vue?vue&type=template&id=afd9b016&
var optionvue_type_template_id_afd9b016_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"option-change-container"},[([ 
      'radio',
      'checkbox',
      'select',
      'keyvalue'
      ].includes(_vm.type))?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('div',{key:index,staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":9}},[(_vm.keyNumber)?_c('el-input',{attrs:{"type":"number","placeholder":"值"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}}):_c('el-input',{attrs:{"type":"text","placeholder":"名称"},model:{value:(val.label),callback:function ($$v) {_vm.$set(val, "label", $$v)},expression:"val.label"}})],1),_c('el-col',{attrs:{"span":9}},[(_vm.keyNumber)?_c('el-input',{attrs:{"placeholder":"名称"},model:{value:(val.label),callback:function ($$v) {_vm.$set(val, "label", $$v)},expression:"val.label"}}):_c('el-input',{attrs:{"placeholder":"值"},model:{value:(val.value),callback:function ($$v) {_vm.$set(val, "value", $$v)},expression:"val.value"}})],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],2):_vm._e(),(_vm.type === 'cascader')?_c('el-row',{attrs:{"gutter":8}},[_c('div',[_c('el-tree',{attrs:{"data":_vm.value ? _vm.value : [],"show-checkbox":"","default-expand-all":"","expand-on-click-node":false},scopedSlots:_vm._u([{key:"default",fn:function(ref){
      var node = ref.node;
      var data = ref.data;
return _c('span',{staticClass:"custom-tree-node"},[_c('span',[_c('el-row',{attrs:{"gutter":4}},[_c('el-col',{attrs:{"span":9}},[_c('el-input',{attrs:{"type":_vm.keyNumber ? 'number' : 'text',"placeholder":"名称"},model:{value:(data.label),callback:function ($$v) {_vm.$set(data, "label", $$v)},expression:"data.label"}})],1),_c('el-col',{attrs:{"span":9}},[_c('el-input',{attrs:{"placeholder":"值"},model:{value:(data.value),callback:function ($$v) {_vm.$set(data, "value", $$v)},expression:"data.value"}})],1),_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.append(data); }}},[_c('i',{staticClass:"el-icon-circle-plus-outline"})]),_c('el-button',{attrs:{"type":"text","size":"mini"},on:{"click":function () { return _vm.remove(node, data); }}},[_c('i',{staticClass:"el-icon-delete"})])],1)],1)],1)])}}],null,false,3814658901)})],1),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],1):_vm._e(),(_vm.type === 'rules')?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('span',{key:index},[(index !== 0)?_c('div',{staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":18}},[[_c('el-radio',{attrs:{"label":1},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("正则")]),_c('el-radio',{attrs:{"label":2},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("表达式")])]],2),_c('el-col',{attrs:{"span":18}},[_c('el-input',{attrs:{"placeholder":"提示信息"},model:{value:(val.message),callback:function ($$v) {_vm.$set(val, "message", $$v)},expression:"val.message"}})],1),_c('el-col',{attrs:{"span":18}},[(val.vtype == 1)?_c('el-input',{attrs:{"placeholder":"正则表达式pattern"},model:{value:(val.pattern),callback:function ($$v) {_vm.$set(val, "pattern", $$v)},expression:"val.pattern"}}):(val.vtype == 2)?_c('el-input',{attrs:{"type":"textarea","placeholder":"条件表达式"},model:{value:(val.script),callback:function ($$v) {_vm.$set(val, "script", $$v)},expression:"val.script"}}):_vm._e()],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1):_vm._e()])}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAddRules}},[_vm._v("增加校验")])],1):_vm._e()],2):(_vm.type === 'colspan')?_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('div',{key:index,staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":18}},[_c('el-input-number',{staticStyle:{"width":"100%"},attrs:{"max":24,"placeholder":"名称"},model:{value:(val.span),callback:function ($$v) {_vm.$set(val, "span", $$v)},expression:"val.span"}})],1),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAddCol}},[_vm._v("添加")])],1):_vm._e()],2):_vm._e()],1)}
var optionvue_type_template_id_afd9b016_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/properties/option/index.vue?vue&type=template&id=afd9b016&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/option/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 
/* harmony default export */ var optionvue_type_script_lang_js_ = ({
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
        const newChild = { value: '', label: '' };
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

// CONCATENATED MODULE: ./packages/form/src/form-design/properties/option/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/properties/option/index.vue





/* normalize component */

var option_component = normalizeComponent(
  properties_optionvue_type_script_lang_js_,
  optionvue_type_template_id_afd9b016_render,
  optionvue_type_template_id_afd9b016_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var properties_option = (option_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/linkage/index.vue?vue&type=template&id=60efe5e7&
var linkagevue_type_template_id_60efe5e7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"option-change-container"},[_c('el-row',{attrs:{"gutter":8}},[_vm._l((_vm.value),function(val,index){return _c('span',{key:index},[_c('div',{staticClass:"option-change-box"},[_c('el-col',{attrs:{"span":21}},[[_vm._v(" "+_vm._s(index+1)+"、 "),_c('el-radio',{attrs:{"label":1},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("本地")]),_c('el-radio',{attrs:{"label":2},model:{value:(val.vtype),callback:function ($$v) {_vm.$set(val, "vtype", $$v)},expression:"val.vtype"}},[_vm._v("远程")])]],2),_c('el-col',{attrs:{"span":21}},[_c('el-input',{attrs:{"size":"mini","placeholder":"关联字段"},model:{value:(val.model),callback:function ($$v) {_vm.$set(val, "model", $$v)},expression:"val.model"}},[_c('template',{slot:"prepend"},[_vm._v("关联字段")])],2)],1),_c('el-col',{attrs:{"span":21}},[(val.vtype == 1)?[_vm._v(" 表达式: "),_c('el-input',{attrs:{"size":"mini","type":"textarea","placeholder":"表达式,eg: $item.value>$.age . 其中$item表示当前数据中具体一条数据,$表示当前整个表单数据"},model:{value:(val.script),callback:function ($$v) {_vm.$set(val, "script", $$v)},expression:"val.script"}})]:(val.vtype == 2)?_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"mini","placeholder":"query key"},model:{value:(val.queryKey),callback:function ($$v) {_vm.$set(val, "queryKey", $$v)},expression:"val.queryKey"}})],1),_c('el-col',{attrs:{"span":12}},[_c('el-input',{attrs:{"size":"mini","placeholder":"query value"},model:{value:(val.queryValue),callback:function ($$v) {_vm.$set(val, "queryValue", $$v)},expression:"val.queryValue"}})],1)],1):_vm._e()],2),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"option-delete-box",on:{"click":function($event){return _vm.handleDelete(index)}}},[_c('i',{staticClass:"el-icon-delete"})])])],1)])}),(!_vm.disabled)?_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":_vm.handleAdd}},[_vm._v("添加")])],1):_vm._e()],2)],1)}
var linkagevue_type_template_id_60efe5e7_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/properties/linkage/index.vue?vue&type=template&id=60efe5e7&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/linkage/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./packages/form/src/form-design/properties/linkage/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_linkagevue_type_script_lang_js_ = (linkagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/properties/linkage/index.vue





/* normalize component */

var linkage_component = normalizeComponent(
  properties_linkagevue_type_script_lang_js_,
  linkagevue_type_template_id_60efe5e7_render,
  linkagevue_type_template_id_60efe5e7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var linkage = (linkage_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/item-properties.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      options: {},
      noModel : noModelList
    };
  },
  watch: {
    selectItem(val) { 
     
      if(val.type == 'batch' && !val.options.colWidth) {
        this.$set(val.options , 'colWidth' , {})
      }

     

      this.options = val.options || {}

       // 判断 labelWidth 
      if(!this.hideModel && !Object.prototype.hasOwnProperty.call(this.options, 'labelWidth')){
        this.$set(this.options , 'labelWidth' , -1)
      }
    }
  },
  computed: {
    hasDict() {
      return this.ngConfig && this.ngConfig.dict && this.ngConfig.dict.length > 0
    }
  },
  inject: {
      ngConfig: {
        from: 'ngConfigC',
        default: ()=>({})
      },
  },
  methods: {
     relyCbColumn(v) {
      this.$set(this.options , 'relyCbColumn' , v)
     // this.selectItem.options['relyCbColumn'] = v
    },
    queryDictSearch(queryString, cb) {
      const dicts = this.ngConfig && this.ngConfig.dict ? this.ngConfig.dict : null
      if(!dicts || dicts.length == 0) {
        cb([])
      }

      const ls = {}
      const types = []
      dicts.forEach(t=> {
        const type = t.type 
        if(!ls[type]) {
          ls[type] = type 

          types.push(t)
        } 
      })

      // 关键字过滤
      const fs = types.filter(t=> t.type.indexOf(queryString) >= 0)
      console.log('fs' , fs)
      cb(fs)

    },
    handleDictSelect(item) {
      console.log('item' , item)
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
    Option: properties_option , Linkage: linkage
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-design/properties/item-properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_item_propertiesvue_type_script_lang_js_ = (item_propertiesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/properties/item-properties.vue





/* normalize component */

var item_properties_component = normalizeComponent(
  properties_item_propertiesvue_type_script_lang_js_,
  item_propertiesvue_type_template_id_01ef7bb0_render,
  item_propertiesvue_type_template_id_01ef7bb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var item_properties = (item_properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/form-properties.vue?vue&type=template&id=accbfcce&
var form_propertiesvue_type_template_id_accbfcce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"properties-centent kk-checkbox"},[_c('div',{staticClass:"properties-body"},[_c('el-form',{attrs:{"label-position":"left","size":"mini"}},[_c('el-form-item',{attrs:{"label":"标签对齐方式"}},[_c('el-radio-group',{model:{value:(_vm.config.labelPosition),callback:function ($$v) {_vm.$set(_vm.config, "labelPosition", $$v)},expression:"config.labelPosition"}},[_c('el-radio-button',{attrs:{"label":"left"}},[_vm._v("左对齐")]),_c('el-radio-button',{attrs:{"label":"right"}},[_vm._v("右对齐")]),_c('el-radio-button',{attrs:{"label":"top"}},[_vm._v("顶部对齐")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"标签宽度"}},[_c('el-input-number',{attrs:{"min":0,"max":200,"step":10},model:{value:(_vm.config.labelWidth),callback:function ($$v) {_vm.$set(_vm.config, "labelWidth", $$v)},expression:"config.labelWidth"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"组件尺寸"}},[_c('el-radio-group',{model:{value:(_vm.config.size),callback:function ($$v) {_vm.$set(_vm.config, "size", $$v)},expression:"config.size"}},[_c('el-radio-button',{attrs:{"label":"medium"}},[_vm._v("medium")]),_c('el-radio-button',{attrs:{"label":"small"}},[_vm._v("small")]),_c('el-radio-button',{attrs:{"label":"mini"}},[_vm._v("mini")])],1)],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"校验字段提示"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-value":true,"active-value":false,"inactive-text":"关闭"},model:{value:(_vm.config.hideRequiredMark),callback:function ($$v) {_vm.$set(_vm.config, "hideRequiredMark", $$v)},expression:"config.hideRequiredMark"}})],1),_c('el-form-item',{attrs:{"label":"输出隐藏组件值"}},[_c('el-switch',{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:(_vm.config.outputHidden),callback:function ($$v) {_vm.$set(_vm.config, "outputHidden", $$v)},expression:"config.outputHidden"}})],1),_c('el-divider'),_c('el-form-item',{attrs:{"label":"表单CSS"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.config.customStyle),callback:function ($$v) {_vm.$set(_vm.config, "customStyle", $$v)},expression:"config.customStyle"}})],1),_c('el-divider'),_vm._t("form-extend-properties"),_c('el-form-item',{attrs:{"label":"提示"}},[_vm._v(" 实际预览效果请点击预览查看 ")])],2)],1)])}
var form_propertiesvue_type_template_id_accbfcce_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-design/properties/form-properties.vue?vue&type=template&id=accbfcce&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/form-properties.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./packages/form/src/form-design/properties/form-properties.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_form_propertiesvue_type_script_lang_js_ = (form_propertiesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/properties/form-properties.vue





/* normalize component */

var form_properties_component = normalizeComponent(
  properties_form_propertiesvue_type_script_lang_js_,
  form_propertiesvue_type_template_id_accbfcce_render,
  form_propertiesvue_type_template_id_accbfcce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_properties = (form_properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/properties/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

//import { mapState } from "vuex";
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

// CONCATENATED MODULE: ./packages/form/src/form-design/properties/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_design_propertiesvue_type_script_lang_js_ = (propertiesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/properties/index.vue





/* normalize component */

var properties_component = normalizeComponent(
  form_design_propertiesvue_type_script_lang_js_,
  propertiesvue_type_template_id_0d333692_render,
  propertiesvue_type_template_id_0d333692_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var properties = (properties_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/index.vue?vue&type=template&id=7a09355b&
var previewvue_type_template_id_7a09355b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticClass:"design-preview",staticStyle:{"top":"20px"},attrs:{"title":"预览","visible":_vm.visible,"append-to-body":true,"destroy-on-close":true,"width":(_vm.previewWidth + "px")},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"item-main"},[_c('FormBuild',{ref:"formBuild",attrs:{"custom-components":_vm.customComponents,"config":_vm.ngConfig,"formTemplate":_vm.jsonData,"models":_vm.models}}),_c('PreviewCode',{ref:"previewCode"}),(_vm.renderVisisble)?_c('renderPreview',{ref:"renderPreview"}):_vm._e()],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.handleGetData}},[_vm._v("获取数据")]),_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.handleRender}},[_vm._v("渲染")]),_c('el-button',{attrs:{"size":"mini"},on:{"click":_vm.handleValidator}},[_vm._v("验证")]),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)])}
var previewvue_type_template_id_7a09355b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/preview/index.vue?vue&type=template&id=7a09355b&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-build/index.vue?vue&type=template&id=8208d05c&
var form_buildvue_type_template_id_8208d05c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (
    typeof _vm.formTemplate.list !== 'undefined' && typeof _vm.formTemplate.config !== 'undefined'
  )?_c('el-form',{key:_vm.randomId,ref:"form",staticClass:"form-build form-design",style:(_vm.formTemplate.config.customStyle),attrs:{"label-position":_vm.formTemplate.config.labelPosition,"hide-required-asterisk":_vm.formTemplate.config.hideRequiredMark,"label-width":_vm.formTemplate.config.labelWidth + 'px',"rules":_vm.rules,"model":_vm.models,"size":_vm.formTemplate.config.size,"id":_vm.randomId}},[_vm._l((_vm.formTemplate.list),function(record){return _c('ng-form-build-item',{key:record.model,ref:"buildBlocks",refInFor:true,attrs:{"renderPreview":_vm.renderPreview,"record":record,"models":_vm.models,"config":_vm.config,"disabled":_vm.disabled,"formConfig":_vm.formTemplate.config},on:{"handleReset":_vm.reset,"forceUpdate":_vm.forceUpdate,"change":_vm.handleChange}})})],2):_vm._e()}
var form_buildvue_type_template_id_8208d05c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-build/index.vue?vue&type=template&id=8208d05c&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-build/build-item.vue?vue&type=template&id=3e17bdc0&
var build_itemvue_type_template_id_3e17bdc0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.record.type === 'grid' && _vm.dynamicVisibleItem)?_c('el-row',{staticClass:"grid-row",attrs:{"gutter":_vm.record.options.gutter}},_vm._l((_vm.record.columns),function(colItem,index){return _c('el-col',{key:index,staticClass:"grid-col",attrs:{"span":colItem.span || 0}},_vm._l((colItem.list),function(item){return _c('ng-form-build-item',{key:item.key,ref:"nestedComponents",refInFor:true,attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":item,"formConfig":_vm.formConfig},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})}),1)}),1):(_vm.record.type === 'table' && _vm.dynamicVisibleItem)?_c('table',{class:[
    'table-layout','form-table',
    _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
    _vm.record.options.bright ? 'bright' : '' ,
    _vm.record.options.small ? 'small' : '' ,
    _vm.record.options.bordered ? 'bordered' : '' 
  ],style:(_vm.record.options.customStyle)},[_vm._l((_vm.record.trs),function(trItem,trIndex){return [(_vm.showTr(trItem , _vm.models))?_c('tr',{key:trIndex},_vm._l((trItem.tds),function(tdItem,tdIndex){return _c('td',{key:tdIndex,class:['table-td', tdItem.class],style:(tdItem.style),attrs:{"colspan":tdItem.colspan,"rowspan":tdItem.rowspan}},_vm._l((tdItem.list),function(item){return _c('ng-form-build-item',{key:item.key,ref:"nestedComponents",refInFor:true,attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":item,"formConfig":_vm.formConfig},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})}),1)}),0):_vm._e()]})],2):(_vm.record.type === 'control' && _vm.dynamicVisibleItem)?_c('div',[_vm._l((_vm.models[_vm.record.model]),function(mdata,idx){return _c('div',{key:idx,class:[
      'table-layout','form-table',
      _vm.record.options.customClass ? _vm.record.options.customClass : '' ,
      _vm.record.options.bright ? 'bright' : '' ,
      _vm.record.options.small ? 'small' : '' ,
      _vm.record.options.bordered ? 'form-table-bordered' : '' 
    ],style:(_vm.record.options.customStyle),on:{"contextmenu":function($event){$event.preventDefault();return _vm.handleShowRightMenu($event , idx)}}},_vm._l((_vm.record.list),function(item,index){return _c('div',{key:index},[_c('ng-form-build-item',{ref:"nestedComponents",refInFor:true,attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":mdata,"record":item,"formConfig":_vm.formConfig,"prop-prepend":_vm.record.model + '.' + idx + '.'},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){mdata=$event}}})],1)}),0)}),(!_vm.renderPreview && !_vm.record.options.noAdd)?_c('el-button',{attrs:{"type":"dashed","size":"mini","disabled":_vm.disabled},on:{"click":_vm.addControl}},[_c('i',{staticClass:"el-icon-circle-plus-outline"}),_vm._v("增加 ")]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.renderPreview && _vm.showRightMenu),expression:"!renderPreview && showRightMenu"}],staticClass:"right-menu",style:({ 'top': _vm.menuTop + 'px', 'left': _vm.menuLeft + 'px' }),attrs:{"id":"rightMenu"}},[_c('ul',[(!_vm.record.options.noCopy)?_c('li',{on:{"click":_vm.handleCopy}},[_c('i',{staticClass:"el-icon-document"}),_vm._v("复制")]):_vm._e(),(!_vm.record.options.noCopy && !_vm.record.options.noRemove)?_c('hr'):_vm._e(),(!_vm.record.options.noRemove)?_c('li',{on:{"click":_vm.handleRemove}},[_c('i',{staticClass:"el-icon-delete"}),_vm._v("删除")]):_vm._e()])])],2):(_vm.dynamicVisibleItem && _vm.record.options.tooptip && _vm.record.options.tooptip.trim())?_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","enterable":false,"open-delay":500,"placement":"top-start"}},[_c('div',{staticClass:"tooltip-content",attrs:{"slot":"content"},slot:"content"},[_vm._v(" "+_vm._s(_vm.record.options.tooptip))]),_c('form-item',{key:_vm.record.key,ref:"nestedComponents",attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"formConfig":_vm.formConfig,"prop-prepend":_vm.propPrepend},on:{"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"forceUpdate":_vm.forceUpdate,"update:models":function($event){_vm.models=$event}}})],1):(_vm.dynamicVisibleItem)?_c('form-item',{key:_vm.record.key,ref:"nestedComponents",attrs:{"disabled":_vm.disabled,"renderPreview":_vm.renderPreview,"models":_vm.models,"record":_vm.record,"formConfig":_vm.formConfig,"prop-prepend":_vm.propPrepend},on:{"forceUpdate":_vm.forceUpdate,"handleReset":function($event){return _vm.$emit('handleReset')},"change":_vm.handleChange,"update:models":function($event){_vm.models=$event}}}):_vm._e()}
var build_itemvue_type_template_id_3e17bdc0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/form-build/build-item.vue?vue&type=template&id=3e17bdc0&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-build/build-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var build_itemvue_type_script_lang_js_ = ({
  name: "ng-form-build-item",
  data() {
    return {
      menuTop: 0,
      menuLeft: 0,
      selectControlIndex: -1,
      showRightMenu: false
    }
  },
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
    propPrepend: {
      // form-item的 prop前缀 默认不需要
      type: String
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
  created() {
    // 如果是control 则默认初始化就有一份空数据,control 下的list所有组件初始一个
    
    if(this.record.type == 'control' && !this.renderPreview && !Object.prototype.hasOwnProperty.call(this.models, this.record.model) ) {
      const data_ = {} 

     /* this.record.list.forEach(t=> {
        data_[t.model] = null
      })*/
      
      this.$set(this.models , this.record.model , [data_])
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

    },
    // 容器添加一行数据
    addControl() {

      // 将当前数据复制一份 压入
      const data_ = {} 

      this.record.list.forEach(t=> {
        data_[t.model] = ''
      })
      
      this.models[this.record.model].push(data_) 

    },
    handleShowRightMenu(e, idx) {
      // 显示右键菜单
      e.stopPropagation();

      // 判断是否有复制和删除 如果没有直接返回
      if(this.record.options.noRemove && this.record.options.noCopy) {
        this.showRightMenu = false
        return false
      }

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
      
      this.selectControlIndex = idx

      return false;
    },
    handleCopy() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        return 
      }

      const cloneData = cloneDeep_default()(this.models[this.record.model][this.selectControlIndex])

      this.models[this.record.model].push(cloneData)

    },
    handleRemove() {
      if(this.selectControlIndex == undefined || this.selectControlIndex < 0) {
        return 
      }

      if(!this.models[this.record.model] || this.models[this.record.model].length < this.selectControlIndex) {
        return 
      }

      if(this.models[this.record.model].length == 1) {
        
        this.$message.error(this.record.label + '内仅存的一条数据不能删除')
        return
      }

      this.models[this.record.model].splice(this.selectControlIndex,1)

    },
    handleRemoveRightMenu() {
      // 取消右键菜单
      this.showRightMenu = false;
    }
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-build/build-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_build_build_itemvue_type_script_lang_js_ = (build_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-build/build-item.vue





/* normalize component */

var build_item_component = normalizeComponent(
  form_build_build_itemvue_type_script_lang_js_,
  build_itemvue_type_template_id_3e17bdc0_render,
  build_itemvue_type_template_id_3e17bdc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var build_item = (build_item_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-build/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ng-form-build",
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
  provide: function () {
    return {
     customC: this.customComponents ,
      // 2022-03-10 lyf 从config中获取数据字典 dict
     ngConfigC: this.config
    }
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
    NgFormBuildItem: build_item
  },
  methods: { 
    reset() {
      // 重置表单
      this.$refs.form.resetFields();

      this.initModelKey(true)

      this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)

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
    handleChange(value, key) {
      // 触发change事件
      this.$emit("change", value, key);
    },
    // 2021-11-05 lyf 初始化每个组件的key 防止后面通过动态显隐等方式无法绑定
    initModelKey(update) {
      // 根据模板迭代一圈 每个组件赋予初值
      const list_ = this.formTemplate.list 
      if(!list_ || list_.length == 0) return 

      const fs_ = (n)=> {
        if(n instanceof Array) {
          n.forEach(t=> {
            fs_(t)
          })
        } else {
          if(n.model && (update || !Object.prototype.hasOwnProperty.call(this.models, n.model))) {

            if(n.type == 'checkbox' || n.type == 'cascader' || n.type == 'batch'
              || (n.type == 'select' && n.options.multiple)) {
              // 多选
              this.$set(this.models , n.model , [])
            } else if(n.type != 'control' && n.type != 'table' && n.type != 'divider' && n.type != 'grid'){ 
              // 字符串
              this.$set(this.models , n.model , null)
            }
   
          } 
          
          if(n.type != 'batch')
          for(let i in n) { 
            if(n[i] instanceof Array)
              fs_(n[i])
          }

        }
      }

      fs_(list_)
    }
  },
  created() {  
    this.randomId = 'vue_form_design' + parseInt(Math.random() * 1000000)

    // if(!window.customComponents && this.customComponents && this.customComponents.length > 0) {
    //   window.customComponents = this.customComponents
    // } 

    if(this.config.httpConfig && !window.httpConfig) {
      window.httpConfig = this.config.httpConfig
    }

    // 2022-02-26 lyf 从config中获取数据字典 dict
    // if(this.config.dict && this.config.dict.length > 0 && !window.ng_dict_) {
    //   window.ng_dict_ = this.config.dict  
    // }

    this.initModelKey()
 
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-build/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_buildvue_type_script_lang_js_ = (form_buildvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-build/index.vue





/* normalize component */

var form_build_component = normalizeComponent(
  src_form_buildvue_type_script_lang_js_,
  form_buildvue_type_template_id_8208d05c_render,
  form_buildvue_type_template_id_8208d05c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_build = (form_build_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/preview-code.vue?vue&type=template&id=00de3d33&
var preview_codevue_type_template_id_00de3d33_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"JSON数据","visible":_vm.visible,"append-to-body":true,"width":"850px"},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('div',{staticClass:"json-box"},[_c('el-input',{ref:"myEditor",staticStyle:{"min-height":"300px","height":"300px","max-height":"290px","overflow":"auto"},attrs:{"autosize":"","readonly":"","type":"textarea","value":_vm.editorJson}})],1),_c('div',{staticClass:"copy-btn-box"},[_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":_vm.handleExportJson}},[_vm._v(" 导出代码 ")])],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)])}
var preview_codevue_type_template_id_00de3d33_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/preview/preview-code.vue?vue&type=template&id=00de3d33&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/preview-code.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 
/* harmony default export */ var preview_codevue_type_script_lang_js_ = ({
  name: "ng-preview-code",
  data() {
    return {
      visible: false,
      editorJson: "",
      fileFormat: 'json',
      jsonData: {}
    };
  },
  
  components: {
     
  },
  methods: {
    init(model){
      this.visible = true 
      this.$nextTick(()=>{
        this.editorJson = JSON.stringify(model, null, "\t");
      })
       
    },
    handleCancel() {
      this.visible = false;
    },
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
  }
});

// CONCATENATED MODULE: ./packages/form/src/preview/preview-code.vue?vue&type=script&lang=js&
 /* harmony default export */ var preview_preview_codevue_type_script_lang_js_ = (preview_codevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/preview/preview-code.vue





/* normalize component */

var preview_code_component = normalizeComponent(
  preview_preview_codevue_type_script_lang_js_,
  preview_codevue_type_template_id_00de3d33_render,
  preview_codevue_type_template_id_00de3d33_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var preview_code = (preview_code_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"626e8f7f-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/render.vue?vue&type=template&id=ef5b258e&
var rendervue_type_template_id_ef5b258e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticStyle:{"top":"20px"},attrs:{"title":"预览","visible":_vm.visible,"append-to-body":true,"width":(_vm.previewWidth + "px")},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-tabs',{staticClass:"form-render-preview form-design",attrs:{"type":"card"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('el-tab-pane',{attrs:{"label":"模板","name":"template"}},[_c('el-input',{staticStyle:{"height":"100%"},attrs:{"rows":20,"type":"textarea"},on:{"change":_vm.changeTemplate},model:{value:(_vm.templdateText),callback:function ($$v) {_vm.templdateText=$$v},expression:"templdateText"}})],1),_c('el-tab-pane',{attrs:{"label":"数据","name":"second"}},[_c('el-input',{staticStyle:{"height":"100%"},attrs:{"rows":20,"type":"textarea"},on:{"change":_vm.changeValue},model:{value:(_vm.valueText),callback:function ($$v) {_vm.valueText=$$v},expression:"valueText"}})],1),_c('el-tab-pane',{attrs:{"label":"表单","name":"third"}},[(_vm.buildVisible)?_c('FormBuild',{ref:"buildPreview",attrs:{"formTemplate":_vm.formTemplate,"models":_vm.models,"custom-components":_vm.customComponents,"config":_vm.ngConfig}}):_vm._e()],1),_c('el-tab-pane',{attrs:{"label":"渲染","name":"four"}},[(_vm.formVisible)?_c('FormBuild',{ref:"formPreview",staticStyle:{"height":"100%"},attrs:{"formTemplate":_vm.formTemplate,"custom-components":_vm.customComponents,"config":_vm.ngConfig,"models":_vm.models,"renderPreview":true}}):_vm._e()],1)],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("取 消")]),(_vm.active == 'third')?_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":_vm.syncModel}},[_vm._v("同 步")]):_vm._e(),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){_vm.visible = false}}},[_vm._v("确 定")])],1)],1)}
var rendervue_type_template_id_ef5b258e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/form/src/preview/render.vue?vue&type=template&id=ef5b258e&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/render.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 
/* harmony default export */ var rendervue_type_script_lang_js_ = ({
  name: "ng-form-render",
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
  inject: {
    customComponents: {
      from: 'customC',
      default: ()=>[]
    },
    ngConfig: {
        from: 'ngConfigC',
        default: ()=>({})
    } 
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
        if(model && this.$refs.formPreview){
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

// CONCATENATED MODULE: ./packages/form/src/preview/render.vue?vue&type=script&lang=js&
 /* harmony default export */ var preview_rendervue_type_script_lang_js_ = (rendervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/preview/render.vue





/* normalize component */

var render_component = normalizeComponent(
  preview_rendervue_type_script_lang_js_,
  rendervue_type_template_id_ef5b258e_render,
  rendervue_type_template_id_ef5b258e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var preview_render = (render_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/preview/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ng-form-preview",
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
    PreviewCode: preview_code,FormBuild: form_build,renderPreview: preview_render
  },
  inject: {
      customComponents: {
        from: 'customC',
        default: ()=>[]
      },
      ngConfig: {
        from: 'ngConfigC',
        default: ()=>({})
    } 
  },
 
  methods: {
    init(data) {
      this.visible = true
      this.jsonData = data

      // 重置表单
      this.$nextTick(()=>{
        this.$refs.formBuild.reset()
      }) 
     
    },
    handleGetData() {
      this.$refs.formBuild.getData()
        .then(res => { 
          this.$refs.previewCode.init(res) 
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

// CONCATENATED MODULE: ./packages/form/src/preview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_previewvue_type_script_lang_js_ = (previewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/preview/index.vue





/* normalize component */

var preview_component = normalizeComponent(
  src_previewvue_type_script_lang_js_,
  previewvue_type_template_id_7a09355b_render,
  previewvue_type_template_id_7a09355b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var preview = (preview_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/form/src/form-design/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 
 



 



 



/* harmony default export */ var form_designvue_type_script_lang_js_ = ({
  name: 'ng-form-design',
  data(){
    return {
      previewVisible: false , 
      modelJson: {},

      modelVisible: false,
      importVisible: false,
      importText: '' ,

      // 2022-03-23 lyf 增加dargType 当前拖拽的组件类型
      dragType: '' ,

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
    },
    // 按钮显示隐藏 
    clear: {
      type: Boolean ,
      default: true
    },
    preview: {
      type: Boolean ,
      default: true
    },
    reder: {
      type: Boolean ,
      default: true
    },
    imp: {
      type: Boolean ,
      default: true
    },
    exp: {
      type: Boolean ,
      default: true
    },
    // 基础组件需要展示的列表 或者false全部不展示
    basicItem: {
      type: [Boolean , Array] ,
      default: true
    }, 
    // 个性化组件需要展示的列表 或者false全部不展示
    personalItem: {
      type: [Boolean , Array] ,
      default: true
    },
     //布局组件需要展示的列表 或者false全部不展示
    layoutItem: {
      type: [Boolean , Array] ,
      default: true
    } 
  },
  provide: function () {
    return {
     customC: this.customComponents ,
     ngConfigC: this.config
    }
   },
  components: {
    DesignPanel: design_panel,DragPanel: drag_panel,Properties: properties,Preview: preview,previewCode: preview_code,renderPreview: preview_render
  },
  created(){  
    // if( this.customComponents && this.customComponents.length > 0) {
    //   window.customComponents = this.customComponents
    // }
    if(this.config.httpConfig) {
      window.httpConfig = this.config.httpConfig
    }
     
    // if(this.config.dict && this.config.dict.length > 0 && !window.ng_dict_) {
    //   window.ng_dict_ = this.config.dict  
    // }
  },
  methods: {
    changeSelectItem(item) { 
      this.selectItem = item
    },
    handlePreview () { 
      this.previewVisible = true
      this.$nextTick(() => {
        this.$refs.preview.init(this.data) 
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
    handleDragType(dragType){
      this.dragType = dragType
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

      this.modelVisible = true 
      this.$nextTick(()=>{
        this.$refs.model.init(this.data)
      })
 
 
    }
  }
});

// CONCATENATED MODULE: ./packages/form/src/form-design/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_form_designvue_type_script_lang_js_ = (form_designvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/src/form-design/index.vue





/* normalize component */

var form_design_component = normalizeComponent(
  src_form_designvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_design = (form_design_component.exports);
// CONCATENATED MODULE: ./packages/form/src/index.js
// 导入组件，组件必须声明 name


 
 
// 为组件提供 install 安装方法，供按需引入
form_design.install = function (Vue) { 
  Vue.component(form_design.name, form_design)
}
// 为组件提供 install 安装方法，供按需引入
form_build.install = function (Vue) { 
  Vue.component(form_build.name, form_build)
}
 
form_item.install = function (Vue) { 
  Vue.component(form_item.name, form_item)
}

base.install = function (Vue) { 
  Vue.component(base.name, base)
}
// 默认导出组件
/* harmony default export */ var form_src = ([ form_design,form_build,form_item,base]);
 
// CONCATENATED MODULE: ./packages/index.js
// 导入组件

__webpack_require__("1333")

// 存储组件列表 
 
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  form_src.map(component => Vue.component(component.name, component))
}
 
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...form_src
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
});