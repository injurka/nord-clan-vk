import styled from '@emotion/styled';

export const HomeStyled = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  padding: 5px;
`;

export const HomeHeaderStyled = styled.div`
  margin: 10px auto;
  width: 70%;

  > h1 {
    color: ${({ theme }) => theme.palette.color.text};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-align: center;
  }

  > hr {
    margin: 5px auto;
  }
`;
