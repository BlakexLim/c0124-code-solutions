'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let result = '';
  for (let i = length; i < length && i < string.length; i++) {
    result += string[i];
  }
  return result;
}
