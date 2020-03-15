let F = function () { }
let f = new F();
console.log(Object.getPrototypeOf(f) === F.prototype);

console.log(Object.getPrototypeOf(F) === Function.prototype);

let a = {};
let b = { x: 3 };
Object.setPrototypeOf(a, b);
console.log(Object.getPrototypeOf(a), a.hasOwnProperty('x'), a.x);

F1 = function () {
    this.foo = 'bar';
};

let f1 = new F1();
let f2 = Object.setPrototypeOf({}, F1.prototype);
F1.call(f1);

let A = {
    print: function () {
        console.log('hello');
    }
};

let B = Object.create(A);

console.log(Object.getPrototypeOf(B) === A);
B.print();
console.log(B.print === A.print);

let obj = Object.create({}, {
    p1: {
        value: 123,
        enumerable: true,
        configurable: true,
        writable: true,
    },
    p2: {
        value: 'abc',
        enumerable: true,
        configurable: true,
        writable: true,
    }
});

// same as

obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';

let o1 = {};
let o2 = Object.create(o1);
let o3 = Object.create(o2);
console.log(o2.isPrototypeOf(o3));
console.log(o1.isPrototypeOf(o2));

let objProto = Object.prototype;
console.log(objProto.isPrototypeOf({}), objProto.isPrototypeOf([]), objProto.isPrototypeOf(/xyz/), objProto.isPrototypeOf(Object.create(null)));

obj = {};
let p = {};
obj.__proto__ = p;
console.log(Object.getPrototypeOf(obj) === p);

obj = new Object();
console.log(obj.__proto__ === Object.prototype, obj.__proto__ === obj.constructor.prototype);

// puzzling

let P3 = function() {}
let p3 = new P3();

let C1 = function() {}
C1.prototype = p3;

let c1 =  new C1();

console.log(c1.constructor.prototype === p3);

// set constructor at the same time:

let C2 = function() {}
C2.prototype = p3;
C2.prototype.constructor = C2;

let c2 = new C2();
console.log(c2.constructor.prototype === p3);

// All Date's properties arn't enumerable
console.log(Object.getOwnPropertyNames(Date));
console.log(Object.keys(Date).toString());

console.log('length' in Date, 'toString' in Date, 'getValue' in Date);
console.log('length' in (new Date()));

let o4 = { p1: 123 };
let o5 = Object.create(o4, {
    p2: {
        value: 'abe',
        enumerable: true
    }
});

for (p in o5) {
    console.info(p, o5[p]);
}
for (p in o5) {
    if (o5.hasOwnProperty(p)) {
        console.log('Own', p, o5[p]);
    }
}

function inheritedPropertyNames(obj) {
    let props = {};
    while(obj) {
        Object.getOwnPropertyNames(obj).forEach(function(p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}

console.log(inheritedPropertyNames(Date).toString());
console.log(inheritedPropertyNames(o5).toString());

// copy
//  1. result object got the same prototype
//  2. result object got the same properties

function copyObject(orig) {
    let copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).forEach(
        function(propKey) {
            let desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        }
    );
    return target;
}

let o6 = copyObject(o5);
Object.getOwnPropertyNames(o6).forEach(function(prop) {
    console.log(prop, o6[prop]);
});
for (prop in o6) {
    console.log(prop, o6[prop]);
}

Object.keys(o6).forEach(function(prop) {
    console.log(prop, o6[prop]);
});