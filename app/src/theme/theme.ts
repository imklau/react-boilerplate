const colors = {
  primary: "hotpink",
  dark: "#232323",
  white: "#fff",
}

export interface Theme {
  colors: typeof colors
}

const theme: Theme = {
  colors,
}

export default theme
