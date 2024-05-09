import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('Returns a new array that contains only the even numbers in the given array', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const number = 454;
    const dollars = toDollars(number);
    expect(dollars).toBe('$454.00');
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array', () => {
    const numbers = [30, 40, 50, 60];
    const divide = divideBy(numbers, 5);
    expect(divide).toEqual([6, 8, 10, 12]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary', () => {
    const multiply = multiplyBy(
      { one: '1', two: 2, three: '3', four: 4, five: 5 },
      4
    );
    expect(multiply).toEqual({
      one: '1',
      two: 8,
      three: '3',
      four: 16,
      five: 20,
    });
  });
});
