type Props = {
  buttonText: string;
  onBtnClick: () => void;
};

export function ButtonContainer({ buttonText, onBtnClick }: Props) {
  return (
    <div>
      <button onClick={onBtnClick}>{buttonText}</button>
    </div>
  );
}
