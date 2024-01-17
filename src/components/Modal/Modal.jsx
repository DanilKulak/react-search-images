import React, { useEffect } from 'react';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

const Modal = ({ imageUrl, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
        <ModalImage src={imageUrl} alt="photo" />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
