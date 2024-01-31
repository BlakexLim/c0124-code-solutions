function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('result of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hey' + ' ' + name + '!';
}
console.log('result of greet:', greet('Blake'));

const getArea = (width: number, height: number): number => height * width;
console.log('result of getArea:', getArea(17, 42));

interface Person {
  firstName: string;
  lastName: string;
}
const blake: Person = {
  firstName: 'Blake',
  lastName: 'Lim',
};
const getFirstName = (person: Person): string => person.firstName;
// `firstName: ${person.firstName} lastName: ${person.lastName}`;
console.log('result of getFirstName:', getFirstName(blake));

const getLastElement = (array: string[]): string => {
  const lastIndex: number = array.length - 1;
  const lastElement: string = array[lastIndex];
  return lastElement;
};
console.log(
  'result of getLastElement:',
  getLastElement(['fork', 'knife', 'spoon', 'chopsticks'])
);

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctionResult: unknown = callOtherFunction(
  convertMinutesToSeconds,
  10
);
console.log('result of callOtherFunctionResult:', callOtherFunctionResult);
