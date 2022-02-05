#Associative Operation on Range

---

A binary operation op is called associative if

```op(a, op(b, c)) = op(op(a, b), c)```

for example:


```(1 + 2) + 8 = 1 + (2 + 8)```
```(A * B) * C = A * (B * C)``` where ```A, B, C``` are matrices with sizes ```N x M, M x K, K x L```


##Task
---
Inputs:

```arr``` - array of objects with type ```T``` and size ```n``` (1..100 000)
```op``` - associative operation (T, T) -> T
```ranges``` - array of boundaries represented as ```[start, end]``` and size ```m``` (1..100 000)

For each range you need to find the result of applying ```op``` to all elements between the boundaries (start inclusive, end exclusive).

for example:

```
arr = [1, 0, 7, 8, 1]  
range = [1, 4]  
op = +

result = 0 + 7 + 8 = 15
```
##Output:
---

- Array of results for the respective ranges.

##Notes
---
- The time complexity is expected to be ```O((n + m) * log n) * T(op)``` or better.
- Start always less than end.
- Start and end always in range from ```0``` to ```n```.

---
### Given Code
```javascript
function computeRanges(arr, op, ranges) {
  ranges.length = 1 // Nice hack! 
  return []
}
```

---
## Solution

```javascript
function computeRanges(arr, op, ranges) {

    return ranges.map(rangesArr => {
        let [start, end] = rangesArr;

        return arr.slice(start, end).reduce((accumulator, current) => {
            return op(accumulator, current);
        });
    });
}
```

---
