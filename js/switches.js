// -----------------------------------------------------------------------------------------------------------------

// Switches Functionality

// -----------------------------------------------------------------------------------------------------------------

// Variables

// -----------------------

let _isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    _isMobile = true;
}

// -----------------------

// Awards Switches
const leftSwitch = $("#jh-awards-switch-left");
const rightSwitch = $("#jh-awards-switch-right");

// Portfolio Switches
const leftPSwitch = $("#jh-portfolio-switch-left");
const rightPSwitch = $("#jh-portfolio-switch-right");
const leftPOSwitch = $("#jh-portfolio-switch-mobile-left");
const rightPOSwitch = $("#jh-portfolio-switch-mobile-right");

// -----------------------

// Awards Switches IMG
const leftSwitchImg = document.getElementById("jh-as-img-left");
const rightSwitchImg = document.getElementById("jh-as-img-right");

// Portfolio Switches IMG
const leftPSwitchImg = document.getElementById("jh-pf-img-left");
const rightPSwitchImg = document.getElementById("jh-pf-img-right");

let switches = [leftPSwitch, rightPSwitch, leftPOSwitch, rightPOSwitch];

// -----------------------

// Divider Source Images
const pcDivider = "./assets/00_IMG/04_Awards/about-pc-divider.png";
const pcDividerWhite = "./assets/00_IMG/04_Awards/about-pc-divider-white.png";
const pcDividerReverse = "./assets/00_IMG/04_Awards/about-pc-divider-reverse.png";
const pcDividerWhiteReverse = "./assets/00_IMG/04_Awards/about-pc-divider-white-reverse.png";

// -----------------------

// Awards Content
awards = document.getElementsByClassName("jh-awards-content");
// Current Awards on Display
let currentAward = 0;
// Total Number of Awards
let totalAwardsNumber = 2; // Total number of awards, minus 1

// -----------------------

// Portfolio Content
portfolioItems = document.getElementsByClassName("jh-portfolio-content");
// Current Awards on Display
let currentPortfolioItem = 0;
// Total Number of Awards
let totalPortfolioItems = 4; // Total number of items, minus 1

// -----------------------------------------------------------------------------------------------------------------

// Switches - onHover()

// Awards - Left Switch
leftSwitch.on('mouseenter', function() {
    leftSwitchImg.src = pcDividerReverse;
}).on('mouseleave', function() {
    leftSwitchImg.src = pcDividerWhiteReverse;
});

// Awards - Right Switch
rightSwitch.on('mouseenter', function() {
    rightSwitchImg.src = pcDivider;
}).on('mouseleave', function() {
    rightSwitchImg.src = pcDividerWhite;
});

// Portfolio - Left Switch
leftPSwitch.on('mouseenter', function() {
    leftPSwitchImg.src = pcDividerReverse;
}).on('mouseleave', function() {
    leftPSwitchImg.src = pcDividerWhiteReverse;
});

// Portfolio - Right Switch
rightPSwitch.on('mouseenter', function() {
    rightPSwitchImg.src = pcDivider;
}).on('mouseleave', function() {
    rightPSwitchImg.src = pcDividerWhite;
});

// -----------------------------------------------------------------------------------------------------------------

// Item Display Switching

// -------------------------------

leftSwitch.on("click", function() {
    if (currentAward > 0) {
        previousSection(currentAward, awards);
        currentAward = currentAward - 1;
    } else if (currentAward === 0)  {
        lastSection(totalAwardsNumber, awards);
        currentAward = totalAwardsNumber;
    }
});

rightSwitch.on("click", function() {
    if (currentAward < totalAwardsNumber) {
        nextSection(currentAward, awards);
        currentAward = currentAward + 1;
    } else if (currentAward === totalAwardsNumber) {
        firstSection(totalAwardsNumber, awards);
        currentAward = 0;
    }
});

leftPSwitch.on("click", function() {
    if (currentPortfolioItem > 0) {
        previousSection(currentPortfolioItem, portfolioItems);
        currentPortfolioItem = currentPortfolioItem - 1;
    } else if (currentPortfolioItem === 0)  {
        lastSection(totalPortfolioItems, portfolioItems);
        currentPortfolioItem = totalPortfolioItems;
    }
});

