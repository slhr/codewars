function isValidIP(str) {
    if (!/^([0-9]{1,3}[.]){3}[0-9]{1,3}$/.test(str)) return false;
    for (let address of str.split(".")) {
        if (address[0] === "0" && address !== "0") return false;
        if (+address < 0 || +address > 255) return false;
    }
    return true;
}



