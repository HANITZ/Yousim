"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 6299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9738);



const VideoInfo = ({ title , sub1 , sub2  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__/* .VideoInfoTextWrapper */ .t7, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__/* .ChannelnfoWrapper */ .Lf, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: sub1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: sub2
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoInfo);


/***/ }),

/***/ 6507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ ChannelInfoImgTextWrapper),
/* harmony export */   "Km": () => (/* binding */ ChannelInfoContainerInnerWrapper),
/* harmony export */   "jn": () => (/* binding */ ChannelInfoContainer),
/* harmony export */   "si": () => (/* binding */ ImgDiv)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);


(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.getBreakPoints)();
const ChannelInfoContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  height: 192px;
  background-color: #31313C;
  border-radius: 0 0 10px 10px;
  padding: 32px 112px 32px 112px;
  margin: 0px 64px 16px 64px;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
    padding: 32px 112px 32px 112px;
    margin: 0px 64px 16px 64px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    padding: 32px 64px 32px 64px;
    margin-left: 32px;
    margin-right: 32px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    height: 260px;
    padding: 32px 16px 32px 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const ChannelInfoContainerInnerWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ChannelInfoImgTextWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  p, h3 {
    display:inline-block;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
const ImgDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;

  width: 128px;
  height: 128px;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    width: 64px;
    height: 64px;
  }

`;


/***/ }),

/***/ 3068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);


(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.getBreakPoints)();
const Tag = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 128px;
  height: 32px;
  background-color: #1C1C1F;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


/***/ })

};
;