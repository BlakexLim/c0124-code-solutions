type Prop = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};

export function NumberedButtons({ count, current, onSelect }: Prop) {
  const itemList = [];
  for (let i = 0; i < count; i++) {
    itemList.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{ backgroundColor: i === current ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div className="num">{itemList}</div>;
}
