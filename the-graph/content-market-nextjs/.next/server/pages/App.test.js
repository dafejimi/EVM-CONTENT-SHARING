"use strict";
(() => {
var exports = {};
exports.id = 107;
exports.ids = [107,35];
exports.modules = {

/***/ 242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@testing-library/react"
const react_namespaceObject = require("@testing-library/react");
// EXTERNAL MODULE: ./pages/App.js + 7 modules
var App = __webpack_require__(959);
;// CONCATENATED MODULE: ./pages/App.test.js



test("renders learn react link", ()=>{
    (0,react_namespaceObject.render)(/*#__PURE__*/ jsx_runtime_.jsx(App["default"], {}));
    const linkElement = react_namespaceObject.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});


/***/ }),

/***/ 114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 921:
/***/ ((module) => {

module.exports = require("react-moralis");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [3,959], () => (__webpack_exec__(242)));
module.exports = __webpack_exports__;

})();