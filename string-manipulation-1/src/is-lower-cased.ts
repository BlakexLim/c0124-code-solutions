/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (word === word.toLowerCase()) {
      result = true;
    }
  }
  return result;
}
