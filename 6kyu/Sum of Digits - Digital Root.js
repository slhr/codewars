function digital_root(n) {
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, current) => {
            return sum + +current
        }, 0)
    }
    return n;
}


console.log(digital_root(991))