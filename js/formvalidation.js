<!--  -----------------------------------------------------------------------------------------------------------------  -->

// 1. Attempt to submit form - fire all validation functions

document.getElementById("jh-submit-form").addEventListener('click', function() {
    formSubmit();
});

// -----------------------------------------------------------------------------------------------------------------

// Contact Page / - Submit Form Button Hover

let jh_submit_form = $('#jh-submit-form');
let jh_submit_form_sign = document.getElementById("jh-rm-3-sign");

jh_submit_form.on('mouseenter', function() {
    jh_submit_form_sign.src = "./assets/00_IMG/01_About/about-pc-divider.png";
});

$("#jh-submit-form").on('mouseleave', function() {
    jh_submit_form_sign.src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
});

<!--  -----------------------------------------------------------------------------------------------------------------  -->

// Input Indicators
let input1Sign = document.getElementById("jh-cf-sign-1");
let input2Sign = document.getElementById("jh-cf-sign-2");
let input3Sign = document.getElementById("jh-cf-sign-3");

// Input Fields
let input1 = document.getElementById("jh-cf-text");
let input2 = document.getElementById("jh-cf-email");
let input3 = document.getElementById("jh-cf-message");

// Form Groups - controls bottom border
const fg1 = document.getElementById("fg1");
const fg2 = document.getElementById("fg2");
const fg3 = document.getElementById("fg3");

const fg = [fg1, fg2, fg3];

// Visit count
let fg1count = 0;
let fg2count = 0;
let fg3count = 0;

<!--  -----------------------------------------------------------------------------------------------------------------  -->

// 1.1 [Input 1] - [ Name ] - Focus / Focus Out

let jh_cf_text = $("#jh-cf-text");

jh_cf_text.on('focus', function() {
    // Make the indicator red
    input1Sign.src = "./assets/00_IMG/01_About/about-pc-divider.png";
    // Add to the counter
}).on('focusout', function() {
    if (input1.value === "") {
        input1Sign.src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    } else {

    }
});

<!--  -----------------------------------------------------------------------------------------------------------------  -->

// 1.2 [Input 2] - [ Mail ] - Focus / Focus Out

let jh_cf_email = $("#jh-cf-email");

jh_cf_email.on('focus', function() {
    // Make the indicator red
    input2Sign.src = "./assets/00_IMG/01_About/about-pc-divider.png";
    // Add to the counter
}).on('focusout', function() {
    if (input2.value === "") {
        input2Sign.src = "./assets/00_IMG/01_About/about-pc-divider-white.png";
    } else {

    }
});

<!--  -----------------------------------------------------------------------------------------------------------------  -->

// 1.2 [Input 3] - [ Message ] - Focus / Focus Out

let jh_cf_message = $("#jh-cf-message");

jh_cf_message.on('focus', function() {
    // Make the indicator red
    input3Sign.src = "./assets/00_IMG/01_About/about-pc-divider.png";
    // Add to the counter
}).on('focusout', function() {
    if (input3.value === "") {
        input3Sign.src = "./assets/00_IMG/01_About/about-pc-divider-white.png";

    } else {

    }
});

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function validateMailField() {
    if (jh_cf_email.val() === "") {
        fireMailEmptyError()
    } else {
        return true;
    }
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function isNotEmpty(values, valueNames) {
    let isNotEmpty = true;

    for (x in values) {
        if (values[x] === "") {
            let errorInput = jQuery('#jh-cf-' + valueNames[x]);
            let errorMsg = jQuery("<div class='errorMessage'></div>").text('FILL OUT MISSING INFORMATION!');
            let errorMsg2 = jQuery("<div class='errorMessage2'></div>").text('FILL OUT MISSING INFORMATION!');

            if (valueNames[x] === "message") {
                let formContainer = jQuery("#jh-cf");
                formContainer.after(errorMsg2);
                fg3.classList.add("error");
            } else if (valueNames[x] === "text") {
                errorInput.after(errorMsg);
                fg1.classList.add("error");
            } else {
                errorInput.after(errorMsg);
                fg2.classList.add("error");
            }

            isNotEmpty = false;
        }
    }
    return isNotEmpty;
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function removeErrors(fg) {
    fg.forEach(el => el.classList.remove("error"));
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function validateForm() {
    let name = $('#jh-cf-text').val();
    let email =  $('#jh-cf-email').val();
    let message = $('#jh-cf-message').val();
    let formValues = [name, email, message];
    let formValuesNames = ["text", "email", "message"];
    return isNotEmpty(formValues, formValuesNames);
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function validateMail() {
    let email =  $('#jh-cf-email');
    // This is a Regex expression to test for email address format
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.val().match(mailFormat)) {
        return true;
    } else {
        fireMailError();
        return false;
    }
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

// Clearing & Error Functions

function fireMailError() {
    let errorInput = jh_cf_email;
    let errorMsg = $("<div class='errorMessage'></div>").text('EMAIL FORMAT INCORRECT!');
    errorInput.after(errorMsg);
    fg2.classList.add("error");
}

<!--  ---------------------------------------------------  -->

// This clears red bars
function removeErrors(fg) {
    fg.forEach(el => el.classList.remove("error"));
}

// This clears textual errors
function clearErrors() {
    $('.errorMessage').remove();
    $('.errorMessage2').remove();
}

<!--  -----------------------------------------------------------------------------------------------------------------  -->

function formSubmit() {
    clearErrors();
    removeErrors(fg);
    // Check if all fields are filled
    if (validateForm()) {
        // Check for validity of email address
        if (validateMail()) {
            let form = $('#jh-cf');
            let form_alert = $('.form-submitted');
            let dataString = form.serialize();
            form_alert.css({"opacity": 1, "transform": "scale(1.1)"});
            form.trigger("reset");
            setTimeout(function () {
                form_alert.css({"opacity": 0, "transform": "scale(0.8)"});
            }, 3000);
            $.ajax({
                type: "POST",
                url: "send_form.php",
                data: dataString,
                success: function() {
                    form_alert.css({"opacity": 1, "transform": "scale(1.1)"});
                    form.trigger("reset");
                    setTimeout(function () {
                        form_alert.css({"opacity": 0, "transform": "scale(0.8)"});
                    }, 3000);
                }
            });
        }
    }
}