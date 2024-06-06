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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CollectStockValueData: function() { return /* binding */ CollectStockValueData; },\n/* harmony export */   CollectTimeData: function() { return /* binding */ CollectTimeData; },\n/* harmony export */   ConvertStockValuesToUSD: function() { return /* binding */ ConvertStockValuesToUSD; },\n/* harmony export */   CreateChartData: function() { return /* binding */ CreateChartData; }\n/* harmony export */ });\nasync function CollectTimeData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>item.zaman);\n}\nasync function CollectStockValueData(response, stock_name, financial_statement) {\n    if (\"error\" in response) {\n        console.error(\"Error:\", response.error);\n        return [];\n    }\n    return response.data.filter((item)=>item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement).map((item)=>{\n        return parseFloat(item.deger.toString().replace(/\\./g, \"\").replace(\",\", \".\"));\n    });\n}\n//PARAMETRE OLARAK COLLECTLERİML \nasync function ConvertStockValuesToUSD(timeData, stockValues) {\n    try {\n        // const responseData = await getData(); // Burada uygun bir şekilde veri alımını gerçekleştirmeniz gerekiyor, bu kodu uygun şekilde değiştirmelisiniz.\n        const timeData = await CollectTimeData(responseData, stockName, financialStatement);\n        const stockValues = await CollectStockValueData(responseData, stockName, financialStatement);\n        // Bu kısım, her tarih için uygun döviz kurlarını içeren bir nesne oluşturur.\n        const exchangeRates = {\n            \"2024/3\": 8.50,\n            \"2023/12\": 8.30\n        };\n        // Her hisse değerini uygun döviz kuruyla bölerek dönüştürür.\n        const stockValuesInUSD = timeData.map((time)=>{\n            const exchangeRate = exchangeRates[time]; // Zaman verisine karşılık gelen döviz kuru\n            const index = timeData.indexOf(time); // Zaman verisinin indeksi\n            const stockValue = stockValues[index]; // İlgili hisse değeri\n            return stockValue / exchangeRate; // Dönüştürülmüş hisse değeri\n        });\n        return stockValuesInUSD;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return [];\n    }\n}\nfunction CreateChartData(x_list, y_list) {\n    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {\n        console.error(\"not arr.\");\n        return [];\n    } else if (x_list.length === 0 || y_list.length === 0) {\n        console.error(\"empty arr.\");\n        return [];\n    }\n    x_list.reverse();\n    y_list.reverse();\n    const chart_data = x_list.map((x, index)=>{\n        const y = y_list[index];\n        return {\n            x: x,\n            y: y\n        };\n    });\n    return chart_data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRU8sZUFBZUEsZ0JBQWdCQyxRQUFzQixFQUFFQyxVQUFrQixFQUFFQyxtQkFBMkI7SUFDekcsSUFBSSxXQUFXRixVQUFVO1FBQ3JCRyxRQUFRQyxLQUFLLENBQUMsVUFBVUosU0FBU0ksS0FBSztRQUN0QyxPQUFPLEVBQUU7SUFDYjtJQUVBLE9BQU9KLFNBQVNLLElBQUksQ0FDbkJDLE1BQU0sQ0FBQyxDQUFDQyxPQUFjQSxLQUFLQyxTQUFTLEtBQUtQLGNBQWNNLEtBQUtFLGNBQWMsS0FBS1IsYUFBYUMscUJBQzVGUSxHQUFHLENBQUMsQ0FBQ0gsT0FBYUEsS0FBS0ksS0FBSztBQUNqQztBQUVPLGVBQWVDLHNCQUFzQlosUUFBc0IsRUFBRUMsVUFBa0IsRUFBRUMsbUJBQTJCO0lBQy9HLElBQUksV0FBV0YsVUFBVTtRQUNyQkcsUUFBUUMsS0FBSyxDQUFDLFVBQVVKLFNBQVNJLEtBQUs7UUFDdEMsT0FBTyxFQUFFO0lBQ2I7SUFFQSxPQUFPSixTQUFTSyxJQUFJLENBQ25CQyxNQUFNLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS0MsU0FBUyxLQUFLUCxjQUFjTSxLQUFLRSxjQUFjLEtBQUtSLGFBQWFDLHFCQUM1RlEsR0FBRyxDQUFDLENBQUNIO1FBQ0YsT0FBT00sV0FBV04sS0FBS08sS0FBSyxDQUFDQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLElBQUlBLE9BQU8sQ0FBQyxLQUFLO0lBQzVFO0FBQ0o7QUFFQSxpQ0FBaUM7QUFDMUIsZUFBZUMsd0JBQXdCQyxRQUFnQixFQUFFQyxXQUFtQjtJQUMvRSxJQUFJO1FBQ0QsdUpBQXVKO1FBQ3RKLE1BQU1ELFdBQVcsTUFBTW5CLGdCQUFnQnFCLGNBQWNDLFdBQVdDO1FBQ2hFLE1BQU1ILGNBQWMsTUFBTVAsc0JBQXNCUSxjQUFjQyxXQUFXQztRQUV6RSw2RUFBNkU7UUFDN0UsTUFBTUMsZ0JBQWdCO1lBQ2xCLFVBQVU7WUFDVixXQUFXO1FBRWY7UUFFQSw2REFBNkQ7UUFDN0QsTUFBTUMsbUJBQW1CTixTQUFTUixHQUFHLENBQUNlLENBQUFBO1lBQ2xDLE1BQU1DLGVBQWVILGFBQWEsQ0FBQ0UsS0FBSyxFQUFFLDJDQUEyQztZQUNyRixNQUFNRSxRQUFRVCxTQUFTVSxPQUFPLENBQUNILE9BQU8sMEJBQTBCO1lBQ2hFLE1BQU1JLGFBQWFWLFdBQVcsQ0FBQ1EsTUFBTSxFQUFFLHNCQUFzQjtZQUM3RCxPQUFPRSxhQUFhSCxjQUFjLDZCQUE2QjtRQUNuRTtRQUVBLE9BQU9GO0lBQ1gsRUFBRSxPQUFPcEIsT0FBTztRQUNaRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTyxFQUFFO0lBQ2I7QUFDSjtBQUdPLFNBQVMwQixnQkFBZ0JDLE1BQWdCLEVBQUVDLE1BQWdCO0lBRTlELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxXQUFXLENBQUNFLE1BQU1DLE9BQU8sQ0FBQ0YsU0FBUztRQUNsRDdCLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU8sRUFBRTtJQUNiLE9BQU8sSUFBSTJCLE9BQU9JLE1BQU0sS0FBSyxLQUFLSCxPQUFPRyxNQUFNLEtBQUssR0FBRztRQUNuRGhDLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU8sRUFBRTtJQUNiO0lBRUEyQixPQUFPSyxPQUFPO0lBQ2RKLE9BQU9JLE9BQU87SUFFZCxNQUFNQyxhQUFhTixPQUFPckIsR0FBRyxDQUFDLENBQUM0QixHQUFHWDtRQUM5QixNQUFNWSxJQUFJUCxNQUFNLENBQUNMLE1BQU07UUFDdkIsT0FBTztZQUNIVyxHQUFHQTtZQUNIQyxHQUFHQTtRQUNQO0lBQ0o7SUFFQSxPQUFPRjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hhcnREYXRhUHJlcGFyZS9wYWdlcy50cz9hNTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YSwgRXJyb3IgfSBmcm9tICcuLi9EYXRhU2VydmljZS9wYWdlcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFRpbWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbTphbnkpID0+IGl0ZW0uemFtYW4pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ29sbGVjdFN0b2NrVmFsdWVEYXRhKHJlc3BvbnNlOiBEYXRhIHwgRXJyb3IsIHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgaWYgKCdlcnJvcicgaW4gcmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAuZmlsdGVyKChpdGVtIDphbnkpID0+IGl0ZW0uaGlzc2VfYWRpID09PSBzdG9ja19uYW1lICYmIGl0ZW0uYmlsYW5jb19rYWxlbWkgPT09IHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KVxyXG4gICAgLm1hcCgoaXRlbSA6YW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbS5kZWdlci50b1N0cmluZygpLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vUEFSQU1FVFJFIE9MQVJBSyBDT0xMRUNUTEVSxLBNTCBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENvbnZlcnRTdG9ja1ZhbHVlc1RvVVNEKHRpbWVEYXRhOiBzdHJpbmcsIHN0b2NrVmFsdWVzOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcltdPiB7IFxyXG4gICAgdHJ5IHtcclxuICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IGdldERhdGEoKTsgLy8gQnVyYWRhIHV5Z3VuIGJpciDFn2VraWxkZSB2ZXJpIGFsxLFtxLFuxLEgZ2Vyw6dla2xlxZ90aXJtZW5peiBnZXJla2l5b3IsIGJ1IGtvZHUgdXlndW4gxZ9la2lsZGUgZGXEn2nFn3Rpcm1lbGlzaW5pei5cclxuICAgICAgICBjb25zdCB0aW1lRGF0YSA9IGF3YWl0IENvbGxlY3RUaW1lRGF0YShyZXNwb25zZURhdGEsIHN0b2NrTmFtZSwgZmluYW5jaWFsU3RhdGVtZW50KTtcclxuICAgICAgICBjb25zdCBzdG9ja1ZhbHVlcyA9IGF3YWl0IENvbGxlY3RTdG9ja1ZhbHVlRGF0YShyZXNwb25zZURhdGEsIHN0b2NrTmFtZSwgZmluYW5jaWFsU3RhdGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gQnUga8Sxc8SxbSwgaGVyIHRhcmloIGnDp2luIHV5Z3VuIGTDtnZpeiBrdXJsYXLEsW7EsSBpw6dlcmVuIGJpciBuZXNuZSBvbHXFn3R1cnVyLlxyXG4gICAgICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZXMgPSB7XHJcbiAgICAgICAgICAgICcyMDI0LzMnOiA4LjUwLCAvLyDDlnJuZWs6IDIwMjQvMyB0YXJpaGkgacOnaW4gZG9sYXIga3VydVxyXG4gICAgICAgICAgICAnMjAyMy8xMic6IDguMzAsIC8vIMOWcm5lazogMjAyMy8xMiB0YXJpaGkgacOnaW4gZG9sYXIga3VydVxyXG4gICAgICAgICAgICAvLyBEacSfZXIgdGFyaWhsZXIgacOnaW4gZGUgYXluxLEgxZ9la2lsZGUgZMO2dml6IGt1cmxhcsSxbsSxIGVrbGV5aW5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZXIgaGlzc2UgZGXEn2VyaW5pIHV5Z3VuIGTDtnZpeiBrdXJ1eWxhIGLDtmxlcmVrIGTDtm7DvMWfdMO8csO8ci5cclxuICAgICAgICBjb25zdCBzdG9ja1ZhbHVlc0luVVNEID0gdGltZURhdGEubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleGNoYW5nZVJhdGUgPSBleGNoYW5nZVJhdGVzW3RpbWVdOyAvLyBaYW1hbiB2ZXJpc2luZSBrYXLFn8SxbMSxayBnZWxlbiBkw7Z2aXoga3VydVxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRpbWVEYXRhLmluZGV4T2YodGltZSk7IC8vIFphbWFuIHZlcmlzaW5pbiBpbmRla3NpXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b2NrVmFsdWUgPSBzdG9ja1ZhbHVlc1tpbmRleF07IC8vIMSwbGdpbGkgaGlzc2UgZGXEn2VyaVxyXG4gICAgICAgICAgICByZXR1cm4gc3RvY2tWYWx1ZSAvIGV4Y2hhbmdlUmF0ZTsgLy8gRMO2bsO8xZ90w7xyw7xsbcO8xZ8gaGlzc2UgZGXEn2VyaVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RvY2tWYWx1ZXNJblVTRDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNoYXJ0RGF0YSh4X2xpc3Q6IHN0cmluZ1tdLCB5X2xpc3Q6IG51bWJlcltdKTogeyB4OiBzdHJpbmcsIHk6IG51bWJlciB9W10ge1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh4X2xpc3QpIHx8ICFBcnJheS5pc0FycmF5KHlfbGlzdCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm90IGFyci5cIik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBlbHNlIGlmICh4X2xpc3QubGVuZ3RoID09PSAwIHx8IHlfbGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW1wdHkgYXJyLlwiKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgeF9saXN0LnJldmVyc2UoKTtcclxuICAgIHlfbGlzdC5yZXZlcnNlKCk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRfZGF0YSA9IHhfbGlzdC5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeSA9IHlfbGlzdFtpbmRleF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2hhcnRfZGF0YTtcclxufSJdLCJuYW1lcyI6WyJDb2xsZWN0VGltZURhdGEiLCJyZXNwb25zZSIsInN0b2NrX25hbWUiLCJmaW5hbmNpYWxfc3RhdGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImZpbHRlciIsIml0ZW0iLCJoaXNzZV9hZGkiLCJiaWxhbmNvX2thbGVtaSIsIm1hcCIsInphbWFuIiwiQ29sbGVjdFN0b2NrVmFsdWVEYXRhIiwicGFyc2VGbG9hdCIsImRlZ2VyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiQ29udmVydFN0b2NrVmFsdWVzVG9VU0QiLCJ0aW1lRGF0YSIsInN0b2NrVmFsdWVzIiwicmVzcG9uc2VEYXRhIiwic3RvY2tOYW1lIiwiZmluYW5jaWFsU3RhdGVtZW50IiwiZXhjaGFuZ2VSYXRlcyIsInN0b2NrVmFsdWVzSW5VU0QiLCJ0aW1lIiwiZXhjaGFuZ2VSYXRlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RvY2tWYWx1ZSIsIkNyZWF0ZUNoYXJ0RGF0YSIsInhfbGlzdCIsInlfbGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJldmVyc2UiLCJjaGFydF9kYXRhIiwieCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\n"));

/***/ })

});