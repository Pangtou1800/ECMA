/* var timerId = setTimeout(func|code, delay); */

function f() {
    console.log(2);
}

function test1() {
    console.log(1);
    setTimeout(f, 1000);
    console.log(3);
}

// test1();

function test2() {
    setTimeout(function (a, b) {
        console.log(a, b);
    }, 1000, 1, 2);
}
// test2();

var x = 1;
var obj = {
    x: 2,
    y: function () {
        console.log(this.x);
    }
};
setTimeout(obj.y, 1000);
setTimeout(function () {
    obj.y()
}, 1000);
setTimeout(obj.y.bind(obj), 1000);

function test3() {
    let i = 1;
    let timer = setInterval(function () {
        console.log(2);
    }, 1000);

    setTimeout(function () {
        console.log('Stop!');
        clearTimeout(timer);
    }, 3000);
}

test3();

function test4() {
    let div = document.getElementById('someDiv');
    let opacity = 1;
    let fader = setInterval(function () {
        opacity -= 0.1;
        if (opacity >= 0) {
            div.style.opacity = opacity;
        } else {
            clearInterval(fader);
        }
    });
}

function test5() {
    let hash = window.location.hash;
    let hashWatcher = setInterval(function () {
        if (window.location.hash != hash) {
            updatePage();
        }
    }, 1000);
}

let timer2 = setTimeout(function f() {
    console.log("timer2 running");
    timer2 = setTimeout(f, 2000);
}, 2000);

setTimeout(function () {
    console.log("Stop timer2.")
    clearTimeout(timer2);
}, 5000);

// debounce 防抖动

/* $('textarea').on('keydown', debounce(ajaxAction, 2500)); */

function debounce(fn, delay) {
    var timer = null;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}

