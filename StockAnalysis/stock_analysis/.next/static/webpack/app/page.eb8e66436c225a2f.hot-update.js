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

/***/ "(app-pages-browser)/./src/app/DomHandler/pages.ts":
/*!*************************************!*\
  !*** ./src/app/DomHandler/pages.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGeneralHtml: function() { return /* binding */ createGeneralHtml; },\n/* harmony export */   drawLineChart: function() { return /* binding */ drawLineChart; },\n/* harmony export */   financialStatementGraph: function() { return /* binding */ financialStatementGraph; }\n/* harmony export */ });\n/* harmony import */ var _ChartDataPrepare_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ChartDataPrepare/pages */ \"(app-pages-browser)/./src/app/ChartDataPrepare/pages.ts\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"(app-pages-browser)/./node_modules/chart.js/auto/auto.js\");\n/* harmony import */ var _StockType_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StockType/pages */ \"(app-pages-browser)/./src/app/StockType/pages.ts\");\n\n // Chart.js kütüphanesini import edin\n\nasync function drawLineChart(data, stock_name, financial_statement, element) {\n    if (\"error\" in data) {\n        console.error(\"Error:\", data.error);\n        return;\n    }\n    const chart_data = (0,_ChartDataPrepare_pages__WEBPACK_IMPORTED_MODULE_0__.CreateChartData)(await (0,_ChartDataPrepare_pages__WEBPACK_IMPORTED_MODULE_0__.CollectTimeData)(data, stock_name, financial_statement), await (0,_ChartDataPrepare_pages__WEBPACK_IMPORTED_MODULE_0__.CollectStockValueData)(data, stock_name, financial_statement)); // Örnek xList\n    const ctx = document.getElementById(element);\n    const existingChart = chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getChart(element);\n    if (existingChart) {\n        existingChart.destroy();\n    }\n    new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, {\n        type: \"line\",\n        data: {\n            datasets: [\n                {\n                    label: await (0,_StockType_pages__WEBPACK_IMPORTED_MODULE_2__.financial_statement_Name)(financial_statement),\n                    data: chart_data,\n                    fill: false,\n                    borderColor: \"rgb(75, 192, 192)\",\n                    tension: 0.1\n                }\n            ]\n        },\n        options: {\n            scales: {\n                x: {\n                    title: {\n                        display: true,\n                        text: \"\"\n                    }\n                },\n                y: {\n                    title: {\n                        display: true,\n                        text: \"\"\n                    }\n                }\n            }\n        }\n    });\n}\nasync function createGeneralHtml(hisse, hisse_name) {\n    return new Promise((resolve)=>{\n        setTimeout(()=>{\n            const allContainer = document.getElementById(\"allelement\");\n            if (!allContainer) {\n                console.error(\"Container element not found.\");\n                resolve();\n                return;\n            }\n            const heading = document.createElement(\"h4\");\n            // Set the text content of the heading\n            heading.textContent = hisse_name;\n            heading.style.width = \"auto\";\n            heading.style.height = \"50px\";\n            heading.style.margin = \"0 auto\"; // Center horizontally\n            heading.style.marginBottom = \"-20px\"; // Add margin at the bottom\n            heading.style.marginTop = \"20px\"; // Add margin at the top\n            heading.style.marginLeft = \"auto\"; // Center horizontally\n            heading.style.marginRight = \"auto\"; // Center horizontally\n            heading.style.fontFamily = \"Arial, sans-serif\"; // Set font to Arial\n            heading.style.textAlign = \"center\";\n            heading.style.color = \"Grey\"; // Change font color to blue (or any other color you want)\n            const hissediv = document.createElement(\"div\");\n            hissediv.id = hisse;\n            hissediv.style.display = \"center\";\n            hissediv.style.flexDirection = \"row\";\n            hissediv.style.alignItems = \"center\";\n            hissediv.style.justifyContent = \"center\";\n            hissediv.style.width = \"100%\";\n            hissediv.style.height = \"100%\";\n            hissediv.style.left = \"300px\";\n            hissediv.style.margin = \"10\";\n            hissediv.style.padding = \"10\";\n            allContainer.appendChild(hissediv);\n            hissediv.appendChild(heading);\n            resolve();\n        }, 500);\n    });\n}\nasync function financialStatementGraph(stock_name, financial_statement) {\n    return new Promise((resolve)=>{\n        setTimeout(()=>{\n            const hisseelement = document.getElementById(stock_name);\n            if (!hisseelement) {\n                console.error(\"Hisse element not found.\");\n                resolve();\n                return;\n            }\n            const stocknamediv = document.createElement(\"canvas\");\n            stocknamediv.id = stock_name + financial_statement;\n            stocknamediv.style.width = \"100%\";\n            stocknamediv.style.height = \"200px\";\n            hisseelement.appendChild(stocknamediv);\n            resolve();\n        }, 1000);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRG9tSGFuZGxlci9wYWdlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUc7QUFDL0QsQ0FBQyxxQ0FBcUM7QUFFc0M7QUFHdkcsZUFBZUssY0FBY0MsSUFBa0IsRUFBRUMsVUFBa0IsRUFBRUMsbUJBQTJCLEVBQUVDLE9BQWU7SUFDcEgsSUFBSSxXQUFXSCxNQUFNO1FBQ2pCSSxRQUFRQyxLQUFLLENBQUMsVUFBVUwsS0FBS0ssS0FBSztRQUNsQztJQUNKO0lBRUEsTUFBTUMsYUFBYVYsd0VBQWVBLENBQzlCLE1BQU1GLHdFQUFlQSxDQUFDTSxNQUFNQyxZQUFZQyxzQkFDeEMsTUFBTVAsOEVBQXFCQSxDQUFDSyxNQUFNQyxZQUFZQyx1QkFBdUIsY0FBYztJQUV2RixNQUFNSyxNQUFNQyxTQUFTQyxjQUFjLENBQUNOO0lBRXBDLE1BQU1PLGdCQUFnQmIscURBQUtBLENBQUNjLFFBQVEsQ0FBQ1I7SUFDckMsSUFBSU8sZUFBZTtRQUNmQSxjQUFjRSxPQUFPO0lBQ3pCO0lBRUEsSUFBSWYscURBQUtBLENBQUNVLEtBQUs7UUFDWE0sTUFBTTtRQUNOYixNQUFNO1lBRUZjLFVBQVU7Z0JBQUM7b0JBQ1BDLE9BQU8sTUFBTWpCLDBFQUF3QkEsQ0FBQ0k7b0JBQ3RDRixNQUFNTTtvQkFDTlUsTUFBTTtvQkFDTkMsYUFBYTtvQkFDYkMsU0FBUztnQkFDYjthQUFFO1FBQ047UUFDQUMsU0FBUztZQUNMQyxRQUFRO2dCQUNKQyxHQUFHO29CQUNDQyxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO2dCQUNBQyxHQUFHO29CQUNDSCxPQUFPO3dCQUNIQyxTQUFTO3dCQUNUQyxNQUFNO29CQUNWO2dCQUNKO1lBQ0o7UUFDSjtJQUNKO0FBR0o7QUFDTyxlQUFlRSxrQkFBa0JDLEtBQWEsRUFBRUMsVUFBaUI7SUFDcEUsT0FBTyxJQUFJQyxRQUFjLENBQUNDO1FBQ3RCQyxXQUFXO1lBQ1AsTUFBTUMsZUFBZXhCLFNBQVNDLGNBQWMsQ0FBQztZQUU3QyxJQUFJLENBQUN1QixjQUFjO2dCQUNmNUIsUUFBUUMsS0FBSyxDQUFDO2dCQUNkeUI7Z0JBQ0E7WUFDSjtZQUVBLE1BQU1HLFVBQVV6QixTQUFTMEIsYUFBYSxDQUFDO1lBRXZDLHNDQUFzQztZQUN0Q0QsUUFBUUUsV0FBVyxHQUFHUDtZQUN0QkssUUFBUUcsS0FBSyxDQUFDQyxLQUFLLEdBQUc7WUFDdEJKLFFBQVFHLEtBQUssQ0FBQ0UsTUFBTSxHQUFHO1lBRXZCTCxRQUFRRyxLQUFLLENBQUNHLE1BQU0sR0FBRyxVQUFVLHNCQUFzQjtZQUN2RE4sUUFBUUcsS0FBSyxDQUFDSSxZQUFZLEdBQUcsU0FBUywyQkFBMkI7WUFDakVQLFFBQVFHLEtBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQVEsd0JBQXdCO1lBQzFEUixRQUFRRyxLQUFLLENBQUNNLFVBQVUsR0FBRyxRQUFRLHNCQUFzQjtZQUN6RFQsUUFBUUcsS0FBSyxDQUFDTyxXQUFXLEdBQUcsUUFBUSxzQkFBc0I7WUFDMURWLFFBQVFHLEtBQUssQ0FBQ1EsVUFBVSxHQUFHLHFCQUFxQixvQkFBb0I7WUFDcEVYLFFBQVFHLEtBQUssQ0FBQ1MsU0FBUyxHQUFHO1lBQzFCWixRQUFRRyxLQUFLLENBQUNVLEtBQUssR0FBRyxRQUFRLDBEQUEwRDtZQUd4RixNQUFNQyxXQUFXdkMsU0FBUzBCLGFBQWEsQ0FBQztZQUN4Q2EsU0FBU0MsRUFBRSxHQUFHckI7WUFFZG9CLFNBQVNYLEtBQUssQ0FBQ2IsT0FBTyxHQUFHO1lBQ3pCd0IsU0FBU1gsS0FBSyxDQUFDYSxhQUFhLEdBQUc7WUFDL0JGLFNBQVNYLEtBQUssQ0FBQ2MsVUFBVSxHQUFHO1lBQzVCSCxTQUFTWCxLQUFLLENBQUNlLGNBQWMsR0FBRztZQUVoQ0osU0FBU1gsS0FBSyxDQUFDQyxLQUFLLEdBQUc7WUFDdkJVLFNBQVNYLEtBQUssQ0FBQ0UsTUFBTSxHQUFHO1lBRXhCUyxTQUFTWCxLQUFLLENBQUNnQixJQUFJLEdBQUc7WUFHdEJMLFNBQVNYLEtBQUssQ0FBQ0csTUFBTSxHQUFHO1lBQ3hCUSxTQUFTWCxLQUFLLENBQUNpQixPQUFPLEdBQUc7WUFHekJyQixhQUFhc0IsV0FBVyxDQUFDUDtZQUN6QkEsU0FBU08sV0FBVyxDQUFDckI7WUFFckJIO1FBQ0osR0FBRztJQUNQO0FBQ0o7QUFHUSxlQUFleUIsd0JBQXdCdEQsVUFBa0IsRUFBRUMsbUJBQTJCO0lBQzFGLE9BQU8sSUFBSTJCLFFBQWMsQ0FBQ0M7UUFDdEJDLFdBQVc7WUFDUCxNQUFNeUIsZUFBZWhELFNBQVNDLGNBQWMsQ0FBQ1I7WUFFN0MsSUFBSSxDQUFDdUQsY0FBYztnQkFDZnBELFFBQVFDLEtBQUssQ0FBQztnQkFDZHlCO2dCQUNBO1lBQ0o7WUFFQSxNQUFNMkIsZUFBZWpELFNBQVMwQixhQUFhLENBQUM7WUFFNUN1QixhQUFhVCxFQUFFLEdBQUcvQyxhQUFZQztZQUM5QnVELGFBQWFyQixLQUFLLENBQUNDLEtBQUssR0FBRztZQUMzQm9CLGFBQWFyQixLQUFLLENBQUNFLE1BQU0sR0FBRztZQUU1QmtCLGFBQWFGLFdBQVcsQ0FBQ0c7WUFFekIzQjtRQUNKLEdBQUc7SUFDUDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvRG9tSGFuZGxlci9wYWdlcy50cz8xNjQ3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb2xsZWN0VGltZURhdGEsQ29sbGVjdFN0b2NrVmFsdWVEYXRhLENyZWF0ZUNoYXJ0RGF0YX0gZnJvbSAnLi4vQ2hhcnREYXRhUHJlcGFyZS9wYWdlcyc7XHJcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJzsgLy8gQ2hhcnQuanMga8O8dMO8cGhhbmVzaW5pIGltcG9ydCBlZGluXHJcbmltcG9ydCB7IGZldGNoRGF0YSwgRGF0YSwgRXJyb3IgfSBmcm9tICcuLi9EYXRhU2VydmljZS9wYWdlcyc7XHJcbmltcG9ydCB7IGZpbmFuY2lhbF9zdGF0ZW1lbnQsIHN0b2NrX25hbWUgLHN0b2NrX2xvbmdfbmFtZSxmaW5hbmNpYWxfc3RhdGVtZW50X05hbWV9IGZyb20gJy4uL1N0b2NrVHlwZS9wYWdlcyc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRyYXdMaW5lQ2hhcnQoZGF0YTogRGF0YSB8IEVycm9yLCBzdG9ja19uYW1lOiBzdHJpbmcsIGZpbmFuY2lhbF9zdGF0ZW1lbnQ6IHN0cmluZywgZWxlbWVudCA6c3RyaW5nKSB7XHJcbiAgICBpZiAoJ2Vycm9yJyBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYXJ0X2RhdGEgPSBDcmVhdGVDaGFydERhdGEoXHJcbiAgICAgICAgYXdhaXQgQ29sbGVjdFRpbWVEYXRhKGRhdGEsIHN0b2NrX25hbWUsIGZpbmFuY2lhbF9zdGF0ZW1lbnQpLFxyXG4gICAgICAgIGF3YWl0IENvbGxlY3RTdG9ja1ZhbHVlRGF0YShkYXRhLCBzdG9ja19uYW1lLCBmaW5hbmNpYWxfc3RhdGVtZW50KSk7IC8vIMOWcm5layB4TGlzdFxyXG5cclxuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nQ2hhcnQgPSBDaGFydC5nZXRDaGFydChlbGVtZW50KTtcclxuICAgIGlmIChleGlzdGluZ0NoYXJ0KSB7XHJcbiAgICAgICAgZXhpc3RpbmdDaGFydC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBhd2FpdCBmaW5hbmNpYWxfc3RhdGVtZW50X05hbWUoZmluYW5jaWFsX3N0YXRlbWVudCksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydF9kYXRhLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig3NSwgMTkyLCAxOTIpJyxcclxuICAgICAgICAgICAgICAgIHRlbnNpb246IDAuMVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2VuZXJhbEh0bWwoaGlzc2U6IHN0cmluZywgaGlzc2VfbmFtZTpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbGVsZW1lbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFsbENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRhaW5lciBlbGVtZW50IG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGluZ1xyXG4gICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gaGlzc2VfbmFtZTtcclxuICAgICAgICAgICAgaGVhZGluZy5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICBoZWFkaW5nLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVhZGluZy5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiOyAvLyBDZW50ZXIgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgIGhlYWRpbmcuc3R5bGUubWFyZ2luQm90dG9tID0gXCItMjBweFwiOyAvLyBBZGQgbWFyZ2luIGF0IHRoZSBib3R0b21cclxuICAgICAgICAgICAgaGVhZGluZy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjsgLy8gQWRkIG1hcmdpbiBhdCB0aGUgdG9wXHJcbiAgICAgICAgICAgIGhlYWRpbmcuc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiOyAvLyBDZW50ZXIgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgIGhlYWRpbmcuc3R5bGUubWFyZ2luUmlnaHQgPSBcImF1dG9cIjsgLy8gQ2VudGVyIGhvcml6b250YWxseVxyXG4gICAgICAgICAgICBoZWFkaW5nLnN0eWxlLmZvbnRGYW1pbHkgPSBcIkFyaWFsLCBzYW5zLXNlcmlmXCI7IC8vIFNldCBmb250IHRvIEFyaWFsXHJcbiAgICAgICAgICAgIGhlYWRpbmcuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgaGVhZGluZy5zdHlsZS5jb2xvciA9IFwiR3JleVwiOyAvLyBDaGFuZ2UgZm9udCBjb2xvciB0byBibHVlIChvciBhbnkgb3RoZXIgY29sb3IgeW91IHdhbnQpXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGlzc2VkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBoaXNzZWRpdi5pZCA9IGhpc3NlO1xyXG5cclxuICAgICAgICAgICAgaGlzc2VkaXYuc3R5bGUuZGlzcGxheSA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIGhpc3NlZGl2LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgICAgICBoaXNzZWRpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgaGlzc2VkaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG5cclxuICAgICAgICAgICAgaGlzc2VkaXYuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgaGlzc2VkaXYuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICAgICBoaXNzZWRpdi5zdHlsZS5sZWZ0ID0gXCIzMDBweFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGhpc3NlZGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBcIjtcclxuICAgICAgICAgICAgaGlzc2VkaXYuc3R5bGUucGFkZGluZyA9IFwiMTBcIjtcclxuXHJcblxyXG4gICAgICAgICAgICBhbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlzc2VkaXYpO1xyXG4gICAgICAgICAgICBoaXNzZWRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmFuY2lhbFN0YXRlbWVudEdyYXBoKHN0b2NrX25hbWU6IHN0cmluZywgZmluYW5jaWFsX3N0YXRlbWVudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzc2VlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RvY2tfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpc3NlZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkhpc3NlIGVsZW1lbnQgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RvY2tuYW1lZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHN0b2NrbmFtZWRpdi5pZCA9IHN0b2NrX25hbWUgK2ZpbmFuY2lhbF9zdGF0ZW1lbnQgO1xyXG4gICAgICAgICAgICBzdG9ja25hbWVkaXYuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgc3RvY2tuYW1lZGl2LnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcclxuXHJcbiAgICAgICAgICAgIGhpc3NlZWxlbWVudC5hcHBlbmRDaGlsZChzdG9ja25hbWVkaXYpO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDb2xsZWN0VGltZURhdGEiLCJDb2xsZWN0U3RvY2tWYWx1ZURhdGEiLCJDcmVhdGVDaGFydERhdGEiLCJDaGFydCIsImZpbmFuY2lhbF9zdGF0ZW1lbnRfTmFtZSIsImRyYXdMaW5lQ2hhcnQiLCJkYXRhIiwic3RvY2tfbmFtZSIsImZpbmFuY2lhbF9zdGF0ZW1lbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hhcnRfZGF0YSIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleGlzdGluZ0NoYXJ0IiwiZ2V0Q2hhcnQiLCJkZXN0cm95IiwidHlwZSIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwiYm9yZGVyQ29sb3IiLCJ0ZW5zaW9uIiwib3B0aW9ucyIsInNjYWxlcyIsIngiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwieSIsImNyZWF0ZUdlbmVyYWxIdG1sIiwiaGlzc2UiLCJoaXNzZV9uYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiYWxsQ29udGFpbmVyIiwiaGVhZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmb250RmFtaWx5IiwidGV4dEFsaWduIiwiY29sb3IiLCJoaXNzZWRpdiIsImlkIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJwYWRkaW5nIiwiYXBwZW5kQ2hpbGQiLCJmaW5hbmNpYWxTdGF0ZW1lbnRHcmFwaCIsImhpc3NlZWxlbWVudCIsInN0b2NrbmFtZWRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/DomHandler/pages.ts\n"));

/***/ })

});