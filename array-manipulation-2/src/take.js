'use strict';
/* exported take */
function take(array, count) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= count) {
      result.push(array[i]);
    }
  }
  return result;
}
