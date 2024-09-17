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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_store__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { user } = (0,_lib_store__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // List of routes where we want to show the navigation\n    const routesWithNav = [\n        \"/\",\n        \"/dashboard\"\n    ];\n    const showNav = routesWithNav.includes(router.pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            showNav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min-h-screen bg-gray-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"bg-white shadow-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between h-16\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/\",\n                                                    className: \"flex-shrink-0 flex items-center\",\n                                                    children: \"Logo\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                    lineNumber: 24,\n                                                    columnNumber: 15\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/\",\n                                                            className: \"text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium\",\n                                                            children: \"Home\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                            lineNumber: 28,\n                                                            columnNumber: 17\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/dashboard\",\n                                                            className: \"text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium\",\n                                                            children: \"Dashboard\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                            lineNumber: 31,\n                                                            columnNumber: 17\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hidden sm:ml-6 sm:flex sm:items-center\",\n                                            children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded\",\n                                                children: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/login\",\n                                                className: \"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded\",\n                                                children: \"Login\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\components\\\\Layout.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNXO0FBQ0E7QUFFdkMsTUFBTUksU0FBa0QsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDbkUsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0osb0RBQVFBO0lBQ3pCLE1BQU1LLFNBQVNKLHNEQUFTQTtJQUV4QixzREFBc0Q7SUFDdEQsTUFBTUssZ0JBQWdCO1FBQUM7UUFBSztLQUFhO0lBRXpDLE1BQU1DLFVBQVVELGNBQWNFLFFBQVEsQ0FBQ0gsT0FBT0ksUUFBUTtJQUV0RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWkoseUJBQ0MsOERBQUNLO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ25CLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDWixrREFBSUE7b0RBQUNjLE1BQUs7b0RBQUlGLFdBQVU7OERBQWtDOzs7Ozs7OERBRzNELDhEQUFDRDtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUNaLGtEQUFJQTs0REFBQ2MsTUFBSzs0REFBSUYsV0FBVTtzRUFBb0c7Ozs7OztzRUFHN0gsOERBQUNaLGtEQUFJQTs0REFBQ2MsTUFBSzs0REFBYUYsV0FBVTtzRUFBeUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLL0osOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNaUCxxQkFDQyw4REFBQ1U7Z0RBQU9ILFdBQVU7MERBQTJFOzs7OzswRUFJN0YsOERBQUNaLGtEQUFJQTtnREFBQ2MsTUFBSztnREFBU0YsV0FBVTswREFBMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRbkgsOERBQUNJO3NDQUFNWjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVAsOERBQUNZOzBCQUFNWjs7Ozs7Ozs7Ozs7O0FBR2I7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9jb21wb25lbnRzL0xheW91dC50c3g/M2M4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9saWIvc3RvcmUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTdG9yZSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgLy8gTGlzdCBvZiByb3V0ZXMgd2hlcmUgd2Ugd2FudCB0byBzaG93IHRoZSBuYXZpZ2F0aW9uXHJcbiAgY29uc3Qgcm91dGVzV2l0aE5hdiA9IFsnLycsICcvZGFzaGJvYXJkJ11cclxuXHJcbiAgY29uc3Qgc2hvd05hdiA9IHJvdXRlc1dpdGhOYXYuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAge3Nob3dOYXYgJiYgKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIExvZ29cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206LW15LXB4IHNtOm1sLTYgc206ZmxleCBzbTpzcGFjZS14LThcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMSBwdC0xIGJvcmRlci1iLTIgYm9yZGVyLWluZGlnby01MDAgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMSBwdC0xIGJvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTptbC02IHNtOmZsZXggc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgKX1cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVN0b3JlIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwicm91dGVyIiwicm91dGVzV2l0aE5hdiIsInNob3dOYXYiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsImJ1dHRvbiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        user: null,\n        setUser: (user)=>set({\n                user\n            }),\n        isLoading: false,\n        setIsLoading: (isLoading)=>set({\n                isLoading\n            })\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFTekIsTUFBTUMsV0FBV0QsK0NBQU1BLENBQVcsQ0FBQ0UsTUFBUztRQUNqREMsTUFBTTtRQUNOQyxTQUFTLENBQUNELE9BQVNELElBQUk7Z0JBQUVDO1lBQUs7UUFDOUJFLFdBQVc7UUFDWEMsY0FBYyxDQUFDRCxZQUFjSCxJQUFJO2dCQUFFRztZQUFVO0lBQy9DLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtYXBwLy4vbGliL3N0b3JlLnRzP2U4NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdcclxuXHJcbmludGVyZmFjZSBBcHBTdGF0ZSB7XHJcbiAgdXNlcjogYW55XHJcbiAgc2V0VXNlcjogKHVzZXI6IGFueSkgPT4gdm9pZFxyXG4gIGlzTG9hZGluZzogYm9vbGVhblxyXG4gIHNldElzTG9hZGluZzogKGlzTG9hZGluZzogYm9vbGVhbikgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGU8QXBwU3RhdGU+KChzZXQpID0+ICh7XHJcbiAgdXNlcjogbnVsbCxcclxuICBzZXRVc2VyOiAodXNlcikgPT4gc2V0KHsgdXNlciB9KSxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHNldElzTG9hZGluZzogKGlzTG9hZGluZykgPT4gc2V0KHsgaXNMb2FkaW5nIH0pLFxyXG59KSkiXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlU3RvcmUiLCJzZXQiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_store__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_store__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const { isLoading } = (0,_lib_store__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // List of valid routes\n    const validRoutes = [\n        \"/\",\n        \"/login\",\n        \"/dashboard\"\n    ];\n    // Check if the current route is valid\n    const isValidRoute = validRoutes.includes(router.pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900\"\n            }, void 0, false, {\n                fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\pages\\\\_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this) : isValidRoute ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) // This will render the 404 or catch-all page\n    }, void 0, false, {\n        fileName: \"E:\\\\advanced next\\\\my-nextjs-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVM7QUFDRTtBQUNGO0FBRXZDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR04sb0RBQVFBO0lBQzlCLE1BQU1PLFNBQVNMLHNEQUFTQTtJQUV4Qix1QkFBdUI7SUFDdkIsTUFBTU0sY0FBYztRQUFDO1FBQUs7UUFBVTtLQUFhO0lBRWpELHNDQUFzQztJQUN0QyxNQUFNQyxlQUFlRCxZQUFZRSxRQUFRLENBQUNILE9BQU9JLFFBQVE7SUFFekQscUJBQ0UsOERBQUNWLDBEQUFNQTtrQkFDSkssMEJBQ0MsOERBQUNNO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7O21CQUVmSiw2QkFDRiw4REFBQ0w7WUFBVyxHQUFHQyxTQUFTOzs7OztpQ0FFeEIsOERBQUNEO1lBQVcsR0FBR0MsU0FBUzs7Ozs7aUJBQU0sNkNBQTZDOzs7Ozs7QUFJbkY7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vbGliL3N0b3JlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlU3RvcmUoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIC8vIExpc3Qgb2YgdmFsaWQgcm91dGVzXHJcbiAgY29uc3QgdmFsaWRSb3V0ZXMgPSBbJy8nLCAnL2xvZ2luJywgJy9kYXNoYm9hcmQnXVxyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCByb3V0ZSBpcyB2YWxpZFxyXG4gIGNvbnN0IGlzVmFsaWRSb3V0ZSA9IHZhbGlkUm91dGVzLmluY2x1ZGVzKHJvdXRlci5wYXRobmFtZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMzIgdy0zMiBib3JkZXItdC0yIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktOTAwXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBpc1ZhbGlkUm91dGUgPyAoXHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4gIC8vIFRoaXMgd2lsbCByZW5kZXIgdGhlIDQwNCBvciBjYXRjaC1hbGwgcGFnZVxyXG4gICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsIkxheW91dCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwicm91dGVyIiwidmFsaWRSb3V0ZXMiLCJpc1ZhbGlkUm91dGUiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();