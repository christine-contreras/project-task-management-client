import { createTheme } from '@mui/material/styles'
import { pink, purple } from '@mui/material/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },
    text: {
      primary: '#1f1c2e',
    },
    background: {
      default: '#f3f6fd',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '5em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.75em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '3em',
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25em',
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
})

export default lightTheme
