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

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Enemy = void 0;\r\nvar Enemy = /** @class */ (function () {\r\n    function Enemy(type, top, left, id, sprite) {\r\n        this.formation = true;\r\n        this.leavingFormation = false;\r\n        this.returningToFormation = false;\r\n        this.speed = 0;\r\n        this.type = type;\r\n        this.top = top;\r\n        this.left = left;\r\n        this.id = id;\r\n        this.sprite = sprite;\r\n    }\r\n    return Enemy;\r\n}());\r\nexports.Enemy = Enemy;\r\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/enemy.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;