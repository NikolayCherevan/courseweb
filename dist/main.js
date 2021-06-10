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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    let body = document.querySelector('body');\n    let burger = document.querySelector('.burger--btn')\n    let bgOverlay = document.getElementById('bg-overlay');\n    let modileMenuDropdown = document.querySelector('.header--dropdown--modile');\n    let header = document.querySelector('.header');\n    let mobileMenu = document.querySelector('.mobile-menu');\n    let dropdowns = document.querySelectorAll('.dropdown');\n    let trailer = document.querySelector(\".trailer\");\n    let headerDeskMenu = document.querySelector(\".header--desk-menu\");\n    let openDropdownAreas = document.querySelectorAll(\".uk-dropdown\");\n    let headerPadding = document.querySelector(\".header-padding\");\n\n    let counter = 0;\n\n    //init niceselect\n\n    $('.nice-select').niceSelect();\n\n    //add orange bg to mobile menu\n    mobileMenu.addEventListener(\"scroll\", addOrangeFixedHeader);\n\n    //fixed  dropdown while scrolling\n    window.addEventListener(\"scroll\", () => {\n\n        doHeaderDropdownFixed(modileMenuDropdown)\n        doHeaderDropdownFixed(header)\n        doHeaderDropdownFixed(headerDeskMenu)\n    });\n\n\n    //add overlay for dropdown header\n    dropdowns.forEach((item) => {\n        addOverlay(item)\n    })\n\n\n\n    //first tab active\n    if (document.getElementById(\"courses\")) {\n        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')\n    }\n\n\n    //burger logic\n    burger.addEventListener('click', function() {\n        this.classList.toggle('open');\n        body.classList.toggle('__nav-open');\n        if (header.classList.contains('orange-sticky')) {\n            header.classList.remove('orange-sticky')\n            mobileMenu.scrollTo(0, 0)\n        }\n    })\n\n\n    function doHeaderDropdownFixed(element) {\n        let scroll = window.pageYOffset;\n        if (scroll >= 150) {\n            element.classList.add('sticky');\n            headerPadding.classList.add('active');\n        } else {\n            element.classList.remove('sticky')\n            headerPadding.classList.remove('active');\n        }\n    }\n\n    function addOrangeFixedHeader() {\n        header.classList.add('orange-sticky')\n    }\n\n\n    //check if scroll on body needed\n    function cancelScrollCheck() {\n        if (bgOverlay.classList.contains('active') || body.classList.contains('__nav-open')) {\n            body.style.overflow = 'hidden';\n        } else {\n            body.style.overflow = 'auto';\n        }\n    }\n\n\n    //add overlay function\n    function addOverlay(elem) {\n        elem.addEventListener('click', function() {\n            bgOverlay.classList.add('active')\n            let dropdown = UIkit.dropdown('dropdown');\n            if(!this.classList.contains('uk-accordion-title')) {\n                //UIkit.util.on(document, 'beforeshow', dropdown, callback)\n                //function callback () {\n                //    bgOverlay.classList.add('active')\n                //}\n                UIkit.util.on(document, 'beforehide', dropdown, callback2)\n                function callback2 () {\n                    bgOverlay.classList.remove('active')\n                }\n            }\n        })\n\n    }\n\n    //bgoverlayclick\n    bgOverlay.addEventListener('click', function() {\n        stopVideo();\n        trailer.classList.remove(\"active\");\n        bgOverlay.classList.remove('active')\n        document.querySelector('.video-iframe--banner').style.cssText = \"display: block\";\n    });\n\n    //tabs logic\n\n    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {\n\n        item.addEventListener('click', function(event) {\n            document.querySelectorAll('.courses--tabs--title').forEach((item) => {\n                item.classList.remove('active-title')\n            })\n            document.querySelectorAll('.courses--tabs--content').forEach((item) => {\n                item.classList.remove('active')\n            })\n            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');\n            this.classList.add('active-title')\n        })\n    })\n\n    //tabs contains items\n    var prevEl = null;\n    $(\".courses--tabs--title\").each(function(index) {\n        $(this).on('click', function() {\n            if (index === 0) {\n                console.log(index)\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-1000' }, 300);\n                return\n            }\n            if (prevEl < index) {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=130' }, 300);\n            } else if (prevEl - 1 < index) {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=170' }, 300);\n            } else {\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-=150' }, 300);\n            }\n            prevEl = index;\n        })\n    })\n\n    //owlinit\n    initTeamSlider()\n\n    function initTeamSlider() {\n        $('.owl-carousel--team').owlCarousel({\n            onInitialized: addDotButtonText,\n            onResized: addDotButtonText,\n            stagePadding: 50,\n            loop: true,\n            margin: 10,\n            nav: false,\n            lazyLoad: true,\n            responsive: {\n                0: {\n                    items: 1\n                },\n                600: {\n                    items: 3\n                },\n                1000: {\n                    items: 5\n                }\n            }\n        })\n    }\n\n    $('.owl-carousel--hero').owlCarousel({\n        onInitialized: addDotButtonText,\n        onResized: addDotButtonText,\n        // stagePadding: 50,\n        autoplay: true,\n        slideTransition: 'linear',\n        autoplayTimeout: 7000,\n        autoplaySpeed: 7000,\n        loop: true,\n        margin: 60,\n        nav: true,\n        dots: false,\n        center: true,\n        lazyLoad: true,\n        responsive: {\n            0: {\n                items: 1\n            },\n            600: {\n                items: 3,\n                margin: 150,\n            },\n            1500: {\n                items: 5,\n                margin: 0,\n\n            }\n        }\n    })\n\n    function getRandomInt(max) {\n        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;\n        return Math.floor(Math.random() * max) * plusOrMinus;\n    }\n\n    const myElement = document.querySelector('.owl-stage');\n    for (let i = 0; i < myElement.children.length; i++) {\n        //if(!myElement.children[i].classList.contains('cloned')) {\n        myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`\n            // }\n    }\n\n    function addDotButtonText() {\n        $('.owl-dot').each(function() {\n            $(this).find('.offscreen').remove();\n            let idx = $(this).index() + 1;\n            $(this).append('<span class=\"offscreen\">Go to slide ' + idx + '</span>');\n        });\n    }\n    $('.hero---scroll-to-courses a').click(function(e) {\n        $('html, body').animate({\n            scrollTop: $('#registration').offset().top - 30\n        }, 'slow');\n    });\n\n\n    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n    if (viewportWidth >= 992) {\n        destroyUiKitSlider();\n        $('.owl-carousel--team').trigger('destroy.owl.carousel')\n    } else {\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\n            UIkit.slider(item);\n        })\n        initTeamSlider()\n    }\n\n    window.addEventListener('resize', function() {\n        viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n        if (viewportWidth >= 992) {\n            destroyUiKitSlider();\n            $('.owl-carousel--team').trigger('destroy.owl.carousel')\n        } else {\n            document.querySelectorAll('.uk-slider').forEach((item, index) => {\n                UIkit.slider(item);\n            })\n            initTeamSlider()\n        }\n    }, false);\n\n\n    function destroyUiKitSlider() {\n\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\n            let slider = UIkit.slider(item);\n            slider.$destroy();\n        })\n    }\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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