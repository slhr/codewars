function humanReadable(seconds) {
    let hh = twoDigits(Math.floor(seconds / 3600));
    let mm = twoDigits(Math.floor(seconds / 60) % 60);
    let ss = twoDigits(seconds % 60);

    return `${hh}:${mm}:${ss}`;
}

function twoDigits(number) {
    return ("0" + number).slice(-2);
}


