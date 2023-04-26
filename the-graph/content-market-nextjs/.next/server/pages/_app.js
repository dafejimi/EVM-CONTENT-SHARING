(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,35,929];
exports.modules = {

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom/client"
const client_namespaceObject = require("react-dom/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
// EXTERNAL MODULE: ./pages/index.css
var pages = __webpack_require__(713);
// EXTERNAL MODULE: ./pages/App.css
var App = __webpack_require__(639);
// EXTERNAL MODULE: ./pages/App.js + 7 modules
var pages_App = __webpack_require__(959);
// EXTERNAL MODULE: ./pages/reportWebVitals.js
var reportWebVitals = __webpack_require__(192);
// EXTERNAL MODULE: external "react-moralis"
var external_react_moralis_ = __webpack_require__(921);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
;// CONCATENATED MODULE: ./pages/_app.js









// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; 
/*
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: ''
})
*/ const root = client_default().createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(head_namespaceObject.Head, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Authors Market"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "description",
                    content: "Authors Market"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })
            ]
        }),
        /*#__PURE__*/ jsx_runtime_.jsx(external_react_moralis_.MoralisProvider, {
            initializeOnMount: false,
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).StrictMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(pages_App["default"], {})
            })
        })
    ]
}));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,reportWebVitals["default"])();


/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reportWebVitals = (onPerfEntry)=>{
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 32, 23)).then(({ getCLS , getFID , getFCP , getLCP , getTTFB  })=>{
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);


/***/ }),

/***/ 639:
/***/ (() => {



/***/ }),

/***/ 713:
/***/ (() => {



/***/ }),

/***/ 114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 921:
/***/ ((module) => {

"use strict";
module.exports = require("react-moralis");

/***/ }),

/***/ 661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("web-vitals");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3,959], () => (__webpack_exec__(930)));
module.exports = __webpack_exports__;

})();