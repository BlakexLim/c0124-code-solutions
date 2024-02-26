'use strict';
/* exported numVowels */
function numVowels(string) {
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == 'a' ||
      string.charAt(i) == 'e' ||
      string.charAt(i) == 'i' ||
      string.charAt(i) == 'o' ||
      string.charAt(i) == 'u'
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(numVowels('All Code All Day'));
