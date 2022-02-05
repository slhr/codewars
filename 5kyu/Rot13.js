function rot13(message){
    let encodedString  = '';

    for (let i = 0; i < message.length; i++) {

        let newPosition = message.charCodeAt(i) + 13;

        if (65 <= message.charCodeAt(i) && message.charCodeAt(i) <= 90) {
            //upperCase
            newPosition = newPosition > 90 ? newPosition - 26 : newPosition;

        } else if (97 <= message.charCodeAt(i) && message.charCodeAt(i) <= 122) {
            //lowerCase
            newPosition = newPosition > 122 ? newPosition - 26 : newPosition;

        } else {
            // other symbols
            newPosition = message.charCodeAt(i);
        }

        encodedString += String.fromCharCode(newPosition);
    }

    return encodedString;
}