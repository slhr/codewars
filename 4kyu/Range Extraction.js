function solution(list) {
    let resultString = "";
    let diapasonStart;

    for (let i = 0; i < list.length; i++) {
        if (list[i - 1] + 1 === list[i] && list[i] + 1 === list[i + 1]) {
            continue;
        }
        diapasonStart = list[i]

        resultString += diapasonStart

        if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2]) {
            resultString += "-"
        } else {
            resultString += ","
        }
    }
    return resultString.slice(0, -1);
}