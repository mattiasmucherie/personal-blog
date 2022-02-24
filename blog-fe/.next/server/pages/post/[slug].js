"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.ts":
/*!*******************!*\
  !*** ./client.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: 'h4dts712',\n    dataset: 'production',\n    useCdn: true,\n    apiVersion: '2021-08-31'\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlQSxxREFBWSxDQUFDLENBQUM7SUFDM0JDLFNBQVMsRUFBRSxDQUFVO0lBQ3JCQyxPQUFPLEVBQUUsQ0FBWTtJQUNyQkMsTUFBTSxFQUFFLElBQUk7SUFDWkMsVUFBVSxFQUFFLENBQVk7QUFDMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1mZS8uL2NsaWVudC50cz81YjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogJ2g0ZHRzNzEyJyxcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICB1c2VDZG46IHRydWUsXG4gIGFwaVZlcnNpb246ICcyMDIxLTA4LTMxJyxcbn0pXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsImFwaVZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.ts\n");

/***/ }),

/***/ "./components/BlogPost/BlogPost.tsx":
/*!******************************************!*\
  !*** ./components/BlogPost/BlogPost.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-gfm */ \"remark-gfm\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.ts\");\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reading-time */ \"reading-time\");\n/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__]);\n([remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst BlogPost = ({ post  })=>{\n    const { title ='Missing title' , name ='Missing name' , categories , authorImage , body ,  } = post;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: reading_time__WEBPACK_IMPORTED_MODULE_5___default()(body).text\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                remarkPlugins: [\n                    remark_gfm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                ],\n                children: body\n            }, void 0, false, {\n                fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/components/BlogPost/BlogPost.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2dQb3N0L0Jsb2dQb3N0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNSO0FBQ2E7QUFDZDtBQUdLO1NBRTdCSyxNQUFNLENBQUNDLE1BQVcsRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FBQ0osd0RBQWUsQ0FBQ0MsK0NBQU0sRUFBRUksS0FBSyxDQUFDRCxNQUFNO0FBQzdDLENBQUM7QUFJRCxLQUFLLENBQUNFLFFBQVEsSUFBd0IsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbEQsS0FBSyxDQUFDLENBQUMsQ0FDTEMsS0FBSyxFQUFHLENBQWUsaUJBQ3ZCQyxJQUFJLEVBQUcsQ0FBYyxnQkFDckJDLFVBQVUsR0FDVkMsV0FBVyxHQUNYQyxJQUFJLElBQ04sQ0FBQyxHQUFHTCxJQUFJO0lBQ1IsTUFBTSw2RUFDSE0sQ0FBTzs7d0ZBQ0xDLENBQUU7MEJBQUVOLEtBQUs7Ozs7Ozt3RkFDVE8sQ0FBSTs7b0JBQUMsQ0FBRztvQkFBQ04sSUFBSTs7Ozs7Ozt3RkFDYk8sQ0FBQzswQkFBRWQsbURBQVcsQ0FBQ1UsSUFBSSxFQUFFSyxJQUFJOzs7Ozs7WUFDekJQLFVBQVUsZ0ZBQ1JRLENBQUU7O29CQUFDLENBRUY7b0JBQUNSLFVBQVUsQ0FBQ1MsR0FBRyxFQUFFQyxRQUFRLCtFQUN0QkMsQ0FBRTtzQ0FBaUJELFFBQVE7MkJBQW5CQSxRQUFROzs7Ozs7Ozs7Ozs7WUFJdEJULFdBQVcsZ0ZBQ1RXLENBQUc7c0dBQ0RDLENBQUc7b0JBQ0ZDLEdBQUcsRUFBRXJCLE1BQU0sQ0FBQ1EsV0FBVyxFQUFFYyxLQUFLLENBQUMsRUFBRSxFQUFFQyxHQUFHO29CQUN0Q0MsR0FBRyxLQUFLbEIsSUFBSSxDQUFDLFVBQVU7Ozs7Ozs7Ozs7O3dGQUk1Qlgsc0RBQWE7Z0JBQUM4QixhQUFhLEVBQUUsQ0FBQzdCO29CQUFBQSxrREFBUztnQkFBQSxDQUFDOzBCQUFHYSxJQUFJOzs7Ozs7Ozs7Ozs7QUFHdEQsQ0FBQztBQUVELGlFQUFlTixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1mZS8uL2NvbXBvbmVudHMvQmxvZ1Bvc3QvQmxvZ1Bvc3QudHN4P2ViZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gJ3JlbWFyay1nZm0nXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3Bvc3RUeXBlJ1xuaW1wb3J0IHsgVkZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVhZGluZ1RpbWUgZnJvbSAncmVhZGluZy10aW1lJ1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlOiBhbnkpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cbnR5cGUgQmxvZ1Bvc3RQcm9wcyA9IHtcbiAgcG9zdDogUG9zdFR5cGVcbn1cbmNvbnN0IEJsb2dQb3N0OiBWRkM8QmxvZ1Bvc3RQcm9wcz4gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxuICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHksXG4gIH0gPSBwb3N0XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICA8cD57cmVhZGluZ1RpbWUoYm9keSkudGV4dH08L3A+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfVxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxSZWFjdE1hcmtkb3duIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfT57Ym9keX08L1JlYWN0TWFya2Rvd24+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0XG4iXSwibmFtZXMiOlsiUmVhY3RNYXJrZG93biIsInJlbWFya0dmbSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInJlYWRpbmdUaW1lIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJCbG9nUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInAiLCJ0ZXh0IiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiZGl2IiwiaW1nIiwic3JjIiwid2lkdGgiLCJ1cmwiLCJhbHQiLCJyZW1hcmtQbHVnaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlogPost/BlogPost.tsx\n");

