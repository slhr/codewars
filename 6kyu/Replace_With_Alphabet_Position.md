## Replace With Alphabet Position

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

```"a" = 1, "b" = 2```, etc.

### Example

```javascript
alphabetPosition("The sunset sets at twelve o' clock.")
```

Should return `````"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"````` ( as a string )

---

### Given Code
```javascript
function alphabetPosition(text) {
    return text;
}
```

---

### Solution

```javascript
function alphabetPosition(text) {
    const alphabet = " abcdefghijklmnopqrstuvwxyz";

    const letterArray = text.toLowerCase().split("").filter(letter => {
        return letter.match(/[a-z]/i);
    });

    return letterArray.map(letter => alphabet.indexOf(letter)).join(" ");
}
```