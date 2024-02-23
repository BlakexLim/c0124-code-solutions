/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  const firstLetter = word[0].toUpperCase();
  const remainingLetters = word.slice(1).toLowerCase();

  return firstLetter + remainingLetters;
}
