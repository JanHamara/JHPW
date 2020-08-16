// Webpack

// -------------------------------------------------------------------------------------------------

// Console Output for Dependencies Tests

if (window.jQuery) { console.log('Load jQuery: SUCCESS'); } else { console.log('Load jQuery: FAILED'); }
if (typeof($.fn.modal) === 'undefined') { console.log('Load Bootstrap JS: FAILED'); } else { console.log('Load Bootstrap JS: SUCCESS'); }
if ($('#bootstrapCssTest').is(':visible') === true)  { console.log('Load Bootstrap CSS: FAILED'); } else { console.log('Load Bootstrap CSS: SUCCESS'); }

// -------------------------------------------------------------------------------------------------

$( document ).ready(function() {

    console.log( "Load DOM: SUCCESS" );

    // -------------------------------------------------------------------------------------------------

    // Mobile Check

    let isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }

    // -------------------------------------------------------------------------------------------------





    // -------------------------------------------------------------------------------------------------

    // Variables

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

    // Portfolio Pages
    const _p1 = document.getElementById("jh-p1");
    const _p2 = document.getElementById("jh-p2");
    const _p3 = document.getElementById("jh-p3");
    const _p4 = document.getElementById("jh-p4");
    const _p5 = document.getElementById("jh-p5");
    const _p6 = document.getElementById("jh-p6");
    const _p7 = document.getElementById("jh-p7");
    const _p8 = document.getElementById("jh-p8");

    // Back Button
    const backButton3 = jQuery("#menu-icon-2");

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
    const all_pages = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page,
        _p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8];

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
        if (testMenuState(menu)) { // testMenuState()
            backButton3.css({"opacity":"0"});
            openMenu(all_pages, menu_page, menu_logo, menu_tooltip);            // openMenu()
            setTimeout(function() {
                backButton3.css({"display":"none"});
            }, 1000);
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
            if (testMenuState(menu)) { // testMenuState()

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
            }, 700);

            // Here you tell the site, what was the previous section, in case they close menu
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

    // ALL PAGES / - Home Button

    // -----------------------------------------------------------------------------------------------------------------

    let about_home_link = document.getElementById("jh-about-page-logo");
    let tech_home_link = document.getElementById("jh-tech-page-logo");
    let portfolio_home_link = document.getElementById("jh-portfolio-page-logo");
    let awards_home_link = document.getElementById("jh-awards-page-logo");
    let contact_home_link = document.getElementById("jh-contact-page-logo");
    let menu_home_link = document.getElementById("jh-menu-page-logo");

    let p1_home_link = document.getElementById("jh-p1-page-logo");
    let p2_home_link = document.getElementById("jh-p2-page-logo");
    let p3_home_link = document.getElementById("jh-p3-page-logo");
    let p4_home_link = document.getElementById("jh-p4-page-logo");
    let p5_home_link = document.getElementById("jh-p5-page-logo");
    let p6_home_link = document.getElementById("jh-p6-page-logo");
    let p7_home_link = document.getElementById("jh-p7-page-logo");
    let p8_home_link = document.getElementById("jh-p8-page-logo");

    // -----------------------------------------------------------------------------------------------------------------

    let form = $('#jh-cf');

    // Form Groups - controls bottom border
    const fg1 = document.getElementById("fg1");
    const fg2 = document.getElementById("fg2");
    const fg3 = document.getElementById("fg3");
    const fg = [fg1, fg2, fg3];

    // -----------------------------------------------------------------------------------------------------------------

    // Enable links here
    const home_links = [about_home_link, tech_home_link, portfolio_home_link, awards_home_link, contact_home_link, menu_home_link,
        p1_home_link, p2_home_link, p3_home_link, p4_home_link, p5_home_link, p6_home_link, p7_home_link, p8_home_link];
    const all_pages_2 = [landing_page, about_page, tech_stack_page, portfolio_page, awards_page, contact_page, menu_page,
        _p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8];

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
            backButton3.css({"opacity":"0"});
            setTimeout(function() {
                document.getElementById("jh-header").style.display = "block";
                backButton3.css({"display":"none"});
                setTimeout(function() {
                    document.getElementById("jh-header").style.opacity = "1";
                }, 100);
            }, 1000);
        });
    }

    // Hide all pages and switch to homepage
    function homePage(pages, menu_logo, menu_tooltip) {
        pages.forEach(el => hideElement(el));
        changeMenuLogoBack(menu_logo, menu_tooltip);
    }

    // Clear form when clicking on home button
    function clearForm() {
        ($('.errorMessage')).remove();
        ($('.errorMessage2')).remove();
        fg.forEach(element => element.classList.remove("error"));
        form.trigger("reset");
    }

    // -----------------------------------------------------------------------------------------------------------------
});

