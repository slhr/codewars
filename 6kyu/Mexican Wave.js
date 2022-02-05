function wave(str){
    const waveArr = [];

    for (let i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            continue;
        }

        let word = '';

        for (let j = 0; j < str.length; j++) {
            if (j === i) {
                word += str[j].toUpperCase();
            } else {
                word += str[j];
            }
        }

        waveArr.push(word)
    }

    return waveArr;
}