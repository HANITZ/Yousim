"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 9086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/search_black.97bdfd3c.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARElEQVR42kXKwQnAIBAAwYm/swMbUAQLiaSM9N9DwCC+FoaFC6snoYtD4TZMGaAbaOp+wtS8CpJlWVU8AiyCELAx/f0A7YoDX689ShoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./styles/componentStyles/NavBarStyle.tsx

const NavStyle = (styled_default()).nav`
    z-index: 9999;
    position : fixed;
    top: 0px;
    left: 0px;
    padding: 0 64px 0 64px;
    width : 100%;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #A6A6A6;
    transition: ease 0.4s;
    &--scrolled {
    padding: 64px;
  }
`;
const NavUl = (styled_default()).ul`
    display : flex;
    list-style : none;
    flex-direction : row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
`;
const NavLi = (styled_default()).li`
    display : inline-block;
    text-transform : uppercase;
`;
const NavLiHidden = (styled_default()).li`
    display : inline-block;
    text-transform : uppercase;
    visibility: hidden;
`;

// EXTERNAL MODULE: ./public/images/search_black.png
var search_black = __webpack_require__(9086);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "css-in-js-media"
var external_css_in_js_media_ = __webpack_require__(8135);
var external_css_in_js_media_default = /*#__PURE__*/__webpack_require__.n(external_css_in_js_media_);
;// CONCATENATED MODULE: ./styles/componentStyles/SearchBarStyle.tsx


(0,external_css_in_js_media_.getBreakPoints)();
const NavDiv = (styled_default()).div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;
const Label = (styled_default()).label`
  position: relative;
  
  input {
    position: relative;
    background-color: #fff;
    border-radius: 25px;
    
    width: 100%;
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

    :hover {
      border: 4px solid #FF5349;
    }

    :focus {
      border: 4px solid #FF5349;
      outline: none;
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

;// CONCATENATED MODULE: ./src/components/SearchBar.tsx






function SearchBar() {
    // gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.create({
    //   start: 'top -80',
    //   end: 99999,
    //   toggleClass: {className: 'SearchBar--scrolled', targets: '#navdiv'}
    // });
    // useEffect(() => {
    //   gsap.to('#navdiv', {
    //     scrollTrigger: {
    //       trigger: "#SeachBar",
    //       markers: true,
    //       start: "top top",
    //       end: "+=1000",
    //       scrub: true,
    //       pin: true,
    //     },
    //     y: -800, duration: 4
    //     });
    // })
    const { 0: inputText , 1: setInputText  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const routerPush = ()=>{
        router.push({
            pathname: `/search/${inputText}`
        });
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            routerPush();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(NavDiv, {
        id: "navdiv",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Label, {
            htmlFor: "search",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "search",
                    id: "search",
                    name: "search",
                    value: inputText,
                    onChange: (e)=>{
                        setInputText(e.target.value);
                    },
                    onKeyDown: onKeyDown
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    id: "seachbutton",
                    onClick: routerPush,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: search_black/* default */.Z,
                        alt: "검색",
                        width: 32,
                        height: 32
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_SearchBar = (SearchBar);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "gsap/dist/gsap"
var gsap_ = __webpack_require__(8472);
;// CONCATENATED MODULE: ./src/components/NavBar.tsx








function NavBar() {
    gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
    (0,external_react_.useEffect)(()=>{
        const showAnim = gsap_.gsap.from("#NavStyle", {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);
        ScrollTrigger_.ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self)=>{
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    });
    const router = (0,router_.useRouter)();
    const routerpush = ()=>{
        router.push("/");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavStyle, {
        id: "NavStyle",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavUl, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLiHidden, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Trend"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLi, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "유심"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLi, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: routerpush
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/trend",
                                    children: "Trend"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_SearchBar, {})
        ]
    });
}
/* harmony default export */ const components_NavBar = (NavBar);


/***/ })

};
;