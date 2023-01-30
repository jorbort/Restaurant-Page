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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction createContact(){\nconst contact = document.createElement('div');\ncontact.className = 'contact'\n\nconst phone = document.createElement('p');\nphone.textContent = '📞 655-878-999'\n\nconst address = document.createElement('p');\naddress.textContent = '🏠 Wallaby Street 123, Bikini Bottom '\n\nconst restImg = document.createElement('img');\nrestImg.src = 'https://y101fm.com/images/articleimages/112516/2016-11-23-KRUSTY-4-FOOD--banner.jpg'\nrestImg.id = 'restImg'\n\ncontact.appendChild(phone)\ncontact.appendChild(address)\ncontact.appendChild(restImg)\n\nreturn contact\n}\n\nfunction loadContact(){\n    const body = document.querySelector('.body')\n    body.textContent = ''\n    body.appendChild(createContact())\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\n\nfunction createHome(){\n    let card = document.createElement('div');\n    card.className = 'card';\n\n    let image = document.createElement('img');\n    image.src = 'https://media.tenor.com/-RKAY-AR0yEAAAAM/spongebob-squarepants-pizza.gif'\n    image.id = 'sponge-gif'\n    card.appendChild(image);\n    \n    return card;\n}\n\nfunction createTitle(){\n    let title = document.createElement('h2')\n    title.textContent = 'Mr Crab Pizza'\n    return title;\n}\n\nfunction loadHome(){\n    let body = document.querySelector('.body')\n    body.textContent = \"\";\n    body.appendChild(createHome())\n    body.appendChild(createTitle())\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n    //import _ from 'lodash';\n    \n\n\n    \n    \n    \n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadPage)()\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n//creates the header element in the dom \nfunction createHeader(){\n    \n    let header = document.createElement('div');\n    header.className = 'header'\n    header.appendChild(createNav())\n\n    return header;\n}\n\nfunction createNav(){\n    let nav = document.createElement('nav')\n\n    let main = document.createElement('button');\n    main.className = 'button-nav';\n    main.innerText = 'main'\n    main.addEventListener('click',(e)=>{\n        if (e.target.classList.contains(\"active\")) return;\n    setActiveButton(main);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n    })\n\n\n    let menu = document.createElement('button');\n    menu.className = 'button-nav';\n    menu.innerText = 'menu'\n    menu.addEventListener('click', (e)=>{\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menu);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    }) \n\n    let contact = document.createElement('button');\n    contact.className = 'button-nav';\n    contact.textContent = 'contact';\n    contact.addEventListener('click',(e)=>{\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contact);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\n    });\n    nav.appendChild(main);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n\n    return nav;   \n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n        button.classList.remove(\"active\");\n    }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction createBody(){\n    let body = document.createElement('div');\n    body.className = 'body';\n    body.style.display = 'flex';\n    body.style.flexDirection = 'column-reverse';\n    \n    return body;\n}\n\nfunction loadPage(){\n    let con = document.querySelector('.content');\n    con.appendChild(createHeader());\n    con.appendChild(createBody());\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n    \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\n\nfunction createMenu(){\n    let menu = document.createElement('div');\n    menu.className = 'menu-grid'\n\n    let burger = document.createElement('div')\n    burger.className = 'menu-item';\n    let burgerImg = document.createElement('img')\n    burgerImg.src = \"https://64.media.tumblr.com/b468a40070cac271b3bbd482447f5465/tumblr_p1y9cz3xce1vqc713o1_500.gifv\"\n    burgerImg.className = \"menu-image\"\n    let burgerTitle = document.createElement('h2')\n    burgerTitle.textContent = 'Krabby Patty'\n    let burgerPrice = document.createElement('p')\n    burgerPrice.textContent = \"$ 4\"\n    burger.appendChild(burgerTitle);\n    burger.appendChild(burgerImg);\n    burger.appendChild(burgerPrice);\n\n\n    let colorBurger = document.createElement('div')\n    colorBurger.className = 'menu-item';\n    let colorBurgerImg = document.createElement('img')\n    colorBurgerImg.src = \"https://i.gifer.com/origin/9b/9b10de8cb9c73c105f3d25e187bd8667_w200.gif\"\n    colorBurgerImg.className = \"menu-image\"\n    let colorBurgerTitle = document.createElement('h2')\n    colorBurgerTitle.textContent = 'Krabby  Pretty Color Patty'\n    let colorBurgerPrice = document.createElement('p')\n    colorBurgerPrice.textContent = \"$ 5\"\n    colorBurger.appendChild(colorBurgerTitle);\n    colorBurger.appendChild(colorBurgerImg);\n    colorBurger.appendChild(colorBurgerPrice);\n\n\n    let pizza = document.createElement('div')\n    pizza.className = 'menu-item';\n    \n    let pizzaImg = document.createElement('img')\n    pizzaImg.src = 'https://static.wikia.nocookie.net/bd08bca7-1622-49e8-89c6-832c51b78cd1/scale-to-width/755'\n    pizzaImg.className = \"menu-image\"\n    \n    let pizzaTitle = document.createElement('h2')\n    pizzaTitle.textContent = 'Krusty Krab pizza'\n\n    let pizzaDesc = document.createElement('p')\n    pizzaDesc.textContent = 'Krusty krab pizza is the best pizza for me and for you $8'\n\n    pizza.appendChild(pizzaTitle)\n    pizza.appendChild(pizzaImg)\n    pizza.appendChild(pizzaDesc)\n\n    menu.appendChild(burger)\n    menu.appendChild(pizza)\n    menu.appendChild(colorBurger)\n\n    return menu\n\n}\n\nfunction loadMenu(){\n    let body = document.querySelector('.body')\n    body.textContent = '';\n    body.appendChild(createMenu());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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