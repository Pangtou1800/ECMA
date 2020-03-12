let obj = {
    attr1: 'hey!'
};

let f = function () {
    return this;
};

console.log(f());
console.log(f.call(obj));

var n = 123;
let obj1 = {
    n: 456
};

function a() {
    console.log(this.n);
}

a.call();
a.call(null);
a.call(undefined);
// a.call(window);
a.call(obj1);

console.log(f.call(5)); // auto boxing

function add(num1, num2) {
    console.log(this);
    return num1 + num2;
}
console.log(add.call(5, 1, 2));

obj2 = {};
console.log(obj2.hasOwnProperty('toString'));

obj2.hasOwnProperty = function () {
    console.log('I don\'t know.');
    return true;
}
console.log(obj2.hasOwnProperty('toString'));

console.log(Object.prototype.hasOwnProperty.call(obj, 'toString'));

console.log(add.call({}, 1, 2));
console.log(add.apply({}, [1, 2])); // Unstable result, strange...

let arr1 = [4, 64, 12, 345, 556, 55, 7];
console.log(Math.max.apply(null, arr1));

let arr2 = ['a', , 'b'];

function print(i) {
    console.log(i);
}

arr2.forEach(print);

Array.apply(null, arr2).forEach(print);

let obj3 = new Object();

obj3.f = function () {
    console.log("Am I obj3? " + (this === obj3));
}

let func1 = function () {
    obj3.f.apply(obj3);
}

func1.call({}); // Whatever 'this' is pointing to

let d = new Date();
console.log(d.getTime());

let printFunc = d.getTime;
// console.log(printFunc());
// Error: this is not a date object

let printFunc2 = d.getTime.bind(d);
console.log(printFunc2());

var counter = {
    count: 0,
    inc: function () {
        this.count++;
        console.log(this.count);
    }
};

counter.inc();
counter.inc();

var func2 = counter.inc;
func2();
func2();

func2 = func2.bind(counter);
func2();
func2();

func2 = counter.inc.bind(counter);
func2();
func2();

var obj4 = {
    count: 100
};

console.log(counter.inc === counter.inc.bind(counter));
console.log(counter.inc.bind(counter));

func2 = func2.bind(obj4);
func2();
func2();

func2 = counter.inc.bind(obj4);
func2();
func2();

var add1 = function (x, y) {
    console.log(x * this.m, y * this.n);
};
var obj5 = {
    m: 2,
    n: 3
};
var newAdd = add1.bind(obj5, 5);
newAdd(6);

var counter = {
    count: 0,
    inc: function () {
        'use strict';
        console.log(this.count++);
    }
};
function callIt(callback) {
    for (let i = 0; i < 3; i++) {
        callback();
    }
}

// callIt(counter.inc);
callIt(counter.inc.bind(counter));

obj5 = {
    name: '张三',
    times: [1, 2, 3],
    print: function () {
        this.times.forEach(function (ele) {
            console.log(ele + ": " + this.name);
        })
    }
};

obj5.print();

obj5.print = function () {
    this.times.forEach(function (ele) {
        console.log(ele + ": " + this.name);
    }.bind(this));
};
obj5.print();

console.log("clear");

let arr3 = [4, 2, 1];
let obj6 = arr3.slice(0, 1);
console.log(obj6.toString());

obj6 = Array.prototype.slice.call(arr3, 1, 2);
console.log(obj6.toString());

var slice = Function.prototype.call.bind(Array.prototype.slice);
obj6 = slice(arr3, 2, 3);
console.log(obj6.toString());

var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);

push(arr3, 5, 6);
console.log(arr3.toString());
console.log(pop(arr3));

function func3() {
    console.log(this.v);
}

var o = {
    v: 123
};

var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(func3, o)(); // 丧心病狂的奇巧淫技



console.log('End');