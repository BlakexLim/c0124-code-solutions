'use strict';
const student = {
  firstName: 'Blake',
  lastName: 'Lim',
  age: 25,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'server';
console.log('value of .livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log(student);
const vehicle = {
  make: 'Mazda',
  model: 'Miata',
  year: 1999,
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = true;
console.log('value of ["color"]:', vehicle['color']);
console.log('value of ["isConvertible"]:', vehicle['isConvertible']);
console.log(vehicle);
const myPet = {
  name: 'Seb',
  kind: 'Cat',
};
delete myPet.name;
delete myPet.kind;
console.log('value of pet:', myPet);
