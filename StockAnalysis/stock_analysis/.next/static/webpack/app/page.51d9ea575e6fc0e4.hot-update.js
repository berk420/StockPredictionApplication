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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\nasync function ConvertStockValuesToUSD(stockName, financialStatement) {\n    try {\n        const responseData = await getData(); // Burada uygun bir şekilde veri alımını gerçekleştirmeniz gerekiyor, bu kodu uygun şekilde değiştirmelisiniz.\n        const timeData = await CollectTimeData(responseData, stockName, financialStatement);\n        const stockValues = await CollectStockValueData(responseData, stockName, financialStatement);\n        // Bu kısım, her tarih için uygun döviz kurlarını içeren bir nesne oluşturur.\n        const exchangeRates = {\n            \"2024/3\": 8.50,\n            \"2023/12\": 8.30\n        };\n        // Her hisse değerini uygun döviz kuruyla bölerek dönüştürür.\n        const stockValuesInUSD = timeData.map((time)=>{\n            const exchangeRate = exchangeRates[time]; // Zaman verisine karşılık gelen döviz kuru\n            const index = timeData.indexOf(time); // Zaman verisinin indeksi\n            const stockValue = stockValues[index]; // İlgili hisse değeri\n            return stockValue / exchangeRate; // Dönüştürülmüş hisse değeri\n        });\n        return stockValuesInUSD;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\nfunction CreateChartData(x_list, y_list) {\n    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        console.error(\"not arr.\");\n        return [];\n    } else if (x_list.length === 0 || y_list.length === 0) {\n        console.error(\"empty arr.\");\n        return [];\n    }\n    x_list.reverse();\n    y_list.reverse();\n    const chart_data = x_list.map((x, index)=>{\n        const y = y_list[index];\n        return {\n            x: x,\n            y: y\n        };\n    });\n    return chart_data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxlQUFlQSxnQkFBZ0JDLFFBQXNCLEVBQUVDLFVBQWtCLEVBQUVDLG1CQUEyQjtJQUN6RyxJQUFJLFdBQVdGLFVBQVU7UUFDckJHLFFBQVFDLEtBQUssQ0FBQyxVQUFVSixTQUFTSSxLQUFLO1FBQ3RDLE9BQU8sRUFBRTtJQUNiO0lBRUEsT0FBT0osU0FBU0ssSUFBSSxDQUNuQkMsTUFBTSxDQUFDLENBQUNDLE9BQWNBLEtBQUtDLFNBQVMsS0FBS1AsY0FBY00sS0FBS0UsY0FBYyxLQUFLUixhQUFhQyxxQkFDNUZRLEdBQUcsQ0FBQyxDQUFDSCxPQUFhQSxLQUFLSSxLQUFLO0FBQ2pDO0FBRU8sZUFBZUMsc0JBQXNCWixRQUFzQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDL0csSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0g7UUFDRixPQUFPTSxXQUFXTixLQUFLTyxLQUFLLENBQUNDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLEtBQUs7SUFDNUU7QUFDSjtBQUVBLGVBQWVDLHdCQUF3QkMsU0FBaUIsRUFBRUMsa0JBQTBCO0lBQ2hGLElBQUk7UUFDQSxNQUFNQyxlQUFlLE1BQU1DLFdBQVcsOEdBQThHO1FBQ3BKLE1BQU1DLFdBQVcsTUFBTXZCLGdCQUFnQnFCLGNBQWNGLFdBQVdDO1FBQ2hFLE1BQU1JLGNBQWMsTUFBTVgsc0JBQXNCUSxjQUFjRixXQUFXQztRQUV6RSw2RUFBNkU7UUFDN0UsTUFBTUssZ0JBQWdCO1lBQ2xCLFVBQVU7WUFDVixXQUFXO1FBRWY7UUFFQSw2REFBNkQ7UUFDN0QsTUFBTUMsbUJBQW1CSCxTQUFTWixHQUFHLENBQUNnQixDQUFBQTtZQUNsQyxNQUFNQyxlQUFlSCxhQUFhLENBQUNFLEtBQUssRUFBRSwyQ0FBMkM7WUFDckYsTUFBTUUsUUFBUU4sU0FBU08sT0FBTyxDQUFDSCxPQUFPLDBCQUEwQjtZQUNoRSxNQUFNSSxhQUFhUCxXQUFXLENBQUNLLE1BQU0sRUFBRSxzQkFBc0I7WUFDN0QsT0FBT0UsYUFBYUgsY0FBYyw2QkFBNkI7UUFDbkU7UUFFQSxPQUFPRjtJQUNYLEVBQUUsT0FBT3JCLE9BQU87UUFDWkQsUUFBUUMsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU8sRUFBRTtJQUNiO0FBQ0o7QUFHTyxTQUFTMkIsZ0JBQWdCQyxNQUFnQixFQUFFQyxNQUFnQjtJQUU5RCxJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0gsV0FBVyxDQUFDRSxNQUFNQyxPQUFPLENBQUNGLFNBQVM7UUFDbEQ5QixRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPLEVBQUU7SUFDYixPQUFPLElBQUk0QixPQUFPSSxNQUFNLEtBQUssS0FBS0gsT0FBT0csTUFBTSxLQUFLLEdBQUc7UUFDbkRqQyxRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPLEVBQUU7SUFDYjtJQUVBNEIsT0FBT0ssT0FBTztJQUNkSixPQUFPSSxPQUFPO0lBRWQsTUFBTUMsYUFBYU4sT0FBT3RCLEdBQUcsQ0FBQyxDQUFDNkIsR0FBR1g7UUFDOUIsTUFBTVksSUFBSVAsTUFBTSxDQUFDTCxNQUFNO1FBQ3ZCLE9BQU87WUFDSFcsR0FBR0E7WUFDSEMsR0FBR0E7UUFDUDtJQUNKO0lBRUEsT0FBT0Y7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NoYXJ0RGF0YVByZXBhcmUvcGFnZXMudHM/YTUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGEsIEVycm9yIH0gZnJvbSAnLi4vRGF0YVNlcnZpY2UvcGFnZXMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RUaW1lRGF0YShyZXNwb25zZTogRGF0YSB8IEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgLmZpbHRlcigoaXRlbSA6YW55KSA9PiBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudClcclxuICAgIC5tYXAoKGl0ZW06YW55KSA9PiBpdGVtLnphbWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbGxlY3RTdG9ja1ZhbHVlRGF0YShyZXNwb25zZTogRGF0YSB8IEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyW10+IHtcclxuICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgLmZpbHRlcigoaXRlbSA6YW55KSA9PiBpdGVtLmhpc3NlX2FkaSA9PT0gc3RvY2tfbmFtZSAmJiBpdGVtLmJpbGFuY29fa2FsZW1pID09PSBzdG9ja19uYW1lICsgZmluYW5jaWFsX3N0YXRlbWVudClcclxuICAgIC5tYXAoKGl0ZW0gOmFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0uZGVnZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDb252ZXJ0U3RvY2tWYWx1ZXNUb1VTRChzdG9ja05hbWU6IHN0cmluZywgZmluYW5jaWFsU3RhdGVtZW50OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IGdldERhdGEoKTsgLy8gQnVyYWRhIHV5Z3VuIGJpciDFn2VraWxkZSB2ZXJpIGFsxLFtxLFuxLEgZ2Vyw6dla2xlxZ90aXJtZW5peiBnZXJla2l5b3IsIGJ1IGtvZHUgdXlndW4gxZ9la2lsZGUgZGXEn2nFn3Rpcm1lbGlzaW5pei5cclxuICAgICAgICBjb25zdCB0aW1lRGF0YSA9IGF3YWl0IENvbGxlY3RUaW1lRGF0YShyZXNwb25zZURhdGEsIHN0b2NrTmFtZSwgZmluYW5jaWFsU3RhdGVtZW50KTtcclxuICAgICAgICBjb25zdCBzdG9ja1ZhbHVlcyA9IGF3YWl0IENvbGxlY3RTdG9ja1ZhbHVlRGF0YShyZXNwb25zZURhdGEsIHN0b2NrTmFtZSwgZmluYW5jaWFsU3RhdGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gQnUga8Sxc8SxbSwgaGVyIHRhcmloIGnDp2luIHV5Z3VuIGTDtnZpeiBrdXJsYXLEsW7EsSBpw6dlcmVuIGJpciBuZXNuZSBvbHXFn3R1cnVyLlxyXG4gICAgICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZXMgPSB7XHJcbiAgICAgICAgICAgICcyMDI0LzMnOiA4LjUwLCAvLyDDlnJuZWs6IDIwMjQvMyB0YXJpaGkgacOnaW4gZG9sYXIga3VydVxyXG4gICAgICAgICAgICAnMjAyMy8xMic6IDguMzAsIC8vIMOWcm5lazogMjAyMy8xMiB0YXJpaGkgacOnaW4gZG9sYXIga3VydVxyXG4gICAgICAgICAgICAvLyBEacSfZXIgdGFyaWhsZXIgacOnaW4gZGUgYXluxLEgxZ9la2lsZGUgZMO2dml6IGt1cmxhcsSxbsSxIGVrbGV5aW5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZXIgaGlzc2UgZGXEn2VyaW5pIHV5Z3VuIGTDtnZpeiBrdXJ1eWxhIGLDtmxlcmVrIGTDtm7DvMWfdMO8csO8ci5cclxuICAgICAgICBjb25zdCBzdG9ja1ZhbHVlc0luVVNEID0gdGltZURhdGEubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleGNoYW5nZVJhdGUgPSBleGNoYW5nZVJhdGVzW3RpbWVdOyAvLyBaYW1hbiB2ZXJpc2luZSBrYXLFn8SxbMSxayBnZWxlbiBkw7Z2aXoga3VydVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRpbWVEYXRhLmluZGV4T2YodGltZSk7IC8vIFphbWFuIHZlcmlzaW5pbiBpbmRla3NpXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b2NrVmFsdWUgPSBzdG9ja1ZhbHVlc1tpbmRleF07IC8vIMSwbGdpbGkgaGlzc2UgZGXEn2VyaVxyXG4gICAgICAgICAgICByZXR1cm4gc3RvY2tWYWx1ZSAvIGV4Y2hhbmdlUmF0ZTsgLy8gRMO2bsO8xZ90w7xyw7xsbcO8xZ8gaGlzc2UgZGXEn2VyaVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvY2tWYWx1ZXNJblVTRDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm90IGFyci5cIik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBlbHNlIGlmICh4X2xpc3QubGVuZ3RoID09PSAwIHx8IHlfbGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW1wdHkgYXJyLlwiKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgIHlfbGlzdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRfZGF0YSA9IHhfbGlzdC5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeSA9IHlfbGlzdFtpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hhcnRfZGF0YTtcclxufSJdLCJuYW1lcyI6WyJDb2xsZWN0VGltZURhdGEiLCJyZXNwb25zZSIsInN0b2NrX25hbWUiLCJmaW5hbmNpYWxfc3RhdGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJoaXNzZV9hZGkiLCJiaWxhbmNvX2thbGVtaSIsIm1hcCIsInphbWFuIiwiQ29sbGVjdFN0b2NrVmFsdWVEYXRhIiwicGFyc2VGbG9hdCIsImRlZ2VyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiQ29udmVydFN0b2NrVmFsdWVzVG9VU0QiLCJzdG9ja05hbWUiLCJmaW5hbmNpYWxTdGF0ZW1lbnQiLCJyZXNwb25zZURhdGEiLCJnZXREYXRhIiwidGltZURhdGEiLCJzdG9ja1ZhbHVlcyIsImV4Y2hhbmdlUmF0ZXMiLCJzdG9ja1ZhbHVlc0luVVNEIiwidGltZSIsImV4Y2hhbmdlUmF0ZSIsImluZGV4IiwiaW5kZXhPZiIsInN0b2NrVmFsdWUiLCJDcmVhdGVDaGFydERhdGEiLCJ4X2xpc3QiLCJ5X2xpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJyZXZlcnNlIiwiY2hhcnRfZGF0YSIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});