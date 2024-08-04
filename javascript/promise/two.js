let emps = [
    { id: 101, name: 'remu', sal: 849 },
    { id: 104, name: 'remu', sal: 849 }
]
let createemp = () => {
    return new Promise((resolve, reject) => {
        let falg = false;
        setTimeout(() => {
            let flag = false;
            emps.push(emp)
            falg === true ? resolve('insert') : reject('false data')
        }, 4000)
    })
}
let getemp = () => {
    setTimeout(() => {
        let rows = ''
        for (emp of emps) {
            rows = rows + `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        }
        document.getElementById('info').innerHTML = rows
    }, 2000)
}
// createemp({id:102,name:'hxi',sal:9309}).then((msg) => {console.log(msg)
//     getemp()
//  }).catch((err) => {console.log(err)})
// //getemp()