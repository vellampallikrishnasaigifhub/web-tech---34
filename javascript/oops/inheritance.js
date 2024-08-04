class Parent {
    asset = "DNA"
    constructor() {
        console.log('p-c')
    }
    m1() {
        console.log('p-m1')
    }
    m2() {
        console.log('p-m2')
    }
}
class Child extends Parent {
    qulity = 'good'
    constructor() {
        super();
        console.log('c-c')
    }
    m3() { console.log('c-m3') }
}
let c1 = new Child()
console.log(c1)
c1.m1()
c1.m2()
c1.m3()
