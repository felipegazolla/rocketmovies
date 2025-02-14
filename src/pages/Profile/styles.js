import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;

    padding: 0 124px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      
      font-size: 16px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`