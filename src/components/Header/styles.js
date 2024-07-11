import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 0 80px;

  > h1 {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 24px;
    font-weight: bold;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  min-width: 200px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    line-height: 24px;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`