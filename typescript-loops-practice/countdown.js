'use strict';
/* exported countdown */
function countdown(number) {
  const numberCount = [];
  let i = number;
  while (i >= 0) {
    numberCount.push(i);
    i--;
  }
  return numberCount;
}
