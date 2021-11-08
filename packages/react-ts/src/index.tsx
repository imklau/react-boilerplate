import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'

import Home from '@views/home'
import About from '@views/about'

import { theme, globalStyles } from '@theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
