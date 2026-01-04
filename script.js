// I don't know how to make variables global
// any other way, okay? Don't judge me :c


var newRGB
var newHEX
var expectedRGB
var expectedHEX


function setNewHEX() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rHEX = r.toString(16).padStart(2, "0");
    let gHEX = g.toString(16).padStart(2, "0");
    let bHEX = b.toString(16).padStart(2, "0");

    return newHEX = rHEX + gHEX + bHEX;
};

function setNewRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rRGB = r.toString().padStart(3, "0");
    let gRGB = g.toString().padStart(3, "0");
    let bRGB = b.toString().padStart(3, "0");

    return newRGB = `R: ${rRGB}, G: ${gRGB}, B: ${bRGB}`;
};



function findExpectedRGB() {
    let r = parseInt(newHEX.slice(0,2), 16);
    let g = parseInt(newHEX.slice(2,4), 16);
    let b = parseInt(newHEX.slice(4,6), 16);

    let rRGB = r.toString().padStart(3, "0");
    let gRGB = g.toString().padStart(3, "0");
    let bRGB = b.toString().padStart(3, "0");

    expectedRGB = `${rRGB}` + `${gRGB}` + `${bRGB}`;
};

function findExpectedHEX() {
    let messyRGB = newRGB
    let cleanRGB = messyRGB.replace(/[^0-9]/g, "");

    let r = parseInt(cleanRGB.slice(0,3), 10);
    let g = parseInt(cleanRGB.slice(3,6), 10);
    let b = parseInt(cleanRGB.slice(6,9), 10);

    let rHEX = r.toString(16).padStart(2, "0");
    let gHEX = g.toString(16).padStart(2, "0");
    let bHEX = b.toString(16).padStart(2, "0");

    expectedHEX = `${rHEX}` + `${gHEX}` + `${bHEX}`;
};



function createFieldRGBandHEXvalue() {
    let gameDiv = document.querySelector(".HEXtoRGB");

    gameDiv.innerHTML = "";

    let RGBinput = document.createElement("input");
    RGBinput.type = "number";
    RGBinput.id = "RGBid";
    RGBinput.placeholder = "Enter your RGB! (rrrgggbbb)";
    
    let showHEX = document.createElement("p");
    showHEX.textContent = `Your HEX: ${newHEX}`;

    gameDiv.appendChild(RGBinput);
    gameDiv.appendChild(showHEX);
};

function createFieldHEXandRGBvalue() {
    let gameDiv = document.querySelector(".RGBtoHEX");

    gameDiv.innerHTML = "";

    let HEXinput = document.createElement("input");
    HEXinput.type = "text";
    HEXinput.id = "HEXid";
    HEXinput.placeholder = "Enter your HEX! (no #)";

    let showRGB = document.createElement("p");
    showRGB.textContent = `Your RGB: ${newRGB}`;

    gameDiv.appendChild(HEXinput);
    gameDiv.appendChild(showRGB);
};



function congrats() {
    let gameDiv = document.querySelector(".output");

    gameDiv.innerHTML = "";

    let congratsText = document.createElement("h1");    //also add an image of a you tried star
    congratsText.id = "outputText";
    congratsText.textContent = "Congrats!! You got it right! Also, you're autistic~";

    gameDiv.appendChild(congratsText);
};

function nuhUh() {
    let gameDiv = document.querySelector(".output");

    gameDiv.innerHTML = "";

    let nuhUhText = document.createElement("h1");
    nuhUhText.id = "outputText";
    nuhUhText.textContent = "Nyope, you were wrong! Try again!";

    gameDiv.appendChild(nuhUhText);
};



function startHEXtoRGB() {
    setNewHEX();
    findExpectedRGB();
    createFieldRGBandHEXvalue();

    checkIfRGBisValid();
};

function startRGBtoHEX() {
    setNewRGB();
    findExpectedHEX();
    createFieldHEXandRGBvalue();

    checkIfHEXisValid();
};



function checkIfRGBisValid() {
    let input = document.getElementById("RGBid");
    console.log(expectedRGB); //debug

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let userInput = input.value;

            if (userInput === expectedRGB) {
                congrats();
            } else {
                nuhUh();
            };
        };
    });
};

function checkIfHEXisValid() {
    let input = document.getElementById("HEXid");
    console.log(expectedHEX);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let userInput = input.value;

            if (userInput === expectedHEX) {
                congrats();
            } else {
                nuhUh();
            };
        };
    });
};
