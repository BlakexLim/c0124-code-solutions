'use strict';
// query the DOM for ALL span elements and assign to variable
const $characters = document.querySelectorAll('span');
if (!$characters) throw new Error('$characters query failed');
let i = 0;
let currentChar = $characters[i];
document.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === currentChar.textContent) {
    currentChar.className = 'correct';
    i++;
    currentChar = $characters[i];
    currentChar.className = 'next';
  } else {
    currentChar.className = 'wrong';
  }
});
