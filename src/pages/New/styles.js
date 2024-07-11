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
  }
`

export const Form = styled.form`
  max-width: 100vw;
  margin: 38px 80px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 24px;

    margin-bottom: 36px;

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
    margin-bottom: 24px;
  }

`

export const Section = styled.div`
  width: 100%;

  display: flex;
  gap: 40px;

  margin-top: 32px;

  > #blackbutton {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

  }
`

export const Addtags = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLACK};

  width: 100%;
  min-height: 88px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  padding: 16px;

  border-radius: 8px;
`
