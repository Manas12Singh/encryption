

const form = document.getElementById("myForm");

const typeInput = document.getElementById("type");
const plaintextInput = document.getElementById("plaintext");

type.addEventListener("input", updateForm);

function removeDynamicElements() {
    var dynamic = document.querySelectorAll(".dynamic");
    dynamic.forEach(element => {
        element.parentNode.removeChild(element);
    });
}

function createLabel(htmlFor, text) {
    const tempLabel = document.createElement("label");
    tempLabel.classList = "dynamic";
    tempLabel.htmlFor = htmlFor;
    tempLabel.innerText = text;
    return tempLabel;
}

function createInput(type, id) {
    const tempInput = document.createElement("input");
    tempInput.classList = "dynamic";
    tempInput.id = tempInput.name = id;
    tempInput.type = "text";
    if(type=="")
    return tempInput;
}

function ceaserEncrypt(plainText, key) {
    let cipherText = "";
    for (let i = 0; i < plainText.length; i++) {
        if (plainText[i].match(/[a-zA-Z]/)) {
            let offSet = (plainText[i] === plainText[i].toUpperCase()) ? 65 : 97;
            cipherText += String.fromCharCode((plainText[i].charCodeAt(0) + key - offSet) % 26 + offSet);
        } else {
            cipherText += plainText[i];
        }
    }
}

function updateForm() {
    removeDynamicElements();
    const type = typeInput.value;
    const cipherButton = document.createElement("button");
    cipherButton.classList = "dynamic";
    switch (type) {
        case "ceaser":
            form.appendChild(createLabel("key", "Key"));
            form.appendChild(createInput("number", "key"));
            break;
        case "vigenere":
        case "playfair":
            form.appendChild(createLabel("key", "Key"));
            form.appendChild(createInput("text", "key"));
            break;
        case "rsa":
        default:
            break;
    }
}