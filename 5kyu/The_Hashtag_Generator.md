## The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return `false`.
- If the input or the result is an empty string it must return `false`.

### Examples

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

---

### Given Code
```javascript
function generateHashtag (str) {
}
```

---

### Solution

```javascript
function generateHashtag(str) {
    if (str === '') return false;

    const hashtagString = "#" + str.split(" ").map(word => {
        if (word.length) word = word[0].toUpperCase() + word.slice(1);
        return word;
    }).join("");

    return hashtagString.length > 140 ? false : hashtagString;
}
```