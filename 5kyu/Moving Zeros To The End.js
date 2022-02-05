const moveZeros = function (arr) {
    return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
};