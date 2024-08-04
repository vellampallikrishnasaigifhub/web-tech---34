let emp = {
    'id': 101,
    'name': 'ramu',
    'sal': 45000
}
let ename = ['priya', 'ramash', 'raju', 'krishna', 'sai']
let emp_str = '{"id":102,"name":"rmu","sal":123}'
/*Object.values()
Object.keys()*/
//add an element in a object.
Object.assign(emp, { 'loc': 'ongole' })
//to print object in like string in html.
console.log(JSON.stringify(emp))
//to conver string in to object.
console.log(JSON.parse(emp_str))