import './scss/style.scss';
window.addEventListener('DOMContentLoaded', (event) => {
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger--btn')
    let bgOverlay = document.getElementById('bg-overlay');
    let modileMenuDropdown = document.querySelector('.header--dropdown');
    let header = document.querySelector('.header');
    let mobileMenu = document.querySelector('.mobile-menu');
    let modileMenuDropdownTitle = document.querySelector('.header--dropdown--title');
    //init niceselect

    $('.nice-select').niceSelect();

    //add orange bg to mobile menu
    mobileMenu.addEventListener("scroll", addOrangeFixedHeader);

    //fixed  dropdown while scrolling
    window.addEventListener("scroll", doHeaderDropdownFixed);


    //add overlay for dropdown header
    addOverlay(modileMenuDropdownTitle)




    //first tab active
    if (document.getElementById("courses")) {
        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')
    }


    //burger logic
    burger.addEventListener('click', function() { 
        this.classList.toggle('open');
        body.classList.toggle('__nav-open');
        cancelScrollCheck()
        if (header.classList.contains('orange-sticky')) {
            header.classList.remove('orange-sticky')
            mobileMenu.scrollTo(0, 0)
        }
    })


    function doHeaderDropdownFixed() {
        let scroll = window.pageYOffset;
        if (scroll >= 150) {
            modileMenuDropdown.classList.add('sticky')
        } else {
            modileMenuDropdown.classList.remove('sticky')
        }
    }

    function addOrangeFixedHeader() {
        header.classList.add('orange-sticky')
    }


    //check if scroll on body needed
    function cancelScrollCheck() {
        if (bgOverlay.classList.contains('active') || body.classList.contains('__nav-open')) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }
    }


    //add overlay function
    function addOverlay(elem) {
        elem.addEventListener('click', () => {
            bgOverlay.classList.toggle('active');
            cancelScrollCheck()

        })

    }



    //tabs logic

    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {

        item.addEventListener('click', function(event) {
            document.querySelectorAll('.courses--tabs--title').forEach((item) => {
                item.classList.remove('active-title')
            })
            document.querySelectorAll('.courses--tabs--content').forEach((item) => {
                item.classList.remove('active')
            })
            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');
            this.classList.add('active-title')
        })
    })

    //tabs contains items
    var prevEl = null;
    $(".courses--tabs--title").each(function(index) {
        $(this).on('click', function() {
            if (index === 0) {
                console.log(index)
                $(".uk-tab-bottom").animate({ scrollLeft: '-1000'}, 300);
                return
            } 
            if (prevEl < index) {
                $(".uk-tab-bottom").animate({ scrollLeft: '+=130' }, 300);
            } else if (prevEl - 1 < index) {
                $(".uk-tab-bottom").animate({ scrollLeft: '+=170' }, 300);
            } else {
                $(".uk-tab-bottom").animate({ scrollLeft: '-=150' }, 300);
            }
            prevEl = index;
        })
    })

    //owlinit
    $('.owl-carousel--team').owlCarousel({
        onInitialized: addDotButtonText,
        onResized: addDotButtonText,
        stagePadding: 50,
        loop: true,
        margin: 10,
        nav: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('.owl-carousel--hero').owlCarousel({
        onInitialized: addDotButtonText,
        onResized: addDotButtonText,
        stagePadding: 50,
        autoplay:true,
        slideTransition: 'linear',

        autoplaySpeed: 10000,
        loop: true,
        margin: 50,
        nav: true,
        dots:false,
        center:true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    const myElement = document.getElementById('hero');
    for (let i = 0; i < myElement.children.length; i++) {
      console.log(myElement.children[i].children[0].children[0]);
    }
    function addDotButtonText() {
        $('.owl-dot').each(function() {
            $(this).find('.offscreen').remove();
            let idx = $(this).index() + 1;
            $(this).append('<span class="offscreen">Go to slide ' + idx + '</span>');
        });
    }
});