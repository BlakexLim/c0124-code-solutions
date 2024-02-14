'use strict';
const pokedex = [
  {
    number: '#001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '#004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '#007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '#002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '#005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '#008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '#003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '#006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '#009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];
// create a function to print out information from an object
function renderPokemon(pokemon) {
  // create a div and assign the class column third to make rows of three columns through the css file
  const $columnThird = document.createElement('div');
  $columnThird.setAttribute('class', 'column-third');
  // create another div for the pokemon card
  const $pokemonCard = document.createElement('div');
  $pokemonCard.setAttribute('class', 'pokemon-card');
  const $imageUrl = document.createElement('img');
  $imageUrl.setAttribute('src', pokemon.imageUrl);
  const $pokemonCardText = document.createElement('div');
  $pokemonCardText.setAttribute('class', 'pokemon-card-text');
  // query for img element and assign it the src class so that can be
  // now this variable can be used to to print the image to the page
  const $name = document.createElement('h2');
  $name.textContent = pokemon.name;
  const $description = document.createElement('p');
  $description.textContent = pokemon.description;
  const $number = document.createElement('h3');
  $number.textContent = pokemon.number;
  $columnThird.appendChild($pokemonCard);
  $pokemonCard.append($imageUrl);
  $pokemonCard.append($pokemonCardText);
  $pokemonCardText.append($name);
  $pokemonCardText.append($number);
  $pokemonCardText.append($description);
  return $columnThird;
}
const $row = document.querySelector('.row');
if (!$row) throw new Error('The $row query failed');
for (let i = 0; i < pokedex.length; i++) {
  const $pokemon = renderPokemon(pokedex[i]);
  $row.appendChild($pokemon);
}
