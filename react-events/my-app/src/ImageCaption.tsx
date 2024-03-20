type Props = {
  imageCap: string;
  onImageClick: () => void;
};

export function ImageCaption({ imageCap, onImageClick }: Props) {
  return (
    <div>
      <h3 onClick={onImageClick}>{imageCap}</h3>
    </div>
  );
}
