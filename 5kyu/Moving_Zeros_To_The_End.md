## Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

---

### Given Code
```javascript
var moveZeros = function (arr) {
    // TODO: Program me
}
```

---

### Solution

```javascript
const moveZeros = function (arr) {
    return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
};
```