console.log(Date());
console.log(Date(2200, 1, 3));
let dateArr = [
    new Date('2013-2-15'),
    new Date('2013/2/15'),
    new Date('02/15/2013'),
    new Date('2013-FEB-15'),
    new Date('FEB, 15, 2013'),
    new Date('FEB 15, 2013'),
    new Date('February, 15, 2013')
];
console.log(dateArr);
console.log(Date.now());
console.log(new Date('12/13/0014'));

let today = new Date();
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

console.log(today.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
    weekday: 'long',
    timeZoneName: 'long'
}));