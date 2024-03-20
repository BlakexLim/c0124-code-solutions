import { useState } from 'react';
import './ImageContainer.css';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          src={imageSrc[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
