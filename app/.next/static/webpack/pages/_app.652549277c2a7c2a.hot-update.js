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

/***/ "./services/stocks/api.ts":
/*!********************************!*\
  !*** ./services/stocks/api.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stockApi: function() { return /* binding */ stockApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requestApi */ \"./services/requestApi.ts\");\n\n\nconst stockApi = {\n    createStock: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/stocks\", formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error creating stock: \".concat(error.message));\n        }\n    },\n    fetchAllStocks: async ()=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/stocks\", csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching all stocks: \".concat(error.message));\n        }\n    },\n    fetchStockById: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/stocks/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching stock with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    updateStock: async (id, formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/stocks/\".concat(id), formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error updating stock with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    deleteStock: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/stocks/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error deleting stock with ID \".concat(id, \": \").concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdG9ja3MvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ0g7QUFFbEMsTUFBTUUsV0FBVztJQUN0QkMsYUFBYSxPQUFPQztRQU9sQixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxRQUFRLFdBQVdJLFVBQVVDO1FBQ3hELEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSx5QkFBdUMsT0FBZEQsTUFBTUUsT0FBTztRQUN4RDtJQUNGO0lBRUFDLGdCQUFnQjtRQUNkLElBQUk7WUFDRixNQUFNSixZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLE9BQU8sV0FBV0s7UUFDN0MsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLDhCQUE0QyxPQUFkRCxNQUFNRSxPQUFPO1FBQzdEO0lBQ0Y7SUFFQUUsZ0JBQWdCLE9BQU9DO1FBQ3JCLElBQUk7WUFDRixNQUFNTixZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLE9BQU8sV0FBYyxPQUFIVyxLQUFNTjtRQUNuRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQU0sZ0NBQXVDRCxPQUFQSyxJQUFHLE1BQWtCLE9BQWRMLE1BQU1FLE9BQU87UUFDdEU7SUFDRjtJQUVBSSxhQUFhLE9BQ1hELElBQ0FQO1FBUUEsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTUosdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUQsd0RBQVdBLENBQUMsUUFBUSxXQUFjLE9BQUhXLEtBQU1QLFVBQVVDO1FBQzlELEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxnQ0FBdUNELE9BQVBLLElBQUcsTUFBa0IsT0FBZEwsTUFBTUUsT0FBTztRQUN0RTtJQUNGO0lBRUFLLGFBQWEsT0FBT0Y7UUFDbEIsSUFBSTtZQUNGLE1BQU1OLFlBQVksTUFBTUosdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUQsd0RBQVdBLENBQUMsUUFBUSxXQUFjLE9BQUhXLEtBQU1OO1FBQ3BELEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxnQ0FBdUNELE9BQVBLLElBQUcsTUFBa0IsT0FBZEwsTUFBTUUsT0FBTztRQUN0RTtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9zdG9ja3MvYXBpLnRzPzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZFJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdEFwaVwiO1xuaW1wb3J0IGdldENzcmZUb2tlbiBmcm9tIFwiLi4vcmVxdWVzdEFwaVwiO1xuXG5leHBvcnQgY29uc3Qgc3RvY2tBcGkgPSB7XG4gIGNyZWF0ZVN0b2NrOiBhc3luYyAoZm9ybURhdGE6IHtcbiAgICBwcm9kdWN0X25hbWU6IHN0cmluZztcbiAgICBwcm9kdWN0X3ByaWNlOiBudW1iZXI7XG4gICAgcXVhbnRpdHk6IHN0cmluZztcbiAgICByZW1hcmtzOiBzdHJpbmc7XG4gICAgc3RvY2tfY2F0ZWdvcnlfaWQ6IG51bWJlcjtcbiAgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgXCIvc3RvY2tzXCIsIGZvcm1EYXRhLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGNyZWF0aW5nIHN0b2NrOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9LFxuXG4gIGZldGNoQWxsU3RvY2tzOiBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIFwiL3N0b2Nrc1wiLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGFsbCBzdG9ja3M6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hTdG9ja0J5SWQ6IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIGAvc3RvY2tzLyR7aWR9YCwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyBzdG9jayB3aXRoIElEICR7aWR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZVN0b2NrOiBhc3luYyAoXG4gICAgaWQ6IG51bWJlcixcbiAgICBmb3JtRGF0YToge1xuICAgICAgcHJvZHVjdF9uYW1lOiBzdHJpbmc7XG4gICAgICBwcm9kdWN0X3ByaWNlOiBudW1iZXI7XG4gICAgICBxdWFudGl0eTogc3RyaW5nO1xuICAgICAgcmVtYXJrczogc3RyaW5nO1xuICAgICAgc3RvY2tfY2F0ZWdvcnlfaWQ6IG51bWJlcjtcbiAgICB9XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgYC9zdG9ja3MvJHtpZH1gLCBmb3JtRGF0YSwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB1cGRhdGluZyBzdG9jayB3aXRoIElEICR7aWR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZVN0b2NrOiBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgYC9zdG9ja3MvJHtpZH1gLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGRlbGV0aW5nIHN0b2NrIHdpdGggSUQgJHtpZH06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInNlbmRSZXF1ZXN0IiwiZ2V0Q3NyZlRva2VuIiwic3RvY2tBcGkiLCJjcmVhdGVTdG9jayIsImZvcm1EYXRhIiwiY3NyZlRva2VuIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJmZXRjaEFsbFN0b2NrcyIsImZldGNoU3RvY2tCeUlkIiwiaWQiLCJ1cGRhdGVTdG9jayIsImRlbGV0ZVN0b2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/stocks/api.ts\n"));

/***/ })

});