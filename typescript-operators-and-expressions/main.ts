const width: number = 10;
const height: number = 10;
const area: number = width * height;

console.log('value of area:', area);
console.log('type of area:', typeof area);

const bill: number = 120;
const payment: number = 140;
const change: number = bill - payment;

console.log('value of change:', change);
console.log('type of change:', change);

const quizzes: number = 100;
const midterm: number = 95;
const final: number = 90;
const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('type of grade:', grade);

const firstName: string = 'Blake';
const lastName: string = 'Lim';
const fullName: string = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH: number = 3;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const headCount: number = 7;
const isSparta: boolean = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
