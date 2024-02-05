'use strict';
/* exported getKeys */
function getKeys(object) {
  let result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