leftPOSwitch.on("click", function() {
    if (currentPortfolioItem > 0) {
        previousSection(currentPortfolioItem, portfolioItems);
        currentPortfolioItem = currentPortfolioItem - 1;
    } else if (currentPortfolioItem === 0)  {
        lastSection(totalPortfolioItems, portfolioItems);
        currentPortfolioItem = totalPortfolioItems;
    }
});

rightPSwitch.on("click", function() {
    if (currentPortfolioItem < totalPortfolioItems) {
        nextSection(currentPortfolioItem, portfolioItems);
        currentPortfolioItem = currentPortfolioItem + 1;
    } else if (currentPortfolioItem === totalPortfolioItems) {
        firstSection(totalPortfolioItems, portfolioItems);
        currentPortfolioItem = 0;
    }
});

rightPOSwitch.on("click", function() {
    if (currentPortfolioItem < totalPortfolioItems) {
        nextSection(currentPortfolioItem, portfolioItems);
        currentPortfolioItem = currentPortfolioItem + 1;
    } else if (currentPortfolioItem === totalPortfolioItems) {
        firstSection(totalPortfolioItems, portfolioItems);
        currentPortfolioItem = 0;
    }
});

function nextSection(current, items) {
    displayItem(current, current+1, items);
}

function previousSection(current, items) {
    displayItem(current, current-1, items);

}

function firstSection(total, items) {
    displayItem(total, 0, items);
}

function lastSection(total, items) {
    displayItem(0, total, items);
}

function displayItem(a,b, items) {
    items[a].style.opacity = "0";
    setTimeout(function() {
        items[a].style.display = "none";
        items[b].style.display = "block";
    }, 1000);
    setTimeout(function() {
        items[b].style.opacity = "1";
    }, 1100);
}

// -----------------------------------------------------------------------------------------------------------------

// > Read More Button - onHover()

awardsButtons = document.getElementsByClassName("jh-awards-button");
portfolioButtons = document.getElementsByClassName("jh-portfolio-button");

for (let i = 0; i < totalAwardsNumber; i++) {
    awardsButtons[i].addEventListener('mouseenter', function() {
        awardsButtons[i].children[0].src = pcDivider;
    });
    awardsButtons[i].addEventListener('mouseleave', function() {
        awardsButtons[i].children[0].src = pcDividerWhite;
    });
}

for (let i = 0; i < (totalPortfolioItems + 1); i++) {
    portfolioButtons[i].addEventListener('mouseenter', function() {
        portfolioButtons[i].children[0].src = pcDivider;
    });
    portfolioButtons[i].addEventListener('mouseleave', function() {
        portfolioButtons[i].children[0].src = pcDividerWhite;
    });
}

// -----------------------------------------------------------------------------------------------------------------

// Portfolio / Display portfolio item functionality

let link_P1 = jQuery("#jh-portfolio-item-1");
let link_P2 = jQuery("#jh-portfolio-item-2");

let P1 = jQuery("#jh-p1");
let P2 = jQuery("#jh-p2");

// let links_P = [link_P1, link_P2];
// let P = [P1, P2];

let LP1 = [link_P1, P1, "#jh-p1"];
let LP2 = [link_P2, P2, "#jh-p2"];

let LP = [LP1, LP2];

LP.forEach(el => linkPItem(el, switches));

function linkPItem(item, switches) {
    item[0].on('click', function() {
        hideSwitches(switches);
        item[1].css({"display": "block"});
        item[1].css({"opacity": "1"});
        window.scrollBy(0, 2000);
        if (_isMobile) {
            // You will want to hide #portfolio in here
        }
    });
}

function hideSwitches(switches) {
    switches.forEach(el => hideSwitch(el));
}

function hideSwitch(element) {
    element.css({"opacity": "0"});
    setTimeout(function() {
        element.css({"display": "none"});
    }, 1000);
}

// -----------------------------------------------------------------------------------------------------------------