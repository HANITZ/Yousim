"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 5462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_2__);



(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_2__.getBreakPoints)();
const DescribeTextStyle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  margin: 128px 0px 64px 0;
  display: flex;
  flex-direction: column;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_2___default()(">desktop")} {
    margin-left: 64px;
    margin-right: 64px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_2___default()("<=desktop", ">tablet")} {
    min-width: 32px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_2___default()("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const DescribeMainText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().h2)`
  display: inline-block;
  color: #FF5349;
  margin-bottom: 32px;
`;
const DescribeSubText = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().h2)`
  display: inline-block;
  color: #fff; 
`;
const DescribeText = ({ mainText , subText1 , subText2  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DescribeTextStyle, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescribeMainText, {
                children: mainText
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescribeSubText, {
                children: subText1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescribeSubText, {
                children: subText2
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescribeText);


/***/ })

};
;