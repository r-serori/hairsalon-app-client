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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n\n\n\nconst customers = ()=>{\n    const customers = [\n        {\n            id: 1,\n            name: \"田中太郎\",\n            phone_number: \"00011112222\",\n            remarks: \"初めての来店\",\n            new_customer: \"新規\",\n            updated_at: \"2024-01-01\"\n        },\n        {\n            id: 2,\n            name: \"田中次郎\",\n            phone_number: \"00011113333\",\n            remarks: \"前回カット\",\n            new_customer: \"既存\",\n            updated_at: \"2024-01-01\"\n        }\n    ];\n    const customer_courses = [\n        {\n            customers_id: 1,\n            courses_id: 1\n        },\n        {\n            customers_id: 1,\n            courses_id: 2\n        },\n        {\n            customers_id: 2,\n            courses_id: 1\n        },\n        {\n            customers_id: 2,\n            courses_id: 2\n        }\n    ];\n    const customer_options = [\n        {\n            customers_id: 1,\n            options_id: 1\n        },\n        {\n            customers_id: 2,\n            options_id: 2\n        }\n    ];\n    const customer_merchandises = [\n        {\n            customers_id: 1,\n            merchandises_id: 1\n        },\n        {\n            customers_id: 2,\n            merchandises_id: 2\n        }\n    ];\n    const customer_hairstyles = [\n        {\n            customers_id: 1,\n            hairstyles_id: 1\n        },\n        {\n            customers_id: 2,\n            hairstyles_id: 2\n        }\n    ];\n    const customer_attendances = [\n        {\n            customers_id: 1,\n            attendances_id: 1\n        },\n        {\n            customers_id: 2,\n            attendances_id: 2\n        }\n    ];\n    const courses = [\n        {\n            id: 1,\n            course_name: \"カット\",\n            price: 3000\n        },\n        {\n            id: 2,\n            course_name: \"カラー\",\n            price: 5000\n        }\n    ];\n    const options = [\n        {\n            id: 1,\n            option_name: \"トリートメント\",\n            price: 1000\n        },\n        {\n            id: 2,\n            option_name: \"パーマ\",\n            price: 5000\n        }\n    ];\n    const merchandises = [\n        {\n            id: 1,\n            product_name: \"シャンプー\",\n            product_price: 2000\n        },\n        {\n            id: 2,\n            product_name: \"コンディショナー\",\n            product_price: 2000\n        }\n    ];\n    const hairstyles = [\n        {\n            id: 1,\n            hairstyle_name: \"ショート\"\n        },\n        {\n            id: 2,\n            hairstyle_name: \"ロング\"\n        }\n    ];\n    const attendances = [\n        {\n            id: 1,\n            attendance_name: \"田中店長\"\n        },\n        {\n            id: 2,\n            attendance_name: \"太郎社長\"\n        }\n    ];\n    const tHeaderItems = [\n        \"顧客名\",\n        \"電話番号\",\n        \"備考\",\n        \"新規or既存\",\n        \"更新日\",\n        \"編集\",\n        \"削除\"\n    ];\n    const nodesProps = [\n        {\n            text: \"name\"\n        },\n        {\n            number: \"phone_number\"\n        },\n        {\n            text: \"remarks\"\n        },\n        {\n            text: \"new_customer\"\n        },\n        {\n            date: \"updated_at\"\n        }\n    ];\n    const nodes = [\n        ...customers.map((customer)=>{\n            const customerOfCourse = customer_courses.find((course_customer)=>course_customer.customers_id === customer.id);\n            const course = courses.find((course)=>course.id === customerOfCourse.courses_id);\n            return {\n                id: customer.id,\n                name: customer.name,\n                phone_number: customer.phone_number,\n                remarks: customer.remarks,\n                new_customer: customer.new_customer,\n                course_name: course.course_name,\n                updated_at: customer.updated_at\n            };\n        })\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/create\",\n                children: \"新規作成\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 188,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]?id=1\",\n                children: \"詳細\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/edit?id=1\",\n                children: \"編集\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 194,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/delete?id=1\",\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/search?id=customer\",\n                children: \"検索\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/schedule?id=1\",\n                children: \"予約\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 203,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n        lineNumber: 186,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (customers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTbEMsWUFBWTtnQkFDbkNDLFNBQVNpQyxTQUFTakMsT0FBTztnQkFDekJDLGNBQWNnQyxTQUFTaEMsWUFBWTtnQkFDbkNjLGFBQWFzQixPQUFPdEIsV0FBVztnQkFDL0JiLFlBQVkrQixTQUFTL0IsVUFBVTtZQUNqQztRQUNGO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ29DOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQzdDLGtEQUFJQTtnQkFBQzhDLE1BQUs7MEJBQW9COzs7Ozs7MEJBQy9CLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUMvQyxrREFBSUE7Z0JBQUM4QyxNQUFLOzBCQUF1Qjs7Ozs7OzBCQUNsQyw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDL0Msa0RBQUlBO2dCQUFDOEMsTUFBSzswQkFBNEI7Ozs7OzswQkFDdkMsOERBQUNDOzs7OzswQkFFRCw4REFBQy9DLGtEQUFJQTtnQkFBQzhDLE1BQUs7MEJBQThCOzs7Ozs7MEJBQ3pDLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUMvQyxrREFBSUE7Z0JBQUM4QyxNQUFLOzBCQUFxQzs7Ozs7OzBCQUNoRCw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDL0Msa0RBQUlBO2dCQUFDOEMsTUFBSzswQkFBZ0M7Ozs7OzswQkFFM0MsOERBQUM3QyxrRUFBY0E7Z0JBQ2JvQyxPQUFPQTtnQkFDUEosWUFBWUE7Z0JBQ1pELGNBQWNBO2dCQUNkZ0IsTUFBSzs7Ozs7Ozs7Ozs7O0FBSWI7QUFFQSwrREFBZTlDLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJzL2luZGV4LnRzeD8zY2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb21wb25lbnRUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9lbGVtZW50cy90YWJsZVwiO1xuXG5jb25zdCBjdXN0b21lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGN1c3RvbWVycyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6IFwi55Sw5Lit5aSq6YOOXCIsXG4gICAgICBwaG9uZV9udW1iZXI6IFwiMDAwMTExMTIyMjJcIixcbiAgICAgIHJlbWFya3M6IFwi5Yid44KB44Gm44Gu5p2l5bqXXCIsXG4gICAgICBuZXdfY3VzdG9tZXI6IFwi5paw6KaPXCIsXG4gICAgICB1cGRhdGVkX2F0OiBcIjIwMjQtMDEtMDFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogXCLnlLDkuK3mrKHpg45cIixcbiAgICAgIHBob25lX251bWJlcjogXCIwMDAxMTExMzMzM1wiLFxuICAgICAgcmVtYXJrczogXCLliY3lm57jgqvjg4Pjg4hcIixcbiAgICAgIG5ld19jdXN0b21lcjogXCLml6LlrZhcIixcbiAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAyNC0wMS0wMVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY3VzdG9tZXJfY291cnNlcyA9IFtcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDEsXG4gICAgICBjb3Vyc2VzX2lkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgY3VzdG9tZXJzX2lkOiAxLFxuICAgICAgY291cnNlc19pZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMixcbiAgICAgIGNvdXJzZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBjb3Vyc2VzX2lkOiAyLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY3VzdG9tZXJfb3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDEsXG4gICAgICBvcHRpb25zX2lkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgY3VzdG9tZXJzX2lkOiAyLFxuICAgICAgb3B0aW9uc19pZDogMixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGN1c3RvbWVyX21lcmNoYW5kaXNlcyA9IFtcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDEsXG4gICAgICBtZXJjaGFuZGlzZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBtZXJjaGFuZGlzZXNfaWQ6IDIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjdXN0b21lcl9oYWlyc3R5bGVzID0gW1xuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMSxcbiAgICAgIGhhaXJzdHlsZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBoYWlyc3R5bGVzX2lkOiAyLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGN1c3RvbWVyX2F0dGVuZGFuY2VzID0gW1xuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMSxcbiAgICAgIGF0dGVuZGFuY2VzX2lkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgY3VzdG9tZXJzX2lkOiAyLFxuICAgICAgYXR0ZW5kYW5jZXNfaWQ6IDIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgY291cnNlX25hbWU6IFwi44Kr44OD44OIXCIsXG4gICAgICBwcmljZTogMzAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgY291cnNlX25hbWU6IFwi44Kr44Op44O8XCIsXG4gICAgICBwcmljZTogNTAwMCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBvcHRpb25fbmFtZTogXCLjg4jjg6rjg7zjg4jjg6Hjg7Pjg4hcIixcbiAgICAgIHByaWNlOiAxMDAwLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBvcHRpb25fbmFtZTogXCLjg5Hjg7zjg55cIixcbiAgICAgIHByaWNlOiA1MDAwLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgbWVyY2hhbmRpc2VzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcHJvZHVjdF9uYW1lOiBcIuOCt+ODo+ODs+ODl+ODvFwiLFxuICAgICAgcHJvZHVjdF9wcmljZTogMjAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcHJvZHVjdF9uYW1lOiBcIuOCs+ODs+ODh+OCo+OCt+ODp+ODiuODvFwiLFxuICAgICAgcHJvZHVjdF9wcmljZTogMjAwMCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhaXJzdHlsZXMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBoYWlyc3R5bGVfbmFtZTogXCLjgrfjg6fjg7zjg4hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaGFpcnN0eWxlX25hbWU6IFwi44Ot44Oz44KwXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBhdHRlbmRhbmNlcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGF0dGVuZGFuY2VfbmFtZTogXCLnlLDkuK3lupfplbdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgYXR0ZW5kYW5jZV9uYW1lOiBcIuWkqumDjuekvumVt1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgdEhlYWRlckl0ZW1zID0gW1xuICAgIFwi6aGn5a6i5ZCNXCIsXG4gICAgXCLpm7voqbHnlarlj7dcIixcbiAgICBcIuWCmeiAg1wiLFxuICAgIFwi5paw6KaPb3Lml6LlrZhcIixcbiAgICBcIuabtOaWsOaXpVwiLFxuICAgIFwi57eo6ZuGXCIsXG4gICAgXCLliYrpmaRcIixcbiAgXTtcblxuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJuYW1lXCIgfSxcbiAgICB7IG51bWJlcjogXCJwaG9uZV9udW1iZXJcIiB9LFxuICAgIHsgdGV4dDogXCJyZW1hcmtzXCIgfSxcbiAgICB7IHRleHQ6IFwibmV3X2N1c3RvbWVyXCIgfSxcbiAgICB7IGRhdGU6IFwidXBkYXRlZF9hdFwiIH0sXG4gIF07XG5cbiAgY29uc3Qgbm9kZXMgPSBbXG4gICAgLi4uY3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbWVyT2ZDb3Vyc2UgPSBjdXN0b21lcl9jb3Vyc2VzLmZpbmQoXG4gICAgICAgIChjb3Vyc2VfY3VzdG9tZXIpID0+IGNvdXJzZV9jdXN0b21lci5jdXN0b21lcnNfaWQgPT09IGN1c3RvbWVyLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgY291cnNlID0gY291cnNlcy5maW5kKFxuICAgICAgICAoY291cnNlKSA9PiBjb3Vyc2UuaWQgPT09IGN1c3RvbWVyT2ZDb3Vyc2UuY291cnNlc19pZFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGN1c3RvbWVyLmlkLFxuICAgICAgICBuYW1lOiBjdXN0b21lci5uYW1lLFxuICAgICAgICBwaG9uZV9udW1iZXI6IGN1c3RvbWVyLnBob25lX251bWJlcixcbiAgICAgICAgcmVtYXJrczogY3VzdG9tZXIucmVtYXJrcyxcbiAgICAgICAgbmV3X2N1c3RvbWVyOiBjdXN0b21lci5uZXdfY3VzdG9tZXIsXG4gICAgICAgIGNvdXJzZV9uYW1lOiBjb3Vyc2UuY291cnNlX25hbWUsXG4gICAgICAgIHVwZGF0ZWRfYXQ6IGN1c3RvbWVyLnVwZGF0ZWRfYXQsXG4gICAgICB9O1xuICAgIH0pLFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q3VzdG9tZXJzPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXJzL2NyZWF0ZVwiPuaWsOimj+S9nOaIkDwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdP2lkPTFcIj7oqbPntLA8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9lZGl0P2lkPTFcIj7nt6jpm4Y8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9kZWxldGU/aWQ9MVwiPuWJiumZpDwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdL3NlYXJjaD9pZD1jdXN0b21lclwiPuaknOe0ojwvTGluaz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9baWRdL3NjaGVkdWxlP2lkPTFcIj7kuojntIQ8L0xpbms+XG5cbiAgICAgIDxDb21wb25lbnRUYWJsZVxuICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgIG5vZGVzUHJvcHM9e25vZGVzUHJvcHN9XG4gICAgICAgIHRIZWFkZXJJdGVtcz17dEhlYWRlckl0ZW1zfVxuICAgICAgICBsaW5rPVwiL2N1c3RvbWVyc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tZXJzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb21wb25lbnRUYWJsZSIsImN1c3RvbWVycyIsImlkIiwibmFtZSIsInBob25lX251bWJlciIsInJlbWFya3MiLCJuZXdfY3VzdG9tZXIiLCJ1cGRhdGVkX2F0IiwiY3VzdG9tZXJfY291cnNlcyIsImN1c3RvbWVyc19pZCIsImNvdXJzZXNfaWQiLCJjdXN0b21lcl9vcHRpb25zIiwib3B0aW9uc19pZCIsImN1c3RvbWVyX21lcmNoYW5kaXNlcyIsIm1lcmNoYW5kaXNlc19pZCIsImN1c3RvbWVyX2hhaXJzdHlsZXMiLCJoYWlyc3R5bGVzX2lkIiwiY3VzdG9tZXJfYXR0ZW5kYW5jZXMiLCJhdHRlbmRhbmNlc19pZCIsImNvdXJzZXMiLCJjb3Vyc2VfbmFtZSIsInByaWNlIiwib3B0aW9ucyIsIm9wdGlvbl9uYW1lIiwibWVyY2hhbmRpc2VzIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9wcmljZSIsImhhaXJzdHlsZXMiLCJoYWlyc3R5bGVfbmFtZSIsImF0dGVuZGFuY2VzIiwiYXR0ZW5kYW5jZV9uYW1lIiwidEhlYWRlckl0ZW1zIiwibm9kZXNQcm9wcyIsInRleHQiLCJudW1iZXIiLCJkYXRlIiwibm9kZXMiLCJtYXAiLCJjdXN0b21lciIsImN1c3RvbWVyT2ZDb3Vyc2UiLCJmaW5kIiwiY291cnNlX2N1c3RvbWVyIiwiY291cnNlIiwiZGl2IiwiaDEiLCJocmVmIiwiYnIiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/customers/index.tsx\n"));

/***/ })

});