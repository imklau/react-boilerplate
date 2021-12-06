import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled'

export const Link = styled(RouterLink)`
  display: inline-block;
  margin: 15px 0;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  svg {
    margin-left: 10px;
  }
`
