type Props = {
  text: string;
};

export function Header({ text }: Props) {
  return <h1>{text}</h1>;
}

// alternative
// export function Header (props: Props) {
//  return <h1>{props.text}</h1>;
// }
