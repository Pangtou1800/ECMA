let regex = /xyz/;
regex = /xyz/i;

regex = /abc/igm;
console.log(regex.ignoreCase, regex.global, regex.multiline, regex.flags, regex.lastIndex, regex.source);

regex = /cat/;
console.log(regex.test('cats and dogs'));

regex = /x/g;
let str = '_x_x';

console.log(regex.lastIndex, regex.test(str));
console.log(regex.lastIndex, regex.test(str));
console.log(regex.lastIndex, regex.test(str));
console.log(regex.lastIndex, regex.test(str));
console.log(regex.lastIndex, regex.test(str));

regex = /bb/g;
console.log(regex.test('bb'));
console.log(regex.test('-bb-'));

let regex1 = /x/;
let regex2 = /y/;
console.log(regex1.exec(str));
console.log(regex2.exec(str));

let regex3 = /_(x(_x))/;
console.log(regex3.exec(str));

str = '_x_x_y';
regex3 = /_(x(_x))_(y)/;
console.log(regex3.exec(str));

regex = /a/g;
str = 'abc_abc_abc';


let arr1 = regex.exec(str);
console.log(arr1, arr1.index, regex.lastIndex);
arr1 = regex.exec(str);
console.log(arr1, arr1.index, regex.lastIndex);
arr1 = regex.exec(str);
console.log(arr1, arr1.index, regex.lastIndex);
arr1 = regex.exec(str);
console.log(arr1, /* arr1.index, */ regex.lastIndex);

regex = /ab/g;
while (true) {
    let match = regex.exec(str);
    if (!match) {
        break;
    }
    console.log('#'.concat(match.index).concat(':').concat(match[0]));
}

str = 'ab_ac_dd';
console.log(str.match(/a(b|c)/g));
console.log(str.search(/dd|ac/g));

regex = /a(b|c)/g;
console.log(str.replace(regex, 'xx'));

str = '  #id div.class  ';
console.log(str.replace(/^ +| +$/g, ''));
// \s => space

str = 'aa bb cc 44-55';
regex = /(\w{2})/g;
console.log(str.match(regex));
console.log(str.replace(regex, '$1_$1'));
console.log('0abc1'.replace('b', '[$`-$&-$\']'));

console.log('3 and 5'.replace(/\d/g, function (match) {
    return match ** 2;
}));
str = 'The quick brown fox jumps over the lazy dog.';
pattern = /quick|fox|lazy|/g;
console.log(str.replace(pattern, function replacer(match) {
    return match.toUpperCase();
}));


let prices = {
    'p1': '$1.99',
    'p2': '$4.50',
    'p3': '$10.11'
};

let template = '<span id="p1"></span>'
    + '<div class="literal">hahha</div>'
    + '<span id="p2"></span>'
    + '<span id="p3"></span>'
    + '<span id="p4"></span>';

console.log(template.replace(/(<span id=")(.*?)(">)(<\/span>)/g, function (match, sub1, sub2, sub3, sub4, pos, fullText) {
    console.log(match, sub1, sub2, sub3, sub4, pos, fullText);
    let result = '';
    if (prices.hasOwnProperty(sub2)) {
        result = result.concat(sub1).concat(sub2).concat(sub3).concat(prices[sub2]).concat(sub4);
    } else {
        result = match;
    }
    return result;
}));

str = 'Please yes\nmake my day!';
console.log(str.match(/yes.*day/));
console.log(str.match(/yes[^]*day/));

let tagName = /<(\w+)([^>]*)>([^<]*)<\/\1>/g;
console.log(tagName.exec(template));
console.log(tagName.exec(template));

let urlReg = /(http|ftp):\/\/([^/\r\n]+)([^\r\n]*)?/;
let url = 'http://google.com/hahah/page01.html/';
console.log(urlReg.exec(url));
let urlReg2 = /(?:http|ftp):\/\/([^/\r\n]+)([^\r\n]*)?/;
console.log(urlReg2.exec(url));
