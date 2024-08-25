function isValidText(text) {
    const regex = /^[a-z\s]+$/;  // Solo permite letras minúsculas y espacios
    return regex.test(text);
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;

    if (!isValidText(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin caracteres especiales.");
        return;
    }

    let encryptedText = inputText.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) + 3);
    }).join('');
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById("outputText").value;

    if (!isValidText(encryptedText)) {
        alert("El texto a desencriptar contiene caracteres inválidos.");
        return;
    }

    let decryptedText = encryptedText.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) - 3);
    }).join('');
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        document.execCommand("copy");
        alert("Texto copiado al portapapeles.");
    } catch (err) {
        alert("No se pudo copiar el texto.");
    }

    // Opcional: Deseleccionar el texto después de copiar
    window.getSelection().removeAllRanges();
}
