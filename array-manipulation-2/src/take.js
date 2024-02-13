'use strict';
/* exported take */
// we are creating a function that takes 2 parameters, an array and a count
// we want to return an array of elements less than the count passed in
function take(array, count) {
  // initialize an empty array
  const result = [];
  // create a conditional statement for an edge case in case an empty array is passed in
  if (array.length === 0) {
    return array;
  }
  // loop through the array up to the count passed in and push the result into the empty array
  for (let i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
