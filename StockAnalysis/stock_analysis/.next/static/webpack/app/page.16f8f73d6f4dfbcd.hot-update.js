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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\nfunction CreateChartData(x_list, y_list, selectedCurrency) {\n    const dollar_rates = {\n        \"2024/3\": 31.38,\n        \"2023/12\": 28.89,\n        \"2023/9\": 26.69,\n        \"2023/6\": 20.95,\n        \"2023/3\": 18.81,\n        \"2022/12\": 18.63,\n        \"2022/9\": 18.19,\n        \"2022/6\": 16.41,\n        \"2022/3\": 14.18,\n        \"2021/12\": 13.07,\n        \"2021/9\": 8.30,\n        \"2021/6\": 8.61,\n        \"2021/3\": 7.53,\n        \"2020/12\": 7.79,\n        \"2020/9\": 7.43,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.76,\n        \"2019/12\": 5.80,\n        \"2019/9\": 5.71,\n        \"2019/6\": 5.80,\n        \"2019/3\": 0,\n        \"2018/12\": 0,\n        \"2018/9\": 0,\n        \"2018/6\": 0,\n        \"2018/3\": 0,\n        \"2017/12\": 0,\n        \"2017/9\": 0,\n        \"2017/6\": 0,\n        \"2017/3\": 0,\n        \"2016/12\": 0,\n        \"2016/9\": 0,\n        \"2016/6\": 0,\n        \"2016/3\": 0,\n        \"2015/12\": 0,\n        \"2015/9\": 0,\n        \"2015/6\": 0,\n        \"2015/3\": 0\n    };\n    const gold_rates = {\n        \"2024/3\": 2234,\n        \"2023/12\": 1864,\n        \"2023/9\": 1665,\n        \"2023/6\": 1313,\n        \"2023/3\": 1126,\n        \"2022/12\": 1070,\n        \"2022/9\": 1000,\n        \"2022/6\": 977,\n        \"2022/3\": 900,\n        \"2021/12\": 800,\n        \"2021/9\": 485,\n        \"2021/6\": 521,\n        \"2021/3\": 411,\n        \"2020/12\": 460,\n        \"2020/9\": 466,\n        \"2020/6\": 370,\n        \"2020/3\": 0,\n        \"2019/12\": 0,\n        \"2019/9\": 0,\n        \"2019/6\": 0,\n        \"2019/3\": 0,\n        \"2018/12\": 0,\n        \"2018/9\": 0,\n        \"2018/6\": 0,\n        \"2018/3\": 0,\n        \"2017/12\": 0,\n        \"2017/9\": 0,\n        \"2017/6\": 0,\n        \"2017/3\": 0,\n        \"2016/12\": 0,\n        \"2016/9\": 0,\n        \"2016/6\": 0,\n        \"2016/3\": 0,\n        \"2015/12\": 0,\n        \"2015/9\": 0,\n        \"2015/6\": 0,\n        \"2015/3\": 0\n    };\n    try {\n        if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        //throw new Error(\"Input lists are not arrays.\");\n        } else if (x_list.length === 0 || y_list.length === 0) {\n        //throw  Error(\"Input lists are empty.\");\n        }\n        x_list.reverse();\n        y_list.reverse();\n        const chart_data = x_list.map((x, index)=>{\n            let convertedY = 0;\n            if (selectedCurrency === \"Lira\") {\n                convertedY = y_list[index];\n            } else if (selectedCurrency === \"Dollar\") {\n                convertedY = y_list[index] / dollar_rates[x];\n            } else if (selectedCurrency === \"Gold\") {\n                convertedY = y_list[index] / gold_rates_rates[x];\n            }\n            return {\n                x: x,\n                y: convertedY\n            };\n        });\n        return chart_data;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxlQUFlQSxnQkFBZ0JDLFFBQTJCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUM5RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUNuQkMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFDNUZRLEdBQUcsQ0FBQyxDQUFDSCxPQUFhQSxLQUFLSSxLQUFLO0FBQ2pDO0FBRU8sZUFBZUMsc0JBQXNCWixRQUEyQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDcEgsSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0g7UUFDRixPQUFPTSxXQUFXTixLQUFLTyxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDNUU7QUFDSjtBQUVPLFNBQVNDLGdCQUFnQkMsTUFBZ0IsRUFBRUMsTUFBZ0IsRUFBQ0MsZ0JBQXVCO0lBRXRGLE1BQU1DLGVBQXVDO1FBQ3pDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUVBLE1BQU1DLGFBQXFDO1FBQ3ZDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBUztRQUNULFVBQVM7UUFDVCxVQUFTO1FBQ1QsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBUztRQUNULFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUVJLElBQUk7UUFDQSxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ04sV0FBVyxDQUFDSyxNQUFNQyxPQUFPLENBQUNMLFNBQVM7UUFDbEQsaURBQWlEO1FBQ3JELE9BQU8sSUFBSUQsT0FBT08sTUFBTSxLQUFLLEtBQUtOLE9BQU9NLE1BQU0sS0FBSyxHQUFHO1FBQ25ELHlDQUF5QztRQUM3QztRQUVBUCxPQUFPUSxPQUFPO1FBQ2RQLE9BQU9PLE9BQU87UUFFZCxNQUFNQyxhQUF5Q1QsT0FBT1IsR0FBRyxDQUFDLENBQUNrQixHQUFHQztZQUMxRCxJQUFJQyxhQUFxQjtZQUd6QixJQUFJVixxQkFBcUIsUUFBUTtnQkFDN0JVLGFBQWFYLE1BQU0sQ0FBQ1UsTUFBTTtZQUM5QixPQUFPLElBQUlULHFCQUFxQixVQUFVO2dCQUN0Q1UsYUFBYVgsTUFBTSxDQUFDVSxNQUFNLEdBQUdSLFlBQVksQ0FBQ08sRUFBRTtZQUNoRCxPQUFPLElBQUlSLHFCQUFxQixRQUFRO2dCQUNwQ1UsYUFBYVgsTUFBTSxDQUFDVSxNQUFNLEdBQUdFLGdCQUFnQixDQUFDSCxFQUFFO1lBQ3BEO1lBSUEsT0FBTztnQkFDSEEsR0FBR0E7Z0JBQ0hJLEdBQUdGO1lBQ1A7UUFDSjtRQUVBLE9BQU9IO0lBQ1gsRUFBRSxPQUFPdkIsT0FBTztRQUNaRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTyxFQUFFO0lBQ2I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NoYXJ0RGF0YVByZXBhcmUvcGFnZXMudHM/YTUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZldGNoRGF0YSxEYXRhLCBGZXRjaEVycm9yIH0gZnJvbSAnLi4vRGF0YVNlcnZpY2UvcGFnZXMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RUaW1lRGF0YShyZXNwb25zZTogRGF0YSB8IEZldGNoRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbTphbnkpID0+IGl0ZW0uemFtYW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRmV0Y2hFcnJvciwgc3RvY2tfbmFtZTogc3RyaW5nLCBmaW5hbmNpYWxfc3RhdGVtZW50OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICBpZiAoJ2Vycm9yJyBpbiByZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIC5maWx0ZXIoKGl0ZW0gOmFueSkgPT4gaXRlbS5oaXNzZV9hZGkgPT09IHN0b2NrX25hbWUgJiYgaXRlbS5iaWxhbmNvX2thbGVtaSA9PT0gc3RvY2tfbmFtZSArIGZpbmFuY2lhbF9zdGF0ZW1lbnQpXHJcbiAgICAubWFwKChpdGVtIDphbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLmRlZ2VyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdLHNlbGVjdGVkQ3VycmVuY3k6c3RyaW5nKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG4gICAgXHJcbiAgICBjb25zdCBkb2xsYXJfcmF0ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgJzIwMjQvMyc6IDMxLjM4LFxyXG4gICAgICAgICcyMDIzLzEyJzogMjguODksXHJcbiAgICAgICAgJzIwMjMvOSc6IDI2LjY5LFxyXG4gICAgICAgICcyMDIzLzYnOiAyMC45NSxcclxuICAgICAgICAnMjAyMy8zJzogMTguODEsXHJcbiAgICAgICAgJzIwMjIvMTInOiAxOC42MyxcclxuICAgICAgICAnMjAyMi85JzogMTguMTksXHJcbiAgICAgICAgJzIwMjIvNic6IDE2LjQxLFxyXG4gICAgICAgICcyMDIyLzMnOiAxNC4xOCxcclxuICAgICAgICAnMjAyMS8xMic6IDEzLjA3LFxyXG4gICAgICAgICcyMDIxLzknOiA4LjMwLFxyXG4gICAgICAgICcyMDIxLzYnOiA4LjYxLFxyXG4gICAgICAgICcyMDIxLzMnOiA3LjUzLFxyXG4gICAgICAgICcyMDIwLzEyJzogNy43OSxcclxuICAgICAgICAnMjAyMC85JzogNy40MyxcclxuICAgICAgICAnMjAyMC82JzogNi45MCxcclxuICAgICAgICAnMjAyMC8zJzogNi43NixcclxuICAgICAgICAnMjAxOS8xMic6IDUuODAsXHJcbiAgICAgICAgJzIwMTkvOSc6IDUuNzEsXHJcbiAgICAgICAgJzIwMTkvNic6IDUuODAsXHJcbiAgICAgICAgJzIwMTkvMyc6IDAsXHJcbiAgICAgICAgJzIwMTgvMTInOiAwLFxyXG4gICAgICAgICcyMDE4LzknOiAwLFxyXG4gICAgICAgICcyMDE4LzYnOiAwLFxyXG4gICAgICAgICcyMDE4LzMnOiAwLFxyXG4gICAgICAgICcyMDE3LzEyJzowLFxyXG4gICAgICAgICcyMDE3LzknOiAwLFxyXG4gICAgICAgICcyMDE3LzYnOiAwLFxyXG4gICAgICAgICcyMDE3LzMnOiAwLFxyXG4gICAgICAgICcyMDE2LzEyJzowLFxyXG4gICAgICAgICcyMDE2LzknOiAwLFxyXG4gICAgICAgICcyMDE2LzYnOiAwLFxyXG4gICAgICAgICcyMDE2LzMnOiAwLFxyXG4gICAgICAgICcyMDE1LzEyJzowLFxyXG4gICAgICAgICcyMDE1LzknOiAwLFxyXG4gICAgICAgICcyMDE1LzYnOiAwLFxyXG4gICAgICAgICcyMDE1LzMnOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnb2xkX3JhdGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICcyMDI0LzMnOiAyMjM0LFxyXG4gICAgICAgICcyMDIzLzEyJzogMTg2NCxcclxuICAgICAgICAnMjAyMy85JzoxNjY1LFxyXG4gICAgICAgICcyMDIzLzYnOjEzMTMgLFxyXG4gICAgICAgICcyMDIzLzMnOjExMjYsXHJcbiAgICAgICAgJzIwMjIvMTInOjEwNzAsXHJcbiAgICAgICAgJzIwMjIvOSc6IDEwMDAsXHJcbiAgICAgICAgJzIwMjIvNic6IDk3NyxcclxuICAgICAgICAnMjAyMi8zJzogOTAwLFxyXG4gICAgICAgICcyMDIxLzEyJzo4MDAsXHJcbiAgICAgICAgJzIwMjEvOSc6IDQ4NSxcclxuICAgICAgICAnMjAyMS82JzogNTIxLFxyXG4gICAgICAgICcyMDIxLzMnOiA0MTEsXHJcbiAgICAgICAgJzIwMjAvMTInOjQ2MCxcclxuICAgICAgICAnMjAyMC85JzogNDY2LFxyXG4gICAgICAgICcyMDIwLzYnOiAzNzAsXHJcbiAgICAgICAgJzIwMjAvMyc6IDAsXHJcbiAgICAgICAgJzIwMTkvMTInOjAsXHJcbiAgICAgICAgJzIwMTkvOSc6IDAsXHJcbiAgICAgICAgJzIwMTkvNic6IDAsXHJcbiAgICAgICAgJzIwMTkvMyc6MCAsXHJcbiAgICAgICAgJzIwMTgvMTInOjAsXHJcbiAgICAgICAgJzIwMTgvOSc6IDAsXHJcbiAgICAgICAgJzIwMTgvNic6IDAsXHJcbiAgICAgICAgJzIwMTgvMyc6IDAsXHJcbiAgICAgICAgJzIwMTcvMTInOjAsXHJcbiAgICAgICAgJzIwMTcvOSc6IDAsXHJcbiAgICAgICAgJzIwMTcvNic6IDAsXHJcbiAgICAgICAgJzIwMTcvMyc6IDAsXHJcbiAgICAgICAgJzIwMTYvMTInOjAsXHJcbiAgICAgICAgJzIwMTYvOSc6IDAsXHJcbiAgICAgICAgJzIwMTYvNic6IDAsXHJcbiAgICAgICAgJzIwMTYvMyc6IDAsXHJcbiAgICAgICAgJzIwMTUvMTInOjAsXHJcbiAgICAgICAgJzIwMTUvOSc6IDAsXHJcbiAgICAgICAgJzIwMTUvNic6IDAsXHJcbiAgICAgICAgJzIwMTUvMyc6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoeF9saXN0KSB8fCAhQXJyYXkuaXNBcnJheSh5X2xpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihcIklucHV0IGxpc3RzIGFyZSBub3QgYXJyYXlzLlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh4X2xpc3QubGVuZ3RoID09PSAwIHx8IHlfbGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgIEVycm9yKFwiSW5wdXQgbGlzdHMgYXJlIGVtcHR5LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHhfbGlzdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHlfbGlzdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFydF9kYXRhOiB7IHg6IHN0cmluZywgeTogbnVtYmVyIH1bXSA9IHhfbGlzdC5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydGVkWTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ3VycmVuY3kgPT09IFwiTGlyYVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVkWSA9IHlfbGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ3VycmVuY3kgPT09IFwiRG9sbGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRZID0geV9saXN0W2luZGV4XSAvIGRvbGxhcl9yYXRlc1t4XTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDdXJyZW5jeSA9PT0gXCJHb2xkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRZID0geV9saXN0W2luZGV4XSAvIGdvbGRfcmF0ZXNfcmF0ZXNbeF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGNvbnZlcnRlZFlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjaGFydF9kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfSJdLCJuYW1lcyI6WyJDb2xsZWN0VGltZURhdGEiLCJyZXNwb25zZSIsInN0b2NrX25hbWUiLCJmaW5hbmNpYWxfc3RhdGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJoaXNzZV9hZGkiLCJiaWxhbmNvX2thbGVtaSIsIm1hcCIsInphbWFuIiwiQ29sbGVjdFN0b2NrVmFsdWVEYXRhIiwicGFyc2VGbG9hdCIsImRlZ2VyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiQ3JlYXRlQ2hhcnREYXRhIiwieF9saXN0IiwieV9saXN0Iiwic2VsZWN0ZWRDdXJyZW5jeSIsImRvbGxhcl9yYXRlcyIsImdvbGRfcmF0ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJyZXZlcnNlIiwiY2hhcnRfZGF0YSIsIngiLCJpbmRleCIsImNvbnZlcnRlZFkiLCJnb2xkX3JhdGVzX3JhdGVzIiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});