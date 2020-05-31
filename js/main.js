// Webpack

// Console Output for Dependencies Tests
if (window.jQuery) { console.log('Load jQuery: SUCCESS'); } else { console.log('Load jQuery: FAILED'); }
if (typeof($.fn.modal) === 'undefined') { console.log('Load Bootstrap JS: FAILED'); } else { console.log('Load Bootstrap JS: SUCCESS'); }
if (jQuery('#bootstrapCssTest').is(':visible') === true)  { console.log('Load Bootstrap CSS: FAILED'); } else { console.log('Load Bootstrap CSS: SUCCESS'); }

$( document ).ready(function() {

    console.log( "Load DOM: SUCCESS" );

    // -----------------------------------------------------------------------------------------------------------------

    // MENU

    // -----------------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------
    //
    // Variables
    //

    // Menu Open = True / Menu Closed = False
    let menu = false;

    // Menu Icon
    const menu_icon = document.getElementById("menu-icon");

    // -------------------------------------------------------------------------------------------------

    // Pages
    const landing_page = document.getElementById("jh-header");             // Landing Page
    const about_page = document.getElementById("jh-about");                // About
    const tech_stack_page = document.getElementById("jh-tech-stack");      // Tech Stack
    const portfolio_page = document.getElementById("jh-portfolio");        // Portfolio
    const awards_page = document.getElementById("jh-awards");              // Awards
    const contact_page = document.getElementById("jh-contact");            // Contact

    // -------------------------------------------------------------------------------------------------

    // Links [ Menu ]
    const about_link = document.getElementById("about_page");              // -> About
    const tech_stack_link = document.getElementById("tech_stack_page");    // -> Tech Stack
    const portfolio_link = document.getElementById("portfolio_page");      // -> Portfolio
    const awards_link = document.getElementById("awards_page");            // -> Awards
    const contact_link = document.getElementById("contact_page");          // -> Contact

    // -------------------------------------------------------------------------------------------------

    // Current Page
    var current = landing_page;

    // -------------------------------------------------------------------------------------------------

    // Menu Page Variables

        // Menu Page
        const menu_page = document.getElementById("jh-menu");

        // Menu Logo
        const menu_logo = document.getElementById("menu-icon-default");

        // Menu Tooltip Text
        let menu_tooltip = document.getElementById("menu-icon-tooltip");

    // -------------------------------------------------------------------------------------------------

    // Pages Array
    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page];

    // Links Array
    const all_links = [about_link, tech_stack_link, portfolio_link, awards_link, contact_link];

    // -------------------------------------------------------------------------------------------------

    // Menu Icon Click Listener
    menu_icon.addEventListener('click', function() {
            //  if Menu is - Closed
        if (testMenuState(menu)) {                                              // testMenuState()
            openMenu(all_pages, menu_page, menu_logo, menu_tooltip);            // openMenu()
            menu = true;
            // if Menu is - Open
        } else {
            closeMenu(menu_page, menu_logo, menu_tooltip, current);             // closeMenu()
            menu = false;
        }
    });

    // -------------------------------------------------

    // testMenuState()

    function testMenuState(menu) {
        let openMenu = false;

        if (menu === false) {
            openMenu = true;
            return openMenu;
        } else {
            return openMenu;
        }
    }

    // -------------------------------------------------

    // openMenu()

    function openMenu(pages, menu, logo, logo_tooltip) {
        // Hide all sections
        pages.forEach(element => hideElement(element));
        // Show the Menu
        showMenu(menu);
        // Change Menu Button
        changeMenuLogo(logo, logo_tooltip);
    }

    // - hideElement()
    function hideElement(element) {
        // Hide the sections
        element.style.opacity = 0;
        // Remove the section from DOM
        setTimeout(function () {
            element.style.display = 'none';
        }, 1000);
    }

    // - showMenu()
    function showMenu(menu) {
        // Add menu to the DOM
        menu.style.display = 'block';
        // Show the menu
        setTimeout(function () {
            menu.style.opacity = 1;
        }, 1000);
    }

    // changeMenuLogo()
    function changeMenuLogo(logo, tooltip) {
        logo.src = "./assets/04_Icons/04_Menu_Open.png";
        tooltip.innerHTML = "CLOSE";
    }

    // changeMenuLogoBack()
    function changeMenuLogoBack(logo, tooltip) {
        logo.src = "./assets/04_Icons/03_Menu_Default.png";
        tooltip.innerHTML = "MENU";
    }

    // -------------------------------------------------

    // closeMenu()

    function closeMenu(menu, logo, logo_tooltip, previous) {
        // Hide Menu
        menu.style.opacity = 0;

        // Change Menu Button back to Default
        changeMenuLogoBack(logo, logo_tooltip);

        // Remove menu and display section that was previously displayed [previous]
        setTimeout(function () {
            menu.style.display = 'none';
            previous.style.display = 'block';
        }, 1000);

        // Show [previous] sections
        setTimeout(function () {
            previous.style.opacity = 1;
        }, 1500);
    }

    // -------------------------------------------------------------------------------------------------

    // Links Event Listeners
    all_links.forEach(element => element.addEventListener('click', function() {
        about_set = ["about_page", about_page]
        tech_set = ["tech_stack_page", tech_stack_page]
        portfolio_set = ["portfolio_page", portfolio_page]
        awards_set = ["awards_page", awards_page]
        contact_set = ["contact_page", contact_page]

        full_set = [about_set, tech_set, portfolio_set, awards_set, contact_set];

        // Show relevant page
        full_set.forEach(element_2 => showPage(element, element_2, menu_page, menu_logo, menu_tooltip, current));

        // If ID of the link equals the ID of our page -> set CURRENT page as that page
        full_set.forEach(element_3 => (element.id === element_3[0]) ? current = element_3[1] : false);

        menu = false;
    }));

    // -------------------------------------------------------------------------------------------------

    // showPage()
    function showPage(element, element_2, menu_page, menu_logo, menu_tooltip) {
        // If the element.id of clicked link matches one in full_set array - then display that page
        if (element.id === element_2[0]) {
            // Close menu first
            closeMenuDefault(menu_page, menu_logo, menu_tooltip);
            // Show the section
            showSection(element_2[1]);
            // Now section is shown:
                // menu = false;
                // current = [current page]     e.g. about_page (not just string, the whole html element)
        }
    }

    // -------------------------------------------------------------------------------------------------

    // closeMenuDefault() - Only close Menu [not showing any section]
    function closeMenuDefault(menu, logo, logo_tooltip) {
        menu.style.opacity = 0;
        changeMenuLogoBack(logo, logo_tooltip);
        setTimeout(function () {
            menu.style.display = 'none';
        }, 1000);
    }

    // -------------------------------------------------------------------------------------------------

    // showSection()
    function showSection(section) {
        // Add section to the DOM
        section.style.display = 'block';
        // Show the section
        setTimeout(function () {
            section.style.opacity = 1;
        }, 1500);
    }

    // -------------------------------------------------------------------------------------------------





    // -----------------------------------------------------------------------------------------------------------------

    // About Page

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Home Button

    let about_home_link = document.getElementById("jh-about-page-logo");

    about_home_link.addEventListener('click', function() {
       homePage(all_pages);
       setTimeout(function() {
           document.getElementById("jh-header").style.display = "block";
           setTimeout(function() {
               document.getElementById("jh-header").style.opacity = 1;
           }, 1000);
       }, 1000);
    });

    function homePage(pages) {
        pages.forEach(element => hideElement(element));
    }

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Read More Button

    let read_more_1 = 1;

    $("#jh-read-more-1").on('click', function() {
        if (read_more_1 === 1) {
            RM1_goto2();
        } else if (read_more_1 === 2) {
            RM1_goto3();
        } else if (read_more_1 === 3) {
            RM1_default();
        }
    });

    function RM1_default() {
        document.getElementById("jh-bar-indicator-thumb").style.top = "0px";
        $("#jh-pc-current").html("01");
        RM1_show_default();
        $("#jh-rm-1-text").html("READ MORE");
        read_more_1 = 1;
    }

    function RM1_goto2() {
        document.getElementById("jh-bar-indicator-thumb").style.top = "103.5px";
        $("#jh-pc-current").html("02");
        RM1_show_2();
        read_more_1 = 2;
    }

    function RM1_goto3() {
        document.getElementById("jh-bar-indicator-thumb").style.top = "207px";
        $("#jh-pc-current").html("03");
        RM1_show_3();
        $("#jh-rm-1-text").html("GO BACK");
        read_more_1 = 3;
    }

    function RM1_show_default() {
        $("#jh-about-content-3").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-about-content-3").css({'display':'none'});
            $("#jh-about-content-1").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-about-content-1").css({'opacity':'1'});
        }, 1500);
    }

    function RM1_show_2() {
        $("#jh-about-content-1").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-about-content-1").css({'display':'none'});
            $("#jh-about-content-2").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-about-content-2").css({'opacity':'1'});
        }, 1500);
    }

    function RM1_show_3() {
        $("#jh-about-content-2").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-about-content-2").css({'display':'none'});
            $("#jh-about-content-3").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-about-content-3").css({'opacity':'1'});
        }, 1500);
    }

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Read More Button Hover

    $("#jh-read-more-1").on('mouseenter', function() {
        document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
    });

    $("#jh-read-more-1").on('mouseleave', function() {
        document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    });

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Draggable scroll bar

    dragElement(document.getElementById("jh-bar-indicator-thumb"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        if (document.getElementById(elmnt.id)) {
            document.getElementById(elmnt.id).onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            let currentOffset = elmnt.offsetTop - pos2;
            if (currentOffset < 0) {
                currentOffset = 0
            } else if (currentOffset > 207) {
                currentOffset = 207;
            }
            elmnt.style.top = currentOffset + "px";
            elmnt.style.left = elmnt.style.left; // we want to allow only vertical movement
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // -------------------------------------------------------------------------------------------------





    // -----------------------------------------------------------------------------------------------------------------

    // Tech Stack Page

    // -----------------------------------------------------------------------------------------------------------------

    let ts = [];        // Software Logo Item
    let tsimg = [];     // Software Logo Image
    let tsthumb = [];   // Software logo Thumbnail

    // Fill up arrays with all references and elements
    for (var i = 0; i < 20; i++) {
        ts[i] = $("#jh-tsl-" + (i+1).toString());
        tsimg[i] = document.getElementById("jh-tsl-img-" + (i+1).toString());
        tsthumb[i] = document.getElementById("jh-tsl-thumb-" + (i+1).toString());
    }

    // References to default state image sources
    const tsnormal = ["01_html_normal.png", "02_css_normal.png", "03_less_normal.png", "04_js_normal.png",
        "05_jquery_normal.png", "06_ts_normal.png", "07_angular_normal.png", "08_react_normal.png",
        "09_webpack_normal.png", "10_github_normal.png", "11_bootstrap_normal.png", "12_php_normal.png",
        "13_wordpress_normal.png", "14_mysql_normal.png", "15_ai_normal.png", "16_xd_normal.png", "17_ps_normal.png",
        "18_pr_normal.png", "19_lr_normal.png", "20_dw_normal.png"];

    // References to hover state image sources
    const tshover = ["01_html_hover.png", "02_css_hover.png", "03_less_hover.png", "04_js_hover.png",
        "05_jquery_hover.png", "06_ts_hover.png", "07_angular_hover.png", "08_react_hover.png",
        "09_webpack_hover.png", "10_github_hover.png", "11_bootstrap_hover.png", "12_php_hover.png",
        "13_wordpress_hover.png", "14_mysql_hover.png", "15_ai_hover.png", "16_xd_hover.png", "17_ps_hover.png",
        "18_pr_hover.png", "19_lr_hover.png", "20_dw_hover.png"];

    // Array per element - to hold all data together
    let ts_ = [];

    // Fill the ts_ array
    for (var i = 0; i < 20; i++) {
        ts_[i+1] = [ts[i], tsimg[i], tsthumb[i],
            ("./assets/04_Icons/01_Tech_Stack/" + tsnormal[i]), ("./assets/04_Icons/01_Tech_Stack/" + tshover[i]) ]
    }

    // Array to hold all elements
    const icons = [ts_[1], ts_[2], ts_[3], ts_[4], ts_[5], ts_[6], ts_[7], ts_[8], ts_[9], ts_[10],
        ts_[11], ts_[12], ts_[13], ts_[14], ts_[15], ts_[16], ts_[17], ts_[18], ts_[19], ts_[20]];

    // For each element execute changeIcon() function which adds our EventListener(s)
    icons.forEach(element => changeIcon(element));

    function changeIcon(element) {
        element[0].on('mouseenter', function () {   // On mouse enter
            // Change the source image
            element[1].src = element[4];
            // Change font weight
            element[2].style.fontWeight = 700;
            // On mouse enter
        }).on('mouseleave', function () {           // On mouse leave
            // Change the source image
            element[1].src = element[3];
            // Change font weight
            element[2].style.fontWeight = 100;
        });
    }

    // -----------------------------------------------------------------------------------------------------------------

    // Tech Stack Page / - Read More Button

    let read_more_2 = 1;

    $("#jh-read-more-2").on('click', function() {
        if (read_more_1 === 1) {
            RM2_goto2();
        } else if (read_more_1 === 2) {
            RM2_goto3();
        } else if (read_more_1 === 3) {
            RM2_default();
        }
    });

    function RM2_default() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "0px";
        $("#jh-pc2-current").html("01");
        RM2_show_default();
        $("#jh-rm-2-text").html("SERVER-SIDE DEVELOPMENT");
        read_more_1 = 1;
    }

    function RM2_goto2() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "103.5px";
        $("#jh-pc2-current").html("02");
        RM2_show_2();
        $("#jh-rm-2-text").html("GRAPHIC DESIGN / WEB DESIGN");
        read_more_1 = 2;
    }

    function RM2_goto3() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "207px";
        $("#jh-pc2-current").html("03");
        RM2_show_3();
        $("#jh-rm-1-text").html("FRONT END / WEB DEVELOPMENT");
        read_more_1 = 3;
    }

    // ----------------------------------------------------------

    function RM2_show_default() {
        $("#jh-tech-content-3").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-tech-content-3").css({'display':'none'});
            $("#jh-tech-content-1").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-tech-content-1").css({'opacity':'1'});
        }, 1500);
    }

    function RM2_show_2() {
        $("#jh-tech-content-1").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-tech-content-1").css({'display':'none'});
            $("#jh-tech-content-2").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-tech-content-2").css({'opacity':'1'});
        }, 1500);
    }

    function RM2_show_3() {
        $("#jh-tech-content-2").css({'opacity':'0'});
        setTimeout(function() {
            $("#jh-tech-content-2").css({'display':'none'});
            $("#jh-tech-content-3").css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            $("#jh-tech-content-3").css({'opacity':'1'});
        }, 1500);
    }

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Read More Button Hover

    $("#jh-read-more-2").on('mouseenter', function() {
        document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
    });

    $("#jh-read-more-2").on('mouseleave', function() {
        document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    });
});

