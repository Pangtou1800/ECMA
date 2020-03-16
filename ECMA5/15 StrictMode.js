// 'use strict';

function strict2() {
    'use strict';
    function f() {
        return 'This is strict mode too.';
    }
    return f();
}

console.log(strict2());

// run now
(function () {
    'use strict';
    // notStrict code...
})();

'abc'.length = 5;

try {
    (function () {
        'use strict';
        'abc'.length = 5;
    })();
} catch (e) {
    console.log(e.toString());
}

console.log('---');

try {
    (function () {
        'use strict';
        let obj = {
            get v() {
                return 1;
            }
        };
        obj.v = 2;
    })();
} catch (e) {
    console.log(e.toString());
}

console.log("---");

// try doesn't stop compiling error:
try {
    (function () {
        // 'use strict';
        let n = 0100;
    })();
} catch (e) {
    console.log(e.toString());
}

function f1() {
    console.log(this === undefined, this.toString());
}

f1();

function f2() {
    'use strict';
    console.log(this === undefined);
}

f2();

function Obj1() {
    'use strict';
    this.a = 1;
}

let obj1 = new Obj1();
console.log(obj1.a);
try {
    let obj1 = Obj1();
} catch (e) {
    console.log(e.toString());
}

function f3(a, a, b) {
    console.log(f3.arguments[0], f3.arguments[1], f3.arguments[2]);
}
f3(1, 2, 5);

let obj2 = Object.create(null, {
    x: {
        value: 1,
        configurable: true
    }
});
console.log('---');
console.log(obj2.x);
delete obj2.x;
try {
    console.log(obj2.x);
} catch (e) {
    console.log(e.toString());
}

function f4(a, b, c, d) {
    'use strict';
    console.log(arguments);
}
f4(1, 2, 3, 5);