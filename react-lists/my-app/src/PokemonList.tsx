type Pokemon = {
  number: string;
  name: string;
};

type Prop = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Prop) {
  const pokemon = pokedex.map((value) => (
    <li key={value.number}>{value.name}</li>
  ));
  return <ul>{pokemon}</ul>;
}
