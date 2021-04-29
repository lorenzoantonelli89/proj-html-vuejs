/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initVue() {
  var _data;

  new Vue({
    el: '#app',
    data: (_data = {
      'logo': 'img/avada-bakery-logo.png',
      'linksHeader': ['HOME', 'SHOP', 'ABOUT', 'GALLERY', 'LOCATIONS', 'JOURNAL', 'CONTACT', 'MY ACCOUNT', '<i class="fas fa-shopping-cart"></i>'],
      'activeLinkHeader': 0,
      'scrollOn': false,
      'indexCarousel1': 0,
      'carousel1NumSlide': 2,
      'carouselOne': [{
        img: 'img/choco-chip-cookies-400x510.jpg',
        name: 'Choco Chip Cookies',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '18.00',
        value2: '36.00'
      }, {
        img: 'img/strawberry-jam-cookies-400x510.jpg',
        name: 'Strawberry Jam Cookies',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '36.00',
        value2: '60.00'
      }, {
        img: 'img/cookies-with-ice-cream-400x510.jpg',
        name: 'Cookies with ice cream',
        category1: 'Cookies',
        category2: 'Pastries',
        currency: '$',
        value1: '18.00',
        value2: '34.00'
      }, {
        img: 'img/home-bread-400x510.jpg',
        name: 'Homemade Bread',
        category1: 'Bread',
        category2: 'Pastries',
        currency: '$',
        value1: '26.00',
        value2: '68.00'
      }],
      'locations': [{
        img: 'img/new-york-bk-800x530.jpg',
        city: 'New York',
        phone: '1.800.458.556',
        openingTime: '9:00 AM - 6:00 PM',
        imgMap: 'img/new-york.png'
      }, {
        img: 'img/london-bk-800x530.jpg',
        city: 'London',
        phone: '1.800.458.556',
        openingTime: '9:00 AM - 6:00 PM',
        imgMap: 'img/london.png'
      }],
      'indexCarousel2': 0,
      'carousel2NumSlide': 4,
      'carouselTwo': [{
        img: 'img/choco-chip-cookies-200x255.jpg',
        name: 'Choco Chip Cookies',
        value: '$18.00 - $32.00'
      }, {
        img: 'img/strawberry-jam-cookies-200x255.jpg',
        name: 'Strawberry Jam Cookies',
        value: '$36.00 - $60.00'
      }, {
        img: 'img/strawberry-donut-200x255.jpg',
        name: 'Strawberry Donut',
        value: '$24.00 - $48.00'
      }, {
        img: 'img/perfect-macarons-200x255.jpg',
        name: 'Perfect Macarons',
        value: '$32.00 - $56.00'
      }, {
        img: 'img/premium-bread-200x255.jpg',
        name: 'Premium Bread',
        value: '$32.00 - $68.00'
      }, {
        img: 'img/cherry-cake-200x255.jpg',
        name: 'Cake with Cherry Topping',
        value: '$99.00'
      }, {
        img: 'img/cookies-with-ice-cream-200x255.jpg',
        name: 'Cookies with ice cream',
        value: '$18.00 - $34.00'
      }, {
        img: 'img/blackberry-stuffed-bread-200x255.jpg',
        name: 'Blackberry Stuffed Bread',
        value: '$22.00 - $46.00'
      }, {
        img: 'img/glazed-pancake-with-lemon-200x255.jpg',
        name: 'Glazed Bread with Fruits',
        value: '$24.00'
      }, {
        img: 'img/small-cupcake-200x255.jpg',
        name: 'Chocolate Cupcake',
        value: '$26.00 - $68.00'
      }, {
        img: 'img/home-bread-200x255.jpg',
        name: 'Homemade Bread',
        value: '$26.00 - $68.00'
      }, {
        img: 'img/premium-bread-200x255.jpg',
        name: 'Premium Bread',
        value: '$32.00 - $68.00'
      }],
      'linksFooter': ['Shop', 'About', 'Gallery', 'Locations', 'Journal', 'Contact', 'Orders', '<i class="fas fa-shopping-cart"></i>'],
      'inputEmail': '',
      'socialIcons': ['fa-instagram', 'fa-twitter', 'fa-facebook-f', 'fa-pinterest-p'],
      'emails': []
    }, _defineProperty(_data, "inputEmail", ''), _defineProperty(_data, 'activeMap', false), _defineProperty(_data, 'activeLocation', ''), _defineProperty(_data, 'scrollToDown', false), _data),
    mounted: function mounted() {
      document.addEventListener('scroll', this.scrollUp);
      document.addEventListener('scroll', this.scrollDown);
    },
    methods: {
      // funziona per gestire il cambio background header con lo scroll
      scrollUp: function scrollUp() {
        this.scrollOn = true;

        if (window.scrollY == 0) {
          this.scrollOn = false;
        }
      },
      // funzione per far apparire e scomparire il bottone che cliccando porta la pagina a inizio
      scrollDown: function scrollDown() {
        this.scrollToDown = true;

        if (window.scrollY < 300) {
          this.scrollToDown = false;
        }
      },
      // funzione che al click riporta la pagina a top 0
      scrollToUp: function scrollToUp() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      // funzione per avere il link header attivo e con underline 
      clickLink: function clickLink(index) {
        this.activeLinkHeader = index;
      },
      // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
      prevSlide1: function prevSlide1(arr) {
        this.indexCarousel1--;

        if (this.indexCarousel1 < 0) {
          this.indexCarousel1 = arr.length - 1;
        }
      },
      // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
      nextSlide1: function nextSlide1(arr) {
        this.indexCarousel1++;

        if (this.indexCarousel1 >= arr.length) {
          this.indexCarousel1 = 0;
        }
      },
      // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
      prevSlide2: function prevSlide2(arr) {
        this.indexCarousel2--;

        if (this.indexCarousel2 < 0) {
          this.indexCarousel2 = arr.length - 1;
        }
      },
      // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
      nextSlide2: function nextSlide2(arr) {
        this.indexCarousel2++;

        if (this.indexCarousel2 >= arr.length) {
          this.indexCarousel2 = 0;
        }
      },
      // funzione per rendere la mappa della location visibile al click
      viewMap: function viewMap(elem) {
        this.activeLocation = elem;
        this.activeMap = true;
        console.log(this.activeLocation);
      },
      // funzione che chiude la mappa al click
      closeMap: function closeMap() {
        this.activeMap = false;
      },
      // funzione per pushare dentro array email inserita
      getEmail: function getEmail() {
        this.emails.push(this.inputEmail);
        this.inputEmail = '';
      }
    },
    computed: {
      // funzione per ordinare carosello 1
      orderCarousel1: function orderCarousel1() {
        var newArray = [];
        var arrTemporary = [];

        for (var i = 0; i < this.carouselOne.length; i++) {
          elem = this.carouselOne[i];
          arrTemporary.push(elem);

          if (arrTemporary.length == this.carousel1NumSlide) {
            newArray.push(arrTemporary);
            arrTemporary = [];
          }
        }

        return newArray;
      },
      // funzione per ordinare carosello 2
      orderCarousel2: function orderCarousel2() {
        var newArray = [];
        var arrTemporary = [];

        for (var i = 0; i < this.carouselTwo.length; i++) {
          elem = this.carouselTwo[i];
          arrTemporary.push(elem);

          if (arrTemporary.length == this.carousel2NumSlide) {
            newArray.push(arrTemporary);
            arrTemporary = [];
          }
        }

        return newArray;
      }
    }
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Missing argument $color.\n   ┌──> src/partials/_main-homepage.scss\n149│                                 @include text-font(12px, $font2, $color3);\n   │                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n   ╵\n   ┌──> src/partials/_variable.scss\n37 │ @mixin text-font($size, $family, $letspacing, $color) {\n   │        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ declaration\n   ╵\n  src/partials/_main-homepage.scss 149:33  text-font()\n  src/partials/_main-homepage.scss 149:33  @import\n  src/master.scss 3:9                      root stylesheet\n    at processResult (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:676:19)\n    at /Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:778:5\n    at /Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at /Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/sass-loader/dist/index.js:54:7\n    at Function.call$2 (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/sass/sass.dart.js:92571:16)\n    at _render_closure1.call$2 (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/sass/sass.dart.js:81074:12)\n    at _RootZone.runBinary$3$3 (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/sass/sass.dart.js:27256:18)\n    at _FutureListener.handleError$1 (/Users/lorenzoantonelli/Desktop/Esercizi Boolean/proj-html-vuejs/node_modules/sass/sass.dart.js:25812:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/master.scss"]();
/******/ 	
/******/ })()
;