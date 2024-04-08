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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n\n\n\nconst attendances = ()=>{\n    const tHeaderItems = [\n        \"名前\",\n        \"電話番号\",\n        \"役職\",\n        \"住所\",\n        \"操作\",\n        \"時間管理\"\n    ];\n    const nodesProps = [\n        {\n            text: \"name\"\n        },\n        {\n            number: \"phone_number\"\n        },\n        {\n            text: \"position\"\n        },\n        {\n            text: \"address\"\n        }\n    ];\n    const nodes = [\n        {\n            id: 1,\n            name: \"田中太郎\",\n            phone_number: \"00011112222\",\n            position: \"オーナー\",\n            address: \"東京都港区2-2-22 208\"\n        },\n        {\n            id: 2,\n            name: \"田中次郎\",\n            phone_number: \"00011113333\",\n            position: \"社員\",\n            address: \"東京都港区2-2-22 206\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-6xl px-4 py-8 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/attendances/create\",\n                        className: \"btn\",\n                        children: \"新規作成\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/attendances/[id]?id=1\",\n                        className: \"btn\",\n                        children: \"詳細\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/attendances\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/attendances/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (attendances);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdHRlbmRhbmNlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QjtBQUNnQztBQUU3RCxNQUFNRSxjQUFjO0lBQ2xCLE1BQU1DLGVBQWU7UUFBQztRQUFNO1FBQVE7UUFBTTtRQUFNO1FBQU07S0FBTztJQUM3RCxNQUFNQyxhQUFhO1FBQ2pCO1lBQUVDLE1BQU07UUFBTztRQUNmO1lBQUVDLFFBQVE7UUFBZTtRQUN6QjtZQUFFRCxNQUFNO1FBQVc7UUFDbkI7WUFBRUEsTUFBTTtRQUFVO0tBQ25CO0lBRUQsTUFBTUUsUUFBUTtRQUNaO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxjQUFjO1lBQ2RDLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGNBQWM7WUFDZEMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7S0FFRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDZCxrREFBSUE7d0JBQUNlLE1BQUs7d0JBQXNCRCxXQUFVO2tDQUFNOzs7Ozs7a0NBR2pELDhEQUFDZCxrREFBSUE7d0JBQUNlLE1BQUs7d0JBQXlCRCxXQUFVO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBSXRELDhEQUFDYixrRUFBY0E7Z0JBQ2JNLE9BQU9BO2dCQUNQSCxZQUFZQTtnQkFDWkQsY0FBY0E7Z0JBQ2RhLE1BQUs7Ozs7Ozs7Ozs7OztBQUliO0FBRUEsK0RBQWVkLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXR0ZW5kYW5jZXMvaW5kZXgudHN4P2Q2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvbXBvbmVudFRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VsZW1lbnRzL3RhYmxlXCI7XG5cbmNvbnN0IGF0dGVuZGFuY2VzID0gKCkgPT4ge1xuICBjb25zdCB0SGVhZGVySXRlbXMgPSBbXCLlkI3liY1cIiwgXCLpm7voqbHnlarlj7dcIiwgXCLlvbnogbdcIiwgXCLkvY/miYBcIiwgXCLmk43kvZxcIiwgXCLmmYLplpPnrqHnkIZcIl07XG4gIGNvbnN0IG5vZGVzUHJvcHMgPSBbXG4gICAgeyB0ZXh0OiBcIm5hbWVcIiB9LFxuICAgIHsgbnVtYmVyOiBcInBob25lX251bWJlclwiIH0sXG4gICAgeyB0ZXh0OiBcInBvc2l0aW9uXCIgfSxcbiAgICB7IHRleHQ6IFwiYWRkcmVzc1wiIH0sXG4gIF07XG5cbiAgY29uc3Qgbm9kZXMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiBcIueUsOS4reWkqumDjlwiLFxuICAgICAgcGhvbmVfbnVtYmVyOiBcIjAwMDExMTEyMjIyXCIsXG4gICAgICBwb3NpdGlvbjogXCLjgqrjg7zjg4rjg7xcIixcbiAgICAgIGFkZHJlc3M6IFwi5p2x5Lqs6YO95riv5Yy6Mi0yLTIyIDIwOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIueUsOS4reasoemDjlwiLFxuICAgICAgcGhvbmVfbnVtYmVyOiBcIjAwMDExMTEzMzMzXCIsXG4gICAgICBwb3NpdGlvbjogXCLnpL7lk6FcIixcbiAgICAgIGFkZHJlc3M6IFwi5p2x5Lqs6YO95riv5Yy6Mi0yLTIyIDIwNlwiLFxuICAgIH0sXG4gICAgLy8g5LuW44Gu6KGM44OH44O844K/44KC44GT44GT44Gr6L+95Yqg44GZ44KLXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNnhsIHB4LTQgcHktOCBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQgbWItNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2F0dGVuZGFuY2VzL2NyZWF0ZVwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgIOaWsOimj+S9nOaIkFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYXR0ZW5kYW5jZXMvW2lkXT9pZD0xXCIgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAg6Kmz57SwXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPENvbXBvbmVudFRhYmxlXG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZXNQcm9wcz17bm9kZXNQcm9wc31cbiAgICAgICAgdEhlYWRlckl0ZW1zPXt0SGVhZGVySXRlbXN9XG4gICAgICAgIGxpbms9XCIvYXR0ZW5kYW5jZXNcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dGVuZGFuY2VzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsImF0dGVuZGFuY2VzIiwidEhlYWRlckl0ZW1zIiwibm9kZXNQcm9wcyIsInRleHQiLCJudW1iZXIiLCJub2RlcyIsImlkIiwibmFtZSIsInBob25lX251bWJlciIsInBvc2l0aW9uIiwiYWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/attendances/index.tsx\n"));

/***/ })

});