function productFib(prod) {
    let fibA = 1;
    let fibB = 1;
    let counter = 2;

    while (fibA * fibB < prod) {
        fibA = fib(counter);
        fibB = fib(counter + 1);
        counter++
    }

    return [fibA, fibB, fibA * fibB === prod]
}

function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
