import styled from '@emotion/styled';

export const DocsControlStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => theme.palette.bg.buttonItem};
    border: 1px solid ${({ theme }) => theme.palette.bg.highlight};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .controll-item {
    &__download {
      svg {
        fill: ${({ theme }) => theme.palette.bg.highlight};
      }
    }
    &__delete {
      svg {
        fill: ${({ theme }) => theme.palette.bg.highlight};
      }
    }
  }
`;
