'use strict';
/* exported capitalizeWords */
function capitalizeWords(word) {
  const splitWords = word.split(' ');
  let result = [];
  for (let i = 0; i < splitWords.length; i++) {
    const newWord =
      splitWords[i][0].toUpperCase() + splitWords[i].slice(1).toLowerCase();
    result.push(newWord);
  }
  return result.join(' ');
}
