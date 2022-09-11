"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./RestHelper/useAuth.js":
/*!*******************************!*\
  !*** ./RestHelper/useAuth.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/configs */ \"./configs/configs.js\");\n/* harmony import */ var _configs_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/localStorage */ \"./configs/localStorage/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// Hook (use-auth.js)\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\n// Provider component that wraps your app and makes auth object ...\n// ... available to any child component that calls useAuth().\nfunction AuthProvider(param) {\n    var children = param.children;\n    _s();\n    var auth = useAuthProvider();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bigmac/Desktop/minusb2b/RestHelper/useAuth.js\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n_s(AuthProvider, \"U5QEqN6sgp/9Kus+ung4cQwYnRk=\", false, function() {\n    return [\n        useAuthProvider\n    ];\n});\n_c = AuthProvider;\n// Hook for child components to get the auth object ...\n// ... and re-render when it changes.\nvar useAuth = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// Provider hook that creates auth object and handles state\nfunction useAuthProvider() {\n    _s2();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), cart = ref1[0], setCart = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), offers = ref2[0], setOffers = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openCart = ref3[0], setOpenCart = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (_configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isConnected()) {\n            setUser(_configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"local_data\").customer);\n        } else {\n            router.push(\"/connexion\");\n        }\n    }, []);\n    var login = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, requestOptions;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        if (!(email != \"\" && password != \"\")) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                email: email,\n                                password: password\n                            })\n                        };\n                        _ctx.next = 5;\n                        return fetch(\"/api/login\", requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(response) {\n                            var ref, ref1;\n                            if ((response === null || response === void 0 ? void 0 : (ref = response.results) === null || ref === void 0 ? void 0 : ref.succes) && (response === null || response === void 0 ? void 0 : (ref1 = response.results) === null || ref1 === void 0 ? void 0 : ref1.code) === 200) {\n                                var ref2, ref3, ref4;\n                                setUser(response === null || response === void 0 ? void 0 : (ref2 = response.results) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.customer);\n                                _configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].add(\"local_data\", response === null || response === void 0 ? void 0 : (ref4 = response.results) === null || ref4 === void 0 ? void 0 : ref4.data);\n                                router.push(\"/products\");\n                            } else {\n                                var ref5;\n                                console.log(\"Error: \" + (response === null || response === void 0 ? void 0 : (ref5 = response.results) === null || ref5 === void 0 ? void 0 : ref5.message));\n                            }\n                            return response === null || response === void 0 ? void 0 : response.results;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 5:\n                        return _ctx.abrupt(\"return\", _ctx.sent);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function login(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getCart = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cartId) {\n            var requestOptions, result;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                cartId: cartId\n                            })\n                        };\n                        _ctx.next = 3;\n                        return fetch(\"/api/cart/get\", requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(data) {\n                            return data;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 3:\n                        result = _ctx.sent;\n                        if (!((result === null || result === void 0 ? void 0 : result.code) == 200 && (result === null || result === void 0 ? void 0 : result.success) && (result === null || result === void 0 ? void 0 : result.cart))) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        setCart(result === null || result === void 0 ? void 0 : result.cart);\n                        setOffers(result === null || result === void 0 ? void 0 : result.offers);\n                        return _ctx.abrupt(\"return\", true);\n                    case 8:\n                        return _ctx.abrupt(\"return\", false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getCart(cartId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var removeProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(idProduct) {\n            var requestOptions;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/x-www-form-urlencoded\"\n                            },\n                            body: JSON.stringify({\n                                cartId: user === null || user === void 0 ? void 0 : user.id_cart,\n                                productId: idProduct\n                            })\n                        };\n                        _ctx.next = 3;\n                        return fetch(_configs_configs__WEBPACK_IMPORTED_MODULE_3__.Urls.deleteFromCart, requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(result) {\n                            if ((result === null || result === void 0 ? void 0 : result.code) == 200 && (result === null || result === void 0 ? void 0 : result.succes) && (result === null || result === void 0 ? void 0 : result.cart)) {\n                                setCart(result === null || result === void 0 ? void 0 : result.cart);\n                                return true;\n                            }\n                            return false;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 3:\n                        return _ctx.abrupt(\"return\", _ctx.sent);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function removeProduct(idProduct) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var register = function(param) {\n        var email = param.email, password = param.password;\n        return {};\n    };\n    var logout = function() {\n        return {};\n    };\n    return {\n        user: user,\n        getCart: getCart,\n        setCart: setCart,\n        removeProduct: removeProduct,\n        login: login,\n        register: register,\n        logout: logout,\n        cart: cart,\n        offers: offers,\n        openCart: openCart,\n        setOpenCart: setOpenCart\n    };\n}\n_s2(useAuthProvider, \"jLe5sbfS2shxh8OJiak9/M0lqQk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0pvQyxPQUFPLEVBQVBBLE9BQU87UUFDUGpDLE9BQU8sRUFBUEEsT0FBTztRQUNQcUMsYUFBYSxFQUFiQSxhQUFhO1FBQ2I1QixLQUFLLEVBQUxBLEtBQUs7UUFDTGlDLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxNQUFNLEVBQU5BLE1BQU07UUFDTjVDLElBQUksRUFBSkEsSUFBSTtRQUNKRSxNQUFNLEVBQU5BLE1BQU07UUFDTkUsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFdBQVcsRUFBWEEsV0FBVztLQUNaLENBQUM7Q0FDSDtJQXhIUVosZUFBZTs7UUFDUEwsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVzdEhlbHBlci91c2VBdXRoLmpzP2NhYjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSG9vayAodXNlLWF1dGguanMpXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXJscywgc2FsdCB9IGZyb20gXCIuLi9jb25maWdzL2NvbmZpZ3NcIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2VYIGZyb20gXCIuLi9jb25maWdzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgeW91ciBhcHAgYW5kIG1ha2VzIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGhQcm92aWRlcigpO1xuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG4vLyBIb29rIGZvciBjaGlsZCBjb21wb25lbnRzIHRvIGdldCB0aGUgYXV0aCBvYmplY3QgLi4uXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbi8vIFByb3ZpZGVyIGhvb2sgdGhhdCBjcmVhdGVzIGF1dGggb2JqZWN0IGFuZCBoYW5kbGVzIHN0YXRlXG5mdW5jdGlvbiB1c2VBdXRoUHJvdmlkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW29mZmVycywgc2V0T2ZmZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbb3BlbkNhcnQsIHNldE9wZW5DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VYLmlzQ29ubmVjdGVkKCkpIHtcbiAgICAgIHNldFVzZXIobG9jYWxTdG9yYWdlWC5nZXQoXCJsb2NhbF9kYXRhXCIpLmN1c3RvbWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvY29ubmV4aW9uXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBpZiAoZW1haWwgIT0gXCJcIiAmJiBwYXNzd29yZCAhPSBcIlwiKSB7XG4gICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSksXG4gICAgICB9O1xuXG4gICAgICAvLyBjb25zdCBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuXG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlPy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZT8ucmVzdWx0cz8uc3VjY2VzICYmIHJlc3BvbnNlPy5yZXN1bHRzPy5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2U/LnJlc3VsdHM/LmRhdGE/LmN1c3RvbWVyKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlWC5hZGQoXCJsb2NhbF9kYXRhXCIsIHJlc3BvbnNlPy5yZXN1bHRzPy5kYXRhKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIHJlc3BvbnNlPy5yZXN1bHRzPy5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlPy5yZXN1bHRzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldENhcnQgPSBhc3luYyAoY2FydElkKSA9PiB7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjYXJ0SWQ6IGNhcnRJZCB9KSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NhcnQvZ2V0XCIsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZT8uanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcikpO1xuXG4gICAgaWYgKHJlc3VsdD8uY29kZSA9PSAyMDAgJiYgcmVzdWx0Py5zdWNjZXNzICYmIHJlc3VsdD8uY2FydCkge1xuICAgICAgc2V0Q2FydChyZXN1bHQ/LmNhcnQpO1xuICAgICAgc2V0T2ZmZXJzKHJlc3VsdD8ub2ZmZXJzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IGFzeW5jIChpZFByb2R1Y3QpID0+IHtcbiAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2FydElkOiB1c2VyPy5pZF9jYXJ0LFxuICAgICAgICBwcm9kdWN0SWQ6IGlkUHJvZHVjdCxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goVXJscy5kZWxldGVGcm9tQ2FydCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlPy5qc29uKCkpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQ/LmNvZGUgPT0gMjAwICYmIHJlc3VsdD8uc3VjY2VzICYmIHJlc3VsdD8uY2FydCkge1xuICAgICAgICAgIHNldENhcnQocmVzdWx0Py5jYXJ0KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcikpO1xuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IHtcbiAgICByZXR1cm4ge307XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7fTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHVzZXIsXG4gICAgZ2V0Q2FydCxcbiAgICBzZXRDYXJ0LFxuICAgIHJlbW92ZVByb2R1Y3QsXG4gICAgbG9naW4sXG4gICAgcmVnaXN0ZXIsXG4gICAgbG9nb3V0LFxuICAgIGNhcnQsXG4gICAgb2ZmZXJzLFxuICAgIG9wZW5DYXJ0LFxuICAgIHNldE9wZW5DYXJ0LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVybHMiLCJzYWx0IiwibG9jYWxTdG9yYWdlWCIsInVzZVJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlQXV0aFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImNhcnQiLCJzZXRDYXJ0Iiwib2ZmZXJzIiwic2V0T2ZmZXJzIiwib3BlbkNhcnQiLCJzZXRPcGVuQ2FydCIsImlzQ29ubmVjdGVkIiwiZ2V0IiwiY3VzdG9tZXIiLCJwdXNoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRzIiwic3VjY2VzIiwiY29kZSIsImRhdGEiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyb3IiLCJnZXRDYXJ0IiwiY2FydElkIiwicmVzdWx0Iiwic3VjY2VzcyIsInJlbW92ZVByb2R1Y3QiLCJpZFByb2R1Y3QiLCJpZF9jYXJ0IiwicHJvZHVjdElkIiwiZGVsZXRlRnJvbUNhcnQiLCJyZWdpc3RlciIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./RestHelper/useAuth.js\n"));

/***/ })

});