"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stocks",{

/***/ "./pages/stocks/index.tsx":
/*!********************************!*\
  !*** ./pages/stocks/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n\n\n\nconst stocks = ()=>{\n    //コースカテゴリをとってきて、nosesPropsに追加する\n    const stockCategories = [\n        {\n            id: 1,\n            category: \"整髪料\"\n        },\n        {\n            id: 2,\n            category: \"化粧品\"\n        }\n    ];\n    const stocks = [\n        {\n            id: 1,\n            product_name: \"ワックス\",\n            product_price: 1500,\n            quantity: 20,\n            remarks: \"ツヤ\",\n            supplier: \"資生堂\",\n            stock_category_id: 1,\n            updated_at: \"2024-01-01\"\n        },\n        {\n            id: 2,\n            product_name: \"化粧水\",\n            product_price: 2000,\n            quantity: 10,\n            remarks: \"保湿\",\n            supplier: \"資生堂\",\n            stock_category_id: 2,\n            updated_at: \"2024-01-01\"\n        }\n    ];\n    const tHeaderItems = [\n        \"在庫カテゴリ\",\n        \"商品名\",\n        \"価格\",\n        \"数量\",\n        \"備考\",\n        \"仕入れ先\",\n        \"更新日\",\n        \"編集\",\n        \"削除\"\n    ];\n    const nodesProps = [\n        {\n            text: \"category_name\"\n        },\n        {\n            text: \"product_name\"\n        },\n        {\n            number: \"product_price\"\n        },\n        {\n            number: \"quantity\"\n        },\n        {\n            text: \"remarks\"\n        },\n        {\n            text: \"supplier\"\n        },\n        {\n            date: \"updated_at \"\n        }\n    ];\n    //stocksのstock_category_idとstockCategoriesのidが一致するものをnodesに追加する\n    const nodes = [\n        ...stocks.map((stock)=>{\n            const categoryAndStock = stockCategories.find((category)=>category.id === stock.stock_category_id);\n            return {\n                id: stock.id,\n                category_name: categoryAndStock.category,\n                product_name: stock.product_name,\n                product_price: stock.product_price,\n                quantity: stock.quantity,\n                remarks: stock.remarks,\n                supplier: stock.supplier,\n                updated_at: stock.updated_at\n            };\n        })\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"stocks\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/stocks/create\",\n                children: \"新規作成\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/stocks/[id]/edit?id=1\",\n                children: \"編集\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/stocks/[id]/delete?id=1\",\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/stocks/[id]/search/[search_stock]?id=id&search_stock=search_stock\",\n                children: \"検索\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/stock_categories\",\n                children: \"カテゴリ画面\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/stocks\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (stocks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdG9ja3MvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDZ0M7QUFFN0QsTUFBTUUsU0FBbUI7SUFDdkIsK0JBQStCO0lBQy9CLE1BQU1DLGtCQUFrQjtRQUN0QjtZQUNFQyxJQUFJO1lBQ0pDLFVBQVU7UUFDWjtRQUNBO1lBQ0VELElBQUk7WUFDSkMsVUFBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNSCxTQUFTO1FBQ2I7WUFDRUUsSUFBSTtZQUNKRSxjQUFjO1lBQ2RDLGVBQWU7WUFDZkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsbUJBQW1CO1lBQ25CQyxZQUFZO1FBQ2Q7UUFDQTtZQUNFUixJQUFJO1lBQ0pFLGNBQWM7WUFDZEMsZUFBZTtZQUNmQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsVUFBVTtZQUNWQyxtQkFBbUI7WUFDbkJDLFlBQVk7UUFDZDtLQUNEO0lBRUQsTUFBTUMsZUFBZTtRQUNuQjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLGFBQWE7UUFDakI7WUFBRUMsTUFBTTtRQUFnQjtRQUN4QjtZQUFFQSxNQUFNO1FBQWU7UUFDdkI7WUFBRUMsUUFBUTtRQUFnQjtRQUMxQjtZQUFFQSxRQUFRO1FBQVc7UUFDckI7WUFBRUQsTUFBTTtRQUFVO1FBQ2xCO1lBQUVBLE1BQU07UUFBVztRQUNuQjtZQUFFRSxNQUFNO1FBQWM7S0FDdkI7SUFFRCwrREFBK0Q7SUFDL0QsTUFBTUMsUUFBUTtXQUNUaEIsT0FBT2lCLEdBQUcsQ0FBQyxDQUFDQztZQUNiLE1BQU1DLG1CQUFtQmxCLGdCQUFnQm1CLElBQUksQ0FDM0MsQ0FBQ2pCLFdBQWFBLFNBQVNELEVBQUUsS0FBS2dCLE1BQU1ULGlCQUFpQjtZQUV2RCxPQUFPO2dCQUNMUCxJQUFJZ0IsTUFBTWhCLEVBQUU7Z0JBQ1ptQixlQUFlRixpQkFBaUJoQixRQUFRO2dCQUN4Q0MsY0FBY2MsTUFBTWQsWUFBWTtnQkFDaENDLGVBQWVhLE1BQU1iLGFBQWE7Z0JBQ2xDQyxVQUFVWSxNQUFNWixRQUFRO2dCQUN4QkMsU0FBU1csTUFBTVgsT0FBTztnQkFDdEJDLFVBQVVVLE1BQU1WLFFBQVE7Z0JBQ3hCRSxZQUFZUSxNQUFNUixVQUFVO1lBQzlCO1FBQ0Y7S0FHRDtJQUNELHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUN6QixrREFBSUE7Z0JBQUMwQixNQUFLOzBCQUFpQjs7Ozs7OzBCQUM1Qiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDM0Isa0RBQUlBO2dCQUFDMEIsTUFBSzswQkFBeUI7Ozs7OzswQkFDcEMsOERBQUNDOzs7OzswQkFDRCw4REFBQzNCLGtEQUFJQTtnQkFBQzBCLE1BQUs7MEJBQTJCOzs7Ozs7MEJBQ3RDLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUMzQixrREFBSUE7Z0JBQUMwQixNQUFLOzBCQUFxRTs7Ozs7OzBCQUdoRiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDM0Isa0RBQUlBO2dCQUFDMEIsTUFBSzswQkFBb0I7Ozs7OzswQkFFL0IsOERBQUNDOzs7OzswQkFFRCw4REFBQzFCLGtFQUFjQTtnQkFDYmlCLE9BQU9BO2dCQUNQSixZQUFZQTtnQkFDWkQsY0FBY0E7Z0JBQ2RlLE1BQUs7Ozs7Ozs7Ozs7OztBQUliO0FBRUEsK0RBQWUxQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0b2Nrcy9pbmRleC50c3g/YThiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ29tcG9uZW50VGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZWxlbWVudHMvdGFibGVcIjtcblxuY29uc3Qgc3RvY2tzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy/jgrPjg7zjgrnjgqvjg4bjgrTjg6rjgpLjgajjgaPjgabjgY3jgabjgIFub3Nlc1Byb3Bz44Gr6L+95Yqg44GZ44KLXG4gIGNvbnN0IHN0b2NrQ2F0ZWdvcmllcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGNhdGVnb3J5OiBcIuaVtOmrquaWmVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBjYXRlZ29yeTogXCLljJbnsqflk4FcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHN0b2NrcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHByb2R1Y3RfbmFtZTogXCLjg6/jg4Pjgq/jgrlcIixcbiAgICAgIHByb2R1Y3RfcHJpY2U6IDE1MDAsXG4gICAgICBxdWFudGl0eTogMjAsXG4gICAgICByZW1hcmtzOiBcIuODhOODpFwiLFxuICAgICAgc3VwcGxpZXI6IFwi6LOH55Sf5aCCXCIsXG4gICAgICBzdG9ja19jYXRlZ29yeV9pZDogMSxcbiAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAyNC0wMS0wMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBwcm9kdWN0X25hbWU6IFwi5YyW57Kn5rC0XCIsXG4gICAgICBwcm9kdWN0X3ByaWNlOiAyMDAwLFxuICAgICAgcXVhbnRpdHk6IDEwLFxuICAgICAgcmVtYXJrczogXCLkv53mub9cIixcbiAgICAgIHN1cHBsaWVyOiBcIuizh+eUn+WgglwiLFxuICAgICAgc3RvY2tfY2F0ZWdvcnlfaWQ6IDIsXG4gICAgICB1cGRhdGVkX2F0OiBcIjIwMjQtMDEtMDFcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHRIZWFkZXJJdGVtcyA9IFtcbiAgICBcIuWcqOW6q+OCq+ODhuOCtOODqlwiLFxuICAgIFwi5ZWG5ZOB5ZCNXCIsXG4gICAgXCLkvqHmoLxcIixcbiAgICBcIuaVsOmHj1wiLFxuICAgIFwi5YKZ6ICDXCIsXG4gICAgXCLku5XlhaXjgozlhYhcIixcbiAgICBcIuabtOaWsOaXpVwiLFxuICAgIFwi57eo6ZuGXCIsXG4gICAgXCLliYrpmaRcIixcbiAgXTtcblxuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJjYXRlZ29yeV9uYW1lXCIgfSxcbiAgICB7IHRleHQ6IFwicHJvZHVjdF9uYW1lXCIgfSxcbiAgICB7IG51bWJlcjogXCJwcm9kdWN0X3ByaWNlXCIgfSxcbiAgICB7IG51bWJlcjogXCJxdWFudGl0eVwiIH0sXG4gICAgeyB0ZXh0OiBcInJlbWFya3NcIiB9LFxuICAgIHsgdGV4dDogXCJzdXBwbGllclwiIH0sXG4gICAgeyBkYXRlOiBcInVwZGF0ZWRfYXQgXCIgfSxcbiAgXTtcblxuICAvL3N0b2Nrc+OBrnN0b2NrX2NhdGVnb3J5X2lk44Goc3RvY2tDYXRlZ29yaWVz44GuaWTjgYzkuIDoh7TjgZnjgovjgoLjga7jgpJub2Rlc+OBq+i/veWKoOOBmeOCi1xuICBjb25zdCBub2RlcyA9IFtcbiAgICAuLi5zdG9ja3MubWFwKChzdG9jaykgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnlBbmRTdG9jayA9IHN0b2NrQ2F0ZWdvcmllcy5maW5kKFxuICAgICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmlkID09PSBzdG9jay5zdG9ja19jYXRlZ29yeV9pZFxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBzdG9jay5pZCxcbiAgICAgICAgY2F0ZWdvcnlfbmFtZTogY2F0ZWdvcnlBbmRTdG9jay5jYXRlZ29yeSxcbiAgICAgICAgcHJvZHVjdF9uYW1lOiBzdG9jay5wcm9kdWN0X25hbWUsXG4gICAgICAgIHByb2R1Y3RfcHJpY2U6IHN0b2NrLnByb2R1Y3RfcHJpY2UsXG4gICAgICAgIHF1YW50aXR5OiBzdG9jay5xdWFudGl0eSxcbiAgICAgICAgcmVtYXJrczogc3RvY2sucmVtYXJrcyxcbiAgICAgICAgc3VwcGxpZXI6IHN0b2NrLnN1cHBsaWVyLFxuICAgICAgICB1cGRhdGVkX2F0OiBzdG9jay51cGRhdGVkX2F0LFxuICAgICAgfTtcbiAgICB9KSxcblxuICAgIC8vIOS7luOBruihjOODh+ODvOOCv+OCguOBk+OBk+OBq+i/veWKoOOBmeOCi1xuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+c3RvY2tzPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc3RvY2tzL2NyZWF0ZVwiPuaWsOimj+S9nOaIkDwvTGluaz5cbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgaHJlZj1cIi9zdG9ja3MvW2lkXS9lZGl0P2lkPTFcIj7nt6jpm4Y8L0xpbms+XG4gICAgICA8YnIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc3RvY2tzL1tpZF0vZGVsZXRlP2lkPTFcIj7liYrpmaQ8L0xpbms+XG4gICAgICA8YnIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc3RvY2tzL1tpZF0vc2VhcmNoL1tzZWFyY2hfc3RvY2tdP2lkPWlkJnNlYXJjaF9zdG9jaz1zZWFyY2hfc3RvY2tcIj5cbiAgICAgICAg5qSc57SiXG4gICAgICA8L0xpbms+XG4gICAgICA8YnIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvc3RvY2tfY2F0ZWdvcmllc1wiPuOCq+ODhuOCtOODqueUu+mdojwvTGluaz5cblxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxDb21wb25lbnRUYWJsZVxuICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgIG5vZGVzUHJvcHM9e25vZGVzUHJvcHN9XG4gICAgICAgIHRIZWFkZXJJdGVtcz17dEhlYWRlckl0ZW1zfVxuICAgICAgICBsaW5rPVwiL3N0b2Nrc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvY2tzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsInN0b2NrcyIsInN0b2NrQ2F0ZWdvcmllcyIsImlkIiwiY2F0ZWdvcnkiLCJwcm9kdWN0X25hbWUiLCJwcm9kdWN0X3ByaWNlIiwicXVhbnRpdHkiLCJyZW1hcmtzIiwic3VwcGxpZXIiLCJzdG9ja19jYXRlZ29yeV9pZCIsInVwZGF0ZWRfYXQiLCJ0SGVhZGVySXRlbXMiLCJub2Rlc1Byb3BzIiwidGV4dCIsIm51bWJlciIsImRhdGUiLCJub2RlcyIsIm1hcCIsInN0b2NrIiwiY2F0ZWdvcnlBbmRTdG9jayIsImZpbmQiLCJjYXRlZ29yeV9uYW1lIiwiZGl2IiwiaDEiLCJocmVmIiwiYnIiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/stocks/index.tsx\n"));

/***/ })

});