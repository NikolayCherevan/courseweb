import './scss/style.scss';
window.addEventListener('DOMContentLoaded', (event) => {
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger--btn')
    let bgOverlay = document.getElementById('bg-overlay');
    let modileMenuDropdown = document.querySelector('.header--dropdown--modile');
    let header = document.querySelector('.header');
    let mobileMenu = document.querySelector('.mobile-menu');
    let dropdowns = document.querySelectorAll('.dropdown');
    let trailer = document.querySelector(".trailer");
    let headerDeskMenu = document.querySelector(".header--desk-menu");
    let openDropdownAreas = document.querySelectorAll(".uk-dropdown");
    let headerPadding = document.querySelector(".header-padding");
    let coordinates = document.querySelectorAll(".item-coords");



    //init niceselect

    $('.nice-select').niceSelect();

    //add orange bg to mobile menu
    mobileMenu.addEventListener("scroll", addOrangeFixedHeader);

    //fixed  dropdown while scrolling
    window.addEventListener("scroll", () => {

        doHeaderDropdownFixed(modileMenuDropdown)
        doHeaderDropdownFixed(header)
        doHeaderDropdownFixed(headerDeskMenu)
    });


    //add overlay for dropdown header
    dropdowns.forEach((item) => {
        addOverlay(item)
    })



    //first tab active
    if (document.getElementById("courses")) {
        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')
    }


    //burger logic
    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        body.classList.toggle('__nav-open');
        if (header.classList.contains('orange-sticky')) {
            header.classList.remove('orange-sticky')
            mobileMenu.scrollTo(0, 0)
        }
    })


    function doHeaderDropdownFixed(element) {
        let scroll = window.pageYOffset;
        if (scroll >= 150) {
            element.classList.add('sticky');
            headerPadding.classList.add('active');
        } else {
            element.classList.remove('sticky')
            headerPadding.classList.remove('active');
        }
    }

    function addOrangeFixedHeader() {
        header.classList.add('orange-sticky')
    }


    //check if scroll on body needed
    function cancelScrollCheck() {
        if (bgOverlay.classList.contains('active') || body.classList.contains('__nav-open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }





    //slidercustom

    let howManyElementsWillBeChanges = coordinates.length;
    let defaultWidthImage = `100px`;
    let mainImageScaleSize = 30;
    let siblingImageScaleSize = 15;



    let centerCoordinatesOfItem = [];

    coordinates.forEach(item => {
        centerCoordinatesOfItem.push(item.offsetLeft + item.offsetWidth / 2)
    })

    let arrayOfElement = centerCoordinatesOfItem.slice()

    onmousemove = function(e) {
        let closest = centerCoordinatesOfItem.sort((a, b) => Math.abs(e.clientX - a) - Math.abs(e.clientX - b))[0]
        let indexOfGotScale = arrayOfElement.indexOf(closest);
        let arrOfFutureScaling1 = []
        let arrOfFutureScaling2 = []

        coordinates.forEach((item, index) => {
            item.classList.remove('active')
            if (index === indexOfGotScale) {
                doScaleMainEl(index)
            } else if (index > indexOfGotScale) {
                arrOfFutureScaling1.push(index)
            } else {
                arrOfFutureScaling2.push(index)
            }
        })
        doScaleNextEl(arrOfFutureScaling1)
        doScalePrevEl(arrOfFutureScaling2)
    }


    let counterMain = null;

    function doScaleMainEl(arrayOfElements) {
        counterMain = howManyElementsWillBeChanges
        coordinates[arrayOfElements].style.width = `${mainImageScaleSize*counterMain}px`;
        coordinates[arrayOfElements].classList.add('active')
    }

    let counterNext = null;

    function doScaleNextEl(arrayOfElements) {
        console.log(arrayOfElements)
        counterNext = howManyElementsWillBeChanges
        arrayOfElements.forEach((item, index) => {
            if (counterNext > 2) {
                counterNext--;
                siblingImageScaleSize * counterNext > 100 ? coordinates[item].style.width = `${siblingImageScaleSize*counterNext}px` : coordinates[item].style.width = defaultWidthImage
            }
        })

    }


    let counterPrev = null;

    function doScalePrevEl(arrayOfElements) {
        counterPrev = howManyElementsWillBeChanges;
        arrayOfElements.reverse().forEach((item, index) => {
            if (counterPrev > 2) {
                counterPrev--;
                siblingImageScaleSize * counterPrev > 100 ? coordinates[item].style.width = `${siblingImageScaleSize*counterPrev}px` : coordinates[item].style.width = defaultWidthImage
            }

        })
    }






    //add overlay function
    function addOverlay(elem) {
        elem.addEventListener('click', function() {
            bgOverlay.classList.toggle('active')
        })

    }

    //bgoverlayclick
    bgOverlay.addEventListener('click', function() {
        stopVideo();
        trailer.classList.remove("active");
        bgOverlay.classList.remove('active')
        document.querySelector('.video-iframe--banner').style.cssText = "display: block";
    });

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
                $(".uk-tab-bottom").animate({ scrollLeft: '-1000' }, 300);
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
    initTeamSlider()

    function initTeamSlider() {
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
    }

    $('.owl-carousel--hero').owlCarousel({
        onInitialized: addDotButtonText,
        onResized: addDotButtonText,
        // stagePadding: 50,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 7000,
        autoplaySpeed: 7000,
        loop: true,
        margin: 60,
        nav: true,
        dots: false,
        center: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                margin: 150,
            },
            1500: {
                items: 5,
                margin: 0,

            }
        }
    })

    function getRandomInt(max) {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        return Math.floor(Math.random() * max) * plusOrMinus;
    }

    const myElement = document.querySelector('.owl-stage');
    for (let i = 0; i < myElement.children.length; i++) {
        myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`
    }

    function addDotButtonText() {
        $('.owl-dot').each(function() {
            $(this).find('.offscreen').remove();
            let idx = $(this).index() + 1;
            $(this).append('<span class="offscreen">Go to slide ' + idx + '</span>');
        });
    }
    $('.hero---scroll-to-courses a').click(function(e) {
        $('html, body').animate({
            scrollTop: $('#registration').offset().top - 30
        }, 'slow');
    });


    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth >= 992) {
        destroyUiKitSlider();
        $('.owl-carousel--team').trigger('destroy.owl.carousel')
    } else {
        document.querySelectorAll('.uk-slider').forEach((item, index) => {
            UIkit.slider(item);
        })
        initTeamSlider()
    }

    window.addEventListener('resize', function() {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth >= 992) {
            destroyUiKitSlider();
            $('.owl-carousel--team').trigger('destroy.owl.carousel')
        } else {
            document.querySelectorAll('.uk-slider').forEach((item, index) => {
                UIkit.slider(item);
            })
            initTeamSlider()
        }
    }, false);


    function destroyUiKitSlider() {

        document.querySelectorAll('.uk-slider').forEach((item, index) => {
            let slider = UIkit.slider(item);
            slider.$destroy();
        })
    }
});