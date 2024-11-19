import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
        <div className="bg-white text-midnight-blue p-8 rounded-lg shadow-lg w-full max-w-md relative">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
