import styled from '@emotion/styled';
import { breakpoint } from '../../../utils/theme';

export const DocsListControlStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > :first-child {
    display: flex;
    flex-direction: row;
    gap: 5px;

    > div {
      width: 25px;
      min-height: 25px;
      background-color: ${({ theme }) => theme.palette.bg.mainContent};
      text-align: center;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

export const DocsItemStyled = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  list-style: none;

  .docs-item__wrapper {
    display: grid;
    grid-gap: 5px;
    background-color: ${({ theme }) => theme.palette.bg.mainContent};

    ${breakpoint('md')} {
      grid-template-columns: 125px auto 50px;
      height: 125px;
    }
    grid-template-columns: 75px auto 30px;
    height: 75px;
  }
`;
