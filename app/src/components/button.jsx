import ArrowNext from "@assets/icons/arrow-next.svg"

import * as Styled from "./button.styled"

const Button = () => (
  <Styled.Button type="button" onClick={() => console.log("button click")}>
    button
    <ArrowNext width={10} fill="#fff" />
  </Styled.Button>
)

export default Button
