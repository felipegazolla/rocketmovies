import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  #description {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  #title {
    margin: 24px 0;
    display: flex;
    align-items: center;
    gap: 19px;
  }

  > p {
    text-align: justify;
    margin-top: 20px;
  }

  #user {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }

  #date {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 10px;
    align-items: center;
    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`