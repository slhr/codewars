## Rot13

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

---

### Given Code
```javascript
function rot13(message){
    //your code here
}
```

---

### Solution

```javascript
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
```