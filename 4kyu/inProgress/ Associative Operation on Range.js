function computeRanges(arr, op, ranges) {
    return ranges.map(rangesArr => {
        let [start, end] = rangesArr;
        return arr.slice(start, end).reduce((accumulator, current) => {
            return op(accumulator, current);
        });
    });
}

