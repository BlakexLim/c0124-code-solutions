'use strict';
// query the DOM for ALL span elements and assign to variable
const $characters = document.querySelectorAll('span');
if (!$characters) throw new Error('$characters query failed');
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < $characters.length; i++) {
    if (event.key === $characters[i].textContent) {
      $characters[i].className = 'correct';
      return;
    } else {
      $characters[i].className = 'wrong';
    }
  }
});
