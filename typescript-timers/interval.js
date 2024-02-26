'use strict';
const $countDown = document.querySelector('.countdown-display');
if (!$countDown) throw new Error('$countDown query failed');
let count = 3;
function countDownInterval() {
  if (!$countDown) throw new Error('$countDown query failed');
  if (count > 0) {
    $countDown.textContent = String(count);
  } else if (count === 0) {
    $countDown.textContent = '~Earth Beeeelooowww Us';
    clearInterval(intervalId);
  }
  count--;
}
const intervalId = setInterval(countDownInterval, 1000);
