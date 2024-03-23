type Prop = {
  count: number;
  current: number;
};

export function NumberedButtons({ count, current }: Prop) {
  function handleClick() {}
  const itemList = [];
  for (let i = 0; i < count; i++) {
    itemList.push(
      <button
        key={i}
        onClick={handleClick}
        style={
          current
            ? { backgroundColor: 'lightblue' }
            : { backgroundColor: 'white' }
        }>
        {i}
      </button>
    );
  }
  return <div className="num">{itemList}</div>;
}
