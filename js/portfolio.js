// -----------------------------------------------------------------------------------------------------------------

// Portfolio Pages

// -----------------------------------------------------------------------------------------------------------------

// Portfolio Switches
const leftPSwitch2 = $("#jh-portfolio-switch-left");
const rightPSwitch2 = $("#jh-portfolio-switch-right");
const leftPOSwitch2 = $("#jh-portfolio-switch-mobile-left");
const rightPOSwitch2 = $("#jh-portfolio-switch-mobile-right");

let switches2 = [leftPSwitch2, rightPSwitch2, leftPOSwitch2, rightPOSwitch2];

// -----------------------------------------------------------------------------------------------------------------

// Portfolio Items
const p1 = document.getElementById("jh-p1");
const p2 = document.getElementById("jh-p2");
// const p3 = document.getElementById("jh-p3");
// const p4 = document.getElementById("jh-p4");

// -----------------------------------------------------------------------------------------------------------------

// P1 - Internship Hunter

let P1_counter = "1";                                       // Counter
let P1_button = $("#jh-p1-link");                           // Read More Button
let P1_button_text = $("#jh-p1-link-text");                 // Read More Button - Text
let P1_number_indicator = $("#jh-p1-pc-current");           // Number Indicator
let P1_bar_indicator = $("#jh-p1-bar-indicator-thumb");     // Bar Indicator
let P1_num_indicator = $("#jh-p1-number-indicator");        // Heading Number Indicator

// Sections
let jh_P1_1 = $("#jh-p1-01");
let jh_P1_2 = $("#jh-p1-02");
let jh_P1_3 = $("#jh-p1-03");
let jh_P1_4 = $("#jh-p1-04");


// P2 - Notify

let P2_counter = "1";                                       // Counter
let P2_button = $("#jh-p2-link");                           // Read More Button
let P2_button_text = $("#jh-p2-link-text");                 // Read More Button - Text
let P2_number_indicator = $("#jh-p2-pc-current");           // Number Indicator
let P2_bar_indicator = $("#jh-p2-bar-indicator-thumb");     // Bar Indicator
let P2_num_indicator = $("#jh-p2-number-indicator");        // Heading Number Indicator

// Sections
let jh_P2_1 = $("#jh-p2-01");
let jh_P2_2 = $("#jh-p2-02");
let jh_P2_3 = $("#jh-p2-03");
let jh_P2_4 = $("#jh-p2-04");
let jh_P2_5 = $("#jh-p2-05");

// -----------------------------------------------------------------------------------------------------------------

// Data

// [0] - current section
// [1] - next section
// [2] - bar indicator height
// [3] - number indicator value
// [4] - button text [text indicator]
// [5] - new section [helper counter]

let P1_1to2 = [jh_P1_1, jh_P1_2, "11.33vh", "02", "03 | INTERFACE DESIGN", "2", "02"];
let P1_2to3 = [jh_P1_2, jh_P1_3, "22.66vh", "03", "04 | DEMO", "3", "03"];
let P1_3to4 = [jh_P1_3, jh_P1_4, "34vh", "04", "BACK TO PORTFOLIO", "4", "04"];
let P1_4to1 = [jh_P1_4, jh_P1_1, "0vh", "01", "02 | SPRITE DESIGN", "1", "01"];

// ------------

let P2_1to2 = [jh_P2_1, jh_P2_2, "9vh", "02", "03 | LOGO DESIGN", "2", "02"];
let P2_2to3 = [jh_P2_2, jh_P2_3, "18vh", "03", "04 | WEBSITE DESIGN", "3", "03"];
let P2_3to4 = [jh_P2_3, jh_P2_4, "27vh", "04", "05 | APP DESIGN", "4", "04"];
let P2_4to5 = [jh_P2_4, jh_P2_5, "36vh", "51", "BACK TO PORTFOLIO", "5", "05"];
let P2_5to1 = [jh_P2_5, jh_P2_1, "0vh", "01", "02 | PROJECT BRIEF", "1", "01"];

