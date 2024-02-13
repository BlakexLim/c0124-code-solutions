'use strict';
/* exported take */
// we are creating a function that takes 2 parameters, an array and a count
// we want to return an array of counts
function take(array, count) {
  let result = [];
  if (array.length === 0) {
    return array;
  }
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
