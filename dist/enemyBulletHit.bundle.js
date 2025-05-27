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

/***/ "./src/enemyBulletHit.js":
/*!*******************************!*\
  !*** ./src/enemyBulletHit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.enemyBulletHit = void 0;\r\nfunction enemyBulletHit(bullet, shipDiv, hit) {\r\n    var bulletPos = bullet.getBoundingClientRect();\r\n    var bulletTop = bulletPos.top;\r\n    var bulletLeft = bulletPos.left;\r\n    var bulletRight = bulletPos.right;\r\n    var bulletBottom = bulletPos.bottom;\r\n    var shipPos = shipDiv.getBoundingClientRect();\r\n    var shipTop = shipPos.top;\r\n    var shipLeft = shipPos.left;\r\n    var shipRight = shipPos.right;\r\n    var shipBottom = shipPos.bottom;\r\n    var checkHorizontal = false;\r\n    if ((bulletRight > shipLeft && bulletRight < shipRight) || (bulletLeft < shipRight && bulletLeft > shipLeft)) {\r\n        checkHorizontal = true;\r\n    }\r\n    var checkVertical = false;\r\n    if ((bulletTop > shipTop && shipTop < bulletBottom) || (bulletBottom > shipTop && shipBottom < bulletBottom)) {\r\n        checkVertical = true;\r\n    }\r\n    if (checkHorizontal && checkVertical && !hit) {\r\n        hit = true;\r\n    }\r\n    return (hit);\r\n}\r\nexports.enemyBulletHit = enemyBulletHit;\r\n\n\n//# sourceURL=webpack:///./src/enemyBulletHit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/enemyBulletHit.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;