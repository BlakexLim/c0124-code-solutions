import { SearchBar } from './SearchBar';
import { List } from './List';
import { useState } from 'react';
import './App';

type Prop = {
  quotes: string[];
};

export function SearchPage({ quotes }: Prop) {
  const [search, setSearch] = useState('');
  function handleInput(userText: string): void {
    setSearch(userText);
  }
  const filtered = quotes.filter((quote) =>
    quote.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <SearchBar onInput={handleInput} text={search} />
      <List list={filtered} />
    </>
  );
}
