/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Webpack\n// require('../css/main.css');\n\n// Console Output for Dependencies Tests\nif (window.jQuery) {\n    console.log('Load jQuery: SUCCESS');\n} else {\n    console.log('Load jQuery: FAILED');\n}\nif (typeof $.fn.modal === 'undefined') {\n    console.log('Load Bootstrap JS: FAILED');\n} else {\n    console.log('Load Bootstrap JS: SUCCESS');\n}\nif (jQuery('#bootstrapCssTest').is(':visible') === true) {\n    console.log('Load Bootstrap CSS: FAILED');\n} else {\n    console.log('Load Bootstrap CSS: SUCCESS');\n}\n\n$(document).ready(function () {\n    console.log(\"Load DOM: SUCCESS\");\n\n    let menu = false;\n\n    const menu_icon = document.getElementById(\"menu-icon\");\n    const landing_page = document.getElementById(\"jh-header\");\n    const about_page = document.getElementById(\"jh-about\");\n    const tech_stack_page = document.getElementById(\"jh-tech-stack\");\n    const portfolio_page = document.getElementById(\"jh-portfolio\");\n    const awards_page = document.getElementById(\"jh-awards\");\n    const contact_page = document.getElementById(\"jh-contact\");\n\n    const about_link = document.getElementById(\"about_page\");\n    const tech_stack_link = document.getElementById(\"tech_stack_page\");\n    const portfolio_link = document.getElementById(\"portfolio_page\");\n    const awards_link = document.getElementById(\"awards_page\");\n    const contact_link = document.getElementById(\"contact_page\");\n\n    let current = landing_page;\n    // 1 - Landing Page\n    // 2 - About\n    // 3 - Tech Stack\n    // 4 - Portfolio\n    // 5 - Awards\n    // 6 - Contact\n\n    const menu_page = document.getElementById(\"jh-menu\");\n    const menu_logo = document.getElementById(\"menu-icon-default\");\n    let menu_tooltip = document.getElementById(\"menu-icon-tooltip\");\n\n    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page];\n    const all_links = [about_link, tech_stack_link, portfolio_link, awards_link, contact_link];\n\n    menu_icon.addEventListener('click', function () {\n        if (testMenuState(menu)) {\n            openMenu(all_pages, menu_page, menu_logo, menu_tooltip, current);\n            menu = true;\n        } else {\n            closeMenu(menu_page, menu_logo, menu_tooltip, current);\n            menu = false;\n        }\n    });\n\n    all_links.forEach(element => element.addEventListener('click', function () {\n        about_set = [\"about_page\", about_page];\n        tech_set = [\"tech_stack_page\", tech_stack_page];\n        portfolio_set = [\"portfolio_page\", portfolio_page];\n        awards_set = [\"awards_page\", awards_page];\n        contact_set = [\"contact_page\", contact_page];\n\n        full_set = [about_set, tech_set, portfolio_set, awards_set, contact_set];\n\n        full_set.forEach(element_2 => showPage(element, element_2, menu_page, menu_logo, menu_tooltip, current));\n\n        full_set.forEach(element_3 => element.id === element_3[0] ? current = element_3[1] : false);\n\n        menu = false;\n    }));\n});\n\nfunction showPage(element, element_2, menu_page, menu_logo, menu_tooltip, current) {\n    if (element.id === element_2[0]) {\n        closeMenuDefault(menu_page, menu_logo, menu_tooltip);\n        showSection(element_2[1]);\n    }\n}\n\nfunction showSection(section) {\n    section.style.display = 'block';\n    setTimeout(function () {\n        section.style.opacity = 1;\n    }, 1500);\n}\n\nfunction openMenu(pages, menu, logo, logo_tooltip) {\n    pages.forEach(element => hideElement(element));\n    showMenu(menu);\n    changeMenuLogo(logo, logo_tooltip);\n}\n\nfunction closeMenuDefault(menu, logo, logo_tooltip) {\n    menu.style.opacity = 0;\n\n    changeMenuLogoBack(logo, logo_tooltip);\n\n    setTimeout(function () {\n        menu.style.display = 'none';\n    }, 1000);\n}\n\nfunction closeMenu(menu, logo, logo_tooltip, previous) {\n    menu.style.opacity = 0;\n\n    changeMenuLogoBack(logo, logo_tooltip);\n\n    setTimeout(function () {\n        menu.style.display = 'none';\n        previous.style.display = 'block';\n    }, 1000);\n\n    setTimeout(function () {\n        previous.style.opacity = 1;\n    }, 1500);\n}\n\nfunction showMenu(menu) {\n    menu.style.display = 'block';\n    setTimeout(function () {\n        menu.style.opacity = 1;\n    }, 1000);\n}\n\nfunction hideElement(element) {\n    element.style.opacity = 0;\n    setTimeout(function () {\n        element.style.display = 'none';\n    }, 1000);\n}\n\nfunction changeMenuLogo(logo, tooltip) {\n    logo.src = \"./assets/04_Icons/04_Menu_Open.png\";\n    tooltip.innerHTML = \"CLOSE\";\n}\n\nfunction changeMenuLogoBack(logo, tooltip) {\n    logo.src = \"./assets/04_Icons/03_Menu_Default.png\";\n    tooltip.innerHTML = \"MENU\";\n}\n\nfunction testMenuState(menu) {\n    let openMenu = false;\n\n    if (menu === false) {\n        openMenu = true;\n        return openMenu;\n    } else {\n        return openMenu;\n    }\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });