let obj = {};
Object.defineProperties(obj, {
    'foo': {
        value: 1,
        enumerable: true
    },
    'bar': {
        value: 2,
        enumerable: false
    }
});

console.log(JSON.stringify(obj));

obj = {
    a: 33,
    bb: '444'
};

JSONObj = JSON.stringify(obj);
console.log(JSONObj);

obj = {
    'prop1': 'value1',
    'prop2': 'value2',
    'prop3': 'value3'
};

let selectedProperties = ['prop1', 'prop2'];
console.log(JSON.stringify(obj, selectedProperties));

obj = {
    aa: 'haha',
    bb: function () {
        console.log("Are you OK?");
    }
};

console.log(JSON.stringify(obj));

function f(key, value) {
    if (typeof value === "number") {
        return value ** 2;
    }
    return value;
}

console.log(JSON.stringify({ a: 1, b: 2 }, f));

obj = {
    a: {
        b: 1
    }
};

f = function (key, value) {
    console.log("[" + key + "]:" + value);
    return value;
}
console.log(JSON.stringify(obj, f));

console.log(JSON.stringify({ p1: 1, p2: 2 }, null, '|-'));

let user = {
    firstName: "三",
    lastName: "张",
    get fullName() {
        return this.lastName + this.firstName;
    }
};

console.log(JSON.stringify(user));

user = {
    firstName: "三",
    lastName: "张",
    get fullName() {
        return this.lastName + this.firstName;
    },
    toJSON: function () {
        return {
            name: this.lastName + this.firstName
        };
    }
}
console.log(JSON.stringify(user));

obj = JSON.parse('{"name":"张三"}');
console.log(obj);
