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

/***/ "./store/attendances/attendance_times/attendance_timesSlice.ts":
/*!*********************************************************************!*\
  !*** ./store/attendances/attendance_times/attendance_timesSlice.ts ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attendance_timeReducer: function() { return /* binding */ attendance_timeReducer; },\n/* harmony export */   createAttendanceTime: function() { return /* binding */ createAttendanceTime; },\n/* harmony export */   createAttendance_time: function() { return /* binding */ createAttendance_time; },\n/* harmony export */   deleteAttendanceTime: function() { return /* binding */ deleteAttendanceTime; },\n/* harmony export */   getAttendanceTimeById: function() { return /* binding */ getAttendanceTimeById; },\n/* harmony export */   getAttendanceTimes: function() { return /* binding */ getAttendanceTimes; },\n/* harmony export */   setAttendanceId: function() { return /* binding */ setAttendanceId; },\n/* harmony export */   setAttendanceTimeDate: function() { return /* binding */ setAttendanceTimeDate; },\n/* harmony export */   setBreakTime: function() { return /* binding */ setBreakTime; },\n/* harmony export */   setEndTime: function() { return /* binding */ setEndTime; },\n/* harmony export */   setError: function() { return /* binding */ setError; },\n/* harmony export */   setLoading: function() { return /* binding */ setLoading; },\n/* harmony export */   setStartTime: function() { return /* binding */ setStartTime; },\n/* harmony export */   updateAttendanceTime: function() { return /* binding */ updateAttendanceTime; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"../node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/attendances/attendance_times/api */ \"./services/attendances/attendance_times/api.ts\");\n\n\nconst getAttendanceTimes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"attendance_times/getAttendanceTimes\", async ()=>{\n    const attendanceTimeData = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.fetchAllAttendanceTimes();\n    console.log(\"attendanceTimeDataだよ\");\n    console.log(attendanceTimeData.attendance_times);\n    return attendanceTimeData.attendance_times;\n});\nconst createAttendanceTime = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"attendance_times/createAttendanceTime\", async (formData)=>{\n    const attendanceTimeData = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.createAttendanceTimes(formData);\n    console.log(\"attendanceTimeCreateDataだよ\");\n    console.log(attendanceTimeData.attendance_times);\n    return attendanceTimeData.attendance_times;\n});\nconst getAttendanceTimeById = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"attendance_times/getAttendanceTimeById\", async (id)=>{\n    const attendanceTimeData = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.fetchAttendanceTimesById(id);\n    console.log(\"attendanceTimeShowDataだよ\");\n    console.log(attendanceTimeData.attendance_times);\n    return attendanceTimeData.attendance_times;\n});\nconst updateAttendanceTime = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"attendance_times/updateAttendanceTime\", async (formData)=>{\n    const { id, ...updateData } = formData;\n    const attendanceTimeData = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.updateAttendanceTimes(id, updateData);\n    console.log(\"attendanceTimeUpdateDataだよ\");\n    console.log(attendanceTimeData.attendance_times);\n    return attendanceTimeData.attendance_times;\n});\nconst deleteAttendanceTime = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"attendance_times/deleteAttendanceTime\", async (id)=>{\n    const attendanceTimeData = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.deleteAttendanceTimes(id);\n    console.log(\"attendanceTimeDeleteDataだよ\");\n    console.log(attendanceTimeData.attendance_times);\n    return attendanceTimeData.attendance_times;\n});\nconst initialState = {\n    // 初期状態\n    id: 0,\n    date: new Date().toISOString(),\n    start_time: new Date().toISOString(),\n    end_time: new Date().toISOString(),\n    break_time: 0,\n    attendance_id: 0,\n    created_at: \"\",\n    updated_at: \"\"\n};\nconst attendance_timeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"attendance_time\",\n    initialState,\n    reducers: {\n        setAttendanceTimeDate: (state, action)=>{\n            // 文字列型に変更\n            state.date = action.payload;\n        },\n        setStartTime: (state, action)=>{\n            // 文字列型に変更\n            state.start_time = action.payload;\n        },\n        setEndTime: (state, action)=>{\n            // 文字列型に変更\n            state.end_time = action.payload;\n        },\n        setBreakTime: (state, action)=>{\n            state.break_time = action.payload;\n        },\n        setAttendanceId: (state, action)=>{\n            state.attendance_id = action.payload;\n        },\n        setLoading: (state, action)=>{\n            state.loading = action.payload;\n        },\n        setError: (state, action)=>{\n            state.error = action.payload;\n        }\n    }\n});\nconst { setAttendanceTimeDate, setStartTime, setEndTime, setBreakTime, setAttendanceId, setLoading, setError } = attendance_timeSlice.actions;\nconst attendance_timeReducer = attendance_timeSlice.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (attendance_timeReducer);\n// Action Creators\nconst createAttendance_time = (formData)=>async (dispatch)=>{\n        try {\n            dispatch(setLoading(true));\n            const convertedFormData = {\n                ...formData,\n                date: new Date(formData.date),\n                start_time: new Date(formData.start_time),\n                end_time: new Date(formData.end_time)\n            };\n            const response = await _services_attendances_attendance_times_api__WEBPACK_IMPORTED_MODULE_0__.attendance_timeApi.createAttendanceTimes(convertedFormData);\n            dispatch(setLoading(false));\n            console.log(\"Attendance time created successfully\", response);\n            return response;\n        } catch (error) {\n            dispatch(setError(error.toString()));\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hdHRlbmRhbmNlcy9hdHRlbmRhbmNlX3RpbWVzL2F0dGVuZGFuY2VfdGltZXNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ1E7QUFHakYsTUFBTUcscUJBQXFCRixrRUFBZ0JBLENBQ2hELHVDQUNBO0lBQ0UsTUFBTUcscUJBQ0osTUFBTUYsMEZBQWtCQSxDQUFDRyx1QkFBdUI7SUFDbERDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNILG1CQUFtQkksZ0JBQWdCO0lBQy9DLE9BQU9KLG1CQUFtQkksZ0JBQWdCO0FBQzVDLEdBQ0E7QUFFSyxNQUFNQyx1QkFBdUJSLGtFQUFnQkEsQ0FDbEQseUNBQ0EsT0FBT1M7SUFRTCxNQUFNTixxQkFDSixNQUFNRiwwRkFBa0JBLENBQUNTLHFCQUFxQixDQUFDRDtJQUNqREosUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0gsbUJBQW1CSSxnQkFBZ0I7SUFDL0MsT0FBT0osbUJBQW1CSSxnQkFBZ0I7QUFDNUMsR0FDQTtBQUVLLE1BQU1JLHdCQUF3Qlgsa0VBQWdCQSxDQUNuRCwwQ0FDQSxPQUFPWTtJQUNMLE1BQU1ULHFCQUNKLE1BQU1GLDBGQUFrQkEsQ0FBQ1ksd0JBQXdCLENBQUNEO0lBQ3BEUCxRQUFRQyxHQUFHLENBQUM7SUFDWkQsUUFBUUMsR0FBRyxDQUFDSCxtQkFBbUJJLGdCQUFnQjtJQUMvQyxPQUFPSixtQkFBbUJJLGdCQUFnQjtBQUM1QyxHQUNBO0FBRUssTUFBTU8sdUJBQXVCZCxrRUFBZ0JBLENBQ2xELHlDQUNBLE9BQU9TO0lBUUwsTUFBTSxFQUFFRyxFQUFFLEVBQUUsR0FBR0csWUFBWSxHQUFHTjtJQUM5QixNQUFNTixxQkFDSixNQUFNRiwwRkFBa0JBLENBQUNlLHFCQUFxQixDQUFDSixJQUFJRztJQUNyRFYsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0gsbUJBQW1CSSxnQkFBZ0I7SUFDL0MsT0FBT0osbUJBQW1CSSxnQkFBZ0I7QUFDNUMsR0FDQTtBQUVLLE1BQU1VLHVCQUF1QmpCLGtFQUFnQkEsQ0FDbEQseUNBQ0EsT0FBT1k7SUFDTCxNQUFNVCxxQkFDSixNQUFNRiwwRkFBa0JBLENBQUNpQixxQkFBcUIsQ0FBQ047SUFDakRQLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNILG1CQUFtQkksZ0JBQWdCO0lBQy9DLE9BQU9KLG1CQUFtQkksZ0JBQWdCO0FBQzVDLEdBQ0E7QUFjRixNQUFNWSxlQUFxQztJQUN6QyxPQUFPO0lBQ1BQLElBQUk7SUFDSlEsTUFBTSxJQUFJQyxPQUFPQyxXQUFXO0lBQzVCQyxZQUFZLElBQUlGLE9BQU9DLFdBQVc7SUFDbENFLFVBQVUsSUFBSUgsT0FBT0MsV0FBVztJQUNoQ0csWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWkMsWUFBWTtBQUNkO0FBRUEsTUFBTUMsdUJBQXVCOUIsNkRBQVdBLENBQUM7SUFDdkMrQixNQUFNO0lBQ05YO0lBQ0FZLFVBQVU7UUFDUkMsdUJBQXVCLENBQUNDLE9BQU9DO1lBQzdCLFVBQVU7WUFDVkQsTUFBTWIsSUFBSSxHQUFHYyxPQUFPQyxPQUFPO1FBQzdCO1FBQ0FDLGNBQWMsQ0FBQ0gsT0FBT0M7WUFDcEIsVUFBVTtZQUNWRCxNQUFNVixVQUFVLEdBQUdXLE9BQU9DLE9BQU87UUFDbkM7UUFDQUUsWUFBWSxDQUFDSixPQUFPQztZQUNsQixVQUFVO1lBQ1ZELE1BQU1ULFFBQVEsR0FBR1UsT0FBT0MsT0FBTztRQUNqQztRQUNBRyxjQUFjLENBQUNMLE9BQU9DO1lBQ3BCRCxNQUFNUixVQUFVLEdBQUdTLE9BQU9DLE9BQU87UUFDbkM7UUFDQUksaUJBQWlCLENBQUNOLE9BQU9DO1lBQ3ZCRCxNQUFNUCxhQUFhLEdBQUdRLE9BQU9DLE9BQU87UUFDdEM7UUFDQUssWUFBWSxDQUFDUCxPQUFPQztZQUNsQkQsTUFBTVEsT0FBTyxHQUFHUCxPQUFPQyxPQUFPO1FBQ2hDO1FBQ0FPLFVBQVUsQ0FBQ1QsT0FBT0M7WUFDaEJELE1BQU1VLEtBQUssR0FBR1QsT0FBT0MsT0FBTztRQUM5QjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQ1hILHFCQUFxQixFQUNyQkksWUFBWSxFQUNaQyxVQUFVLEVBQ1ZDLFlBQVksRUFDWkMsZUFBZSxFQUNmQyxVQUFVLEVBQ1ZFLFFBQVEsRUFDVCxHQUFHYixxQkFBcUJlLE9BQU8sQ0FBQztBQUUxQixNQUFNQyx5QkFBeUJoQixxQkFBcUJpQixPQUFPLENBQUM7QUFFbkUsK0RBQWVELHNCQUFzQkEsRUFBQztBQUV0QyxrQkFBa0I7QUFDWCxNQUFNRSx3QkFDWCxDQUFDdEMsV0FRRCxPQUFPdUM7UUFDTCxJQUFJO1lBQ0ZBLFNBQVNSLFdBQVc7WUFDcEIsTUFBTVMsb0JBQW9CO2dCQUN4QixHQUFHeEMsUUFBUTtnQkFDWFcsTUFBTSxJQUFJQyxLQUFLWixTQUFTVyxJQUFJO2dCQUM1QkcsWUFBWSxJQUFJRixLQUFLWixTQUFTYyxVQUFVO2dCQUN4Q0MsVUFBVSxJQUFJSCxLQUFLWixTQUFTZSxRQUFRO1lBQ3RDO1lBQ0EsTUFBTTBCLFdBQVcsTUFBTWpELDBGQUFrQkEsQ0FBQ1MscUJBQXFCLENBQzdEdUM7WUFFRkQsU0FBU1IsV0FBVztZQUNwQm5DLFFBQVFDLEdBQUcsQ0FBQyx3Q0FBd0M0QztZQUNwRCxPQUFPQTtRQUNULEVBQUUsT0FBT1AsT0FBTztZQUNkSyxTQUFTTixTQUFTQyxNQUFNUSxRQUFRO1FBQ2xDO0lBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9hdHRlbmRhbmNlcy9hdHRlbmRhbmNlX3RpbWVzL2F0dGVuZGFuY2VfdGltZXNTbGljZS50cz82NGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGF0dGVuZGFuY2VfdGltZUFwaSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hdHRlbmRhbmNlcy9hdHRlbmRhbmNlX3RpbWVzL2FwaVwiO1xuaW1wb3J0IFJvb3RTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldEF0dGVuZGFuY2VUaW1lcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYXR0ZW5kYW5jZV90aW1lcy9nZXRBdHRlbmRhbmNlVGltZXNcIixcbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF0dGVuZGFuY2VUaW1lRGF0YTogYW55ID1cbiAgICAgIGF3YWl0IGF0dGVuZGFuY2VfdGltZUFwaS5mZXRjaEFsbEF0dGVuZGFuY2VUaW1lcygpO1xuICAgIGNvbnNvbGUubG9nKFwiYXR0ZW5kYW5jZVRpbWVEYXRh44Gg44KIXCIpO1xuICAgIGNvbnNvbGUubG9nKGF0dGVuZGFuY2VUaW1lRGF0YS5hdHRlbmRhbmNlX3RpbWVzKTtcbiAgICByZXR1cm4gYXR0ZW5kYW5jZVRpbWVEYXRhLmF0dGVuZGFuY2VfdGltZXM7XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBdHRlbmRhbmNlVGltZSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYXR0ZW5kYW5jZV90aW1lcy9jcmVhdGVBdHRlbmRhbmNlVGltZVwiLFxuICBhc3luYyAoZm9ybURhdGE6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBzdGFydF90aW1lOiBzdHJpbmc7XG4gICAgZW5kX3RpbWU6IHN0cmluZztcbiAgICBicmVha190aW1lOiBudW1iZXI7XG4gICAgYXR0ZW5kYW5jZV9pZDogbnVtYmVyO1xuICB9KSA9PiB7XG4gICAgY29uc3QgYXR0ZW5kYW5jZVRpbWVEYXRhOiBhbnkgPVxuICAgICAgYXdhaXQgYXR0ZW5kYW5jZV90aW1lQXBpLmNyZWF0ZUF0dGVuZGFuY2VUaW1lcyhmb3JtRGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJhdHRlbmRhbmNlVGltZUNyZWF0ZURhdGHjgaDjgohcIik7XG4gICAgY29uc29sZS5sb2coYXR0ZW5kYW5jZVRpbWVEYXRhLmF0dGVuZGFuY2VfdGltZXMpO1xuICAgIHJldHVybiBhdHRlbmRhbmNlVGltZURhdGEuYXR0ZW5kYW5jZV90aW1lcztcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEF0dGVuZGFuY2VUaW1lQnlJZCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYXR0ZW5kYW5jZV90aW1lcy9nZXRBdHRlbmRhbmNlVGltZUJ5SWRcIixcbiAgYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhdHRlbmRhbmNlVGltZURhdGE6IGFueSA9XG4gICAgICBhd2FpdCBhdHRlbmRhbmNlX3RpbWVBcGkuZmV0Y2hBdHRlbmRhbmNlVGltZXNCeUlkKGlkKTtcbiAgICBjb25zb2xlLmxvZyhcImF0dGVuZGFuY2VUaW1lU2hvd0RhdGHjgaDjgohcIik7XG4gICAgY29uc29sZS5sb2coYXR0ZW5kYW5jZVRpbWVEYXRhLmF0dGVuZGFuY2VfdGltZXMpO1xuICAgIHJldHVybiBhdHRlbmRhbmNlVGltZURhdGEuYXR0ZW5kYW5jZV90aW1lcztcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF0dGVuZGFuY2VUaW1lID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdHRlbmRhbmNlX3RpbWVzL3VwZGF0ZUF0dGVuZGFuY2VUaW1lXCIsXG4gIGFzeW5jIChmb3JtRGF0YToge1xuICAgIGlkOiBudW1iZXI7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIHN0YXJ0X3RpbWU6IHN0cmluZztcbiAgICBlbmRfdGltZTogc3RyaW5nO1xuICAgIGJyZWFrX3RpbWU6IG51bWJlcjtcbiAgICBhdHRlbmRhbmNlX2lkOiBudW1iZXI7XG4gIH0pID0+IHtcbiAgICBjb25zdCB7IGlkLCAuLi51cGRhdGVEYXRhIH0gPSBmb3JtRGF0YTtcbiAgICBjb25zdCBhdHRlbmRhbmNlVGltZURhdGE6IGFueSA9XG4gICAgICBhd2FpdCBhdHRlbmRhbmNlX3RpbWVBcGkudXBkYXRlQXR0ZW5kYW5jZVRpbWVzKGlkLCB1cGRhdGVEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImF0dGVuZGFuY2VUaW1lVXBkYXRlRGF0YeOBoOOCiFwiKTtcbiAgICBjb25zb2xlLmxvZyhhdHRlbmRhbmNlVGltZURhdGEuYXR0ZW5kYW5jZV90aW1lcyk7XG4gICAgcmV0dXJuIGF0dGVuZGFuY2VUaW1lRGF0YS5hdHRlbmRhbmNlX3RpbWVzO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXR0ZW5kYW5jZVRpbWUgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImF0dGVuZGFuY2VfdGltZXMvZGVsZXRlQXR0ZW5kYW5jZVRpbWVcIixcbiAgYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhdHRlbmRhbmNlVGltZURhdGE6IGFueSA9XG4gICAgICBhd2FpdCBhdHRlbmRhbmNlX3RpbWVBcGkuZGVsZXRlQXR0ZW5kYW5jZVRpbWVzKGlkKTtcbiAgICBjb25zb2xlLmxvZyhcImF0dGVuZGFuY2VUaW1lRGVsZXRlRGF0YeOBoOOCiFwiKTtcbiAgICBjb25zb2xlLmxvZyhhdHRlbmRhbmNlVGltZURhdGEuYXR0ZW5kYW5jZV90aW1lcyk7XG4gICAgcmV0dXJuIGF0dGVuZGFuY2VUaW1lRGF0YS5hdHRlbmRhbmNlX3RpbWVzO1xuICB9XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dGVuZGFuY2VfdGltZVN0YXRlIHtcbiAgLy8g44K544OG44O844OI44Gu5Z6LXG4gIGlkOiBudW1iZXI7XG4gIGRhdGU6IHN0cmluZzsgLy8gRGF0ZeWei+OBi+OCiXN0cmluZ+Wei+OBq+WkieabtFxuICBzdGFydF90aW1lOiBzdHJpbmc7IC8vIERhdGXlnovjgYvjgolzdHJpbmflnovjgavlpInmm7RcbiAgZW5kX3RpbWU6IHN0cmluZzsgLy8gRGF0ZeWei+OBi+OCiXN0cmluZ+Wei+OBq+WkieabtFxuICBicmVha190aW1lOiBudW1iZXI7XG4gIGF0dGVuZGFuY2VfaWQ6IG51bWJlcjsgLy8g5aSW6YOo44Kt44O8XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEF0dGVuZGFuY2VfdGltZVN0YXRlID0ge1xuICAvLyDliJ3mnJ/nirbmhYtcbiAgaWQ6IDAsXG4gIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgLy8g5pel5LuY44KS5paH5a2X5YiX44Gr5aSJ5o+bXG4gIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgLy8g5pel5LuY44KS5paH5a2X5YiX44Gr5aSJ5o+bXG4gIGVuZF90aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIC8vIOaXpeS7mOOCkuaWh+Wtl+WIl+OBq+WkieaPm1xuICBicmVha190aW1lOiAwLFxuICBhdHRlbmRhbmNlX2lkOiAwLFxuICBjcmVhdGVkX2F0OiBcIlwiLCAvLyDliJ3mnJ/lgKTjga/nqbrjga7mloflrZfliJdcbiAgdXBkYXRlZF9hdDogXCJcIiwgLy8g5Yid5pyf5YCk44Gv56m644Gu5paH5a2X5YiXXG59O1xuXG5jb25zdCBhdHRlbmRhbmNlX3RpbWVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhdHRlbmRhbmNlX3RpbWVcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEF0dGVuZGFuY2VUaW1lRGF0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgLy8g5paH5a2X5YiX5Z6L44Gr5aSJ5pu0XG4gICAgICBzdGF0ZS5kYXRlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRTdGFydFRpbWU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgIC8vIOaWh+Wtl+WIl+Wei+OBq+WkieabtFxuICAgICAgc3RhdGUuc3RhcnRfdGltZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0RW5kVGltZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgLy8g5paH5a2X5YiX5Z6L44Gr5aSJ5pu0XG4gICAgICBzdGF0ZS5lbmRfdGltZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0QnJlYWtUaW1lOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XG4gICAgICBzdGF0ZS5icmVha190aW1lID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRBdHRlbmRhbmNlSWQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICAgIHN0YXRlLmF0dGVuZGFuY2VfaWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIHNldExvYWRpbmc6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBzZXRFcnJvcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nIHwgbnVsbD4pID0+IHtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZXRBdHRlbmRhbmNlVGltZURhdGUsXG4gIHNldFN0YXJ0VGltZSxcbiAgc2V0RW5kVGltZSxcbiAgc2V0QnJlYWtUaW1lLFxuICBzZXRBdHRlbmRhbmNlSWQsXG4gIHNldExvYWRpbmcsXG4gIHNldEVycm9yLFxufSA9IGF0dGVuZGFuY2VfdGltZVNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCBhdHRlbmRhbmNlX3RpbWVSZWR1Y2VyID0gYXR0ZW5kYW5jZV90aW1lU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGRlZmF1bHQgYXR0ZW5kYW5jZV90aW1lUmVkdWNlcjtcblxuLy8gQWN0aW9uIENyZWF0b3JzXG5leHBvcnQgY29uc3QgY3JlYXRlQXR0ZW5kYW5jZV90aW1lID1cbiAgKGZvcm1EYXRhOiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBkYXRlOiBzdHJpbmc7IC8vIOaWh+Wtl+WIl+Wei+OBq+WkieabtFxuICAgIHN0YXJ0X3RpbWU6IHN0cmluZzsgLy8g5paH5a2X5YiX5Z6L44Gr5aSJ5pu0XG4gICAgZW5kX3RpbWU6IHN0cmluZzsgLy8g5paH5a2X5YiX5Z6L44Gr5aSJ5pu0XG4gICAgYnJlYWtfdGltZTogbnVtYmVyO1xuICAgIGF0dGVuZGFuY2VfaWQ6IG51bWJlcjtcbiAgfSk6IEFwcFRodW5rID0+XG4gIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKTtcbiAgICAgIGNvbnN0IGNvbnZlcnRlZEZvcm1EYXRhID0ge1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZm9ybURhdGEuZGF0ZSksXG4gICAgICAgIHN0YXJ0X3RpbWU6IG5ldyBEYXRlKGZvcm1EYXRhLnN0YXJ0X3RpbWUpLFxuICAgICAgICBlbmRfdGltZTogbmV3IERhdGUoZm9ybURhdGEuZW5kX3RpbWUpLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXR0ZW5kYW5jZV90aW1lQXBpLmNyZWF0ZUF0dGVuZGFuY2VUaW1lcyhcbiAgICAgICAgY29udmVydGVkRm9ybURhdGFcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkF0dGVuZGFuY2UgdGltZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHNldEVycm9yKGVycm9yLnRvU3RyaW5nKCkpKTtcbiAgICB9XG4gIH07XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXR0ZW5kYW5jZV90aW1lQXBpIiwiZ2V0QXR0ZW5kYW5jZVRpbWVzIiwiYXR0ZW5kYW5jZVRpbWVEYXRhIiwiZmV0Y2hBbGxBdHRlbmRhbmNlVGltZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0ZW5kYW5jZV90aW1lcyIsImNyZWF0ZUF0dGVuZGFuY2VUaW1lIiwiZm9ybURhdGEiLCJjcmVhdGVBdHRlbmRhbmNlVGltZXMiLCJnZXRBdHRlbmRhbmNlVGltZUJ5SWQiLCJpZCIsImZldGNoQXR0ZW5kYW5jZVRpbWVzQnlJZCIsInVwZGF0ZUF0dGVuZGFuY2VUaW1lIiwidXBkYXRlRGF0YSIsInVwZGF0ZUF0dGVuZGFuY2VUaW1lcyIsImRlbGV0ZUF0dGVuZGFuY2VUaW1lIiwiZGVsZXRlQXR0ZW5kYW5jZVRpbWVzIiwiaW5pdGlhbFN0YXRlIiwiZGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImJyZWFrX3RpbWUiLCJhdHRlbmRhbmNlX2lkIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJhdHRlbmRhbmNlX3RpbWVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF0dGVuZGFuY2VUaW1lRGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFN0YXJ0VGltZSIsInNldEVuZFRpbWUiLCJzZXRCcmVha1RpbWUiLCJzZXRBdHRlbmRhbmNlSWQiLCJzZXRMb2FkaW5nIiwibG9hZGluZyIsInNldEVycm9yIiwiZXJyb3IiLCJhY3Rpb25zIiwiYXR0ZW5kYW5jZV90aW1lUmVkdWNlciIsInJlZHVjZXIiLCJjcmVhdGVBdHRlbmRhbmNlX3RpbWUiLCJkaXNwYXRjaCIsImNvbnZlcnRlZEZvcm1EYXRhIiwicmVzcG9uc2UiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/attendances/attendance_times/attendance_timesSlice.ts\n"));

/***/ })

});