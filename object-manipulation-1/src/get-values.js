'use strict';
/* exported getValues */
function getValues(object) {
  let keys = [];
  for (const key in object) {
    keys.push(object[key]);
  }
  return keys;
}
