function pigIt(str) {
    const wordsArr = str.split(" ").map(word => {
        if (/[.,!?]/.test(word)) return word;
        return word.slice(1, word.length) + word[0] + "ay";
    });

    return wordsArr.join(" ");
}