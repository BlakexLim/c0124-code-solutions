'use strict';
/* exported compact */
function compact(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
