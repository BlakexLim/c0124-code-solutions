'use strict';
/* exported ransomCase */
function ransomCase(string) {
  const lowerCase = string.toLowerCase();
  const result = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (i % 2 !== 0) {
      result.push(lowerCase[i].toUpperCase());
    } else {
      result.push(lowerCase[i]);
    }
  }
  return result.join('');
}
