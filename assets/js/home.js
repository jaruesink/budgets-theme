(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/home"],{

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate, getParameterByName, makeImagesZoomable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImagesZoomable", function() { return makeImagesZoomable; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('open', function (event) {
    if (isMobile() && $(event.target).parent().hasClass('kg-gallery-image')) {
      setTimeout(function () {
        var $mediumZoomImage = $('.medium-zoom-image--opened');
        var transform = $mediumZoomImage[0].style.transform;
        var scale = transform.substr(0, transform.indexOf(' '));
        var scaleValue = parseFloat(scale.substr(scale.indexOf('(') + 1).split(')')[0]);
        var translate = transform.substr(transform.indexOf(' ') + 1);
        var translateY = parseFloat(translate.split(',')[1]);
        var newTranslateY = translateY < 0 ? scaleValue * translateY + translateY : scaleValue * translateY - translateY;
        var newTransform = "scale(1) translate3d(0, ".concat(newTranslateY, "px, 0)");
        $mediumZoomImage.addClass('medium-zoom-image-mobile');
        $mediumZoomImage[0].style.transform = newTransform;
      }, 10);
    }
  });
  zoom.on('close', function () {
    if (isMobile() && $(event.target).parent().hasClass('kg-gallery-image')) {
      var $mediumZoomImage = $('.medium-zoom-image');
      $mediumZoomImage.removeClass('medium-zoom-image-mobile');
    }
  });
};

/***/ }),

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");




jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var $featuredArticles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-featured-articles');

  if ($featuredArticles.length > 0) {
    $featuredArticles.on('init', function () {
      Object(shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-featured-article-title', 200);
    });
    $featuredArticles.slick({
      arrows: true,
      infinite: true,
      prevArrow: '<button class="m-icon-button in-featured-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',
      nextArrow: '<button class="m-icon-button in-featured-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',
      mobileFirst: true,
      rtl: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isRTL"])()
    });
    setTimeout(function () {
      $featuredArticles.slick('setPosition');
    }, 350);
  }

  var heroTitle = document.querySelector('.home-template .m-hero-title');
  if (heroTitle) heroTitle.setAttribute('aria-label', 'Budgets');
  setInnerHTMLContent(heroTitle, "<svg width=\"169px\" height=\"137px\" viewBox=\"0 0 169 137\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n        <polygon id=\"path-1\" points=\"0.22532646 0.760030722 63.0541585 0.760030722 63.0541585 56.0091745 0.22532646 56.0091745\"></polygon>\n        <polygon id=\"path-3\" points=\"0.000320119321 0.185329798 168.912774 0.185329798 168.912774 130.999884 0.000320119321 130.999884\"></polygon>\n    </defs>\n    <g id=\"Budgets\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"BudgetsLogoKO\" transform=\"translate(-23.000000, -47.000000)\">\n            <g id=\"Group-7\" transform=\"translate(23.000000, 47.000000)\">\n                <g id=\"Group-3\" transform=\"translate(50.000000, 0.000000)\">\n                    <mask id=\"mask-2\" fill=\"white\">\n                        <use xlink:href=\"#path-1\"></use>\n                    </mask>\n                    <g id=\"Clip-2\"></g>\n                    <path d=\"M0.800126227,27.2054439 L17.3464095,54.7732166 C18.3893268,56.5114962 20.9364516,56.3900522 21.8353296,54.573831 C25.1081206,47.9614808 33.4295792,36.5765653 51.9559467,36.4949985 C53.8120477,36.4877481 55.4402384,35.2479324 55.9069986,33.4607127 L62.9211641,6.570851 C63.5301403,4.23622734 61.9839972,1.90341628 59.5863815,1.53002151 C49.1553857,-0.0904393241 22.2947966,-1.39913364 1.27053296,22.3948141 C0.0853997195,23.73251 -0.120631136,25.6738003 0.800126227,27.2054439\" id=\"Fill-1\" fill=\"#FFFFFF\" mask=\"url(#mask-2)\"></path>\n                </g>\n                <g id=\"Group-6\" transform=\"translate(0.000000, 6.000000)\">\n                    <mask id=\"mask-4\" fill=\"white\">\n                        <use xlink:href=\"#path-3\"></use>\n                    </mask>\n                    <g id=\"Clip-5\"></g>\n                    <path d=\"M123.958592,2.06325 C124.329302,0.5895 125.9557,-0.231069444 127.336775,0.400277778 C150.100894,10.8093194 163.944356,28.0612917 168.040334,52.8075556 C173.270248,84.4003889 154.50398,116.064181 124.938066,126.675181 C93.2205817,138.057625 59.7385925,126.435014 42.8840226,98.1226389 C29.5203022,75.6816111 16.2310871,53.1969167 2.90916237,30.7304167 C-1.39579462,23.4708333 -1.39579462,23.4708333 6.1365172,19.2151528 C17.0670011,13.0435972 29.9909581,14.7757083 38.6463022,23.858375 C41.0450118,26.3746667 43.0421194,29.3621944 44.8229796,32.3715556 C54.1270656,48.0824583 63.3203022,63.8606806 72.5153559,79.6370833 C79.2535495,91.192375 92.422829,97.5022083 105.953732,95.5845139 C119.221141,93.7050278 129.724582,83.8545556 132.913775,70.3015139 C135.950324,57.4034722 130.847614,43.6430139 119.753582,36.2651667 C116.644345,34.1982778 116.031947,32.4607083 117.015055,28.9819306 C119.502808,20.1830972 121.63984,11.2841944 123.958592,2.06325\" id=\"Fill-4\" fill=\"#FFFFFF\" mask=\"url(#mask-4)\"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>", '<br><span class="subtitle">be empowered over money</span>');
  var heroContent = document.querySelector('.home-template .m-hero__content');
  setInnerHTMLContent(heroContent, '', "<div class=\"m-hero__content__links\">\n<a href=\"https://ios.budgets.money/\" target=\"_blank\" aria-label=\"download budgets from the apple app store\"><img src=\"https://my.budgets.money/assets/images/AppStore.svg\" aria-hidden=\"true\" /></a>\n<a href=\"https://android.budgets.money/\" target=\"_blank\" aria-label=\"download budgets from the google play store\"><img src=\"https://my.budgets.money/assets/images/PlayStore.svg\" aria-hidden=\"true\" /></a>\n</div>");

  function setInnerHTMLContent(location, preContent, postContent) {
    if (location) location.innerHTML = preContent + location.innerHTML + postContent;
  }
});

/***/ }),

/***/ 2:
/*!**************************!*\
  !*** multi ./js/home.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaruesink/Documents/projects/budgets-theme/src/js/home.js */"./js/home.js");


/***/ })

},[[2,"/js/manifest","/js/vendor"]]]);