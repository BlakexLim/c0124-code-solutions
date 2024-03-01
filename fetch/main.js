'use strict';
async function test() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const responseJson = await response.json();
  console.log(responseJson);
}
test();
async function pokeApi() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/tyranitar');
  try {
    if (!response.ok) {
      throw new Error('Could not fetch data');
    }
    const favPokemon = await response.json();
    console.log(favPokemon);
  } catch (error) {
    console.log(error);
  }
}
pokeApi();
