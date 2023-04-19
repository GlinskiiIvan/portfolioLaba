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

eval("// меню\r\nconsole.log(\"aaaa\");\r\nconst menuIcon = document.querySelector('.menu-icon');\r\nconst navbarList = document.querySelector('.navbar__list');\r\nconst body = document.querySelector('body');\r\nif(menuIcon) {\r\n    menuIcon.addEventListener(\"click\", function(e) {\r\n        body.classList.toggle('_lock');\r\n        menuIcon.classList.toggle('_active');\r\n        navbarList.classList.toggle('_active');\r\n    })\r\n}\r\n\r\n// фиксация меню и появление кнопки наверх\r\n\r\nconst header = document.querySelector('header');\r\nconst headerHeight = header.clientHeight;\r\nconst arrowUp = document.querySelector('.toUp');\r\nconst bannerHight = document.querySelector('.banner').clientHeight;\r\n\r\ndocument.onscroll = () => {\r\n    let scroll = window.scrollY;\r\n    if(scroll >= headerHeight) {\r\n        header.classList.add('fixed')\r\n    } else {\r\n        header.classList.remove('fixed')\r\n    }\r\n    if(scroll >= bannerHight) {\r\n        arrowUp.classList.add('_active');\r\n    } else {\r\n        arrowUp.classList.remove('_active');\r\n    }\r\n}\r\n\r\n// прокрутка к секции\r\n\r\nconst menuLinks = document.querySelectorAll('.navbar__item--link[data-goto]');\r\nif(menuLinks.length > 0) {\r\n    menuLinks.forEach(link => {\r\n        link.addEventListener(\"click\", onMenuLinkClick);\r\n    })\r\n\r\n    function onMenuLinkClick(e) {\r\n        const link = e.target;\r\n        if(link.dataset.goto && document.querySelector(link.dataset.goto)) {\r\n            const gotoBlock = document.querySelector(link.dataset.goto);\r\n            const gotoBlockPosition = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\r\n\r\n            if(menuIcon.classList.contains('_active')) {\r\n                body.classList.remove('_lock');\r\n                menuIcon.classList.remove('_active');\r\n                navbarList.classList.remove('_active');                \r\n            }\r\n\r\n            window.scrollTo({\r\n                top: gotoBlockPosition,\r\n                behavior: \"smooth\"\r\n            })\r\n            e.preventDefault();\r\n        }\r\n    }\r\n}\r\n\r\n// фильр работ\r\nconst worksItem = document.querySelectorAll('.works__item');\r\n\r\nconst filterList = document.querySelector('.filter');\r\nfilterList.addEventListener('click', (event) => {\r\n    const filterItem = event.target.tagName.toLowerCase();\r\n\r\n    if(filterItem !== 'li') return false;\r\n\r\n    filterList.querySelectorAll('li').forEach(element => {\r\n        element.classList.remove('active')\r\n    })\r\n    event.target.classList.add('active')\r\n\r\n    const filterType = event.target.dataset.type;\r\n\r\n    worksItem.forEach(element => {\r\n        if(element.dataset.type !== filterType && filterType !== 'all') {\r\n            element.classList.add('hide')\r\n        } else {\r\n            element.classList.remove('hide')\r\n        }\r\n    });\r\n})\r\n\r\n\n\n//# sourceURL=webpack://gulp4-starter/./src/js/main.js?");

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

;(function() {
  const body = document.querySelector('body');

  const closestsAttr = (item, attr) => {
    let node = item;
    
    while(node) {
      const attrValue = node.getAttribute(attr);
      if(attrValue) {
        return attrValue;
      }
      node = node.parentElement;
    }

    return null;
  };

  const closestsItemByClass = (item, className) => {
    let node = item;
    
    while(node) {
      if(node.classList.contains(className)) {
        return node;
      }
      node = node.parentElement;
    }

    return null;
  };

  const toggleScroll = () => {
    body.classList.toggle('_lock');
  };

  const showPopup = (popup) => {
    popup.classList.add('visible');
    toggleScroll();
  };

  const closePopup = (popup) => {
    popup.classList.remove('visible');
    toggleScroll();
  };

  body.addEventListener('click', (e) => {
    const target = e.target;
    const popupClass = closestsAttr(target, 'data-popup');

    e.preventDefault();

    const popup = document.querySelector(`.${popupClass}`);
    if(popup) showPopup(popup);

    console.log(popupClass);
    console.log(popup);
  })

  body.addEventListener('keydown', (e) => {
    if(e.keyCode !== 27) {
      return;
    }

    const popup = document.querySelector('.popup.visible');
    if(popup) closePopup(popup);
  })

  body.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('popup__btnClose') || target.classList.contains('popup')) {
      const popup = closestsItemByClass(target, 'popup');
      closePopup(popup);
    }
  })
})();