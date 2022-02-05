function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const stringUniqSymbols = new Set(string.toLowerCase().replace(/[^a-z]/gi, ""));
    return [...stringUniqSymbols].sort().join('') === alphabet;
}