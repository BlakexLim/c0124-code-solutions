/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
