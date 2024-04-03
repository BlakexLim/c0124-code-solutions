/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (length >= string.length) {
    return string;
  }

  let result = '';
  for (let i = string.length - length; i < string.length; i++) {
    result += string[i];
  }
  return result;
}
