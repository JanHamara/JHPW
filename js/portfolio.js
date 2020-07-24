// -----------------------------------------------------------------------------------------------------------------

// Portfolio Pages

// -----------------------------------------------------------------------------------------------------------------

const p1 = document.getElementById("jh-p1");
// const p2 = document.getElementById("jh-p2");
// const p3 = document.getElementById("jh-p3");
// const p4 = document.getElementById("jh-p4");

// -----------------------------------------------------------------------------------------------------------------

// P1

let read_more_p1 = "1";                           // Counter
let jh_read_more_p1 = $("#jh-p1-link");         // Read More Button
let jh_p1_current = $("#jh-p1-pc-current");     // Number Indicator
let jh_p1_link_text = $("#jh-p1-link-text");    // Read More Button - Text

let jh_P1_1 = $("#jh-p1-01");
let jh_P1_2 = $("#jh-p1-02");
let jh_P1_3 = $("#jh-p1-03");
let jh_P1_4 = $("#jh-p1-04");

let P1_1to2 = [jh_P1_1, jh_P1_2, "11.33vh", "02", "03 | INTERFACE DESIGN", "2"];
let P1_2to3 = [jh_P1_2, jh_P1_3, "22.66vh", "03", "04 | DEMO", "3"];
let P1_3to4 = [jh_P1_3, jh_P1_4, "34vh", "01", "BACK TO PORTFOLIO", "4"];
let P1_4to1 = [jh_P1_4, jh_P1_1, "0vh", "01", "02 | SPRITE DESIGN", "1"];

let P1_func = [["1", P1_1to2], ["2", P1_2to3], ["3", P1_3to4], ["4", P1_4to1]];

jh_read_more_p1.on('click', function() {
    let f_count_3 = 0;

    P1_func.every(function P1_changeSection(el) {
        if (read_more_p1 === el[0]) {
            goToNextSection(el[1]);
            f_count_3 = 1;
        }
        if (f_count_3 > 0) return false;
        else return true;
    });
});

function goToNextSection(data) {
    // Change position of bar indicator
    document.getElementById("jh-p1-bar-indicator-thumb").style.top = data[2];
    // Change number of section indicator
    jh_p1_current.html(data[3]);
    // Hide previous section and show next section
    data[0].css({'opacity':'0'});
    jh_read_more_p1.css({'opacity':'0'});
    setTimeout(function() {
        data[0].css({'display':'none'});
        data[1].css({'display':'block'});
        // Change link text
        jh_p1_link_text.html(data[4]);
    }, 1000);
    setTimeout(function() {
        data[1].css({'opacity':'1'});
        jh_read_more_p1.css({'opacity':'1'});
    }, 1500);
    // Change indicator of current section
    read_more_p1 = data[5];
}

// -----------------------------------------------------------------------------------------------------------------