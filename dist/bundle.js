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

eval("// Webpack\n\n// Console Output for Dependencies Tests\nif (window.jQuery) {\n    console.log('Load jQuery: SUCCESS');\n} else {\n    console.log('Load jQuery: FAILED');\n}\nif (typeof $.fn.modal === 'undefined') {\n    console.log('Load Bootstrap JS: FAILED');\n} else {\n    console.log('Load Bootstrap JS: SUCCESS');\n}\nif ($('#bootstrapCssTest').is(':visible') === true) {\n    console.log('Load Bootstrap CSS: FAILED');\n} else {\n    console.log('Load Bootstrap CSS: SUCCESS');\n}\n\n$(document).ready(function () {\n\n    console.log(\"Load DOM: SUCCESS\");\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // MENU\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // -------------------------------------------------------------------------------------------------\n    //\n    // Variables\n    //\n\n    // Menu Open = True / Menu Closed = False\n    let menu = false;\n\n    // Menu Icon\n    const menu_icon = document.getElementById(\"menu-icon\");\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Pages\n    const landing_page = document.getElementById(\"jh-header\"); // Landing Page\n    const about_page = document.getElementById(\"jh-about\"); // About\n    const tech_stack_page = document.getElementById(\"jh-tech-stack\"); // Tech Stack\n    const portfolio_page = document.getElementById(\"jh-portfolio\"); // Portfolio\n    const awards_page = document.getElementById(\"jh-awards\"); // Awards\n    const contact_page = document.getElementById(\"jh-contact\"); // Contact\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Links [ Menu ]\n    const about_link = document.getElementById(\"about_page\"); // -> About\n    const tech_stack_link = document.getElementById(\"tech_stack_page\"); // -> Tech Stack\n    const portfolio_link = document.getElementById(\"portfolio_page\"); // -> Portfolio\n    const awards_link = document.getElementById(\"awards_page\"); // -> Awards\n    const contact_link = document.getElementById(\"contact_page\"); // -> Contact\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Current Page\n    let current = landing_page;\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Menu Page Variables\n\n    // Menu Page\n    const menu_page = document.getElementById(\"jh-menu\");\n\n    // Menu Logo\n    const menu_logo = document.getElementById(\"menu-icon-default\");\n\n    // Menu Tooltip Text\n    let menu_tooltip = document.getElementById(\"menu-icon-tooltip\");\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Pages Array\n    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page];\n\n    // Links Array\n    const all_links = [about_link, tech_stack_link, portfolio_link, awards_link, contact_link];\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Menu Icon Click Listener\n    menu_icon.addEventListener('click', function () {\n        //  if Menu is - Closed\n        if (testMenuState(menu)) {\n            // testMenuState()\n            openMenu(all_pages, menu_page, menu_logo, menu_tooltip); // openMenu()\n            menu = true;\n            // if Menu is - Open\n        } else {\n            closeMenu(menu_page, menu_logo, menu_tooltip, current); // closeMenu()\n            menu = false;\n        }\n    });\n\n    // -------------------------------------------------\n\n    // testMenuState()\n\n    function testMenuState(menu) {\n        let openMenu = false;\n\n        if (menu === false) {\n            openMenu = true;\n            return openMenu;\n        } else {\n            return openMenu;\n        }\n    }\n\n    // -------------------------------------------------\n\n    // openMenu()\n\n    function openMenu(pages, menu, logo, logo_tooltip) {\n        // Hide all sections\n        pages.forEach(element => hideElement(element));\n        // Show the Menu\n        showMenu(menu);\n        // Change Menu Button\n        changeMenuLogo(logo, logo_tooltip);\n    }\n\n    // - hideElement()\n    function hideElement(element) {\n        // Hide the sections\n        element.style.opacity = \"0\";\n        // Remove the section from DOM\n        setTimeout(function () {\n            element.style.display = 'none';\n        }, 1000);\n    }\n\n    // - showMenu()\n    function showMenu(menu) {\n        // Add menu to the DOM\n        menu.style.display = 'block';\n        // Show the menu\n        setTimeout(function () {\n            menu.style.opacity = \"1\";\n        }, 1000);\n    }\n\n    // changeMenuLogo()\n    function changeMenuLogo(logo, tooltip) {\n        logo.src = \"./assets/04_Icons/04_Menu_Open.png\";\n        tooltip.innerHTML = \"CLOSE\";\n    }\n\n    // changeMenuLogoBack()\n    function changeMenuLogoBack(logo, tooltip) {\n        logo.src = \"./assets/04_Icons/03_Menu_Default.png\";\n        tooltip.innerHTML = \"MENU\";\n    }\n\n    // -------------------------------------------------\n\n    // closeMenu()\n\n    function closeMenu(menu, logo, logo_tooltip, previous) {\n        // Hide Menu\n        menu.style.opacity = \"0\";\n\n        // Change Menu Button back to Default\n        changeMenuLogoBack(logo, logo_tooltip);\n\n        // Remove menu and display section that was previously displayed [previous]\n        setTimeout(function () {\n            menu.style.display = 'none';\n            previous.style.display = 'block';\n        }, 1000);\n\n        // Show [previous] sections\n        setTimeout(function () {\n            previous.style.opacity = \"1\";\n        }, 1500);\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Links Event Listeners\n    all_links.forEach(element => element.addEventListener('click', function () {\n        let about_set = [\"about_page\", about_page];\n        let tech_set = [\"tech_stack_page\", tech_stack_page];\n        let portfolio_set = [\"portfolio_page\", portfolio_page];\n        let awards_set = [\"awards_page\", awards_page];\n        let contact_set = [\"contact_page\", contact_page];\n\n        let full_set = [about_set, tech_set, portfolio_set, awards_set, contact_set];\n\n        // Show relevant page\n        full_set.forEach(element_2 => showPage(element, element_2, menu_page, menu_logo, menu_tooltip, current));\n\n        // If ID of the link equals the ID of our page -> set CURRENT page as that page\n        full_set.forEach(element_3 => element.id === element_3[0] ? current = element_3[1] : false);\n\n        menu = false;\n    }));\n\n    // -------------------------------------------------------------------------------------------------\n\n    // showPage()\n    function showPage(element, element_2, menu_page, menu_logo, menu_tooltip) {\n        // If the element.id of clicked link matches one in full_set array - then display that page\n        if (element.id === element_2[0]) {\n            // Close menu first\n            closeMenuDefault(menu_page, menu_logo, menu_tooltip);\n            // Show the section\n            showSection(element_2[1]);\n            // Now section is shown:\n            // menu = false;\n            // current = [current page]     e.g. about_page (not just string, the whole html element)\n        }\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n    // closeMenuDefault() - Only close Menu [not showing any section]\n    function closeMenuDefault(menu, logo, logo_tooltip) {\n        menu.style.opacity = \"0\";\n        changeMenuLogoBack(logo, logo_tooltip);\n        setTimeout(function () {\n            menu.style.display = 'none';\n        }, 1000);\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n    // showSection()\n    function showSection(section) {\n        // Add section to the DOM\n        section.style.display = 'block';\n        // Show the section\n        setTimeout(function () {\n            section.style.opacity = \"1\";\n        }, 1500);\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // About Page\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // About Page / - Read More Button\n\n    let read_more_1 = 1;\n    let jh_read_more_1 = $(\"#jh-read-more-1\");\n    let jh_pc_current = $(\"#jh-pc-current\");\n    let jh_rm_text_1 = $(\"#jh-rm-1-text\");\n\n    let jh_about_content_1 = $('#jh-about-content-1');\n    let jh_about_content_2 = $('#jh-about-content-2');\n    let jh_about_content_3 = $('#jh-about-content-3');\n\n    jh_read_more_1.on('click', function () {\n        if (read_more_1 === 1) {\n            RM1_goto2();\n        } else if (read_more_1 === 2) {\n            RM1_goto3();\n        } else if (read_more_1 === 3) {\n            RM1_default();\n        }\n    });\n\n    function RM1_default() {\n        document.getElementById(\"jh-bar-indicator-thumb\").style.top = \"0px\";\n        jh_pc_current.html(\"01\");\n        RM1_show_default();\n        jh_rm_text_1.html(\"READ MORE\");\n        read_more_1 = 1;\n    }\n\n    function RM1_goto2() {\n        document.getElementById(\"jh-bar-indicator-thumb\").style.top = \"103.5px\";\n        jh_pc_current.html(\"02\");\n        RM1_show_2();\n        read_more_1 = 2;\n    }\n\n    function RM1_goto3() {\n        document.getElementById(\"jh-bar-indicator-thumb\").style.top = \"207px\";\n        jh_pc_current.html(\"03\");\n        RM1_show_3();\n        jh_rm_text_1.html(\"GO BACK\");\n        read_more_1 = 3;\n    }\n\n    function RM1_show_default() {\n        jh_about_content_3.css({ 'opacity': '0' });\n        setTimeout(function () {\n            jh_about_content_3.css({ 'display': 'none' });\n            jh_about_content_1.css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            jh_about_content_1.css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    function RM1_show_2() {\n        jh_about_content_1.css({ 'opacity': '0' });\n        setTimeout(function () {\n            jh_about_content_1.css({ 'display': 'none' });\n            jh_about_content_2.css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            jh_about_content_2.css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    function RM1_show_3() {\n        jh_about_content_2.css({ 'opacity': '0' });\n        setTimeout(function () {\n            jh_about_content_2.css({ 'display': 'none' });\n            jh_about_content_3.css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            jh_about_content_3.css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // About Page / - Read More Button Hover\n\n    jh_read_more_1.on('mouseenter', function () {\n        document.getElementById(\"jh-rm-1-sign\").src = \"./assets/00_IMG/01_About/about-pc-divider.png\";\n    }).on('mouseleave', function () {\n        document.getElementById(\"jh-rm-1-sign\").src = \"./assets/00_IMG/01_About/about-pc-divider-white.png\";\n    });\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // Tech Stack Page\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    let ts = []; // Software Logo Item\n    let tsimg = []; // Software Logo Image\n    let tsthumb = []; // Software logo Thumbnail\n\n    // Fill up arrays with all references and elements\n    for (let i = 0; i < 20; i++) {\n        ts[i] = $(\"#jh-tsl-\" + (i + 1).toString());\n        tsimg[i] = document.getElementById(\"jh-tsl-img-\" + (i + 1).toString());\n        tsthumb[i] = document.getElementById(\"jh-tsl-thumb-\" + (i + 1).toString());\n    }\n\n    // References to default state image sources\n    const tsnormal = [\"01_html_normal.png\", \"02_css_normal.png\", \"03_less_normal.png\", \"04_js_normal.png\", \"05_jquery_normal.png\", \"06_ts_normal.png\", \"07_angular_normal.png\", \"08_react_normal.png\", \"09_webpack_normal.png\", \"10_github_normal.png\", \"11_bootstrap_normal.png\", \"12_php_normal.png\", \"13_wordpress_normal.png\", \"14_mysql_normal.png\", \"15_ai_normal.png\", \"16_xd_normal.png\", \"17_ps_normal.png\", \"18_pr_normal.png\", \"19_lr_normal.png\", \"20_dw_normal.png\"];\n\n    // References to hover state image sources\n    const tshover = [\"01_html_hover.png\", \"02_css_hover.png\", \"03_less_hover.png\", \"04_js_hover.png\", \"05_jquery_hover.png\", \"06_ts_hover.png\", \"07_angular_hover.png\", \"08_react_hover.png\", \"09_webpack_hover.png\", \"10_github_hover.png\", \"11_bootstrap_hover.png\", \"12_php_hover.png\", \"13_wordpress_hover.png\", \"14_mysql_hover.png\", \"15_ai_hover.png\", \"16_xd_hover.png\", \"17_ps_hover.png\", \"18_pr_hover.png\", \"19_lr_hover.png\", \"20_dw_hover.png\"];\n\n    // Array per element - to hold all data together\n    let ts_ = [];\n\n    // Fill the ts_ array\n    for (let i = 0; i < 20; i++) {\n        ts_[i + 1] = [ts[i], tsimg[i], tsthumb[i], \"./assets/04_Icons/01_Tech_Stack/\" + tsnormal[i], \"./assets/04_Icons/01_Tech_Stack/\" + tshover[i]];\n    }\n\n    // Array to hold all elements\n    const icons = [ts_[1], ts_[2], ts_[3], ts_[4], ts_[5], ts_[6], ts_[7], ts_[8], ts_[9], ts_[10], ts_[11], ts_[12], ts_[13], ts_[14], ts_[15], ts_[16], ts_[17], ts_[18], ts_[19], ts_[20]];\n\n    // For each element execute changeIcon() function which adds our EventListener(s)\n    icons.forEach(element => changeIcon(element));\n\n    function changeIcon(element) {\n        element[0].on('mouseenter', function () {\n            // On mouse enter\n            // Change the source image\n            element[1].src = element[4];\n            // Change font weight\n            element[2].style.fontWeight = \"700\";\n            // On mouse enter\n        }).on('mouseleave', function () {\n            // On mouse leave\n            // Change the source image\n            element[1].src = element[3];\n            // Change font weight\n            element[2].style.fontWeight = \"100\";\n        });\n    }\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // Tech Stack Page / - Read More Button\n\n    let read_more_2 = 1;\n    let jh_read_more_2 = $(\"#jh-read-more-2\");\n    let jh_pc2_current = $(\"#jh-pc2-current\");\n    let jh_rm_text_2 = $(\"#jh-rm-2-text\");\n\n    let jh_tech_content_1 = $('#jh-tech-content-1');\n    let jh_tech_content_2 = $('#jh-tech-content-2');\n    let jh_tech_content_3 = $('#jh-tech-content-3');\n\n    jh_read_more_2.on('click', function () {\n        if (read_more_2 === 1) {\n            RM2_goto2();\n        } else if (read_more_2 === 2) {\n            RM2_goto3();\n        } else if (read_more_2 === 3) {\n            RM2_default();\n        }\n    });\n\n    function RM2_default() {\n        document.getElementById(\"jh-bar-indicator-2-thumb\").style.top = \"0px\";\n        jh_pc2_current.html(\"01\");\n        RM2_show_default();\n        jh_rm_text_2.html(\"SERVER-SIDE DEVELOPMENT\");\n        read_more_2 = 1;\n    }\n\n    function RM2_goto2() {\n        document.getElementById(\"jh-bar-indicator-2-thumb\").style.top = \"103.5px\";\n        jh_pc2_current.html(\"02\");\n        RM2_show_2();\n        jh_rm_text_2.html(\"GRAPHIC DESIGN / WEB DESIGN\");\n        read_more_2 = 2;\n    }\n\n    function RM2_goto3() {\n        document.getElementById(\"jh-bar-indicator-2-thumb\").style.top = \"207px\";\n        jh_pc2_current.html(\"03\");\n        RM2_show_3();\n        jh_rm_text_2.html(\"FRONT END / WEB DEVELOPMENT\");\n        read_more_2 = 3;\n    }\n\n    // ----------------------------------------------------------\n\n    function RM2_show_default() {\n        jh_tech_content_3.css({ 'opacity': '0' });\n        setTimeout(function () {\n            jh_tech_content_3.css({ 'display': 'none' });\n            jh_tech_content_1.css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            jh_tech_content_1.css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    function RM2_show_2() {\n        jh_tech_content_1.css({ 'opacity': '0' });\n        setTimeout(function () {\n            jh_tech_content_1.css({ 'display': 'none' });\n            jh_tech_content_2.css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            jh_tech_content_2.css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    function RM2_show_3() {\n        $(\"#jh-tech-content-2\").css({ 'opacity': '0' });\n        setTimeout(function () {\n            $(\"#jh-tech-content-2\").css({ 'display': 'none' });\n            $(\"#jh-tech-content-3\").css({ 'display': 'block' });\n        }, 1000);\n        setTimeout(function () {\n            $(\"#jh-tech-content-3\").css({ 'opacity': '1' });\n        }, 1500);\n    }\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // Tech Page / - Read More Button Hover\n\n    jh_read_more_2.on('mouseenter', function () {\n        document.getElementById(\"jh-rm-2-sign\").src = \"./assets/00_IMG/01_About/about-pc-divider.png\";\n    });\n\n    jh_read_more_2.on('mouseleave', function () {\n        document.getElementById(\"jh-rm-2-sign\").src = \"./assets/00_IMG/01_About/about-pc-divider-white.png\";\n    });\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // ALL PAGES / - Home Button\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    let about_home_link = document.getElementById(\"jh-about-page-logo\");\n    let tech_home_link = document.getElementById(\"jh-tech-page-logo\");\n    let portfolio_home_link = document.getElementById(\"jh-portfolio-page-logo\");\n    let awards_home_link = document.getElementById(\"jh-awards-page-logo\");\n    let contact_home_link = document.getElementById(\"jh-contact-page-logo\");\n    let menu_home_link = document.getElementById(\"jh-menu-page-logo\");\n\n    let form = $('#jh-cf');\n    // Form Groups - controls bottom border\n    const fg1 = document.getElementById(\"fg1\");\n    const fg2 = document.getElementById(\"fg2\");\n    const fg3 = document.getElementById(\"fg3\");\n    const fg = [fg1, fg2, fg3];\n\n    // Enable links here\n    const home_links = [about_home_link, tech_home_link, portfolio_home_link, awards_home_link, contact_home_link, menu_home_link];\n\n    // Add EventListener to each link\n    home_links.forEach(element => {\n        addHomeLink(element, all_pages);\n    });\n\n    function addHomeLink(element, pages) {\n        element.addEventListener('click', function () {\n            // if (current === contact_page) {\n            clearForm();\n            // }\n            homePage(pages);\n            setTimeout(function () {\n                document.getElementById(\"jh-header\").style.display = \"block\";\n                setTimeout(function () {\n                    document.getElementById(\"jh-header\").style.opacity = \"1\";\n                }, 1000);\n            }, 1000);\n        });\n    }\n\n    function homePage(pages) {\n        pages.forEach(el => hideElement(el));\n    }\n\n    function clearForm() {\n        $('.errorMessage').remove();\n        $('.errorMessage2').remove();\n        fg.forEach(element => element.classList.remove(\"error\"));\n        form.trigger(\"reset\");\n    }\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });