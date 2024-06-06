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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   ConvertStockValuesToUSD: function() { return /* binding */ ConvertStockValuesToUSD; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\n/* harmony import */ var _DataService_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataService/pages */ \"(app-pages-browser)/./src/app/DataService/pages.ts\");\n\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\nasync function ConvertStockValuesToUSD(stockName, financialStatement) {\n    const exchangeRates = {\n        \"2024/3\": 31.38,\n        \"2023/12\": 28.,\n        \"2023/9\": 8.20,\n        \"2023/6\": 8.10,\n        \"2023/3\": 8.00,\n        \"2022/12\": 7.90,\n        \"2022/9\": 7.80,\n        \"2022/6\": 7.70,\n        \"2022/3\": 7.60,\n        \"2021/12\": 7.50,\n        \"2021/9\": 7.40,\n        \"2021/6\": 7.30,\n        \"2021/3\": 7.20,\n        \"2020/12\": 7.10,\n        \"2020/9\": 7.00,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.80,\n        \"2019/12\": 6.70,\n        \"2019/9\": 6.60,\n        \"2019/6\": 6.50,\n        \"2019/3\": 6.40,\n        \"2018/12\": 6.30,\n        \"2018/9\": 6.20,\n        \"2018/6\": 6.10,\n        \"2018/3\": 6.00,\n        \"2017/12\": 5.90,\n        \"2017/9\": 5.80,\n        \"2017/6\": 5.70,\n        \"2017/3\": 5.60,\n        \"2016/12\": 5.50,\n        \"2016/9\": 5.40,\n        \"2016/6\": 5.30,\n        \"2016/3\": 5.20,\n        \"2015/12\": 5.10,\n        \"2015/9\": 5.00,\n        \"2015/6\": 4.90,\n        \"2015/3\": 4.80\n    };\n    try {\n        const responseData = await (0,_DataService_pages__WEBPACK_IMPORTED_MODULE_0__.fetchData)(stockName, financialStatement);\n        if (\"error\" in responseData) {\n            throw new _DataService_pages__WEBPACK_IMPORTED_MODULE_0__.Error(\"Error fetching data\");\n        }\n        const timeData = await CollectTimeData(responseData, stockName, financialStatement);\n        const stockValues = await CollectStockValueData(responseData, stockName, financialStatement);\n        const stockValuesInUSD = [];\n        for(let i = 0; i < timeData.length; i++){\n            const time = timeData[i];\n            const exchangeRate = exchangeRates[time]; // İlgili tarihe karşılık gelen döviz kuru\n            if (exchangeRate === undefined) {\n            // İlgili tarih için döviz kuru bulunamadı\n            //throw new Error(`Exchange rate not found for date: ${time}`);\n            }\n            const convertedValue = stockValues[i] / exchangeRate;\n            stockValuesInUSD.push(convertedValue);\n        }\n        return stockValuesInUSD;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\n/*\r\nexport function CreateChartData(x_list: string[], y_list: number[]): { x: string, y: number }[] {\r\n\r\n    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\r\n        console.error(\"not arr.\");\r\n        return [];\r\n    } else if (x_list.length === 0 || y_list.length === 0) {\r\n        console.error(\"empty arr.\");\r\n        return [];\r\n    }\r\n\r\n    x_list.reverse();\r\n    y_list.reverse();\r\n\r\n    const chart_data = x_list.map((x, index) => {\r\n        const y = y_list[index];\r\n        return {\r\n            x: x,\r\n            y: y\r\n        };\r\n    });\r\n\r\n    return chart_data;\r\n}\r\n*/ function CreateChartData(x_list, y_list) {\n    const exchangeRates = {\n        \"2024/3\": 8.50,\n        \"2023/12\": 8.30,\n        \"2023/9\": 8.20,\n        \"2023/6\": 8.10,\n        \"2023/3\": 8.00,\n        \"2022/12\": 7.90,\n        \"2022/9\": 7.80,\n        \"2022/6\": 7.70,\n        \"2022/3\": 7.60,\n        \"2021/12\": 7.50,\n        \"2021/9\": 7.40,\n        \"2021/6\": 7.30,\n        \"2021/3\": 7.20,\n        \"2020/12\": 7.10,\n        \"2020/9\": 7.00,\n        \"2020/6\": 6.90,\n        \"2020/3\": 6.80,\n        \"2019/12\": 6.70,\n        \"2019/9\": 6.60,\n        \"2019/6\": 6.50\n    };\n    try {\n        if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n            throw new _DataService_pages__WEBPACK_IMPORTED_MODULE_0__.Error(\"Input lists are not arrays.\");\n        } else if (x_list.length === 0 || y_list.length === 0) {\n            throw new _DataService_pages__WEBPACK_IMPORTED_MODULE_0__.Error(\"Input lists are empty.\");\n        }\n        // x_list'i dolar kurlarına göre bölerek dönüştür\n        const chart_data = x_list.map((x, index)=>{\n            const y = y_list[index];\n            const exchangeRate = exchangeRates[x];\n            if (exchangeRate === undefined) {\n                throw new _DataService_pages__WEBPACK_IMPORTED_MODULE_0__.Error(\"Exchange rate not found for date: \".concat(x));\n            }\n            const convertedY = y / exchangeRate;\n            return {\n                x: x,\n                y: convertedY\n            };\n        });\n        return chart_data;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0RDtBQUVyRCxlQUFlRSxnQkFBZ0JDLFFBQXNCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUN6RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUNuQkMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFDNUZRLEdBQUcsQ0FBQyxDQUFDSCxPQUFhQSxLQUFLSSxLQUFLO0FBQ2pDO0FBRU8sZUFBZUMsc0JBQXNCWixRQUFzQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDL0csSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0g7UUFDRixPQUFPTSxXQUFXTixLQUFLTyxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDNUU7QUFDSjtBQUVPLGVBQWVDLHdCQUF3QkMsU0FBaUIsRUFBRUMsa0JBQTBCO0lBQ3ZGLE1BQU1DLGdCQUF3QztRQUMxQyxVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFFQSxJQUFJO1FBQ0EsTUFBTUMsZUFBNkIsTUFBTXhCLDZEQUFTQSxDQUFDcUIsV0FBV0M7UUFFOUQsSUFBSSxXQUFXRSxjQUFjO1lBQ3pCLE1BQU0sSUFBSXZCLHFEQUFLQSxDQUFDO1FBQ3BCO1FBRUEsTUFBTXdCLFdBQXFCLE1BQU12QixnQkFBZ0JzQixjQUFjSCxXQUFXQztRQUMxRSxNQUFNSSxjQUF3QixNQUFNWCxzQkFBc0JTLGNBQWNILFdBQVdDO1FBRW5GLE1BQU1LLG1CQUE2QixFQUFFO1FBRXJDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxTQUFTSSxNQUFNLEVBQUVELElBQUs7WUFDdEMsTUFBTUUsT0FBZUwsUUFBUSxDQUFDRyxFQUFFO1lBQ2hDLE1BQU1HLGVBQW1DUixhQUFhLENBQUNPLEtBQUssRUFBRSwwQ0FBMEM7WUFDeEcsSUFBSUMsaUJBQWlCQyxXQUFXO1lBQzVCLDBDQUEwQztZQUMxQywrREFBK0Q7WUFDbkU7WUFDQSxNQUFNQyxpQkFBeUJQLFdBQVcsQ0FBQ0UsRUFBRSxHQUFHRztZQUNoREosaUJBQWlCTyxJQUFJLENBQUNEO1FBQzFCO1FBRUEsT0FBT047SUFDWCxFQUFFLE9BQU9wQixPQUFPO1FBQ1pELFFBQVFDLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPLEVBQUU7SUFDYjtBQUNKO0FBR0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCRixHQUdPLFNBQVM0QixnQkFBZ0JDLE1BQWdCLEVBQUVDLE1BQWdCO0lBRTlELE1BQU1kLGdCQUF3QztRQUMxQyxVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBSUksSUFBSTtRQUNBLElBQUksQ0FBQ2UsTUFBTUMsT0FBTyxDQUFDSCxXQUFXLENBQUNFLE1BQU1DLE9BQU8sQ0FBQ0YsU0FBUztZQUNsRCxNQUFNLElBQUlwQyxxREFBS0EsQ0FBQztRQUNwQixPQUFPLElBQUltQyxPQUFPUCxNQUFNLEtBQUssS0FBS1EsT0FBT1IsTUFBTSxLQUFLLEdBQUc7WUFDbkQsTUFBTSxJQUFJNUIscURBQUtBLENBQUM7UUFDcEI7UUFFQSxpREFBaUQ7UUFDakQsTUFBTXVDLGFBQXlDSixPQUFPdkIsR0FBRyxDQUFDLENBQUM0QixHQUFHQztZQUMxRCxNQUFNQyxJQUFJTixNQUFNLENBQUNLLE1BQU07WUFDdkIsTUFBTVgsZUFBbUNSLGFBQWEsQ0FBQ2tCLEVBQUU7WUFDekQsSUFBSVYsaUJBQWlCQyxXQUFXO2dCQUM1QixNQUFNLElBQUkvQixxREFBS0EsQ0FBQyxxQ0FBdUMsT0FBRndDO1lBQ3pEO1lBQ0EsTUFBTUcsYUFBcUJELElBQUlaO1lBQy9CLE9BQU87Z0JBQ0hVLEdBQUdBO2dCQUNIRSxHQUFHQztZQUNQO1FBQ0o7UUFFQSxPQUFPSjtJQUNYLEVBQUUsT0FBT2pDLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU8sRUFBRTtJQUNiO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaGFydERhdGFQcmVwYXJlL3BhZ2VzLnRzP2E1MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmZXRjaERhdGEsRGF0YSwgRXJyb3IgfSBmcm9tICcuLi9EYXRhU2VydmljZS9wYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFRpbWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbTphbnkpID0+IGl0ZW0uemFtYW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbSA6YW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbS5kZWdlci50b1N0cmluZygpLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDb252ZXJ0U3RvY2tWYWx1ZXNUb1VTRChzdG9ja05hbWU6IHN0cmluZywgZmluYW5jaWFsU3RhdGVtZW50OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICBjb25zdCBleGNoYW5nZVJhdGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICcyMDI0LzMnOiAzMS4zOCxcclxuICAgICAgICAnMjAyMy8xMic6IDI4LixcclxuICAgICAgICAnMjAyMy85JzogOC4yMCxcclxuICAgICAgICAnMjAyMy82JzogOC4xMCxcclxuICAgICAgICAnMjAyMy8zJzogOC4wMCxcclxuICAgICAgICAnMjAyMi8xMic6IDcuOTAsXHJcbiAgICAgICAgJzIwMjIvOSc6IDcuODAsXHJcbiAgICAgICAgJzIwMjIvNic6IDcuNzAsXHJcbiAgICAgICAgJzIwMjIvMyc6IDcuNjAsXHJcbiAgICAgICAgJzIwMjEvMTInOiA3LjUwLFxyXG4gICAgICAgICcyMDIxLzknOiA3LjQwLFxyXG4gICAgICAgICcyMDIxLzYnOiA3LjMwLFxyXG4gICAgICAgICcyMDIxLzMnOiA3LjIwLFxyXG4gICAgICAgICcyMDIwLzEyJzogNy4xMCxcclxuICAgICAgICAnMjAyMC85JzogNy4wMCxcclxuICAgICAgICAnMjAyMC82JzogNi45MCxcclxuICAgICAgICAnMjAyMC8zJzogNi44MCxcclxuICAgICAgICAnMjAxOS8xMic6IDYuNzAsXHJcbiAgICAgICAgJzIwMTkvOSc6IDYuNjAsXHJcbiAgICAgICAgJzIwMTkvNic6IDYuNTAsXHJcbiAgICAgICAgJzIwMTkvMyc6IDYuNDAsXHJcbiAgICAgICAgJzIwMTgvMTInOiA2LjMwLFxyXG4gICAgICAgICcyMDE4LzknOiA2LjIwLFxyXG4gICAgICAgICcyMDE4LzYnOiA2LjEwLFxyXG4gICAgICAgICcyMDE4LzMnOiA2LjAwLFxyXG4gICAgICAgICcyMDE3LzEyJzogNS45MCxcclxuICAgICAgICAnMjAxNy85JzogNS44MCxcclxuICAgICAgICAnMjAxNy82JzogNS43MCxcclxuICAgICAgICAnMjAxNy8zJzogNS42MCxcclxuICAgICAgICAnMjAxNi8xMic6IDUuNTAsXHJcbiAgICAgICAgJzIwMTYvOSc6IDUuNDAsXHJcbiAgICAgICAgJzIwMTYvNic6IDUuMzAsXHJcbiAgICAgICAgJzIwMTYvMyc6IDUuMjAsXHJcbiAgICAgICAgJzIwMTUvMTInOiA1LjEwLFxyXG4gICAgICAgICcyMDE1LzknOiA1LjAwLFxyXG4gICAgICAgICcyMDE1LzYnOiA0LjkwLFxyXG4gICAgICAgICcyMDE1LzMnOiA0LjgwLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGE6IERhdGEgfCBFcnJvciA9IGF3YWl0IGZldGNoRGF0YShzdG9ja05hbWUsIGZpbmFuY2lhbFN0YXRlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2VEYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aW1lRGF0YTogc3RyaW5nW10gPSBhd2FpdCBDb2xsZWN0VGltZURhdGEocmVzcG9uc2VEYXRhLCBzdG9ja05hbWUsIGZpbmFuY2lhbFN0YXRlbWVudCk7XHJcbiAgICAgICAgY29uc3Qgc3RvY2tWYWx1ZXM6IG51bWJlcltdID0gYXdhaXQgQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlRGF0YSwgc3RvY2tOYW1lLCBmaW5hbmNpYWxTdGF0ZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0b2NrVmFsdWVzSW5VU0Q6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZTogc3RyaW5nID0gdGltZURhdGFbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gZXhjaGFuZ2VSYXRlc1t0aW1lXTsgLy8gxLBsZ2lsaSB0YXJpaGUga2FyxZ/EsWzEsWsgZ2VsZW4gZMO2dml6IGt1cnVcclxuICAgICAgICAgICAgaWYgKGV4Y2hhbmdlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDEsGxnaWxpIHRhcmloIGnDp2luIGTDtnZpeiBrdXJ1IGJ1bHVuYW1hZMSxXHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihgRXhjaGFuZ2UgcmF0ZSBub3QgZm91bmQgZm9yIGRhdGU6ICR7dGltZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZTogbnVtYmVyID0gc3RvY2tWYWx1ZXNbaV0gLyBleGNoYW5nZVJhdGU7XHJcbiAgICAgICAgICAgIHN0b2NrVmFsdWVzSW5VU0QucHVzaChjb252ZXJ0ZWRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RvY2tWYWx1ZXNJblVTRDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgLypcclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm90IGFyci5cIik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBlbHNlIGlmICh4X2xpc3QubGVuZ3RoID09PSAwIHx8IHlfbGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW1wdHkgYXJyLlwiKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgIHlfbGlzdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRfZGF0YSA9IHhfbGlzdC5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeSA9IHlfbGlzdFtpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hhcnRfZGF0YTtcclxufVxyXG4qL1xyXG5cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG4gICAgXHJcbiAgICBjb25zdCBleGNoYW5nZVJhdGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xyXG4gICAgICAgICcyMDI0LzMnOiA4LjUwLFxyXG4gICAgICAgICcyMDIzLzEyJzogOC4zMCxcclxuICAgICAgICAnMjAyMy85JzogOC4yMCxcclxuICAgICAgICAnMjAyMy82JzogOC4xMCxcclxuICAgICAgICAnMjAyMy8zJzogOC4wMCxcclxuICAgICAgICAnMjAyMi8xMic6IDcuOTAsXHJcbiAgICAgICAgJzIwMjIvOSc6IDcuODAsXHJcbiAgICAgICAgJzIwMjIvNic6IDcuNzAsXHJcbiAgICAgICAgJzIwMjIvMyc6IDcuNjAsXHJcbiAgICAgICAgJzIwMjEvMTInOiA3LjUwLFxyXG4gICAgICAgICcyMDIxLzknOiA3LjQwLFxyXG4gICAgICAgICcyMDIxLzYnOiA3LjMwLFxyXG4gICAgICAgICcyMDIxLzMnOiA3LjIwLFxyXG4gICAgICAgICcyMDIwLzEyJzogNy4xMCxcclxuICAgICAgICAnMjAyMC85JzogNy4wMCxcclxuICAgICAgICAnMjAyMC82JzogNi45MCxcclxuICAgICAgICAnMjAyMC8zJzogNi44MCxcclxuICAgICAgICAnMjAxOS8xMic6IDYuNzAsXHJcbiAgICAgICAgJzIwMTkvOSc6IDYuNjAsXHJcbiAgICAgICAgJzIwMTkvNic6IDYuNTBcclxuICAgIH07XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHhfbGlzdCkgfHwgIUFycmF5LmlzQXJyYXkoeV9saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbGlzdHMgYXJlIG5vdCBhcnJheXMuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhfbGlzdC5sZW5ndGggPT09IDAgfHwgeV9saXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbGlzdHMgYXJlIGVtcHR5LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHhfbGlzdCdpIGRvbGFyIGt1cmxhcsSxbmEgZ8O2cmUgYsO2bGVyZWsgZMO2bsO8xZ90w7xyXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0X2RhdGE6IHsgeDogc3RyaW5nLCB5OiBudW1iZXIgfVtdID0geF9saXN0Lm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB5X2xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhjaGFuZ2VSYXRlOiBudW1iZXIgfCB1bmRlZmluZWQgPSBleGNoYW5nZVJhdGVzW3hdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4Y2hhbmdlUmF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeGNoYW5nZSByYXRlIG5vdCBmb3VuZCBmb3IgZGF0ZTogJHt4fWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVkWTogbnVtYmVyID0geSAvIGV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBjb252ZXJ0ZWRZXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY2hhcnRfZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0iXSwibmFtZXMiOlsiZmV0Y2hEYXRhIiwiRXJyb3IiLCJDb2xsZWN0VGltZURhdGEiLCJyZXNwb25zZSIsInN0b2NrX25hbWUiLCJmaW5hbmNpYWxfc3RhdGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJoaXNzZV9hZGkiLCJiaWxhbmNvX2thbGVtaSIsIm1hcCIsInphbWFuIiwiQ29sbGVjdFN0b2NrVmFsdWVEYXRhIiwicGFyc2VGbG9hdCIsImRlZ2VyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiQ29udmVydFN0b2NrVmFsdWVzVG9VU0QiLCJzdG9ja05hbWUiLCJmaW5hbmNpYWxTdGF0ZW1lbnQiLCJleGNoYW5nZVJhdGVzIiwicmVzcG9uc2VEYXRhIiwidGltZURhdGEiLCJzdG9ja1ZhbHVlcyIsInN0b2NrVmFsdWVzSW5VU0QiLCJpIiwibGVuZ3RoIiwidGltZSIsImV4Y2hhbmdlUmF0ZSIsInVuZGVmaW5lZCIsImNvbnZlcnRlZFZhbHVlIiwicHVzaCIsIkNyZWF0ZUNoYXJ0RGF0YSIsInhfbGlzdCIsInlfbGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImNoYXJ0X2RhdGEiLCJ4IiwiaW5kZXgiLCJ5IiwiY29udmVydGVkWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});