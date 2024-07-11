import styled from "styled-components"

export const App = styled.div`
  height: 625px;
  position: absolute;
  overflow-y: auto;
`
export const Container = styled.div`
  width: 100%;
  height: 120px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 70px;
  `

export const Content = styled.div`
  max-width: 100%;

  margin: 0 70px;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};



  > h2 {
    margin-bottom: 10px;
  }

  > p {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const AddButton = styled.button`
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