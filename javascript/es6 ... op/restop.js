function add(a, ...b) {
    console.log(a, ...b)
}
add(10, 20)
add(10, 20, 30, 40)
let rest = (a, ...b) => { console.log(a, ...b) }
rest(1, 2)
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)