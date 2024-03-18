'use strict';
/* exported drop */
// create a function that takes two arguments, an array and a number with the return value of a string
function drop(array, count) {
  // initialize an empty array
  const result = [];
  // loop through the array and push the result into the empty array
  // return values greater than or equal to count
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
