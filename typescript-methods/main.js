'use strict';
const heroes = ['Green Lantern', 'Robin', 'Doctor Strange', 'Thor'];
const randomNumber = heroes.length * Math.random();
// How would I assign the result of randomNumber * heroes back to randomNumbers
// function randomNumberResult(): number {
//   return randomNumber * heroes.length
// }
console.log('randomNumber:', randomNumber * heroes.length);
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);
const library = [
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(0, 1);
console.log('library:', library);
const fullName = 'Blake Lim';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
console.log('firstName:', firstName);
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = {
  name: 'Blake Lim',
  age: 25,
  position: 'Server',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
