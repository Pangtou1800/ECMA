function test() {

    var err = new Error("出错了");
    console.log(err.message);

}

function throwit() {
    throw new Error('');
}

function catchit() {
    try {
        throwit();
    } catch (e) {
        console.log(e.stack);
    }
}

catchit();

// SyntaxError:
// var 1a;
// console.log 'hello');

//ReferenceError
//unknownVariable
//console.log() = 1;

// RangeError
//new Array(-1);

// TypeError
// new 123;
// var obj = {};
// obj.unknownMethod();

// URIError
// decodeURI('%2');

// EvalError
// not used anymore...

function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

var myError = new UserError('这是自定义的错误！');

console.log(myError.name);
console.log(myError.message);

function f() {
    try {
        console.log(0);
        throw 'bug';
    } catch (e) {
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }
    console.log(5);
}

f();

function doAction(action) {
    switch (action) {
        case 'hack':
            return 'hack';
        case 'slash':
            return 'slash';
        case 'run':
            return 'run';
        default:
            throw new Error('Invalid action.');
    }
}

function doAction(action) {
    var actions = {
        'hack': function () {
            return 'hack';
        },
        'slash': function () {
            return 'slash';
        },
        'run': function () {
            return 'run';
        }
    }

    if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action.');
    }

    return actions[action]();
}


