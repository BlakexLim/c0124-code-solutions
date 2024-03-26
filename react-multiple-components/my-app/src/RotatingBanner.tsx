import { Banner } from './Banner.tsx';
import { Next } from './Next.tsx';
import { NumberedButtons } from './NumberedButtons.tsx';
import { Prev } from './Prev.tsx';
import './App.tsx';
import { useState } from 'react';

type Prop = {
  items: string[];
};

export function RotatingBanner({ items }: Prop) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Banner item={items[index]} />
      <Prev
        onPrev={() => setIndex((index - 1 + items.length) % items.length)}
      />
      <NumberedButtons
        count={items.length}
        current={index}
        onSelect={(item) => setIndex(item)}
      />
      <Next onNext={() => setIndex((index + 1) % items.length)} />
    </div>
  );
}
