import * as Styled from './image.styled'

export interface ImageProps {
  src: string
  alt?: string
}

export const Image = ({ src, alt = '' }: ImageProps) => (
  <Styled.Image src={src} alt={alt} />
)
