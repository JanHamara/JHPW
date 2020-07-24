// -----------------------------------------------------------------------------------------------------------------

// About Page

// -----------------------------------------------------------------------------------------------------------------

// Counter
let read_more_1 = "1";

// Read More Button
let jh_read_more_1 = $("#jh-read-more-1");

// Current Number Indicator
let jh_about_pc_current = $("#jh-pc-current");

// Read More Button Text
let jh_rm_text_1 = $("#jh-rm-1-text");

let jh_about_content_1 = $("#jh-about-content-1");
let jh_about_content_2 = $("#jh-about-content-2");
let jh_about_content_3 = $("#jh-about-content-3");

// -----------------------------------------------------------------------------------------------------------------

let about_1to2 = [jh_about_content_1, jh_about_content_2, "15vh", "02", "READ MORE", "2"];
let about_2to3 = [jh_about_content_2, jh_about_content_3, "30vh", "03", "GO BACK", "3"];
let about_3to1 = [jh_about_content_3, jh_about_content_1, "0vh", "01", "READ MORE", "1"];

let about_con1 = ["1", about_1to2];
let about_con2 = ["2", about_2to3];
let about_con3 = ["3", about_3to1];

let about_func = [about_con1, about_con2, about_con3];

jh_read_more_1.on('click', function() {
    let f_count = 0;

    about_func.every(function about_changeSection(el) {
        if (read_more_1 === el[0]) {
            about_goToNextSection(el[1]);
            f_count = 1;
        }
        if (f_count > 0) return false;
        else return true;
    });
});

function about_goToNextSection(data) {
    // Change position of bar indicator
    document.getElementById("jh-bar-indicator-thumb").style.top = data[2];
    // Change number of section indicator
    jh_about_pc_current.html(data[3]);
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
    jh_rm_text_1.html(data[4]);
    // Change indicator of current section
    read_more_1 = data[5];
}

// -----------------------------------------------------------------------------------------------------------------

// About Page / - Read More Button Hover

jh_read_more_1.on('mouseenter', function() {
    document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider.png";
}).on('mouseleave', function() {
    document.getElementById("jh-rm-1-sign").src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
});

// -----------------------------------------------------------------------------------------------------------------