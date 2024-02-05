/* exported getWords */
function getWords(string: string): string[] {
  let result = [''];
  if (string.length) {
    result = string.split(' ');
  } else {
    result = [];
  }
  return result;
}
