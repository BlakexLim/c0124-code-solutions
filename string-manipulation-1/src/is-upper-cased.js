'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  let result = false;
  for (let i = 0; i < word.length; i++) {
    if (word === word.toUpperCase()) {
      result = true;
    }
  }
  return result;
}
