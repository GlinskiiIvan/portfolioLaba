/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const header = document.querySelector('header');\nconst headerBottom = document.querySelector('.header-bottom');\nconst headerHeight = header.clientHeight;\nconst headerBottomHeight = headerBottom.clientHeight;\n\ndocument.onscroll = () => {\n    let scroll = window.scrollY;\n    console.log(scroll);\n    if(scroll >= headerHeight) {\n        headerBottom.classList.add('fixed')\n    } else {\n        headerBottom.classList.remove('fixed')\n    }\n}\n\nconst menuIcon = document.querySelector('.menu-icon');\nconst navbarList = document.querySelector('.navbar');\nconst body = document.querySelector('body');\nif(menuIcon) {\n    menuIcon.addEventListener(\"click\", function(e) {\n        body.classList.toggle('_lock');\n        menuIcon.classList.toggle('_active');\n        navbarList.classList.toggle('_active');\n        document.querySelector('.patch').classList.toggle('_active');\n    })\n}\n\n// прокрутка к секции\n\nconst menuLinks = document.querySelectorAll('.navbar__list--link[data-goto]');\nif(menuLinks.length > 0) {\n    menuLinks.forEach(link => {\n        link.addEventListener(\"click\", onMenuLinkClick);\n    })\n\n    function onMenuLinkClick(e) {\n        const link = e.target;\n        if(link.dataset.goto && document.querySelector(link.dataset.goto)) {\n            const gotoBlock = document.querySelector(link.dataset.goto);\n            const gotoBlockPosition = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header-bottom').offsetHeight;\n\n            if(menuIcon.classList.contains('_active')) {\n                body.classList.remove('_lock');\n                menuIcon.classList.remove('_active');\n                navbarList.classList.remove('_active'); \n                document.querySelector('.patch').classList.remove('_active');\n            }\n\n            window.scrollTo({\n                top: gotoBlockPosition,\n                behavior: \"smooth\"\n            })\n            e.preventDefault();\n        }\n    }\n}\n\n// accordion\n// document.querySelectorAll('.blog__accordion--header').forEach(el => {\n//     el.addEventListener('click', () => {\n//         const content = el.nextElementSibling;\n//         if(content.style.maxHeight) {\n//             document.querySelectorAll('.blog__accordion--content').forEach(el => el.style.maxHeight = null);\n//         } else {\n//             document.querySelectorAll('.blog__accordion--content').forEach(el => el.style.maxHeight = null);\n//             content.style.maxHeight = content.scrollHeight+'px';\n//         }\n//     })\n// })\n\ndocument.querySelectorAll('.blog__accordion--header').forEach(el => {\n    el.addEventListener('click', () => {\n        const content = el.nextElementSibling;\n        if(el.classList.contains('_active')) {\n            el.classList.remove('_active');\n            content.classList.remove('_active');\n            document.querySelectorAll('.blog__accordion--content').forEach(el => el.style.maxHeight = null);\n        } else {\n            document.querySelectorAll('.blog__accordion--header').forEach(el => el.classList.remove('_active'));\n            document.querySelectorAll('.blog__accordion--content').forEach(el => el.classList.remove('_active'));\n            content.previousElementSibling.classList.add('_active');\n            content.classList.add('_active');\n            document.querySelectorAll('.blog__accordion--content').forEach(el => el.style.maxHeight = null);\n            content.style.maxHeight = content.scrollHeight+'px';            \n        }\n    })\n})\n\n//# sourceURL=webpack://CarePoint/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;