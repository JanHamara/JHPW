// -----------------------------------------------------------------------------------------------------------------

// Awards Page / - Switches Functionality

// -----------------------------------------------------------------------------------------------------------------

// Variables

const leftSwitch = $("#jh-awards-switch-left");
const rightSwitch = $("#jh-awards-switch-right");

const leftSwitchImg = document.getElementById("jh-as-img-left");
const rightSwitchImg = document.getElementById("jh-as-img-right");

const pcDivider = "./assets/00_IMG/04_Awards/about-pc-divider.png";
const pcDividerWhite = "./assets/00_IMG/04_Awards/about-pc-divider-white.png";
const pcDividerReverse = "./assets/00_IMG/04_Awards/about-pc-divider-reverse.png";
const pcDividerWhiteReverse = "./assets/00_IMG/04_Awards/about-pc-divider-white-reverse.png";

// -----------------------------------------------------------------------------------------------------------------

// onHover()

leftSwitch.on('mouseenter', function() {
    leftSwitchImg.src = pcDividerReverse;
}).on('mouseleave', function() {
    leftSwitchImg.src = pcDividerWhiteReverse;
});

rightSwitch.on('mouseenter', function() {
    rightSwitchImg.src = pcDivider;
}).on('mouseleave', function() {
    rightSwitchImg.src = pcDividerWhite;
});

// -----------------------------------------------------------------------------------------------------------------

// Awards Display Switching

awards = document.getElementsByClassName("jh-awards-content");

let currentAward = 0;
let totalAwardsNumber = 2; // Total number of awards, minus 1

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

function nextSection(current, awards) {
    displayAward(current, current+1, awards);
}

function previousSection(current, awards) {
    displayAward(current, current-1, awards);

}

function firstSection(total, awards) {
    displayAward(total, 0, awards);
}

function lastSection(total, awards) {
    displayAward(0, total, awards);
}

function displayAward(a,b, awards) {
    awards[a].style.opacity = "0";
    setTimeout(function() {
        awards[a].style.display = "none";
        awards[b].style.display = "block";
    }, 1000);
    setTimeout(function() {
        awards[b].style.opacity = "1";
    }, 1100);
}

// -----------------------------------------------------------------------------------------------------------------

// Read More Button - onHover()

readMore = document.getElementsByClassName("jh-awards-button");

for (let i = 0; i < 5; i++) {
    readMore[i].addEventListener('mouseenter', function() {
        readMore[i].children[0].src = pcDivider;
    });
    readMore[i].addEventListener('mouseleave', function() {
        readMore[i].children[0].src = pcDividerWhite;
    });
};