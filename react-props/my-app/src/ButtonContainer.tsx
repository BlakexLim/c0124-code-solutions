type Props = {
  btn: string;
};

export function ButtonContainer({ btn }: Props) {
  return (
    <div>
      <button>{btn}</button>
    </div>
  );
}
