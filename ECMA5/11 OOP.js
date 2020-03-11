var Vehicle = function () {
    this.price = 1000;
}

let v = new Vehicle();
console.log(v.price);

v = Vehicle();

console.log(v);
console.log(price);

function Fubar(foo, bar) {
    'use strict';
    this._foo = foo;
    this._bar = bar;
}

// Fubar();
class Fubar2 {
    constructor(foo, bar) {
        if (!(this instanceof Fubar2)) {
            return new Fubar2(foo, bar);
        }
        this._foo = foo;
        this._bar = bar;
    }
}

// console.log(Fubar2(1, 2)._foo);
console.log(new Fubar2(2, 1)._foo);

Vehicle = function () {
    this.price = 1000;
    return 1000; // dismissed!
}

console.log(new Vehicle() === 1000);

let person1 = {
    name: '张三',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};

let person2 = Object.create(person1);

console.log(person2.name);
person2.greeting();

function f() {
    return '姓名: ' + this.name;
}

let A = {
    name: '张三',
    describe: f
}
let B = {
    name: '李四',
    describe: f
}

console.log(A.describe(), B.describe());

var name = '王五';
var f1 = A.describe;
console.log(f1());

var func1 = function () {
    console.log(this.x);
}

var x = 1;
var obj = {
    f: func1,
    x: 2
};

func1();
obj.f();

console.log(this);
console.log(this.func1);

var o = {
    f1: function () {
        console.log(this);
        var f2 = function () {
            console.log(this);
        }();
    }
}
o.f1();

o = {
    f1: function () {
        console.log("f1", this);
        var that = this;
        var f2 = function () {
            console.log("f2", that);
        }();
    }
}
o.f1();

let obj1 = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        });
    }
}
obj1.f();

let obj2 = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function () {
        let that = this;
        this.p.forEach(function (item) {
            console.log(that.v + " " + item);
        });
    },
    f2: function () {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        }, this);
    }
}
obj2.f();
obj2.f2();
