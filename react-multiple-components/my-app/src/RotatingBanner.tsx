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
  const [index, nextIndex] = useState(0);
  nextIndex(index);
  return (
    <div>
      <Banner item={items[index]} />
      <Prev />
      <NumberedButtons count={items.length} current={index} />
      <Next />
    </div>
  );
}
