import styled from "styled-components"
import { Link } from "react-router-dom"

export const App = styled.div`
  height: 70vh;
  position: absolute;
  overflow-y: auto;
`
export const Container = styled.div`
  width: 100%;
  height: 100px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 70px;
  `

export const Content = styled.div` 
  max-width: 1650px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const AddButton = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 8px;

  padding: 15.5px 32px;
`

export const Header = styled.header`
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

    button {
  
        background: none;
        border: none;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

`