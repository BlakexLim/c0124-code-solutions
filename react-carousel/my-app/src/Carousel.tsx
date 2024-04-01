import './App';
import { ImgCard } from './ImgCard';
import { Prev } from './Prev';
import { Next } from './Next';
import { Dots } from './Dots';
import { useCallback, useEffect, useState } from 'react';

type ImgProp = {
  src: string;
  alt: string;
};

type Prop = {
  details: ImgProp[];
};

export function Carousel({ details }: Prop) {
  const [cycle, setCycle] = useState(0);
  function handlePrev(): void {
    setCycle((cycle - 1 + details.length) % details.length);
  }

  const handleNext = useCallback(
    () => setCycle((cycle + 1) % details.length),
    [details.length, cycle]
  );

  useEffect(() => {
    const intervalId = setInterval(handleNext, 1000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="carousel">
      <Prev onPrev={handlePrev} />
      <ImgCard src={details[cycle].src} alt={details[cycle].alt} />
      <Next onNext={handleNext} />
      <Dots
        count={details.length}
        current={cycle}
        onSelect={(item) => setCycle(item)}
      />
    </div>
  );
}
