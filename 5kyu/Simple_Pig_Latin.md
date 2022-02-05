## Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Examples

```javascript
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

---

### Given Code
```javascript
function pigIt(str){
    //Code here
}
```

---

### Solution

```javascript
function pigIt(str) {
    const wordsArr = str.split(" ").map(word => {
        if (/[.,!?]/.test(word)) return word;
        return word.slice(1, word.length) + word[0] + "ay";
    });

    return wordsArr.join(" ");
}
```