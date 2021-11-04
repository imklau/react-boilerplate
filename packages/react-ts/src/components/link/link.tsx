import type { FC } from 'react'

import ArrowNext from '@assets/icons/arrow-next.svg'

import * as Styled from './link.styled'

export interface LinkProps {
  to: string
}

export const Link: FC<LinkProps> = ({ to, children }) => (
  <Styled.Link to={to}>
    {children}
    <ArrowNext width={10} />
  </Styled.Link>
)
