import { string } from 'prop-types'

import * as Styled from './image.styled'

export const Image = ({ src }) => <Styled.Image src={src} />

Image.propTypes = {
  src: string.isRequired,
}
