var obj = { p: 'a' };

console.log(Object.getOwnPropertyDescriptor(obj, 'p'));

console.log(obj.toString);
console.log(Object.getOwnPropertyDescriptor(obj, 'toString'));

obj = Object.defineProperties({}, {
    p1: {
        value: 1,
        enumerable: true
    },
    p2: {
        value: 2,
        enumerable: false
    }
});

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.keys(obj));

obj = [1, 2, 3];
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.keys(Object.prototype));
console.log(Object.getOwnPropertyNames(Object.prototype));

obj = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(obj.p);
obj.p = 234;
console.log(obj.p);

obj = Object.defineProperties({}, {
    p1: {
        value: 123,
        enumerable: true
    },
    p2: {
        value: 'abc',
        enumerable: true
    },
    p3: {
        get: function () {
            return this.p1 + this.p2;
        },
        enumerable: true,
        configurable: true
    }
});

console.log(obj.p1, obj.p2, obj.p3);

obj = {};
obj.p = 123;

console.log(Object.getOwnPropertyDescriptor(obj, 'p').value);
Object.defineProperty(obj, 'p', { value: 246 });
console.log(obj.p);


'use strict'; // top of the file
obj = {};

Object.defineProperty(obj, 'p', {
    value: 123,
    writable: false
});

obj.p = 33;

var proto = Object.defineProperty({}, 'foo', {
    value: 'a',
    writable: false
});

obj = Object.create(proto);
console.log(obj.foo);
obj.foo = "sss";
console.log(obj.foo);

Object.defineProperty(obj, 'foo', {
    value: 'hahaha'
});
console.log(obj.foo);
obj.foo = 'sss';
console.log(obj.foo);

obj = {};

Object.defineProperty(obj, 'x', {
    value: 123,
    enumerable: false
});

console.log(obj.x);

for (let key in obj) {
    console.log(key);
}

console.log(Object.keys(obj));
console.log(JSON.stringify(obj));

obj = Object.defineProperty({}, 'p', {
    get: function () {
        return 'getter';
    },
    set: function (value) {
        console.log('setter: ', value);
    }
});

console.log(obj.p);
obj.p = "aaaa";

obj = {
    get p() {
        return 'getter2';
    },
    set p(value) {
        console.log('setter2: ' + value);
    }
};

console.log(obj.p);
obj.p = "bbb";

obj = {
    $n: 5,
    get next() {
        return this.$n++;
    },
    set next(n) {
        if (n >= this.$n) {
            this.$n = n;
        } else {
            throw new Error('New value must be greater than current value!');
        }
    }
};

console.log(obj.next);
console.log(obj.next);
try {
    obj.next = 10;
    obj.next = 5;
} catch (e) {
    console.error(e);
}

var extend = function (to, from) {
    for (let property in from) {
        to[property] = from[property];
    }
    return to;
};

console.log(extend({ c: 4 }, {
    a: 1, b: 3, get d() {
        return 5;
    }
}));

extend = function (to, from) {
    for (let property in from) {
        if (!from.hasOwnProperty(property)) continue;
        Object.defineProperty(to, property, Object.getOwnPropertyDescriptor(from, property));
    }
    return to;
}

console.log(extend({ c: 4 }, {
    a: 1, b: 3, get d() {
        return 5;
    }
}));



