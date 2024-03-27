import { GoDot } from 'react-icons/go';

type DotProps = {
  count: number;
  current: number;
  onSelect: (item: number) => void;
};

export function Dots({ count, current, onSelect }: DotProps) {
  const charList = [];
  for (let i = 0; i < count; i++) {
    charList.push(
      <GoDot
        key={i}
        onClick={() => onSelect(i)}
        style={{ backgroundColor: i === current ? 'lightgray' : undefined }}
      />
    );
  }

  return <div>{charList}</div>;
}
