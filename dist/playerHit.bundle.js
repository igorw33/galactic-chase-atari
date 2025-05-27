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

/***/ "./src/playerHit.js":
/*!**************************!*\
  !*** ./src/playerHit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.playerHit = void 0;\r\nfunction playerHit(fallingDiv, shipDiv, hit) {\r\n    var shipPos = shipDiv.getBoundingClientRect();\r\n    var shipTop = shipPos.top;\r\n    var shipLeft = shipPos.left;\r\n    var shipRight = shipPos.right;\r\n    var shipBottom = shipPos.bottom;\r\n    var enemyPos = fallingDiv.getBoundingClientRect();\r\n    var enemyTop = enemyPos.top;\r\n    var enemyLeft = enemyPos.left;\r\n    var enemyRight = enemyPos.right;\r\n    var enemyBottom = enemyPos.bottom;\r\n    var checkHorizontal = false;\r\n    if ((shipRight > enemyLeft && shipRight < enemyRight) || (shipLeft < enemyRight && shipLeft > enemyLeft)) {\r\n        checkHorizontal = true;\r\n    }\r\n    var checkVertical = false;\r\n    if ((enemyTop > shipTop && shipTop < enemyBottom) || (enemyBottom > shipTop && shipBottom < enemyBottom)) {\r\n        checkVertical = true;\r\n    }\r\n    if (checkHorizontal && checkVertical && !hit) {\r\n        hit = true;\r\n    }\r\n    return (hit);\r\n}\r\nexports.playerHit = playerHit;\r\n\n\n//# sourceURL=webpack:///./src/playerHit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/playerHit.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;