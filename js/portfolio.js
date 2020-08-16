// -----------------------------------------------------------------------------------------------------------------

// Portfolio Pages

// -----------------------------------------------------------------------------------------------------------------

function createAllVariables() {
    let func = [];
    let counter = [];
    const button = [];
    let button_text = [];
    let number_indicator = [];
    let bar_indicator = [];
    const p = [];
    let sections = [];
    let num_indicator = [];

    // ---------------------------

    p_1to2 = [];
    p_2to3 = [];
    p_3to4 = [];
    p_4to1 = [];

    p_4to5 = [];
    p_5to1 = [];

    // ---------------------------

    jh_P_1 = [];
    jh_P_2 = [];
    jh_P_3 = [];
    jh_P_4 = [];
    jh_P_5 = [];

    // ---------------------------

    let P_data = [];

    let allVars = [];

    // ---------------------------

    for (let i = 1; i <= 8; ++i) {

        // ---------------------------

        jh_P_1[i] = $("#jh-p" + i + "-01");
        jh_P_2[i] = $("#jh-p" + i + "-02");
        jh_P_3[i] = $("#jh-p" + i + "-03");
        jh_P_4[i] = $("#jh-p" + i + "-04");

        if (i === 2) {
            jh_P_5[i] = $("#jh-p" + i + "-05");
        }

        // ---------------------------

        p_1to2[i] = [jh_P_1[i], jh_P_2[i], "11.33vh", "02", "03 | RESPONSIVE DESIGN", "2", "02"];
        p_2to3[i] = [jh_P_2[i], jh_P_3[i], "22.66vh", "03", "04 | DEMO", "3", "03"];
        p_3to4[i] = [jh_P_3[i], jh_P_4[i], "34vh", "04", "BACK TO PORTFOLIO", "4", "04"];
        p_4to1[i] = [jh_P_4[i], jh_P_1[i], "0vh", "01", "02 | WEBSITE", "1", "01"];

        // ---------------------------------------------------------------------------------
        //
        // Case-specific Modifications
        //


        // Internship Hunter
        if (i === 1) {
            p_1to2[i] = [jh_P_1[i], jh_P_2[i], "11.33vh", "02", "03 | INTERFACE DESIGN", "2", "02"];
            p_4to1[i] = [jh_P_4[i], jh_P_1[i], "0vh", "01", "02 | SPRITE DESIGN", "1", "01"];
        }

        // Notify
        if (i === 2) {
            p_1to2[i] = [jh_P_1[i], jh_P_2[i], "9vh", "02", "03 | LOGO DESIGN", "2", "02"];
            p_2to3[i] = [jh_P_2[i], jh_P_3[i], "18vh", "03", "04 | WEBSITE DESIGN", "3", "03"];
            p_3to4[i] = [jh_P_3[i], jh_P_4[i], "27vh", "04", "05 | APP DESIGN", "4", "04"];
            p_4to5[i] = [jh_P_4[i], jh_P_5[i], "36vh", "05", "BACK TO PORTFOLIO", "5", "05"];
            p_5to1[i] = [jh_P_5[i], jh_P_1[i], "0vh", "01", "02 | PROJECT BRIEF", "1", "01"];
        }

        // Emmanuel Delay
        if (i === 3) {
            p_4to1[i] = [jh_P_4[i], jh_P_1[i], "0vh", "01", "02 | WEB DESIGN", "1", "01"];
        }

        // ---------------------------------------------------------------------------------

        func[i] = [["1", p_1to2[i]], ["2", p_2to3[i]], ["3", p_3to4[i]], ["4", p_4to1[i]]];

        if (i === 2) {
            func[i] = [["1", p_1to2[i]], ["2", p_2to3[i]], ["3", p_3to4[i]], ["4", p_4to5[i]], ["5", p_5to1[i]]];
        }

        // ---------------------------

        counter[i] = "1";
        button[i] = $("#jh-p" + i + "-link");
        button_text[i] = $("#jh-p" + i + "-link-text");
        number_indicator[i] = $("#jh-p" + i + "-pc-current");
        bar_indicator[i] = $("#jh-p" + i + "-bar-indicator-thumb");
        p[i] = document.getElementById("jh-p" + i);
        sections[i] = "4";
        if (i === 2) {
            sections[i] = "5";
        }
        num_indicator[i] = $("#jh-p" + i + "-number-indicator");

        // ---------------------------

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

        P_data[i] = [func[i], button[i], button_text[i], counter[i], number_indicator[i], bar_indicator[i], p[i], sections[i], num_indicator[i]];

        // ---------------------------

        allVars[i-1] = P_data[i];
    }
    //
    return allVars;
}

// -----------------------------------------------------------------------------------------------------------------

const portGallery = jQuery("#jh-portfolio");

// -----------------------------------------------------------------------------------------------------------------

// !!!
// This variable holds separate sets of data - one per each portfolio item
// !!!

let portfolioData = createAllVariables();

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
                    endLoop(portfolio[6], portGallery);
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

const backButton2 = jQuery("#menu-icon-2");

function endLoop(current, portfolio) {
    current.style.opacity = "0";
    backButton2.css({"opacity":"0"});

    setTimeout(function() {
        current.style.display = "none";
        portfolio.css({"display": "block"});
        portfolio.css({"opacity": "1"});
        backButton2.css({"display":"none"});
    }, 1000);
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