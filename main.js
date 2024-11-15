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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n    const contact = document.createElement('div');\n    contact.innerHTML = `\n      <h1>Contact Us!</h1>\n      <p>Phone: 123-456-7890</p>\n      <p>Email: restaurant@example.com</p>\n    `;\n    content.appendChild(contact);\n  }\n  \n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.getElementById('content');\n    const heading = document.createElement('h1');\n    heading.textContent = 'Welcome to Our Restaurant!';\n    \n    const description = document.createElement('p');\n    description.textContent = 'The best food in town, served with love and care.';\n  \n    const image = document.createElement('img');\n    image.src = 'https://64.media.tumblr.com/2d87c8d94a7026a4fedee1688a2c0823/76ba439ef8682a2c-1c/s1280x1920/ed2d8be0a0d128135955d5b06953a401bda75aa0.jpg';\n    image.alt = 'Restaurant Image';\n    image.width = 300;\n  \n    content.appendChild(heading);\n    content.appendChild(description);\n    content.appendChild(image);\n  }\n  \n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction clearContent() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n}\n\nfunction addTabListeners() {\n  document.getElementById('homeBtn').addEventListener('click', () => {\n    clearContent();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  document.getElementById('menuBtn').addEventListener('click', () => {\n    clearContent();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  document.getElementById('contactBtn').addEventListener('click', () => {\n    clearContent();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n}\n\nfunction initializeWebsite() {\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Default tab\n  addTabListeners();\n}\n\ninitializeWebsite();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    const menu = document.createElement('div');\n    menu.innerHTML = `\n      <h1>Menu</h1>\n      <ul>\n        <li>Dango - $5</li>\n        <li>Ramen - $10</li>\n        <li>sushi - $8</li>\n      </ul>\n    `;\n    const image1 = document.createElement('img');\n    image1.src = 'https://64.media.tumblr.com/0c45cc3dda2f8f11a0c2ec69a2d9b8db/0d8341f0aa472d97-de/s2048x3072/c9e562e899a0779072ecf7c5938d8dec97709fec.pnj';\n    image1.alt = 'Dango Image';\n    image1.width = 250;\n\n    const image2 = document.createElement('img');\n    image2.src = 'https://64.media.tumblr.com/8d890ececf5727fcfaef460bec766213/7a91a6f6774c9502-94/s500x750/a9091f071f4035df1e99c39f8039f65705163e0b.pnj';\n    image2.alt = 'Ramen Image';\n    image2.width = 270;\n\n    const image3 = document.createElement('img');\n    image3.src = 'https://64.media.tumblr.com/d842f9458bbaaeb436762f1642d2de9f/b4ce583f3a76104f-ce/s640x960/2decc7153a3f7395e907f375e66cf34154d7ee54.pnj';\n    image3.alt = 'Sushi Image';\n    image3.width = 270;\n\n    content.appendChild(menu);\n    content.appendChild(image1);\n    content.appendChild(image2);\n    content.appendChild(image3);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;