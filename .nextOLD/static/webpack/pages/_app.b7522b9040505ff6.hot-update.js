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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/configs */ \"./configs/configs.js\");\n/* harmony import */ var _configs_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/localStorage */ \"./configs/localStorage/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// Hook (use-auth.js)\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\n// Provider component that wraps your app and makes auth object ...\n// ... available to any child component that calls useAuth().\nfunction AuthProvider(param) {\n    var children = param.children;\n    _s();\n    var auth = useAuthProvider();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bigmac/Desktop/minusb2b/RestHelper/useAuth.js\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n_s(AuthProvider, \"U5QEqN6sgp/9Kus+ung4cQwYnRk=\", false, function() {\n    return [\n        useAuthProvider\n    ];\n});\n_c = AuthProvider;\n// Hook for child components to get the auth object ...\n// ... and re-render when it changes.\nvar useAuth = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// Provider hook that creates auth object and handles state\nfunction useAuthProvider() {\n    _s2();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), cart = ref1[0], setCart = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), offers = ref2[0], setOffers = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openCart = ref3[0], setOpenCart = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"openCart changed to \" + openCart);\n    }, [\n        openCart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (_configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isConnected()) {\n            setUser(_configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"local_data\").customer);\n        } else {\n            router.push(\"/connexion\");\n        }\n    }, []);\n    var login = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, requestOptions;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        if (!(email != \"\" && password != \"\")) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                email: email,\n                                password: password\n                            })\n                        };\n                        _ctx.next = 5;\n                        return fetch(\"/api/login\", requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(response) {\n                            var ref, ref1;\n                            if ((response === null || response === void 0 ? void 0 : (ref = response.results) === null || ref === void 0 ? void 0 : ref.succes) && (response === null || response === void 0 ? void 0 : (ref1 = response.results) === null || ref1 === void 0 ? void 0 : ref1.code) === 200) {\n                                var ref2, ref3, ref4;\n                                setUser(response === null || response === void 0 ? void 0 : (ref2 = response.results) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.customer);\n                                _configs_localStorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"].add(\"local_data\", response === null || response === void 0 ? void 0 : (ref4 = response.results) === null || ref4 === void 0 ? void 0 : ref4.data);\n                                router.push(\"/products\");\n                            } else {\n                                var ref5;\n                                console.log(\"Error: \" + (response === null || response === void 0 ? void 0 : (ref5 = response.results) === null || ref5 === void 0 ? void 0 : ref5.message));\n                            }\n                            return response === null || response === void 0 ? void 0 : response.results;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 5:\n                        return _ctx.abrupt(\"return\", _ctx.sent);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function login(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getCart = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(cartId) {\n            var requestOptions, result;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                cartId: cartId\n                            })\n                        };\n                        _ctx.next = 3;\n                        return fetch(\"/api/cart/get\", requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(data) {\n                            return data;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 3:\n                        result = _ctx.sent;\n                        if (!((result === null || result === void 0 ? void 0 : result.code) == 200 && (result === null || result === void 0 ? void 0 : result.success) && (result === null || result === void 0 ? void 0 : result.cart))) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        setCart(result === null || result === void 0 ? void 0 : result.cart);\n                        setOffers(result === null || result === void 0 ? void 0 : result.offers);\n                        return _ctx.abrupt(\"return\", true);\n                    case 8:\n                        return _ctx.abrupt(\"return\", false);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getCart(cartId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var removeProduct = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(idProduct) {\n            var requestOptions;\n            return _Users_bigmac_Desktop_minusb2b_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestOptions = {\n                            method: \"POST\",\n                            headers: {\n                                Accept: \"application/json\",\n                                \"Content-Type\": \"application/x-www-form-urlencoded\"\n                            },\n                            body: new URLSearchParams({\n                                cart_id: user === null || user === void 0 ? void 0 : user.id_cart,\n                                product_id: idProduct\n                            })\n                        };\n                        _ctx.next = 3;\n                        return fetch(_configs_configs__WEBPACK_IMPORTED_MODULE_3__.Urls.deleteFromCart, requestOptions).then(function(response) {\n                            return response === null || response === void 0 ? void 0 : response.json();\n                        }).then(function(result) {\n                            if ((result === null || result === void 0 ? void 0 : result.code) == 200 && (result === null || result === void 0 ? void 0 : result.succes) && (result === null || result === void 0 ? void 0 : result.cart)) {\n                                setCart(result === null || result === void 0 ? void 0 : result.cart);\n                                return true;\n                            }\n                            return false;\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                    case 3:\n                        return _ctx.abrupt(\"return\", _ctx.sent);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function removeProduct(idProduct) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var register = function(param) {\n        var email = param.email, password = param.password;\n        return {};\n    };\n    var logout = function() {\n        return {};\n    };\n    return {\n        user: user,\n        getCart: getCart,\n        setCart: setCart,\n        removeProduct: removeProduct,\n        login: login,\n        register: register,\n        logout: logout,\n        cart: cart,\n        offers: offers,\n        openCart: openCart,\n        setOpenCart: setOpenCart\n    };\n}\n_s2(useAuthProvider, \"/YtPgKamW8MxJESL8r/RcOtNctY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7UUFDakMsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQU1nQyxNQUFNLEdBQUcsV0FBTTtRQUNuQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTztRQUNMaEQsSUFBSSxFQUFKQSxJQUFJO1FBQ0pvQyxPQUFPLEVBQVBBLE9BQU87UUFDUGpDLE9BQU8sRUFBUEEsT0FBTztRQUNQcUMsYUFBYSxFQUFiQSxhQUFhO1FBQ2IxQixLQUFLLEVBQUxBLEtBQUs7UUFDTGlDLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxNQUFNLEVBQU5BLE1BQU07UUFDTjlDLElBQUksRUFBSkEsSUFBSTtRQUNKRSxNQUFNLEVBQU5BLE1BQU07UUFDTkUsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFdBQVcsRUFBWEEsV0FBVztLQUNaLENBQUM7Q0FDSDtJQTVIUVosZUFBZTs7UUFDUEwsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVzdEhlbHBlci91c2VBdXRoLmpzP2NhYjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSG9vayAodXNlLWF1dGguanMpXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXJscywgc2FsdCB9IGZyb20gXCIuLi9jb25maWdzL2NvbmZpZ3NcIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2VYIGZyb20gXCIuLi9jb25maWdzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgeW91ciBhcHAgYW5kIG1ha2VzIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZUF1dGhQcm92aWRlcigpO1xuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG4vLyBIb29rIGZvciBjaGlsZCBjb21wb25lbnRzIHRvIGdldCB0aGUgYXV0aCBvYmplY3QgLi4uXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbi8vIFByb3ZpZGVyIGhvb2sgdGhhdCBjcmVhdGVzIGF1dGggb2JqZWN0IGFuZCBoYW5kbGVzIHN0YXRlXG5mdW5jdGlvbiB1c2VBdXRoUHJvdmlkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW29mZmVycywgc2V0T2ZmZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbb3BlbkNhcnQsIHNldE9wZW5DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwib3BlbkNhcnQgY2hhbmdlZCB0byBcIiArIG9wZW5DYXJ0KTtcbiAgfSwgW29wZW5DYXJ0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlWC5pc0Nvbm5lY3RlZCgpKSB7XG4gICAgICBzZXRVc2VyKGxvY2FsU3RvcmFnZVguZ2V0KFwibG9jYWxfZGF0YVwiKS5jdXN0b21lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Nvbm5leGlvblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgaWYgKGVtYWlsICE9IFwiXCIgJiYgcGFzc3dvcmQgIT0gXCJcIikge1xuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIH0pLFxuICAgICAgfTtcblxuICAgICAgLy8gY29uc3QgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcblxuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKFwiL2FwaS9sb2dpblwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZT8uanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2U/LnJlc3VsdHM/LnN1Y2NlcyAmJiByZXNwb25zZT8ucmVzdWx0cz8uY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlPy5yZXN1bHRzPy5kYXRhPy5jdXN0b21lcik7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVguYWRkKFwibG9jYWxfZGF0YVwiLCByZXNwb25zZT8ucmVzdWx0cz8uZGF0YSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9kdWN0c1wiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyByZXNwb25zZT8ucmVzdWx0cz8ubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZT8ucmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcikpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDYXJ0ID0gYXN5bmMgKGNhcnRJZCkgPT4ge1xuICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2FydElkOiBjYXJ0SWQgfSksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFwiL2FwaS9jYXJ0L2dldFwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2U/Lmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpKTtcblxuICAgIGlmIChyZXN1bHQ/LmNvZGUgPT0gMjAwICYmIHJlc3VsdD8uc3VjY2VzcyAmJiByZXN1bHQ/LmNhcnQpIHtcbiAgICAgIHNldENhcnQocmVzdWx0Py5jYXJ0KTtcbiAgICAgIHNldE9mZmVycyhyZXN1bHQ/Lm9mZmVycyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSBhc3luYyAoaWRQcm9kdWN0KSA9PiB7XG4gICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgY2FydF9pZDogdXNlcj8uaWRfY2FydCxcbiAgICAgICAgcHJvZHVjdF9pZDogaWRQcm9kdWN0LFxuICAgICAgfSksXG4gICAgfTtcblxuICAgIHJldHVybiBhd2FpdCBmZXRjaChVcmxzLmRlbGV0ZUZyb21DYXJ0LCByZXF1ZXN0T3B0aW9ucylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2U/Lmpzb24oKSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdD8uY29kZSA9PSAyMDAgJiYgcmVzdWx0Py5zdWNjZXMgJiYgcmVzdWx0Py5jYXJ0KSB7XG4gICAgICAgICAgc2V0Q2FydChyZXN1bHQ/LmNhcnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIHJldHVybiB7fTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHt9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBnZXRDYXJ0LFxuICAgIHNldENhcnQsXG4gICAgcmVtb3ZlUHJvZHVjdCxcbiAgICBsb2dpbixcbiAgICByZWdpc3RlcixcbiAgICBsb2dvdXQsXG4gICAgY2FydCxcbiAgICBvZmZlcnMsXG4gICAgb3BlbkNhcnQsXG4gICAgc2V0T3BlbkNhcnQsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiVXJscyIsInNhbHQiLCJsb2NhbFN0b3JhZ2VYIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VBdXRoUHJvdmlkZXIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsInJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwiY2FydCIsInNldENhcnQiLCJvZmZlcnMiLCJzZXRPZmZlcnMiLCJvcGVuQ2FydCIsInNldE9wZW5DYXJ0IiwiY29uc29sZSIsImxvZyIsImlzQ29ubmVjdGVkIiwiZ2V0IiwiY3VzdG9tZXIiLCJwdXNoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRzIiwic3VjY2VzIiwiY29kZSIsImRhdGEiLCJhZGQiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImdldENhcnQiLCJjYXJ0SWQiLCJyZXN1bHQiLCJzdWNjZXNzIiwicmVtb3ZlUHJvZHVjdCIsImlkUHJvZHVjdCIsIlVSTFNlYXJjaFBhcmFtcyIsImNhcnRfaWQiLCJpZF9jYXJ0IiwicHJvZHVjdF9pZCIsImRlbGV0ZUZyb21DYXJ0IiwicmVnaXN0ZXIiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./RestHelper/useAuth.js\n"));

/***/ })

});