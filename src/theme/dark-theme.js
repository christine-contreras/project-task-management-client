import { createTheme } from '@mui/material/styles'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   light: '#a5c89a',
    //   main: '#76976c',
    //   dark: '#496941',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   // light: '#ff72d6',
    //   // main: brown[900],
    //   // dark: '#b90076',
    //   contrastText: '#fff',
    // },
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
  },
})

export default darkTheme
