"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./components/BlogPost/BlogPost.tsx":
/*!******************************************!*\
  !*** ./components/BlogPost/BlogPost.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"./node_modules/remark-gfm/index.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar BlogPost = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? 'Missing title' : _title, _name = post.name, name = _name === void 0 ? 'Missing name' : _name, categories = post.categories, authorImage = post.authorImage, body = post.body;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(category) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: \"\".concat(name, \"'s picture\")\n                }, void 0, false, {\n                    fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                remarkPlugins: [\n                    remark_gfm__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                ],\n                children: body\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_c = BlogPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPost);\nvar _c;\n$RefreshReg$(_c, \"BlogPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dQb3N0L0Jsb2dQb3N0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBQ1I7QUFDYTtBQUNkOztTQUt4QkksTUFBTSxDQUFDQyxNQUFXLEVBQUUsQ0FBQztJQUM1QixNQUFNLENBQUNILHdEQUFlLENBQUNDLCtDQUFNLEVBQUVHLEtBQUssQ0FBQ0QsTUFBTTtBQUM3QyxDQUFDO0FBSUQsR0FBSyxDQUFDRSxRQUFRLEdBQXVCLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTs7SUFDMUMsR0FBSyxVQU1EQSxJQUFJLENBTE5DLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxDQUFlLGlDQUtyQkQsSUFBSSxDQUpORSxJQUFJLEVBQUpBLElBQUksc0JBQUcsQ0FBYyx1QkFDckJDLFVBQVUsR0FHUkgsSUFBSSxDQUhORyxVQUFVLEVBQ1ZDLFdBQVcsR0FFVEosSUFBSSxDQUZOSSxXQUFXLEVBQ1hDLElBQUksR0FDRkwsSUFBSSxDQUROSyxJQUFJO0lBRU4sTUFBTSw2RUFDSEMsQ0FBTzs7d0ZBQ0xDLENBQUU7MEJBQUVOLEtBQUs7Ozs7Ozt3RkFDVE8sQ0FBSTs7b0JBQUMsQ0FBRztvQkFBQ04sSUFBSTs7Ozs7OztZQUViQyxVQUFVLGdGQUNSTSxDQUFFOztvQkFBQyxDQUVGO29CQUFDTixVQUFVLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVE7c0NBQ3ZCLE1BQU0sK0RBQUxDLENBQUU7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7Ozs7Ozs7Ozs7O1lBSXRCUCxXQUFXLGdGQUNUUyxDQUFHO3NHQUNEQyxDQUFHO29CQUNGQyxHQUFHLEVBQUVuQixNQUFNLENBQUNRLFdBQVcsRUFBRVksS0FBSyxDQUFDLEVBQUUsRUFBRUMsR0FBRztvQkFDdENDLEdBQUcsRUFBRyxHQUFPLE1BQVUsQ0FBZmhCLElBQUksRUFBQyxDQUFVOzs7Ozs7Ozs7Ozt3RkFJNUJWLHNEQUFhO2dCQUFDMkIsYUFBYSxFQUFFLENBQUMxQjtvQkFBQUEsa0RBQVM7Z0JBQUEsQ0FBQzswQkFBR1ksSUFBSTs7Ozs7Ozs7Ozs7O0FBR3RELENBQUM7S0FoQ0tOLFFBQVE7QUFrQ2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC9CbG9nUG9zdC50c3g/ZWJlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcG9zdFR5cGUnXG5pbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWFkaW5nVGltZSBmcm9tICdyZWFkaW5nLXRpbWUnXG5cbmZ1bmN0aW9uIHVybEZvcihzb3VyY2U6IGFueSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxudHlwZSBCbG9nUG9zdFByb3BzID0ge1xuICBwb3N0OiBQb3N0VHlwZVxufVxuY29uc3QgQmxvZ1Bvc3Q6IFZGQzxCbG9nUG9zdFByb3BzPiA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYXV0aG9ySW1hZ2UsXG4gICAgYm9keSxcbiAgfSA9IHBvc3RcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHsvKjxzcGFuPntyZWFkaW5nVGltZShib2R5KX08L3NwYW4+Ki99XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfVxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxSZWFjdE1hcmtkb3duIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfT57Ym9keX08L1JlYWN0TWFya2Rvd24+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0XG4iXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsInJlbWFya0dmbSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiQmxvZ1Bvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJkaXYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsInVybCIsImFsdCIsInJlbWFya1BsdWdpbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlogPost/BlogPost.tsx\n");

/***/ })

});