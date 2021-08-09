import { string } from 'prop-types'

import ArrowNext from '@assets/icons/arrow-next.svg'

import * as Styled from './button.styled'

export const Button = ({ children }) => (
  <Styled.Button type="button" onClick={() => console.log('button click')}>
    {children}

    <ArrowNext width={10} fill="#fff" />
  </Styled.Button>
)

Button.propTypes = {
  children: string.isRequired,
}
