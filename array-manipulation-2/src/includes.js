'use strict';
/* exported includes */
// declare a function with two parameters, array and a value with a return value of type boolean
function includes(array, value) {
  // assign edge case to variable in case value passed is not found in array
  let result = false;
  // loop through the array to find the value passed into the argument and return true if present
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = true;
    }
  }
  return result;
}
