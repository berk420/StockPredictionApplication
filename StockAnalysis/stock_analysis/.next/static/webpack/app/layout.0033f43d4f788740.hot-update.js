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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Drawer/Drawer.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,CssBaseline,Drawer,IconButton,List,ListItem,ListItemText,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const [drawerOpen, setDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDrawer = (open)=>()=>{\n            setDrawerOpen(open);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            position: \"fixed\",\n                            sx: {\n                                zIndex: (theme)=>theme.zIndex.drawer + 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        edge: \"start\",\n                                        color: \"inherit\",\n                                        \"aria-label\": \"open drawer\",\n                                        onClick: toggleDrawer(!drawerOpen),\n                                        sx: {\n                                            mr: 2\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        variant: \"h6\",\n                                        noWrap: true,\n                                        component: \"div\",\n                                        sx: {\n                                            flexGrow: 1\n                                        },\n                                        children: \"Stock Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"./About/page.tsx\",\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            variant: \"h6\",\n                                            noWrap: true,\n                                            component: \"a\",\n                                            sx: {\n                                                textDecoration: \"none\",\n                                                color: \"inherit\"\n                                            },\n                                            children: \"About Dev\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            anchor: \"left\",\n                            open: drawerOpen,\n                            onClose: toggleDrawer(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    width: 250,\n                                    marginTop: 20\n                                },\n                                role: \"presentation\",\n                                onClick: toggleDrawer(false),\n                                onKeyDown: toggleDrawer(false),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    children: [\n                                        \"Home\",\n                                        \"About\",\n                                        \"Top3\"\n                                    ].map((text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: text === \"Top3\" ? \"/\" : \"/\".concat(text.toLowerCase()),\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                button: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    primary: text\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, text, false, {\n                                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 37\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            component: \"main\",\n                            sx: {\n                                flexGrow: 1,\n                                bgcolor: \"background.default\",\n                                p: 3\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_CssBaseline_Drawer_IconButton_List_ListItem_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, undefined),\n                                children\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\berk\\\\Desktop\\\\pass to react\\\\stock_analysis\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"i0pHI9YMbVyneVc1gk5xK0P2xMQ=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDNkU7QUFDaEY7QUFDbkI7QUFNN0IsTUFBTWMsU0FBUztRQUFDLEVBQUVDLFFBQVEsRUFBZTs7SUFDckMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNaUIsZUFBZSxDQUFDQyxPQUFrQjtZQUNwQ0YsY0FBY0U7UUFDbEI7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsTUFBSzs7MEJBQ1AsOERBQUNDOzs7OzswQkFHRCw4REFBQ0M7MEJBQ0csNEVBQUNaLGtLQUFHQTtvQkFBQ2EsSUFBSTt3QkFBRUMsU0FBUztvQkFBTzs7c0NBQ3ZCLDhEQUFDZixrS0FBV0E7Ozs7O3NDQUNaLDhEQUFDUixrS0FBTUE7NEJBQUN3QixVQUFTOzRCQUFRRixJQUFJO2dDQUFFRyxRQUFRLENBQUNDLFFBQVVBLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHOzRCQUFFO3NDQUN0RSw0RUFBQzFCLGtLQUFPQTs7a0RBQ0osOERBQUNFLGtLQUFVQTt3Q0FDUHlCLE1BQUs7d0NBQ0xDLE9BQU07d0NBQ05DLGNBQVc7d0NBQ1hDLFNBQVNmLGFBQWEsQ0FBQ0Y7d0NBQ3ZCUSxJQUFJOzRDQUFFVSxJQUFJO3dDQUFFO2tEQUVaLDRFQUFDdEIsZ0VBQVFBOzs7Ozs7Ozs7O2tEQUViLDhEQUFDUixrS0FBVUE7d0NBQUMrQixTQUFRO3dDQUFLQyxNQUFNO3dDQUFDQyxXQUFVO3dDQUFNYixJQUFJOzRDQUFFYyxVQUFVO3dDQUFFO2tEQUFHOzs7Ozs7a0RBR3JFLDhEQUFDekIsaURBQUlBO3dDQUFDMEIsTUFBSzt3Q0FBbUJDLFFBQVE7a0RBQ2xDLDRFQUFDcEMsa0tBQVVBOzRDQUFDK0IsU0FBUTs0Q0FBS0MsTUFBTTs0Q0FBQ0MsV0FBVTs0Q0FBSWIsSUFBSTtnREFBRWlCLGdCQUFnQjtnREFBUVYsT0FBTzs0Q0FBVTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNNUcsOERBQUN6QixtS0FBTUE7NEJBQ0hvQyxRQUFPOzRCQUNQdkIsTUFBTUg7NEJBQ04yQixTQUFTekIsYUFBYTtzQ0FFdEIsNEVBQUNQLGtLQUFHQTtnQ0FDQWEsSUFBSTtvQ0FBRW9CLE9BQU87b0NBQUtDLFdBQVU7Z0NBQUU7Z0NBQzlCQyxNQUFLO2dDQUNMYixTQUFTZixhQUFhO2dDQUN0QjZCLFdBQVc3QixhQUFhOzBDQUV4Qiw0RUFBQ1gsbUtBQUlBOzhDQUNBO3dDQUFDO3dDQUFRO3dDQUFTO3FDQUFPLENBQUN5QyxHQUFHLENBQUMsQ0FBQ0MscUJBQzVCLDhEQUFDcEMsaURBQUlBOzRDQUFDMEIsTUFBTVUsU0FBUyxTQUFTLE1BQU0sSUFBdUIsT0FBbkJBLEtBQUtDLFdBQVc7NENBQWlCVixRQUFRO3NEQUM3RSw0RUFBQ2hDLG1LQUFRQTtnREFBQzJDLE1BQU07MERBQ1osNEVBQUMxQyxtS0FBWUE7b0RBQUMyQyxTQUFTSDs7Ozs7Ozs7Ozs7MkNBRm9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBU25GLDhEQUFDdEMsa0tBQUdBOzRCQUNBMEIsV0FBVTs0QkFDVmIsSUFBSTtnQ0FBRWMsVUFBVTtnQ0FBR2UsU0FBUztnQ0FBc0JDLEdBQUc7NEJBQUU7OzhDQUV2RCw4REFBQ25ELGtLQUFPQTs7Ozs7Z0NBQ1BZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7R0FyRU1EO0tBQUFBO0FBdUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiwgRHJhd2VyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBDc3NCYXNlbGluZSwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcbiAgICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAob3BlbjogYm9vbGVhbikgPT4gKCkgPT4ge1xuICAgICAgICBzZXREcmF3ZXJPcGVuKG9wZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIHsvKiBCdXJhZGEgaGVhZCBpw6dlcmnEn2luaSBla2xleWViaWxpcnNpbml6ICovfVxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17eyB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoIWRyYXdlck9wZW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvY2sgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vQWJvdXQvcGFnZS50c3gnIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiYVwiIHN4PXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBEZXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17ZHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogMjUwICxtYXJnaW5Ub3A6MjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WydIb21lJywgJ0Fib3V0JywgJ1RvcDMnXS5tYXAoKHRleHQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RleHQgPT09ICdUb3AzJyA/ICcvJyA6IGAvJHt0ZXh0LnRvTG93ZXJDYXNlKCl9YH0ga2V5PXt0ZXh0fSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBiZ2NvbG9yOiAnYmFja2dyb3VuZC5kZWZhdWx0JywgcDogMyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJJY29uQnV0dG9uIiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiQ3NzQmFzZWxpbmUiLCJCb3giLCJNZW51SWNvbiIsIkxpbmsiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsImh0bWwiLCJsYW5nIiwiaGVhZCIsImJvZHkiLCJzeCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInpJbmRleCIsInRoZW1lIiwiZHJhd2VyIiwiZWRnZSIsImNvbG9yIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJtciIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJmbGV4R3JvdyIsImhyZWYiLCJwYXNzSHJlZiIsInRleHREZWNvcmF0aW9uIiwiYW5jaG9yIiwib25DbG9zZSIsIndpZHRoIiwibWFyZ2luVG9wIiwicm9sZSIsIm9uS2V5RG93biIsIm1hcCIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsImJ1dHRvbiIsInByaW1hcnkiLCJiZ2NvbG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});