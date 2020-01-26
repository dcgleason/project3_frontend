webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_SearchKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/SearchKey */ "./components/Header/SearchKey.js");
/* harmony import */ var _Header_SearchLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/SearchLocation */ "./components/Header/SearchLocation.js");
/* harmony import */ var _Header_SearchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header/SearchButton */ "./components/Header/SearchButton.js");
/* harmony import */ var _Header_AddRestraunt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/AddRestraunt */ "./components/Header/AddRestraunt.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/Kassidy/Desktop/sei/projects/project3_frontend/restaurant-review/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Header() {
  const {
    0: keywords,
    1: setKeywords
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    keywords: ''
  });
  const {
    0: location,
    1: setLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    location: ''
  });

  function newKeywords(keywords) {
    setKeywords({
      keywords: keywords
    });
  }

  function newLocation(location) {
    setLocation({
      location: location
    });
  }

  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "https://s3-media0.fl.yelpcdn.com/assets/public/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png",
    alt: "yelp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(_Header_SearchButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    keywords: keywords.keywords,
    location: location.location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_Header_SearchLocation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    newLocation: newLocation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_Header_SearchKey__WEBPACK_IMPORTED_MODULE_1__["default"], {
    newKeywords: newKeywords,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_Header_AddRestraunt__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.cefd20a03db89f57ed6c.hot-update.js.map