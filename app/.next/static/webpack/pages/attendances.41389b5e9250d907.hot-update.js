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

/***/ "./components/elements/table/search/index.tsx":
/*!****************************************************!*\
  !*** ./components/elements/table/search/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSearchLogic: function() { return /* binding */ useSearchLogic; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useSearchLogic = ()=>{\n    _s();\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [searchField, setSearchField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const handleSearchTextChange = (event)=>{\n        setSearchText(event.target.value);\n    };\n    const handleSearchFieldChange = (event)=>{\n        setSearchField(event.target.value);\n    };\n    return {\n        searchText,\n        searchField,\n        setSearchField,\n        handleSearchTextChange,\n        handleSearchFieldChange\n    };\n};\n_s(useSearchLogic, \"Q61c8Q+dde1hWKr4eTveT8+rGME=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL3RhYmxlL3NlYXJjaC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUUxQixNQUFNQyxpQkFBaUI7O0lBQzVCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0MsTUFBTU0seUJBQXlCLENBQUNDO1FBQzlCSixjQUFjSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDbEM7SUFFQSxNQUFNQywwQkFBMEIsQ0FBQ0g7UUFDL0JGLGVBQWVFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLE9BQU87UUFDTFA7UUFDQUU7UUFDQUM7UUFDQUM7UUFDQUk7SUFDRjtBQUNGLEVBQUU7R0FuQldUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWxlbWVudHMvdGFibGUvc2VhcmNoL2luZGV4LnRzeD9kMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VTZWFyY2hMb2dpYyA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWFyY2hGaWVsZCwgc2V0U2VhcmNoRmllbGRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2hGaWVsZENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaEZpZWxkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hUZXh0LFxuICAgIHNlYXJjaEZpZWxkLFxuICAgIHNldFNlYXJjaEZpZWxkLFxuICAgIGhhbmRsZVNlYXJjaFRleHRDaGFuZ2UsXG4gICAgaGFuZGxlU2VhcmNoRmllbGRDaGFuZ2UsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU2VhcmNoTG9naWMiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInNlYXJjaEZpZWxkIiwic2V0U2VhcmNoRmllbGQiLCJoYW5kbGVTZWFyY2hUZXh0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaEZpZWxkQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/elements/table/search/index.tsx\n"));

/***/ })

});