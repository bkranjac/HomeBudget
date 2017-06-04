/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!************************************************************!*\
  !*** ./app/assets/frontend/components/BudgetLocations.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BudgetLocation__ = __webpack_require__(/*! ./BudgetLocation */ 1);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nclass BudgetLocations extends React.Component {\n  render() {\n    let locations = this.props.locations.map(location => React.createElement(__WEBPACK_IMPORTED_MODULE_0__BudgetLocation__[\"a\" /* default */], _extends({ key: location.id }, location)));\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"ul\",\n        { className: \"collection\" },\n        locations\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = BudgetLocations;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb25zLmpzeD81ODU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWRnZXRMb2NhdGlvbiBmcm9tIFwiLi9CdWRnZXRMb2NhdGlvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1ZGdldExvY2F0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbG9jYXRpb25zID0gdGhpcy5wcm9wcy5sb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IDxCdWRnZXRMb2NhdGlvbiBrZXk9e2xvY2F0aW9uLmlkfXsuLi5sb2NhdGlvbn0gLz4pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgIHtsb2NhdGlvbnN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb25zLmpzeCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBVkE7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* exports provided: default */
/* exports used: default */
/*!***********************************************************!*\
  !*** ./app/assets/frontend/components/BudgetLocation.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class BudgetLocation extends React.Component {\n  render() {\n    return React.createElement(\n      \"li\",\n      { className: \"collection-item avatar\" },\n      React.createElement(\n        \"i\",\n        { className: \"material-icons circle\" },\n        \"person_pin\"\n      ),\n      React.createElement(\n        \"span\",\n        { className: \"title\" },\n        this.props.author\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        this.props.body\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = BudgetLocation;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb24uanN4PzI3ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVkZ2V0TG9jYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBjaXJjbGVcIj5wZXJzb25fcGluPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuYXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmJvZHl9PC9wPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb24uanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQVZBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BudgetLocationBox__ = __webpack_require__(/*! ./components/BudgetLocationBox */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BudgetLocations__ = __webpack_require__(/*! ./components/BudgetLocations */ 0);\n\n\n\nlet mockBudgetLocations = [{ id: 1, author: 'Branka', body: 'Trader Joe\\'s' }];\n\nclass Main extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { locationsList: mockBudgetLocations };\n  }\n  addLocation(locationToAdd) {\n    let newLocationList = this.state.locationsList;\n    newLocationList.unshift({ id: Date.now(), author: 'BK', body: locationToAdd });\n    this.setState({ locationsList: newLocationList });\n  }\n  render() {\n    return React.createElement(\n      'div',\n      { className: 'container' },\n      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_BudgetLocationBox__[\"a\" /* default */], { saveLocation: this.addLocation.bind(this) }),\n      React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_BudgetLocations__[\"a\" /* default */], { locations: this.state.locationsList })\n    );\n  }\n}\n\nlet documentReady = () => {\n  ReactDOM.render(React.createElement(Main, null), document.getElementById('reactDiv'));\n};\n\n$(documentReady);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL21haW4uanN4PzUxYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1ZGdldExvY2F0aW9uQm94IGZyb20gXCIuL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb25Cb3hcIlxuaW1wb3J0IEJ1ZGdldExvY2F0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb25zJ1xuXG5sZXQgbW9ja0J1ZGdldExvY2F0aW9ucyA9ICBbXG4gIHsgaWQ6IDEsIGF1dGhvcjonQnJhbmthJywgYm9keTonVHJhZGVyIEpvZVxcJ3MnfVxuXTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGxvY2F0aW9uc0xpc3QgOiBtb2NrQnVkZ2V0TG9jYXRpb25zIH1cbiAgfVxuICBhZGRMb2NhdGlvbihsb2NhdGlvblRvQWRkKSB7XG4gICAgbGV0IG5ld0xvY2F0aW9uTGlzdCA9IHRoaXMuc3RhdGUubG9jYXRpb25zTGlzdDtcbiAgICBuZXdMb2NhdGlvbkxpc3QudW5zaGlmdCh7IGlkOiBEYXRlLm5vdygpLCBhdXRob3I6ICdCSycsIGJvZHk6IGxvY2F0aW9uVG9BZGR9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2NhdGlvbnNMaXN0IDogbmV3TG9jYXRpb25MaXN0IH0pO1xuICB9XG5yZW5kZXIgKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8QnVkZ2V0TG9jYXRpb25Cb3ggc2F2ZUxvY2F0aW9uPXt0aGlzLmFkZExvY2F0aW9uLmJpbmQodGhpcyl9Lz5cbiAgICAgIDxCdWRnZXRMb2NhdGlvbnMgbG9jYXRpb25zPXt0aGlzLnN0YXRlLmxvY2F0aW9uc0xpc3R9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbiB9XG59XG5cbmxldCBkb2N1bWVudFJlYWR5ICA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxNYWluLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0RGl2JylcbiAgKTtcbn07XG5cbiQoZG9jdW1lbnRSZWFkeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9mcm9udGVuZC9tYWluLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* exports provided: default */
/* exports used: default */
/*!**************************************************************!*\
  !*** ./app/assets/frontend/components/BudgetLocationBox.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("\nclass BudgetLocationsBox extends React.Component {\n  saveLocation(event) {\n    event.preventDefault();\n    this.props.saveLocation(this.refs.locationTextArea.value);\n    this.refs.locationTextArea.value = '';\n  }\n  render() {\n    return React.createElement(\n      \"div\",\n      { className: \"row\" },\n      React.createElement(\n        \"form\",\n        { onSubmit: this.saveLocation.bind(this) },\n        React.createElement(\n          \"div\",\n          { className: \"input-field\" },\n          React.createElement(\"textarea\", { ref: \"locationTextArea\", className: \"materialize-textarea\" }),\n          React.createElement(\n            \"label\",\n            null,\n            \"It occured where?\"\n          ),\n          React.createElement(\n            \"button\",\n            { type: \"submit\", className: \"btn right\" },\n            \"Add Location\"\n          )\n        )\n      )\n    );\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = BudgetLocationsBox;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2Zyb250ZW5kL2NvbXBvbmVudHMvQnVkZ2V0TG9jYXRpb25Cb3guanN4PzFjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWRnZXRMb2NhdGlvbnNCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuIHNhdmVMb2NhdGlvbihldmVudCkge1xuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIHRoaXMucHJvcHMuc2F2ZUxvY2F0aW9uKHRoaXMucmVmcy5sb2NhdGlvblRleHRBcmVhLnZhbHVlKTtcbiAgIHRoaXMucmVmcy5sb2NhdGlvblRleHRBcmVhLnZhbHVlID0gJyc7XG5cbiB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNhdmVMb2NhdGlvbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZWY9XCJsb2NhdGlvblRleHRBcmVhXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5JdCBvY2N1cmVkIHdoZXJlPzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHJpZ2h0XCI+QWRkIExvY2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hc3NldHMvZnJvbnRlbmQvY29tcG9uZW50cy9CdWRnZXRMb2NhdGlvbkJveC5qc3giXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBREE7QUFVQTtBQW5CQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);