import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom'
import { Global, ThemeProvider } from '@emotion/react'

import Home from '@views/home'
import About from '@views/about'

import { theme, globalStyles } from '@theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h1>404: Not Found</h1>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
