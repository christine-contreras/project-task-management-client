import * as React from 'react'
import lightTheme from './theme/light-theme'
import darkTheme from './theme/dark-theme'
import Projects from './containers/Projects'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import Box from '@mui/material/Box'

const App = () => {
  const [mode, setMode] = React.useState(true)
  const appliedTheme = createTheme(mode ? lightTheme : darkTheme)

  const toggleTheme = () => {
    setMode(!mode)
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Router>
          <Layout toggleTheme={toggleTheme} mode={mode}>
            <Route
              exact
              path='/projects'
              render={(routerProps) => <Projects {...routerProps} />}
            />
          </Layout>
        </Router>
      </Box>
    </ThemeProvider>
  )
}
export default App
