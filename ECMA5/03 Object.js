Object.print = function (o) {
    console.log("Object.print:", o);
};

Object.prototype.print1 = function (o) {
    console.log("Object.prototype.print:", o);
};

Object.print({ AA: 'haha' });

Object.print1({ AA: 'hahaha' });

var obj = new Object();
try {
    obj.print({ BB: 'haha' });
}
catch (e) {
    console.error(e);
}

obj.print1({ BB: 'hahaha' });

obj = Object(1);
console.log(obj instanceof Object);
console.log(obj instanceof Number);

obj = Object('a');
console.log(obj instanceof Object);
console.log(obj instanceof String);

obj = Object(true);
console.log(obj instanceof Object);
console.log(obj instanceof Boolean);

var arr = [];
obj = Object(arr);
console.log(obj === arr);

var value = {};
obj = Object(value);
console.log(obj === value);

var fn = function () { }
obj = Object(fn);
console.log(obj === fn);

function isObject(value) {
    return value === Object(value);
}

console.log(isObject([]));
console.log(isObject('aa'));

obj = new Object(123);
obj.a = 123;
console.log(obj);

obj = {
    p1: 123,
    p2: 456
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

obj = [
    1234, 5668
];

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(obj == obj.valueOf());

obj = new Object();
console.log(1 + obj);

obj.valueOf = () => { return 2; }
console.log(1 + obj);

console.log([1, 2, 3].toString());
console.log('123'.toString());
console.log((function () {
    return 123;
}).toString());
console.log((new Date()).toString());

function testFunc(num1, num2) {
    console.log(num1, num2);
}

testFunc.call(new testFunc(3, 4), 1, 2);

console.log(Object.prototype.toString.call(2));
console.log(Object.prototype.toString.call(''));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(Math));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call([]));

var type = function (o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

console.log(type({}));
console.log(type([]));
console.log(type(5));
console.log(type(null));
console.log(type());
console.log(type(/abcd/));
console.log(type(new Date()));

['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'].forEach(
    function (t) {
        type['is' + t] = function (o) {
            return type(o) === t.toLowerCase();
        }
    }
);

console.log(type.isObject({}),
    type.isObject([]),
    type.isNumber(NaN),
    type.isRegExp(/abs/)
);

var person = {
    toString: function () {
        return 'Henry Norman Bethune';
    },
    toLocaleString: function () {
        return '白求恩';
    }
};
console.log(person.toString(), person.toLocaleString());

console.log(person.hasOwnProperty('toString'));
