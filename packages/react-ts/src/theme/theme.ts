const colors = {
  dark: '#232323',
  black: '#000000',
  light: '#d3d6e3',
  white: '#ffffff',
}

export interface Theme {
  colors: typeof colors
}

const theme: Theme = {
  colors,
}

export default theme
