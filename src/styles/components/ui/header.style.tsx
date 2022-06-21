import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: var(--header-height);

  > svg {
    fill: var(--color-header-bg);
    transform: rotate(180deg);
    z-index: 5;
    width: 100%;
    height: var(--header-footer-height);
  }
`;

export const HeaderContentStyled = styled.div`
  background-color: var(--color-header-bg);
  height: var(--header-content-height);

  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderNavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const HeaderUlStyled = styled.ul`
  gap: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  color: var(--color-header);
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    svg {
      fill: var(--color-header-icon);
      width: 24px;
      height: 24px;
    }

    &:first-child {
      margin-right: auto;
      @include mobile {
        margin: 0;
      }
    }
  }
`;
