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

/***/ "./services/auth/api.ts":
/*!******************************!*\
  !*** ./services/auth/api.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authApi: function() { return /* binding */ authApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requestApi */ \"./services/requestApi.ts\");\n\n\nconst authApi = {\n    login: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/login\", formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error logging in: \".concat(error.message));\n        }\n    },\n    register: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/register\", formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error registering: \".concat(error.message));\n        }\n    },\n    logout: async ()=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/logout\", {}, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error logging out: \".concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNIO0FBRWxDLE1BQU1FLFVBQVU7SUFDckJDLE9BQU8sT0FBT0M7UUFDWixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxRQUFRLFVBQVVJLFVBQVVDO1FBQ3ZELEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxxQkFBbUMsT0FBZEQsTUFBTUUsT0FBTztRQUNwRDtJQUNGO0lBRUFDLFVBQVUsT0FBT0w7UUFLZixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxRQUFRLGFBQWFJLFVBQVVDO1FBQzFELEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxzQkFBb0MsT0FBZEQsTUFBTUUsT0FBTztRQUNyRDtJQUNGO0lBRUFFLFFBQVE7UUFDTixJQUFJO1lBQ0YsTUFBTUwsWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxRQUFRLFdBQVcsQ0FBQyxHQUFHSztRQUNsRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQU0sc0JBQW9DLE9BQWRELE1BQU1FLE9BQU87UUFDckQ7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXV0aC9hcGkudHM/NWViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0QXBpXCI7XG5pbXBvcnQgZ2V0Q3NyZlRva2VuIGZyb20gXCIuLi9yZXF1ZXN0QXBpXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoQXBpID0ge1xuICBsb2dpbjogYXN5bmMgKGZvcm1EYXRhOiB7IGxvZ2luX2lkOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgXCIvbG9naW5cIiwgZm9ybURhdGEsIGNzcmZUb2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgbG9nZ2luZyBpbjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICByZWdpc3RlcjogYXN5bmMgKGZvcm1EYXRhOiB7XG4gICAgbG9naW5faWQ6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBcIi9yZWdpc3RlclwiLCBmb3JtRGF0YSwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciByZWdpc3RlcmluZzogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJQT1NUXCIsIFwiL2xvZ291dFwiLCB7fSwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBsb2dnaW5nIG91dDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcbn07XG4iXSwibmFtZXMiOlsic2VuZFJlcXVlc3QiLCJnZXRDc3JmVG9rZW4iLCJhdXRoQXBpIiwibG9naW4iLCJmb3JtRGF0YSIsImNzcmZUb2tlbiIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwicmVnaXN0ZXIiLCJsb2dvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/auth/api.ts\n"));

/***/ })

});