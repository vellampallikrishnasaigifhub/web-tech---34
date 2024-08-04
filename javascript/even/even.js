let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let even = number.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(even)
let even_no = []
for (numm of number) {
    if (numm % 2 === 0) {
        even_no.push(numm)
    }
}
console.log(even_no);
//module.exports=number;