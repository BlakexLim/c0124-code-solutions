const $bulb = document.querySelector('.bulb');

if (!$bulb) throw new Error('$bulb query failed');

$bulb.addEventListener('click', () => {
  if ($bulb.className === 'bulb light-mode') {
    $bulb.className = 'bulb dark-mode';
  } else {
    $bulb.className = 'bulb light-mode';
  }
});
