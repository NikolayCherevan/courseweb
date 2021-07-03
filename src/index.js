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
    let anchor = document.querySelector(".hero---scroll-to-courses a");
    let headerDeskMenu = document.querySelector(".header--desk-menu");
    let headerPadding = document.querySelector(".header-padding");
    let coordinates = document.querySelectorAll(".item-coords");
    let mySwiper = document.querySelector(".mySwiper");
    let deskMenuFooter = document.querySelector(".desk-menu-courses");
    let coursesAnchors = document.querySelectorAll('.desk-menu-courses--anchors li a')
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let homePage = document.querySelector('html').classList.contains('homepage');
    let coursesPage = document.querySelector('html').classList.contains('courses');
    let root = document.documentElement;
    const marq1 = document.querySelector(".marquee");

    //TweenMax lib init
    //play button magnetic on team section
    const element = document.querySelector(".cursor");
    const target = document.querySelector(".target");


    class Cursor {
        constructor(el, target, text) {
            this.el = el;
            this.bind();
        }

        bind() {
            document.addEventListener("mousemove", this.move.bind(this), false);
        }

        move(e) {
            const cursorPosition = {
                left: e.clientX,
                top: e.clientY
            };
            document.querySelectorAll(".target").forEach((single) => {
                const triggerDistance = single.getBoundingClientRect().width;

                const targetPosition = {
                    left: single.getBoundingClientRect().left +
                        single.getBoundingClientRect().width / 2,
                    top: single.getBoundingClientRect().top +
                        single.getBoundingClientRect().height / 2
                };
                const distance = {
                    x: targetPosition.left - cursorPosition.left,
                    y: targetPosition.top - cursorPosition.top
                };

                const angle = Math.atan2(distance.x, distance.y);
                const hypotenuse = Math.sqrt(
                    distance.x * distance.x + distance.y * distance.y
                );
                if (hypotenuse < triggerDistance) {
                    // Nikhil - look at this code to adjust the round cursor area sizing
                    TweenMax.to(this.el, 0.2, {
                        left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
                        top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,

                    });
                    TweenMax.to(single.querySelector(".text"), 0.2, {
                        x: -((Math.sin(angle) * hypotenuse) / 2),
                        y: -((Math.cos(angle) * hypotenuse) / 2)
                    });
                } else {
                    TweenMax.to(this.el, 0.2, {
                        left: cursorPosition.left,
                        top: cursorPosition.top,
                    });

                    TweenMax.to(single.querySelector(".text"), 0.2, {
                        x: 0,
                        y: 0
                    });
                }
            });
        }
    }

    //init niceselect

    $('.nice-select').niceSelect();

    //add orange bg to mobile menu
    mobileMenu.addEventListener("scroll", addOrangeFixedHeader);

    //fixed  dropdown while scrolling
    window.addEventListener("scroll", () => {
        if (!coursesPage) {
            doHeaderDropdownFixed(modileMenuDropdown)
            doHeaderDropdownFixed(header)
            doHeaderDropdownFixed(headerDeskMenu)

        } else {
            doFooterDropdownFixed(mySwiper)
            doFooterDropdownFixed(deskMenuFooter)
        }

    });

    //add overlay for all dropdowns header
    dropdowns.forEach((item) => {
        addOverlay(item)
    })


    //add overlay function
    function addOverlay(elem) {
        elem.addEventListener('click', function() {
            bgOverlay.classList.toggle('active')
        })

    }

    //first tab active #courses section
    if (document.getElementById("courses")) {
        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')
    }


    //burger logic
    burger.addEventListener('click', function() {
        this.classList.toggle('open');
        body.classList.toggle('__nav-open');
        if (!header.classList.contains('sticky')) {
            headerPadding.classList.toggle('active');
        }
        if (header.classList.contains('orange-sticky')) {
            header.classList.remove('orange-sticky')
            mobileMenu.scrollTo(0, 0)
        }
    })



    //sticky header logic

    function doHeaderDropdownFixed(element) {
        let scroll = window.pageYOffset;
        if (scroll >= 150) {
            element.classList.add('sticky');
            headerPadding.classList.add('active');
        } else {
            element.classList.remove('sticky');
            headerPadding.classList.remove('active');
        }
    }
    //sticky footer logic

    function doFooterDropdownFixed(element) {
        let scroll = window.pageYOffset;
        if (scroll <= 400) {
            element.classList.remove('shown')
        } else {
            element.classList.add('shown')
        }
    }

    function addOrangeFixedHeader() {
        header.classList.add('orange-sticky')
    }


    //slidercustom

    let howManyElementsWillBeChanges = 5; //k-number how manu elements will be change
    let defaultWidthImage = `60px`;
    let mainImageScaleSize = 27; //k-number main image size(more-larger)
    let siblingImageScaleSize = 32; //k-number sibling image size(more-larger)
    let counterMain = null;
    let counterNext = null;
    let counterPrev = null;
    let centerCoordinatesOfItem = [];

    function initBubleSlider() {
        let teemSection = document.getElementById("team");
        if (teemSection.classList.contains('slider_inited')) return;
        teemSection.classList.add('slider_inited');
        coordinates.forEach(item => {
            centerCoordinatesOfItem.push(item.offsetLeft + item.offsetWidth / 2);
            item.style.width = defaultWidthImage;


        })

        let arrayOfElement = centerCoordinatesOfItem.slice()
        onmousemove = function(e) {
            let x = window.innerWidth;

            e.clientX - window.innerWidth / 2 > 0 ? x = e.clientX - 100 : x = e.clientX - 200

            let closest = centerCoordinatesOfItem.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))[0]
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



        function doScaleMainEl(arrayOfElements) {
            counterMain = 10
            coordinates[arrayOfElements].style.width = `${mainImageScaleSize * counterMain}px`;
            coordinates[arrayOfElements].classList.add('active')
        }


        function doScaleNextEl(arrayOfElements) {
            counterNext = howManyElementsWillBeChanges
            arrayOfElements.forEach((item, index) => {
                if (counterNext > 2) {
                    counterNext--;
                    siblingImageScaleSize * counterNext > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterNext}px` : coordinates[item].style.width = defaultWidthImage
                }
            })

        }


        function doScalePrevEl(arrayOfElements) {
            counterPrev = howManyElementsWillBeChanges;
            arrayOfElements.reverse().forEach((item, index) => {
                if (counterPrev > 2) {
                    counterPrev--;
                    siblingImageScaleSize * counterPrev > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterPrev}px` : coordinates[item].style.width = defaultWidthImage
                }

            })
        }
    }




    //bgoverlayclick
    bgOverlay.addEventListener('click', function() {
        stopVideo();
        trailer.classList.remove("active");
        bgOverlay.classList.remove('active');
        bgOverlay.classList.remove('video')
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

    //owlinit on team
    initTeamSlider()

    function initTeamSlider() {
        $('.owl-carousel--team').owlCarousel({
            onInitialized: addDotButtonText,
            onResized: addDotButtonText,
            slideTransition: 'linear',
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

    function getMatrix(element) {
        if (!element) return false
        const values = element.style.transform.split(/\w+\(|\);?/);
        const transform = values[1].split(/,\s?/g).map(numStr => parseInt(numStr));

        return {
            x: transform[0],
            y: transform[1],
            z: transform[2]
        };
    }
    $('.owl-carousel--team').on('changed.owl.carousel', function(e) {
        if (!getMatrix) return
        $('.owl-carousel--team').css('background-position-x', getMatrix(document.querySelector(".owl-carousel--team .owl-stage")).x / 6);

    });

    //init owl on hero
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
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 5000,
            },
            600: {
                items: 2,
                margin: 0,
            },
            800: {
                items: 3,
                margin: 0,
            },
            1100: {
                items: 4,
                margin: 0,

            },
            1500: {
                items: 5,
                margin: 0,

            }
        }
    })



    //random rotate image
    function getRandomInt(max) {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        return Math.floor(Math.random() * max) * plusOrMinus;
    }

    if (homePage) {
        const myElement = document.querySelector('.owl-stage');

        for (let i = 0; i < myElement.children.length; i++) {
            myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`
        }
        //add event for anchor home
        function smoothScrollingTo(elem) {
            elem.addEventListener("click", clickHandler);
        }
        smoothScrollingTo(anchor)
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }



    //check sliders vith viewport width and destroy or init it

    function destroyUiKitSlider() {
        document.querySelectorAll('.uk-slider').forEach((item, index) => {
            let slider = UIkit.slider(item);
            slider.$destroy();
        })
    }
    if (viewportWidth >= 992) {

        destroyUiKitSlider();
        $('.owl-carousel--team').trigger('destroy.owl.carousel');
        if (homePage) {
            initBubleSlider();
        }
        const cursor = new Cursor(element, target);
    } else {
        document.querySelectorAll('.uk-slider').forEach((item, index) => {
            UIkit.slider(item);
        })
        initTeamSlider();

        if (coursesPage) {
            let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;
            if (!document.getElementById('hero').classList.contains('course-stoped')) {
                document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero - 151}px`
            }
        }
    }
    window.addEventListener('resize', function() {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth >= 992) {
            destroyUiKitSlider();
            $('.owl-carousel--team').trigger('destroy.owl.carousel');
            if (homePage) {
                initBubleSlider();
            }
            const cursor = new Cursor(element, target);
        } else {
            document.querySelectorAll('.uk-slider').forEach((item, index) => {
                UIkit.slider(item);
            })
            initTeamSlider();
            if (coursesPage) {
                let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;
                if (!document.getElementById('hero').classList.contains('course-stoped')) {
                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero - 151}px`
                } else {
                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero + 151}px`
                }
            }

        }
    }, false);





    //passive events seo

    jQuery.event.special.touchstart = {
        setup: function(_, ns, handle) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.touchmove = {
        setup: function(_, ns, handle) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.wheel = {
        setup: function(_, ns, handle) {
            this.addEventListener("wheel", handle, { passive: true });
        }
    };
    jQuery.event.special.mousewheel = {
        setup: function(_, ns, handle) {
            this.addEventListener("mousewheel", handle, { passive: true });
        }
    };

    //owl dots btn fix seo 


    function addDotButtonText() {
        $('.owl-dot').each(function() {
            $(this).find('.offscreen').remove();
            let idx = $(this).index() + 1;
            $(this).append('<span class="offscreen">Go to slide ' + idx + '</span>');
        });
    }



    //courses page 
    function addStickyscrollToTop() {
        const scrollUp = "sticky";
        const scrollDown = "not-sticky";
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            if (viewportWidth <= 1400) return
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                header.classList.remove(scrollUp);
                headerDeskMenu.classList.remove(scrollUp);
                headerPadding.classList.remove('active');
                return;
            }

            if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
                // down
                header.classList.remove(scrollUp);
                headerDeskMenu.classList.remove(scrollUp);
                headerPadding.classList.remove('active');
                header.classList.add(scrollDown);
            } else if (
                currentScroll < lastScroll &&
                header.classList.contains(scrollDown)
            ) {
                // up
                header.classList.remove(scrollDown);
                header.classList.add(scrollUp);
                headerDeskMenu.classList.add(scrollUp);
                headerPadding.classList.add('active');
            }
            lastScroll = currentScroll;

        });
    }
    var swiper = null;
    if (coursesPage) {
        function swiperShow() {
            swiper = new Swiper(".mySwiper", {
                direction: "vertical",
                calculateHeight: true,
                onAny(eventName, ...args) {

                    let height = ($('.courses-mobile-menu-advanced--wrapper').outerHeight() + 16) + 'px'
                    $('[aria-label="2 / 2"]').css('height', height)
                    if (eventName == "slideNextTransitionStart") {
                        $(".swiper-wrapper").addClass("active");
                        root.style.setProperty('--transformProp', `translate3d(0px, ${($('.courses-mobile-menu-advanced--wrapper').outerHeight() + 16)*-1}px, 0px)`);
                    }

                    if (eventName == "slidePrevTransitionStart") {
                        $(".swiper-wrapper").removeClass("active")

                    }


                }
            });
        }

        function addMarquee(element) {
            if (window.screen.width <= 1300) {
                element.innerHTML = ''
                element.insertAdjacentHTML('beforeend', "<marquee>" + element.dataset.text + "</marquee>");

            } else {
                element.innerHTML = ''
                element.insertAdjacentHTML('beforeend', "<h2>" + element.dataset.text + "</h2>");
            }
        }
        addMarquee(marq1)
        coursesAnchors.forEach(item => {
            item.addEventListener('click', function(event) {
                $('.desk-menu-courses--anchors li a').removeClass('focus')
                event.target.classList.add('focus')
            })
        })
        doFooterDropdownFixed(mySwiper)
        doFooterDropdownFixed(deskMenuFooter)
        const scrollUp = "sticky";
        addStickyscrollToTop()
        window.addEventListener('resize', function() {
            swiperShow()
            addMarquee(marq1)
            header.classList.remove(scrollUp);
            headerDeskMenu.classList.remove(scrollUp);
            headerPadding.classList.remove('active');
        }, false)
        let owl = $('.students-review--owl');
        owl.owlCarousel({
            autoplay: false,
            items: 1,
            loop: true,
            onDragged: dragged,
            onInitialized: init,
            onTranslated: translated,
            margin: 50,
            autoHeight: false,
            lazyLoad: true,
            responsive: {
                768: {
                    items: 1,
                    margin: 50,
                    stagePadding: 150,
                },
                1100: {
                    items: 2,
                    margin: 40,
                    stagePadding: 204,
                    nav: true,
                },
                1400: {
                    items: 2,
                    margin: 40,
                    stagePadding: 204,
                }
            }
        });

        function translated(event) {
            let owlActive = $('.owl-item.active').children().attr('data-count');
            $('.counter--current-item').text(`${owlActive}`)
        }

        function init(event) {
            let items = event.item.count;
            $('.counter--all-items').text(`${items}`)
            let showMore = document.querySelectorAll('.show-more');
            addDotButtonText();
            showMore.forEach(item => {
                item.addEventListener('click', function(event) {
                    event.target.classList.add('hided');
                    event.target.nextElementSibling.classList.remove('hided')
                })
            })
        }

        function dragged(event) {
            let owlActive = $('.owl-item.active').children().attr('data-count');
            $('.counter--current-item').text(`${owlActive}`)
        }


        //time to course 
        let daysText = document.querySelector(".days.time-wrapper--number");
        let hoursText = document.querySelector(".hours.time-wrapper--number");
        let minutesText = document.querySelector(".minutes.time-wrapper--number");
        let secondText = document.querySelector(".seconds.time-wrapper--number");
        let timeWrapperCourse = document.querySelector("#hero");
        let courseEnd = document.querySelector(".end-course");
        let zeroFreeSpaces = document.querySelector(".registration--number-of-free-space");

        function diffSubtract(date1, date2) {
            return date2 - date1;
        }

        let end_date_str = `${courseEnd.dataset.years}-${courseEnd.dataset.month}-${courseEnd.dataset.days}T${courseEnd.dataset.hours}:${courseEnd.dataset.minutes}:${courseEnd.dataset.seconds}`;
        let timer = setInterval(function() {
            let now = new Date();
            let date = new Date(end_date_str);
            let ms_left = diffSubtract(now, date);
            if (ms_left <= 0 || zeroFreeSpaces.innerHTML == 0) { // То
                clearInterval(timer);
                timeWrapperCourse.classList.add('course-stoped');
                courseEnd.innerHTML = "Набор окончен";

                let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;
                if (viewportWidth <= 992) {
                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero + 151}px`;
                }
            } else {
                let res = new Date(ms_left);
                daysText.innerHTML = res.getUTCDate() - 1;
                let lastNumberDays = String(res.getUTCDate() - 1).split('')[String(res.getUTCDate() - 1).split('').length - 1];
                let firstNumberDays = String(res.getUTCDate() - 1).split('')[String(res.getUTCDate() - 1).split('').length - 2]
                switch (true) {
                    case (lastNumberDays == 1) && firstNumberDays != 1:
                        daysText.nextElementSibling.innerHTML = "день"
                        break;
                    case (lastNumberDays == 2 || lastNumberDays == 3 || lastNumberDays == 4) && firstNumberDays != 1:
                        daysText.nextElementSibling.innerHTML = "дня"
                        break;
                    default:
                        daysText.nextElementSibling.innerHTML = "днів";
                        break;
                }
                hoursText.innerHTML = res.getUTCHours();
                let lastNumber = String(res.getUTCHours()).split('')[String(res.getUTCHours()).split('').length - 1]
                let firstNumber = String(res.getUTCHours()).split('')[String(res.getUTCHours()).split('').length - 2];

                switch (true) {
                    case (lastNumber == 1) && firstNumber != 1:
                        hoursText.nextElementSibling.innerHTML = "годину"
                        break;
                    case (lastNumber == 2 || lastNumber == 3 || lastNumber == 4) && firstNumber != 1:
                        hoursText.nextElementSibling.innerHTML = "години"
                        break;
                    default:
                        hoursText.nextElementSibling.innerHTML = "годин";
                        break;
                }
                minutesText.innerHTML = res.getUTCMinutes();

                let lastNumberMinutes = String(res.getUTCMinutes()).split('')[String(res.getUTCMinutes()).split('').length - 1];
                let firstNumberMinutes = String(res.getUTCMinutes()).split('')[String(res.getUTCMinutes()).split('').length - 2];

                switch (true) {
                    case (lastNumberMinutes == 1) && firstNumberMinutes != 1:
                        minutesText.nextElementSibling.innerHTML = "хвилину"
                        break;
                    case (lastNumberMinutes == 2 || lastNumberMinutes == 3 || lastNumberMinutes == 4) && firstNumberMinutes != 1:
                        minutesText.nextElementSibling.innerHTML = "хвилини"
                        break;
                    default:
                        minutesText.nextElementSibling.innerHTML = "хвилин";
                        break;
                }
                secondText.innerHTML = res.getUTCSeconds();
                let lastNumberSeconds = String(res.getUTCSeconds()).split('')[String(res.getUTCSeconds()).split('').length - 1];
                let firstNumberSeconds = String(res.getUTCSeconds()).split('')[String(res.getUTCSeconds()).split('').length - 2];

                switch (true) {
                    case (lastNumberSeconds == 1) && firstNumberSeconds != 1:
                        secondText.nextElementSibling.innerHTML = "секунду"
                        break;
                    case (lastNumberSeconds == 2 || lastNumberSeconds == 3 || lastNumberSeconds == 4) && firstNumberSeconds != 1:
                        secondText.nextElementSibling.innerHTML = "секунди"
                        break;
                    default:
                        secondText.nextElementSibling.innerHTML = "секунд";
                        break;
                }
                timeWrapperCourse.classList.remove('course-stoped');
                // checkTimeText()
            }

        }, 1000)
        $('.students-review--owl').on('changed.owl.carousel', function(e) {
            if (!getMatrix) return
            $('#students-review').css('background-position-x', getMatrix(document.querySelector(".students-review--owl .owl-stage")).x / 6);

        });



        swiperShow()

        function scrollTo(hash) {
            location.hash = hash;
        }
        document.addEventListener('touchstart', function(event) {
            if ((!document.querySelector('.mySwiper').contains(event.target)) || event.target.getAttribute('href') != null) {
                scrollTo(event.target.getAttribute('href'));
                setTimeout(() => swiper.slideTo(0), 300)
            }
        })
    }
});