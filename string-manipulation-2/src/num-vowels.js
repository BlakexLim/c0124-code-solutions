'use strict';
/* exported numVowels */
function numVowels(string) {
  string = string.toLowerCase();
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
console.log(numVowels('Angular'));
