import { useState } from 'react';
import './button.css';

type Props = {
  label: string;
};

export function HotButton({ label }: Props) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    if (count > 20) {
      setCount(0);
    }
  }
  let color = '';
  if (count >= 3) {
    color = 'blue';
  }
  if (count >= 6) {
    color = 'purple';
  }
  if (count >= 9) {
    color = 'red';
  }
  if (count >= 12) {
    color = 'orange';
  }
  if (count >= 15) {
    color = 'yellow';
  }
  if (count >= 18) {
    color = 'white';
  }
  return (
    <div>
      <button onClick={handleClick} className={color}>
        {label}
      </button>
      <p> {count} clicks</p>
    </div>
  );
}
