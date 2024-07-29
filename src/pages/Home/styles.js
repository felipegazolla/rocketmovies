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