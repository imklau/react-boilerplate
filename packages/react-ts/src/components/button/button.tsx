import type { FC } from 'react'

import ArrowNext from '@assets/icons/arrow-next.svg'

import * as Styled from './button.styled'

export const Button: FC = ({ children }) => (
  <Styled.Button type="button" onClick={() => console.log('button click')}>
    {children}
    <ArrowNext width={10} fill="#fff" />
  </Styled.Button>
)
