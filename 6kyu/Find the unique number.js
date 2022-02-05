function findUniq(arr) {
    return arr[0] === arr[1]
        ? arr.filter(number => number !== arr[0])[0]
        : arr[0] === arr[2]
            ? arr[1] : arr[0];
}