// Webpack

// Console Output for Dependencies Tests
if (window.jQuery) { console.log('Load jQuery: SUCCESS'); } else { console.log('Load jQuery: FAILED'); }
if (typeof($.fn.modal) === 'undefined') { console.log('Load Bootstrap JS: FAILED'); } else { console.log('Load Bootstrap JS: SUCCESS'); }
if ($('#bootstrapCssTest').is(':visible') === true)  { console.log('Load Bootstrap CSS: FAILED'); } else { console.log('Load Bootstrap CSS: SUCCESS'); }

$( document ).ready(function() {

    console.log( "Load DOM: SUCCESS" );

    let isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }

    // -------------------------------------------------------------------------------------------------
    //
    // Variables
    //
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
    let current = landing_page;

    // -------------------------------------------------------------------------------------------------

    // Menu Page Variables

        // Menu Open = True / Menu Closed = False
        let menu = false;

        // Menu Page
        const menu_page = document.getElementById("jh-menu");

        // Menu Icon
        const menu_icon = document.getElementById("menu-icon");

        // Menu Tooltip Text
        let menu_tooltip = document.getElementById("menu-icon-tooltip");

        // Menu Logo
        const menu_logo = document.getElementById("menu-icon-default");

    // -------------------------------------------------------------------------------------------------

    // Pages Array
    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page];

    // -------------------------------------------------------------------------------------------------

    // Helping Set

    let about_set = [about_link, about_page];
    let tech_set = [tech_stack_link, tech_stack_page];
    let portfolio_set = [portfolio_link, portfolio_page];
    let awards_set = [awards_link, awards_page];
    let contact_set = [contact_link, contact_page];
    //
    let full_set = [about_set, tech_set, portfolio_set, awards_set, contact_set];

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

    // -------------------------------------------------------------------------------------------------

    full_set.forEach(element => link(element));

    // -------------------------

    function link(link) {
        link[0].addEventListener('click', function() {
            //  if Menu is - Closed
            if (testMenuState(menu)) {                                              // testMenuState()
                openMenu(all_pages, menu_page, menu_logo, menu_tooltip);            // openMenu()
                menu = true;
                // if Menu is - Open
            } else {
                closeMenu(menu_page, menu_logo, menu_tooltip);             // closeMenu()
                menu = false;
            }

            setTimeout(function () {
                // Add section to the DOM
                link[1].style.display = 'block';
                // Show the section
                setTimeout(function () {
                    link[1].style.opacity = "1";
                }, 200);
            }, 700)

            current = link[1];
        });
    }

    // -------------------------------------------------------------------------------------------------

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

    // -------------------------------------------------

    // - hideElement()
    function hideElement(element) {
        // Hide the sections
        element.style.opacity = "0";
        // Remove the section from DOM
        setTimeout(function () {
            element.style.display = 'none';
        }, 1000);
    }

    // -------------------------------------------------

    // - showMenu()
    function showMenu(menu) {
        // Add menu to the DOM
        menu.style.display = 'block';
        // Show the menu
        setTimeout(function () {
            menu.style.opacity = "1";
        }, 1000);
    }

    // -------------------------------------------------

    // changeMenuLogo()
    function changeMenuLogo(logo, tooltip) {
        if (isMobile) {
            logo.src = "./assets/04_Icons/04_Menu_Open.png";
        } else {
            logo.src = "./assets/04_Icons/04_Menu_Open.png";
        }
        tooltip.innerHTML = "CLOSE";
    }

    // -------------------------------------------------

    // changeMenuLogoBack()
    function changeMenuLogoBack(logo, tooltip) {
        logo.src = "./assets/04_Icons/03_Menu_Default.png";
        tooltip.innerHTML = "MENU";
    }

    // -------------------------------------------------

    // showPage()
    function showPage(element, element_2) {
        // If the element.id of clicked link matches one in full_set array - then display that page
        if (element.id === element_2[0]) {
            // Show the section
            showSection(element_2[1]);
            // Now section is shown:
                // menu = false;
                // current = [current page]     e.g. about_page (not just string, the whole html element)
        }
    }

    // -------------------------------------------------

    // closeMenu()

    function closeMenu(menu, logo, logo_tooltip, previous) {
        // Hide Menu
        menu.style.opacity = "0";

        // Change Menu Button back to Default
        changeMenuLogoBack(logo, logo_tooltip);

        // Remove menu and display section that was previously displayed [previous]
        setTimeout(function () {
            menu.style.display = 'none';
            if (previous) {
                previous.style.display = 'block';
            }
        }, 1000);

        // Show [previous] sections
        setTimeout(function () {
            if (previous) {
                previous.style.opacity = "1";
            }
        }, 1200);
    }

    // -------------------------------------------------

    // showSection()
    function showSection(section) {
        // Add section to the DOM
        section.style.display = 'block';
        // Show the section
        setTimeout(function () {
            section.style.opacity = "1";
        }, 1500);
    }

    // -----------------------------------------------------------------------------------------------------------------

    // About Page

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Read More Button

    let read_more_1 = 1;
    let jh_read_more_1 = $("#jh-read-more-1");
    let jh_pc_current = $("#jh-pc-current");
    let jh_rm_text_1 = $("#jh-rm-1-text");

    let jh_about_content_1 = $("#jh-about-content-1");
    let jh_about_content_2 = $("#jh-about-content-2");
    let jh_about_content_3 = $("#jh-about-content-3");

    jh_read_more_1.on('click', function() {
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
        jh_pc_current.html("01");
        RM1_show_default();
        jh_rm_text_1.html("READ MORE");
        read_more_1 = 1;
    }

    function RM1_goto2() {
        document.getElementById("jh-bar-indicator-thumb").style.top = "15vh";
        jh_pc_current.html("02");
        RM1_show_2();
        read_more_1 = 2;
    }

    function RM1_goto3() {
        document.getElementById("jh-bar-indicator-thumb").style.top = "30vh";
        jh_pc_current.html("03");
        RM1_show_3();
        jh_rm_text_1.html("GO BACK");
        read_more_1 = 3;
    }

    function RM1_show_default() {
        jh_about_content_3.css({'opacity':'0'});
        setTimeout(function() {
            jh_about_content_3.css({'display':'none'});
            jh_about_content_1.css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            jh_about_content_1.css({'opacity':'1'});
        }, 1500);
    }

    function RM1_show_2() {
        jh_about_content_1.css({'opacity':'0'});
        setTimeout(function() {
            jh_about_content_1.css({'display':'none'});
            jh_about_content_2.css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            jh_about_content_2.css({'opacity':'1'});
        }, 1500);
    }

    function RM1_show_3() {
        jh_about_content_2.css({'opacity':'0'});
        setTimeout(function() {
            jh_about_content_2.css({'display':'none'});
            jh_about_content_3.css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            jh_about_content_3.css({'opacity':'1'});
        }, 1500);
    }

    // -----------------------------------------------------------------------------------------------------------------

    // About Page / - Read More Button Hover

    jh_read_more_1.on('mouseenter', function() {
        document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
    }).on('mouseleave', function() {
        document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    });

    // -----------------------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------------------

    // Tech Stack Page

    // -----------------------------------------------------------------------------------------------------------------

    let ts = [];        // Software Logo Item
    let tsimg = [];     // Software Logo Image
    let tsthumb = [];   // Software logo Thumbnail

    // Fill up arrays with all references and elements
    for (let i = 0; i < 20; i++) {
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
    for (let i = 0; i < 20; i++) {
        ts_[i+1] = [ts[i], tsimg[i], tsthumb[i],
            ("./assets/04_Icons/01_Tech_Stack/" + tshover[i]), ("./assets/04_Icons/01_Tech_Stack/" + tshover[i]) ]
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
            element[2].style.fontWeight = "700";
            // On mouse enter
        }).on('mouseleave', function () {           // On mouse leave
            // Change the source image
            element[1].src = element[3];
            // Change font weight
            element[2].style.fontWeight = "100";
        });
    }

    let tech_event = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });

    // -----------------------------------------------------------------------------------------------------------------

    // Tech Stack Page / - Read More Button

    let read_more_2 = 1;
    let jh_read_more_2 = $("#jh-read-more-2");
    let jh_pc2_current = $("#jh-pc2-current");
    let jh_rm_text_2 = $("#jh-rm-2-text");

    let jh_tech_content_1 = $("#jh-tech-content-1");
    let jh_tech_content_2 = $("#jh-tech-content-2");
    let jh_tech_content_3 = $("#jh-tech-content-3");

    jh_read_more_2.on('click', function() {
        if (read_more_2 === 1) {
            RM2_goto2();
        } else if (read_more_2 === 2) {
            RM2_goto3();
        } else if (read_more_2 === 3) {
            RM2_default();
        }
    });

    function RM2_default() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "0px";
        jh_pc2_current.html("01");
        RM2_show_default();
        jh_rm_text_2.html("SERVER-SIDE DEVELOPMENT");
        read_more_2 = 1;
    }

    function RM2_goto2() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "15vh";
        jh_pc2_current.html("02");
        RM2_show_2();
        jh_rm_text_2.html("GRAPHIC DESIGN / WEB DESIGN");
        read_more_2 = 2;
    }

    function RM2_goto3() {
        document.getElementById("jh-bar-indicator-2-thumb").style.top = "30vh";
        jh_pc2_current.html("03");
        RM2_show_3();
        jh_rm_text_2.html("FRONT END / WEB DEVELOPMENT");
        read_more_2 = 3;
    }

    // ----------------------------------------------------------

    function RM2_show_default() {
        jh_tech_content_3.css({'opacity':'0'});
        setTimeout(function() {
            jh_tech_content_3.css({'display':'none'});
            jh_tech_content_1.css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            jh_tech_content_1.css({'opacity':'1'});
        }, 1500);
    }

    function RM2_show_2() {
        jh_tech_content_1.css({'opacity':'0'});
        setTimeout(function() {
            jh_tech_content_1.css({'display':'none'});
            jh_tech_content_2.css({'display':'block'});
        }, 1000);
        setTimeout(function() {
            jh_tech_content_2.css({'opacity':'1'});
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

    // Tech Page / - Read More Button Hover

    jh_read_more_2.on('mouseenter', function() {
        document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
    }).on('mouseleave', function() {
        document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    });

    // -----------------------------------------------------------------------------------------------------------------

    // ALL PAGES / - Home Button

    // -----------------------------------------------------------------------------------------------------------------

    let about_home_link = document.getElementById("jh-about-page-logo");
    let tech_home_link = document.getElementById("jh-tech-page-logo");
    let portfolio_home_link = document.getElementById("jh-portfolio-page-logo");
    let awards_home_link = document.getElementById("jh-awards-page-logo");
    let contact_home_link = document.getElementById("jh-contact-page-logo");
    let menu_home_link = document.getElementById("jh-menu-page-logo");

    let form = $('#jh-cf');
    // Form Groups - controls bottom border
    const fg1 = document.getElementById("fg1");
    const fg2 = document.getElementById("fg2");
    const fg3 = document.getElementById("fg3");
    const fg = [fg1, fg2, fg3];

    // Enable links here
    const home_links = [about_home_link, tech_home_link, portfolio_home_link, awards_home_link, contact_home_link, menu_home_link];
    const all_pages_2 = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page, menu_page];


    // Add EventListener to each link
    home_links.forEach(element => {
        addHomeLink(element, all_pages_2, menu_logo, menu_tooltip);
    });

    function addHomeLink(element, pages, logo, logo_tooltip) {
        element.addEventListener('click', function() {
            // if (current === contact_page) {
                clearForm();
            // }
            homePage(pages, logo, logo_tooltip);
            setTimeout(function() {
                document.getElementById("jh-header").style.display = "block";
                setTimeout(function() {
                    document.getElementById("jh-header").style.opacity = "1";
                }, 100);
            }, 1000);
        });
    }

    function homePage(pages, menu_logo, menu_tooltip) {
        pages.forEach(el => hideElement(el));
        changeMenuLogoBack(menu_logo, menu_tooltip);
    }

    function clearForm() {
        ($('.errorMessage')).remove();
        ($('.errorMessage2')).remove();
        fg.forEach(element => element.classList.remove("error"));
        form.trigger("reset");
    }
});

