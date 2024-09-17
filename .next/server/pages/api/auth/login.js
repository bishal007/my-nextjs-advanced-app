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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_login_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\login.ts */ \"(api)/./pages/api/auth/login.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/login\",\n        pathname: \"/api/auth/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_login_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q2xvZ2luLnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dGpzLWFwcC8/Nzg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW4udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nif (!MONGODB_DB) {\n    throw new Error(\"Please define the MONGODB_DB environment variable inside .env.local\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    if (cachedClient && cachedDb) {\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    try {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(MONGODB_URI);\n        const db = await client.db(MONGODB_DB);\n        cachedClient = client;\n        cachedDb = db;\n        return {\n            client,\n            db\n        };\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBQzNDLE1BQU1HLGFBQWFGLFFBQVFDLEdBQUcsQ0FBQ0UsT0FBTztBQUV0QyxJQUFJLENBQUNKLGFBQWE7SUFDaEIsTUFBTSxJQUFJSyxNQUFNO0FBQ2xCO0FBRUEsSUFBSSxDQUFDRixZQUFZO0lBQ2YsTUFBTSxJQUFJRSxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsZUFBbUM7QUFDdkMsSUFBSUMsV0FBZ0I7QUFFYixlQUFlQztJQUNwQixJQUFJRixnQkFBZ0JDLFVBQVU7UUFDNUIsT0FBTztZQUFFRSxRQUFRSDtZQUFjSSxJQUFJSDtRQUFTO0lBQzlDO0lBRUEsSUFBSTtRQUNGLE1BQU1FLFNBQVMsTUFBTVYsZ0RBQVdBLENBQUNZLE9BQU8sQ0FBQ1g7UUFDekMsTUFBTVUsS0FBSyxNQUFNRCxPQUFPQyxFQUFFLENBQUNQO1FBRTNCRyxlQUFlRztRQUNmRixXQUFXRztRQUVYLE9BQU87WUFBRUQ7WUFBUUM7UUFBRztJQUN0QixFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTUE7SUFDUjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dGpzLWFwcC8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSFcclxuY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52LkRCX05BTUVcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJylcclxufVxyXG5cclxuaWYgKCFNT05HT0RCX0RCKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX0RCIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJylcclxufVxyXG5cclxubGV0IGNhY2hlZENsaWVudDogTW9uZ29DbGllbnQgfCBudWxsID0gbnVsbFxyXG5sZXQgY2FjaGVkRGI6IGFueSA9IG51bGxcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XHJcbiAgICByZXR1cm4geyBjbGllbnQ6IGNhY2hlZENsaWVudCwgZGI6IGNhY2hlZERiIH1cclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPREJfVVJJKVxyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBjbGllbnQuZGIoTU9OR09EQl9EQilcclxuXHJcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnRcclxuICAgIGNhY2hlZERiID0gZGJcclxuXHJcbiAgICByZXR1cm4geyBjbGllbnQsIGRiIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREIiLCJEQl9OQU1FIiwiRXJyb3IiLCJjYWNoZWRDbGllbnQiLCJjYWNoZWREYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiZGIiLCJjb25uZWN0IiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { email, password } = req.body;\n            const { db } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n            const user = await db.collection(\"users\").findOne({\n                email\n            });\n            if (!user) {\n                return res.status(400).json({\n                    message: \"Invalid credentials\"\n                });\n            }\n            const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n            if (!isMatch) {\n                return res.status(400).json({\n                    message: \"Invalid credentials\"\n                });\n            }\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                id: user._id\n            }, process.env.JWT_SECRET, {\n                expiresIn: \"1d\"\n            });\n            res.status(200).json({\n                token,\n                user: {\n                    id: user._id,\n                    email: user.email\n                }\n            });\n        } catch (error) {\n            console.error(\"Login error:\", error);\n            res.status(500).json({\n                message: \"Server error\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0Q7QUFDN0I7QUFDRztBQUVmLGVBQWVHLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzdFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKLElBQUlLLElBQUk7WUFDcEMsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNViwrREFBaUJBO1lBRXRDLE1BQU1XLE9BQU8sTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLE9BQU8sQ0FBQztnQkFBRU47WUFBTTtZQUUxRCxJQUFJLENBQUNJLE1BQU07Z0JBQ1QsT0FBT04sSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBc0I7WUFDL0Q7WUFFQSxNQUFNQyxVQUFVLE1BQU1oQixxREFBYyxDQUFDTyxVQUFVRyxLQUFLSCxRQUFRO1lBRTVELElBQUksQ0FBQ1MsU0FBUztnQkFDWixPQUFPWixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFzQjtZQUMvRDtZQUVBLE1BQU1HLFFBQVFqQix3REFBUSxDQUFDO2dCQUFFbUIsSUFBSVYsS0FBS1csR0FBRztZQUFDLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFHO2dCQUNoRUMsV0FBVztZQUNiO1lBRUFyQixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSTtnQkFBT1IsTUFBTTtvQkFBRVUsSUFBSVYsS0FBS1csR0FBRztvQkFBRWYsT0FBT0ksS0FBS0osS0FBSztnQkFBQztZQUFFO1FBQzFFLEVBQUUsT0FBT29CLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdCQUFnQkE7WUFDOUJ0QixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWU7UUFDakQ7SUFDRixPQUFPO1FBQ0xYLElBQUl3QixTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0J4QixJQUFJUyxNQUFNLENBQUMsS0FBS2dCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTFCLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cz83NDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICAgICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7IGVtYWlsIH0pXHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxyXG5cclxuICAgICAgaWYgKCFpc01hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBpZDogdXNlci5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEsIHtcclxuICAgICAgICBleHBpcmVzSW46ICcxZCcsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuLCB1c2VyOiB7IGlkOiB1c2VyLl9pZCwgZW1haWw6IHVzZXIuZW1haWwgfSB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgZXJyb3InIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiYmNyeXB0Iiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiZGIiLCJ1c2VyIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImlzTWF0Y2giLCJjb21wYXJlIiwidG9rZW4iLCJzaWduIiwiaWQiLCJfaWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImVycm9yIiwiY29uc29sZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();