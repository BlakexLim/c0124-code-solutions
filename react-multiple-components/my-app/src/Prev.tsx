type Prop = {
  onPrev: () => void;
};

export function Prev({ onPrev }: Prop) {
  return (
    <div className="prev">
      <button onClick={onPrev}>Prev</button>
    </div>
  );
}
