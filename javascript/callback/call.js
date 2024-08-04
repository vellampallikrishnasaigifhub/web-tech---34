let createmp = (callback) => {
    setTimeout(() => {
        console.log('name')
        callback()
    }, 4000)
}
let getemp = () => {
    setTimeout(() => {
        console.log('hii')
    })
}
createmp(getemp)