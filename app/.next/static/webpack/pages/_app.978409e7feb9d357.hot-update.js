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

/***/ "./services/options/api.ts":
/*!*********************************!*\
  !*** ./services/options/api.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   optionApi: function() { return /* binding */ optionApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requestApi */ \"./services/requestApi.ts\");\n\n\nconst optionApi = {\n    createOption: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/options\", formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error creating option: \".concat(error.message));\n        }\n    },\n    fetchAllOptions: async ()=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/options\", csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching all options: \".concat(error.message));\n        }\n    },\n    fetchOptionById: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/options/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching option with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    updateOption: async (id, formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/options/\".concat(id), formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error updating option with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    deleteOption: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/options/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error deleting option with ID \".concat(id, \": \").concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9vcHRpb25zL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUNIO0FBRWxDLE1BQU1FLFlBQVk7SUFDdkJDLGNBQWMsT0FBT0M7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTUosdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUQsd0RBQVdBLENBQUMsUUFBUSxZQUFZSSxVQUFVQztRQUN6RCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQU0sMEJBQXdDLE9BQWRELE1BQU1FLE9BQU87UUFDekQ7SUFDRjtJQUVBQyxpQkFBaUI7UUFDZixJQUFJO1lBQ0YsTUFBTUosWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxPQUFPLFlBQVlLO1FBQzlDLEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSwrQkFBNkMsT0FBZEQsTUFBTUUsT0FBTztRQUM5RDtJQUNGO0lBRUFFLGlCQUFpQixPQUFPQztRQUN0QixJQUFJO1lBQ0YsTUFBTU4sWUFBWSxNQUFNSix1REFBWUE7WUFDcEMsT0FBTyxNQUFNRCx3REFBV0EsQ0FBQyxPQUFPLFlBQWUsT0FBSFcsS0FBTU47UUFDcEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLGlDQUF3Q0QsT0FBUEssSUFBRyxNQUFrQixPQUFkTCxNQUFNRSxPQUFPO1FBQ3ZFO0lBQ0Y7SUFFQUksY0FBYyxPQUNaRCxJQUNBUDtRQUtBLElBQUk7WUFDRixNQUFNQyxZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLFFBQVEsWUFBZSxPQUFIVyxLQUFNUCxVQUFVQztRQUMvRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQU0saUNBQXdDRCxPQUFQSyxJQUFHLE1BQWtCLE9BQWRMLE1BQU1FLE9BQU87UUFDdkU7SUFDRjtJQUVBSyxjQUFjLE9BQU9GO1FBQ25CLElBQUk7WUFDRixNQUFNTixZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLFFBQVEsWUFBZSxPQUFIVyxLQUFNTjtRQUNyRCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQU0saUNBQXdDRCxPQUFQSyxJQUFHLE1BQWtCLE9BQWRMLE1BQU1FLE9BQU87UUFDdkU7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvb3B0aW9ucy9hcGkudHM/Yzg3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZW5kUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0QXBpXCI7XG5pbXBvcnQgZ2V0Q3NyZlRva2VuIGZyb20gXCIuLi9yZXF1ZXN0QXBpXCI7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25BcGkgPSB7XG4gIGNyZWF0ZU9wdGlvbjogYXN5bmMgKGZvcm1EYXRhOiB7IG9wdGlvbl9uYW1lOiBzdHJpbmc7IHByaWNlOiBudW1iZXIgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgXCIvb3B0aW9uc1wiLCBmb3JtRGF0YSwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBjcmVhdGluZyBvcHRpb246ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBbGxPcHRpb25zOiBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIFwiL29wdGlvbnNcIiwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyBhbGwgb3B0aW9uczogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaE9wdGlvbkJ5SWQ6IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIGAvb3B0aW9ucy8ke2lkfWAsIGNzcmZUb2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZmV0Y2hpbmcgb3B0aW9uIHdpdGggSUQgJHtpZH06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlT3B0aW9uOiBhc3luYyAoXG4gICAgaWQ6IG51bWJlcixcbiAgICBmb3JtRGF0YToge1xuICAgICAgb3B0aW9uX25hbWU6IHN0cmluZztcbiAgICAgIHByaWNlOiBudW1iZXI7XG4gICAgfVxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJQT1NUXCIsIGAvb3B0aW9ucy8ke2lkfWAsIGZvcm1EYXRhLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHVwZGF0aW5nIG9wdGlvbiB3aXRoIElEICR7aWR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZU9wdGlvbjogYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJQT1NUXCIsIGAvb3B0aW9ucy8ke2lkfWAsIGNzcmZUb2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZGVsZXRpbmcgb3B0aW9uIHdpdGggSUQgJHtpZH06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInNlbmRSZXF1ZXN0IiwiZ2V0Q3NyZlRva2VuIiwib3B0aW9uQXBpIiwiY3JlYXRlT3B0aW9uIiwiZm9ybURhdGEiLCJjc3JmVG9rZW4iLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImZldGNoQWxsT3B0aW9ucyIsImZldGNoT3B0aW9uQnlJZCIsImlkIiwidXBkYXRlT3B0aW9uIiwiZGVsZXRlT3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/options/api.ts\n"));

/***/ })

});