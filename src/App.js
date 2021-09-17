import * as React from 'react'
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import Box from '@mui/material/Box'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Router>
          <Layout></Layout>
        </Router>
      </Box>
    </ThemeProvider>
  )
}
export default App
