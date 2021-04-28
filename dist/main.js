/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    data: {
      'logo': 'img/avada-bakery-logo.png',
      'linksHeader': ['HOME', 'SHOP', 'ABOUT', 'GALLERY', 'LOCATIONS', 'JOURNAL', 'CONTACT', 'MY ACCOUNT', '<i class="fas fa-shopping-cart"></i>'],
      'activeLinkHeader': 0,
      'scrollOn': false,
      'carouselOne': [{
        img: 'img/choco-chip-cookies-400x510.jpg',
        name: 'Choco Chip Cookies',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '18.00',
        value2: '36.00',
        visibility: true
      }, {
        img: 'img/strawberry-jam-cookies-400x510.jpg',
        name: 'Strawberry Jam Cookies',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '36.00',
        value2: '60.00',
        visibility: true
      }, {
        img: 'img/cookies-with-ice-cream-400x510.jpg',
        name: 'Cookies with ice cream',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '18.00',
        value2: '34.00',
        visibility: false
      }, {
        img: 'img/home-bread-400x510.jpg',
        name: 'Homemade Bread',
        category1: 'Bread',
        category2: 'Pastries',
        currency: '$',
        value1: '26.00',
        value2: '68.00',
        visibility: false
      }],
      'locations': [{
        img: 'img/new-york-bk-800x530.jpg',
        city: 'New York',
        phone: '1.800.458.556',
        openingTime: '9:00 AM - 6:00 PM'
      }, {
        img: 'img/london-bk-800x530.jpg',
        city: 'London',
        phone: '1.800.458.556',
        openingTime: '9:00 AM - 6:00 PM'
      }],
      'carouselTwo': [{
        img: 'img/choco-chip-cookies-200x255.jpg',
        name: 'Choco Chip Cookies',
        value: '$18.00 - $32.00',
        visibility: true
      }, {
        img: 'img/strawberry-jam-cookies-200x255.jpg',
        name: 'Strawberry Jam Cookies',
        value: '$36.00 - $60.00',
        visibility: true
      }, {
        img: 'img/strawberry-donut-200x255.jpg',
        name: 'Strawberry Donut',
        value: '$24.00 - $48.00',
        visibility: true
      }, {
        img: 'img/perfect-macarons-200x255.jpg',
        name: 'Perfect Macarons',
        value: '$32.00 - $56.00',
        visibility: true
      }, {
        img: 'img/premium-bread-200x255.jpg',
        name: 'Premium Bread',
        value: '$32.00 - $68.00',
        visibility: false
      }, {
        img: 'img/cherry-cake-200x255.jpg',
        name: 'Cake with Cherry Topping',
        value: '$99.00',
        visibility: false
      }, {
        img: 'img/cookies-with-ice-cream-200x255.jpg',
        name: 'Cookies with ice cream',
        value: '$18.00 - $34.00',
        visibility: false
      }, {
        img: 'img/blackberry-stuffed-bread-200x255.jpg',
        name: 'Blackberry Stuffed Bread',
        value: '$22.00 - $46.00',
        visibility: false
      }, {
        img: 'img/glazed-pancake-with-lemon-200x255.jpg',
        name: 'Glazed Bread with Fruits',
        value: '$24.00',
        visibility: false
      }, {
        img: 'img/small-cupcake-200x255.jpg',
        name: 'Chocolate Cupcake',
        value: '$26.00 - $68.00',
        visibility: false
      }, {
        img: 'img/home-bread-200x255.jpg',
        name: 'Homemade Bread',
        value: '$26.00 - $68.00',
        visibility: false
      }, {
        img: 'img/premium-bread-200x255.jpg',
        name: 'Premium Bread',
        value: '$32.00 - $68.00',
        visibility: false
      }],
      'linksFooter': ['Shop', 'About', 'Gallery', 'Locations', 'Journal', 'Contact', 'Orders', '<i class="fas fa-shopping-cart"></i>'],
      'inputEmail': '',
      'socialIcons': ['fa-instagram', 'fa-twitter', 'fa-facebook-f', 'fa-pinterest-p']
    },
    mounted: function mounted() {
      document.addEventListener('scroll', this.scrollUp);
    },
    methods: {
      scrollUp: function scrollUp() {
        this.scrollOn = true;

        if (window.scrollY == 0) {
          this.scrollOn = false;
        }
      },
      clickLink: function clickLink(index) {
        this.activeLinkHeader = index;
      },
      sliderOne: function sliderOne() {
        if (this.carouselOne[0].visibility == true && this.carouselOne[1].visibility == true) {
          this.carouselOne[0].visibility = false;
          this.carouselOne[1].visibility = false;
          this.carouselOne[2].visibility = true;
          this.carouselOne[3].visibility = true;
        } else if (this.carouselOne[2].visibility == true && this.carouselOne[3].visibility == true) {
          this.carouselOne[2].visibility = false;
          this.carouselOne[3].visibility = false;
          this.carouselOne[0].visibility = true;
          this.carouselOne[1].visibility = true;
        }
      },
      sliderTwo: function sliderTwo() {
        if (this.carouselTwo[0].visibility == true && this.carouselTwo[1].visibility == true && this.carouselTwo[2].visibility == true && this.carouselTwo[3].visibility == true) {
          this.carouselTwo[0].visibility = false;
          this.carouselTwo[1].visibility = false;
          this.carouselTwo[2].visibility = false;
          this.carouselTwo[3].visibility = false;
          this.carouselTwo[4].visibility = true;
          this.carouselTwo[5].visibility = true;
          this.carouselTwo[6].visibility = true;
          this.carouselTwo[7].visibility = true;
        } else if (this.carouselTwo[4].visibility == true && this.carouselTwo[5].visibility == true && this.carouselTwo[6].visibility == true && this.carouselTwo[7].visibility == true) {
          this.carouselTwo[4].visibility = false;
          this.carouselTwo[5].visibility = false;
          this.carouselTwo[6].visibility = false;
          this.carouselTwo[7].visibility = false;
          this.carouselTwo[8].visibility = true;
          this.carouselTwo[9].visibility = true;
          this.carouselTwo[10].visibility = true;
          this.carouselTwo[11].visibility = true;
        } else if (this.carouselTwo[8].visibility == true && this.carouselTwo[9].visibility == true && this.carouselTwo[10].visibility == true && this.carouselTwo[11].visibility == true) {
          this.carouselTwo[8].visibility = false;
          this.carouselTwo[9].visibility = false;
          this.carouselTwo[10].visibility = false;
          this.carouselTwo[11].visibility = false;
          this.carouselTwo[0].visibility = true;
          this.carouselTwo[1].visibility = true;
          this.carouselTwo[2].visibility = true;
          this.carouselTwo[3].visibility = true;
        }
      }
    },
    computed: {}
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;