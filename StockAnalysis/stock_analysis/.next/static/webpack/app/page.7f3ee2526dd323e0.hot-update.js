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

/***/ "(app-pages-browser)/./src/app/StockType/pages.ts":
/*!************************************!*\
  !*** ./src/app/StockType/pages.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Financial_Statement_Db_Name: function() { return /* binding */ Financial_Statement_Db_Name; },\n/* harmony export */   Financial_Statement_Name: function() { return /* binding */ Financial_Statement_Name; },\n/* harmony export */   financial_statement: function() { return /* binding */ financial_statement; },\n/* harmony export */   financial_statement_Name: function() { return /* binding */ financial_statement_Name; },\n/* harmony export */   stock_long_name: function() { return /* binding */ stock_long_name; },\n/* harmony export */   stock_name: function() { return /* binding */ stock_name; }\n/* harmony export */ });\nvar Financial_Statement_Db_Name;\n(function(Financial_Statement_Db_Name) {\n    Financial_Statement_Db_Name[\"TOPLAM_DONEN_VARLIKLAR\"] = \"_toplam d\\xf6nen varlıklar\";\n    Financial_Statement_Db_Name[\"TOPLAM_VARLIKLAR\"] = \"_toplam varlıklar\";\n    Financial_Statement_Db_Name[\"TOPLAM_KISA_VADELI_YUKUMLULUKLER\"] = \"_toplam kısa vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n    Financial_Statement_Db_Name[\"TOPLAM_UZUN_VADELI_YUKUMLULUKLER\"] = \"_toplam uzun vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n    Financial_Statement_Db_Name[\"TOPLAM_OZKAYNAKLAR\"] = \"_toplam \\xf6zkaynaklar\";\n    Financial_Statement_Db_Name[\"TOPLAM_KAYNAKLAR\"] = \"_toplam kaynaklar\";\n})(Financial_Statement_Db_Name || (Financial_Statement_Db_Name = {}));\nvar Financial_Statement_Name;\n(function(Financial_Statement_Name) {\n    Financial_Statement_Name[\"ToplamDonenVarliklar\"] = \"toplam d\\xf6nen varlıklar\";\n    Financial_Statement_Name[\"ToplamVarliklar\"] = \"toplam varlıklar\";\n    Financial_Statement_Name[\"ToplamKisaVadeliYukumlulukler\"] = \"toplam kısa vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n    Financial_Statement_Name[\"ToplamUzunVadeliYukumlulukler\"] = \"toplam uzun vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n    Financial_Statement_Name[\"ToplamOzkaynaklar\"] = \"toplam \\xf6zkaynaklar\";\n    Financial_Statement_Name[\"ToplamKaynaklar\"] = \"toplam kaynaklar\";\n})(Financial_Statement_Name || (Financial_Statement_Name = {}));\nasync function financial_statement() {\n    const financial_statement = [\n        Financial_Statement_Db_Name.ToplamDonenVarliklar,\n        Financial_Statement_Db_Name.ToplamVarliklar,\n        Financial_Statement_Db_Name.ToplamKisaVadeliYukumlulukler,\n        Financial_Statement_Db_Name.ToplamUzunVadeliYukumlulukler,\n        Financial_Statement_Db_Name.ToplamOzkaynaklar,\n        Financial_Statement_Db_Name.ToplamKaynaklar\n    ];\n    return financial_statement;\n}\nasync function financial_statement_Name(statement) {\n    switch(statement){\n        case Financial_Statement_Db_Name.ToplamDonenVarliklar:\n            return \"toplam d\\xf6nen varlıklar\";\n        case Financial_Statement_Db_Name.ToplamVarliklar:\n            return \"toplam varlıklar\";\n        case Financial_Statement_Db_Name.ToplamKisaVadeliYukumlulukler:\n            return \"toplam kısa vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n        case Financial_Statement_Db_Name.ToplamUzunVadeliYukumlulukler:\n            return \"toplam uzun vadeli y\\xfck\\xfcml\\xfcl\\xfckler\";\n        case Financial_Statement_Db_Name.ToplamOzkaynaklar:\n            return \"toplam \\xf6zkaynaklar\";\n        case Financial_Statement_Db_Name.ToplamKaynaklar:\n            return \"toplam kaynaklar\";\n        default:\n            return \"error\";\n    }\n    return \"error\";\n}\nasync function stock_name() {\n    const stock_name = [\n        \"DGGYO\",\n        \"KCHOL\",\n        \"OYYAT\"\n    ];\n    return stock_name;\n}\nvar Stock_short;\n(function(Stock_short) {\n    Stock_short[\"DGGYO\"] = \"DGGYO\";\n    Stock_short[\"KCHOL\"] = \"KCHOL\";\n    Stock_short[\"OYYAT\"] = \"OYYAT\";\n})(Stock_short || (Stock_short = {}));\nvar Stock_long;\n(function(Stock_long) {\n    Stock_long[\"DGGYO\"] = \"Doğuş holding\";\n    Stock_long[\"KCHOL\"] = \"Ko\\xe7 holding\";\n    Stock_long[\"OYYAT\"] = \"Oyak holding\";\n})(Stock_long || (Stock_long = {}));\nasync function stock_long_name(stock) {\n    switch(stock){\n        case \"DGGYO\":\n            return \"Doğuş holding\";\n        case \"KCHOL\":\n            return \"Ko\\xe7 holding\";\n        case \"OYYAT\":\n            return \"Oyak holding\";\n        default:\n            return \"error\";\n    }\n    return \"error\";\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU3RvY2tUeXBlL3BhZ2VzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7VUFBWUE7Ozs7Ozs7R0FBQUEsZ0NBQUFBOztVQVNBQzs7Ozs7OztHQUFBQSw2QkFBQUE7QUFTTCxlQUFlQztJQUNsQixNQUFNQSxzQkFBc0I7UUFDeEJGLDRCQUE0Qkcsb0JBQW9CO1FBQ2hESCw0QkFBNEJJLGVBQWU7UUFDM0NKLDRCQUE0QkssNkJBQTZCO1FBQ3pETCw0QkFBNEJNLDZCQUE2QjtRQUN6RE4sNEJBQTRCTyxpQkFBaUI7UUFDN0NQLDRCQUE0QlEsZUFBZTtLQUM5QztJQUNELE9BQU9OO0FBQ1g7QUFFTyxlQUFlTyx5QkFBeUJDLFNBQWdCO0lBRTNELE9BQVFBO1FBQ0osS0FBS1YsNEJBQTRCRyxvQkFBb0I7WUFDakQ7UUFDSixLQUFLSCw0QkFBNEJJLGVBQWU7WUFDNUM7UUFDSixLQUFLSiw0QkFBNEJLLDZCQUE2QjtZQUMxRDtRQUNKLEtBQUtMLDRCQUE0Qk0sNkJBQTZCO1lBQzFEO1FBQ0osS0FBS04sNEJBQTRCTyxpQkFBaUI7WUFDOUM7UUFDSixLQUFLUCw0QkFBNEJRLGVBQWU7WUFDNUM7UUFDSjtZQUNJLE9BQU87SUFDZjtJQUNBLE9BQU87QUFDWDtBQUlPLGVBQWVHO0lBRWxCLE1BQU1BLGFBQWE7Ozs7S0FBdUQ7SUFFMUUsT0FBT0E7QUFDWDs7VUFHS0M7Ozs7R0FBQUEsZ0JBQUFBOztVQU9BQzs7OztHQUFBQSxlQUFBQTtBQVNFLGVBQWVDLGdCQUFnQkMsS0FBWTtJQUU5QyxPQUFRQTtRQUNKLEtBQUs7WUFDRDtRQUNKLEtBQUs7WUFDRDtRQUNKLEtBQUs7WUFDRDtRQUNKO1lBQ0ksT0FBTztJQUNmO0lBQ0EsT0FBTztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvU3RvY2tUeXBlL3BhZ2VzLnRzPzljMGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lIHtcclxuICAgIFRPUExBTV9ET05FTl9WQVJMSUtMQVIgPSBcIl90b3BsYW0gZMO2bmVuIHZhcmzEsWtsYXJcIixcclxuICAgIFRPUExBTV9WQVJMSUtMQVIgPSBcIl90b3BsYW0gdmFybMSxa2xhclwiLFxyXG4gICAgVE9QTEFNX0tJU0FfVkFERUxJX1lVS1VNTFVMVUtMRVIgPSBcIl90b3BsYW0ga8Sxc2EgdmFkZWxpIHnDvGvDvG1sw7xsw7xrbGVyXCIsXHJcbiAgICBUT1BMQU1fVVpVTl9WQURFTElfWVVLVU1MVUxVS0xFUiA9IFwiX3RvcGxhbSB1enVuIHZhZGVsaSB5w7xrw7xtbMO8bMO8a2xlclwiLFxyXG4gICAgVE9QTEFNX09aS0FZTkFLTEFSID0gXCJfdG9wbGFtIMO2emtheW5ha2xhclwiLFxyXG4gICAgVE9QTEFNX0tBWU5BS0xBUiA9IFwiX3RvcGxhbSBrYXluYWtsYXJcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBGaW5hbmNpYWxfU3RhdGVtZW50X05hbWUge1xyXG4gICAgVG9wbGFtRG9uZW5WYXJsaWtsYXIgPSBcInRvcGxhbSBkw7ZuZW4gdmFybMSxa2xhclwiLFxyXG4gICAgVG9wbGFtVmFybGlrbGFyID0gXCJ0b3BsYW0gdmFybMSxa2xhclwiLFxyXG4gICAgVG9wbGFtS2lzYVZhZGVsaVl1a3VtbHVsdWtsZXIgPSBcInRvcGxhbSBrxLFzYSB2YWRlbGkgecO8a8O8bWzDvGzDvGtsZXJcIixcclxuICAgIFRvcGxhbVV6dW5WYWRlbGlZdWt1bWx1bHVrbGVyID0gXCJ0b3BsYW0gdXp1biB2YWRlbGkgecO8a8O8bWzDvGzDvGtsZXJcIixcclxuICAgIFRvcGxhbU96a2F5bmFrbGFyID0gXCJ0b3BsYW0gw7Z6a2F5bmFrbGFyXCIsXHJcbiAgICBUb3BsYW1LYXluYWtsYXIgPSBcInRvcGxhbSBrYXluYWtsYXJcIlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluYW5jaWFsX3N0YXRlbWVudCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICBjb25zdCBmaW5hbmNpYWxfc3RhdGVtZW50ID0gW1xyXG4gICAgICAgIEZpbmFuY2lhbF9TdGF0ZW1lbnRfRGJfTmFtZS5Ub3BsYW1Eb25lblZhcmxpa2xhcixcclxuICAgICAgICBGaW5hbmNpYWxfU3RhdGVtZW50X0RiX05hbWUuVG9wbGFtVmFybGlrbGFyLFxyXG4gICAgICAgIEZpbmFuY2lhbF9TdGF0ZW1lbnRfRGJfTmFtZS5Ub3BsYW1LaXNhVmFkZWxpWXVrdW1sdWx1a2xlcixcclxuICAgICAgICBGaW5hbmNpYWxfU3RhdGVtZW50X0RiX05hbWUuVG9wbGFtVXp1blZhZGVsaVl1a3VtbHVsdWtsZXIsXHJcbiAgICAgICAgRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lLlRvcGxhbU96a2F5bmFrbGFyLFxyXG4gICAgICAgIEZpbmFuY2lhbF9TdGF0ZW1lbnRfRGJfTmFtZS5Ub3BsYW1LYXluYWtsYXJcclxuICAgIF07XHJcbiAgICByZXR1cm4gZmluYW5jaWFsX3N0YXRlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmFuY2lhbF9zdGF0ZW1lbnRfTmFtZShzdGF0ZW1lbnQ6U3RyaW5nKTpQcm9taXNlPHN0cmluZz57XHJcblxyXG4gICAgc3dpdGNoIChzdGF0ZW1lbnQpIHtcclxuICAgICAgICBjYXNlIEZpbmFuY2lhbF9TdGF0ZW1lbnRfRGJfTmFtZS5Ub3BsYW1Eb25lblZhcmxpa2xhcjpcclxuICAgICAgICAgICAgcmV0dXJuIEZpbmFuY2lhbF9TdGF0ZW1lbnRfTmFtZS5Ub3BsYW1Eb25lblZhcmxpa2xhcjtcclxuICAgICAgICBjYXNlIEZpbmFuY2lhbF9TdGF0ZW1lbnRfRGJfTmFtZS5Ub3BsYW1WYXJsaWtsYXI6XHJcbiAgICAgICAgICAgIHJldHVybiBGaW5hbmNpYWxfU3RhdGVtZW50X05hbWUuVG9wbGFtVmFybGlrbGFyO1xyXG4gICAgICAgIGNhc2UgRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lLlRvcGxhbUtpc2FWYWRlbGlZdWt1bWx1bHVrbGVyOlxyXG4gICAgICAgICAgICByZXR1cm4gRmluYW5jaWFsX1N0YXRlbWVudF9OYW1lLlRvcGxhbUtpc2FWYWRlbGlZdWt1bWx1bHVrbGVyO1xyXG4gICAgICAgIGNhc2UgRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lLlRvcGxhbVV6dW5WYWRlbGlZdWt1bWx1bHVrbGVyOlxyXG4gICAgICAgICAgICByZXR1cm4gRmluYW5jaWFsX1N0YXRlbWVudF9OYW1lLlRvcGxhbVV6dW5WYWRlbGlZdWt1bWx1bHVrbGVyO1xyXG4gICAgICAgIGNhc2UgRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lLlRvcGxhbU96a2F5bmFrbGFyOlxyXG4gICAgICAgICAgICByZXR1cm4gRmluYW5jaWFsX1N0YXRlbWVudF9OYW1lLlRvcGxhbU96a2F5bmFrbGFyO1xyXG4gICAgICAgIGNhc2UgRmluYW5jaWFsX1N0YXRlbWVudF9EYl9OYW1lLlRvcGxhbUtheW5ha2xhcjpcclxuICAgICAgICAgICAgcmV0dXJuIEZpbmFuY2lhbF9TdGF0ZW1lbnRfTmFtZS5Ub3BsYW1LYXluYWtsYXI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiZXJyb3JcIjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvY2tfbmFtZSgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcblxyXG4gICAgY29uc3Qgc3RvY2tfbmFtZSA9IFtTdG9ja19zaG9ydC5ER0dZTyxTdG9ja19zaG9ydC5LQ0hPTCxTdG9ja19zaG9ydC5PWVlBVF07XHJcblxyXG4gICAgcmV0dXJuIHN0b2NrX25hbWU7XHJcbn1cclxuXHJcblxyXG5lbnVtIFN0b2NrX3Nob3J0IHtcclxuICAgIERHR1lPID0gXCJER0dZT1wiLFxyXG4gICAgS0NIT0wgPSBcIktDSE9MXCIsXHJcbiAgICBPWVlBVCA9IFwiT1lZQVRcIlxyXG5cclxufVxyXG5cclxuZW51bSBTdG9ja19sb25nIHtcclxuICAgIERHR1lPID0gXCJEb8SfdcWfIGhvbGRpbmdcIixcclxuICAgIEtDSE9MID0gXCJLb8OnIGhvbGRpbmdcIixcclxuICAgIE9ZWUFUID0gXCJPeWFrIGhvbGRpbmdcIlxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvY2tfbG9uZ19uYW1lKHN0b2NrOlN0cmluZyk6UHJvbWlzZTxzdHJpbmc+e1xyXG5cclxuICAgIHN3aXRjaCAoc3RvY2spIHtcclxuICAgICAgICBjYXNlIFwiREdHWU9cIjpcclxuICAgICAgICAgICAgcmV0dXJuIFN0b2NrX2xvbmcuREdHWU87XHJcbiAgICAgICAgY2FzZSBcIktDSE9MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBTdG9ja19sb25nLktDSE9MO1xyXG4gICAgICAgIGNhc2UgXCJPWVlBVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gU3RvY2tfbG9uZy5PWVlBVDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJlcnJvclwiO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJGaW5hbmNpYWxfU3RhdGVtZW50X0RiX05hbWUiLCJGaW5hbmNpYWxfU3RhdGVtZW50X05hbWUiLCJmaW5hbmNpYWxfc3RhdGVtZW50IiwiVG9wbGFtRG9uZW5WYXJsaWtsYXIiLCJUb3BsYW1WYXJsaWtsYXIiLCJUb3BsYW1LaXNhVmFkZWxpWXVrdW1sdWx1a2xlciIsIlRvcGxhbVV6dW5WYWRlbGlZdWt1bWx1bHVrbGVyIiwiVG9wbGFtT3prYXluYWtsYXIiLCJUb3BsYW1LYXluYWtsYXIiLCJmaW5hbmNpYWxfc3RhdGVtZW50X05hbWUiLCJzdGF0ZW1lbnQiLCJzdG9ja19uYW1lIiwiU3RvY2tfc2hvcnQiLCJTdG9ja19sb25nIiwic3RvY2tfbG9uZ19uYW1lIiwic3RvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/StockType/pages.ts\n"));

/***/ })

});