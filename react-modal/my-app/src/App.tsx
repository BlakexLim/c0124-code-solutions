import { useState } from 'react';
import './App.css';
import { Modal } from './assets/Modal';

function App() {
  const [open, setOpen] = useState(false);
  function handleShow(): void {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  function handleDelete(): void {
    alert('Deleted!');
    setOpen(false);
  }

  return (
    <>
      <button onClick={handleShow}>Delete Me!</button>
      <Modal onClose={() => setOpen(false)} isOpen={open}>
        <p>Do you really want to delete?</p>
        <button onClick={() => setOpen(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
