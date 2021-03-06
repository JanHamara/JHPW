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

eval("// Webpack\n\n// -------------------------------------------------------------------------------------------------\n\n// Console Output for Dependencies Tests\n\nif (window.jQuery) {\n    console.log('Load jQuery: SUCCESS');\n} else {\n    console.log('Load jQuery: FAILED');\n}\nif (typeof $.fn.modal === 'undefined') {\n    console.log('Load Bootstrap JS: FAILED');\n} else {\n    console.log('Load Bootstrap JS: SUCCESS');\n}\nif ($('#bootstrapCssTest').is(':visible') === true) {\n    console.log('Load Bootstrap CSS: FAILED');\n} else {\n    console.log('Load Bootstrap CSS: SUCCESS');\n}\n\n// -------------------------------------------------------------------------------------------------\n\n$(document).ready(function () {\n\n    console.log(\"Load DOM: SUCCESS\");\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Mobile Check\n\n    let isMobile = false; //initiate as false\n    // device detection\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0, 4))) {\n        isMobile = true;\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Variables\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Pages\n    const landing_page = document.getElementById(\"jh-header\"); // Landing Page\n    const about_page = document.getElementById(\"jh-about\"); // About\n    const tech_stack_page = document.getElementById(\"jh-tech-stack\"); // Tech Stack\n    const portfolio_page = document.getElementById(\"jh-portfolio\"); // Portfolio\n    const awards_page = document.getElementById(\"jh-awards\"); // Awards\n    const contact_page = document.getElementById(\"jh-contact\"); // Contact\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Links [ Menu ]\n    const about_link = document.getElementById(\"about_page\"); // -> About\n    const tech_stack_link = document.getElementById(\"tech_stack_page\"); // -> Tech Stack\n    const portfolio_link = document.getElementById(\"portfolio_page\"); // -> Portfolio\n    const awards_link = document.getElementById(\"awards_page\"); // -> Awards\n    const contact_link = document.getElementById(\"contact_page\"); // -> Contact\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Portfolio Pages\n    const _p = [];\n\n    for (let i = 1; i <= 8; ++i) {\n        _p[i] = document.getElementById(\"jh-p\" + i);\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Back Button\n    const backButton3 = jQuery(\"#menu-icon-2\");\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Current Page\n    let current = landing_page;\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Menu Page Variables\n\n    // Menu Open = True / Menu Closed = False\n    let menu = false;\n\n    // Menu Page\n    const menu_page = document.getElementById(\"jh-menu\");\n\n    // Menu Icon\n    const menu_icon = document.getElementById(\"menu-icon\");\n\n    // Menu Tooltip Text\n    let menu_tooltip = document.getElementById(\"menu-icon-tooltip\");\n\n    // Menu Logo\n    const menu_logo = document.getElementById(\"menu-icon-default\");\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Pages Array\n    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page, _p[1], _p[2], _p[3], _p[4], _p[5], _p[6], _p[7], _p[8]];\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Helping Set\n\n    let about_set = [about_link, about_page];\n    let tech_set = [tech_stack_link, tech_stack_page];\n    let portfolio_set = [portfolio_link, portfolio_page];\n    let awards_set = [awards_link, awards_page];\n    let contact_set = [contact_link, contact_page];\n    //\n    let full_set = [about_set, tech_set, portfolio_set, awards_set, contact_set];\n\n    // -------------------------------------------------------------------------------------------------\n\n    // Menu Icon Click Listener\n\n    menu_icon.addEventListener('click', function () {\n        //  if Menu is - Closed\n        if (testMenuState(menu)) {\n            // testMenuState()\n            backButton3.css({ \"opacity\": \"0\" });\n            openMenu(all_pages, menu_page, menu_logo, menu_tooltip); // openMenu()\n            setTimeout(function () {\n                backButton3.css({ \"display\": \"none\" });\n            }, 1000);\n            menu = true;\n            // if Menu is - Open\n        } else {\n            closeMenu(menu_page, menu_logo, menu_tooltip, current); // closeMenu()\n            menu = false;\n        }\n    });\n\n    // -------------------------------------------------------------------------------------------------\n\n    full_set.forEach(element => link(element));\n\n    // -------------------------\n\n    function link(link) {\n        link[0].addEventListener('click', function () {\n            //  if Menu is - Closed\n            if (testMenuState(menu)) {\n                // testMenuState()\n\n                openMenu(all_pages, menu_page, menu_logo, menu_tooltip); // openMenu()\n                menu = true;\n                // if Menu is - Open\n            } else {\n                closeMenu(menu_page, menu_logo, menu_tooltip); // closeMenu()\n                menu = false;\n            }\n\n            setTimeout(function () {\n                // Add section to the DOM\n                link[1].style.display = 'block';\n                // Show the section\n                setTimeout(function () {\n                    link[1].style.opacity = \"1\";\n                }, 200);\n            }, 700);\n\n            // Here you tell the site, what was the previous section, in case they close menu\n            current = link[1];\n        });\n    }\n\n    // -------------------------------------------------------------------------------------------------\n\n    // testMenuState()\n\n    function testMenuState(menu) {\n        let openMenu = false;\n\n        if (menu === false) {\n            openMenu = true;\n            return openMenu;\n        } else {\n            return openMenu;\n        }\n    }\n\n    // -------------------------------------------------\n\n    // openMenu()\n\n    function openMenu(pages, menu, logo, logo_tooltip) {\n        // Hide all sections\n        pages.forEach(element => hideElement(element));\n        // Show the Menu\n        showMenu(menu);\n        // Change Menu Button\n        changeMenuLogo(logo, logo_tooltip);\n    }\n\n    // -------------------------------------------------\n\n    // - hideElement()\n\n    function hideElement(element) {\n        // Hide the sections\n        element.style.opacity = \"0\";\n        // Remove the section from DOM\n        setTimeout(function () {\n            element.style.display = 'none';\n        }, 1000);\n    }\n\n    // -------------------------------------------------\n\n    // - showMenu()\n\n    function showMenu(menu) {\n        // Add menu to the DOM\n        menu.style.display = 'block';\n        // Show the menu\n        setTimeout(function () {\n            menu.style.opacity = \"1\";\n        }, 1000);\n    }\n\n    // -------------------------------------------------\n\n    // changeMenuLogo()\n\n    function changeMenuLogo(logo, tooltip) {\n        if (isMobile) {\n            logo.src = \"./assets/04_Icons/04_Menu_Open.png\";\n        } else {\n            logo.src = \"./assets/04_Icons/04_Menu_Open.png\";\n        }\n        tooltip.innerHTML = \"CLOSE\";\n    }\n\n    // -------------------------------------------------\n\n    // changeMenuLogoBack()\n\n    function changeMenuLogoBack(logo, tooltip) {\n        logo.src = \"./assets/04_Icons/03_Menu_Default.png\";\n        tooltip.innerHTML = \"MENU\";\n    }\n\n    // -------------------------------------------------\n\n    // showPage()\n\n    function showPage(element, element_2) {\n        // If the element.id of clicked link matches one in full_set array - then display that page\n        if (element.id === element_2[0]) {\n            // Show the section\n            showSection(element_2[1]);\n            // Now section is shown:\n            // menu = false;\n            // current = [current page]     e.g. about_page (not just string, the whole html element)\n        }\n    }\n\n    // -------------------------------------------------\n\n    // closeMenu()\n\n    function closeMenu(menu, logo, logo_tooltip, previous) {\n        // Hide Menu\n        menu.style.opacity = \"0\";\n\n        // Change Menu Button back to Default\n        changeMenuLogoBack(logo, logo_tooltip);\n\n        // Remove menu and display section that was previously displayed [previous]\n        setTimeout(function () {\n            menu.style.display = 'none';\n            if (previous) {\n                previous.style.display = 'block';\n            }\n        }, 1000);\n\n        // Show [previous] sections\n        setTimeout(function () {\n            if (previous) {\n                previous.style.opacity = \"1\";\n            }\n        }, 1200);\n    }\n\n    // -------------------------------------------------\n\n    // showSection()\n    function showSection(section) {\n        // Add section to the DOM\n        section.style.display = 'block';\n        // Show the section\n        setTimeout(function () {\n            section.style.opacity = \"1\";\n        }, 1500);\n    }\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // ALL PAGES / - Home Button\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    let about_home_link = document.getElementById(\"jh-about-page-logo\");\n    let tech_home_link = document.getElementById(\"jh-tech-page-logo\");\n    let portfolio_home_link = document.getElementById(\"jh-portfolio-page-logo\");\n    let awards_home_link = document.getElementById(\"jh-awards-page-logo\");\n    let contact_home_link = document.getElementById(\"jh-contact-page-logo\");\n    let menu_home_link = document.getElementById(\"jh-menu-page-logo\");\n\n    let p1_home_link = document.getElementById(\"jh-p1-page-logo\");\n    let p2_home_link = document.getElementById(\"jh-p2-page-logo\");\n    let p3_home_link = document.getElementById(\"jh-p3-page-logo\");\n    let p4_home_link = document.getElementById(\"jh-p4-page-logo\");\n    let p5_home_link = document.getElementById(\"jh-p5-page-logo\");\n    let p6_home_link = document.getElementById(\"jh-p6-page-logo\");\n    let p7_home_link = document.getElementById(\"jh-p7-page-logo\");\n    let p8_home_link = document.getElementById(\"jh-p8-page-logo\");\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    let form = $('#jh-cf');\n\n    // Form Groups - controls bottom border\n    const fg1 = document.getElementById(\"fg1\");\n    const fg2 = document.getElementById(\"fg2\");\n    const fg3 = document.getElementById(\"fg3\");\n    const fg = [fg1, fg2, fg3];\n\n    // -----------------------------------------------------------------------------------------------------------------\n\n    // Enable links here\n    const home_links = [about_home_link, tech_home_link, portfolio_home_link, awards_home_link, contact_home_link, menu_home_link, p1_home_link, p2_home_link, p3_home_link, p4_home_link, p5_home_link, p6_home_link, p7_home_link, p8_home_link];\n    const all_pages_2 = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page, menu_page, _p[1], _p[2], _p[3], _p[4], _p[5], _p[6], _p[7], _p[8]];\n\n    // Add EventListener to each link\n    home_links.forEach(element => {\n        addHomeLink(element, all_pages_2, menu_logo, menu_tooltip);\n    });\n\n    function addHomeLink(element, pages, logo, logo_tooltip) {\n        element.addEventListener('click', function () {\n            // if (current === contact_page) {\n            clearForm();\n            // }\n            homePage(pages, logo, logo_tooltip);\n            backButton3.css({ \"opacity\": \"0\" });\n            setTimeout(function () {\n                document.getElementById(\"jh-header\").style.display = \"block\";\n                backButton3.css({ \"display\": \"none\" });\n                setTimeout(function () {\n                    document.getElementById(\"jh-header\").style.opacity = \"1\";\n                }, 100);\n            }, 1000);\n        });\n    }\n\n    // Hide all pages and switch to homepage\n    function homePage(pages, menu_logo, menu_tooltip) {\n        pages.forEach(el => hideElement(el));\n        changeMenuLogoBack(menu_logo, menu_tooltip);\n    }\n\n    // Clear form when clicking on home button\n    function clearForm() {\n        $('.errorMessage').remove();\n        $('.errorMessage2').remove();\n        fg.forEach(element => element.classList.remove(\"error\"));\n        form.trigger(\"reset\");\n    }\n\n    // -----------------------------------------------------------------------------------------------------------------\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });