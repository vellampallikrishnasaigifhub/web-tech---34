//JavaScript Conditional Statement Assignments:
//Write a program to check if a number is divisible by 7 or not?
let i = 21
if (i % 7 == 0) {
    console.log(i, 'divisible by 7')
} else {
    console.log(i, 'not divisible by 7')
}
//Write a program to check if a number is multiple of 3 or not?
let q = 21
if (q % 3 == 0) {
    console.log(i, 'multiple of 3')
} else {
    console.log(i, 'not multiple of 3')
}
// Write a program to check if a number is positive or not?
let e = 34
if (e > 0) {
    console.log(i, 'positive')
} else {
    console.log(i, 'not positive')
}
//Write a program to check if a number is 3-digit numbers or not?
let num = 34
if (num >= 100 && num <= 999) {
    console.log(num, '3-digit numbers')
} else {
    console.log(num, 'not 3-digit numbers')
}
// Write a program to print even or odd for a given number?
let n = 8
if (n % 2 == 0) {
    console.log(`${n}even`)
}
else { console.log(`${n}odd`) }
//Write a program to print the greatest number in given two numbers?
let a = 12
let b = 15
if (a > b) {
    console.log(a)
} else { console.log(b) }
//Write a program to print the least number given two numbers?
if (a < b) {
    console.log(a)
} else { console.log(b) }
//Write a program to print the greatest number in given three numbers?
let c = 67
if (a > b && a > c) {
    console.log(a)
} else if (b > c) { console.log(b) }
else { console.log(c) }
// Write a program to print the least number in given three numbers?
if (a < b && a < c) {
    console.log(a)
} else if (b < c) {
    console.log(b)
}
else { console.log(c) }
//Write a program to print the given 3 numbers in ascending orders?
//Write a program to print the given 3 numbers in descending orders?
//JavaScript Program to find largest of Three Numbers?
if (a > b && a > c) {
    console.log(a, 'largest')
} else if (b > c) { console.log(b, 'largest') }
else { console.log(c, 'largest') }
//JS Program check if a number is divisible by 7 or not using a ternary operator?
jk = 21
console.log(jk % 7 == 0 ? 'divisible by 7' : 'not divisible by 7')
//Program to check if a number is multiple of 3 or not using a ternary operator?
console.log(jk % 3 == 0 ? 'multiple of 3' : 'not number is multiple of 3')
//Write a program to check if a number is positive or not using a ternary operator?
console.log(jk > 0 ? 'positive' : 'not positive')
//JS Program to check if a number is 3-digit numbers or not using a ternary operator?
console.log(jk <= 100 && jk >= 999 ? '3-digit numbers' : 'not 3-digit numbers')
// Write a program to print even or odd for a given number using a ternary operator?
console.log(jk % 2 == 0 ? 'even' : 'odd')