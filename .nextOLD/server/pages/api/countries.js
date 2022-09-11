"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/countries";
exports.ids = ["pages/api/countries"];
exports.modules = {

/***/ "(api)/./pages/api/configs/index.js":
/*!************************************!*\
  !*** ./pages/api/configs/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    login: process.env.BASE_URL + `restapi/login?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getCart: (cartId)=>process.env.BASE_URL + `restapi/getCart/${cartId}?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getSlider: process.env.BASE_URL + `restapi/getSlider?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    productList: (pageNumber, limit, idCategorySearch, term)=>process.env.BASE_URL + `restapi/products?output_format=JSON&ws_key=${process.env.WS_KEY}&limit=${pageNumber * limit},${limit}&sort=id_ASC&category_id=${idCategorySearch}&term=${term}`,\n    getCategories: process.env.BASE_URL + `restapi/getCategories?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getAddresses: (customerId)=>process.env.BASE_URL + `restapi/getAddresses?output_format=JSON&ws_key=${process.env.WS_KEY}&display=full&filter[id_customer]=${customerId}`,\n    addNewAddress: process.env.BASE_URL + `restapi/addNewAddress?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    deleteAddress: (idAddress)=>process.env.BASE_URL + `restapi/deleteAddress/${idAddress}?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getCarriers: process.env.BASE_URL + `restapi/getCarriers?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getPaymentMethods: process.env.BASE_URL + `restapi/getPaymentMethods?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    addToCart: process.env.BASE_URL + `restapi/addToCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    deleteFromCart: process.env.BASE_URL + `restapi/deleteFromCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    getCountries: process.env.BASE_URL + `restapi/getCountries?output_format=JSON&ws_key=${process.env.WS_KEY}`,\n    register: process.env.BASE_URL + `restapi/register?output_format=JSON&ws_key=${process.env.WS_KEY}`\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLDJDQUEyQyxFQUFFRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7Q0FLckUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnVzYjJiLy4vcGFnZXMvYXBpL2NvbmZpZ3MvaW5kZXguanM/YzQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGxvZ2luOlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9sb2dpbj9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfWAsXG5cbiAgZ2V0Q2FydDogKGNhcnRJZCkgPT5cbiAgICBwcm9jZXNzLmVudi5CQVNFX1VSTCArXG4gICAgYHJlc3RhcGkvZ2V0Q2FydC8ke2NhcnRJZH0/b3V0cHV0X2Zvcm1hdD1KU09OJndzX2tleT0ke3Byb2Nlc3MuZW52LldTX0tFWX1gLFxuXG4gIGdldFNsaWRlcjpcbiAgICBwcm9jZXNzLmVudi5CQVNFX1VSTCArXG4gICAgYHJlc3RhcGkvZ2V0U2xpZGVyP291dHB1dF9mb3JtYXQ9SlNPTiZ3c19rZXk9JHtwcm9jZXNzLmVudi5XU19LRVl9YCxcblxuICBwcm9kdWN0TGlzdDogKHBhZ2VOdW1iZXIsIGxpbWl0LCBpZENhdGVnb3J5U2VhcmNoLCB0ZXJtKSA9PlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9wcm9kdWN0cz9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfSZsaW1pdD0ke1xuICAgICAgcGFnZU51bWJlciAqIGxpbWl0XG4gICAgfSwke2xpbWl0fSZzb3J0PWlkX0FTQyZjYXRlZ29yeV9pZD0ke2lkQ2F0ZWdvcnlTZWFyY2h9JnRlcm09JHt0ZXJtfWAsXG5cbiAgZ2V0Q2F0ZWdvcmllczpcbiAgICBwcm9jZXNzLmVudi5CQVNFX1VSTCArXG4gICAgYHJlc3RhcGkvZ2V0Q2F0ZWdvcmllcz9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfWAsXG5cbiAgZ2V0QWRkcmVzc2VzOiAoY3VzdG9tZXJJZCkgPT5cbiAgICBwcm9jZXNzLmVudi5CQVNFX1VSTCArXG4gICAgYHJlc3RhcGkvZ2V0QWRkcmVzc2VzP291dHB1dF9mb3JtYXQ9SlNPTiZ3c19rZXk9JHtwcm9jZXNzLmVudi5XU19LRVl9JmRpc3BsYXk9ZnVsbCZmaWx0ZXJbaWRfY3VzdG9tZXJdPSR7Y3VzdG9tZXJJZH1gLFxuXG4gIGFkZE5ld0FkZHJlc3M6XG4gICAgcHJvY2Vzcy5lbnYuQkFTRV9VUkwgK1xuICAgIGByZXN0YXBpL2FkZE5ld0FkZHJlc3M/b3V0cHV0X2Zvcm1hdD1KU09OJndzX2tleT0ke3Byb2Nlc3MuZW52LldTX0tFWX1gLFxuXG4gIGRlbGV0ZUFkZHJlc3M6IChpZEFkZHJlc3MpID0+XG4gICAgcHJvY2Vzcy5lbnYuQkFTRV9VUkwgK1xuICAgIGByZXN0YXBpL2RlbGV0ZUFkZHJlc3MvJHtpZEFkZHJlc3N9P291dHB1dF9mb3JtYXQ9SlNPTiZ3c19rZXk9JHtwcm9jZXNzLmVudi5XU19LRVl9YCxcblxuICBnZXRDYXJyaWVyczpcbiAgICBwcm9jZXNzLmVudi5CQVNFX1VSTCArXG4gICAgYHJlc3RhcGkvZ2V0Q2FycmllcnM/b3V0cHV0X2Zvcm1hdD1KU09OJndzX2tleT0ke3Byb2Nlc3MuZW52LldTX0tFWX1gLFxuXG4gIGdldFBheW1lbnRNZXRob2RzOlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9nZXRQYXltZW50TWV0aG9kcz9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfWAsXG5cbiAgYWRkVG9DYXJ0OlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9hZGRUb0NhcnQ/b3V0cHV0X2Zvcm1hdD1KU09OJndzX2tleT0ke3Byb2Nlc3MuZW52LldTX0tFWX1gLFxuXG4gIGRlbGV0ZUZyb21DYXJ0OlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9kZWxldGVGcm9tQ2FydD9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfWAsXG5cbiAgZ2V0Q291bnRyaWVzOlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9nZXRDb3VudHJpZXM/b3V0cHV0X2Zvcm1hdD1KU09OJndzX2tleT0ke3Byb2Nlc3MuZW52LldTX0tFWX1gLFxuXG4gIHJlZ2lzdGVyOlxuICAgIHByb2Nlc3MuZW52LkJBU0VfVVJMICtcbiAgICBgcmVzdGFwaS9yZWdpc3Rlcj9vdXRwdXRfZm9ybWF0PUpTT04md3Nfa2V5PSR7cHJvY2Vzcy5lbnYuV1NfS0VZfWAsXG5cbiAgLy8gT0xEIFVSTFNcblxuICAvLyAgIC8vIGxvZ291dDogYmFzZVVybCArIFwibG9nb3V0XCIsXG59O1xuIl0sIm5hbWVzIjpbImxvZ2luIiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiV1NfS0VZIiwiZ2V0Q2FydCIsImNhcnRJZCIsImdldFNsaWRlciIsInByb2R1Y3RMaXN0IiwicGFnZU51bWJlciIsImxpbWl0IiwiaWRDYXRlZ29yeVNlYXJjaCIsInRlcm0iLCJnZXRDYXRlZ29yaWVzIiwiZ2V0QWRkcmVzc2VzIiwiY3VzdG9tZXJJZCIsImFkZE5ld0FkZHJlc3MiLCJkZWxldGVBZGRyZXNzIiwiaWRBZGRyZXNzIiwiZ2V0Q2FycmllcnMiLCJnZXRQYXltZW50TWV0aG9kcyIsImFkZFRvQ2FydCIsImRlbGV0ZUZyb21DYXJ0IiwiZ2V0Q291bnRyaWVzIiwicmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/configs/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/countries.js":
/*!********************************!*\
  !*** ./pages/api/countries.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"(api)/./pages/api/configs/index.js\");\n\nasync function handler(req, res) {\n    var requestOptions = {\n        method: \"GET\"\n    };\n    const result = await fetch(_configs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCountries, requestOptions).then((response)=>response?.json()).then((data)=>data).catch((error)=>{\n        return {\n            success: false,\n            message: \"ERROR!\"\n        };\n    });\n    res.status(200).json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY291bnRyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBRWQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxjQUFjLEdBQUc7UUFDbkJDLE1BQU0sRUFBRSxLQUFLO0tBQ2Q7SUFFRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDUCw2REFBaUIsRUFBRUksY0FBYyxDQUFDLENBQzFESyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLQSxRQUFRLEVBQUVDLElBQUksRUFBRSxDQUFDLENBQ3BDRixJQUFJLENBQUMsQ0FBQ0csSUFBSSxHQUFLQSxJQUFJLENBQUMsQ0FDcEJDLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUs7UUFDaEIsT0FBTztZQUNMQyxPQUFPLEVBQUUsS0FBSztZQUNkQyxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO0tBQ0gsQ0FBQztJQUVKYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ04sSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbnVzYjJiLy4vcGFnZXMvYXBpL2NvdW50cmllcy5qcz9hN2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcmxzIGZyb20gXCIuL2NvbmZpZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFVybHMuZ2V0Q291bnRyaWVzLCByZXF1ZXN0T3B0aW9ucylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlPy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiRVJST1IhXCIsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG59XG4iXSwibmFtZXMiOlsiVXJscyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsInJlc3VsdCIsImZldGNoIiwiZ2V0Q291bnRyaWVzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/countries.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/countries.js"));
module.exports = __webpack_exports__;

})();