"use strict";
(() => {
var exports = {};
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 1323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/searchStyles/SearchStyle.tsx
var SearchStyle = __webpack_require__(3743);
// EXTERNAL MODULE: ./src/components/NavBar.tsx + 3 modules
var NavBar = __webpack_require__(2426);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ChannelInfo.tsx
var ChannelInfo = __webpack_require__(7183);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./states/atom.ts
var atom = __webpack_require__(2771);
;// CONCATENATED MODULE: ./src/components/SearchChannelItem.tsx







const SearchChannelItem = (data)=>{
    const router = (0,router_.useRouter)();
    const [chData, setChData] = (0,external_recoil_.useRecoilState)(atom/* aChData */.r);
    const onClick = ()=>{
        setChData({
            id: data.id,
            banner: data.banner,
            name: data.name,
            description: data.description,
            subscriber: data.subscriber,
            video: data.video,
            thumbnail: data.thumbnail,
            time: data.time,
            view: data.view
        });
        router.push({
            pathname: `/channel/${data.id}`
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchStyle/* SearchListContainerInnerWrapper */.E$, {
            onClick: onClick,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchStyle/* SearchInfoImgTextWrapper */.Bk, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchStyle/* SearchImgDiv */.UO, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: data.thumbnail,
                            alt: "채널 대표 이미지",
                            layout: "fill",
                            objectFit: "cover",
                            style: {
                                borderRadius: "50%"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ChannelInfo/* default */.Z, {
                        title: data.name,
                        subscriber: data.subscriber,
                        video: data.video,
                        description: data.description
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_SearchChannelItem = (SearchChannelItem);

;// CONCATENATED MODULE: ./src/components/SearchList.tsx



function SearchList({ datas  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(SearchStyle/* SearchListUl */.L7, {
        children: datas.map((data, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(components_SearchChannelItem, {
                ...data
            }, index);
        })
    });
}
/* harmony default export */ const components_SearchList = (SearchList);

// EXTERNAL MODULE: ./styles/channelDetail/VideoListContainerStyle.tsx
var VideoListContainerStyle = __webpack_require__(2151);
// EXTERNAL MODULE: ./src/pages/api/fetch.tsx
var api_fetch = __webpack_require__(2980);
;// CONCATENATED MODULE: ./src/pages/api/apisearchList.ts

async function apisearchList(searchName) {
    const response = await fetch(`${api_fetch/* BASE_URL */._}api/v1/youtube/search?title=${searchName}`, {
        method: "GET"
    });
    const data = await response.json().catch(()=>{});
    return data;
};

;// CONCATENATED MODULE: ./src/pages/search/[id].tsx








const SearchPage = ({ searchList  })=>{
    const router = (0,router_.useRouter)();
    // const searchName = router.query.id?.toString();
    // const {
    //   data: searchList,
    //   error,
    //   status,
    // } = useQuery<ISearchItem[]>(
    //   ["searchList", searchName ],
    //   () => {
    //     return apisearchList(searchName);
    //   },
    // );
    // if (status === "loading") {
    //   return <span>Loading...</span>;
    // }
    // if (status === "error") {
    //   return <span>Error </span>;
    // }
    // useEffect(() => {
    //   apisearchList(searchName).then((data) => {
    //     setSearchList(data);
    //   });
    // }, [searchName]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "검색"
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
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchStyle/* SearchMarginDiv */.ms, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(VideoListContainerStyle/* VideoListContainer */.sH, {
                        children: searchList ? /*#__PURE__*/ jsx_runtime_.jsx(components_SearchList, {
                            datas: searchList
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _id_ = (SearchPage);
const getStaticPaths = async (context)=>{
    return {
        paths: [
            {
                params: {
                    id: "아이유"
                }
            }
        ],
        fallback: true
    };
};
const getStaticProps = async (context)=>{
    const ide = context.params?.id;
    const data = await apisearchList(ide);
    return {
        props: {
            searchList: data
        }
    };
} // export const getServerSideProps: GetServerSideProps = async (context) => {
 //   const data = await apisearchList(context.params.id);
 //   return {
 //     props: {
 //       searchList: data,
 //     },
 //   };
 // };
;


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

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,426,492,395], () => (__webpack_exec__(1323)));
module.exports = __webpack_exports__;

})();