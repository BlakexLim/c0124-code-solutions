type Prop = {
  onNext: () => void;
};

export function Next({ onNext }: Prop) {
  return (
    <div className="next">
      <button onClick={onNext}>Next</button>
    </div>
  );
}
