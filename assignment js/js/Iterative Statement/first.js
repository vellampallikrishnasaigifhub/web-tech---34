//38. Write a program to print 1 to 10 numbers using a while loop
let a = 1
while (a <= 10) {
    console.log(a)
    ++a
}
//44. Write a program to print 1 to 100 numbers using a for loop
for (i = 1; i <= 100; i++) { console.log(i) }
//50. Write a program to print 1 to 10 numbers using a do while loop
let c = 1
do {
    console.log(c, '1 to 10')
    ++c
} while (c <= 10)
//39. Write a program to print 10 to 1 number using a while loop
let b = 10
while (b > 0) {
    console.log(b)
    b--
}
//45. Write a program to print 100 to 1 number using a for loop
for (i = 100; i > 0; i--) {
    console.log(i)
}
//51. Write a program to print 10 to 1 number using a do while loop
let s = 10
do {
    console.log(s)
    s--
} while (s > 0)
//40. Write a program to print 5 to 15 numbers using while Loop
let d = 5
while (d <= 15) {
    console.log(d)
    d++
}
//41. Write a program to print 15 to 10 numbers using while Loop
let w = 15
while (w >= 5) {
    console.log(w)
    w--
}
//42. Write a program to print 1 to 10 even numbers using a while loop
let e = 1
while (e <= 10) {
    if (e % 2 == 0) {
        console.log(e)
    } e++
}
//43. Write a program to print 1 to 10 odd numbers using while Loop
let o = 1
while (o <= 10) {
    if (o % 2 != 0) {
        console.log(o)
    } o++
}
//46. Write a program to print 50 to 150 numbers using For Loop
for (i = 50; i <= 150; i++) {
    console.log(i)
}
//47. Write a program to print 15 to 10 numbers using for Loop
for (i = 15; i >= 10; --i) {
    console.log(i)
}
//48. Write a program to print 1 to 10 even numbers using a for loop
for (i = 0; i <= 10; i++) { if (i % 2 == 0) { console.log(i) } }
//49. Write a program to print 1 to 10 odd numbers using For Loop
for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
//56. Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
let t = 1
do {
    console.log(`4*${t}=${4 * t}`)
    t++
} while (t <= 10)
//57. Write a program to print a multiplication table of 6 using a while loop.
let x = 1
while (x <= 10) {
    console.log(`6*${x}=${6 * x}`)
    x++
}
//58. Write a program Factors of 24 using while loop
let f = 24
let far = 1
while (far <= f) {
    if (f % far == 0) {
        console.log(far)
    }
    far++
}
