let emps = [
    { id: 101, name: "krin", sal: 9089 },
    { id: 102, name: "kris", sal: 5089 },
    { id: 103, name: "veera", sal: 9009 }
]
let createemp = (emp, callback) => {
    setTimeout(() => {
        emps.push(emp);
        callback();
    }, 4000)
}
let getemp = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of emps) {
            rows = rows + `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
    </tr>`}
        document.getElementById('abc').innerHTML = rows
    }, 2000)
}
createemp({ id: 104, name: 'ramu', sal: 37929 }, getemp)