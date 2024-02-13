'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let result = [];
  if (array.length < count) {
    return array;
  }
  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
