function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

// testing
// var cyphertext = encrypt('Testing', '12345678')
// console.log(cyphertext);
// var cleartext = decrypt(cyphertext, '12345678')
// console.log(cleartext)

function encrypttext(){
    let messageToEncrypt = document.getElementById('encmessage').value
    let encryptKey = document.forms.keyform.enckey.value
    let encryptedMessage = encrypt(messageToEncrypt, encryptKey)
    console.log(encryptedMessage)
    if(encryptedMessage == ''){
        encryptedMessage = 'Encryption Failed'
    }
    document.getElementById('messagediv').innerHTML = '<p>Encrypted message:</p><code>' + encryptedMessage + '</code>'
}

function decrypttext(){
    let messageToDecrypt = document.getElementById('decmessage').value
    let encryptKey = document.forms.keyform.enckey.value
    let decryptedMessage = decrypt(messageToDecrypt, encryptKey)
    console.log(decryptedMessage)
    if(decryptedMessage == ''){
        decryptedMessage = 'Decryption Failed'
    }
    document.getElementById('messagediv').innerHTML = '<p>Decrypted message:</p><code>' + decryptedMessage + '</code>'
}

window.onload=function(){
    document.getElementById('encryptbtn').addEventListener('click', encrypttext)
    document.getElementById('decryptbtn').addEventListener('click', decrypttext)
}
