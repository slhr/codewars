function alphabetPosition(text) {
    const alphabet = " abcdefghijklmnopqrstuvwxyz";

    const letterArray = text.toLowerCase().split("").filter(letter => {
        return letter.match(/[a-z]/i);
    });

    return letterArray.map(letter => alphabet.indexOf(letter)).join(" ");
}
