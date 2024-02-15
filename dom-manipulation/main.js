'use strict';
let clicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
$hotButton.addEventListener('click', (event) => {
  clicks++;
  let temperature;
  if (clicks < 4) {
    temperature = 'cold';
  } else if (clicks < 7) {
    temperature = 'cool';
  } else if (clicks < 10) {
    temperature = 'tepid';
  } else if (clicks < 13) {
    temperature = 'warm';
  } else if (clicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  if (!$hotButton || !$clickCount) {
    throw new Error('$hotButton or $clickCount does not exist');
  }
  $hotButton.className = `hot-button ${temperature}`;
  $clickCount.textContent = 'Clicks: ' + clicks;
});
