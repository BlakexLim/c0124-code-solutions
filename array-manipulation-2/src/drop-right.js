'use strict';
/* exported dropRight */
function dropRight(array, count) {
  let result = [];
  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
