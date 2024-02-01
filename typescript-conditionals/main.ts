/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log(isUnderFive(6));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(8));

function startsWithJ(string: string): boolean {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithJ('JavaScript'));

interface Person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: Person): boolean {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}
const blake = {
  name: 'Blake Lim',
  age: 25,
};
console.log(isOldEnoughToDrink(blake));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrive(blake));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age > 16 && person.age > 21) {
    return false;
  }
  return false;
}
console.log(isOldEnoughToDrinkAndDrive(blake));

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(0));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return `We're the warner brothers!`;
    case 'wakko':
      return `We're the warner brothers!`;
    case 'dot':
      return `I'm cute~`;
    default:
      return 'Goodnight everybody!';
  }
}
console.log(introduceWarnerBro('dot'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Pacific Rim';
      break;
    case 'comedy':
      return 'Migration';
      break;
    case 'horror':
      return 'Prometheus';
      break;
    case 'drama':
      return 'Whiplash';
      break;
    case 'musical':
      return 'La La Land';
      break;
    case 'sci-fi':
      return 'Star Wars';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, sci-fi';
  }
}
console.log(recommendMovie('action'));
