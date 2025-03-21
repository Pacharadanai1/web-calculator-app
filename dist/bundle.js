/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Calculator_1 = __webpack_require__(/*! ./components/Calculator */ \"./src/components/Calculator.ts\");\nvar calculator = new Calculator_1.Calculator();\nvar display = document.getElementById('display');\nvar buttons = document.querySelectorAll('.btn');\nbuttons.forEach(function (button) {\n    button.addEventListener('click', function () {\n        var value = button.getAttribute('data-value');\n        if (value === 'C') {\n            display.value = '';\n        }\n        else if (value === 'B') {\n            display.value = display.value.slice(0, -1);\n        }\n        else if (value === '=') {\n            try {\n                display.value = eval(display.value).toString();\n            }\n            catch (_a) {\n                display.value = 'Error';\n            }\n        }\n        else {\n            display.value += value;\n        }\n    });\n});\n\n\n//# sourceURL=webpack://web-calculator-app/./src/app.ts?");

/***/ }),

/***/ "./src/components/Calculator.ts":
/*!**************************************!*\
  !*** ./src/components/Calculator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Calculator = void 0;\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n    }\n    Calculator.prototype.add = function (a, b) {\n        return a + b;\n    };\n    Calculator.prototype.subtract = function (a, b) {\n        return a - b;\n    };\n    Calculator.prototype.multiply = function (a, b) {\n        return a * b;\n    };\n    Calculator.prototype.divide = function (a, b) {\n        return a / b;\n    };\n    return Calculator;\n}());\nexports.Calculator = Calculator;\n\n\n//# sourceURL=webpack://web-calculator-app/./src/components/Calculator.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;