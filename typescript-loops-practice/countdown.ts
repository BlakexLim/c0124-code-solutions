/* exported countdown */
function countdown(number: number): number[] {
  const numberCount: number[] = [];
  let i: number = number;
  while (i >= 0) {
    numberCount.push(i);
    i--;
  }
  return numberCount;
}
