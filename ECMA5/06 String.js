var println = (str) => {
    console.log(str);
};

let s1 = 'abc';
let s2 = new String('abc');

console.log(typeof s1);
console.log(typeof s2);

console.log(s1.valueOf());
console.log(s2.valueOf());

console.log(String.fromCharCode(97));
println(String.fromCharCode(104, 101, 108, 108, 111));

println(String.fromCharCode(0x20BB7));
println(String.fromCharCode(0x0BB7));
println(String.fromCharCode(0xD842, 0xDFB7));

println(s1.charAt(1));
println(s1[1]);
println(s1.charCodeAt(1));
println("JavaScript".slice(0, 4));
println("JavaScript".slice(-6));

let str1 = 'cat, bat, fat, sat';
println(str1.match('at'));
var matches = str1.match('at');
println(matches.index);
println(str1.search('bat'));
println(str1.replace('at', 'ed'));
println(str1.split(', ', 3));