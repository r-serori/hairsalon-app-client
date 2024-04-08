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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_elements_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/elements/table */ \"./components/elements/table/index.tsx\");\n\n\n\nconst customers = ()=>{\n    const customers = [\n        {\n            id: 1,\n            name: \"田中太郎\",\n            phone_number: \"00011112222\",\n            remarks: \"初めての来店\",\n            new_customer: \"新規\",\n            updated_at: \"2024-01-01\"\n        },\n        {\n            id: 2,\n            name: \"田中次郎\",\n            phone_number: \"00011113333\",\n            remarks: \"前回カット\",\n            new_customer: \"既存\",\n            updated_at: \"2024-01-01\"\n        }\n    ];\n    const customer_courses = [\n        {\n            customers_id: 1,\n            courses_id: 1\n        },\n        {\n            customers_id: 2,\n            courses_id: 2\n        }\n    ];\n    const customer_options = [\n        {\n            customers_id: 1,\n            options_id: 1\n        },\n        {\n            customers_id: 2,\n            options_id: 2\n        }\n    ];\n    const customer_merchandises = [\n        {\n            customers_id: 1,\n            merchandises_id: 1\n        },\n        {\n            customers_id: 2,\n            merchandises_id: 2\n        }\n    ];\n    const customer_hairstyles = [\n        {\n            customers_id: 1,\n            hairstyles_id: 1\n        },\n        {\n            customers_id: 2,\n            hairstyles_id: 2\n        }\n    ];\n    const customer_attendances = [\n        {\n            customers_id: 1,\n            attendances_id: 1\n        },\n        {\n            customers_id: 2,\n            attendances_id: 2\n        }\n    ];\n    const courses = [\n        {\n            id: 1,\n            course_name: \"カット\",\n            price: 3000\n        },\n        {\n            id: 2,\n            course_name: \"カラー\",\n            price: 5000\n        }\n    ];\n    const options = [\n        {\n            id: 1,\n            option_name: \"トリートメント\",\n            price: 1000\n        },\n        {\n            id: 2,\n            option_name: \"パーマ\",\n            price: 5000\n        }\n    ];\n    const merchandises = [\n        {\n            id: 1,\n            product_name: \"シャンプー\",\n            product_price: 2000\n        },\n        {\n            id: 2,\n            product_name: \"コンディショナー\",\n            product_price: 2000\n        }\n    ];\n    const hairstyles = [\n        {\n            id: 1,\n            hairstyle_name: \"ショート\"\n        },\n        {\n            id: 2,\n            hairstyle_name: \"ロング\"\n        }\n    ];\n    const attendances = [\n        {\n            id: 1,\n            attendance_name: \"田中店長\"\n        },\n        {\n            id: 2,\n            attendance_name: \"太郎社長\"\n        }\n    ];\n    const tHeaderItems = [\n        \"顧客名\",\n        \"電話番号\",\n        \"備考\",\n        \"新規or既存\",\n        \"更新日\",\n        \"編集\",\n        \"削除\"\n    ];\n    const nodesProps = [\n        {\n            text: \"name\"\n        },\n        {\n            number: \"phone_number\"\n        },\n        {\n            text: \"remarks\"\n        },\n        {\n            text: \"new_customer\"\n        },\n        {\n            date: \"updated_at\"\n        }\n    ];\n    const nodes = [\n        ...customers.map((customer)=>{\n            const customerOfCourse = customer_courses.find((course_customer)=>course_customer.customers_id === customer.id);\n            const course = courses.find((course)=>course.id === customerOfCourse.courses_id);\n            return {\n                id: customer.id,\n                name: customer.name,\n                phone_number: customer.phone_number,\n                remarks: customer.remarks,\n                new_customer: customer.new_customer,\n                cosurse_name: course.course_name,\n                updated_at: customer.updated_at\n            };\n        })\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/create\",\n                children: \"新規作成\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]?id=1\",\n                children: \"詳細\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/edit?id=1\",\n                children: \"編集\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/delete?id=1\",\n                children: \"削除\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/search?id=customer\",\n                children: \"検索\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/customers/[id]/schedule?id=1\",\n                children: \"予約\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nodes: nodes,\n                nodesProps: nodesProps,\n                tHeaderItems: tHeaderItems,\n                link: \"/customers\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n                lineNumber: 197,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hairsalon-app/client/app/pages/customers/index.tsx\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (customers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZO2dCQUNuQ3FDLGNBQWNELE9BQU90QixXQUFXO2dCQUNoQ2IsWUFBWStCLFNBQVMvQixVQUFVO1lBQ2pDO1FBQ0Y7S0FDRDtJQUNELHFCQUNFLDhEQUFDcUM7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDOUMsa0RBQUlBO2dCQUFDK0MsTUFBSzswQkFBb0I7Ozs7OzswQkFDL0IsOERBQUNDOzs7OzswQkFFRCw4REFBQ2hELGtEQUFJQTtnQkFBQytDLE1BQUs7MEJBQXVCOzs7Ozs7MEJBQ2xDLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoRCxrREFBSUE7Z0JBQUMrQyxNQUFLOzBCQUE0Qjs7Ozs7OzBCQUN2Qyw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDaEQsa0RBQUlBO2dCQUFDK0MsTUFBSzswQkFBOEI7Ozs7OzswQkFDekMsOERBQUNDOzs7OzswQkFFRCw4REFBQ2hELGtEQUFJQTtnQkFBQytDLE1BQUs7MEJBQXFDOzs7Ozs7MEJBQ2hELDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNoRCxrREFBSUE7Z0JBQUMrQyxNQUFLOzBCQUFnQzs7Ozs7OzBCQUUzQyw4REFBQzlDLGtFQUFjQTtnQkFDYm9DLE9BQU9BO2dCQUNQSixZQUFZQTtnQkFDWkQsY0FBY0E7Z0JBQ2RpQixNQUFLOzs7Ozs7Ozs7Ozs7QUFJYjtBQUVBLCtEQUFlL0MsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jdXN0b21lcnMvaW5kZXgudHN4PzNjZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvbXBvbmVudFRhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2VsZW1lbnRzL3RhYmxlXCI7XG5cbmNvbnN0IGN1c3RvbWVycyA9ICgpID0+IHtcbiAgY29uc3QgY3VzdG9tZXJzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogXCLnlLDkuK3lpKrpg45cIixcbiAgICAgIHBob25lX251bWJlcjogXCIwMDAxMTExMjIyMlwiLFxuICAgICAgcmVtYXJrczogXCLliJ3jgoHjgabjga7mnaXlupdcIixcbiAgICAgIG5ld19jdXN0b21lcjogXCLmlrDopo9cIixcbiAgICAgIHVwZGF0ZWRfYXQ6IFwiMjAyNC0wMS0wMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiBcIueUsOS4reasoemDjlwiLFxuICAgICAgcGhvbmVfbnVtYmVyOiBcIjAwMDExMTEzMzMzXCIsXG4gICAgICByZW1hcmtzOiBcIuWJjeWbnuOCq+ODg+ODiFwiLFxuICAgICAgbmV3X2N1c3RvbWVyOiBcIuaXouWtmFwiLFxuICAgICAgdXBkYXRlZF9hdDogXCIyMDI0LTAxLTAxXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjdXN0b21lcl9jb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMSxcbiAgICAgIGNvdXJzZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBjb3Vyc2VzX2lkOiAyLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY3VzdG9tZXJfb3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDEsXG4gICAgICBvcHRpb25zX2lkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgY3VzdG9tZXJzX2lkOiAyLFxuICAgICAgb3B0aW9uc19pZDogMixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGN1c3RvbWVyX21lcmNoYW5kaXNlcyA9IFtcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDEsXG4gICAgICBtZXJjaGFuZGlzZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBtZXJjaGFuZGlzZXNfaWQ6IDIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjdXN0b21lcl9oYWlyc3R5bGVzID0gW1xuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMSxcbiAgICAgIGhhaXJzdHlsZXNfaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBjdXN0b21lcnNfaWQ6IDIsXG4gICAgICBoYWlyc3R5bGVzX2lkOiAyLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGN1c3RvbWVyX2F0dGVuZGFuY2VzID0gW1xuICAgIHtcbiAgICAgIGN1c3RvbWVyc19pZDogMSxcbiAgICAgIGF0dGVuZGFuY2VzX2lkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgY3VzdG9tZXJzX2lkOiAyLFxuICAgICAgYXR0ZW5kYW5jZXNfaWQ6IDIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgY291cnNlX25hbWU6IFwi44Kr44OD44OIXCIsXG4gICAgICBwcmljZTogMzAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgY291cnNlX25hbWU6IFwi44Kr44Op44O8XCIsXG4gICAgICBwcmljZTogNTAwMCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBvcHRpb25fbmFtZTogXCLjg4jjg6rjg7zjg4jjg6Hjg7Pjg4hcIixcbiAgICAgIHByaWNlOiAxMDAwLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBvcHRpb25fbmFtZTogXCLjg5Hjg7zjg55cIixcbiAgICAgIHByaWNlOiA1MDAwLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgbWVyY2hhbmRpc2VzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcHJvZHVjdF9uYW1lOiBcIuOCt+ODo+ODs+ODl+ODvFwiLFxuICAgICAgcHJvZHVjdF9wcmljZTogMjAwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcHJvZHVjdF9uYW1lOiBcIuOCs+ODs+ODh+OCo+OCt+ODp+ODiuODvFwiLFxuICAgICAgcHJvZHVjdF9wcmljZTogMjAwMCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhaXJzdHlsZXMgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBoYWlyc3R5bGVfbmFtZTogXCLjgrfjg6fjg7zjg4hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaGFpcnN0eWxlX25hbWU6IFwi44Ot44Oz44KwXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBhdHRlbmRhbmNlcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGF0dGVuZGFuY2VfbmFtZTogXCLnlLDkuK3lupfplbdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgYXR0ZW5kYW5jZV9uYW1lOiBcIuWkqumDjuekvumVt1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgdEhlYWRlckl0ZW1zID0gW1xuICAgIFwi6aGn5a6i5ZCNXCIsXG4gICAgXCLpm7voqbHnlarlj7dcIixcbiAgICBcIuWCmeiAg1wiLFxuICAgIFwi5paw6KaPb3Lml6LlrZhcIixcbiAgICBcIuabtOaWsOaXpVwiLFxuICAgIFwi57eo6ZuGXCIsXG4gICAgXCLliYrpmaRcIixcbiAgXTtcblxuICBjb25zdCBub2Rlc1Byb3BzID0gW1xuICAgIHsgdGV4dDogXCJuYW1lXCIgfSxcbiAgICB7IG51bWJlcjogXCJwaG9uZV9udW1iZXJcIiB9LFxuICAgIHsgdGV4dDogXCJyZW1hcmtzXCIgfSxcbiAgICB7IHRleHQ6IFwibmV3X2N1c3RvbWVyXCIgfSxcbiAgICB7IGRhdGU6IFwidXBkYXRlZF9hdFwiIH0sXG4gIF07XG5cbiAgY29uc3Qgbm9kZXMgPSBbXG4gICAgLi4uY3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbWVyT2ZDb3Vyc2UgPSBjdXN0b21lcl9jb3Vyc2VzLmZpbmQoXG4gICAgICAgIChjb3Vyc2VfY3VzdG9tZXIpID0+IGNvdXJzZV9jdXN0b21lci5jdXN0b21lcnNfaWQgPT09IGN1c3RvbWVyLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgY291cnNlID0gY291cnNlcy5maW5kKFxuICAgICAgICAoY291cnNlKSA9PiBjb3Vyc2UuaWQgPT09IGN1c3RvbWVyT2ZDb3Vyc2UuY291cnNlc19pZFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGN1c3RvbWVyLmlkLFxuICAgICAgICBuYW1lOiBjdXN0b21lci5uYW1lLFxuICAgICAgICBwaG9uZV9udW1iZXI6IGN1c3RvbWVyLnBob25lX251bWJlcixcbiAgICAgICAgcmVtYXJrczogY3VzdG9tZXIucmVtYXJrcyxcbiAgICAgICAgbmV3X2N1c3RvbWVyOiBjdXN0b21lci5uZXdfY3VzdG9tZXIsXG4gICAgICAgIGNvc3Vyc2VfbmFtZTogY291cnNlLmNvdXJzZV9uYW1lLFxuICAgICAgICB1cGRhdGVkX2F0OiBjdXN0b21lci51cGRhdGVkX2F0LFxuICAgICAgfTtcbiAgICB9KSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkN1c3RvbWVyczwvaDE+XG4gICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVycy9jcmVhdGVcIj7mlrDopo/kvZzmiJA8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXT9pZD0xXCI+6Kmz57SwPC9MaW5rPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXJzL1tpZF0vZWRpdD9pZD0xXCI+57eo6ZuGPC9MaW5rPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXJzL1tpZF0vZGVsZXRlP2lkPTFcIj7liYrpmaQ8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9zZWFyY2g/aWQ9Y3VzdG9tZXJcIj7mpJzntKI8L0xpbms+XG4gICAgICA8YnIgLz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lcnMvW2lkXS9zY2hlZHVsZT9pZD0xXCI+5LqI57SEPC9MaW5rPlxuXG4gICAgICA8Q29tcG9uZW50VGFibGVcbiAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICBub2Rlc1Byb3BzPXtub2Rlc1Byb3BzfVxuICAgICAgICB0SGVhZGVySXRlbXM9e3RIZWFkZXJJdGVtc31cbiAgICAgICAgbGluaz1cIi9jdXN0b21lcnNcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWVycztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQ29tcG9uZW50VGFibGUiLCJjdXN0b21lcnMiLCJpZCIsIm5hbWUiLCJwaG9uZV9udW1iZXIiLCJyZW1hcmtzIiwibmV3X2N1c3RvbWVyIiwidXBkYXRlZF9hdCIsImN1c3RvbWVyX2NvdXJzZXMiLCJjdXN0b21lcnNfaWQiLCJjb3Vyc2VzX2lkIiwiY3VzdG9tZXJfb3B0aW9ucyIsIm9wdGlvbnNfaWQiLCJjdXN0b21lcl9tZXJjaGFuZGlzZXMiLCJtZXJjaGFuZGlzZXNfaWQiLCJjdXN0b21lcl9oYWlyc3R5bGVzIiwiaGFpcnN0eWxlc19pZCIsImN1c3RvbWVyX2F0dGVuZGFuY2VzIiwiYXR0ZW5kYW5jZXNfaWQiLCJjb3Vyc2VzIiwiY291cnNlX25hbWUiLCJwcmljZSIsIm9wdGlvbnMiLCJvcHRpb25fbmFtZSIsIm1lcmNoYW5kaXNlcyIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfcHJpY2UiLCJoYWlyc3R5bGVzIiwiaGFpcnN0eWxlX25hbWUiLCJhdHRlbmRhbmNlcyIsImF0dGVuZGFuY2VfbmFtZSIsInRIZWFkZXJJdGVtcyIsIm5vZGVzUHJvcHMiLCJ0ZXh0IiwibnVtYmVyIiwiZGF0ZSIsIm5vZGVzIiwibWFwIiwiY3VzdG9tZXIiLCJjdXN0b21lck9mQ291cnNlIiwiZmluZCIsImNvdXJzZV9jdXN0b21lciIsImNvdXJzZSIsImNvc3Vyc2VfbmFtZSIsImRpdiIsImgxIiwiaHJlZiIsImJyIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/customers/index.tsx\n"));

/***/ })

});