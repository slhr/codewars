function findNb(m) {
    let n = 0;
    let volume = 0;

    while (m > volume) {
        n++;
        volume += n ** 3;
    }

    return volume === m ? n : -1;
}
