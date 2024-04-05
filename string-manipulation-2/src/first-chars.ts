/* exported firstChars */
function firstChars(length: number, string: string): string {
  let result = '';
  for (let i = 0; i < length && i < string.length; i++) {
    result += string[i];
  }
  return result;
}
