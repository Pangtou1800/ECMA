console.log("Math.E : ", Math.E);
console.log("Math.LN2 : ", Math.LN2);
console.log("Math.LN10 : ", Math.LN10);
console.log("Math.LOG2E : ", Math.LOG2E);
console.log("Math.LOG10E : ", Math.LOG10E);
console.log("Math.PI : ", Math.PI);
console.log("Math.SQRT1_2 : ", Math.SQRT1_2);
console.log("Math.SQRT2 : ", Math.SQRT2);
console.log(Math.pow(2, 3));

let radius = 20;
console.log(Math.PI * Math.pow(radius, 2));
console.log(Math.sqrt(33));
Math.log(Math.E);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(3, 5));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 100));

function random_str(length) {
    var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcedfghijklmnopqrstuvwxyz' + '0123456789_';
    let result = '';
    for (let i = 0; i < length; i++) {
        let randPos = Math.floor(Math.random() * ALPHABET.length);
        result = result.concat(ALPHABET.charAt(randPos));
    }
    return result;
}

let testArray = [1, 2, 3, 4, 7];
console.log(testArray.map(random_str));