import { string } from 'prop-types'

import ArrowNext from '@assets/icons/arrow-next.svg'

import * as Styled from './link.styled'

export const Link = ({ to, children }) => (
  <Styled.Link to={to}>
    {children}
    <ArrowNext width={10} fill="#fff" />
  </Styled.Link>
)

Link.propTypes = {
  to: string.isRequired,
  children: string.isRequired,
}
