import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';

export function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer onImageClick={handleClick} imageSrc={imageSrc[index]} />
      <ImageCaption onImageClick={handleClick} imageCap={imageCap[index]} />
      <ImageDescription
        onImageClick={handleClick}
        imageDescrip={imageDescrip[index]}
      />
      <ButtonContainer onBtnClick={handleClick} buttonText={buttonText} />
    </>
  );
}
