"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts":
/*!*******************************************!*\
  !*** ./src/app/ChartDataPrepare/pages.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    const filteredData = response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement);\n    const values = filteredData.map((item)=>{\n        const degerString = item.deger.toString();\n        return parseFloat(degerString.replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n    return values;\n}\nfunction CreateChartData(x_list, y_list) {\n    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        console.error(\"not arr.\");\n        return [];\n    } else if (x_list.length === 0 || y_list.length === 0) {\n        console.error(\"empty arr.\");\n        return [];\n    }\n    x_list.reverse();\n    y_list.reverse();\n    const chartData = x_list.map((x, index)=>{\n        const y = y_list[index];\n        return {\n            x: x,\n            y: y\n        };\n    });\n    return chartData;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxlQUFlQSxnQkFBZ0JDLFFBQXNCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUN6RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FDekJBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFBcUJRLEdBQUcsQ0FBQyxDQUFDSCxPQUM1RkEsS0FBS0ksS0FBSztBQUN0QjtBQUdPLGVBQWVDLHNCQUFzQlosUUFBc0IsRUFBRUMsVUFBa0IsRUFBRUMsbUJBQTJCO0lBQy9HLElBQUksV0FBV0YsVUFBVTtRQUNyQkcsUUFBUUMsS0FBSyxDQUFDLFVBQVVKLFNBQVNJLEtBQUs7UUFDdEMsT0FBTyxFQUFFO0lBQ2I7SUFFQSxNQUFNUyxlQUFlYixTQUFTSyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUM7SUFDL0gsTUFBTVksU0FBU0QsYUFBYUgsR0FBRyxDQUFDLENBQUNIO1FBQzdCLE1BQU1RLGNBQWNSLEtBQUtTLEtBQUssQ0FBQ0MsUUFBUTtRQUN2QyxPQUFPQyxXQUFXSCxZQUFZSSxPQUFPLENBQUMsT0FBTyxJQUFJQSxPQUFPLENBQUMsS0FBSztJQUNsRTtJQUNJLE9BQU9MO0FBQ2Y7QUFHTyxTQUFTTSxnQkFBZ0JDLE1BQWdCLEVBQUVDLE1BQWdCO0lBRTlELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxXQUFXLENBQUNFLE1BQU1DLE9BQU8sQ0FBQ0YsU0FBUztRQUNsRG5CLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU8sRUFBRTtJQUNiLE9BQU8sSUFBSWlCLE9BQU9JLE1BQU0sS0FBSyxLQUFLSCxPQUFPRyxNQUFNLEtBQUssR0FBRztRQUNuRHRCLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU8sRUFBRTtJQUNiO0lBRUFpQixPQUFPSyxPQUFPO0lBQ2RKLE9BQU9JLE9BQU87SUFFZCxNQUFNQyxZQUFZTixPQUFPWCxHQUFHLENBQUMsQ0FBQ2tCLEdBQUdDO1FBQzdCLE1BQU1DLElBQUlSLE1BQU0sQ0FBQ08sTUFBTTtRQUN2QixPQUFPO1lBQ0hELEdBQUdBO1lBQ0hFLEdBQUdBO1FBQ1A7SUFDSjtJQUVBLE9BQU9IO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaGFydERhdGFQcmVwYXJlL3BhZ2VzLnRzP2E1MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hEYXRhLCBEYXRhLCBFcnJvciB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL3BhZ2VzJztcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFRpbWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmZpbHRlcigoaXRlbSA6YW55KSA9PiBcclxuICAgICAgICBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudCkubWFwKChpdGVtOmFueSkgPT4gXHJcbiAgICAgICAgICAgIGl0ZW0uemFtYW4pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RTdG9ja1ZhbHVlRGF0YShyZXNwb25zZTogRGF0YSB8IEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyW10+IHtcclxuICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSByZXNwb25zZS5kYXRhLmZpbHRlcigoaXRlbSA6YW55KSA9PiBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudCk7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJlZERhdGEubWFwKChpdGVtIDphbnkpID0+IHtcclxuICAgICAgICBjb25zdCBkZWdlclN0cmluZyA9IGl0ZW0uZGVnZXIudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChkZWdlclN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbn1cclxuICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDaGFydERhdGEoeF9saXN0OiBzdHJpbmdbXSwgeV9saXN0OiBudW1iZXJbXSk6IHsgeDogc3RyaW5nLCB5OiBudW1iZXIgfVtdIHtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoeF9saXN0KSB8fCAhQXJyYXkuaXNBcnJheSh5X2xpc3QpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIm5vdCBhcnIuXCIpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH0gZWxzZSBpZiAoeF9saXN0Lmxlbmd0aCA9PT0gMCB8fCB5X2xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVtcHR5IGFyci5cIik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHhfbGlzdC5yZXZlcnNlKCk7XHJcbiAgICB5X2xpc3QucmV2ZXJzZSgpO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0RGF0YSA9IHhfbGlzdC5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeSA9IHlfbGlzdFtpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hhcnREYXRhO1xyXG59Il0sIm5hbWVzIjpbIkNvbGxlY3RUaW1lRGF0YSIsInJlc3BvbnNlIiwic3RvY2tfbmFtZSIsImZpbmFuY2lhbF9zdGF0ZW1lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsImhpc3NlX2FkaSIsImJpbGFuY29fa2FsZW1pIiwibWFwIiwiemFtYW4iLCJDb2xsZWN0U3RvY2tWYWx1ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJ2YWx1ZXMiLCJkZWdlclN0cmluZyIsImRlZ2VyIiwidG9TdHJpbmciLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsIkNyZWF0ZUNoYXJ0RGF0YSIsInhfbGlzdCIsInlfbGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJldmVyc2UiLCJjaGFydERhdGEiLCJ4IiwiaW5kZXgiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});