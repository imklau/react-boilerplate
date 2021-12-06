const colors = {
  primary: '#0047FF',
  primaryDark: '#043bca',
  dark: '#121214',
  black: '#000000',
  light: '#d6deeb',
  white: '#ffffff',
}

export interface Theme {
  colors: typeof colors
}

const theme: Theme = {
  colors,
}

export default theme
