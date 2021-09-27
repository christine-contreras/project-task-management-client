import { createTheme } from '@mui/material/styles'
import { pink, purple } from '@mui/material/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: purple[50],
      main: purple[200],
      dark: purple[400],
    },
    secondary: {
      light: pink[50],
      main: pink[200],
      dark: pink[400],
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

export default darkTheme
