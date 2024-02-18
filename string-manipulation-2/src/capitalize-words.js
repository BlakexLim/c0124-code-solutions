'use strict';
/* exported capitalizeWords */
function capitalizeWords(word) {
  const lowerCase = word.toLowerCase();
  let result = '';
  for (let i = 0; i < lowerCase.length; i++) {
    result = lowerCase[0].toUpperCase();
  }
  return result;
}
console.log(capitalizeWords('bEEp'));
