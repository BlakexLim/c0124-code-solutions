'use strict';
/* exported tail */
function tail(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
