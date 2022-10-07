"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 7183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9738);



const ChannelInfo = ({ title , subscriber , video , description  })=>{
    const convertSubscriber = ()=>{
        try {
            if (subscriber >= 100000000) {
                return `${subscriber /= 100000000}억명`;
            } else if (subscriber >= 10000) {
                return `${subscriber /= 10000}만명`;
            } else if (subscriber >= 1000) {
                return `${subscriber /= 1000}천명`;
            } else {
                return `${subscriber}명`;
            }
        } catch  {
            return;
        }
    };
    const convertDescription = ()=>{
        try {
            if (description.length >= 25) {
                return `${description.substring(0, 24)} ...`;
            } else {
                return description;
            }
        } catch  {
            return;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__/* .ChannelInfoTextWrapper */ .rs, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_componentStyles_ChannelInfoStyle__WEBPACK_IMPORTED_MODULE_2__/* .ChannelnfoWrapper */ .Lf, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "구독자 ",
                                convertSubscriber(),
                                "\xa0",
                                "\xa0",
                                "|",
                                "\xa0",
                                "\xa0"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "동영상 ",
                                video,
                                "개"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: convertDescription()
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChannelInfo);


/***/ }),

/***/ 2771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ aChData)
/* harmony export */ });
/* unused harmony export aSerachList */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

// 검색 리스트 search/[id]/index
const aSerachList = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "aSearchList",
    default: []
});
// 채널 정보 channel/[channel_id]/index
const aChData = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "aChData",
    default: {
        id: "",
        banner: "",
        name: "",
        description: "",
        subscriber: 0,
        video: 0,
        thumbnail: "",
        time: "",
        view: 0
    }
});


/***/ }),

/***/ 3743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ SearchInfoImgTextWrapper),
/* harmony export */   "E$": () => (/* binding */ SearchListContainerInnerWrapper),
/* harmony export */   "L7": () => (/* binding */ SearchListUl),
/* harmony export */   "U": () => (/* binding */ ChannelVideoImgContainer),
/* harmony export */   "UO": () => (/* binding */ SearchImgDiv),
/* harmony export */   "ms": () => (/* binding */ SearchMarginDiv)
/* harmony export */ });
/* unused harmony export SloganContainer */
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_1__);


(0,css_in_js_media__WEBPACK_IMPORTED_MODULE_1__.getBreakPoints)();
const SloganContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 210px;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
const SearchListUl = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
`;
const SearchListContainerInnerWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().li)`
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
const SearchMarginDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-top: 256px;
`;
const SearchInfoImgTextWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  p, h3 {
    display:inline-block;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    flex-direction: column;
  }
`;
const ChannelVideoImgContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  min-width: 160px;
  width: 160px;
  height: 90px;

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    min-width: 120px;
    width: 120px;
    height: 60px;
  }

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    min-width: 120px;
    width: 120px;
    height: 60px;
    margin-bottom: 32px;
  }
`;
const SearchImgDiv = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;

  width: 188px;
  height: 188px;
  

  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=desktop", ">tablet")} {
    width: 128px;
    height: 128px;
  }
  ${css_in_js_media__WEBPACK_IMPORTED_MODULE_1___default()("<=tablet", ">phone")} {
    margin-right: 16px;
    width: 64px;
    height: 64px;
  }

`;


/***/ })

};
;