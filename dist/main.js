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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    let body = document.querySelector('body');\n    let burger = document.querySelector('.burger--btn')\n    let bgOverlay = document.getElementById('bg-overlay');\n    let modileMenuDropdown = document.querySelector('.header--dropdown--modile');\n    let header = document.querySelector('.header');\n    let mobileMenu = document.querySelector('.mobile-menu');\n    let dropdowns = document.querySelectorAll('.dropdown');\n    let trailer = document.querySelector(\".trailer\");\n    let headerDeskMenu = document.querySelector(\".header--desk-menu\");\n    let headerPadding = document.querySelector(\".header-padding\");\n    let coordinates = document.querySelectorAll(\".item-coords\");\n    let anchor = document.querySelector(\".hero---scroll-to-courses a\");\n    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n\n    //TweenMax lib init\n    //play button magnetic on team section\n    const element = document.querySelector(\".cursor\");\n    const target = document.querySelector(\".target\");\n\n\n    class Cursor {\n        constructor(el, target, text) {\n            this.el = el;\n            this.bind();\n        }\n\n        bind() {\n            document.addEventListener(\"mousemove\", this.move.bind(this), false);\n        }\n\n        move(e) {\n            const cursorPosition = {\n                left: e.clientX,\n                top: e.clientY\n            };\n            document.querySelectorAll(\".target\").forEach((single) => {\n                const triggerDistance = single.getBoundingClientRect().width;\n\n                const targetPosition = {\n                    left: single.getBoundingClientRect().left +\n                        single.getBoundingClientRect().width / 2,\n                    top: single.getBoundingClientRect().top +\n                        single.getBoundingClientRect().height / 2\n                };\n                const distance = {\n                    x: targetPosition.left - cursorPosition.left,\n                    y: targetPosition.top - cursorPosition.top\n                };\n\n                const angle = Math.atan2(distance.x, distance.y);\n                const hypotenuse = Math.sqrt(\n                    distance.x * distance.x + distance.y * distance.y\n                );\n                if (hypotenuse < triggerDistance) {\n                    // Nikhil - look at this code to adjust the round cursor area sizing\n                    TweenMax.to(this.el, 0.2, {\n                        left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,\n                        top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,\n\n                    });\n                    TweenMax.to(single.querySelector(\".text\"), 0.2, {\n                        x: -((Math.sin(angle) * hypotenuse) / 2),\n                        y: -((Math.cos(angle) * hypotenuse) / 2)\n                    });\n                } else {\n                    TweenMax.to(this.el, 0.2, {\n                        left: cursorPosition.left,\n                        top: cursorPosition.top,\n                    });\n\n                    TweenMax.to(single.querySelector(\".text\"), 0.2, {\n                        x: 0,\n                        y: 0\n                    });\n                }\n            });\n        }\n    }\n\n    //init niceselect\n\n    $('.nice-select').niceSelect();\n\n    //add orange bg to mobile menu\n    mobileMenu.addEventListener(\"scroll\", addOrangeFixedHeader);\n\n    //fixed  dropdown while scrolling\n    window.addEventListener(\"scroll\", () => {\n\n        doHeaderDropdownFixed(modileMenuDropdown)\n        doHeaderDropdownFixed(header)\n        doHeaderDropdownFixed(headerDeskMenu)\n    });\n\n\n    //add overlay for all dropdowns header\n    dropdowns.forEach((item) => {\n        addOverlay(item)\n    })\n\n\n    //add overlay function\n    function addOverlay(elem) {\n        elem.addEventListener('click', function() {\n            bgOverlay.classList.toggle('active')\n        })\n\n    }\n\n    //first tab active #courses section\n    if (document.getElementById(\"courses\")) {\n        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')\n    }\n\n\n    //burger logic\n    burger.addEventListener('click', function() {\n        this.classList.toggle('open');\n        body.classList.toggle('__nav-open');\n        if (header.classList.contains('orange-sticky')) {\n            header.classList.remove('orange-sticky')\n            mobileMenu.scrollTo(0, 0)\n        }\n    })\n\n\n\n    //sticky header logic\n    function doHeaderDropdownFixed(element) {\n        let scroll = window.pageYOffset;\n        if (scroll >= 150) {\n            element.classList.add('sticky');\n            headerPadding.classList.add('active');\n        } else {\n            element.classList.remove('sticky')\n            headerPadding.classList.remove('active');\n        }\n    }\n\n    function addOrangeFixedHeader() {\n        header.classList.add('orange-sticky')\n    }\n\n\n    //slidercustom\n\n    let howManyElementsWillBeChanges = 5; //k-number how manu elements will be change\n    let defaultWidthImage = `60px`;\n    let mainImageScaleSize = 27; //k-number main image size(more-larger)\n    let siblingImageScaleSize = 32; //k-number sibling image size(more-larger)\n    let counterMain = null;\n    let counterNext = null;\n    let counterPrev = null;\n    let centerCoordinatesOfItem = [];\n\n    function initBubleSlider() {\n        let teemSection = document.getElementById(\"team\");\n        if (teemSection.classList.contains('slider_inited')) return;\n        teemSection.classList.add('slider_inited');\n        coordinates.forEach(item => {\n            centerCoordinatesOfItem.push(item.offsetLeft + item.offsetWidth / 2);\n            item.style.width = defaultWidthImage;\n\n\n        })\n\n        let arrayOfElement = centerCoordinatesOfItem.slice()\n        onmousemove = function(e) {\n            let x = window.innerWidth;\n\n                e.clientX - window.innerWidth / 2 > 0 ? x = e.clientX - 100 : x = e.clientX - 200\n        \n            let closest = centerCoordinatesOfItem.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))[0]\n            let indexOfGotScale = arrayOfElement.indexOf(closest);\n            let arrOfFutureScaling1 = []\n            let arrOfFutureScaling2 = []\n\n            coordinates.forEach((item, index) => {\n\n                item.classList.remove('active')\n                if (index === indexOfGotScale) {\n                    doScaleMainEl(index)\n                } else if (index > indexOfGotScale) {\n                    arrOfFutureScaling1.push(index)\n                } else {\n                    arrOfFutureScaling2.push(index)\n                }\n            })\n            doScaleNextEl(arrOfFutureScaling1)\n            doScalePrevEl(arrOfFutureScaling2)\n        }\n\n\n\n        function doScaleMainEl(arrayOfElements) {\n            counterMain = 10\n            coordinates[arrayOfElements].style.width = `${mainImageScaleSize * counterMain}px`;\n            coordinates[arrayOfElements].classList.add('active')\n        }\n\n\n        function doScaleNextEl(arrayOfElements) {\n            counterNext = howManyElementsWillBeChanges\n            arrayOfElements.forEach((item, index) => {\n                if (counterNext > 2) {\n                    counterNext--;\n                    siblingImageScaleSize * counterNext > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterNext}px` : coordinates[item].style.width = defaultWidthImage\n                }\n            })\n\n        }\n\n\n        function doScalePrevEl(arrayOfElements) {\n            counterPrev = howManyElementsWillBeChanges;\n            arrayOfElements.reverse().forEach((item, index) => {\n                if (counterPrev > 2) {\n                    counterPrev--;\n                    siblingImageScaleSize * counterPrev > 100 ? coordinates[item].style.width = `${siblingImageScaleSize * counterPrev}px` : coordinates[item].style.width = defaultWidthImage\n                }\n\n            })\n        }\n    }\n\n\n\n\n    //bgoverlayclick\n    bgOverlay.addEventListener('click', function() {\n        stopVideo();\n        trailer.classList.remove(\"active\");\n        bgOverlay.classList.remove('active');\n        bgOverlay.classList.remove('video')\n        document.querySelector('.video-iframe--banner').style.cssText = \"display: block\";\n    });\n\n    //tabs logic\n\n    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {\n\n        item.addEventListener('click', function(event) {\n            document.querySelectorAll('.courses--tabs--title').forEach((item) => {\n                item.classList.remove('active-title')\n            })\n            document.querySelectorAll('.courses--tabs--content').forEach((item) => {\n                item.classList.remove('active')\n            })\n            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');\n            this.classList.add('active-title')\n        })\n    })\n\n    //tabs contains items\n    var prevEl = null;\n    $(\".courses--tabs--title\").each(function(index) {\n        $(this).on('click', function() {\n            if (index === 0) {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-1000' }, 300);\n                return\n            }\n            if (prevEl < index) {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=130' }, 300);\n            } else if (prevEl - 1 < index) {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=170' }, 300);\n            } else {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-=150' }, 300);\n            }\n            prevEl = index;\n        })\n    })\n\n    //owlinit on team\n    initTeamSlider()\n\n    function initTeamSlider() {\n        $('.owl-carousel--team').owlCarousel({\n            onInitialized: addDotButtonText,\n            onResized: addDotButtonText,\n            stagePadding: 50,\n            loop: true,\n            margin: 10,\n            nav: false,\n            lazyLoad: true,\n            responsive: {\n                0: {\n                    items: 1\n                },\n                600: {\n                    items: 3\n                },\n                1000: {\n                    items: 5\n                }\n            }\n        })\n    }\n\n    //init owl on hero\n    $('.owl-carousel--hero').owlCarousel({\n        onInitialized: addDotButtonText,\n        onResized: addDotButtonText,\n        // stagePadding: 50,\n        autoplay: true,\n        slideTransition: 'linear',\n        autoplayTimeout: 7000,\n        autoplaySpeed: 7000,\n        loop: true,\n        margin: 60,\n        nav: true,\n        dots: false,\n        center: true,\n        lazyLoad: true,\n        responsive: {\n            0: {\n                items: 1,\n                autoplay: false\n            },\n            600: {\n                items: 2,\n                margin: 0,\n            },\n            800: {\n                items: 3,\n                margin: 0,\n            },\n            1100: {\n                items: 4,\n                margin: 0,\n\n            },\n            1500: {\n                items: 5,\n                margin: 0,\n\n            }\n        }\n    })\n\n\n\n    //random rotate image\n    function getRandomInt(max) {\n        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;\n        return Math.floor(Math.random() * max) * plusOrMinus;\n    }\n\n\n    const myElement = document.querySelector('.owl-stage');\n    for (let i = 0; i < myElement.children.length; i++) {\n        myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`\n    }\n\n\n\n\n\n    //add event for anchor home\n    function smoothScrollingTo(elem) {\n        elem.addEventListener(\"click\", clickHandler);\n    }\n\n    function clickHandler(e) {\n        e.preventDefault();\n        const href = this.getAttribute(\"href\");\n        const offsetTop = document.querySelector(href).offsetTop;\n        scroll({\n            top: offsetTop,\n            behavior: \"smooth\"\n        });\n    }\n    smoothScrollingTo(anchor)\n\n\n    //check sliders vith viewport width and destroy or init it\n\n    function destroyUiKitSlider() {\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\n            let slider = UIkit.slider(item);\n            slider.$destroy();\n        })\n    }\n    if (viewportWidth >= 992) {\n\n        destroyUiKitSlider();\n        $('.owl-carousel--team').trigger('destroy.owl.carousel');\n        initBubleSlider();\n        const cursor = new Cursor(element, target);\n    } else {\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\n            UIkit.slider(item);\n        })\n        initTeamSlider()\n    }\n    window.addEventListener('resize', function() {\n        viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n        if (viewportWidth >= 992) {\n            destroyUiKitSlider();\n            $('.owl-carousel--team').trigger('destroy.owl.carousel');\n            initBubleSlider();\n            const cursor = new Cursor(element, target);\n        } else {\n            document.querySelectorAll('.uk-slider').forEach((item, index) => {\n                UIkit.slider(item);\n            })\n            initTeamSlider()\n        }\n    }, false);\n\n\n\n\n\n    //passive events seo\n\n    jQuery.event.special.touchstart = {\n        setup: function(_, ns, handle) {\n            this.addEventListener(\"touchstart\", handle, { passive: !ns.includes(\"noPreventDefault\") });\n        }\n    };\n    jQuery.event.special.touchmove = {\n        setup: function(_, ns, handle) {\n            this.addEventListener(\"touchmove\", handle, { passive: !ns.includes(\"noPreventDefault\") });\n        }\n    };\n    jQuery.event.special.wheel = {\n        setup: function(_, ns, handle) {\n            this.addEventListener(\"wheel\", handle, { passive: true });\n        }\n    };\n    jQuery.event.special.mousewheel = {\n        setup: function(_, ns, handle) {\n            this.addEventListener(\"mousewheel\", handle, { passive: true });\n        }\n    };\n\n    //owl dots btn fix seo \n\n\n    function addDotButtonText() {\n        $('.owl-dot').each(function() {\n            $(this).find('.offscreen').remove();\n            let idx = $(this).index() + 1;\n            $(this).append('<span class=\"offscreen\">Go to slide ' + idx + '</span>');\n        });\n    }\n\n\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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