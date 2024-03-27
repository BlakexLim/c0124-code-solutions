import './App';
import { ImgCard } from './ImgCard';
import { Prev } from './Prev';
import { Next } from './Next';
import { Dots } from './Dots';
import { useState } from 'react';

type ImgProp = {
  src: string;
  alt: string;
};

type Prop = {
  details: ImgProp[];
};

export function Carousel({ details }: Prop) {
  const [cycle, setCycle] = useState(0);
  return (
    <>
      <ImgCard src={details[cycle].src} alt={details[cycle].alt} />
      <Prev
        onPrev={() => setCycle((cycle - 1 + details.length) % details.length)}
      />
      <Next onNext={() => setCycle((cycle + 1) % details.length)} />
      <Dots
        count={details.length}
        current={cycle}
        onSelect={(item) => setCycle(item)}
      />
    </>
  );
}
