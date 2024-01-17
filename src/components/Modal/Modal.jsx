import React, { Component } from 'react';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imageUrl } = this.props;

    return (
      <Overlay onClick={this.handleCloseModal}>
        <ModalContainer>
          <ModalImage src={imageUrl} alt="photo" />
        </ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;
