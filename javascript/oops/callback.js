let sum = (a, b) => { return a + b }
let mul = (a, b) => { return a * b }
let calc = (a, b, callback) => {
    return callback(a, b)
}
let r1 = calc(10, 20, sum)
let r2 = calc(10, 2, mul)
console.log(r2)
console.log(r1)
let r3 = calc(20, 10, (a, b) => { return a - b })
console.log(r3)