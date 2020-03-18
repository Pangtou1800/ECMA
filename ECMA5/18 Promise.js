function f1(resolve, reject) {
    // 异步代码
}

function f2(resolve, reject) {
    // 异步代码
}

let p1 = new Promise(f1);
p1.then(f2);

// pending, (fulfilled, rejected) => resolved

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then(console.log, console.error);

new Promise(function(resolve, reject) {
    resolve(1);
}).then(function(parm) {
    console.log(parm);
    return 3;
}, console.error).then(console.log);
console.log(2);