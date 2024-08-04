class account {
    acc_Bal = 0;
    min_Bal = 500;
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount;
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal;
    }
    withdrow(cash) {
        console.log(this.acc_Bal - cash, 'acc bal after withdrow');
    }
}
let a1 = new account();
a1.deposit_Amount(15000)
a1.deposit_Amount(15)
let bal1 = a1.get_Bal()
console.log(bal1, 'get bal')
a1.withdrow(10000)
console.log(a1)
let a2 = new account();
a2.deposit_Amount(230000)
a2.deposit_Amount(20000)
let bal2 = a2.get_Bal()
console.log(bal2, 'get bal')
a2.withdrow(12345)
console.log(a2)
//eg-2
class user {
    current_year = 2024;
    cal_age(year) {
        return this.current_year - year;
    }
}
let u1 = new user()
let u2 = new user()
console.log(u1.cal_age(2003))