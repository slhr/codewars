function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(r) { return l => l + r}
function minus(r) { return l => l - r}
function times(r) { return l => l * r}
function dividedBy(r) { return l => Math.floor(l / r)}

