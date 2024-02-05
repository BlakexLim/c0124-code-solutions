/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      result = true;
    }
  }
  return result;
}
