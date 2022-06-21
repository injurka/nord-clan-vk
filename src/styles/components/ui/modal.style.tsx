import styled from '@emotion/styled';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);
  user-select: none;
`;

export const ModalImageStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 25, 25, 0.5);

  > div {
    position: relative;
    width: 80%;
    height: 80%;

    max-width: 1200px;
  }
`;
