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

/***/ }),

/***/ "./src/newLevel.js":
/*!*************************!*\
  !*** ./src/newLevel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.newLevel = void 0;\r\nvar enemy_1 = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\r\nvar ship_1 = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\nfunction newLevel(newLevel) {\r\n    var enemyArr = [\r\n        new enemy_1.Enemy(\"command\", 90, 680, \"command_1\", 1),\r\n        new enemy_1.Enemy(\"command\", 90, 920, \"command_2\", 1),\r\n        new enemy_1.Enemy(\"flanker\", 140, 600, \"flanker_1\", 1),\r\n        new enemy_1.Enemy(\"flanker\", 140, 680, \"flanker_2\", 2),\r\n        new enemy_1.Enemy(\"flanker\", 140, 760, \"flanker_3\", 1),\r\n        new enemy_1.Enemy(\"flanker\", 140, 840, \"flanker_4\", 2),\r\n        new enemy_1.Enemy(\"flanker\", 140, 920, \"flanker_5\", 1),\r\n        new enemy_1.Enemy(\"flanker\", 140, 1000, \"flanker_6\", 2),\r\n        new enemy_1.Enemy(\"captain\", 190, 520, \"captain_1\", 1),\r\n        new enemy_1.Enemy(\"captain\", 190, 600, \"captain_2\", 2),\r\n        new enemy_1.Enemy(\"captain\", 190, 680, \"captain_3\", 1),\r\n        new enemy_1.Enemy(\"captain\", 190, 760, \"captain_4\", 2),\r\n        new enemy_1.Enemy(\"captain\", 190, 840, \"captain_5\", 1),\r\n        new enemy_1.Enemy(\"captain\", 190, 920, \"captain_6\", 2),\r\n        new enemy_1.Enemy(\"captain\", 190, 1000, \"captain_7\", 1),\r\n        new enemy_1.Enemy(\"captain\", 190, 1080, \"captain_8\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 240, 440, \"ensign_1\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 240, 520, \"ensign_2\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 240, 600, \"ensign_3\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 240, 680, \"ensign_4\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 240, 760, \"ensign_5\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 240, 840, \"ensign_6\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 240, 920, \"ensign_7\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 240, 1000, \"ensign_8\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 240, 1080, \"ensign_9\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 240, 1160, \"ensign_10\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 290, 440, \"ensign_11\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 290, 520, \"ensign_12\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 290, 600, \"ensign_13\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 290, 680, \"ensign_14\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 290, 760, \"ensign_15\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 290, 840, \"ensign_16\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 290, 920, \"ensign_17\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 290, 1000, \"ensign_18\", 1),\r\n        new enemy_1.Enemy(\"ensign\", 290, 1080, \"ensign_19\", 2),\r\n        new enemy_1.Enemy(\"ensign\", 290, 1160, \"ensign_20\", 1)\r\n    ];\r\n    var divArr = [];\r\n    var direction = \"right\";\r\n    var ship = new ship_1.Ship();\r\n    var shipDiv = document.createElement(\"div\");\r\n    if (newLevel == 2) {\r\n        enemyArr.push(new enemy_1.Enemy(\"command\", 90, 840, \"command_3\", 1));\r\n    }\r\n    else if (newLevel > 2) {\r\n        enemyArr.push(new enemy_1.Enemy(\"command\", 90, 840, \"command_3\", 1));\r\n        enemyArr.push(new enemy_1.Enemy(\"command\", 90, 760, \"command_4\", 1));\r\n    }\r\n    return ({ enemyArr: enemyArr, divArr: divArr, direction: direction, ship: ship, shipDiv: shipDiv });\r\n}\r\nexports.newLevel = newLevel;\r\n\n\n//# sourceURL=webpack:///./src/newLevel.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Ship = void 0;\r\nvar Ship = /** @class */ (function () {\r\n    function Ship() {\r\n        this.top = window.screen.height - 280;\r\n        this.left = 740;\r\n        this.bullet = true;\r\n    }\r\n    return Ship;\r\n}());\r\nexports.Ship = Ship;\r\n\n\n//# sourceURL=webpack:///./src/ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/newLevel.js");
/******/ 	
/******/ })()
;