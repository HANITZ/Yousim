"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "https://j7c203.p.ssafy.io/";


/***/ }),

/***/ 2151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f6": () => (/* binding */ VideoListContainerInnerWrapper),
/* harmony export */   "sH": () => (/* binding */ VideoListContainer),
/* harmony export */   "xv": () => (/* binding */ VideoDetailContainerInnerWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);


(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.getBreakPoints)();
const VideoListContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: #31313C;
  border-radius: 10px;
  padding: 32px 112px 32px 112px;
  margin: 0px 64px 32px 64px;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
    padding: 32px 112px 32px 112px;
    margin: 0px 64px 16px 64px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    padding: 24px 64px 24px 64px;
    margin-left: 32px;
    margin-right: 32px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    padding: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const VideoListContainerInnerWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0 45px 0;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    flex-direction: column;
  }

  :hover{
    cursor: pointer;
  }
`;
const VideoDetailContainerInnerWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%; 
  height: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  margin: 45px 0 45px 0;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    flex-direction: column;
  }
`;


/***/ }),

/***/ 9738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lf": () => (/* binding */ ChannelnfoWrapper),
/* harmony export */   "Vk": () => (/* binding */ ChannelTagWrapper),
/* harmony export */   "jR": () => (/* binding */ VideoTagWrapper),
/* harmony export */   "rs": () => (/* binding */ ChannelInfoTextWrapper),
/* harmony export */   "t7": () => (/* binding */ VideoInfoTextWrapper)
/* harmony export */ });
/* unused harmony export MainInfoWrapper */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);


(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.getBreakPoints)();
const MainInfoWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)``;
const ChannelInfoTextWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display:inline-block;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
    margin-left: 64px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    margin-left: 32px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    margin-top: 16px;
  }
`;
const VideoInfoTextWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display:inline-block;
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()(">desktop")} {
    margin-left: 64px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    margin-left: 32px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    margin-left: 16px;
  }
`;
const ChannelnfoWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-top: 16px;
`;
const ChannelTagWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 16px;
`;
const VideoTagWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  height: 128px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    height: 128px;
    margin-left: 32px;
    flex-direction: column;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    width: 100%;
    height: auto;
    margin-top: 16px;
    flex-direction: row;
  }
`;


/***/ })

};
;