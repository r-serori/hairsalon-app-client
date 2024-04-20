"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/attendances",{

/***/ "./pages/attendances/index.tsx":
/*!*************************************!*\
  !*** ./pages/attendances/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_attendances_attendanceSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/attendances/attendanceSlice */ \"./store/attendances/attendanceSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Attendances = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.attendance.loading);\n    const attendances = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.attendance.attendances);\n    console.log(attendances);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_store_attendances_attendanceSlice__WEBPACK_IMPORTED_MODULE_4__.getAttendance)());\n    }, [\n        dispatch\n    ]);\n    const searchItems = [\n        {\n            key: \"attendance_name\",\n            value: \"名前\"\n        },\n        {\n            key: \"phone_number\",\n            value: \"電話番号\"\n        },\n        {\n            key: \"position\",\n            value: \"役職\"\n        },\n        {\n            key: \"address\",\n            value: \"住所\"\n        }\n    ];\n    const tHeaderItems = [\n        \"名前\",\n        \"電話番号\",\n        \"役職\",\n        \"住所\",\n        \"削除\",\n        \"時間管理\"\n    ];\n    const nodesProps = [\n        {\n            text: \"attendance_name\"\n        },\n        {\n            number: \"phone_number\"\n        },\n        {\n            text: \"position\"\n        },\n        {\n            text: \"address\"\n        }\n    ];\n    // nodesにattendancesをマップして処理\n    const nodes = attendances;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-6xl px-4 py-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/attendances/create\",\n                        className: \"btn\",\n                        children: \"新規作成\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/attendances/[id]?id=1\",\n                        className: \"btn\",\n                        children: \"詳細\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                searchItems: searchItems,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/attendances\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Attendances, \"gJxhCTD5r4ya8NDt2K0kH9wySUU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Attendances;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Attendances);\nvar _c;\n$RefreshReg$(_c, \"Attendances\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdHRlbmRhbmNlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2dDO0FBQ047QUFDckI7QUFDc0M7QUFHeEUsTUFBTU0sY0FBYzs7SUFDbEIsTUFBTUMsV0FBV0wsd0RBQVdBO0lBQzVCLE1BQU1NLFVBQVVMLHdEQUFXQSxDQUFDLENBQUNNLFFBQXFCQSxNQUFNQyxVQUFVLENBQUNGLE9BQU87SUFFMUUsTUFBTUcsY0FBY1Isd0RBQVdBLENBQzdCLENBQUNNLFFBQXFCQSxNQUFNQyxVQUFVLENBQUNDLFdBQVc7SUFFcERDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWlAsZ0RBQVNBLENBQUM7UUFDUkcsU0FBU0YsaUZBQWFBO0lBQ3hCLEdBQUc7UUFBQ0U7S0FBUztJQUViLE1BQU1PLGNBQWM7UUFDbEI7WUFBRUMsS0FBSztZQUFtQkMsT0FBTztRQUFLO1FBQ3RDO1lBQUVELEtBQUs7WUFBZ0JDLE9BQU87UUFBTztRQUNyQztZQUFFRCxLQUFLO1lBQVlDLE9BQU87UUFBSztRQUMvQjtZQUFFRCxLQUFLO1lBQVdDLE9BQU87UUFBSztLQUMvQjtJQUVELE1BQU1DLGVBQWU7UUFBQztRQUFNO1FBQVE7UUFBTTtRQUFNO1FBQU07S0FBTztJQUM3RCxNQUFNQyxhQUFhO1FBQ2pCO1lBQUVDLE1BQU07UUFBa0I7UUFDMUI7WUFBRUMsUUFBUTtRQUFlO1FBQ3pCO1lBQUVELE1BQU07UUFBVztRQUNuQjtZQUFFQSxNQUFNO1FBQVU7S0FDbkI7SUFFRCw0QkFBNEI7SUFDNUIsTUFBTUUsUUFBUVY7SUFFZCxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3ZCLGtEQUFJQTt3QkFBQ3dCLE1BQUs7d0JBQXNCRCxXQUFVO2tDQUFNOzs7Ozs7a0NBR2pELDhEQUFDdkIsa0RBQUlBO3dCQUFDd0IsTUFBSzt3QkFBeUJELFdBQVU7a0NBQU07Ozs7Ozs7Ozs7OztZQUlyRGYsd0JBQ0MsOERBQUNpQjswQkFBRTs7Ozs7MENBRUgsOERBQUN4QixrRUFBY0E7Z0JBQ2JvQixPQUFPQTtnQkFDUFAsYUFBYUE7Z0JBQ2JJLFlBQVlBO2dCQUNaRCxjQUFjQTtnQkFDZFMsTUFBSzs7Ozs7Ozs7Ozs7O0FBS2Y7R0F0RE1wQjs7UUFDYUosb0RBQVdBO1FBQ1pDLG9EQUFXQTtRQUVQQSxvREFBV0E7OztLQUozQkc7QUF3RE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXR0ZW5kYW5jZXMvaW5kZXgudHN4P2Q2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvbXBvbmVudFRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VsZW1lbnRzL3RhYmxlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QXR0ZW5kYW5jZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hdHRlbmRhbmNlcy9hdHRlbmRhbmNlU2xpY2VcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5jb25zdCBBdHRlbmRhbmNlcyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmF0dGVuZGFuY2UubG9hZGluZyk7XG5cbiAgY29uc3QgYXR0ZW5kYW5jZXMgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXR0ZW5kYW5jZS5hdHRlbmRhbmNlc1xuICApO1xuICBjb25zb2xlLmxvZyhhdHRlbmRhbmNlcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRBdHRlbmRhbmNlKCkgYXMgYW55KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3Qgc2VhcmNoSXRlbXMgPSBbXG4gICAgeyBrZXk6IFwiYXR0ZW5kYW5jZV9uYW1lXCIsIHZhbHVlOiBcIuWQjeWJjVwiIH0sXG4gICAgeyBrZXk6IFwicGhvbmVfbnVtYmVyXCIsIHZhbHVlOiBcIumbu+ipseeVquWPt1wiIH0sXG4gICAgeyBrZXk6IFwicG9zaXRpb25cIiwgdmFsdWU6IFwi5b256IG3XCIgfSxcbiAgICB7IGtleTogXCJhZGRyZXNzXCIsIHZhbHVlOiBcIuS9j+aJgFwiIH0sXG4gIF07XG5cbiAgY29uc3QgdEhlYWRlckl0ZW1zID0gW1wi5ZCN5YmNXCIsIFwi6Zu76Kmx55Wq5Y+3XCIsIFwi5b256IG3XCIsIFwi5L2P5omAXCIsIFwi5YmK6ZmkXCIsIFwi5pmC6ZaT566h55CGXCJdO1xuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJhdHRlbmRhbmNlX25hbWVcIiB9LFxuICAgIHsgbnVtYmVyOiBcInBob25lX251bWJlclwiIH0sXG4gICAgeyB0ZXh0OiBcInBvc2l0aW9uXCIgfSxcbiAgICB7IHRleHQ6IFwiYWRkcmVzc1wiIH0sXG4gIF07XG5cbiAgLy8gbm9kZXPjgathdHRlbmRhbmNlc+OCkuODnuODg+ODl+OBl+OBpuWHpueQhlxuICBjb25zdCBub2RlcyA9IGF0dGVuZGFuY2VzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTZ4bCBweC00IHB5LTggXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IG1iLTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdHRlbmRhbmNlcy9jcmVhdGVcIiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICDmlrDopo/kvZzmiJBcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2F0dGVuZGFuY2VzL1tpZF0/aWQ9MVwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIOips+e0sFxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbXBvbmVudFRhYmxlXG4gICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgIHNlYXJjaEl0ZW1zPXtzZWFyY2hJdGVtc31cbiAgICAgICAgICBub2Rlc1Byb3BzPXtub2Rlc1Byb3BzfVxuICAgICAgICAgIHRIZWFkZXJJdGVtcz17dEhlYWRlckl0ZW1zfVxuICAgICAgICAgIGxpbms9XCIvYXR0ZW5kYW5jZXNcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF0dGVuZGFuY2VzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJnZXRBdHRlbmRhbmNlIiwiQXR0ZW5kYW5jZXMiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJzdGF0ZSIsImF0dGVuZGFuY2UiLCJhdHRlbmRhbmNlcyIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hJdGVtcyIsImtleSIsInZhbHVlIiwidEhlYWRlckl0ZW1zIiwibm9kZXNQcm9wcyIsInRleHQiLCJudW1iZXIiLCJub2RlcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJwIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/attendances/index.tsx\n"));

/***/ })

});