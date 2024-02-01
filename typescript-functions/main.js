'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('result of convertMinutesToSeconds:', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey' + ' ' + name + '!';
}
console.log('result of greet:', greet('Blake'));
const getArea = (width, height) => height * width;
console.log('result of getArea:', getArea(17, 42));
const blake = {
  firstName: 'Blake',
  lastName: 'Lim',
};
const getFirstName = (person) => person.firstName;
//`firstName: ${person.firstName} lastName: ${person.lastName}`;
console.log('result of getFirstName:', getFirstName(blake));
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};
console.log(
  'result of getLastElement:',
  getLastElement(['fork', 'knife', 'spoon', 'chopsticks'])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 10);
console.log('result of callOtherFunctionResult:', callOtherFunctionResult);
