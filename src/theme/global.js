import { css } from "@emotion/core"

import FiraSansRegular from "@assets/fonts/FiraSans-Regular.woff"
import FiraSansRegular2 from "@assets/fonts/FiraSans-Regular.woff2"
import FiraSansLight from "@assets/fonts/FiraSans-Light.woff"
import FiraSansLight2 from "@assets/fonts/FiraSans-Light.woff2"
import FiraSansMedium from "@assets/fonts/FiraSans-Medium.woff"
import FiraSansMedium2 from "@assets/fonts/FiraSans-Medium.woff2"

const globalStyles = css`
  @font-face {
    font-family: "Fira Sans";
    src: url(${FiraSansRegular}) format("woff2"),
      url(${FiraSansRegular2}) format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(${FiraSansLight}) format("woff2"),
      url(${FiraSansLight2}) format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Sans";
    src: url(${FiraSansMedium}) format("woff2"),
      url(${FiraSansMedium2}) format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "Fira Sans", Helvetica, sans-serif;
    color: #232323;
  }
`

export default globalStyles
