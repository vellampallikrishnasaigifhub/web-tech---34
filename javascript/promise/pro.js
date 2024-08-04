let goto = () => {
    let acc_bal = 5000;
    if (acc_bal > 1500) {
        console.log('enjo pandajo')
    }
    else {
        console.log('than sleep')
    }
}
goto((msg) => { console.log(msg), (err) => { console.log(msg) } })
