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
            'carouselOne': [
                {
                    img: 'img/choco-chip-cookies-400x510.jpg',
                    name: 'Choco Chip Cookies',
                    category1: 'Cookies',
                    category2: 'Pastries',
                    currency: '$',
                    value1: '18.00',
                    value2: '36.00',
                    visibility: true,
                },
                {
                    img: 'img/strawberry-jam-cookies-400x510.jpg',
                    name: 'Strawberry Jam Cookies',
                    category1: 'Cookies',
                    category2: 'Pastries',
                    currency: '$',
                    value1: '36.00',
                    value2: '60.00',
                    visibility: true,
                },
                {
                    img: 'img/cookies-with-ice-cream-400x510.jpg',
                    name: 'Cookies with ice cream',
                    category1: 'Cookies',
                    category2: 'Pastries',
                    currency: '$',
                    value1: '18.00',
                    value2: '34.00',
                    visibility: false,
                },
                {
                    img: 'img/home-bread-400x510.jpg',
                    name: 'Homemade Bread',
                    category1: 'Bread',
                    category2: 'Pastries',
                    currency: '$',
                    value1: '26.00',
                    value2: '68.00',
                    visibility: false,
                },
            ],
            'locations': [
                {
                    img: 'img/new-york-bk-800x530.jpg',
                    city: 'New York',
                    phone: '1.800.458.556',
                    openingTime: '9:00 AM - 6:00 PM',
                },
                {
                    img: 'img/london-bk-800x530.jpg',
                    city: 'London',
                    phone: '1.800.458.556',
                    openingTime: '9:00 AM - 6:00 PM',
                }
            ],
            'carouselTwo': [
                {
                    img: 'img/choco-chip-cookies-200x255.jpg',
                    name: 'Choco Chip Cookies',
                    value: '$18.00 - $32.00',
                    visibility: true,
                },
                {
                    img: 'img/strawberry-jam-cookies-200x255.jpg',
                    name: 'Strawberry Jam Cookies',
                    value: '$36.00 - $60.00',
                    visibility: true,
                },
                {
                    img: 'img/strawberry-donut-200x255.jpg',
                    name: 'Strawberry Donut',
                    value: '$24.00 - $48.00',
                    visibility: true,
                },
                {
                    img: 'img/perfect-macarons-200x255.jpg',
                    name: 'Perfect Macarons',
                    value: '$32.00 - $56.00',
                    visibility: true,
                },
                {
                    img: 'img/premium-bread-200x255.jpg',
                    name: 'Premium Bread',
                    value: '$32.00 - $68.00',
                    visibility: false,
                },
                {
                    img: 'img/cherry-cake-200x255.jpg',
                    name: 'Cake with Cherry Topping',
                    value: '$99.00',
                    visibility: false,
                },
                {
                    img: 'img/cookies-with-ice-cream-200x255.jpg',
                    name: 'Cookies with ice cream',
                    value: '$18.00 - $34.00',
                    visibility: false,
                },
                {
                    img: 'img/blackberry-stuffed-bread-200x255.jpg',
                    name: 'Blackberry Stuffed Bread',
                    value: '$22.00 - $46.00',
                    visibility: false,
                },
                {
                    img: 'img/glazed-pancake-with-lemon-200x255.jpg',
                    name: 'Glazed Bread with Fruits',
                    value: '$24.00',
                    visibility: false,
                },
                {
                    img: 'img/small-cupcake-200x255.jpg',
                    name: 'Chocolate Cupcake',
                    value: '$26.00 - $68.00',
                    visibility: false,
                },
                {
                    img: 'img/home-bread-200x255.jpg',
                    name: 'Homemade Bread',
                    value: '$26.00 - $68.00',
                    visibility: false,
                },
                {
                    img: 'img/premium-bread-200x255.jpg',
                    name: 'Premium Bread',
                    value: '$32.00 - $68.00',
                    visibility: false,
                },
            ],
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

        },
        mounted() {
            document.addEventListener('scroll', this.scrollUp)
        },
        methods: {
            scrollUp: function () {
                this.scrollOn = true;
                if(window.scrollY == 0){
                    this.scrollOn = false;
                }
            },
            clickLink: function (index) {
                this.activeLinkHeader = index;
            },
            sliderOne: function () {
                if (this.carouselOne[0].visibility == true && this.carouselOne[1].visibility == true){
                    this.carouselOne[0].visibility = false; 
                    this.carouselOne[1].visibility = false;
                    this.carouselOne[2].visibility = true;
                    this.carouselOne[3].visibility = true;
                    
                }else if (this.carouselOne[2].visibility == true && this.carouselOne[3].visibility == true){
                    this.carouselOne[2].visibility = false;
                    this.carouselOne[3].visibility = false;
                    this.carouselOne[0].visibility = true;
                    this.carouselOne[1].visibility = true;
                    
                }
            },
            sliderTwo: function () {
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
        computed: {
            
        },
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);
