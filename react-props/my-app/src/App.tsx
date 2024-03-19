import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const header = 'React Image Bank';
const image = '/starry-sky.jpeg';
const imageAlt = 'Starry sky';
const imgCap = 'A beautiful image of space';
const imgDes = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et
        magnam architecto quaerat velit voluptas rerum quos asperiores quis in!
        Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero.
        Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt?
        Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi
        ipsum, dicta sunt laborum similique repellat?`;
const btn = 'Click For Next Image';

function App() {
  return (
    <>
      <Header text={header} />
      <ImageContainer src={image} alt={imageAlt} />
      <ImageCaption caption={imgCap} />
      <ImageDescription des={imgDes} />
      <ButtonContainer btn={btn} />
    </>
  );
}

export default App;
