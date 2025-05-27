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

/***/ "./src/enemyHit.js":
/*!*************************!*\
  !*** ./src/enemyHit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.enemyHit = void 0;\r\nfunction enemyHit(divArr, bullet, enemyArr, hit) {\r\n    var bulletPos = bullet.getBoundingClientRect();\r\n    var bulletTop = bulletPos.top;\r\n    var bulletLeft = bulletPos.left;\r\n    var bulletRight = bulletPos.right;\r\n    var bulletBottom = bulletPos.bottom;\r\n    var addToScore = 0;\r\n    divArr.forEach(function (element) {\r\n        var enemyPos = element.getBoundingClientRect();\r\n        var enemyTop = enemyPos.top;\r\n        var enemyLeft = enemyPos.left;\r\n        var enemyRight = enemyPos.right;\r\n        var enemyBottom = enemyPos.bottom;\r\n        var checkHorizontal = false;\r\n        if ((bulletRight > enemyLeft && bulletRight < enemyRight) || (bulletLeft < enemyRight && bulletLeft > enemyLeft)) {\r\n            checkHorizontal = true;\r\n        }\r\n        var checkVertical = false;\r\n        if ((enemyTop > bulletTop && bulletTop < enemyBottom) || (enemyBottom > bulletTop && bulletBottom < enemyBottom)) {\r\n            checkVertical = true;\r\n        }\r\n        if (checkHorizontal && checkVertical && !hit) {\r\n            hit = true;\r\n            if (enemyArr[divArr.indexOf(element)].type == \"command\") {\r\n                addToScore = 50;\r\n            }\r\n            else if (enemyArr[divArr.indexOf(element)].type == \"flanker\") {\r\n                addToScore = 40;\r\n            }\r\n            else if (enemyArr[divArr.indexOf(element)].type == \"captain\") {\r\n                addToScore = 30;\r\n            }\r\n            else if (enemyArr[divArr.indexOf(element)].type == \"ensign\") {\r\n                addToScore = 20;\r\n            }\r\n            if (enemyArr[divArr.indexOf(element)].formation == false) {\r\n                addToScore = addToScore * 2;\r\n            }\r\n            enemyArr.splice(divArr.indexOf(element), 1);\r\n            divArr.splice(divArr.indexOf(element), 1);\r\n            var counter_1 = 1;\r\n            element.innerHTML = \"\";\r\n            var explosionImg = document.createElement(\"img\");\r\n            explosionImg.src = \"gfx/destroy\" + counter_1 + \".png\";\r\n            explosionImg.classList.add(\"icon\");\r\n            element.appendChild(explosionImg);\r\n            counter_1 = 2;\r\n            var destroyInterval_1 = setInterval(function () {\r\n                if (counter_1 > 3) {\r\n                    document.body.removeChild(element);\r\n                    clearInterval(destroyInterval_1);\r\n                }\r\n                else {\r\n                    var explosionSound = document.createElement(\"AUDIO\");\r\n                    explosionSound.setAttribute(\"src\", \"audio/explosion.mp3\");\r\n                    explosionSound.setAttribute(\"controls\", \"controls\");\r\n                    explosionSound.setAttribute(\"autoplay\", \"autoplay\");\r\n                    explosionSound.style.position = \"absolute\";\r\n                    explosionSound.style.left = \"-9999px\";\r\n                    element.innerHTML = \"\";\r\n                    var explosionImg_1 = document.createElement(\"img\");\r\n                    explosionImg_1.src = \"gfx/destroy\" + counter_1 + \".png\";\r\n                    explosionImg_1.classList.add(\"icon\");\r\n                    element.appendChild(explosionImg_1);\r\n                    counter_1 += 1;\r\n                }\r\n            }, 200);\r\n            destroyInterval_1;\r\n        }\r\n    });\r\n    return ({ divArr: divArr, enemyArr: enemyArr, hit: hit, addToScore: addToScore });\r\n}\r\nexports.enemyHit = enemyHit;\r\n\n\n//# sourceURL=webpack:///./src/enemyHit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/enemyHit.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;