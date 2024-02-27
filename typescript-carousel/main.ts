const $pkmList = document.querySelector('.pkm-list');
if (!$pkmList) throw new Error('$pkmList query failed');
const $chevronBtn = document.querySelector('.chevron');
if (!$chevronBtn) throw new Error('$chevronBtn query failed');
const $pokemon = document.querySelectorAll('.pokemon');
if (!$pokemon) throw new Error('$pokemon query failed');
const $chevronR = document.querySelector('#right');
if (!$chevronR) throw new Error('$chevR query failed');
const $chevronL = document.querySelector('#left');
if (!$chevronL) throw new Error('$chevL query failed');

let currentPkm = 0;
let intervalId = setInterval(carousel, 3000);

// function to increment and reset pokemon index:
function increment(): number {
  if (currentPkm !== 4) {
    currentPkm++;
  } else {
    currentPkm = 0;
  }
  return currentPkm;
}

// carousel function to show pokemon at current index and hide pokemon at other index:
function carousel(): void {
  increment();
  for (let i = 0; i < $pokemon.length; i++) {
    if (i === currentPkm) {
      $pokemon[i].className = 'pokemon';
    } else {
      $pokemon[i].className = 'pokemon hidden';
    }
  }
}

// right chevron click event listener to cycle forward
$chevronR.addEventListener('click', (event: Event) => {
  clearInterval(intervalId);
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.tagName === 'I') {
    carousel();
  }
  intervalId = setInterval(carousel, 3000);
});

// left chevron click event listener to cycle backward
// $chevronL.addEventListener('click', (event: Event) => {
//   clearInterval(intervalId);
//   const $eventTarget = event.target as HTMLDivElement;
//   if ($eventTarget.tagName === 'I') {
//     carousel();
//   }
//   intervalId = setInterval(carousel, 3000);
// })
