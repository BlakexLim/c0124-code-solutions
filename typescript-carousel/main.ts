const $pkmList = document.querySelector('.pkm-list');
if (!$pkmList) throw new Error('$pkmList query failed');
const $chevronBtn = document.querySelector('.chevron');
if (!$chevronBtn) throw new Error('$chevronBtn query failed');
const $pokemon = document.querySelectorAll('.pokemon');
if (!$pokemon) throw new Error('$pokemon query failed');
const $chevronR = document.querySelector('#right');
if (!$chevronR) throw new Error('$chevronR query failed');
const $chevronL = document.querySelector('#left');
if (!$chevronL) throw new Error('$chevronL query failed');
const $circle = document.querySelectorAll('.column-full > .fa-circle');
if (!$circle) throw new Error('$circle query failed');
const $carouselContainer = document.querySelector('.column-full');
if (!$carouselContainer) throw new Error('$carouselContainer query failed');

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

// function to decrement and reset pokemon index
function decrement(): number {
  if (currentPkm !== 0) {
    currentPkm--;
  } else {
    currentPkm = 4;
  }
  return currentPkm;
}

// carousel function to show pokemon at current index and hide pokemon at other index:
function carousel(): void {
  increment();
  for (let i = 0; i < $pokemon.length; i++) {
    if (i === currentPkm) {
      $pokemon[i].className = 'pokemon';
      $circle[i].className = 'fa-solid fa-circle';
    } else {
      $pokemon[i].className = 'pokemon hidden';
      $circle[i].className = 'fa-regular fa-circle';
    }
  }
  clearInterval(intervalId);
}

function reversCarousel(): void {
  decrement();
  for (let i = 0; i < $pokemon.length; i++) {
    if (i === currentPkm) {
      $pokemon[i].className = 'pokemon';
      $circle[i].className = 'fa-solid fa-circle';
    } else {
      $pokemon[i].className = 'pokemon hidden';
      $circle[i].className = 'fa-regular fa-circle';
    }
  }
  clearInterval(intervalId);
}

// right chevron click event listener to cycle forward
$chevronR.addEventListener('click', (event: Event) => {
  clearInterval(intervalId);
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.id === 'right') {
    carousel();
  }
  intervalId = setInterval(carousel, 3000);
});

// left chevron click event listener to cycle backward
$chevronL.addEventListener('click', (event: Event) => {
  clearInterval(intervalId);
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.id === 'left') {
    reversCarousel();
  }
  intervalId = setInterval(carousel, 3000);
});

// click event listener on circle to cycle through pokemon
function showIndex(targetIndex: number): void {
  clearInterval(intervalId);
  for (let i = 0; i < $pokemon.length; i++) {
    if (i === targetIndex) {
      $circle[i].className = 'fa-solid fa-circle';
      $pokemon[i].className = 'pokemon';
      carousel();
    } else {
      $circle[i].className = 'fa-regular fa-circle';
      $pokemon[i].className = 'pokemon hidden';
    }
  }
  currentPkm = targetIndex;
}

$carouselContainer.addEventListener('click', (event: Event) => {
  clearInterval(intervalId);
  const $eventTarget = event.target as HTMLElement;
  if ($eventTarget.matches('.fa-circle')) {
    for (let i = 0; i < $circle.length; i++) {
      if ($eventTarget === $circle[i]) {
        showIndex(i);
      }
    }
  }
  intervalId = setInterval(carousel, 3000);
});
