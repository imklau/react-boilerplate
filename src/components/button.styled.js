import styled from "@emotion/styled"

export const Button = styled.button`
  display: block;
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};

  svg {
    margin-left: 10px;
  }
`
