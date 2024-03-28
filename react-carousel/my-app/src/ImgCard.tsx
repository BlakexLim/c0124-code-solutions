type ImgProp = {
  src: string;
  alt: string;
};

export function ImgCard({ src, alt }: ImgProp) {
  return (
    <div className="image-wrapper">
      <img src={src} alt={alt} className="current-image"></img>
    </div>
  );
}
