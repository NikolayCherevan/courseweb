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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    let body = document.querySelector('body');\r\n    let burger = document.querySelector('.burger--btn')\r\n    let bgOverlay = document.getElementById('bg-overlay');\r\n    let modileMenuDropdown = document.querySelector('.header--dropdown--modile');\r\n    let header = document.querySelector('.header');\r\n    let mobileMenu = document.querySelector('.mobile-menu');\r\n    let dropdowns = document.querySelectorAll('.dropdown');\r\n    let trailer = document.querySelector(\".trailer\");\r\n    let headerDeskMenu = document.querySelector(\".header--desk-menu\");\r\n    let openDropdownAreas = document.querySelectorAll(\".uk-dropdown\");\r\n\r\n\r\n    let counter = 0;\r\n\r\n    //init niceselect\r\n\r\n    $('.nice-select').niceSelect();\r\n\r\n    //add orange bg to mobile menu\r\n    mobileMenu.addEventListener(\"scroll\", addOrangeFixedHeader);\r\n\r\n    //fixed  dropdown while scrolling\r\n    window.addEventListener(\"scroll\", () => {\r\n\r\n        doHeaderDropdownFixed(modileMenuDropdown)\r\n        doHeaderDropdownFixed(header)\r\n        doHeaderDropdownFixed(headerDeskMenu)\r\n    });\r\n\r\n\r\n    //add overlay for dropdown header\r\n    dropdowns.forEach((item) => {\r\n        addOverlay(item)\r\n    })\r\n\r\n\r\n\r\n    //first tab active\r\n    if (document.getElementById(\"courses\")) {\r\n        document.querySelectorAll('.courses--tabs--title')[0].classList.add('active-title')\r\n    }\r\n\r\n\r\n    //burger logic\r\n    burger.addEventListener('click', function() {\r\n        this.classList.toggle('open');\r\n        body.classList.toggle('__nav-open');\r\n        cancelScrollCheck()\r\n        if (header.classList.contains('orange-sticky')) {\r\n            header.classList.remove('orange-sticky')\r\n            mobileMenu.scrollTo(0, 0)\r\n        }\r\n    })\r\n\r\n\r\n    function doHeaderDropdownFixed(element) {\r\n        let scroll = window.pageYOffset;\r\n        if (scroll >= 150) {\r\n            element.classList.add('sticky');\r\n        } else {\r\n            element.classList.remove('sticky')\r\n        }\r\n    }\r\n\r\n    function addOrangeFixedHeader() {\r\n        header.classList.add('orange-sticky')\r\n    }\r\n\r\n\r\n    //check if scroll on body needed\r\n    function cancelScrollCheck() {\r\n        if (bgOverlay.classList.contains('active') || body.classList.contains('__nav-open')) {\r\n            body.style.overflow = 'hidden';\r\n        } else {\r\n            body.style.overflow = 'auto';\r\n        }\r\n    }\r\n\r\n\r\n    //add overlay function\r\n    function addOverlay(elem) {\r\n        elem.addEventListener('click', function() {\r\n            bgOverlay.classList.add('active');\r\n            if (this.nextSibling.nextElementSibling.classList.contains('uk-open')) {\r\n                bgOverlay.classList.remove('active');\r\n            }\r\n            // cancelScrollCheck()\r\n        })\r\n\r\n    }\r\n    //bgoverlayclick\r\n    bgOverlay.addEventListener('click', function() {\r\n        stopVideo();\r\n        trailer.classList.remove(\"active\");\r\n        bgOverlay.classList.remove('active')\r\n        cancelScrollCheck()\r\n        document.querySelector('.video-iframe--banner').style.cssText = \"display: block\";\r\n    });\r\n\r\n    //tabs logic\r\n\r\n    document.querySelectorAll('.courses--tabs--title').forEach((item, index) => {\r\n\r\n        item.addEventListener('click', function(event) {\r\n            document.querySelectorAll('.courses--tabs--title').forEach((item) => {\r\n                item.classList.remove('active-title')\r\n            })\r\n            document.querySelectorAll('.courses--tabs--content').forEach((item) => {\r\n                item.classList.remove('active')\r\n            })\r\n            document.querySelectorAll('.courses--tabs--content')[index].classList.add('active');\r\n            this.classList.add('active-title')\r\n        })\r\n    })\r\n\r\n    //tabs contains items\r\n    var prevEl = null;\r\n    $(\".courses--tabs--title\").each(function(index) {\r\n        $(this).on('click', function() {\r\n            if (index === 0) {\r\n                console.log(index)\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-1000' }, 300);\r\n                return\r\n            }\r\n            if (prevEl < index) {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=130' }, 300);\r\n            } else if (prevEl - 1 < index) {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '+=170' }, 300);\r\n            } else {\r\n                $(\".uk-tab-bottom\").animate({ scrollLeft: '-=150' }, 300);\r\n            }\r\n            prevEl = index;\r\n        })\r\n    })\r\n\r\n    //owlinit\r\n    initTeamSlider()\r\n\r\n    function initTeamSlider() {\r\n        $('.owl-carousel--team').owlCarousel({\r\n            onInitialized: addDotButtonText,\r\n            onResized: addDotButtonText,\r\n            stagePadding: 50,\r\n            loop: true,\r\n            margin: 10,\r\n            nav: false,\r\n            lazyLoad: true,\r\n            responsive: {\r\n                0: {\r\n                    items: 1\r\n                },\r\n                600: {\r\n                    items: 3\r\n                },\r\n                1000: {\r\n                    items: 5\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    $('.owl-carousel--hero').owlCarousel({\r\n        onInitialized: addDotButtonText,\r\n        onResized: addDotButtonText,\r\n        // stagePadding: 50,\r\n        autoplay: true,\r\n        slideTransition: 'linear',\r\n        autoplayTimeout: 7000,\r\n        autoplaySpeed: 7000,\r\n        loop: true,\r\n        margin: 60,\r\n        nav: true,\r\n        dots: false,\r\n        center: true,\r\n        lazyLoad: true,\r\n        responsive: {\r\n            0: {\r\n                items: 1\r\n            },\r\n            600: {\r\n                items: 3,\r\n                margin: 150,\r\n            },\r\n            1500: {\r\n                items: 5,\r\n                margin: 0,\r\n\r\n            }\r\n        }\r\n    })\r\n\r\n    function getRandomInt(max) {\r\n        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;\r\n        return Math.floor(Math.random() * max) * plusOrMinus;\r\n    }\r\n\r\n    const myElement = document.querySelector('.owl-stage');\r\n    for (let i = 0; i < myElement.children.length; i++) {\r\n        //if(!myElement.children[i].classList.contains('cloned')) {\r\n        myElement.children[i].children[0].children[0].children[1].style.transform = `rotate(${getRandomInt(15)}deg)`\r\n            // }\r\n    }\r\n\r\n    function addDotButtonText() {\r\n        $('.owl-dot').each(function() {\r\n            $(this).find('.offscreen').remove();\r\n            let idx = $(this).index() + 1;\r\n            $(this).append('<span class=\"offscreen\">Go to slide ' + idx + '</span>');\r\n        });\r\n    }\r\n    $('.hero---scroll-to-courses a').click(function(e) {\r\n        $('html, body').animate({\r\n            scrollTop: $('#registration').offset().top - 30\r\n        }, 'slow');\r\n    });\r\n\r\n\r\n    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;\r\n    if (viewportWidth >= 992) {\r\n        destroyUiKitSlider();\r\n        $('.owl-carousel--team').trigger('destroy.owl.carousel')\r\n    } else {\r\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n            UIkit.slider(item);\r\n        })\r\n        initTeamSlider()\r\n    }\r\n\r\n    window.addEventListener('resize', function() {\r\n        bgOverlay.classList.remove('active');\r\n        viewportWidth = window.innerWidth || document.documentElement.clientWidth;\r\n        if (viewportWidth >= 992) {\r\n            destroyUiKitSlider();\r\n            $('.owl-carousel--team').trigger('destroy.owl.carousel')\r\n        } else {\r\n            document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n                UIkit.slider(item);\r\n            })\r\n            initTeamSlider()\r\n        }\r\n    }, false);\r\n\r\n\r\n    function destroyUiKitSlider() {\r\n\r\n        document.querySelectorAll('.uk-slider').forEach((item, index) => {\r\n            let slider = UIkit.slider(item);\r\n            slider.$destroy();\r\n        })\r\n    }\r\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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