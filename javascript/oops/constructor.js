//constructor is a specal method to intilize object values.
//constructor method will inoke automatically at the time of obj creation; only ones
//we can't invoke explicity
class text {
    /*acc_Id;
    acc_name;
    acc_bal;*/
    min_bal = 4567;
    constructor(id, Name, amount) {
        this.acc_Id = id;
        this.acc_name = Name;
        this.acc_bal = amount
    }
    get_Bal() {
        return this.acc_bal - this.min_bal;
    }
    deposit_Amount(amount) {
        this.acc_bal = this.acc_bal + amount;
    }
    withdrow(cash) {
        this.acc_bal = this.acc_bal - cash;
    }
}
let t1 = new text(101, "rahul", 56890)
let t2 = new text(102, "rtd", 54327)
console.log(t1.get_Bal(), "get")
console.log(t2.get_Bal(), "get")
t1.deposit_Amount(23564)
t2.deposit_Amount(2364)
t1.withdrow(34287)
t2.withdrow(3428)
console.log(t1)
console.log(t2)