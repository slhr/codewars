function generateHashtag(str) {
    if (str === '') return false;

    const hashtagString = "#" + str.split(" ").map(word => {
        if (word.length) word = word[0].toUpperCase() + word.slice(1);
        return word;
    }).join("");

    return hashtagString.length > 140 ? false : hashtagString;
}
