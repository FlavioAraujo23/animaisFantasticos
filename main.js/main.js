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

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // adiciona os eventos ao accorion\n\n  addAcordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n  // iniciar função\n\n  init() {\n    if (this.accordionList.length) {\n      // ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAcordionEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/activeTab.js":
/*!*********************************!*\
  !*** ./js/modules/activeTab.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n  // ativa a tab de acordo com o index da mesma\n\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    }); // funcao que ativa a class em somente um item\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n  // adiciona os eventos as tabs\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/activeTab.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100)\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => { \r\n        start = start + incremento\r\n        numero.innerText = start\r\n        if(start > total) {\r\n          numero.innerText = total\r\n          clearInterval(timer)\r\n        }\r\n      }, 20 * Math.random())\r\n    })\r\n  }\r\n  function handleMutation(mutation) {\r\n    if(mutation[0].target.classList.contains('ativo')) {\r\n      observer.disconnect(); // quando começar a animaçao pare de observar\r\n      animaNumeros()\r\n    }\r\n\r\n  }\r\n  const observerTarget = document.querySelector('.numeros')\r\n  const observer = new MutationObserver(handleMutation);\r\n\r\n  observer.observe(observerTarget, {attributes: true});\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/animais-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\n\nfunction initFetchAnimais() {\n  async function fetchAnimais() {\n    try{\n      const animaisResponse = await fetch('http://127.0.0.1:5500/js/api/animais.json');\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n\n      animaisJSON.forEach(animal => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);  // irá adionar no filho a div, ou seja, um atras do outro\n      });\n      (0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }catch (erro) {\n      console.log(erro)\n    }\n  }\n\n  function createAnimal(animal){\n    const div = document.createElement('div');\n    div.classList.add('numero-animal')\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    console.log(div)\n    return div;\n    \n  }\n\n  fetchAnimais()\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/animais-fetch.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n  dropdownMenus.forEach(menu => {\r\n    ['touchstart', 'click'].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add('active');\r\n    outsideClick(this, ['touchstart', 'click'], () => {\r\n      this.classList.remove('active');\r\n    });\r\n  };\r\n  function outsideClick(element, events, callback) {\r\n    const html = document.documentElement;\r\n    const outside = 'data-outside';\r\n  \r\n    if(!element.hasAttribute(outside)) {\r\n      events.forEach(userEvent => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      element.setAttribute(outside, '');\r\n    }\r\n    function handleOutsideClick(event) {\r\n      if(!element.contains(event.target)) {\r\n        element.removeAttribute(outside);\r\n        events.forEach(userEvent => {\r\n          html.removeEventListener(userEvent, handleOutsideClick);\r\n        })\r\n        callback();\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoinFetch)\n/* harmony export */ });\nfunction initBitcoinFetch() {\r\n  fetch('https://blockchain.info/ticker').then(response => response.json())\r\n  .then(bitcoin => {\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(6)   // o valor de 100 em bitcoin\r\n  }).catch(erro => {\r\n    console.log(Error(err))\r\n  })\r\n}\r\n\r\n// https://blockchain.info/ticker\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // ao passar apenas o number em uma array que contem numeros em string, ele retorna uma nova array somente com numeros\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // se for diferente de -1 quer dizer que e verdadeiro\r\n  \r\n  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\r\n\r\n  if(semanaAberto && horarioAberto){\r\n    funcionamento.classList.add('aberto')\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside.js */ \"./js/modules/outside.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n  const menuList = document.querySelector('[data-menu=\"list\"]')\r\n  const events = ['click', 'touchstart']\r\n  if(menuButton) {\r\n  function openMenu(event) {\r\n    menuList.classList.add('active');\r\n    menuButton.classList.add('active');\r\n    (0,_outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    })\r\n  }\r\n  events.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu))\r\n  }\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n  \r\n  if(botaoAbrir && botaoFechar && containerModal) {\r\n    \r\n    function toggleModal(event) {\r\n      event.preventDefault();\r\n      containerModal.classList.toggle('ativo');\r\n    }\r\n    function cliqueForaModal(event) {\r\n      if(event.target === this) {\r\n        toggleModal(event);\r\n      }\r\n    }\r\n  \r\n    botaoAbrir.addEventListener('click', toggleModal);\r\n    botaoFechar.addEventListener('click', toggleModal);\r\n    containerModal.addEventListener('click', cliqueForaModal);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside.js":
/*!*******************************!*\
  !*** ./js/modules/outside.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if(!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick)})\r\n    })\r\n    element.setAttribute(outside, '');\r\n  }\r\n  function handleOutsideClick(event) {\r\n    if(!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outside.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll(){\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  if(sections.length) {\r\n  const windowMetade = window.innerHeight * 0.5\r\n\r\n  function animaScroll () {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = (sectionTop - windowMetade) < 0;\r\n      if(isSectionVisible)\r\n        section.classList.add('ativo');\r\n      else if(section.classList.contains('ativo')) {\r\n        section.classList.remove('ativo')\r\n      }\r\n    })\r\n  }\r\n\r\n  animaScroll()\r\n\r\n  window.addEventListener('scroll', animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll('[data-tooltip]');\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener('mouseover', onMouseOver)\r\n  })\r\n  \r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarTooltipBox(this);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox; \r\n    this.addEventListener('mousemove', onMouseMove)\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox; // passando o tooltipbox para o objeto onmouseleave\r\n    onMouseLeave.element = this;\r\n    this.addEventListener('mouseleave', onMouseLeave)\r\n  }\r\n\r\n  // objeto criado para passar uma funcao fora do escopo pode se perceber que a variavel tooltip box e passado para o objeto tambem, para isso funcionar e obrigatorio ter o metodo handleEvent(), caso seja outro nome nao irar funcionar\r\n  const onMouseLeave =  {\r\n    handleEvent() {\r\n      this.tooltipBox.remove()\r\n      this.element.removeEventListener('mouseleave', onMouseLeave) // usado para tirar o event do inspecionar, precisa passar o memso event e obj usado na criacao do evento\r\n      this.element.removeEventListener('mousemove', onMouseMove)\r\n    }\r\n  }\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = event.pageY + 20 + 'px' // o valor 20 e usado para a caixa ficar um pouco abaixo do mouse   \r\n      // o valor que retorna de event.page é um numero entao e necesario somar com o valor de px para que funcione\r\n      this.tooltipBox.style.left = event.pageX + 20 + 'px'\r\n    }\r\n  }\r\n\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox)\r\n    return tooltipBox;\r\n  }\r\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_activeTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/activeTab.js */ \"./js/modules/activeTab.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/animais-fetch.js */ \"./js/modules/animais-fetch.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabnav = new _modules_activeTab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabnav.init();\n\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;