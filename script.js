let $inputTxt = document.querySelector("#input_txt");
let $outputTxt = document.querySelector("#output_txt");

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

    let firstHeart = HEARTS[parseInt(hexDigits[0], 16)];
    //console.log("1 digit: " + hexDigits[0] + " index: " + parseInt(hexDigits[0], 16) + " heart: " + firstHeart);
    let secondHeart = HEARTS[parseInt(hexDigits[1], 16)];
    //console.log("2 digit: " + hexDigits[1] + " index: " + parseInt(hexDigits[1], 16) + " heart: " + secondHeart);
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

$inputTxt.addEventListener('input', function () {
    $outputTxt.value = encode($inputTxt.value);
});

$outputTxt.addEventListener("input", function(){
   console.log("Love Text input");
   $inputTxt.value = decode($outputTxt.value);
});