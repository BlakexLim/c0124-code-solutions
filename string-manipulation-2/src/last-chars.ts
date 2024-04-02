/* exported lastChars */
function lastChars(length: number, string: string): string {
  let result = '';
  for (let i = length; i < length && i < string.length; i++) {
    result += string[i];
  }
  return result;
}
