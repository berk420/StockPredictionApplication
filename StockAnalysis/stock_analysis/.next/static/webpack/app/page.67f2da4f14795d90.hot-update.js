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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    const filtered_data = response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement);\n    return filtered_data.map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    const filteredData = response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement);\n    const values = filteredData.map((item)=>{\n        const degerString = item.deger.toString();\n        return parseFloat(degerString.replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n    return values;\n}\nfunction CreateChartData(x_list, y_list) {\n    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        console.error(\"not arr.\");\n        return [];\n    } else if (x_list.length === 0 || y_list.length === 0) {\n        console.error(\"empty arr.\");\n        return [];\n    }\n    x_list.reverse();\n    y_list.reverse();\n    const chartData = x_list.map((x, index)=>{\n        const y = y_list[index];\n        return {\n            x: x,\n            y: y\n        };\n    });\n    return chartData;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxlQUFlQSxnQkFBZ0JDLFFBQXNCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUN6RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBQ0EsTUFBTUMsZ0JBQWdCTCxTQUFTTSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtSLGNBQWNPLEtBQUtFLGNBQWMsS0FBS1QsYUFBYUM7SUFFaEksT0FBT0csY0FBY00sR0FBRyxDQUFDLENBQUNILE9BQWFBLEtBQUtJLEtBQUs7QUFDckQ7QUFHTyxlQUFlQyxzQkFBc0JiLFFBQXNCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUMvRyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsTUFBTVUsZUFBZWQsU0FBU00sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS0MsU0FBUyxLQUFLUixjQUFjTyxLQUFLRSxjQUFjLEtBQUtULGFBQWFDO0lBQy9ILE1BQU1hLFNBQVNELGFBQWFILEdBQUcsQ0FBQyxDQUFDSDtRQUM3QixNQUFNUSxjQUFjUixLQUFLUyxLQUFLLENBQUNDLFFBQVE7UUFDdkMsT0FBT0MsV0FBV0gsWUFBWUksT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDbEU7SUFDSSxPQUFPTDtBQUNmO0FBR08sU0FBU00sZ0JBQWdCQyxNQUFnQixFQUFFQyxNQUFnQjtJQUU5RCxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0gsV0FBVyxDQUFDRSxNQUFNQyxPQUFPLENBQUNGLFNBQVM7UUFDbERwQixRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPLEVBQUU7SUFDYixPQUFPLElBQUlrQixPQUFPSSxNQUFNLEtBQUssS0FBS0gsT0FBT0csTUFBTSxLQUFLLEdBQUc7UUFDbkR2QixRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPLEVBQUU7SUFDYjtJQUVBa0IsT0FBT0ssT0FBTztJQUNkSixPQUFPSSxPQUFPO0lBRWQsTUFBTUMsWUFBWU4sT0FBT1gsR0FBRyxDQUFDLENBQUNrQixHQUFHQztRQUM3QixNQUFNQyxJQUFJUixNQUFNLENBQUNPLE1BQU07UUFDdkIsT0FBTztZQUNIRCxHQUFHQTtZQUNIRSxHQUFHQTtRQUNQO0lBQ0o7SUFFQSxPQUFPSDtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cz9hNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoRGF0YSwgRGF0YSwgRXJyb3IgfSBmcm9tICcuLi9EYXRhU2VydmljZS9wYWdlcyc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RUaW1lRGF0YShyZXNwb25zZTogRGF0YSB8IEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbHRlcmVkX2RhdGEgPSByZXNwb25zZS5kYXRhLmZpbHRlcigoaXRlbSA6YW55KSA9PiBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkX2RhdGEubWFwKChpdGVtOmFueSkgPT4gaXRlbS56YW1hbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IGZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0gOmFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZ2VyU3RyaW5nID0gaXRlbS5kZWdlci50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRlZ2VyU3RyaW5nLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG4gIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm90IGFyci5cIik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBlbHNlIGlmICh4X2xpc3QubGVuZ3RoID09PSAwIHx8IHlfbGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW1wdHkgYXJyLlwiKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgIHlfbGlzdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgY29uc3QgY2hhcnREYXRhID0geF9saXN0Lm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB5ID0geV9saXN0W2luZGV4XTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGFydERhdGE7XHJcbn0iXSwibmFtZXMiOlsiQ29sbGVjdFRpbWVEYXRhIiwicmVzcG9uc2UiLCJzdG9ja19uYW1lIiwiZmluYW5jaWFsX3N0YXRlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImZpbHRlcmVkX2RhdGEiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsImhpc3NlX2FkaSIsImJpbGFuY29fa2FsZW1pIiwibWFwIiwiemFtYW4iLCJDb2xsZWN0U3RvY2tWYWx1ZURhdGEiLCJmaWx0ZXJlZERhdGEiLCJ2YWx1ZXMiLCJkZWdlclN0cmluZyIsImRlZ2VyIiwidG9TdHJpbmciLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsIkNyZWF0ZUNoYXJ0RGF0YSIsInhfbGlzdCIsInlfbGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJldmVyc2UiLCJjaGFydERhdGEiLCJ4IiwiaW5kZXgiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});