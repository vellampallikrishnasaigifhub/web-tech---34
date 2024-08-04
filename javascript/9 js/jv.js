// const input = require('prompt-syc')();
// let a = parseInt(input("a:"))
// let b = parseInt(input("b:"))
// console.log(a + b)

import promptSync from 'prompt-sync';

const input = promptSync();
let a = parseInt(input("a:"))
let b = parseInt(input("b:"))
console.log(a + b)