/***/ }),

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.ts\");\n/* harmony import */ var _components_BlogPost_BlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BlogPost/BlogPost */ \"./components/BlogPost/BlogPost.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_BlogPost_BlogPost__WEBPACK_IMPORTED_MODULE_3__]);\n_components_BlogPost_BlogPost__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Post = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPost_BlogPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        post: post\n    }, void 0, false, {\n        fileName: \"/Users/mattiasmucherie/Documents/projects/blog/blog-fe/pages/post/[slug].tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, undefined));\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body,\n  mainImage\n}`;\nconst getStaticPaths = async ()=>{\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n};\nconst getStaticProps = async (context)=>{\n    const { slug  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNVO0FBSXdCO0FBU3pELEtBQUssQ0FBQ0csSUFBSSxJQUF5QixDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMvQyxNQUFNLDZFQUFFRixxRUFBUTtRQUFDRSxJQUFJLEVBQUVBLElBQUk7Ozs7OztBQUM3QixDQUFDO0FBRUQsS0FBSyxDQUFDQyxLQUFLLEdBQUdMLDZDQUFJLENBQUM7Ozs7Ozs7Q0FPbEI7QUFFTSxLQUFLLENBQUNNLGNBQWMsYUFBdUMsQ0FBQztJQUNqRSxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNOLHFEQUFZLENBQzlCRCw2Q0FBSSxDQUFDLDBEQUEwRDtJQUVqRSxNQUFNLENBQUMsQ0FBQztRQUNOTyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0UsR0FBRyxFQUFFQyxJQUFJLElBQU0sQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQUM7b0JBQUNELElBQUk7Z0JBQUMsQ0FBQztZQUFDLENBQUM7O1FBQ2hERSxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsY0FBYyxVQUN6QkMsT0FBTyxHQUNKLENBQUM7SUFDSixLQUFLLENBQUMsQ0FBQyxDQUFDSixJQUFJLEVBQUMsQ0FBQyxHQUFHSSxPQUFPLENBQUNILE1BQU07SUFDL0IsS0FBSyxDQUFDUCxJQUFJLEdBQUcsS0FBSyxDQUFDSCxxREFBWSxDQUFDSSxLQUFLLEVBQUUsQ0FBQztRQUFDSyxJQUFJO0lBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsQ0FBQztRQUNOSyxLQUFLLEVBQUUsQ0FBQztZQUNOWCxJQUFJO1FBQ04sQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWZlLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4PzMwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9wb3N0VHlwZSdcbmltcG9ydCBCbG9nUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2dQb3N0L0Jsb2dQb3N0J1xuXG5pbnRlcmZhY2UgUGFyYW1zIGV4dGVuZHMgUGFyc2VkVXJsUXVlcnkge1xuICBzbHVnOiBzdHJpbmdcbn1cblxudHlwZSBQb3N0UHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3RUeXBlXG59XG5jb25zdCBQb3N0OiBOZXh0UGFnZTxQb3N0UHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiA8QmxvZ1Bvc3QgcG9zdD17cG9zdH0gLz5cbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIGJvZHksXG4gIG1haW5JbWFnZVxufWBcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczxQYXJhbXM+ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaDxzdHJpbmdbXT4oXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFBvc3RQcm9wcywgUGFyYW1zPiA9IGFzeW5jIChcbiAgY29udGV4dFxuKSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXMhXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sIm5hbWVzIjpbImdyb3EiLCJjbGllbnQiLCJCbG9nUG9zdCIsIlBvc3QiLCJwb3N0IiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].tsx\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reading-time":
/*!*******************************!*\
  !*** external "reading-time" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].tsx"));
module.exports = __webpack_exports__;

})();