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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\nfunction CreateChartData(x_list, y_list, selectedCurrency) {\n    const dollar_rates = {\n        \"2024/3\": 31.38,\n        \"2023/12\": 28.89,\n        \"2023/9\": 26.69,\n        \"2023/6\": 20.95,\n        \"2023/3\": 18.81,\n        \"2022/12\": 18.63,\n        \"2022/9\": 18.19,\n        \"2022/6\": 16.41,\n        \"2022/3\": 14.18,\n        \"2021/12\": 13.07,\n        \"2021/9\": 8.30,\n        \"2021/6\": 8.61,\n        \"2021/3\": 7.53,\n        \"2020/12\": 7.79,\n        \"2020/9\": 7.43,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.76,\n        \"2019/12\": 5.80,\n        \"2019/9\": 5.71,\n        \"2019/6\": 5.80,\n        \"2019/3\": 0,\n        \"2018/12\": 0,\n        \"2018/9\": 0,\n        \"2018/6\": 0,\n        \"2018/3\": 0,\n        \"2017/12\": 0,\n        \"2017/9\": 0,\n        \"2017/6\": 0,\n        \"2017/3\": 0,\n        \"2016/12\": 0,\n        \"2016/9\": 0,\n        \"2016/6\": 0,\n        \"2016/3\": 0,\n        \"2015/12\": 0,\n        \"2015/9\": 0,\n        \"2015/6\": 0,\n        \"2015/3\": 0\n    };\n    const gold_rates = {\n        \"2024/3\": 2234,\n        \"2023/12\": 1864,\n        \"2023/9\": 1665,\n        \"2023/6\": 1313,\n        \"2023/3\": 1126,\n        \"2022/12\": 1070,\n        \"2022/9\": 1000,\n        \"2022/6\": 977,\n        \"2022/3\": 900,\n        \"2021/12\": 800,\n        \"2021/9\": 485,\n        \"2021/6\": 521,\n        \"2021/3\": 411,\n        \"2020/12\": 460,\n        \"2020/9\": 466,\n        \"2020/6\": 370\n    };\n    try {\n        if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        //throw new Error(\"Input lists are not arrays.\");\n        } else if (x_list.length === 0 || y_list.length === 0) {\n        //throw  Error(\"Input lists are empty.\");\n        }\n        x_list.reverse();\n        y_list.reverse();\n        const chart_data = x_list.map((x, index)=>{\n            let convertedY = 0;\n            if (selectedCurrency === \"Lira\") {\n                convertedY = y_list[index];\n            } else if (selectedCurrency === \"Dollar\") {\n                convertedY = y_list[index] / dollar_rates[x];\n            } else if (selectedCurrency === \"Gold\") {\n                convertedY = y_list[index] / gold_rates[x];\n            }\n            return {\n                x: x,\n                y: convertedY\n            };\n        });\n        return chart_data;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxlQUFlQSxnQkFBZ0JDLFFBQTJCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUM5RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUNuQkMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFDNUZRLEdBQUcsQ0FBQyxDQUFDSCxPQUFhQSxLQUFLSSxLQUFLO0FBQ2pDO0FBRU8sZUFBZUMsc0JBQXNCWixRQUEyQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDcEgsSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0g7UUFDRixPQUFPTSxXQUFXTixLQUFLTyxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDNUU7QUFDSjtBQUVPLFNBQVNDLGdCQUFnQkMsTUFBZ0IsRUFBRUMsTUFBZ0IsRUFBQ0MsZ0JBQXVCO0lBRXRGLE1BQU1DLGVBQXVDO1FBQ3pDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUVBLE1BQU1DLGFBQXFDO1FBQ3ZDLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBUztRQUNULFVBQVM7UUFDVCxVQUFTO1FBQ1QsV0FBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFFZDtJQUVJLElBQUk7UUFDQSxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ04sV0FBVyxDQUFDSyxNQUFNQyxPQUFPLENBQUNMLFNBQVM7UUFDbEQsaURBQWlEO1FBQ3JELE9BQU8sSUFBSUQsT0FBT08sTUFBTSxLQUFLLEtBQUtOLE9BQU9NLE1BQU0sS0FBSyxHQUFHO1FBQ25ELHlDQUF5QztRQUM3QztRQUVBUCxPQUFPUSxPQUFPO1FBQ2RQLE9BQU9PLE9BQU87UUFFZCxNQUFNQyxhQUF5Q1QsT0FBT1IsR0FBRyxDQUFDLENBQUNrQixHQUFHQztZQUMxRCxJQUFJQyxhQUFxQjtZQUd6QixJQUFJVixxQkFBcUIsUUFBUTtnQkFDN0JVLGFBQWFYLE1BQU0sQ0FBQ1UsTUFBTTtZQUM5QixPQUFPLElBQUlULHFCQUFxQixVQUFVO2dCQUN0Q1UsYUFBYVgsTUFBTSxDQUFDVSxNQUFNLEdBQUdSLFlBQVksQ0FBQ08sRUFBRTtZQUNoRCxPQUFPLElBQUlSLHFCQUFxQixRQUFRO2dCQUNwQ1UsYUFBYVgsTUFBTSxDQUFDVSxNQUFNLEdBQUdQLFVBQVUsQ0FBQ00sRUFBRTtZQUM5QztZQUlBLE9BQU87Z0JBQ0hBLEdBQUdBO2dCQUNIRyxHQUFHRDtZQUNQO1FBQ0o7UUFFQSxPQUFPSDtJQUNYLEVBQUUsT0FBT3ZCLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU8sRUFBRTtJQUNiO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaGFydERhdGFQcmVwYXJlL3BhZ2VzLnRzP2E1MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmZXRjaERhdGEsRGF0YSwgRmV0Y2hFcnJvciB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL3BhZ2VzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDb2xsZWN0VGltZURhdGEocmVzcG9uc2U6IERhdGEgfCBGZXRjaEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgLmZpbHRlcigoaXRlbSA6YW55KSA9PiBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudClcclxuICAgIC5tYXAoKGl0ZW06YW55KSA9PiBpdGVtLnphbWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RTdG9ja1ZhbHVlRGF0YShyZXNwb25zZTogRGF0YSB8IEZldGNoRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbSA6YW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbS5kZWdlci50b1N0cmluZygpLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDaGFydERhdGEoeF9saXN0OiBzdHJpbmdbXSwgeV9saXN0OiBudW1iZXJbXSxzZWxlY3RlZEN1cnJlbmN5OnN0cmluZyk6IHsgeDogc3RyaW5nLCB5OiBudW1iZXIgfVtdIHtcclxuICAgIFxyXG4gICAgY29uc3QgZG9sbGFyX3JhdGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICcyMDI0LzMnOiAzMS4zOCxcclxuICAgICAgICAnMjAyMy8xMic6IDI4Ljg5LFxyXG4gICAgICAgICcyMDIzLzknOiAyNi42OSxcclxuICAgICAgICAnMjAyMy82JzogMjAuOTUsXHJcbiAgICAgICAgJzIwMjMvMyc6IDE4LjgxLFxyXG4gICAgICAgICcyMDIyLzEyJzogMTguNjMsXHJcbiAgICAgICAgJzIwMjIvOSc6IDE4LjE5LFxyXG4gICAgICAgICcyMDIyLzYnOiAxNi40MSxcclxuICAgICAgICAnMjAyMi8zJzogMTQuMTgsXHJcbiAgICAgICAgJzIwMjEvMTInOiAxMy4wNyxcclxuICAgICAgICAnMjAyMS85JzogOC4zMCxcclxuICAgICAgICAnMjAyMS82JzogOC42MSxcclxuICAgICAgICAnMjAyMS8zJzogNy41MyxcclxuICAgICAgICAnMjAyMC8xMic6IDcuNzksXHJcbiAgICAgICAgJzIwMjAvOSc6IDcuNDMsXHJcbiAgICAgICAgJzIwMjAvNic6IDYuOTAsXHJcbiAgICAgICAgJzIwMjAvMyc6IDYuNzYsXHJcbiAgICAgICAgJzIwMTkvMTInOiA1LjgwLFxyXG4gICAgICAgICcyMDE5LzknOiA1LjcxLFxyXG4gICAgICAgICcyMDE5LzYnOiA1LjgwLFxyXG4gICAgICAgICcyMDE5LzMnOiAwLFxyXG4gICAgICAgICcyMDE4LzEyJzogMCxcclxuICAgICAgICAnMjAxOC85JzogMCxcclxuICAgICAgICAnMjAxOC82JzogMCxcclxuICAgICAgICAnMjAxOC8zJzogMCxcclxuICAgICAgICAnMjAxNy8xMic6MCxcclxuICAgICAgICAnMjAxNy85JzogMCxcclxuICAgICAgICAnMjAxNy82JzogMCxcclxuICAgICAgICAnMjAxNy8zJzogMCxcclxuICAgICAgICAnMjAxNi8xMic6MCxcclxuICAgICAgICAnMjAxNi85JzogMCxcclxuICAgICAgICAnMjAxNi82JzogMCxcclxuICAgICAgICAnMjAxNi8zJzogMCxcclxuICAgICAgICAnMjAxNS8xMic6MCxcclxuICAgICAgICAnMjAxNS85JzogMCxcclxuICAgICAgICAnMjAxNS82JzogMCxcclxuICAgICAgICAnMjAxNS8zJzogMCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ29sZF9yYXRlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHtcclxuICAgICAgICAnMjAyNC8zJzogMjIzNCxcclxuICAgICAgICAnMjAyMy8xMic6IDE4NjQsXHJcbiAgICAgICAgJzIwMjMvOSc6MTY2NSxcclxuICAgICAgICAnMjAyMy82JzoxMzEzICxcclxuICAgICAgICAnMjAyMy8zJzoxMTI2LFxyXG4gICAgICAgICcyMDIyLzEyJzoxMDcwLFxyXG4gICAgICAgICcyMDIyLzknOiAxMDAwLFxyXG4gICAgICAgICcyMDIyLzYnOiA5NzcsXHJcbiAgICAgICAgJzIwMjIvMyc6IDkwMCxcclxuICAgICAgICAnMjAyMS8xMic6ODAwLFxyXG4gICAgICAgICcyMDIxLzknOiA0ODUsXHJcbiAgICAgICAgJzIwMjEvNic6IDUyMSxcclxuICAgICAgICAnMjAyMS8zJzogNDExLFxyXG4gICAgICAgICcyMDIwLzEyJzo0NjAsXHJcbiAgICAgICAgJzIwMjAvOSc6IDQ2NixcclxuICAgICAgICAnMjAyMC82JzogMzcwLFxyXG5cclxuICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbGlzdHMgYXJlIG5vdCBhcnJheXMuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhfbGlzdC5sZW5ndGggPT09IDAgfHwgeV9saXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyAgRXJyb3IoXCJJbnB1dCBsaXN0cyBhcmUgZW1wdHkuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgICAgICAgICAgeV9saXN0LnJldmVyc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0X2RhdGE6IHsgeDogc3RyaW5nLCB5OiBudW1iZXIgfVtdID0geF9saXN0Lm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0ZWRZOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRDdXJyZW5jeSA9PT0gXCJMaXJhXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRZID0geV9saXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDdXJyZW5jeSA9PT0gXCJEb2xsYXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZFkgPSB5X2xpc3RbaW5kZXhdIC8gZG9sbGFyX3JhdGVzW3hdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEN1cnJlbmN5ID09PSBcIkdvbGRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZFkgPSB5X2xpc3RbaW5kZXhdIC8gZ29sZF9yYXRlc1t4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogY29udmVydGVkWVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJ0X2RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9Il0sIm5hbWVzIjpbIkNvbGxlY3RUaW1lRGF0YSIsInJlc3BvbnNlIiwic3RvY2tfbmFtZSIsImZpbmFuY2lhbF9zdGF0ZW1lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsImhpc3NlX2FkaSIsImJpbGFuY29fa2FsZW1pIiwibWFwIiwiemFtYW4iLCJDb2xsZWN0U3RvY2tWYWx1ZURhdGEiLCJwYXJzZUZsb2F0IiwiZGVnZXIiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJDcmVhdGVDaGFydERhdGEiLCJ4X2xpc3QiLCJ5X2xpc3QiLCJzZWxlY3RlZEN1cnJlbmN5IiwiZG9sbGFyX3JhdGVzIiwiZ29sZF9yYXRlcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJldmVyc2UiLCJjaGFydF9kYXRhIiwieCIsImluZGV4IiwiY29udmVydGVkWSIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});