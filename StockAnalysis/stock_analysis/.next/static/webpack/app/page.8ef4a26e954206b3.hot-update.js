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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\nfunction CreateChartData(x_list, y_list, selectedCurrency) {\n    const dollar_rates = {\n        \"2024/3\": 31.38,\n        \"2023/12\": 28.89,\n        \"2023/9\": 26.69,\n        \"2023/6\": 20.95,\n        \"2023/3\": 18.81,\n        \"2022/12\": 18.63,\n        \"2022/9\": 18.19,\n        \"2022/6\": 16.41,\n        \"2022/3\": 14.18,\n        \"2021/12\": 13.07,\n        \"2021/9\": 8.30,\n        \"2021/6\": 7.30,\n        \"2021/3\": 7.20,\n        \"2020/12\": 7.10,\n        \"2020/9\": 7.00,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.80,\n        \"2019/12\": 6.70,\n        \"2019/9\": 6.60,\n        \"2019/6\": 6.50,\n        \"2019/3\": 6.40,\n        \"2018/12\": 6.30,\n        \"2018/9\": 6.20,\n        \"2018/6\": 6.10,\n        \"2018/3\": 6.00,\n        \"2017/12\": 5.90,\n        \"2017/9\": 5.80,\n        \"2017/6\": 5.70,\n        \"2017/3\": 5.60,\n        \"2016/12\": 5.50,\n        \"2016/9\": 5.40,\n        \"2016/6\": 5.30,\n        \"2016/3\": 5.20,\n        \"2015/12\": 5.10,\n        \"2015/9\": 5.00,\n        \"2015/6\": 4.90,\n        \"2015/3\": 4.80\n    };\n    const gold_rates = {\n        \"2024/3\": 31.38,\n        \"2023/12\": 28.89,\n        \"2023/9\": 26.69,\n        \"2023/6\": 20.95,\n        \"2023/3\": 18.81,\n        \"2022/12\": 18.63,\n        \"2022/9\": 18.19,\n        \"2022/6\": 16.41,\n        \"2022/3\": 14.18,\n        \"2021/12\": 13.07,\n        \"2021/9\": 8.30,\n        \"2021/6\": 7.30,\n        \"2021/3\": 7.20,\n        \"2020/12\": 7.10,\n        \"2020/9\": 7.00,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.80,\n        \"2019/12\": 6.70,\n        \"2019/9\": 6.60,\n        \"2019/6\": 6.50,\n        \"2019/3\": 6.40,\n        \"2018/12\": 6.30,\n        \"2018/9\": 6.20,\n        \"2018/6\": 6.10,\n        \"2018/3\": 6.00,\n        \"2017/12\": 5.90,\n        \"2017/9\": 5.80,\n        \"2017/6\": 5.70,\n        \"2017/3\": 5.60,\n        \"2016/12\": 5.50,\n        \"2016/9\": 5.40,\n        \"2016/6\": 5.30,\n        \"2016/3\": 5.20,\n        \"2015/12\": 5.10,\n        \"2015/9\": 5.00,\n        \"2015/6\": 4.90,\n        \"2015/3\": 4.80\n    };\n    try {\n        if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        //throw new Error(\"Input lists are not arrays.\");\n        } else if (x_list.length === 0 || y_list.length === 0) {\n        //throw  Error(\"Input lists are empty.\");\n        }\n        x_list.reverse();\n        y_list.reverse();\n        const chart_data = x_list.map((x, index)=>{\n            const y = y_list[index];\n            let convertedY = 0;\n            if (selectedCurrency === \"Lira\") {\n                convertedY = y;\n            } else if (selectedCurrency === \"Dollar\") {\n                convertedY = y / dollar_rates[x];\n            }\n            return {\n                x: x,\n                y: convertedY\n            };\n        });\n        return chart_data;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxlQUFlQSxnQkFBZ0JDLFFBQTJCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUM5RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUNuQkMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFDNUZRLEdBQUcsQ0FBQyxDQUFDSCxPQUFhQSxLQUFLSSxLQUFLO0FBQ2pDO0FBRU8sZUFBZUMsc0JBQXNCWixRQUEyQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDcEgsSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0g7UUFDRixPQUFPTSxXQUFXTixLQUFLTyxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDNUU7QUFDSjtBQUVPLFNBQVNDLGdCQUFnQkMsTUFBZ0IsRUFBRUMsTUFBZ0IsRUFBQ0MsZ0JBQXVCO0lBRXRGLE1BQU1DLGVBQXVDO1FBQ3pDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUVBLE1BQU1DLGFBQXFDO1FBQ3ZDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUVJLElBQUk7UUFDQSxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ04sV0FBVyxDQUFDSyxNQUFNQyxPQUFPLENBQUNMLFNBQVM7UUFDbEQsaURBQWlEO1FBQ3JELE9BQU8sSUFBSUQsT0FBT08sTUFBTSxLQUFLLEtBQUtOLE9BQU9NLE1BQU0sS0FBSyxHQUFHO1FBQ25ELHlDQUF5QztRQUM3QztRQUVBUCxPQUFPUSxPQUFPO1FBQ2RQLE9BQU9PLE9BQU87UUFFZCxNQUFNQyxhQUF5Q1QsT0FBT1IsR0FBRyxDQUFDLENBQUNrQixHQUFHQztZQUMxRCxNQUFNQyxJQUFJWCxNQUFNLENBQUNVLE1BQU07WUFJdkIsSUFBSUUsYUFBcUI7WUFFekIsSUFBSVgscUJBQXFCLFFBQVE7Z0JBQzdCVyxhQUFhRDtZQUNqQixPQUFPLElBQUlWLHFCQUFxQixVQUFVO2dCQUN0Q1csYUFBYUQsSUFBSVQsWUFBWSxDQUFDTyxFQUFFO1lBQ3BDO1lBSUEsT0FBTztnQkFDSEEsR0FBR0E7Z0JBQ0hFLEdBQUdDO1lBQ1A7UUFDSjtRQUVBLE9BQU9KO0lBQ1gsRUFBRSxPQUFPdkIsT0FBTztRQUNaRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTyxFQUFFO0lBQ2I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NoYXJ0RGF0YVByZXBhcmUvcGFnZXMudHM/YTUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZldGNoRGF0YSxEYXRhLCBGZXRjaEVycm9yIH0gZnJvbSAnLi4vRGF0YVNlcnZpY2UvcGFnZXMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RUaW1lRGF0YShyZXNwb25zZTogRGF0YSB8IEZldGNoRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbTphbnkpID0+IGl0ZW0uemFtYW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRmV0Y2hFcnJvciwgc3RvY2tfbmFtZTogc3RyaW5nLCBmaW5hbmNpYWxfc3RhdGVtZW50OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICBpZiAoJ2Vycm9yJyBpbiByZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIC5maWx0ZXIoKGl0ZW0gOmFueSkgPT4gaXRlbS5oaXNzZV9hZGkgPT09IHN0b2NrX25hbWUgJiYgaXRlbS5iaWxhbmNvX2thbGVtaSA9PT0gc3RvY2tfbmFtZSArIGZpbmFuY2lhbF9zdGF0ZW1lbnQpXHJcbiAgICAubWFwKChpdGVtIDphbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLmRlZ2VyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdLHNlbGVjdGVkQ3VycmVuY3k6c3RyaW5nKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG4gICAgXHJcbiAgICBjb25zdCBkb2xsYXJfcmF0ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgJzIwMjQvMyc6IDMxLjM4LFxyXG4gICAgICAgICcyMDIzLzEyJzogMjguODksXHJcbiAgICAgICAgJzIwMjMvOSc6IDI2LjY5LFxyXG4gICAgICAgICcyMDIzLzYnOiAyMC45NSxcclxuICAgICAgICAnMjAyMy8zJzogMTguODEsXHJcbiAgICAgICAgJzIwMjIvMTInOiAxOC42MyxcclxuICAgICAgICAnMjAyMi85JzogMTguMTksXHJcbiAgICAgICAgJzIwMjIvNic6IDE2LjQxLFxyXG4gICAgICAgICcyMDIyLzMnOiAxNC4xOCxcclxuICAgICAgICAnMjAyMS8xMic6IDEzLjA3LFxyXG4gICAgICAgICcyMDIxLzknOiA4LjMwLFxyXG4gICAgICAgICcyMDIxLzYnOiA3LjMwLFxyXG4gICAgICAgICcyMDIxLzMnOiA3LjIwLFxyXG4gICAgICAgICcyMDIwLzEyJzogNy4xMCxcclxuICAgICAgICAnMjAyMC85JzogNy4wMCxcclxuICAgICAgICAnMjAyMC82JzogNi45MCxcclxuICAgICAgICAnMjAyMC8zJzogNi44MCxcclxuICAgICAgICAnMjAxOS8xMic6IDYuNzAsXHJcbiAgICAgICAgJzIwMTkvOSc6IDYuNjAsXHJcbiAgICAgICAgJzIwMTkvNic6IDYuNTAsXHJcbiAgICAgICAgJzIwMTkvMyc6IDYuNDAsXHJcbiAgICAgICAgJzIwMTgvMTInOiA2LjMwLFxyXG4gICAgICAgICcyMDE4LzknOiA2LjIwLFxyXG4gICAgICAgICcyMDE4LzYnOiA2LjEwLFxyXG4gICAgICAgICcyMDE4LzMnOiA2LjAwLFxyXG4gICAgICAgICcyMDE3LzEyJzogNS45MCxcclxuICAgICAgICAnMjAxNy85JzogNS44MCxcclxuICAgICAgICAnMjAxNy82JzogNS43MCxcclxuICAgICAgICAnMjAxNy8zJzogNS42MCxcclxuICAgICAgICAnMjAxNi8xMic6IDUuNTAsXHJcbiAgICAgICAgJzIwMTYvOSc6IDUuNDAsXHJcbiAgICAgICAgJzIwMTYvNic6IDUuMzAsXHJcbiAgICAgICAgJzIwMTYvMyc6IDUuMjAsXHJcbiAgICAgICAgJzIwMTUvMTInOiA1LjEwLFxyXG4gICAgICAgICcyMDE1LzknOiA1LjAwLFxyXG4gICAgICAgICcyMDE1LzYnOiA0LjkwLFxyXG4gICAgICAgICcyMDE1LzMnOiA0LjgwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnb2xkX3JhdGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICcyMDI0LzMnOiAzMS4zOCxcclxuICAgICAgICAnMjAyMy8xMic6IDI4Ljg5LFxyXG4gICAgICAgICcyMDIzLzknOiAyNi42OSxcclxuICAgICAgICAnMjAyMy82JzogMjAuOTUsXHJcbiAgICAgICAgJzIwMjMvMyc6IDE4LjgxLFxyXG4gICAgICAgICcyMDIyLzEyJzogMTguNjMsXHJcbiAgICAgICAgJzIwMjIvOSc6IDE4LjE5LFxyXG4gICAgICAgICcyMDIyLzYnOiAxNi40MSxcclxuICAgICAgICAnMjAyMi8zJzogMTQuMTgsXHJcbiAgICAgICAgJzIwMjEvMTInOiAxMy4wNyxcclxuICAgICAgICAnMjAyMS85JzogOC4zMCxcclxuICAgICAgICAnMjAyMS82JzogNy4zMCxcclxuICAgICAgICAnMjAyMS8zJzogNy4yMCxcclxuICAgICAgICAnMjAyMC8xMic6IDcuMTAsXHJcbiAgICAgICAgJzIwMjAvOSc6IDcuMDAsXHJcbiAgICAgICAgJzIwMjAvNic6IDYuOTAsXHJcbiAgICAgICAgJzIwMjAvMyc6IDYuODAsXHJcbiAgICAgICAgJzIwMTkvMTInOiA2LjcwLFxyXG4gICAgICAgICcyMDE5LzknOiA2LjYwLFxyXG4gICAgICAgICcyMDE5LzYnOiA2LjUwLFxyXG4gICAgICAgICcyMDE5LzMnOiA2LjQwLFxyXG4gICAgICAgICcyMDE4LzEyJzogNi4zMCxcclxuICAgICAgICAnMjAxOC85JzogNi4yMCxcclxuICAgICAgICAnMjAxOC82JzogNi4xMCxcclxuICAgICAgICAnMjAxOC8zJzogNi4wMCxcclxuICAgICAgICAnMjAxNy8xMic6IDUuOTAsXHJcbiAgICAgICAgJzIwMTcvOSc6IDUuODAsXHJcbiAgICAgICAgJzIwMTcvNic6IDUuNzAsXHJcbiAgICAgICAgJzIwMTcvMyc6IDUuNjAsXHJcbiAgICAgICAgJzIwMTYvMTInOiA1LjUwLFxyXG4gICAgICAgICcyMDE2LzknOiA1LjQwLFxyXG4gICAgICAgICcyMDE2LzYnOiA1LjMwLFxyXG4gICAgICAgICcyMDE2LzMnOiA1LjIwLFxyXG4gICAgICAgICcyMDE1LzEyJzogNS4xMCxcclxuICAgICAgICAnMjAxNS85JzogNS4wMCxcclxuICAgICAgICAnMjAxNS82JzogNC45MCxcclxuICAgICAgICAnMjAxNS8zJzogNC44MCxcclxuICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbGlzdHMgYXJlIG5vdCBhcnJheXMuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhfbGlzdC5sZW5ndGggPT09IDAgfHwgeV9saXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyAgRXJyb3IoXCJJbnB1dCBsaXN0cyBhcmUgZW1wdHkuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgICAgICAgICAgeV9saXN0LnJldmVyc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0X2RhdGE6IHsgeDogc3RyaW5nLCB5OiBudW1iZXIgfVtdID0geF9saXN0Lm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB5X2xpc3RbaW5kZXhdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnZlcnRlZFk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ3VycmVuY3kgPT09IFwiTGlyYVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVydGVkWSA9IHk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ3VycmVuY3kgPT09IFwiRG9sbGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRZID0geSAvIGRvbGxhcl9yYXRlc1t4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29udmVydGVkWVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJ0X2RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9Il0sIm5hbWVzIjpbIkNvbGxlY3RUaW1lRGF0YSIsInJlc3BvbnNlIiwic3RvY2tfbmFtZSIsImZpbmFuY2lhbF9zdGF0ZW1lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsImhpc3NlX2FkaSIsImJpbGFuY29fa2FsZW1pIiwibWFwIiwiemFtYW4iLCJDb2xsZWN0U3RvY2tWYWx1ZURhdGEiLCJwYXJzZUZsb2F0IiwiZGVnZXIiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJDcmVhdGVDaGFydERhdGEiLCJ4X2xpc3QiLCJ5X2xpc3QiLCJzZWxlY3RlZEN1cnJlbmN5IiwiZG9sbGFyX3JhdGVzIiwiZ29sZF9yYXRlcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJldmVyc2UiLCJjaGFydF9kYXRhIiwieCIsImluZGV4IiwieSIsImNvbnZlcnRlZFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});