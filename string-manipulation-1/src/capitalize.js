'use strict';
/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0);
  const toUpper = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const toLower = remainingLetters.toLowerCase();
  return toUpper + toLower;
}
