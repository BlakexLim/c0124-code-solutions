import { useState } from 'react';

export function ValidatedInput() {
  const [input, setInput] = useState('');
  let valMsg = 'A password is required.';
  if (input.length < 8 && input.length > 0) {
    valMsg = 'Your password is too short.';
  } else if (input.length > 7) {
    valMsg = '';
  }

  return (
    <div className="input-wrapper">
      <label>
        <input
          onChange={(e) => setInput(e.target.value)}
          name="userInput"
          placeholder="enter password"
          value={input}
        />
      </label>
      <div className="msg" style={{ color: 'red' }}>
        {valMsg}
      </div>
    </div>
  );
}
