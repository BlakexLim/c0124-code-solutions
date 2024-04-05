/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const chars = string.split('');
  const swap = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = swap;

  return chars.join('');
}
