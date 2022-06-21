import styled from '@emotion/styled';

export const FileImageStyle = styled.div`
  position: relative;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  user-select: none;

  .ext-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img {
    cursor: pointer;
  }
`;
