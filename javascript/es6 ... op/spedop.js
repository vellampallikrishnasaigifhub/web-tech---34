let ename = ['sr', 'hj', 'jfk', 'fadnj', 'ndfjk']
let dl = [1, 2, 3, 4, 6, 5]
let user = {
    uid: 101,
    uname: 'rahul',
    usal: 18203,
    email: 'efjdsnj@gmail.com'
}
let emp = {
    eid: 102,
    emane: 'ehj',
    esal: 8927289,
    email: 'vh'
}
let new_ename = [...ename, ...dl];
let pe = { ...user, ...emp }
console.log(new_ename)
console.log(pe)