let $clearTxt = document.querySelector("#clear_txt");
let $loveTxt = document.querySelector("#love_txt");

//HEARTS = "🩷🧡💛💚🩵💙💜🖤🩶🤍🤎💖💞💓💟💝";
HEARTS = [
    "🩷", "🧡", "💛", "💚",
    "🩵", "💙", "💜", "🖤",
    "🩶", "🤍", "🤎", "💖",
    "💞", "💓", "💟", "💝"];

function hexDigits(char) {
    let dec_val = char.charCodeAt(0)
    let hex_val = dec_val.toString(16)
    return hex_val.split("")
}

function heartsFromDigits(hexDigits) {
    let firstHeart, secondHeart;
    if (hexDigits.length === 2) {
        firstHeart = HEARTS[parseInt(hexDigits[0], 16)];
        //console.log("1 digit: " + hexDigits[0] + " index: " + parseInt(hexDigits[0], 16) + " heart: " + firstHeart);
        secondHeart = HEARTS[parseInt(hexDigits[1], 16)];
        //console.log("2 digit: " + hexDigits[1] + " index: " + parseInt(hexDigits[1], 16) + " heart: " + secondHeart);
    }else if (hexDigits.length === 1){
        firstHeart = HEARTS[0];
        secondHeart = HEARTS[parseInt(hexDigits[0], 16)];
    }
    return firstHeart + secondHeart;
}

function encode(message) {
    let lovetext = [];
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        //console.log("char: " + char);
        //console.log("digits: " + hexDigits(char))
        lovetext.push(heartsFromDigits(hexDigits(char)));
    }
    return lovetext.join("")
}

function decode(message) {
    let cleartext = [];
    for (let i = 0; i < message.length; i += 4) {
        let firstHeart = message[i] + message[i + 1];
        let secondHeart = message[i + 2] + message[i + 3];

        let hexVal =
            HEARTS.indexOf(firstHeart).toString(16) +
            HEARTS.indexOf(secondHeart).toString(16);

        let decVal = parseInt(hexVal, 16);
        cleartext.push(String.fromCharCode(decVal))
    }
    return cleartext.join("")
}

$clearTxt.addEventListener('input', function () {
    $loveTxt.value = encode($clearTxt.value);
});

$loveTxt.addEventListener("input", function () {
    $clearTxt.value = decode($loveTxt.value);
});