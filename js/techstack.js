// -----------------------------------------------------------------------------------------------------------------

// Tech Stack Page

// -----------------------------------------------------------------------------------------------------------------

// Counter
let read_more_2 = "1";

// Read More Button
let jh_read_more_2 = $("#jh-read-more-2");

// Current Number Indicator
let jh_pc_current = $("#jh-pc2-current");

// Read More Button Text
let jh_rm_text_2 = $("#jh-rm-2-text");

let jh_tech_content_1 = $("#jh-tech-content-1");
let jh_tech_content_2 = $("#jh-tech-content-2");
let jh_tech_content_3 = $("#jh-tech-content-3");

// -----------------------------------------------------------------------------------------------------------------

let tech_1to2 = [jh_tech_content_1, jh_tech_content_2, "15vh", "02", "GRAPHIC DESIGN / WEB DESIGN", "2"];
let tech_2to3 = [jh_tech_content_2, jh_tech_content_3, "30vh", "03", "FRONT END / WEB DEVELOPMENT", "3"];
let tech_3to1 = [jh_tech_content_3, jh_tech_content_1, "0vh", "01", "SERVER-SIDE DEVELOPMENT", "1"];

let tech_con1 = ["1", tech_1to2];
let tech_con2 = ["2", tech_2to3];
let tech_con3 = ["3", tech_3to1];

let tech_func = [tech_con1, tech_con2, tech_con3];

jh_read_more_2.on('click', function() {
    let f_count_2 = 0;

    tech_func.every(function tech_changeSection(el) {
        if (read_more_2 === el[0]) {
            tech_goToNextSection(el[1]);
            f_count_2 = 1;
        }
        if (f_count_2 > 0) return false;
        else return true;
    });
});

function tech_goToNextSection(data) {
    // Change position of bar indicator
    document.getElementById("jh-bar-indicator-2-thumb").style.top = data[2];
    // Change number of section indicator
    jh_pc_current.html(data[3]);
    // Hide previous section and show next section
    data[0].css({'opacity':'0'});
    setTimeout(function() {
        data[0].css({'display':'none'});
        data[1].css({'display':'block'});
    }, 1000);
    setTimeout(function() {
        data[1].css({'opacity':'1'});
    }, 1500);
    // Change link text
    jh_rm_text_2.html(data[4]);
    // Change indicator of current section
    read_more_2 = data[5];
}

// -----------------------------------------------------------------------------------------------------------------

// Tech Page / - Read More Button Hover

jh_read_more_2.on('mouseenter', function() {
    document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
}).on('mouseleave', function() {
    document.getElementById("jh-rm-2-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
});

// -----------------------------------------------------------------------------------------------------------------