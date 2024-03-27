type ImgProp = {
  src: string;
  alt: string;
};

export function ImgCard({ src, alt }: ImgProp) {
  return (
    <div>
      <img src={src} alt={alt}></img>
    </div>
  );
}
