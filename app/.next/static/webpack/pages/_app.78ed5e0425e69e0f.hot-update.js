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

/***/ "./services/middleTable/customers/hairstyle_customersApi.ts":
/*!******************************************************************!*\
  !*** ./services/middleTable/customers/hairstyle_customersApi.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hairstyleCustomerApi: function() { return /* binding */ hairstyleCustomerApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../requestApi */ \"./services/requestApi.ts\");\n\nconst hairstyleCustomerApi = {\n    createHairstyleCustomer: async (formData)=>{\n        try {\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/hairstyle_customers\", formData);\n        } catch (error) {\n            throw new Error(\"Error creating hairstyle customer: \".concat(error.message));\n        }\n    },\n    fetchAllHairstyleCustomers: async ()=>{\n        try {\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/hairstyle_customers\");\n        } catch (error) {\n            throw new Error(\"Error fetching all hairstyle customers: \".concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9taWRkbGVUYWJsZS9jdXN0b21lcnMvaGFpcnN0eWxlX2N1c3RvbWVyc0FwaS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUd4QyxNQUFNQyx1QkFBdUI7SUFDbENDLHlCQUF5QixPQUFPQztRQUk5QixJQUFJO1lBQ0YsT0FBTyxNQUFNSCx3REFBV0EsQ0FBQyxRQUFRLHdCQUF3Qkc7UUFDM0QsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLHNDQUFvRCxPQUFkRCxNQUFNRSxPQUFPO1FBQ3JFO0lBQ0Y7SUFFQUMsNEJBQTRCO1FBQzFCLElBQUk7WUFDRixPQUFPLE1BQU1QLHdEQUFXQSxDQUFDLE9BQU87UUFDbEMsRUFBRSxPQUFPSSxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUNSLDJDQUF5RCxPQUFkRCxNQUFNRSxPQUFPO1FBRTVEO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL21pZGRsZVRhYmxlL2N1c3RvbWVycy9oYWlyc3R5bGVfY3VzdG9tZXJzQXBpLnRzPzYxN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdEFwaVwiO1xuaW1wb3J0IGdldENzcmZUb2tlbiBmcm9tIFwiLi4vLi4vcmVxdWVzdEFwaVwiO1xuXG5leHBvcnQgY29uc3QgaGFpcnN0eWxlQ3VzdG9tZXJBcGkgPSB7XG4gIGNyZWF0ZUhhaXJzdHlsZUN1c3RvbWVyOiBhc3luYyAoZm9ybURhdGE6IHtcbiAgICBoYWlyc3R5bGVzX2lkOiBudW1iZXI7XG4gICAgY3VzdG9tZXJzX2lkOiBudW1iZXI7XG4gIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBcIi9oYWlyc3R5bGVfY3VzdG9tZXJzXCIsIGZvcm1EYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBjcmVhdGluZyBoYWlyc3R5bGUgY3VzdG9tZXI6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBbGxIYWlyc3R5bGVDdXN0b21lcnM6IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIFwiL2hhaXJzdHlsZV9jdXN0b21lcnNcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEVycm9yIGZldGNoaW5nIGFsbCBoYWlyc3R5bGUgY3VzdG9tZXJzOiAke2Vycm9yLm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInNlbmRSZXF1ZXN0IiwiaGFpcnN0eWxlQ3VzdG9tZXJBcGkiLCJjcmVhdGVIYWlyc3R5bGVDdXN0b21lciIsImZvcm1EYXRhIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJmZXRjaEFsbEhhaXJzdHlsZUN1c3RvbWVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/middleTable/customers/hairstyle_customersApi.ts\n"));

/***/ })

});