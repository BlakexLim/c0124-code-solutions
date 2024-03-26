import { ChangeEvent } from 'react';

type SearchProp = {
  text: string;
  onInput: (userText: string) => void;
};

export function SearchBar({ text, onInput }: SearchProp) {
  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    onInput(e.target.value);
  }
  return (
    <label>
      <input
        onChange={handleInput}
        className="search-bar"
        placeholder="search"
        value={text}
      />
    </label>
  );
}
