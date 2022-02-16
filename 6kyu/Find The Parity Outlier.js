function findOutlier(integers) {
    let [even, odd] = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) even++
        else odd++
    }
    return integers.find(num => even < odd ? num % 2 === 0 : num % 2 !== 0);
}

