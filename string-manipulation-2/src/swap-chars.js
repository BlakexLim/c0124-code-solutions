'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  const swap = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = swap;
  return chars.join('');
}
