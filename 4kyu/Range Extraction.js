function solution(list) {
    let resultString = "";
    let diapasoneStart;

    for (let i = 0; i < list.length; i++) {
        if (list[i - 1] + 1 === list[i] && list[i] + 1 === list[i + 1]) {
            continue;
        }
        diapasoneStart = list[i]

        resultString += diapasoneStart

        if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2]) {
            resultString += "-"
        } else {
            resultString += ","
        }
    }
    return resultString.slice(0, -1);
}