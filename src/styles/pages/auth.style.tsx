import styled from '@emotion/styled';

export const AuthStyled = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  height: calc(100vh - var(--header-height));
  padding: 5px;
`;

export const AuthContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AuthSignInStyled = styled.a`
  width: 25%;
  height: 5%;
  background-color: ${({ theme }) => theme.palette.bg.highlight};
  color: ${({ theme }) => theme.palette.color.text};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.color.text};
    text-decoration: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.bg.highlight};
    transition: all 0.2s ease-in;
  }
  transition: all 0.2s ease-out;
`;

export const AuthLogOutStyled = styled.button`
  width: 25%;
  height: 5%;
  background-color: tomato;
  color: ${({ theme }) => theme.palette.color.text};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.color.text};
    text-decoration: none;
    box-shadow: 0 0 10px tomato;
    transition: all 0.2s ease-in;
  }
  transition: all 0.2s ease-out;

  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: 0 !important;
  }
`;
