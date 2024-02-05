/* exported capitalize */
function capitalize(word: string): string {
  const firstLetter = word.charAt(0);
  const toUpper = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const toLower = remainingLetters.toLowerCase();
  return toUpper + toLower;
}
