import styled from "styled-components"

export const Container = styled.button`
  max-width: 100%;

  text-align: left;
  margin: 0 70px;
  margin-bottom: 24px;
  padding: 32px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    margin-top: 15px;
    margin-bottom: 20px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #999591
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`