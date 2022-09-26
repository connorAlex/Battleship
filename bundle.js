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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n    font-family: Helvetica, Arial, sans-serif;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    align-items: center;\\n    justify-content: center;\\n    margin: 0;\\n    padding: 0;\\n    height: 100vh;\\n    width: 100vw;\\n    color: #2b2b2b;\\n}\\nbutton{\\n    background-color: inherit;\\n    border: 1px solid;\\n    border-radius: 3px;\\n    padding: 3px;\\n    padding-inline: 20px;\\n    transition: .4s;\\n}\\nbutton:hover{\\n    transition: .4s;\\n    background-color: black;\\n    border-color: black;\\n    color: whitesmoke;\\n}\\n\\n.axis {\\n    order: 5;\\n}\\n.battleship { \\n    font-size: 36px;\\n    margin: 15px;\\n\\n}\\n.title {\\n    align-self: center;\\n    margin: 5px;\\n}\\n.board{\\n    display: flex;\\n    flex-direction: column-reverse;\\n    margin: 15px;\\n    border: 1px solid black;\\n    border-radius: 3px;\\n    background-color: whitesmoke;\\n    cursor: none;\\n    transition: .5s;\\n}\\n.board:hover {\\n    transition: .5s;\\n    box-shadow: 4px 4px;\\n    \\n}\\n\\n.row {\\n    display: flex;\\n    \\n}\\n.board > div > div {\\n    height: 3vh;\\n    width: 3vh;\\n    \\n}\\n\\n.miss {\\n    background-color: lightblue;\\n}\\n\\n.hit {\\n    background-color: red !important;\\n}\\n\\n.ship {\\n    background-color: grey;\\n}\\n.hover {\\n    background-color: #2b2b2b;\\n}\\n\\n.preview {\\n    background-color: #2b2b2b;\\n}\\n\\nfooter{\\n    \\n    justify-content: center;\\n    align-items: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/display.js */ \"./src/js/display.js\");\n/* harmony import */ var _js_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var _js_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/player.js */ \"./src/js/player.js\");\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n// const gameStart = (() => {\n//     const player = Player();\n//     const computer = Player();\n//     let playerBoard = gameboard();\n//     let compBoard = gameboard();\n//     let body = document.querySelector(\"body\");\n\n//     const checkGameOver = () => {\n//         return false;\n//     };\n    \n//     displayController.setCompBoard(compBoard);\n//     body.appendChild(displayController.updateBoard(playerBoard.getGrid()));\n// })();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayController\": () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _js_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/ship.js */ \"./src/js/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n\n\n\n\nconst displayController = (() => {\n  let currentPlayer;\n  let grid;\n  let orientation = true;\n  let allPlaced = false;\n  let body = document.querySelector(\"body\");\n  let carrier = (0,_js_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(5);\n  let battleship = (0,_js_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(4);\n  let destroyer = (0,_js_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(3);\n  let sub = (0,_js_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(3);\n  let cruiser = (0,_js_ship_js__WEBPACK_IMPORTED_MODULE_0__.ship)(2);\n  let ships = [carrier, battleship, destroyer, sub, cruiser];\n\n  const setPlayer = (player) => {\n    currentPlayer = player;\n  };\n\n  const toggleOrientation = () => orientation = !orientation;\n\n  const updateBoard = (player) => {\n    grid = player.getGameboard().getGrid();\n    let boardParent = document.createElement(\"div\");\n    let titleDiv = document.createElement(\"div\");\n    let title = `${player.getName()}'s board`;\n\n    titleDiv.append(title);\n    titleDiv.classList.add(\"title\");\n    boardParent.append(titleDiv);\n    boardParent.classList.add(\"board\");\n\n    //this should be refactored\n    for (let i = 0; i < grid.length; i++) {\n      let row = document.createElement(\"div\");\n      row.classList.add(\"row\");\n\n      for (let j = 0; j < grid[i].length; j++) {\n        let cell = createCell(j, i);\n        cell.setAttribute(\"player\", player.getName());\n\n        if (player.getName() === \"player\" && grid[i][j].ship != undefined) {\n          cell.classList.add(\"ship\");\n        }\n\n        row.appendChild(cell);\n      }\n\n      boardParent.appendChild(row);\n    }\n\n    return boardParent;\n  };\n\n  const createCell = (x, y) => {\n    let cell = document.createElement(\"div\");\n    cell.classList.add(\"cell\");\n    cell.setAttribute(\"y\", y);\n    cell.setAttribute(\"x\", x);\n\n    //cell.innerHTML = `${y}${x}`;\n    hover(cell);\n\n    if (allPlaced === false) {\n      cell.addEventListener(\"mouseover\", (e) => {\n        if (!e.target.parentNode.parentNode.nextElementSibling) {\n          previewShip(cell, ships.at(-1));\n        }\n      });\n\n      cell.addEventListener(\"mouseout\", (e) => {\n        let affectedCells = document.querySelectorAll(\".preview\");\n        for (let i = 0; i < affectedCells.length; i++) {\n          affectedCells[i].classList.remove(\"preview\");\n        }\n      });\n    }\n\n    cell.addEventListener(\"click\", (e) => {\n      let isPlayerBoard = e.target.parentNode.parentNode.nextElementSibling;\n      if (allPlaced === false && isPlayerBoard === null) {\n        selectCell(cell);\n      } else if (\n        allPlaced === true &&\n        isPlayerBoard != null &&\n        !cell.classList.contains(\"hit\") &&\n        !cell.classList.contains(\"miss\")\n      ) {\n        selectCell(cell);\n      }\n    });\n\n    if (grid[y][x].hit === true) {\n      markHit(cell);\n    } else if (grid[y][x].hit === false) {\n      markMiss(cell);\n    }\n\n    return cell;\n  };\n\n  const markHit = (cell) => {\n    cell.classList.remove(\"hover\");\n    cell.classList.add(\"hit\");\n  };\n\n  const markMiss = (cell) => {\n    cell.classList.add(\"miss\");\n  };\n\n  const hover = (cell) => {\n    cell.addEventListener(\"mouseover\", (e) => {\n      if (e.target.parentNode.parentNode.nextElementSibling != null) {\n        cell.classList.toggle(\"hover\");\n      }\n    });\n    cell.addEventListener(\"mouseout\", (e) => {\n      if (e.target.parentNode.parentNode.nextElementSibling != null) {\n        cell.classList.toggle(\"hover\");\n      }\n    });\n  };\n\n  const previewShip = (cell, ship) => {\n    let originalX = parseInt(cell.getAttribute(\"x\"));\n    let originalY = parseInt(cell.getAttribute(\"y\"));\n    for (let i = 0; i < ship.getLength(); i++) {\n\n      if (orientation) {\n        let selectedCell = document.querySelector(\n          `[player= 'player'][x='${String(originalX + i)}'][y='${originalY}']`\n        );\n        if (selectedCell != undefined) selectedCell.classList.add(\"preview\");\n      } else {\n        let selectedCell = document.querySelector(\n          `[player= 'player'][x='${originalX}'][y='${String(originalY + i)}']`\n          \n        );\n        if (selectedCell != undefined) selectedCell.classList.add(\"preview\");\n      }\n      \n      \n    }\n  };\n\n  //this is doing a million things...sloppy...\n  const selectCell = (cell) => {\n    const x = parseInt(cell.getAttribute(\"x\"));\n    const y = parseInt(cell.getAttribute(\"y\"));\n    let boards = document.querySelectorAll(\".board\");\n\n    if (allPlaced === true) {\n      currentPlayer.attack(x, y);\n      currentPlayer.getEnemy().robotAttack();\n\n      if (currentPlayer.getGameboard().isAllDestroyed()) {\n        endGame(currentPlayer.getEnemy().getName());\n      } else if (currentPlayer.getEnemyBoard().isAllDestroyed()) {\n        endGame(currentPlayer.getName());\n      }\n    } else {\n      let selectedShip = ships.at(-1);\n\n      if (\n        currentPlayer.getGameboard().placeShip(selectedShip, x, y, orientation) ===\n        false\n      ) {\n        return false;\n      }\n\n      if (currentPlayer.getGameboard().getShips().length === 5) {\n        allPlaced = true;\n      }\n      ships.pop();\n    }\n\n    body.replaceChild(updateBoard(currentPlayer.getEnemy()), boards[0]);\n    body.replaceChild(updateBoard(currentPlayer), boards[1]);\n  };\n\n  const endGame = (name) => {\n    body.innerHTML = `game over, ${name} wins!`;\n  };\n\n  return {\n    updateBoard,\n    setPlayer,\n    toggleOrientation,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/display.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.js */ \"./src/js/ship.js\");\n\n\n\n\n\nconst game = (() => {\n  let player = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(\"player\");\n  let computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(\"computer\");\n  let carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__.ship)(5);\n  let battleship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__.ship)(4);\n  let destroyer = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__.ship)(3);\n  let sub = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__.ship)(3);\n  let cruiser = (0,_ship_js__WEBPACK_IMPORTED_MODULE_3__.ship)(2);\n  let ships = [carrier, battleship, destroyer, sub, cruiser];\n  let direction = false;\n  let body = document.querySelector(\"body\");\n  let axisBtn = document.querySelector(\".axis\");\n\n  player.setEnemy(computer);\n  computer.setEnemy(player);\n\n  axisBtn.addEventListener(\"click\", () => _display_js__WEBPACK_IMPORTED_MODULE_2__.displayController.toggleOrientation());\n \n\n  while (computer.getGameboard().getShips().length < 5) {\n    let x = Math.floor(Math.random() * 10);\n    let y = Math.floor(Math.random() * 10);\n    let ship = ships.at(-1);\n\n    if (\n      computer\n        .getGameboard()\n        .placeShip(ship, parseInt(x), parseInt(y), direction) === false\n    ) {\n      continue;\n    }\n\n    ships.pop();\n    direction = !direction;\n  }\n  console.log(computer.getGameboard().getShips());\n  _display_js__WEBPACK_IMPORTED_MODULE_2__.displayController.setPlayer(player);\n  body.appendChild(_display_js__WEBPACK_IMPORTED_MODULE_2__.displayController.updateBoard(computer));\n  body.appendChild(_display_js__WEBPACK_IMPORTED_MODULE_2__.displayController.updateBoard(player));\n})();\n\n\n//# sourceURL=webpack://battleship/./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\nconst gameboard = () => {\n  let grid = [];\n  let missedShots = [];\n  let shipCatalogue = [];\n\n  const createGrid = () => {\n    for (let i = 0; i < 10; i++) {\n      grid.push([]);\n      for (let j = 0; j < 10; j++) {\n        grid[i][j] = { ship: undefined, shipIndex: undefined, hit: null };\n      }\n    }\n    return grid;\n  };\n  let coordinates = [];\n  grid = createGrid();\n  const getGrid = () => grid;\n  const getMissedShots = () => missedShots;\n  const getShips = () => shipCatalogue;\n\n  const validateCell = (x, y) => {\n    if (grid[y] === undefined) return false;\n    if (grid[y][x] === undefined) return false;\n\n    return true;\n  };\n\n  const placeShip = (myShip, x, y, isHorizontal) => {\n    if (grid[y][x].ship != undefined || !validateCell(x, y)) {\n      return false;\n    }\n\n    for (let i = 0; i < myShip.getLength(); i++) {\n      // if (!validateCell(x + i,y) || !validateCell(x, y + i)) return false;\n      if (isHorizontal) {\n        if (!validateCell(x + i, y)) return false;\n        if (grid[y][x + i].ship != undefined) return false;\n      } else {\n        if (!validateCell(x, y + i)) return false;\n        if (grid[y + i] === undefined) return false;\n        if (grid[y + i][x].ship != undefined) return false;\n      }\n    }\n\n    shipCatalogue.push(myShip);\n\n    for (let i = 0; i < myShip.getLength(); i++) {\n      if (isHorizontal === true) {\n        coordinates.push([x + i, y]);\n        grid[y][x + i].ship = myShip;\n        grid[y][x + i].shipIndex = i;\n      } else {\n        grid[y + i][x].ship = myShip;\n        grid[y + i][x].shipIndex = i;\n        coordinates.push([x, y + i]);\n      }\n    }\n  };\n\n  const receiveAttack = (x, y) => {\n    let cell = grid[y][x];\n\n    if (cell.ship === undefined) {\n      missedShots.push([x, y]);\n      cell.hit = false;\n      return false;\n    } else {\n      cell.ship.hit(cell.shipIndex);\n      cell.hit = true;\n      return true;\n    }\n  };\n\n  const isAllDestroyed = () => {\n    for (let i = 0; i < shipCatalogue.length; i++) {\n      if (shipCatalogue[i].isSunk() === false) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  return {\n    createGrid,\n    placeShip,\n    getGrid,\n    receiveAttack,\n    getMissedShots,\n    isAllDestroyed,\n    getShips,\n    validateCell,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _js_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/js/ship.js\");\n\n\n\nconst Player = (name) => {\n  let board = (0,_js_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();\n  let enemy;\n  let moves = [];\n  let history = [];\n\n  const attack = (x, y) => {\n    x = parseInt(x);\n    y = parseInt(y);\n\n    if (history.includes([x, y]) === false) {\n      return getEnemyBoard().receiveAttack(x, y);\n    }\n  };\n\n  const setEnemy = (player) => {\n    enemy = player;\n  };\n\n  const hasNotHitBefore = (arr) => {\n    let x = arr[0];\n    let y = arr[1];\n\n    if (\n      !moves.find(function ([a, b]) {\n        return a === x && b === y;\n      })\n    ) {\n      return true;\n    }\n    moves.pop(x, y);\n    return false;\n  };\n\n  const getEnemy = () => enemy;\n\n  const getEnemyBoard = () => enemy.getGameboard();\n\n  const getGameboard = () => board;\n\n  const getHistory = () => history;\n\n  const getName = () => name;\n\n  const robotAttack = () => {\n    let coordinates = getRandomCoordinates();\n    if (hasNotHitBefore(coordinates)) {\n      attack(coordinates[0], coordinates[1]);\n    }\n  };\n\n  //append all possible combinations of [x,y] to an array\n  const createMoves = () => {\n    while (moves.length != 100) {\n      let x = Math.floor(Math.random() * 10);\n      let y = Math.floor(Math.random() * 10);\n\n      if (\n        !moves.find(function ([a, b]) {\n          return a === x && b === y;\n        })\n      ) {\n        moves.push([x, y]);\n      }\n    }\n  };\n  createMoves();\n\n  const getRandomCoordinates = () => {\n    let num = moves.pop();\n    return num;\n  };\n\n  return {\n    attack,\n    robotAttack,\n    getHistory,\n    setEnemy,\n    getGameboard,\n    getEnemyBoard,\n    getEnemy,\n    getName,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/player.js?");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ship\": () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (length) => {\n\n    const positions = new Array(length).fill(0);\n\n    const getAllPositions = () => positions;\n\n    const getPosition = (i) => positions[i];\n    \n    const getLength = () => length;\n\n    const hit = (num) => {\n        positions[num] = 1;\n    };\n    \n\n    const isSunk = () => {\n        for (let i = 0; i < positions.length; i++) {\n            if (positions[i] === 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    return {hit,getLength, isSunk, getPosition, getAllPositions};\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/js/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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