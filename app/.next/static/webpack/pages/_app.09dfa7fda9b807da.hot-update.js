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

/***/ "./services/attendances/api.ts":
/*!*************************************!*\
  !*** ./services/attendances/api.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attendanceApi: function() { return /* binding */ attendanceApi; }\n/* harmony export */ });\n/* harmony import */ var _requestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requestApi */ \"./services/requestApi.ts\");\n\n\nconst attendanceApi = {\n    createAttendance: async (formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/attendances\", formData);\n        } catch (error) {\n            throw new Error(\"Error creating attendance: \".concat(error.message));\n        }\n    },\n    fetchAllAttendances: async ()=>{\n        try {\n            console.log(\"fetching all attendances\");\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/attendances\");\n        } catch (error) {\n            throw new Error(\"Error fetching all attendances: \".concat(error.message));\n        }\n    },\n    fetchAttendanceById: async (id)=>{\n        try {\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"GET\", \"/attendances/\".concat(id));\n        } catch (error) {\n            throw new Error(\"Error fetching attendance with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    updateAttendance: async (id, formData)=>{\n        try {\n            const csrfToken = await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"POST\", \"/attendances/\".concat(id, \"/update\"), formData, csrfToken);\n        } catch (error) {\n            throw new Error(\"Error updating attendance with ID \".concat(id, \": \").concat(error.message));\n        }\n    },\n    deleteAttendance: async (id)=>{\n        try {\n            return await (0,_requestApi__WEBPACK_IMPORTED_MODULE_0__.sendRequest)(\"DELETE\", \"/attendances/\".concat(id, \"/delete\"));\n        } catch (error) {\n            throw new Error(\"Error deleting attendance with ID \".concat(id, \": \").concat(error.message));\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdHRlbmRhbmNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFDRztBQUVyQyxNQUFNRSxnQkFBZ0I7SUFDM0JDLGtCQUFrQixPQUFPQztRQU12QixJQUFJO1lBQ0YsTUFBTUMsWUFBWSxNQUFNTCx1REFBWUE7WUFDcEMsT0FBTyxNQUFNQyx3REFBV0EsQ0FBQyxRQUFRLGdCQUFnQkc7UUFDbkQsRUFBRSxPQUFPRSxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUFNLDhCQUE0QyxPQUFkRCxNQUFNRSxPQUFPO1FBQzdEO0lBQ0Y7SUFFQUMscUJBQXFCO1FBQ25CLElBQUk7WUFDRkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTyxNQUFNVix3REFBV0EsQ0FBQyxPQUFPO1FBQ2xDLEVBQUUsT0FBT0ssT0FBTztZQUNkLE1BQU0sSUFBSUMsTUFBTSxtQ0FBaUQsT0FBZEQsTUFBTUUsT0FBTztRQUNsRTtJQUNGO0lBRUFJLHFCQUFxQixPQUFPQztRQUMxQixJQUFJO1lBQ0YsT0FBTyxNQUFNWix3REFBV0EsQ0FBQyxPQUFPLGdCQUFtQixPQUFIWTtRQUNsRCxFQUFFLE9BQU9QLE9BQU87WUFDZCxNQUFNLElBQUlDLE1BQ1IscUNBQTRDRCxPQUFQTyxJQUFHLE1BQWtCLE9BQWRQLE1BQU1FLE9BQU87UUFFN0Q7SUFDRjtJQUVBTSxrQkFBa0IsT0FDaEJELElBQ0FUO1FBT0EsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTUwsdURBQVlBO1lBQ3BDLE9BQU8sTUFBTUMsd0RBQVdBLENBQ3RCLFFBQ0EsZ0JBQW1CLE9BQUhZLElBQUcsWUFDbkJULFVBQ0FDO1FBRUosRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUNSLHFDQUE0Q0QsT0FBUE8sSUFBRyxNQUFrQixPQUFkUCxNQUFNRSxPQUFPO1FBRTdEO0lBQ0Y7SUFFQU8sa0JBQWtCLE9BQU9GO1FBQ3ZCLElBQUk7WUFDRixPQUFPLE1BQU1aLHdEQUFXQSxDQUFDLFVBQVUsZ0JBQW1CLE9BQUhZLElBQUc7UUFDeEQsRUFBRSxPQUFPUCxPQUFPO1lBQ2QsTUFBTSxJQUFJQyxNQUNSLHFDQUE0Q0QsT0FBUE8sSUFBRyxNQUFrQixPQUFkUCxNQUFNRSxPQUFPO1FBRTdEO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2F0dGVuZGFuY2VzL2FwaS50cz84MTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDc3JmVG9rZW4gZnJvbSBcIi4uL3JlcXVlc3RBcGlcIjtcbmltcG9ydCB7IHNlbmRSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3RBcGlcIjtcblxuZXhwb3J0IGNvbnN0IGF0dGVuZGFuY2VBcGkgPSB7XG4gIGNyZWF0ZUF0dGVuZGFuY2U6IGFzeW5jIChmb3JtRGF0YToge1xuICAgIGF0dGVuZGFuY2VfbmFtZTogc3RyaW5nO1xuICAgIHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbigpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBcIi9hdHRlbmRhbmNlc1wiLCBmb3JtRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgY3JlYXRpbmcgYXR0ZW5kYW5jZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbEF0dGVuZGFuY2VzOiBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgYWxsIGF0dGVuZGFuY2VzXCIpO1xuICAgICAgcmV0dXJuIGF3YWl0IHNlbmRSZXF1ZXN0KFwiR0VUXCIsIFwiL2F0dGVuZGFuY2VzXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGFsbCBhdHRlbmRhbmNlczogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEF0dGVuZGFuY2VCeUlkOiBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXCJHRVRcIiwgYC9hdHRlbmRhbmNlcy8ke2lkfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFcnJvciBmZXRjaGluZyBhdHRlbmRhbmNlIHdpdGggSUQgJHtpZH06ICR7ZXJyb3IubWVzc2FnZX1gXG4gICAgICApO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVBdHRlbmRhbmNlOiBhc3luYyAoXG4gICAgaWQ6IG51bWJlcixcbiAgICBmb3JtRGF0YToge1xuICAgICAgYXR0ZW5kYW5jZV9uYW1lOiBzdHJpbmc7XG4gICAgICBwb3NpdGlvbjogc3RyaW5nO1xuICAgICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gICAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgfVxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgZ2V0Q3NyZlRva2VuKCk7XG4gICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3QoXG4gICAgICAgIFwiUE9TVFwiLFxuICAgICAgICBgL2F0dGVuZGFuY2VzLyR7aWR9L3VwZGF0ZWAsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBjc3JmVG9rZW5cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEVycm9yIHVwZGF0aW5nIGF0dGVuZGFuY2Ugd2l0aCBJRCAke2lkfTogJHtlcnJvci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZUF0dGVuZGFuY2U6IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdChcIkRFTEVURVwiLCBgL2F0dGVuZGFuY2VzLyR7aWR9L2RlbGV0ZWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFcnJvciBkZWxldGluZyBhdHRlbmRhbmNlIHdpdGggSUQgJHtpZH06ICR7ZXJyb3IubWVzc2FnZX1gXG4gICAgICApO1xuICAgIH1cbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiZ2V0Q3NyZlRva2VuIiwic2VuZFJlcXVlc3QiLCJhdHRlbmRhbmNlQXBpIiwiY3JlYXRlQXR0ZW5kYW5jZSIsImZvcm1EYXRhIiwiY3NyZlRva2VuIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJmZXRjaEFsbEF0dGVuZGFuY2VzIiwiY29uc29sZSIsImxvZyIsImZldGNoQXR0ZW5kYW5jZUJ5SWQiLCJpZCIsInVwZGF0ZUF0dGVuZGFuY2UiLCJkZWxldGVBdHRlbmRhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/attendances/api.ts\n"));

/***/ })

});