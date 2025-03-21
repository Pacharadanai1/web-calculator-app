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
/***/ (() => {

eval("\nvar display = document.getElementById('display');\nvar buttons = document.querySelectorAll('.btn');\nbuttons.forEach(function (button) {\n    button.addEventListener('click', function () {\n        var value = button.getAttribute('data-value');\n        if (value === 'C') {\n            display.value = '';\n        }\n        else if (value === 'B') {\n            display.value = display.value.slice(0, -1);\n        }\n        else if (value === '=') {\n            try {\n                display.value = eval(display.value).toString();\n            }\n            catch (_a) {\n                display.value = 'Error';\n            }\n        }\n        else {\n            display.value += value;\n        }\n    });\n});\n\n\n//# sourceURL=webpack://web-calculator-app/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;