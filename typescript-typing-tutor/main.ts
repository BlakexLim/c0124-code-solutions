// query the DOM for ALL span elements and assign to variable
const $characters = document.querySelector('span');
if (!$characters) throw new Error('$characters query failed');

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key) {
    $characters.className = 'correct';
  } else {
    $characters.className = 'wrong';
  }
});
