import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"

import { theme, globalStyles } from "@theme"
import Button from "@components/button"
import image from "@assets/images/image.jpg"

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <h1>React Boilerplate</h1>
    <img src={image} alt="" />
    <Button />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById("root"))
