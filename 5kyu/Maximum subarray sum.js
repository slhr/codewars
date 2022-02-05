const maxSequence = function (arr) {
    const sumArr = [];

    for (let i = 0; i < arr.length; i++) {
        let maxSubArray = 0;
        for (let j = i; j < arr.length; j++) {
            maxSubArray += arr[j];
            sumArr.push(maxSubArray);
        }
    }

    const max = Math.max(...sumArr);

    if (max < 0) return 0;
    return max;
};


