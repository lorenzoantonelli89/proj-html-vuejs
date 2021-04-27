function initVue() {
    
    new Vue({
        el: '#app',
        data: {
            'logoHeader': 'img/avada-bakery-logo.png',
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
            'scrollOn': false,
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
            ]

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
