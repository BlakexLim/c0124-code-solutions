'use strict';
/* exported reverse */
function reverse(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const index = array[i];
    result.push(index);
  }
  return result;
}
