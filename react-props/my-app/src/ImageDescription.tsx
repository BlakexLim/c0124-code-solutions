type Props = {
  des: string;
};

export function ImageDescription({ des }: Props) {
  return (
    <div>
      <p>
        {des}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
