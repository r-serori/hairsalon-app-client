"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customers",{

/***/ "./pages/customers/index.tsx":
/*!***********************************!*\
  !*** ./pages/customers/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n\n\n\nconst customers = ()=>{\n    const tHeaderItems = [\n        \"顧客名\",\n        \"電話番号\",\n        \"役職\",\n        \"住所\",\n        \"削除\",\n        \"時間管理\"\n    ];\n    const nodesProps = [\n        {\n            text: \"name\"\n        },\n        {\n            number: \"phone_number\"\n        },\n        {\n            text: \"position\"\n        },\n        {\n            text: \"address\"\n        }\n    ];\n    const nodes = [\n        {\n            id: 1,\n            name: \"田中太郎\",\n            phone_number: \"00011112222\",\n            position: \"オーナー\",\n            address: \"東京都港区2-2-22 208\"\n        },\n        {\n            id: 2,\n            name: \"田中次郎\",\n            phone_number: \"00011113333\",\n            position: \"社員\",\n            address: \"東京都港区2-2-22 206\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/create\",\n                children: \"新規作成\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]?id=1\",\n                children: \"詳細\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/edit?id=1\",\n                children: \"編集\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/delete?id=1\",\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/search?id=customer\",\n                children: \"検索\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/schedule?id=1\",\n                children: \"予約\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (customers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jdXN0b21lcnMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDZ0M7QUFFN0QsTUFBTUUsWUFBWTtJQUNoQixNQUFNQyxlQUFlO1FBQ25CO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTUMsYUFBYTtRQUNqQjtZQUFFQyxNQUFNO1FBQU87UUFDZjtZQUFFQyxRQUFRO1FBQWU7UUFDekI7WUFBRUQsTUFBTTtRQUFXO1FBQ25CO1lBQUVBLE1BQU07UUFBVTtLQUNuQjtJQUVELE1BQU1FLFFBQVE7UUFDWjtZQUNFQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsY0FBYztZQUNkQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBO1lBQ0VKLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxjQUFjO1lBQ2RDLFVBQVU7WUFDVkMsU0FBUztRQUNYO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDZCxrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQW9COzs7Ozs7MEJBQy9CLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoQixrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQXVCOzs7Ozs7MEJBQ2xDLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoQixrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQTRCOzs7Ozs7MEJBQ3ZDLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoQixrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQThCOzs7Ozs7MEJBQ3pDLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoQixrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQXFDOzs7Ozs7MEJBQ2hELDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoQixrREFBSUE7Z0JBQUNlLE1BQUs7MEJBQWdDOzs7Ozs7MEJBRTNDLDhEQUFDZCxrRUFBY0E7Z0JBQ2JNLE9BQU9BO2dCQUNQSCxZQUFZQTtnQkFDWkQsY0FBY0E7Z0JBQ2RjLE1BQUs7Ozs7Ozs7Ozs7OztBQUliO0FBRUEsK0RBQWVmLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzL2luZGV4LnRzeD8zY2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb21wb25lbnRUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lbGVtZW50cy90YWJsZVwiO1xuXG5jb25zdCBjdXN0b21lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRIZWFkZXJJdGVtcyA9IFtcbiAgICBcIumhp+WuouWQjVwiLFxuICAgIFwi6Zu76Kmx55Wq5Y+3XCIsXG4gICAgXCLlvbnogbdcIixcbiAgICBcIuS9j+aJgFwiLFxuICAgIFwi5YmK6ZmkXCIsXG4gICAgXCLmmYLplpPnrqHnkIZcIixcbiAgXTtcblxuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJuYW1lXCIgfSxcbiAgICB7IG51bWJlcjogXCJwaG9uZV9udW1iZXJcIiB9LFxuICAgIHsgdGV4dDogXCJwb3NpdGlvblwiIH0sXG4gICAgeyB0ZXh0OiBcImFkZHJlc3NcIiB9LFxuICBdO1xuXG4gIGNvbnN0IG5vZGVzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogXCLnlLDkuK3lpKrpg45cIixcbiAgICAgIHBob25lX251bWJlcjogXCIwMDAxMTExMjIyMlwiLFxuICAgICAgcG9zaXRpb246IFwi44Kq44O844OK44O8XCIsXG4gICAgICBhZGRyZXNzOiBcIuadseS6rOmDvea4r+WMujItMi0yMiAyMDhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCLnlLDkuK3mrKHpg45cIixcbiAgICAgIHBob25lX251bWJlcjogXCIwMDAxMTExMzMzM1wiLFxuICAgICAgcG9zaXRpb246IFwi56S+5ZOhXCIsXG4gICAgICBhZGRyZXNzOiBcIuadseS6rOmDvea4r+WMujItMi0yMiAyMDZcIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q3VzdG9tZXJzPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXJzL2NyZWF0ZVwiPuaWsOimj+S9nOaIkDwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdP2lkPTFcIj7oqbPntLA8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9lZGl0P2lkPTFcIj7nt6jpm4Y8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9kZWxldGU/aWQ9MVwiPuWJiumZpDwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdL3NlYXJjaD9pZD1jdXN0b21lclwiPuaknOe0ojwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdL3NjaGVkdWxlP2lkPTFcIj7kuojntIQ8L0xpbms+XG5cbiAgICAgIDxDb21wb25lbnRUYWJsZVxuICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgIG5vZGVzUHJvcHM9e25vZGVzUHJvcHN9XG4gICAgICAgIHRIZWFkZXJJdGVtcz17dEhlYWRlckl0ZW1zfVxuICAgICAgICBsaW5rPVwiL2N1c3RvbWVyc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tZXJzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsImN1c3RvbWVycyIsInRIZWFkZXJJdGVtcyIsIm5vZGVzUHJvcHMiLCJ0ZXh0IiwibnVtYmVyIiwibm9kZXMiLCJpZCIsIm5hbWUiLCJwaG9uZV9udW1iZXIiLCJwb3NpdGlvbiIsImFkZHJlc3MiLCJkaXYiLCJoMSIsImhyZWYiLCJiciIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customers/index.tsx\n"));

/***/ })

});