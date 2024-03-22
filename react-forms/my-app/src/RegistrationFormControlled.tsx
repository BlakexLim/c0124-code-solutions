import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(`controlled: username ${username}, password ${password}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled:</h2>
      <label>
        <p>Username</p>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
      </label>
      <label>
        <p>Password</p>
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
