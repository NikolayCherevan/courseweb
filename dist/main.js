/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projectnew/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    let body = document.querySelector('body');\r\n    let burger = document.querySelector('.burger--btn')\r\n    let bgOverlay = document.getElementById('bg-overlay');\r\n    let modileMenuDropdown = document.querySelector('.header--dropdown--modile');\r\n    let header = document.querySelector('.header');\r\n    let mobileMenu = document.querySelector('.mobile-menu');\r\n    let dropdowns = document.querySelectorAll('.dropdown');\r\n    let trailer = document.querySelector(\".trailer\");\r\n    let headerDeskMenu = document.querySelector(\".header--desk-menu\");\r\n    let headerPadding = document.querySelector(\".header-padding\");\r\n    let coordinates = document.querySelectorAll(\".item-coords\");\r\n    let anchor = document.querySelector(\".hero---scroll-to-courses a\");\r\n    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;\r\n    let homePage = document.querySelector('html').classList.contains('homepage');\r\n    let coursesPage = document.querySelector('html').classList.contains('courses')\r\n        //TweenMax lib init\r\n        //play button magnetic on team section\r\n    const element = document.querySelector(\".cursor\");\r\n    const target = document.querySelector(\".target\");\r\n\r\n\r\n    class Cursor {\r\n        constructor(el, target, text) {\r\n            this.el = el;\r\n            this.bind();\r\n        }\r\n\r\n        bind() {\r\n            document.addEventListener(\"mousemove\", this.move.bind(this), false);\r\n        }\r\n\r\n        move(e) {\r\n            const cursorPosition = {\r\n                left: e.clientX,\r\n                top: e.clientY\r\n            };\r\n            document.querySelectorAll(\".target\").forEach((single) => {\r\n                const triggerDistance = single.getBoundingClientRect().width;\r\n\r\n                const targetPosition = {\r\n                    left: single.getBoundingClientRect().left +\r\n                        single.getBoundingClientRect().width / 2,\r\n                    top: single.getBoundingClientRect().top +\r\n                        single.getBoundingClientRect().height / 2\r\n                };\r\n                const distance = {\r\n                    x: targetPosition.left - cursorPosition.left,\r\n                    y: targetPosition.top - cursorPosition.top\r\n                };\r\n\r\n                const angle = Math.atan2(distance.x, distance.y);\r\n                const hypotenuse = Math.sqrt(\r\n                    distance.x * distance.x + distance.y * distance.y\r\n                );\r\n                if (hypotenuse < triggerDistance) {\r\n                    // Nikhil - look at this code to adjust the round cursor area sizing\r\n                    TweenMax.to(this.el, 0.2, {\r\n                        left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,\r\n                        top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,\r\n\r\n                    });\r\n                    TweenMax.to(single.querySelector(\".text\"), 0.2, {\r\n                        x: -((Math.sin(angle) * hypotenuse) / 2),\r\n                        y: -((Math.cos(angle) * hypotenuse) / 2)\r\n                    });\r\n                } else {\r\n                    TweenMax.to(this.el, 0.2, {\r\n                        left: cursorPosition.left,\r\n                        top: cursorPosition.top,\r\n                    });\r\n\r\n                    TweenMax.to(single.querySelector(\".text\"), 0.2, {\r\n                        x: 0,\r\n                        y: 0\r\n                    });\r\n                }\r\n            });\r\n        }\r\n    }\r\n\r\n    //init niceselect\r\n\r\n    $('.nice-select').niceSelect();\r\n\r\n    //add orange bg to mobile menu\r\n    mobileMenu.addEventListener(\"scroll\", addOrangeFixedHeader);\r\n\r\n    //fixed  dropdown while scrolling\r\n    window.addEventListener(\"scroll\", () => {\r\n        if (!coursesPage) {\r\n            doHeaderDropdownFixed(modileMenuDropdown)\r\n            doHeaderDropdownFixed(header)\r\n            doHeaderDropdownFixed(headerDeskMenu)\r\n        }\r\n    });\r\n\r\n    //add overlay for all dropdowns header\r\n    dropdowns.forEach((item) => {\r\n        addOverlay(item)\r\n    })\r\n\r\n\r\n    //add overlay function\r\n    function addOverlay(elem) {\r\n        elem.addEventListener('click', function() {\r\n            bgOverlay.classList.toggle('active')\r\n        })\r\n\r\n    }\r\n\r\n    //first tab active #courses section\r\n    if (document.getElementById(\"courses\")) {\r\n        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')\r\n    }\r\n\r\n\r\n    //burger logic\r\n    burger.addEventListener('click', function() {\r\n        this.classList.toggle('open');\r\n        body.classList.toggle('__nav-open');\r\n        if (!header.classList.contains('sticky')) {\r\n            headerPadding.classList.toggle('active');\r\n        }\r\n        if (header.classList.contains('orange-sticky')) {\r\n            header.classList.remove('orange-sticky')\r\n            mobileMenu.scrollTo(0, 0)\r\n        }\r\n    })\r\n\r\n\r\n\r\n    //sticky header logic\r\n\r\n    function doHeaderDropdownFixed(element) {\r\n        let scroll = window.pageYOffset;\r\n        if (scroll >= 150) {\r\n            element.classList.add('sticky');\r\n            headerPadding.classList.add('active');\r\n        } else {\r\n            element.classList.remove('sticky');\r\n            headerPadding.classList.remove('active');\r\n        }\r\n    }\r\n\r\n    function addOrangeFixedHeader() {\r\n        header.classList.add('orange-sticky')\r\n    }\r\n\r\n\r\n    //slidercustom\r\n\r\n    let howManyElementsWillBeChanges = 5; //k-number how manu elements will be change\r\n    let defaultWidthImage = `60px`;\r\n    let mainImageScaleSize = 27; //k-number main image size(more-larger)\r\n    let siblingImageScaleSize = 32; //k-number sibling image size(more-larger)\r\n    let counterMain = null;\r\n    let counterNext = null;\r\n    let counterPrev = null;\r\n    let centerCoordinatesOfItem = [];\r\n\r\n    function initBubleSlider() {\r\n        let teemSection = document.getElementById(\"team\");\r\n        if (teemSection.classList.contains('slider_inited')) return;\r\n        teemSection.classList.add('slider_inited');\r\n        coordinates.forEach(item => {\r\n            centerCoordinatesOfItem.push(item.offsetLeft + item.offsetWidth / 2);\r\n            item.style.width = defaultWidthImage;\r\n\r\n\r\n        })\r\n\r\n        let arrayOfElement = centerCoordinatesOfItem.slice()\r\n        onmousemove = function(e) {\r\n            let x = window.innerWidth;\r\n\r\n            e.clientX - window.innerWidth / 2 > 0 ? x = e.clientX - 100 : x = e.clientX - 200\r\n\r\n            let closest = centerCoordinatesOfItem.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))[0]\r\n            let indexOfGotScale = arrayOfElement.indexOf(closest);\r\n            let arrOfFutureScaling1 = []\r\n            let arrOfFutureScaling2 = []\r\n\r\n            coordinates.forEach((item, index) => {\r\n\r\n                item.classList.remove('active')\r\n                if (index === indexOfGotScale) {\r\n                    doScaleMainEl(index)\r\n                } else if (index > indexOfGotScale) {\r\n                    arrOfFutureScaling1.push(index)\r\n                } else {\r\n                    arrOfFutureScaling2.push(index)\r\n                }\r\n            })\r\n            doScaleNextEl(arrOfFutureScaling1)\r\n            doScalePrevEl(arrOfFutureScaling2)\r\n        }\r\n\r\n\r\n\r\n        function doScaleMainEl(arrayOfElements) {\r\n            counterMain = 10\r\n            coordinates[arrayOfElements].style.width = `${mainImageScaleSize * counterMain}px`;\r\n            coordinates[arrayOfElements].classList.add('active')\r\n        }\r\n\r\n\r\n        function doScaleNextEl(arrayOfElements) {\r\n            counterNext = howManyElementsWillBeChanges\r\n            arrayOfElements.forEach((item, index) => {\r\n                if (counterNext > 2) {\r\n                    counterNext--;\r\n                    siblingImageScaleSize * counterNext > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterNext}px` : coordinates[item].style.width = defaultWidthImage\r\n                }\r\n            })\r\n\r\n        }\r\n\r\n\r\n        function doScalePrevEl(arrayOfElements) {\r\n            counterPrev = howManyElementsWillBeChanges;\r\n            arrayOfElements.reverse().forEach((item, index) => {\r\n                if (counterPrev > 2) {\r\n                    counterPrev--;\r\n                    siblingImageScaleSize * counterPrev > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterPrev}px` : coordinates[item].style.width = defaultWidthImage\r\n                }\r\n\r\n            })\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n    //bgoverlayclick\r\n    bgOverlay.addEventListener('click', function() {\r\n        stopVideo();\r\n        trailer.classList.remove(\"active\");\r\n        bgOverlay.classList.remove('active');\r\n        bgOverlay.classList.remove('video')\r\n        document.querySelector('.video-iframe--banner').style.cssText = \"display: block\";\r\n    });\r\n\r\n    //tabs logic\r\n\r\n    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {\r\n\r\n        item.addEventListener('click', function(event) {\r\n            document.querySelectorAll('.courses--tabs--title').forEach((item) => {\r\n                item.classList.remove('active-title')\r\n            })\r\n            document.querySelectorAll('.courses--tabs--content').forEach((item) => {\r\n                item.classList.remove('active')\r\n            })\r\n            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');\r\n            this.classList.add('active-title')\r\n        })\r\n    })\r\n\r\n    //tabs contains items\r\n    var prevEl = null;\r\n    $(\".courses--tabs--title\").each(function(index) {\r\n        $(this).on('click', function() {\r\n            if (index === 0) {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-1000' }, 300);\r\n                return\r\n            }\r\n            if (prevEl < index) {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=130' }, 300);\r\n            } else if (prevEl - 1 < index) {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=170' }, 300);\r\n            } else {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-=150' }, 300);\r\n            }\r\n            prevEl = index;\r\n        })\r\n    })\r\n\r\n    //owlinit on team\r\n    initTeamSlider()\r\n\r\n    function initTeamSlider() {\r\n        $('.owl-carousel--team').owlCarousel({\r\n            onInitialized: addDotButtonText,\r\n            onResized: addDotButtonText,\r\n            slideTransition: 'linear',\r\n            stagePadding: 50,\r\n            loop: true,\r\n            margin: 10,\r\n            nav: false,\r\n            lazyLoad: true,\r\n            responsive: {\r\n                0: {\r\n                    items: 1\r\n                },\r\n                600: {\r\n                    items: 3\r\n                },\r\n                1000: {\r\n                    items: 5\r\n                }\r\n            }\r\n        })\r\n\r\n\r\n    }\r\n\r\n    function getMatrix(element) {\r\n        if (!element) return false\r\n        const values = element.style.transform.split(/\\w+\\(|\\);?/);\r\n        const transform = values[1].split(/,\\s?/g).map(numStr => parseInt(numStr));\r\n\r\n        return {\r\n            x: transform[0],\r\n            y: transform[1],\r\n            z: transform[2]\r\n        };\r\n    }\r\n    $('.owl-carousel--team').on('changed.owl.carousel', function(e) {\r\n        if (!getMatrix) return\r\n        $('.owl-carousel--team').css('background-position-x', getMatrix(document.querySelector(\".owl-carousel--team .owl-stage\")).x / 6);\r\n\r\n    });\r\n\r\n    //init owl on hero\r\n    $('.owl-carousel--hero').owlCarousel({\r\n        onInitialized: addDotButtonText,\r\n        onResized: addDotButtonText,\r\n        // stagePadding: 50,\r\n        autoplay: true,\r\n        slideTransition: 'linear',\r\n        autoplayTimeout: 7000,\r\n        autoplaySpeed: 7000,\r\n        loop: true,\r\n        margin: 60,\r\n        nav: true,\r\n        dots: false,\r\n        center: true,\r\n        lazyLoad: true,\r\n        responsive: {\r\n            0: {\r\n                items: 1,\r\n                autoplay: true,\r\n                autoplayTimeout: 5000,\r\n                autoplaySpeed: 5000,\r\n            },\r\n            600: {\r\n                items: 2,\r\n                margin: 0,\r\n            },\r\n            800: {\r\n                items: 3,\r\n                margin: 0,\r\n            },\r\n            1100: {\r\n                items: 4,\r\n                margin: 0,\r\n\r\n            },\r\n            1500: {\r\n                items: 5,\r\n                margin: 0,\r\n\r\n            }\r\n        }\r\n    })\r\n\r\n\r\n\r\n    //random rotate image\r\n    function getRandomInt(max) {\r\n        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;\r\n        return Math.floor(Math.random() * max) * plusOrMinus;\r\n    }\r\n\r\n    if (homePage) {\r\n        const myElement = document.querySelector('.owl-stage');\r\n\r\n        for (let i = 0; i < myElement.children.length; i++) {\r\n            myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`\r\n        }\r\n        //add event for anchor home\r\n        function smoothScrollingTo(elem) {\r\n            elem.addEventListener(\"click\", clickHandler);\r\n        }\r\n        smoothScrollingTo(anchor)\r\n    }\r\n\r\n    function clickHandler(e) {\r\n        e.preventDefault();\r\n        const href = this.getAttribute(\"href\");\r\n        const offsetTop = document.querySelector(href).offsetTop;\r\n        scroll({\r\n            top: offsetTop,\r\n            behavior: \"smooth\"\r\n        });\r\n    }\r\n\r\n\r\n\r\n    //check sliders vith viewport width and destroy or init it\r\n\r\n    function destroyUiKitSlider() {\r\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n            let slider = UIkit.slider(item);\r\n            slider.$destroy();\r\n        })\r\n    }\r\n    if (viewportWidth >= 992) {\r\n\r\n        destroyUiKitSlider();\r\n        $('.owl-carousel--team').trigger('destroy.owl.carousel');\r\n        if (homePage) {\r\n            initBubleSlider();\r\n        }\r\n        const cursor = new Cursor(element, target);\r\n    } else {\r\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n            UIkit.slider(item);\r\n        })\r\n        initTeamSlider();\r\n\r\n        if (coursesPage) {\r\n            let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;\r\n            if (!document.getElementById('hero').classList.contains('course-stoped')) {\r\n                document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero - 151}px`\r\n            }\r\n        }\r\n    }\r\n    window.addEventListener('resize', function() {\r\n        viewportWidth = window.innerWidth || document.documentElement.clientWidth;\r\n        if (viewportWidth >= 992) {\r\n            destroyUiKitSlider();\r\n            $('.owl-carousel--team').trigger('destroy.owl.carousel');\r\n            if (homePage) {\r\n                initBubleSlider();\r\n            }\r\n            const cursor = new Cursor(element, target);\r\n        } else {\r\n            document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n                UIkit.slider(item);\r\n            })\r\n            initTeamSlider();\r\n            if (coursesPage) {\r\n                let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;\r\n                if (!document.getElementById('hero').classList.contains('course-stoped')) {\r\n                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero - 151}px`\r\n                } else {\r\n                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero + 151}px`\r\n                }\r\n            }\r\n\r\n        }\r\n    }, false);\r\n\r\n\r\n\r\n\r\n\r\n    //passive events seo\r\n\r\n    jQuery.event.special.touchstart = {\r\n        setup: function(_, ns, handle) {\r\n            this.addEventListener(\"touchstart\", handle, { passive: !ns.includes(\"noPreventDefault\") });\r\n        }\r\n    };\r\n    jQuery.event.special.touchmove = {\r\n        setup: function(_, ns, handle) {\r\n            this.addEventListener(\"touchmove\", handle, { passive: !ns.includes(\"noPreventDefault\") });\r\n        }\r\n    };\r\n    jQuery.event.special.wheel = {\r\n        setup: function(_, ns, handle) {\r\n            this.addEventListener(\"wheel\", handle, { passive: true });\r\n        }\r\n    };\r\n    jQuery.event.special.mousewheel = {\r\n        setup: function(_, ns, handle) {\r\n            this.addEventListener(\"mousewheel\", handle, { passive: true });\r\n        }\r\n    };\r\n\r\n    //owl dots btn fix seo \r\n\r\n\r\n    function addDotButtonText() {\r\n        $('.owl-dot').each(function() {\r\n            $(this).find('.offscreen').remove();\r\n            let idx = $(this).index() + 1;\r\n            $(this).append('<span class=\"offscreen\">Go to slide ' + idx + '</span>');\r\n        });\r\n    }\r\n\r\n\r\n\r\n    //courses page \r\n    function addStickyscrollToTop() {\r\n        const scrollUp = \"sticky\";\r\n        const scrollDown = \"not-sticky\";\r\n        let lastScroll = 0;\r\n\r\n        window.addEventListener(\"scroll\", () => {\r\n            if (viewportWidth <= 1400) return\r\n            const currentScroll = window.pageYOffset;\r\n            if (currentScroll <= 0) {\r\n                header.classList.remove(scrollUp);\r\n                headerDeskMenu.classList.remove(scrollUp);\r\n                headerPadding.classList.remove('active');\r\n                return;\r\n            }\r\n\r\n            if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {\r\n                // down\r\n                header.classList.remove(scrollUp);\r\n                headerDeskMenu.classList.remove(scrollUp);\r\n                headerPadding.classList.remove('active');\r\n                header.classList.add(scrollDown);\r\n            } else if (\r\n                currentScroll < lastScroll &&\r\n                header.classList.contains(scrollDown)\r\n            ) {\r\n                // up\r\n                header.classList.remove(scrollDown);\r\n                header.classList.add(scrollUp);\r\n                headerDeskMenu.classList.add(scrollUp);\r\n                headerPadding.classList.add('active');\r\n            }\r\n            lastScroll = currentScroll;\r\n\r\n        });\r\n    }\r\n\r\n    if (coursesPage) {\r\n        const scrollUp = \"sticky\";\r\n        addStickyscrollToTop()\r\n        window.addEventListener('resize', function() {\r\n\r\n            header.classList.remove(scrollUp);\r\n            headerDeskMenu.classList.remove(scrollUp);\r\n            headerPadding.classList.remove('active');\r\n        }, false)\r\n        let owl = $('.students-review--owl');\r\n        owl.owlCarousel({\r\n            autoplay: false,\r\n            items: 1,\r\n            loop: true,\r\n            onDragged: dragged,\r\n            onInitialized: init,\r\n            margin: 50,\r\n\r\n            lazyLoad: true,\r\n            responsive: {\r\n                768: {\r\n                    items: 1,\r\n                    margin: 50,\r\n                    stagePadding: 150,\r\n                },\r\n                1100: {\r\n                    items: 1,\r\n                    margin: 40,\r\n                    stagePadding: 204,\r\n                },\r\n                1400: {\r\n                    items: 2,\r\n                    margin: 40,\r\n                    stagePadding: 204,\r\n                }\r\n            }\r\n        });\r\n\r\n        function init(event) {\r\n            let items = event.item.count;\r\n            $('.counter--all-items').text(`${items}`)\r\n            let showMore = document.querySelectorAll('.show-more');\r\n            addDotButtonText();\r\n            showMore.forEach(item => {\r\n                item.addEventListener('click', function(event) {\r\n                    event.target.classList.add('hided');\r\n                    event.target.nextElementSibling.classList.remove('hided')\r\n                })\r\n            })\r\n        }\r\n\r\n        function dragged(event) {\r\n\r\n            let owlActive = $('.owl-item.active').children().attr('data-count');\r\n            $('.counter--current-item').text(`${owlActive}`)\r\n        }\r\n\r\n\r\n        //time to course \r\n        let daysText = document.querySelector(\".days.time-wrapper--number\");\r\n        let hoursText = document.querySelector(\".hours.time-wrapper--number\");\r\n        let minutesText = document.querySelector(\".minutes.time-wrapper--number\");\r\n        let secondText = document.querySelector(\".seconds.time-wrapper--number\");\r\n        let timeWrapperCourse = document.querySelector(\"#hero\");\r\n        let courseEnd = document.querySelector(\".end-course\");\r\n        let zeroFreeSpaces = document.querySelector(\".registration--number-of-free-space\");\r\n\r\n        function diffSubtract(date1, date2) {\r\n            return date2 - date1;\r\n        }\r\n\r\n        let end_date_str = `${courseEnd.dataset.years}-${courseEnd.dataset.month}-${courseEnd.dataset.days}T${courseEnd.dataset.hours}:${courseEnd.dataset.minutes}:${courseEnd.dataset.seconds}`;\r\n        let timer = setInterval(function() {\r\n            let now = new Date();\r\n            let date = new Date(end_date_str);\r\n            let ms_left = diffSubtract(now, date);\r\n            if (ms_left <= 0 || zeroFreeSpaces.innerHTML == 0) { // То\r\n                clearInterval(timer);\r\n                timeWrapperCourse.classList.add('course-stoped');\r\n                courseEnd.innerHTML = \"Набор окончен\";\r\n\r\n                let intElemOffsetHeightHero = document.querySelector('.hero--left-side').offsetHeight;\r\n                if (viewportWidth <= 992) {\r\n                    document.querySelector('.hero--right-side').style.height = `${intElemOffsetHeightHero + 151}px`;\r\n                }\r\n            } else {\r\n                let res = new Date(ms_left);\r\n                daysText.innerHTML = res.getUTCDate() - 1;\r\n                let lastNumberDays = String(res.getUTCDate() - 1).split('')[String(res.getUTCDate() - 1).split('').length - 1]\r\n                switch (true) {\r\n                    case lastNumberDays == 1:\r\n                        daysText.nextElementSibling.innerHTML = \"день\"\r\n                        break;\r\n                    case lastNumberDays == 2 || lastNumberDays == 3 || lastNumberDays == 4:\r\n                        daysText.nextElementSibling.innerHTML = \"дня\"\r\n                        break;\r\n                    default:\r\n                        daysText.nextElementSibling.innerHTML = \"днів\";\r\n                        break;\r\n                }\r\n                hoursText.innerHTML = res.getUTCHours();\r\n                let lastNumber = String(res.getUTCHours()).split('')[String(res.getUTCHours()).split('').length - 1]\r\n\r\n                switch (true) {\r\n                    case lastNumber == 1:\r\n                        hoursText.nextElementSibling.innerHTML = \"годину\"\r\n                        break;\r\n                    case lastNumber == 2 || lastNumber == 3 || lastNumber == 4:\r\n                        hoursText.nextElementSibling.innerHTML = \"години\"\r\n                        break;\r\n                    default:\r\n                        hoursText.nextElementSibling.innerHTML = \"годин\";\r\n                        break;\r\n                }\r\n                minutesText.innerHTML = res.getUTCMinutes();\r\n\r\n                let lastNumberMinutes = String(res.getUTCMinutes()).split('')[String(res.getUTCMinutes()).split('').length - 1];\r\n                let firstNumberMinutes = String(res.getUTCMinutes()).split('')[String(res.getUTCMinutes()).split('').length - 2];\r\n\r\n                switch (true) {\r\n                    case lastNumberMinutes == 1:\r\n                        minutesText.nextElementSibling.innerHTML = \"хвилину\"\r\n                        break;\r\n                    case (lastNumberMinutes == 2 || lastNumberMinutes == 3 || lastNumberMinutes == 4) && firstNumberMinutes != 1:\r\n                        minutesText.nextElementSibling.innerHTML = \"хвилини\"\r\n                        break;\r\n                    default:\r\n                        minutesText.nextElementSibling.innerHTML = \"хвилин\";\r\n                        break;\r\n                }\r\n                secondText.innerHTML = res.getUTCSeconds();\r\n                let lastNumberSeconds = String(res.getUTCSeconds()).split('')[String(res.getUTCSeconds()).split('').length - 1];\r\n                let firstNumberSeconds = String(res.getUTCSeconds()).split('')[String(res.getUTCSeconds()).split('').length - 2];\r\n\r\n                switch (true) {\r\n                    case lastNumberSeconds == 1:\r\n                        secondText.nextElementSibling.innerHTML = \"секунду\"\r\n                        break;\r\n                    case (lastNumberSeconds == 2 || lastNumberSeconds == 3 || lastNumberSeconds == 4) && firstNumberSeconds != 1:\r\n                        secondText.nextElementSibling.innerHTML = \"секунди\"\r\n                        break;\r\n                    default:\r\n                        secondText.nextElementSibling.innerHTML = \"секунд\";\r\n                        break;\r\n                }\r\n                timeWrapperCourse.classList.remove('course-stoped');\r\n                // checkTimeText()\r\n            }\r\n\r\n        }, 1000)\r\n        $('.students-review--owl').on('changed.owl.carousel', function(e) {\r\n            if (!getMatrix) return\r\n            $('#students-review').css('background-position-x', getMatrix(document.querySelector(\".students-review--owl .owl-stage\")).x / 6);\r\n\r\n        });\r\n        // document.querySelectorAll('.time-wrapper--number').forEach(item => {\r\n        //     let lastNumber = item.innerHTML.split('')[item.innerHTML.split('').length - 1]\r\n        //     let lastSymbol = item.nextElementSibling.innerHTML.split('')[item.nextElementSibling.innerHTML.split('').length - 1]\r\n        //     if (!item.classList.contains('days')) {\r\n\r\n        //         switch (true) {\r\n        //             case lastNumber == 1:\r\n        //                 if (lastSymbol == \"н\") {\r\n        //                     item.nextElementSibling.innerHTML = item.nextElementSibling.innerHTML + \"а\"\r\n        //                 } else {\r\n        //                     let defaultStr = item.nextElementSibling.innerHTML.split('');\r\n        //                     defaultStr.pop()\r\n        //                     item.nextElementSibling.innerHTML = defaultStr\r\n        //                 }\r\n\r\n        //                 break;\r\n        //             case lastNumber == 2 || lastNumber == 3 || lastNumber == 4:\r\n        //                 if (lastSymbol == \"н\" || lastSymbol == \"д\") {\r\n        //                     item.nextElementSibling.innerHTML = item.nextElementSibling.innerHTML + \"и\"\r\n        //                 } else {\r\n        //                     let defaultStr = item.nextElementSibling.innerHTML.split('');\r\n        //                     defaultStr.pop()\r\n        //                     item.nextElementSibling.innerHTML = defaultStr.join('')\r\n        //                 }\r\n        //                 break\r\n        //         }\r\n\r\n        //     }\r\n        // })\r\n\r\n        $(function() {\r\n\r\n            $(\"#courses-mobile-menu-advanced\").swipe({\r\n                swipe: function(event, direction, distance, duration, fingerCount, fingerData) {\r\n                    // console.log(event, distance, duration, fingerCount, fingerData)\r\n                    body.classList.add('swipe')\r\n                    if (direction == 'down') {\r\n                        $(this).animate({\r\n                            bottom: '-140px'\r\n                        });\r\n\r\n                    }\r\n                    if (direction == 'up') {\r\n                        $(this).animate({\r\n                            bottom: '0'\r\n                        });\r\n\r\n                    }\r\n                },\r\n                threshold: 0\r\n            });\r\n\r\n        });\r\n\r\n        function scrollTo(hash) {\r\n            location.hash = hash;\r\n        }\r\n        document.querySelectorAll('#courses-mobile-menu-advanced a').forEach(item => {\r\n            item.addEventListener('touchstart', function() {\r\n                $('#courses-mobile-menu-advanced').animate({\r\n                    bottom: '-140px'\r\n                });\r\n                body.classList.remove('swipe')\r\n                scrollTo(item.getAttribute('href'))\r\n            })\r\n        })\r\n        document.addEventListener('touchstart', function(event) {\r\n            if (!document.getElementById('courses-mobile-menu-advanced').contains(event.target)) {\r\n                $('#courses-mobile-menu-advanced').animate({\r\n                    bottom: '-140px'\r\n                });\r\n                body.classList.remove('swipe')\r\n            } else {\r\n                body.classList.add('swipe');\r\n            }\r\n        })\r\n    }\r\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;