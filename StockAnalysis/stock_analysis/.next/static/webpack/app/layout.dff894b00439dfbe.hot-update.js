"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const [drawerOpen, setDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDrawer = (open)=>()=>{\n            setDrawerOpen(open);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            position: \"fixed\",\n                            sx: {\n                                zIndex: (theme)=>theme.zIndex.drawer + 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        edge: \"start\",\n                                        color: \"inherit\",\n                                        \"aria-label\": \"open drawer\",\n                                        onClick: toggleDrawer(!drawerOpen),\n                                        sx: {\n                                            mr: 2\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        noWrap: true,\n                                        component: \"div\",\n                                        sx: {\n                                            flexGrow: 1\n                                        },\n                                        children: \"Stock Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/about\",\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            variant: \"h6\",\n                                            noWrap: true,\n                                            component: \"a\",\n                                            sx: {\n                                                textDecoration: \"none\",\n                                                color: \"inherit\"\n                                            },\n                                            children: \"About Dev\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            anchor: \"left\",\n                            open: drawerOpen,\n                            onClose: toggleDrawer(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    width: 250\n                                },\n                                role: \"presentation\",\n                                onClick: toggleDrawer(false),\n                                onKeyDown: toggleDrawer(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    children: [\n                                        \"\",\n                                        \"Home\",\n                                        \"About\",\n                                        \"Contact\"\n                                    ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: text === \"Home\" ? \"/\" : \"/\".concat(text.toLowerCase()),\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                button: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    primary: text\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, text, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 37\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            component: \"main\",\n                            sx: {\n                                flexGrow: 1,\n                                bgcolor: \"background.default\",\n                                p: 3\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, undefined),\n                                children\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"i0pHI9YMbVyneVc1gk5xK0P2xMQ=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDNkU7QUFDaEY7QUFDbkI7QUFNN0IsTUFBTWMsU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBZTs7SUFDckMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNaUIsZUFBZSxDQUFDQyxPQUFrQjtZQUNwQ0YsY0FBY0U7UUFDbEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsTUFBSzs7MEJBQ1AsOERBQUNDOzs7OzswQkFHRCw4REFBQ0M7MEJBQ0csNEVBQUNaLGtLQUFHQTtvQkFBQ2EsSUFBSTt3QkFBRUMsU0FBUztvQkFBTzs7c0NBQ3ZCLDhEQUFDZixrS0FBV0E7Ozs7O3NDQUNaLDhEQUFDUixrS0FBTUE7NEJBQUN3QixVQUFTOzRCQUFRRixJQUFJO2dDQUFFRyxRQUFRLENBQUNDLFFBQVVBLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHOzRCQUFFO3NDQUN0RSw0RUFBQzFCLGtLQUFPQTs7a0RBQ0osOERBQUNFLGtLQUFVQTt3Q0FDUHlCLE1BQUs7d0NBQ0xDLE9BQU07d0NBQ05DLGNBQVc7d0NBQ1hDLFNBQVNmLGFBQWEsQ0FBQ0Y7d0NBQ3ZCUSxJQUFJOzRDQUFFVSxJQUFJO3dDQUFFO2tEQUVaLDRFQUFDdEIsZ0VBQVFBOzs7Ozs7Ozs7O2tEQUViLDhEQUFDUixrS0FBVUE7d0NBQUMrQixTQUFRO3dDQUFLQyxNQUFNO3dDQUFDQyxXQUFVO3dDQUFNYixJQUFJOzRDQUFFYyxVQUFVO3dDQUFFO2tEQUFHOzs7Ozs7a0RBR3JFLDhEQUFDekIsaURBQUlBO3dDQUFDMEIsTUFBSzt3Q0FBU0MsUUFBUTtrREFDeEIsNEVBQUNwQyxrS0FBVUE7NENBQUMrQixTQUFROzRDQUFLQyxNQUFNOzRDQUFDQyxXQUFVOzRDQUFJYixJQUFJO2dEQUFFaUIsZ0JBQWdCO2dEQUFRVixPQUFPOzRDQUFVO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU01Ryw4REFBQ3pCLG1LQUFNQTs0QkFDSG9DLFFBQU87NEJBQ1B2QixNQUFNSDs0QkFDTjJCLFNBQVN6QixhQUFhO3NDQUV0Qiw0RUFBQ1Asa0tBQUdBO2dDQUNBYSxJQUFJO29DQUFFb0IsT0FBTztnQ0FBSTtnQ0FDakJDLE1BQUs7Z0NBQ0xaLFNBQVNmLGFBQWE7Z0NBQ3RCNEIsV0FBVzVCLGFBQWE7MENBRXhCLDRFQUFDWCxtS0FBSUE7OENBQ0E7d0NBQUU7d0NBQUc7d0NBQVE7d0NBQVM7cUNBQVUsQ0FBQ3dDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDekMsOERBQUNwQyxpREFBSUE7NENBQUMwQixNQUFNUyxTQUFTLFNBQVMsTUFBTSxJQUF1QixPQUFuQkEsS0FBS0UsV0FBVzs0Q0FBaUJWLFFBQVE7c0RBQzdFLDRFQUFDaEMsbUtBQVFBO2dEQUFDMkMsTUFBTTswREFDWiw0RUFBQzFDLG1LQUFZQTtvREFBQzJDLFNBQVNKOzs7Ozs7Ozs7OzsyQ0FGb0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FTbkYsOERBQUNyQyxrS0FBR0E7NEJBQ0EwQixXQUFVOzRCQUNWYixJQUFJO2dDQUFFYyxVQUFVO2dDQUFHZSxTQUFTO2dDQUFzQkMsR0FBRzs0QkFBRTs7OENBRXZELDhEQUFDbkQsa0tBQU9BOzs7OztnQ0FDUFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QjtHQXJFTUQ7S0FBQUE7QUF1RU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIENzc0Jhc2VsaW5lLCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZURyYXdlciA9IChvcGVuOiBib29sZWFuKSA9PiAoKSA9PiB7XG4gICAgICAgIHNldERyYXdlck9wZW4ob3Blbik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgey8qIEJ1cmFkYSBoZWFkIGnDp2VyacSfaW5pIGVrbGV5ZWJpbGlyc2luaXogKi99XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIHN4PXt7IHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcighZHJhd2VyT3Blbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9jayBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiYVwiIHN4PXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBEZXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17ZHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogMjUwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbICcnLCdIb21lJywgJ0Fib3V0JywgJ0NvbnRhY3QnXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt0ZXh0ID09PSAnSG9tZScgPyAnLycgOiBgLyR7dGV4dC50b0xvd2VyQ2FzZSgpfWB9IGtleT17dGV4dH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogJ2JhY2tncm91bmQuZGVmYXVsdCcsIHA6IDMgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIkNzc0Jhc2VsaW5lIiwiQm94IiwiTWVudUljb24iLCJMaW5rIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsInRvZ2dsZURyYXdlciIsIm9wZW4iLCJodG1sIiwibGFuZyIsImhlYWQiLCJib2R5Iiwic3giLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0aGVtZSIsImRyYXdlciIsImVkZ2UiLCJjb2xvciIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwibXIiLCJ2YXJpYW50Iiwibm9XcmFwIiwiY29tcG9uZW50IiwiZmxleEdyb3ciLCJocmVmIiwicGFzc0hyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImFuY2hvciIsIm9uQ2xvc2UiLCJ3aWR0aCIsInJvbGUiLCJvbktleURvd24iLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsImJ1dHRvbiIsInByaW1hcnkiLCJiZ2NvbG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});