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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_stocks_stockSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/stocks/stockSlice */ \"./store/stocks/stockSlice.ts\");\n/* harmony import */ var _store_stocks_stock_categories_stock_categorySlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/stocks/stock_categories/stock_categorySlice */ \"./store/stocks/stock_categories/stock_categorySlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst stocks = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        try {\n            dispatch((0,_store_stocks_stockSlice__WEBPACK_IMPORTED_MODULE_4__.getStock)({}));\n            dispatch((0,_store_stocks_stock_categories_stock_categorySlice__WEBPACK_IMPORTED_MODULE_5__.getStockCategory)({}));\n        } catch (error) {\n            console.log(error);\n        } finally{\n            console.log(\"ストック、ストックカテゴリー取得！！\");\n        }\n    }, [\n        dispatch\n    ]);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.stock.loading);\n    const message = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.stock.message);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.stock.error);\n    const stocks = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.stock.stocks);\n    console.log(stocks);\n    const stockCategories = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.stock_category.stock_category);\n    console.log(stockCategories);\n    const searchItems = [\n        {\n            key: \"category_name\",\n            value: \"在庫カテゴリ\"\n        },\n        {\n            key: \"product_name\",\n            value: \"商品名\"\n        },\n        {\n            key: \"product_price\",\n            value: \"価格\"\n        },\n        {\n            key: \"quantity\",\n            value: \"数量\"\n        },\n        {\n            key: \"remarks\",\n            value: \"備考\"\n        },\n        {\n            key: \"supplier\",\n            value: \"仕入れ先\"\n        }\n    ];\n    //コースカテゴリをとってきて、nosesPropsに追加する\n    const tHeaderItems = [\n        \"在庫カテゴリ\",\n        \"商品名\",\n        \"価格\",\n        \"数量\",\n        \"備考\",\n        \"仕入れ先\",\n        \"更新日\",\n        \"編集\",\n        \"削除\"\n    ];\n    const nodesProps = [\n        {\n            text: \"category_name\"\n        },\n        {\n            text: \"product_name\"\n        },\n        {\n            number: \"product_price\"\n        },\n        {\n            number: \"quantity\"\n        },\n        {\n            text: \"remarks\"\n        },\n        {\n            text: \"supplier\"\n        },\n        {\n            date: \"updated_at\"\n        }\n    ];\n    //stocksのstock_category_idとstockCategoriesのidが一致するものをnodesに追加する\n    const nodes = [\n        ...stocks.map((stock)=>{\n            const categoryAndStock = stockCategories.find((category)=>category.id === stock.stock_category_id);\n            return {\n                id: stock.id,\n                category_name: (categoryAndStock === null || categoryAndStock === void 0 ? void 0 : categoryAndStock.category) || \"\",\n                product_name: stock.product_name,\n                product_price: stock.product_price,\n                quantity: stock.quantity,\n                remarks: stock.remarks,\n                supplier: stock.supplier,\n                updated_at: stock.updated_at\n            };\n        })\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-6xl px-4 \",\n        children: [\n            message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"py-4 text-blue-700\",\n                children: message\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"py-4 text-red-700\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/stocks/create\",\n                        children: \"新規作成\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/stock_categories\",\n                        children: \"カテゴリ画面\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                searchItems: searchItems,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/stocks\",\n                isLoading: loading\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/stocks/index.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(stocks, \"Dy7jdOrHsiJ+jV3ZeHOGARoJB2M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (stocks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7Ozs7OztrQ0FDNUIsOERBQUMzQyxrREFBSUE7d0JBQUMyQyxNQUFLO2tDQUFvQjs7Ozs7Ozs7Ozs7O1lBRWhDL0Isd0JBQ0MsOERBQUM4QjswQkFBRTs7Ozs7MENBRUgsOERBQUN6QyxrRUFBY0E7Z0JBQ2J5QixPQUFPQTtnQkFDUFIsYUFBYUE7Z0JBQ2JJLFlBQVlBO2dCQUNaRCxjQUFjQTtnQkFDZHVCLE1BQUs7Z0JBQ0xDLFdBQVdqQzs7Ozs7Ozs7Ozs7O0FBS3JCO0dBekdNTDs7UUFDYUwsb0RBQVdBO1FBWVpDLG9EQUFXQTtRQUVYQSxvREFBV0E7UUFFYkEsb0RBQVdBO1FBRVZBLG9EQUFXQTtRQUdGQSxvREFBV0E7OztBQXFGckMsK0RBQWVJLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvY2tzL2luZGV4LnRzeD9hOGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb21wb25lbnRUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lbGVtZW50cy90YWJsZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFN0b2NrIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b2Nrcy9zdG9ja1NsaWNlXCI7XG5pbXBvcnQgeyBnZXRTdG9ja0NhdGVnb3J5IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b2Nrcy9zdG9ja19jYXRlZ29yaWVzL3N0b2NrX2NhdGVnb3J5U2xpY2VcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuXG5jb25zdCBzdG9ja3M6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKGdldFN0b2NrKHt9KSBhcyBhbnkpO1xuICAgICAgZGlzcGF0Y2goZ2V0U3RvY2tDYXRlZ29yeSh7fSkgYXMgYW55KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuOCueODiOODg+OCr+OAgeOCueODiOODg+OCr+OCq+ODhuOCtOODquODvOWPluW+l++8ge+8gVwiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc3RvY2subG9hZGluZyk7XG5cbiAgY29uc3QgbWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zdG9jay5tZXNzYWdlKTtcblxuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zdG9jay5lcnJvcik7XG5cbiAgY29uc3Qgc3RvY2tzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnN0b2NrLnN0b2Nrcyk7XG4gIGNvbnNvbGUubG9nKHN0b2Nrcyk7XG5cbiAgY29uc3Qgc3RvY2tDYXRlZ29yaWVzID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnN0b2NrX2NhdGVnb3J5LnN0b2NrX2NhdGVnb3J5XG4gICk7XG4gIGNvbnNvbGUubG9nKHN0b2NrQ2F0ZWdvcmllcyk7XG5cbiAgY29uc3Qgc2VhcmNoSXRlbXMgPSBbXG4gICAgeyBrZXk6IFwiY2F0ZWdvcnlfbmFtZVwiLCB2YWx1ZTogXCLlnKjluqvjgqvjg4bjgrTjg6pcIiB9LFxuICAgIHsga2V5OiBcInByb2R1Y3RfbmFtZVwiLCB2YWx1ZTogXCLllYblk4HlkI1cIiB9LFxuICAgIHsga2V5OiBcInByb2R1Y3RfcHJpY2VcIiwgdmFsdWU6IFwi5L6h5qC8XCIgfSxcbiAgICB7IGtleTogXCJxdWFudGl0eVwiLCB2YWx1ZTogXCLmlbDph49cIiB9LFxuICAgIHsga2V5OiBcInJlbWFya3NcIiwgdmFsdWU6IFwi5YKZ6ICDXCIgfSxcbiAgICB7IGtleTogXCJzdXBwbGllclwiLCB2YWx1ZTogXCLku5XlhaXjgozlhYhcIiB9LFxuICBdO1xuXG4gIC8v44Kz44O844K544Kr44OG44K044Oq44KS44Go44Gj44Gm44GN44Gm44CBbm9zZXNQcm9wc+OBq+i/veWKoOOBmeOCi1xuXG4gIGNvbnN0IHRIZWFkZXJJdGVtcyA9IFtcbiAgICBcIuWcqOW6q+OCq+ODhuOCtOODqlwiLFxuICAgIFwi5ZWG5ZOB5ZCNXCIsXG4gICAgXCLkvqHmoLxcIixcbiAgICBcIuaVsOmHj1wiLFxuICAgIFwi5YKZ6ICDXCIsXG4gICAgXCLku5XlhaXjgozlhYhcIixcbiAgICBcIuabtOaWsOaXpVwiLFxuICAgIFwi57eo6ZuGXCIsXG4gICAgXCLliYrpmaRcIixcbiAgXTtcblxuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJjYXRlZ29yeV9uYW1lXCIgfSxcbiAgICB7IHRleHQ6IFwicHJvZHVjdF9uYW1lXCIgfSxcbiAgICB7IG51bWJlcjogXCJwcm9kdWN0X3ByaWNlXCIgfSxcbiAgICB7IG51bWJlcjogXCJxdWFudGl0eVwiIH0sXG4gICAgeyB0ZXh0OiBcInJlbWFya3NcIiB9LFxuICAgIHsgdGV4dDogXCJzdXBwbGllclwiIH0sXG4gICAgeyBkYXRlOiBcInVwZGF0ZWRfYXRcIiB9LFxuICBdO1xuXG4gIC8vc3RvY2tz44Guc3RvY2tfY2F0ZWdvcnlfaWTjgahzdG9ja0NhdGVnb3JpZXPjga5pZOOBjOS4gOiHtOOBmeOCi+OCguOBruOCkm5vZGVz44Gr6L+95Yqg44GZ44KLXG4gIGNvbnN0IG5vZGVzID0gW1xuICAgIC4uLnN0b2Nrcy5tYXAoKHN0b2NrKSA9PiB7XG4gICAgICBjb25zdCBjYXRlZ29yeUFuZFN0b2NrID0gc3RvY2tDYXRlZ29yaWVzLmZpbmQoXG4gICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuaWQgPT09IHN0b2NrLnN0b2NrX2NhdGVnb3J5X2lkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHN0b2NrLmlkLFxuICAgICAgICBjYXRlZ29yeV9uYW1lOiBjYXRlZ29yeUFuZFN0b2NrPy5jYXRlZ29yeSB8fCBcIlwiLFxuICAgICAgICBwcm9kdWN0X25hbWU6IHN0b2NrLnByb2R1Y3RfbmFtZSxcbiAgICAgICAgcHJvZHVjdF9wcmljZTogc3RvY2sucHJvZHVjdF9wcmljZSxcbiAgICAgICAgcXVhbnRpdHk6IHN0b2NrLnF1YW50aXR5LFxuICAgICAgICByZW1hcmtzOiBzdG9jay5yZW1hcmtzLFxuICAgICAgICBzdXBwbGllcjogc3RvY2suc3VwcGxpZXIsXG4gICAgICAgIHVwZGF0ZWRfYXQ6IHN0b2NrLnVwZGF0ZWRfYXQsXG4gICAgICB9O1xuICAgIH0pLFxuXG4gICAgLy8g5LuW44Gu6KGM44OH44O844K/44KC44GT44GT44Gr6L+95Yqg44GZ44KLXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTZ4bCBweC00IFwiPlxuICAgICAge21lc3NhZ2UgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTQgdGV4dC1ibHVlLTcwMFwiPnttZXNzYWdlfTwvcD5cbiAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNCB0ZXh0LXJlZC03MDBcIj57ZXJyb3J9PC9wPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IG1iLTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zdG9ja3MvY3JlYXRlXCI+5paw6KaP5L2c5oiQPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3N0b2NrX2NhdGVnb3JpZXNcIj7jgqvjg4bjgrTjg6rnlLvpnaI8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbXBvbmVudFRhYmxlXG4gICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgIHNlYXJjaEl0ZW1zPXtzZWFyY2hJdGVtc31cbiAgICAgICAgICBub2Rlc1Byb3BzPXtub2Rlc1Byb3BzfVxuICAgICAgICAgIHRIZWFkZXJJdGVtcz17dEhlYWRlckl0ZW1zfVxuICAgICAgICAgIGxpbms9XCIvc3RvY2tzXCJcbiAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvY2tzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJnZXRTdG9jayIsImdldFN0b2NrQ2F0ZWdvcnkiLCJzdG9ja3MiLCJkaXNwYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvYWRpbmciLCJzdGF0ZSIsInN0b2NrIiwibWVzc2FnZSIsInN0b2NrQ2F0ZWdvcmllcyIsInN0b2NrX2NhdGVnb3J5Iiwic2VhcmNoSXRlbXMiLCJrZXkiLCJ2YWx1ZSIsInRIZWFkZXJJdGVtcyIsIm5vZGVzUHJvcHMiLCJ0ZXh0IiwibnVtYmVyIiwiZGF0ZSIsIm5vZGVzIiwibWFwIiwiY2F0ZWdvcnlBbmRTdG9jayIsImZpbmQiLCJjYXRlZ29yeSIsImlkIiwic3RvY2tfY2F0ZWdvcnlfaWQiLCJjYXRlZ29yeV9uYW1lIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9wcmljZSIsInF1YW50aXR5IiwicmVtYXJrcyIsInN1cHBsaWVyIiwidXBkYXRlZF9hdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwibGluayIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stocks/index.tsx\n"));

/***/ })

});