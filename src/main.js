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
