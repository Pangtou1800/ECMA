let list = ['a', 'b', 'c'];
let item;
while (item = list.shift()) {
    console.log(item);
}
list = ['a', 'b', 'c'];
console.log(list.unshift('0'));
console.log(list);
console.log(list.join("<>"));
console.log(Array.prototype.join.call('hello', '-'));
var obj = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.prototype.join.call(obj, '-'));

list.reverse();
console.log(list);

console.log(Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 }));

list = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(list.splice(4, 2, '1', '2', '3', '4'));
console.log(list);

list = [10111, 1101, 111];
list.sort();
console.log(list);
list.sort(function (a, b) {
    return a - b;
});
console.log(list);

list = [1, 2, 3];
let listMap = list.map(function (n) {
    return n ** 2;
});
console.log(list);
console.log(listMap);

function callBack(elem, index, arr) {
    console.log(this);
    if (index + 1 < arr.length) {
        return elem * arr[index + 1];
    } else {
        return elem * arr[0];
    }
}

console.log(list.map(callBack));
console.log(list.map(callBack), { c: 'aa' });

function callBack2(elem, index, arr) {
    console.log("arr[" + index + "] = " + elem);
}

list.forEach(callBack2);