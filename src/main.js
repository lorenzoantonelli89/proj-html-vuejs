function initVue() {
    
    new Vue({
        el: '#app',
        data: {
            'logo': 'img/avada-bakery-logo.png',
            'linksHeader': [
                'HOME',
                'SHOP',
                'ABOUT',
                'GALLERY',
                'LOCATIONS',
                'JOURNAL',
                'CONTACT',
                'MY ACCOUNT',
                '<i class="fas fa-shopping-cart"></i>',
            ],
            'activeLinkHeader': 0,
            'scrollOn': false,
            'carouselOne': {
                index: 0,
                itemPerSlide: 2,
                slides: [

                    {
                        img: 'img/choco-chip-cookies-400x510.jpg',
                        name: 'Choco Chip Cookies',
                        category1: 'Cookies',
                        category2: 'Pastries',
                        currency: '$',
                        value1: '18.00',
                        value2: '36.00',
                    },
                    {
                        img: 'img/strawberry-jam-cookies-400x510.jpg',
                        name: 'Strawberry Jam Cookies',
                        category1: 'Cookies',
                        category2: 'Pastries',
                        currency: '$',
                        value1: '36.00',
                        value2: '60.00',
                    },
                    {
                        img: 'img/cookies-with-ice-cream-400x510.jpg',
                        name: 'Cookies with ice cream',
                        category1: 'Cookies',
                        category2: 'Pastries',
                        currency: '$',
                        value1: '18.00',
                        value2: '34.00',
                    },
                    {
                        img: 'img/home-bread-400x510.jpg',
                        name: 'Homemade Bread',
                        category1: 'Bread',
                        category2: 'Pastries',
                        currency: '$',
                        value1: '26.00',
                        value2: '68.00',
                    },
                ],
            },
            'locations': [
                {
                    img: 'img/new-york-bk-800x530.jpg',
                    city: 'New York',
                    phone: '1.800.458.556',
                    openingTime: '9:00 AM - 6:00 PM',
                    imgMap: 'img/new-york.png',
                },
                {
                    img: 'img/london-bk-800x530.jpg',
                    city: 'London',
                    phone: '1.800.458.556',
                    openingTime: '9:00 AM - 6:00 PM',
                    imgMap: 'img/london.png',
                }
            ],
            'carouselTwo': {
                index: 0,
                itemPerSlide: 4,
                slides: [
                    {
                        img: 'img/choco-chip-cookies-200x255.jpg',
                        name: 'Choco Chip Cookies',
                        value: '$18.00 - $32.00',
                    },
                    {
                        img: 'img/strawberry-jam-cookies-200x255.jpg',
                        name: 'Strawberry Jam Cookies',
                        value: '$36.00 - $60.00',
                    },
                    {
                        img: 'img/strawberry-donut-200x255.jpg',
                        name: 'Strawberry Donut',
                        value: '$24.00 - $48.00',
                    },
                    {
                        img: 'img/perfect-macarons-200x255.jpg',
                        name: 'Perfect Macarons',
                        value: '$32.00 - $56.00',
                    },
                    {
                        img: 'img/premium-bread-200x255.jpg',
                        name: 'Premium Bread',
                        value: '$32.00 - $68.00',
                    },
                    {
                        img: 'img/cherry-cake-200x255.jpg',
                        name: 'Cake with Cherry Topping',
                        value: '$99.00',
                    },
                    {
                        img: 'img/cookies-with-ice-cream-200x255.jpg',
                        name: 'Cookies with ice cream',
                        value: '$18.00 - $34.00',
                    },
                    {
                        img: 'img/blackberry-stuffed-bread-200x255.jpg',
                        name: 'Blackberry Stuffed Bread',
                        value: '$22.00 - $46.00',
                    },
                    {
                        img: 'img/glazed-pancake-with-lemon-200x255.jpg',
                        name: 'Glazed Bread with Fruits',
                        value: '$24.00',
                    },
                    {
                        img: 'img/small-cupcake-200x255.jpg',
                        name: 'Chocolate Cupcake',
                        value: '$26.00 - $68.00',
                    },
                    {
                        img: 'img/home-bread-200x255.jpg',
                        name: 'Homemade Bread',
                        value: '$26.00 - $68.00',
                    },
                    {
                        img: 'img/premium-bread-200x255.jpg',
                        name: 'Premium Bread',
                        value: '$32.00 - $68.00',
                    },
                ],
            },
            'linksFooter': [
                'Shop',
                'About',
                'Gallery',
                'Locations',
                'Journal',
                'Contact',
                'Orders',
                '<i class="fas fa-shopping-cart"></i>',
            ],
            'inputEmail': '',
            'socialIcons': [
                'fa-instagram',
                'fa-twitter',
                'fa-facebook-f',
                'fa-pinterest-p',
            ],
            'emails': [],
            'inputEmail': '',
            'activeMap': false,
            'activeLocation': '',
            'scrollToDown': false,

        },
        mounted() {
            document.addEventListener('scroll', this.scrollUp);
            document.addEventListener('scroll', this.scrollDown);
        },
        methods: {
            // funziona per gestire il cambio background header con lo scroll
            scrollUp: function () {
                this.scrollOn = true;
                if(window.scrollY == 0){
                    this.scrollOn = false;
                }
            },
            // funzione per far apparire e scomparire il bottone che cliccando porta la pagina a inizio
            scrollDown: function () {
                this.scrollToDown = true;
                if(window.scrollY < 300){
                    this.scrollToDown = false;
                }
            },
            // funzione che al click riporta la pagina a top 0
            scrollToUp: function () {
                window.scrollTo({ top: 0, behavior: 'smooth'});
            },
            // funzione per avere il link header attivo e con underline 
            clickLink: function (index) {
                this.activeLinkHeader = index;
            },
            // funzione per prendere l'ultima slide del carousel
            lastSlideNumber: function(carousel) {
                const lastSlideNumber = Math.ceil(carousel.slides.length / carousel.itemPerSlide) - 1;
                return lastSlideNumber;
            },
            // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
            prevSlide: function (carousel) {
                carousel.index--
                if (carousel.index < 0) {
                    carousel.index = this.lastSlideNumber(carousel);
                }
            },
            // funzione per cambiare slide contenente 2 o 4 immagini in base al carousel passo come parametro array di carousel
            nextSlide: function (carousel) {
                carousel.index++
                if(carousel.index > this.lastSlideNumber(carousel)){
                    carousel.index = 0;
                }
            },
            // funzione per rendere la mappa della location visibile al click
            viewMap: function (elem) {
                this.activeLocation = elem;
                this.activeMap = true;
                console.log(this.activeLocation);
            },
            // funzione che chiude la mappa al click
            closeMap: function () {
                this.activeMap = false;
            },
            // funzione per pushare dentro array email inserita
            getEmail: function () {
                this.emails.push(this.inputEmail);
                this.inputEmail = '';
            },
        },
        computed: {
            // funzione per ordinare carosello 1
            orderCarousel1: function () {
                const newArray = [];
                let arrTemporary = [];

                for (let i = 0; i < this.carouselOne.slides.length; i++) {
                    elem = this.carouselOne.slides[i];
                    arrTemporary.push(elem);
                    if (arrTemporary.length == this.carouselOne.itemPerSlide) {
                        newArray.push(arrTemporary);
                        arrTemporary = [];
                    }
                }
                return newArray;
            },
            // funzione per ordinare carosello 2
            orderCarousel2: function () {
                const newArray = [];
                let arrTemporary = [];

                for (let i = 0; i < this.carouselTwo.slides.length; i++) {
                    elem = this.carouselTwo.slides[i];
                    arrTemporary.push(elem);
                    if (arrTemporary.length == this.carouselTwo.itemPerSlide) {
                        newArray.push(arrTemporary);
                        arrTemporary = [];
                    }
                }
                return newArray;
            }
        },
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
