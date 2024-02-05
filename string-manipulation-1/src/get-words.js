'use strict';
/* exported getWords */
function getWords(string) {
  let result = [''];
  if (string.length) {
    result = string.split(' ');
  } else {
    result = [];
  }
  return result;
}
