type Props = {
  imageDescrip: string;
  onImageClick: () => void;
};

export function ImageDescription({ imageDescrip, onImageClick }: Props) {
  return (
    <div>
      <p onClick={onImageClick}>{imageDescrip}</p>
    </div>
  );
}
