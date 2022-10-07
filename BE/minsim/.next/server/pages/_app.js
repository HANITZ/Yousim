"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8909);
/* harmony import */ var styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9420);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5427);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4842);
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sentry_tracing__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










_sentry_react__WEBPACK_IMPORTED_MODULE_4__.init({
    dsn: "https://bf895e01895948d9b55d0bdc232962dd@o1409479.ingest.sentry.io/6745974",
    integrations: [
        new _sentry_tracing__WEBPACK_IMPORTED_MODULE_5__.Integrations.BrowserTracing()
    ],
    tracesSampleRate: 1.0
});
const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();
function MyApp({ Component , pageProps  }) {
    // if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    //   import("../mocks");
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_6__.RecoilRoot, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
                        styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
              ${styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z};
            `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);



// import reset from 'styled-reset'
(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.setBreakPoints)({
    desktop: 1440,
    tablet: 768,
    phone: 360
});
const globalStyle = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  * {
    font-family: 'Pretendard';
  }
  h1 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
      font-size: 50.5px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
      font-size: 43.8px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
      font-size: 37.5px;
    }
  }
  h2 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
      font-size: 37.9px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
      font-size: 32.9px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
      font-size: 28.2px;
    }
  }
  h3 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
      font-size: 28.4px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
      font-size: 24.7px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
      font-size: 21.2px;
    }
  }
  h4 {
    line-height: 140%;
    margin-block-start: 0;
    margin-block-end: 0;

    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
      font-size: 21.3px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
      font-size: 18.6px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
      font-size: 15.9px;
    }
  }
  p {
    line-height: 160%;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;

    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
      font-size: 16px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
      font-size: 15px;
    }
    ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
      font-size: 12px;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalStyle);


/***/ }),

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const size = {
    mobile: "768px",
    desktop: "1700px"
};
const theme = {
    primary: "#000",
    secondary: "#fff",
    tertiary: "#1C1C1F",
    accent: "#FF5349",
    contentPrimary: "#31313C",
    contentSecondary: "#A6A6A6"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5427:
/***/ ((module) => {

module.exports = require("@sentry/react");

/***/ }),

/***/ 4842:
/***/ ((module) => {

module.exports = require("@sentry/tracing");

/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2957));
module.exports = __webpack_exports__;

})();