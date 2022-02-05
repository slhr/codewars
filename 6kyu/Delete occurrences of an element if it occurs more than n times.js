function deleteNth(arr, n) {
    const set = new Set(arr);
    const counterObj = {};

    [...set].forEach(number => {
        counterObj[number] = n;
    });

    const resultArr = [];
    arr.forEach(number => {
        if (counterObj[number]) {
            counterObj[number]--;
            resultArr.push(number);
        }
    });

    return resultArr;
}