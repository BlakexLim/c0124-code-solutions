/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeatWord:', repeatWord('beep', 7));

function logEachCharacter(string: string): void {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter:', logEachCharacter('tomato'));

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}
console.log('doubleAll:', doubleAll([1, 2, 3, 4, 5]));

const magician = {
  element: 'fire',
  type: 'healer',
};
function getKeys(object: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys:', getKeys(magician));

function getValues(object: Record<string, string>): string[] {
  const values = [];
  for (const prop in object) {
    values.push(object[prop]);
  }
  return values;
}
console.log('getValues:', getValues(magician));
