import './ImageContainer.css';

type Props = {
  imageSrc: string;
  onImageClick: () => void;
};

export function ImageContainer({ imageSrc, onImageClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onImageClick}
          className="image-fill"
          src={imageSrc}
          alt="space-image"
        />
      </div>
    </div>
  );
}