// -----------------------------------------------------------------------------------------------------------------

// Data Bundle
let P1_func = [["1", P1_1to2], ["2", P1_2to3], ["3", P1_3to4], ["4", P1_4to1]];
let P2_func = [["1", P2_1to2], ["2", P2_2to3], ["3", P2_3to4], ["4", P2_4to5], ["5", P2_5to1]];

// -----------------------------------------------------------------------------------------------------------------

// Elements Bundle

// [0] - Data Bundle
// [1] - Button
// [2] - Button Text
// [3] - Section Counter
// [4] - Number Indicator
// [5] - Bar Indicator
// [6] - Portfolio Item - Main Container
// [7] - Number of Sections
// [8] - Number Indicator 2

let P1_data = [P1_func, P1_button, P1_button_text, P1_counter, P1_number_indicator, P1_bar_indicator, p1, "4", P1_num_indicator];
let P2_data = [P2_func, P2_button, P2_button_text, P2_counter, P2_number_indicator, P2_bar_indicator, p2, "5", P2_num_indicator];

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// !!!
// This variable holds separate sets of data - one per each portfolio item
// !!!

let portfolioData = [P1_data, P2_data];

// -----------------------------------------------------------------------------------------------------------------

                                        // Do NOT modify code BELOW //

// -----------------------------------------------------------------------------------------------------------------

portfolioData.forEach(el => setGallery(el));

function setGallery(portfolio) {
    portfolio[1].on('click', function() {
        let p_counter = 0;

        portfolio[0].every(function changeSection(element) {
            if (portfolio[3] === element[0]) {
                if (element[0] === portfolio[7]) {
                    endLoop(portfolio[6], switches2);
                    goToNextSection(element[1], portfolio);
                } else {
                    goToNextSection(element[1], portfolio);
                }
                p_counter = 1;
            }
            if (p_counter > 0) return false;
            else return true;
        });

    });
}

// -----------------------------------------------------------------------------------------------------------------

function goToNextSection(data, portfolio) {

    // Change position of Bar Indicator
    portfolio[5].css({'top': data[2]});

    // Change value of Number Indicator
    portfolio[4].html(data[3]);

    // Change value of Header Number Indicator
    portfolio[8].css({'opacity':'0'});
    setTimeout(function() {
        portfolio[8].html(data[6]);
        portfolio[8].css({'opacity':'0.1'});
    }, 1000);

    // Hide previous data and Button
    data[0].css({'opacity':'0'});
    portfolio[1].css({'opacity':'0'});

    setTimeout(function() {
        data[0].css({'display':'none'});
        data[1].css({'display':'block'});

        // Change Button text
        portfolio[2].html(data[4]);
    }, 1000);

    // Show new data and Button
    setTimeout(function() {
        data[1].css({'opacity':'1'});
        portfolio[1].css({'opacity':'1'});
    }, 1500);

    // Increment the counter for current section
    portfolio[3] = data[5];
}

// -----------------------------------------------------------------------------------------------------------------

// End Loop

function endLoop(current, switches) {
    showSwitches(switches);

    current.style.opacity = 0;
    setTimeout(function() {
        current.style.display = "none";
    }, 100);

    window.scrollBy(0, 0);
}

// -----------------------------------------------------------------------------------------------------------------

function showSwitches(switches) {
    switches.forEach(el => showSwitch(el));
}

function showSwitch(element) {
    element.css({"display": "block"});
    setTimeout(function() {
        element.css({"opacity": "1"});
    }, 500);
}

// -----------------------------------------------------------------------------------------------------------------

// Notify Logo Animation

// const notify_logo = document.getElementById("p2-notify-logo");
// const animation_frames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
// let i = 0;
//
// do {
//     animation_frames.forEach(el => animateNotify(el, notify_logo));
// } while (i < 1);
//
// function animateNotify(el, logo) {
//     setInterval(function() {
//         logo.src = "./assets/03_Projects/01%20Apps/01%20Notify/animation/05.png";
//     }, 200);
// }