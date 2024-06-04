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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DataService_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataService/route */ \"(app-pages-browser)/./src/app/DataService/route.ts\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"(app-pages-browser)/./src/app/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DomHandler_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DomHandler/page */ \"(app-pages-browser)/./src/app/DomHandler/page.ts\");\n/* harmony import */ var _StockType_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StockType/page */ \"(app-pages-browser)/./src/app/StockType/page.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    let sayac = true;\n    async function getData() {\n        sayac = false;\n        (await (0,_StockType_page__WEBPACK_IMPORTED_MODULE_5__.stock_name)().then()).forEach(async (stock_name)=>{\n            await (0,_DomHandler_page__WEBPACK_IMPORTED_MODULE_4__.createGeneralHtml)(stock_name);\n            (await (0,_StockType_page__WEBPACK_IMPORTED_MODULE_5__.financial_statement)().then()).forEach(async (financial_statement)=>{\n                await (0,_DomHandler_page__WEBPACK_IMPORTED_MODULE_4__.financialStatementGraph)(stock_name, financial_statement);\n                let result = await (0,_DataService_route__WEBPACK_IMPORTED_MODULE_2__.fetchData)(stock_name, stock_name + financial_statement);\n                await (0,_DomHandler_page__WEBPACK_IMPORTED_MODULE_4__.drawLineChart)(result, stock_name, financial_statement, stock_name + financial_statement);\n                if (\"error\" in result) {\n                    console.log(\"error\");\n                }\n            });\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sayac) {\n            getData();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_3___default().allElement),\n        id: \"allelement\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFa0M7QUFDYztBQUNSO0FBQ3NEO0FBQzNCO0FBRXBELFNBQVNROztJQUNwQixJQUFJQyxRQUFpQjtJQUNyQixlQUFlQztRQUNYRCxRQUFRO1FBRVAsT0FBTUYsMkRBQVVBLEdBQUdJLElBQUksRUFBQyxFQUFHQyxPQUFPLENBQUMsT0FBTUw7WUFDdEMsTUFBTUosbUVBQWlCQSxDQUFDSTtZQUN2QixPQUFNRCxvRUFBbUJBLEdBQUdLLElBQUksRUFBQyxFQUFHQyxPQUFPLENBQUMsT0FBTU47Z0JBQy9DLE1BQU1ELHlFQUF1QkEsQ0FBQ0UsWUFBWUQ7Z0JBRTFDLElBQUlPLFNBQVMsTUFBTVosNkRBQVNBLENBQUNNLFlBQVlBLGFBQWFEO2dCQUN0RCxNQUFNRiwrREFBYUEsQ0FBQ1MsUUFBUU4sWUFBWUQscUJBQXFCQyxhQUFhRDtnQkFFMUUsSUFBSSxXQUFXTyxRQUFRO29CQUNuQkMsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKO1FBQ0o7SUFDSjtJQUVBZixnREFBU0EsQ0FBQztRQUNOLElBQUlTLE9BQU87WUFDUEM7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFXZixxRUFBaUI7UUFBRWlCLElBQUc7Ozs7OztBQUU5QztHQTdCd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9EYXRhU2VydmljZS9yb3V0ZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlR2VuZXJhbEh0bWwsIGRyYXdMaW5lQ2hhcnQsIGZpbmFuY2lhbFN0YXRlbWVudEdyYXBoIH0gZnJvbSAnLi9Eb21IYW5kbGVyL3BhZ2UnO1xyXG5pbXBvcnQgeyBmaW5hbmNpYWxfc3RhdGVtZW50LCBzdG9ja19uYW1lIH0gZnJvbSAnLi9TdG9ja1R5cGUvcGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgbGV0IHNheWFjOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgICAgc2F5YWMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgKGF3YWl0IHN0b2NrX25hbWUoKS50aGVuKCkpLmZvckVhY2goYXN5bmMgc3RvY2tfbmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUdlbmVyYWxIdG1sKHN0b2NrX25hbWUpO1xyXG4gICAgICAgICAgICAoYXdhaXQgZmluYW5jaWFsX3N0YXRlbWVudCgpLnRoZW4oKSkuZm9yRWFjaChhc3luYyBmaW5hbmNpYWxfc3RhdGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGZpbmFuY2lhbFN0YXRlbWVudEdyYXBoKHN0b2NrX25hbWUsIGZpbmFuY2lhbF9zdGF0ZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaERhdGEoc3RvY2tfbmFtZSwgc3RvY2tfbmFtZSArIGZpbmFuY2lhbF9zdGF0ZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZHJhd0xpbmVDaGFydChyZXN1bHQsIHN0b2NrX25hbWUsIGZpbmFuY2lhbF9zdGF0ZW1lbnQsIHN0b2NrX25hbWUgKyBmaW5hbmNpYWxfc3RhdGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJ2Vycm9yJyBpbiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2F5YWMpIHtcclxuICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxsRWxlbWVudH0gaWQ9XCJhbGxlbGVtZW50XCI+PC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJzdHlsZXMiLCJjcmVhdGVHZW5lcmFsSHRtbCIsImRyYXdMaW5lQ2hhcnQiLCJmaW5hbmNpYWxTdGF0ZW1lbnRHcmFwaCIsImZpbmFuY2lhbF9zdGF0ZW1lbnQiLCJzdG9ja19uYW1lIiwiSG9tZSIsInNheWFjIiwiZ2V0RGF0YSIsInRoZW4iLCJmb3JFYWNoIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImFsbEVsZW1lbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});