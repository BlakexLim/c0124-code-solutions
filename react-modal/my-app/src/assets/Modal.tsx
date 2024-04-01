import React, { ReactNode, useEffect, useRef } from 'react';

type Prop = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Prop) {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDialogElement>): void {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  return (
    <dialog ref={modal} onKeyDown={handleKeyDown}>
      {children}
    </dialog>
  );
}
