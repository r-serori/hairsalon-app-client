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

/***/ "./services/schedules/api.ts":
/*!***********************************!*\
  !*** ./services/schedules/api.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   schedulesApi: function() { return /* binding */ schedulesApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requestApi */ \"./services/requestApi.ts\");\n\n\nconst schedulesApi = {\n    createSchedule: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/schedules\", formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error creating schedule: \".concat(error.message));\n        }\n    },\n    fetchAllSchedules: async ()=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/schedules\", csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching all schedules: \".concat(error.message));\n        }\n    },\n    fetchScheduleById: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/schedules/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error fetching schedule with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    updateSchedule: async (id, formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/schedules/\".concat(id), formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error updating schedule with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    deleteSchedule: async (id)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/schedules/\".concat(id), csrfToken);\n        } catch (error) {\n            throw new Error(\"Error deleting schedule with ID \".concat(id, \": \").concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zY2hlZHVsZXMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ0g7QUFFbEMsTUFBTUUsZUFBZTtJQUMxQkMsZ0JBQWdCLE9BQU9DO1FBT3JCLElBQUk7WUFDRixNQUFNQyxZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLFFBQVEsY0FBY0ksVUFBVUM7UUFDM0QsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLDRCQUEwQyxPQUFkRCxNQUFNRSxPQUFPO1FBQzNEO0lBQ0Y7SUFFQUMsbUJBQW1CO1FBQ2pCLElBQUk7WUFDRixNQUFNSixZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLE9BQU8sY0FBY0s7UUFDaEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLGlDQUErQyxPQUFkRCxNQUFNRSxPQUFPO1FBQ2hFO0lBQ0Y7SUFFQUUsbUJBQW1CLE9BQU9DO1FBQ3hCLElBQUk7WUFDRixNQUFNTixZQUFZLE1BQU1KLHVEQUFZQTtZQUNwQyxPQUFPLE1BQU1ELHdEQUFXQSxDQUFDLE9BQU8sY0FBaUIsT0FBSFcsS0FBTU47UUFDdEQsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUNSLG1DQUEwQ0QsT0FBUEssSUFBRyxNQUFrQixPQUFkTCxNQUFNRSxPQUFPO1FBRTNEO0lBQ0Y7SUFFQUksZ0JBQWdCLE9BQ2RELElBQ0FQO1FBT0EsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTUosdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUQsd0RBQVdBLENBQUMsUUFBUSxjQUFpQixPQUFIVyxLQUFNUCxVQUFVQztRQUNqRSxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQ1IsbUNBQTBDRCxPQUFQSyxJQUFHLE1BQWtCLE9BQWRMLE1BQU1FLE9BQU87UUFFM0Q7SUFDRjtJQUVBSyxnQkFBZ0IsT0FBT0Y7UUFDckIsSUFBSTtZQUNGLE1BQU1OLFlBQVksTUFBTUosdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUQsd0RBQVdBLENBQUMsUUFBUSxjQUFpQixPQUFIVyxLQUFNTjtRQUN2RCxFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQ1IsbUNBQTBDRCxPQUFQSyxJQUFHLE1BQWtCLE9BQWRMLE1BQU1FLE9BQU87UUFFM0Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvc2NoZWR1bGVzL2FwaS50cz9mY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3RBcGlcIjtcbmltcG9ydCBnZXRDc3JmVG9rZW4gZnJvbSBcIi4uL3JlcXVlc3RBcGlcIjtcblxuZXhwb3J0IGNvbnN0IHNjaGVkdWxlc0FwaSA9IHtcbiAgY3JlYXRlU2NoZWR1bGU6IGFzeW5jIChmb3JtRGF0YToge1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBzdGFydF90aW1lOiBzdHJpbmc7XG4gICAgZW5kX3RpbWU6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIGN1c3RvbWVyc19pZDogbnVtYmVyO1xuICB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBcIi9zY2hlZHVsZXNcIiwgZm9ybURhdGEsIGNzcmZUb2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgY3JlYXRpbmcgc2NoZWR1bGU6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBbGxTY2hlZHVsZXM6IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJHRVRcIiwgXCIvc2NoZWR1bGVzXCIsIGNzcmZUb2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZmV0Y2hpbmcgYWxsIHNjaGVkdWxlczogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaFNjaGVkdWxlQnlJZDogYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJHRVRcIiwgYC9zY2hlZHVsZXMvJHtpZH1gLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFcnJvciBmZXRjaGluZyBzY2hlZHVsZSB3aXRoIElEICR7aWR9OiAke2Vycm9yLm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlU2NoZWR1bGU6IGFzeW5jIChcbiAgICBpZDogbnVtYmVyLFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICBkYXRlOiBEYXRlO1xuICAgICAgc3RhcnRfdGltZTogRGF0ZTtcbiAgICAgIGVuZF90aW1lOiBEYXRlO1xuICAgICAgY3VzdG9tZXJfaWQ6IG51bWJlcjtcbiAgICB9XG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgYC9zY2hlZHVsZXMvJHtpZH1gLCBmb3JtRGF0YSwgY3NyZlRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRXJyb3IgdXBkYXRpbmcgc2NoZWR1bGUgd2l0aCBJRCAke2lkfTogJHtlcnJvci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZVNjaGVkdWxlOiBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oKTtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIlBPU1RcIiwgYC9zY2hlZHVsZXMvJHtpZH1gLCBjc3JmVG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFcnJvciBkZWxldGluZyBzY2hlZHVsZSB3aXRoIElEICR7aWR9OiAke2Vycm9yLm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInNlbmRSZXF1ZXN0IiwiZ2V0Q3NyZlRva2VuIiwic2NoZWR1bGVzQXBpIiwiY3JlYXRlU2NoZWR1bGUiLCJmb3JtRGF0YSIsImNzcmZUb2tlbiIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwiZmV0Y2hBbGxTY2hlZHVsZXMiLCJmZXRjaFNjaGVkdWxlQnlJZCIsImlkIiwidXBkYXRlU2NoZWR1bGUiLCJkZWxldGVTY2hlZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/schedules/api.ts\n"));

/***/ })

});