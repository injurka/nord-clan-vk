import styled from '@emotion/styled';

export const DocsInfoStyle = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  > div {
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    color: ${({ theme }) => theme.palette.color.text};
    font-weight: 400;
  }

  > p {
    margin: 0px;
    color: ${({ theme }) => theme.palette.color.subText};
    font-weight: 300;
  }
`;
