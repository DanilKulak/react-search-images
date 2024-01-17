import styled from "@emotion/styled";


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  width: 800px;
  height: 600px;
  overflow: auto;
  background-color: white;
  position: relative;
  padding: 20px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
