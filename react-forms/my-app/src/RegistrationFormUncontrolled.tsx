import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const current = e.currentTarget as HTMLFormElement;
    const formData = new FormData(current);
    const entries = Object.fromEntries(formData);
    const userName = entries.userName;
    const userPW = entries.userPW;
    console.log(`uncontrolled: username ${userName}, password ${userPW}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled:</h2>
      <label>
        <p>Username</p>
        <input name="userName" />
      </label>
      <label>
        <p>Password</p>
        <input name="userPW" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
