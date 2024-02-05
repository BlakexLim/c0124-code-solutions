'use strict';
/* exported includesSeven */
function includesSeven(array) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = true;
      break;
    }
  }
  return result;
}
