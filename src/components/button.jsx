import React from "react"

import arrowNext from "@assets/icons/arrow-next.svg"

import * as Styled from "./button.styled"

const Button = () => (
  <Styled.Button type="button" onClick={() => console.log("button click")}>
    button
    <Styled.Icon src={arrowNext} alt="" />
  </Styled.Button>
)

export default Button
