import { useState } from 'react';
import './Toggle.css';

export function Toggle() {
  const [toggle, setToggle] = useState(false);
  const modifier = toggle ? 'is-on' : '';
  const switchLabel = toggle ? 'ON' : 'OFF';
  function handleClick(): void {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`switch-container ${modifier}`}
      style={{ cursor: 'pointer' }}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="label">{switchLabel}</span>
    </div>
  );
}

// Robert's solution:
// export function ToggleSwitch() {
//   const [isOn, setIsOn] = useState(false);
//   const modifierClass = isOn ? 'is-on' : '';
//   const label = isOn ? 'On' : 'Off';
//   return (
//     <div
//       onClick={() => setIsOn(!isOn)}
//       className={`toggle-switch ${modifierClass}`}>
//       <div className="slider">
//         <div className="switch"></div>
//       </div>
//       <span className="state-label">{label}</span>
//     </div>
//   );
// }
