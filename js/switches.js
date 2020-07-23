// -----------------------------------------------------------------------------------------------------------------

// Switches Functionality

// -----------------------------------------------------------------------------------------------------------------

// Variables

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

// > Read More Button - onClick()



// -----------------------------------------------------------------------------------------------------------------