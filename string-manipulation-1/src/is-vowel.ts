/* exported isVowel */
function isVowel(char: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
}
