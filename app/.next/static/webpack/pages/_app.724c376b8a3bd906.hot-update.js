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

/***/ "./store/middleTable/customers/customer_schedulesSlice.ts":
/*!****************************************************************!*\
  !*** ./store/middleTable/customers/customer_schedulesSlice.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCustomer_schedules: function() { return /* binding */ getCustomer_schedules; },\n/* harmony export */   initialState: function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"../node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _services_middleTable_customers_customer_schedulesApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/middleTable/customers/customer_schedulesApi */ \"./services/middleTable/customers/customer_schedulesApi.ts\");\n/* harmony import */ var _schedules_scheduleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schedules/scheduleSlice */ \"./store/schedules/scheduleSlice.ts\");\n\n\n\nconst getCustomer_schedules = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"customer_schedules/getCustomer_schedules\", async (formData, param)=>{\n    let { rejectWithValue } = param;\n    const response = await _services_middleTable_customers_customer_schedulesApi__WEBPACK_IMPORTED_MODULE_0__.customerScheduleApi.fetchAllCustomerSchedules();\n    if (response.resStatus === \"error\") {\n        console.log(\"response.error\", response);\n        return rejectWithValue(response);\n    }\n    if (response.resStatus === \"success\") {\n        console.log(\"response.success\", response);\n        return response;\n    }\n});\nconst initialState = {\n    customer_schedules: [],\n    loading: false,\n    error: null\n};\nconst customer_schedulesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"customer_schedules\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(_schedules_scheduleSlice__WEBPACK_IMPORTED_MODULE_1__.getSchedule.fulfilled, (state, action)=>{\n            state.customer_schedules = [\n                ...state.customer_schedules,\n                ...action.payload.customer_schedules\n            ];\n        });\n    }\n});\nconst customer_schedulesReducer = customer_schedulesSlice.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (customer_schedulesReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9taWRkbGVUYWJsZS9jdXN0b21lcnMvY3VzdG9tZXJfc2NoZWR1bGVzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Y7QUFDb0I7QUFPN0Q7QUFFaEMsTUFBTUksd0JBQXdCSCxrRUFBZ0JBLENBQ25ELDRDQUNBLE9BQU9JO1FBQWMsRUFBRUMsZUFBZSxFQUFFO0lBQ3RDLE1BQU1DLFdBQWdCLE1BQU1MLHNHQUFtQkEsQ0FBQ00seUJBQXlCO0lBQ3pFLElBQUlELFNBQVNFLFNBQVMsS0FBSyxTQUFTO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSjtRQUM5QixPQUFPRCxnQkFBZ0JDO0lBQ3pCO0lBQ0EsSUFBSUEsU0FBU0UsU0FBUyxLQUFLLFdBQVc7UUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JKO1FBQ2hDLE9BQU9BO0lBQ1Q7QUFDRixHQUNBO0FBZ0JLLE1BQU1LLGVBQTBCO0lBQ3JDQyxvQkFBb0IsRUFBRTtJQUN0QkMsU0FBUztJQUNUQyxPQUFPO0FBQ1QsRUFBRTtBQUVGLE1BQU1DLDBCQUEwQmhCLDZEQUFXQSxDQUFDO0lBQzFDaUIsTUFBTTtJQUNOTDtJQUNBTSxVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNkQSxRQUFRQyxPQUFPLENBQUNsQixpRUFBV0EsQ0FBQ21CLFNBQVMsRUFBRSxDQUFDQyxPQUFPQztZQUM3Q0QsTUFBTVYsa0JBQWtCLEdBQUc7bUJBQ3RCVSxNQUFNVixrQkFBa0I7bUJBQ3hCVyxPQUFPQyxPQUFPLENBQUNaLGtCQUFrQjthQUNyQztRQUNIO0lBQ0Y7QUFDRjtBQUVBLE1BQU1hLDRCQUE0QlYsd0JBQXdCVyxPQUFPO0FBRWpFLCtEQUFlRCx5QkFBeUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbWlkZGxlVGFibGUvY3VzdG9tZXJzL2N1c3RvbWVyX3NjaGVkdWxlc1NsaWNlLnRzPzgyY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24sIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgY3VzdG9tZXJTY2hlZHVsZUFwaSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9taWRkbGVUYWJsZS9jdXN0b21lcnMvY3VzdG9tZXJfc2NoZWR1bGVzQXBpXCI7XG5pbXBvcnQgUm9vdFN0YXRlIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlclwiO1xuaW1wb3J0IHtcbiAgZ2V0U2NoZWR1bGUsXG4gIGNyZWF0ZUN1c3RvbWVyU2NoZWR1bGUsXG4gIHVwZGF0ZUN1c3RvbWVyT25seVNjaGVkdWxlLFxuICB1cGRhdGVDdXN0b21lclNjaGVkdWxlLFxufSBmcm9tIFwiLi4vLi4vc2NoZWR1bGVzL3NjaGVkdWxlU2xpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyX3NjaGVkdWxlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiY3VzdG9tZXJfc2NoZWR1bGVzL2dldEN1c3RvbWVyX3NjaGVkdWxlc1wiLFxuICBhc3luYyAoZm9ybURhdGE6IHt9LCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IGN1c3RvbWVyU2NoZWR1bGVBcGkuZmV0Y2hBbGxDdXN0b21lclNjaGVkdWxlcygpO1xuICAgIGlmIChyZXNwb25zZS5yZXNTdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZS5lcnJvclwiLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKHJlc3BvbnNlKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnJlc1N0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2Uuc3VjY2Vzc1wiLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVyX3NjaGVkdWxlc1N0YXRlIHtcbiAgLy8g44K544OG44O844OI44Gu5Z6LXG4gIGlkOiBudW1iZXI7XG4gIGN1c3RvbWVyc19pZDogbnVtYmVyO1xuICBzY2hlZHVsZXNfaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb290U3RhdGUge1xuICAvLyBSb290U3RhdGXjga7lnotcbiAgY3VzdG9tZXJfc2NoZWR1bGVzOiBDdXN0b21lcl9zY2hlZHVsZXNTdGF0ZVtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogUm9vdFN0YXRlID0ge1xuICBjdXN0b21lcl9zY2hlZHVsZXM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5jb25zdCBjdXN0b21lcl9zY2hlZHVsZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjdXN0b21lcl9zY2hlZHVsZXNcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge30sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGdldFNjaGVkdWxlLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmN1c3RvbWVyX3NjaGVkdWxlcyA9IFtcbiAgICAgICAgLi4uc3RhdGUuY3VzdG9tZXJfc2NoZWR1bGVzLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jdXN0b21lcl9zY2hlZHVsZXMsXG4gICAgICBdO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmNvbnN0IGN1c3RvbWVyX3NjaGVkdWxlc1JlZHVjZXIgPSBjdXN0b21lcl9zY2hlZHVsZXNTbGljZS5yZWR1Y2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21lcl9zY2hlZHVsZXNSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImN1c3RvbWVyU2NoZWR1bGVBcGkiLCJnZXRTY2hlZHVsZSIsImdldEN1c3RvbWVyX3NjaGVkdWxlcyIsImZvcm1EYXRhIiwicmVqZWN0V2l0aFZhbHVlIiwicmVzcG9uc2UiLCJmZXRjaEFsbEN1c3RvbWVyU2NoZWR1bGVzIiwicmVzU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImluaXRpYWxTdGF0ZSIsImN1c3RvbWVyX3NjaGVkdWxlcyIsImxvYWRpbmciLCJlcnJvciIsImN1c3RvbWVyX3NjaGVkdWxlc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiY3VzdG9tZXJfc2NoZWR1bGVzUmVkdWNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/middleTable/customers/customer_schedulesSlice.ts\n"));

/***/ })

});