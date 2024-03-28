type Prop = {
  item: string;
};

export function Banner({ item }: Prop) {
  return (
    <div className="items">
      <h1>{item}</h1>
    </div>
  );
}
