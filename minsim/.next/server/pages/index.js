"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HOME_URL": () => (/* binding */ HOME_URL),
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/chart.png
/* harmony default export */ const chart = ({"src":"/_next/static/media/chart.2df76507.png","height":2475,"width":4050,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAkUlEQVR42i2MsQrCQBBEd/f2OImQIiIKAbGxtray8qv8ShsLu5DGRggKasxtxjvIwGNghhmu681IRN9Ex0R3x9Q0huvBu8t5u+6EJnEiJlpDPAYNp6rctUMcNZdIWLJKxO1nulh6jbff8Jh7HTQvA7MUwqFwUr6AzzuarbwzLywizPlBepA+R1APmKcUEDMA/AHRnjVwWDD98QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./src/components/NavBar.tsx + 3 modules
var NavBar = __webpack_require__(2426);
// EXTERNAL MODULE: ./src/components/DescribeText.tsx
var DescribeText = __webpack_require__(5462);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "css-in-js-media"
var external_css_in_js_media_ = __webpack_require__(8135);
var external_css_in_js_media_default = /*#__PURE__*/__webpack_require__.n(external_css_in_js_media_);
;// CONCATENATED MODULE: ./styles/mainStyles/IndexStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const SloganContainer = (styled_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 210px;
  margin-bottom: 64px;
  
  ${external_css_in_js_media_default()(">desktop")} {
    margin-left: 64px;
    margin-right: 64px;
  }
  ${external_css_in_js_media_default()("<=desktop", ">tablet")} {
    min-width: 32px;
  }
  ${external_css_in_js_media_default()("<=tablet", ">phone")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

// EXTERNAL MODULE: ./public/images/search_black.png
var search_black = __webpack_require__(9086);
;// CONCATENATED MODULE: ./styles/mainStyles/IntroductionSearchBarStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const IntroductionNavBarContainer = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IntroductionSearchBarContainer = (styled_default()).div`
  position: relative;

  div {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    min-height: 48px;
    
    ${external_css_in_js_media_default()(">desktop")} {
      min-width: 1080px;
    }
    ${external_css_in_js_media_default()("<=desktop", ">tablet")} {
      min-width: 768px;
    }
    ${external_css_in_js_media_default()("<=tablet", ">phone")} {
      min-width: 360px;
    }
  }

  button {
    padding: 0;
    border: none;
    background-color: #fff;
    position: absolute;
    top: 8px;
    right: 16px;
    cursor: pointer;
  }
`;

;// CONCATENATED MODULE: ./src/components/IntroductionSearchBar.tsx




function IntroductionSearchBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(IntroductionNavBarContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IntroductionSearchBarContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: search_black/* default */.Z,
                        alt: "검색 예시",
                        width: 32,
                        height: 32
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_IntroductionSearchBar = (IntroductionSearchBar);

;// CONCATENATED MODULE: ./styles/mainStyles/IntroductionVideoStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const IntroductionVideoContainer = (styled_default()).div`
  display:flex;
  flex-direction: row;
  min-width: 1088px;
  min-height: 412px;
  margin: 192px auto 0 auto;
  background-color: #000;
  height: 800px;

  ${external_css_in_js_media_default()(">desktop")} {
    min-width: 1080px;
  }
  ${external_css_in_js_media_default()("<=desktop", ">tablet")} {
    min-width: 768px;
  }
  ${external_css_in_js_media_default()("<=tablet", ">phone")} {
    justify-content: center;
    min-width: 360px;
    margin: 192px 0 0 0;
  }

  // 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정
`;
// 위로 이동하며 로딩띄우고 양 옆 열리기, height 수정
const IntroductionDivAnimation1 = (styled_default()).div`
  width: 250px;
  height: 800px;
  min-height: 412px;
  margin: 0 auto 0 0;
  background-color: #1C1C1F;
  flex-direction:row;
  ${external_css_in_js_media_default()("<=tablet", ">phone")} {
    /* justify-content: start; */
    /* flex-direction: row-reverse; */
    width: 0px;
    margin: 0 0 0 0;
  }
`;
const IntroductionDivAnimation2 = (styled_default()).div`
  width: 250px;
  height: 800px;
  min-height: 412px;
  margin: 0 0 0 auto;
  background-color: #1C1C1F;
  flex-direction: row-reverse;
  ${external_css_in_js_media_default()("<=tablet", ">phone")} {
    /* justify-content: end; */
    /* flex-direction: row; */
    width: 0px;
    margin: 0 0 0 0;
  }
`;

;// CONCATENATED MODULE: ./styles/componentStyles/SpinnerStyle.tsx

const Spinner = (styled_default()).div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;

  @keyframes Spinner {
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg);}
  }

  div {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: #f19022;
    border-bottom-color: #f19022;
    animation: spinner .8s ease infinite;
  }
`;

;// CONCATENATED MODULE: ./styles/mainStyles/ImgFrameStyle.tsx

const ImgFrameContainer = (styled_default()).div`
  width: 100%;
  height: 100%;
`;

;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/index.tsx














const HOME_URL = "http://43.200.1.125:8000/";
const Home = (props)=>{
    const DivAnimationRef1 = (0,external_react_.useRef)(null);
    const DivAnimationRef2 = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const el1 = DivAnimationRef1.current;
        const el2 = DivAnimationRef2.current;
        external_gsap_namespaceObject.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
        external_gsap_namespaceObject.gsap.to(el1, {
            scrollTrigger: {
                // trigger가 작동하는 위치(class or id 지정가능)
                trigger: "#SloganContainer",
                // 화면에 marker를 띄워 animation 위치 확인가능
                // markers: true, 
                start: "top top",
                end: "+=800",
                scrub: true
            },
            // x값이 음수이면 왼쪽 이동
            x: -300,
            duration: 2
        });
        external_gsap_namespaceObject.gsap.to(el2, {
            scrollTrigger: {
                // trigger가 작동하는 위치(class or id 지정가능)
                trigger: "#SloganContainer",
                // 화면에 marker를 띄워 animation 위치 확인가능
                // markers: true, 
                start: "top top",
                end: "+=800",
                scrub: true
            },
            // x값이 양수이면 오른쪽 이동
            x: 300,
            duration: 2
        });
        // ImgFrameContainer의 opacity의 초기값을 0으로 세팅
        external_gsap_namespaceObject.gsap.set("#ImgFrameContainer", {
            opacity: 0,
            ease: "none"
        });
        external_gsap_namespaceObject.gsap.to("#ImgFrameContainer", {
            ease: "none",
            opacity: 1,
            scrollTrigger: {
                trigger: "#ImgFrameStart",
                start: "-=400",
                end: "+=400",
                scrub: true,
                markers: true
            }
        });
        external_gsap_namespaceObject.gsap.set("#TrendImg", {
            opacity: 0,
            ease: "none"
        });
        external_gsap_namespaceObject.gsap.to("#TrendImg", {
            ease: "none",
            opacity: 1,
            scrollTrigger: {
                trigger: "#TrendImgStart",
                start: "-=400",
                end: "+=400",
                scrub: true,
                markers: true
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "민심"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SloganContainer, {
                            id: "SloganContainer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                style: {
                                    "textAlign": "center"
                                },
                                children: [
                                    "당신의 마음, 유튜브의 민심",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "유심을 통해 유튜브의 민심을 쉽게 알아보세요."
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DescribeText/* default */.Z, {
                                mainText: "채널 정보",
                                subText1: "채널을 검색해보세요.",
                                subText2: "다양한 정보가 당신을 기다리고 있습니다."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_IntroductionSearchBar, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IntroductionVideoContainer, {
                                id: "IntroductionVideoContainer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(IntroductionDivAnimation1, {
                                        id: "IntroductionDivAnimation1",
                                        ref: DivAnimationRef1
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(IntroductionDivAnimation2, {
                                        id: "IntroductionDivAnimation2",
                                        ref: DivAnimationRef2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        id: "ImgFrameStart",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DescribeText/* default */.Z, {
                                mainText: "민심 확인",
                                subText1: "채널을 검색해보세요.",
                                subText2: "다양한 정보가 당신을 기다리고 있습니다."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ImgFrameContainer, {
                                id: "ImgFrameContainer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: chart,
                                    alt: "배경 차트"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        id: "TrendImgStart",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DescribeText/* default */.Z, {
                                mainText: "트렌드 서칭",
                                subText1: "채널을 검색해보세요.",
                                subText2: "다양한 정보가 당신을 기다리고 있습니다."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ImgFrameContainer, {
                                id: "TrendImg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: chart,
                                    alt: "배경 차트"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//     }
//   }
// }
const getServerSideProps = async ()=>{
    return {
        props: {}
    };
};


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 8472:
/***/ ((module) => {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,426,462], () => (__webpack_exec__(4577)));
module.exports = __webpack_exports__;

})();