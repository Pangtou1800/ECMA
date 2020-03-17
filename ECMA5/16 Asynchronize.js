function f1() {
    // ...
}
function f2() {
    // ...
}

// Callback example:
function f3(callback) {
    callback();
}

function f4() {
    // ...
}
f3(f4);

function async(arg, callback) {
    console.log('Param is : ' + arg + ', return in 1 second.');
    setTimeout(function () {
        callback(arg * 2);
    }, 1000);
}
function final(value) {
    console.log('Finished. ' + value);
}

/* crazy callback

async(1, function (value) {
    console.log(value);
    async(2, function (value) {
        console.log(value);
        async(3, function (value) {
            console.log(value);
            async(4, function (value) {
                console.log(value);
                async(5, function (value) {
                    console.log(value);
                    async(6, final);
                })
            });
        });
    });
});

*/

// 串行执行
let items = [1, 2, 3, 4, 5, 6];
let results = [];

function async2(arg, callback) {
    console.log('Param is ' + arg + ', return in 1 second.');
    setTimeout(function () {
        callback(arg * 2);
    }, 1000);
}

function final2(arg) {
    console.log('Finished. ' + arg);
}

let series = function (item) {
    if (item) {
        async2(item, function (result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final(results[results.length - 1]);
    }
}

// series(items.shift());

// 并行执行

let items2 = [1, 2, 3, 4, 5, 6];
let results2 = [];
/*

items2.forEach(function(item) {
    async2(item, function(result) {
        results2.push(result);
        if (results2.length === items2.length) {
            final(results2[results2.length - 1]);
        }
    })
});

*/

//并行串行结合

let running = 0;
let limit = 2;

function launcher() {
    while (running < limit && items.length > 0) {
        let item = items.shift();
        async(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running === 0) {
                final(results);
            }
        });
        running++;
    }
}

launcher();