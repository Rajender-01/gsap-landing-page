/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/cursor.js":
/*!*******************************!*\
  !*** ./src/scripts/cursor.js ***!
  \*******************************/
/***/ (() => {

eval("const cursor = document.querySelector(\".cursor\");\r\nwindow.addEventListener(\"mousemove\", (e) => {\r\n  gsap.to(cursor, {\r\n    x: e.x,\r\n    y: e.y,\r\n    ease: \"elastic.out(1,0.3)\",\r\n    duration: 2,\r\n    opacity: 0.6\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://landing-page/./src/scripts/cursor.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursor.js */ \"./src/scripts/cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageOne_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageOne.js */ \"./src/scripts/pageOne.js\");\n/* harmony import */ var _pageOne_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pageOne_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pageTwo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageTwo.js */ \"./src/scripts/pageTwo.js\");\n/* harmony import */ var _pageTwo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pageTwo_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pageThree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageThree.js */ \"./src/scripts/pageThree.js\");\n/* harmony import */ var _pageThree_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pageThree_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pageFour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageFour.js */ \"./src/scripts/pageFour.js\");\n/* harmony import */ var _pageFour_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pageFour_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://landing-page/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pageFour.js":
/*!*********************************!*\
  !*** ./src/scripts/pageFour.js ***!
  \*********************************/
/***/ (() => {

eval("gsap.from(\".newsLetter__heading, .newsletter__btn\", {\r\n  y: -40,\r\n  opacity: 0,\r\n  stagger: 0.4,\r\n  scrollTrigger: {\r\n    trigger: \"#pageFour\",\r\n    start: \"top 75%\",  \r\n  },\r\n});\n\n//# sourceURL=webpack://landing-page/./src/scripts/pageFour.js?");

/***/ }),

/***/ "./src/scripts/pageOne.js":
/*!********************************!*\
  !*** ./src/scripts/pageOne.js ***!
  \********************************/
/***/ (() => {

eval("const tl = gsap.timeline();\r\n\r\ntl.from(\".ntf\", {\r\n  y: -40,\r\n  duration: 0.4,\r\n  opacity: 0,\r\n  delay: 0.4,\r\n});\r\n\r\ntl.from(\".nav__logoCont\", {\r\n  y: -30,\r\n  duration: 0.4,\r\n  opacity: 0,\r\n});\r\n\r\ntl.from(\".nav__menus\", {\r\n  y: -30,\r\n  duration: 0.3,\r\n  opacity: 0,\r\n});\r\n\r\ntl.from(\".nav__btnCont\", {\r\n  y: -30,\r\n  duration: 0.2,\r\n  opacity: 0,\r\n});\r\n\r\ntl.from(\".bnr__heading, .bnr__desc,  .bnr__btn\", {\r\n  y: -30,\r\n  duration: 0.4,\r\n  opacity: 0,\r\n  stagger: 0.2,\r\n  ease: \"power1.out\",\r\n});\r\n\r\ntl.from(\r\n  \".bnr__imgCont\",\r\n  {\r\n    x: 300,\r\n    duration: 0.8,\r\n    opacity: 0,\r\n  },\r\n  \"-=0.7\"\r\n);\r\n\n\n//# sourceURL=webpack://landing-page/./src/scripts/pageOne.js?");

/***/ }),

/***/ "./src/scripts/pageThree.js":
/*!**********************************!*\
  !*** ./src/scripts/pageThree.js ***!
  \**********************************/
/***/ (() => {

eval("gsap.from(\".pixel__imgCont\", {\r\n  x: -300,\r\n  opacity: 0,\r\n  duration: 1,\r\n  scrollTrigger: {\r\n    trigger: \"#pageThree\",\r\n    start: \"top 75%\",  \r\n  },\r\n});\r\n\r\ngsap.from(\".pixel__heading, .pixel__desc, .pixel__btn\", {\r\n  y: -30,\r\n  opacity: 0,\r\n  stagger: 0.4,\r\n  scrollTrigger: {\r\n    trigger: \"#pageThree\",\r\n    start: \"top 75%\",  \r\n  },\r\n});\r\n\r\ngsap.from(\".help__heading, .help__desc\", {\r\n  x: -300,\r\n  opacity: 0,\r\n  stagger: 0.4,\r\n  scrollTrigger: {\r\n    trigger: \"#pageThree\",\r\n    start: \"top 15%\",  \r\n  },\r\n});\r\n\r\ngsap.from(\".help__item\", {\r\n  x: 200,\r\n  opacity: 0,\r\n  stagger: 0.4,\r\n  scrollTrigger: {\r\n    trigger: \"#pageThree\",\r\n    start: \"top 15%\",  \r\n  },\r\n});\n\n//# sourceURL=webpack://landing-page/./src/scripts/pageThree.js?");

/***/ }),

/***/ "./src/scripts/pageTwo.js":
/*!********************************!*\
  !*** ./src/scripts/pageTwo.js ***!
  \********************************/
/***/ (() => {

eval("gsap.from(\".client__heading, .client__desc, .client__logo\", {\r\n  y: -30,\r\n  opacity: 0,\r\n  stagger: 0.3,\r\n  scrollTrigger: {\r\n    trigger: '#pageTwo',\r\n    start: 'top 85%'\r\n  }\r\n});\r\n\r\ngsap.from(\".community__heading, .community__desc\", {\r\n  y: -30,\r\n  opacity: 0,\r\n  stagger: 0.4,\r\n  scrollTrigger: {\r\n    trigger: '#pageTwo',\r\n    start: 'top 35%'\r\n  }\r\n});\r\n\r\ngsap.from(\".community__item\", {\r\n  opacity: 0,\r\n  duration: 1,\r\n  scrollTrigger: {\r\n    trigger: '#pageTwo',\r\n    start: 'top 10%'\r\n  }\r\n});\r\n\r\ngsap.from(\".community__item img, .community__item h3, .community__item p\", {\r\n  y: -30,\r\n  duration: 0.3,\r\n  scrollTrigger: {\r\n    trigger: '#pageTwo',\r\n    start: 'top 10%'\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://landing-page/./src/scripts/pageTwo.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;