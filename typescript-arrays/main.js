'use strict';
const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
console.log(
  'America is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]
);
colors.pop('blue');
colors.push('green');
console.log(
  'Mexico is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]
);
console.log(colors);
const students = ['Blake', 'Tev', 'Nader', 'Jeffrey'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class`);
console.log(students);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
