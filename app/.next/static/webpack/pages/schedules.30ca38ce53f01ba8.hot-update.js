"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/schedules",{

/***/ "./pages/schedules/index.tsx":
/*!***********************************!*\
  !*** ./pages/schedules/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_calender_CalenderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/calender/CalenderComponent */ \"./components/elements/calender/CalenderComponent.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_schedules_scheduleSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/schedules/scheduleSlice */ \"./store/schedules/scheduleSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst schedules = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.schedule.loading);\n    const schedules = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.schedule.schedule);\n    const customers = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.customer.customers);\n    const customer_schedules = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.customer_schedules.customer_schedules);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            dispatch((0,_store_schedules_scheduleSlice__WEBPACK_IMPORTED_MODULE_3__.getSchedule)({}));\n        } catch (error) {\n            console.log(error);\n        }\n    }, []);\n    const events = schedules.map((schedule)=>{\n        const customer_schedule = customer_schedules.find((customer_schedule)=>schedule.id === customer_schedule.schedules_id);\n        if (customer_schedule) {\n            const customer = customers.find((customer)=>customer_schedule.customers_id === customer.id);\n            return {\n                id: schedule.id,\n                title: customer.customer_name,\n                start: schedule.start_time,\n                end: schedule.end_time,\n                allDay: schedule.allDay\n            };\n        } else {\n            return {\n                id: schedule.id,\n                title: schedule.title,\n                start: schedule.start_time,\n                end: schedule.end_time,\n                allDay: schedule.allDay\n            };\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/schedules/index.tsx\",\n            lineNumber: 61,\n            columnNumber: 21\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_calender_CalenderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            events: events\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/schedules/index.tsx\",\n            lineNumber: 61,\n            columnNumber: 41\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/schedules/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(schedules, \"5n0q1wiSmHi9U7Gie0/V0rd2NUg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schedules);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY2hlZHVsZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFFb0Q7QUFDdkI7QUFDckI7QUFDZ0M7QUFPbEUsTUFBTU0sWUFBc0I7O0lBQzFCLE1BQU1DLFdBQVdMLHdEQUFXQTtJQUM1QixNQUFNTSxVQUFVTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFxQkEsTUFBTUMsUUFBUSxDQUFDRixPQUFPO0lBRXhFLE1BQU1GLFlBQVlILHdEQUFXQSxDQUFDLENBQUNNLFFBQXFCQSxNQUFNQyxRQUFRLENBQUNBLFFBQVE7SUFFM0UsTUFBTUMsWUFBWVIsd0RBQVdBLENBQUMsQ0FBQ00sUUFBcUJBLE1BQU1HLFFBQVEsQ0FBQ0QsU0FBUztJQUU1RSxNQUFNRSxxQkFBcUJWLHdEQUFXQSxDQUNwQyxDQUFDTSxRQUFxQkEsTUFBTUksa0JBQWtCLENBQUNBLGtCQUFrQjtJQUduRVQsZ0RBQVNBLENBQUM7UUFDUixJQUFJO1lBQ0ZHLFNBQVNGLDJFQUFXQSxDQUFDLENBQUM7UUFDeEIsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1HLFNBQVNYLFVBQVVZLEdBQUcsQ0FBQyxDQUFDUjtRQUM1QixNQUFNUyxvQkFBb0JOLG1CQUFtQk8sSUFBSSxDQUMvQyxDQUFDRCxvQkFBc0JULFNBQVNXLEVBQUUsS0FBS0Ysa0JBQWtCRyxZQUFZO1FBRXZFLElBQUlILG1CQUFtQjtZQUNyQixNQUFNUCxXQUFXRCxVQUFVUyxJQUFJLENBQzdCLENBQUNSLFdBQWFPLGtCQUFrQkksWUFBWSxLQUFLWCxTQUFTUyxFQUFFO1lBRzlELE9BQU87Z0JBQ0xBLElBQUlYLFNBQVNXLEVBQUU7Z0JBQ2ZHLE9BQU9aLFNBQVNhLGFBQWE7Z0JBQzdCQyxPQUFPaEIsU0FBU2lCLFVBQVU7Z0JBQzFCQyxLQUFLbEIsU0FBU21CLFFBQVE7Z0JBQ3RCQyxRQUFRcEIsU0FBU29CLE1BQU07WUFDekI7UUFDRixPQUFPO1lBQ0wsT0FBTztnQkFDTFQsSUFBSVgsU0FBU1csRUFBRTtnQkFDZkcsT0FBT2QsU0FBU2MsS0FBSztnQkFDckJFLE9BQU9oQixTQUFTaUIsVUFBVTtnQkFDMUJDLEtBQUtsQixTQUFTbUIsUUFBUTtnQkFDdEJDLFFBQVFwQixTQUFTb0IsTUFBTTtZQUN6QjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQUt2Qix3QkFBVSw4REFBQ3dCO3NCQUFFOzs7OztzQ0FBaUIsOERBQUMvQix1RkFBVUE7WUFBQ2dCLFFBQVFBOzs7Ozs7Ozs7OztBQUU1RDtHQWxETVg7O1FBQ2FKLG9EQUFXQTtRQUNaQyxvREFBV0E7UUFFVEEsb0RBQVdBO1FBRVhBLG9EQUFXQTtRQUVGQSxvREFBV0E7OztBQTRDeEMsK0RBQWVHLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NoZWR1bGVzL2luZGV4LnRzeD9jYWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBNeUNhbGVuZGFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VsZW1lbnRzL2NhbGVuZGVyL0NhbGVuZGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0U2NoZWR1bGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2NoZWR1bGVzL3NjaGVkdWxlU2xpY2VcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5pbnRlcmZhY2UgU2NoZWR1bGUge1xuICB5ZWFyPzogbnVtYmVyO1xufVxuXG5jb25zdCBzY2hlZHVsZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2NoZWR1bGUubG9hZGluZyk7XG5cbiAgY29uc3Qgc2NoZWR1bGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNjaGVkdWxlLnNjaGVkdWxlKTtcblxuICBjb25zdCBjdXN0b21lcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXIuY3VzdG9tZXJzKTtcblxuICBjb25zdCBjdXN0b21lcl9zY2hlZHVsZXMgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY3VzdG9tZXJfc2NoZWR1bGVzLmN1c3RvbWVyX3NjaGVkdWxlc1xuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKGdldFNjaGVkdWxlKHt9KSBhcyBhbnkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZXZlbnRzID0gc2NoZWR1bGVzLm1hcCgoc2NoZWR1bGUpID0+IHtcbiAgICBjb25zdCBjdXN0b21lcl9zY2hlZHVsZSA9IGN1c3RvbWVyX3NjaGVkdWxlcy5maW5kKFxuICAgICAgKGN1c3RvbWVyX3NjaGVkdWxlKSA9PiBzY2hlZHVsZS5pZCA9PT0gY3VzdG9tZXJfc2NoZWR1bGUuc2NoZWR1bGVzX2lkXG4gICAgKTtcbiAgICBpZiAoY3VzdG9tZXJfc2NoZWR1bGUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbWVyID0gY3VzdG9tZXJzLmZpbmQoXG4gICAgICAgIChjdXN0b21lcikgPT4gY3VzdG9tZXJfc2NoZWR1bGUuY3VzdG9tZXJzX2lkID09PSBjdXN0b21lci5pZFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHNjaGVkdWxlLmlkLFxuICAgICAgICB0aXRsZTogY3VzdG9tZXIuY3VzdG9tZXJfbmFtZSxcbiAgICAgICAgc3RhcnQ6IHNjaGVkdWxlLnN0YXJ0X3RpbWUsXG4gICAgICAgIGVuZDogc2NoZWR1bGUuZW5kX3RpbWUsXG4gICAgICAgIGFsbERheTogc2NoZWR1bGUuYWxsRGF5LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHNjaGVkdWxlLmlkLFxuICAgICAgICB0aXRsZTogc2NoZWR1bGUudGl0bGUsXG4gICAgICAgIHN0YXJ0OiBzY2hlZHVsZS5zdGFydF90aW1lLFxuICAgICAgICBlbmQ6IHNjaGVkdWxlLmVuZF90aW1lLFxuICAgICAgICBhbGxEYXk6IHNjaGVkdWxlLmFsbERheSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+e2xvYWRpbmcgPyA8cD5sb2FkaW5nLi4uPC9wPiA6IDxNeUNhbGVuZGFyIGV2ZW50cz17ZXZlbnRzfSAvPn08L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk15Q2FsZW5kYXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlRWZmZWN0IiwiZ2V0U2NoZWR1bGUiLCJzY2hlZHVsZXMiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJzdGF0ZSIsInNjaGVkdWxlIiwiY3VzdG9tZXJzIiwiY3VzdG9tZXIiLCJjdXN0b21lcl9zY2hlZHVsZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJtYXAiLCJjdXN0b21lcl9zY2hlZHVsZSIsImZpbmQiLCJpZCIsInNjaGVkdWxlc19pZCIsImN1c3RvbWVyc19pZCIsInRpdGxlIiwiY3VzdG9tZXJfbmFtZSIsInN0YXJ0Iiwic3RhcnRfdGltZSIsImVuZCIsImVuZF90aW1lIiwiYWxsRGF5IiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/schedules/index.tsx\n"));

/***/ })

});