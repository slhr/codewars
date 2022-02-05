## Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```javascript
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

---

### Given Code
```javascript
function findUniq(arr) {
    // do magic
}
```

---

### Solution

```javascript
function findUniq(arr) {
    return arr[0] === arr[1]
        ? arr.filter(number => number !== arr[0])[0]
        : arr[0] === arr[2]
            ? arr[1] : arr[0];
}
```
