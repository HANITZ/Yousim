"use strict";
(() => {
var exports = {};
exports.id = 961;
exports.ids = [961,945];
exports.modules = {

/***/ 1627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apitrendList)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3694);

async function apitrendList() {
    const response = await fetch(`${_fetch__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}api/v1/Yousim/trend`, {
        method: "POST"
    });
    const data = await response.json().catch(()=>{});
    return data;
};


/***/ }),

/***/ 3694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "https://j7c203.p.ssafy.io/";


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1627));
module.exports = __webpack_exports__;

})();