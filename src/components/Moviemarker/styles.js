import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: max-content;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" };

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
   
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 25px;
    }
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    margin: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }


`