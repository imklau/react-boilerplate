import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled'

export const Link = styled(RouterLink)`
  position: relative;
  display: inline-block;
  margin-right: 30px;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    margin-left: 10px;
  }
`
