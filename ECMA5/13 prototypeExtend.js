function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log(this.name + ": 喵喵");
    }
}

let cat1 = new Cat('大毛', '白色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.name, cat1.color);
console.log(cat2.name, cat2.color);
cat1.meow();
cat2.meow();
console.log(cat1.meow == cat2.meow);

function f() { }

console.log(typeof f.prototype);

function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'white';

let cat3 = new Animal('Cathy');
let cat4 = new Animal('Kitty');
console.log(cat3.name + ": " + cat3.color);
console.log(cat4.name + ": " + cat4.color);

Animal.prototype.color = 'yellow';

console.log(cat3.name + ": " + cat3.color);
console.log(cat4.name + ": " + cat4.color);

cat3.color = 'black';

console.log(cat3.name + ": " + cat3.color);
console.log(cat4.name + ": " + cat4.color);

Animal.walk = function () {
    console.log(this.name + ' is walking');
}

Animal.prototype.walk = function () {
    console.log(this.name + ' is very walking');
}
cat3.walk();
cat4.walk();

// The end of prototype chain
console.log(Object.getPrototypeOf(Object.prototype));

let MyArray = function () { };

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

let mine = new MyArray();
mine.push(1, 2, 3);
console.log(mine.length);
console.log(mine instanceof Array);

function P() { }
console.log(P.prototype.constructor);

let p = new P();
console.log(p.constructor === P);
console.log(p.constructor === P.prototype.constructor);
console.log(p.hasOwnProperty('constructor'));

function Constr() {
    console.log('Construct!');
}

let x = new Constr();
let y = new x.constructor();

Constr.prototype.createCopy = function () {
    return new this.constructor();
}

function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor.toString());

Person.prototype = {
    method: function () {
        console.log('hey!');
    }
};

console.log(Person.prototype.constructor.toString());
console.log(Person.prototype.constructor.name);

let d = new Date();
console.log(d instanceof Date, d instanceof Object);

function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.log('Shape moved to (' + x + ',' + y + ')');
}

function Rectangle() {
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();
rect.move(3, 4);

// mixin
function M1() {
    this.hello = 'hello';
}

function M2() {
    this.world = 'world';
}

function S() {
    M1.call(this);
    M2.call(this);   
}

S.prototype = Object.create(M1.prototype);
Object.assign(S.prototype, M2.prototype);

S.prototype.constructor = S;

let s = new S();
console.log(s.hello, s.world);


