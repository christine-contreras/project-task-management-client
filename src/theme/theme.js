import { createTheme } from '@mui/material/styles'
// import { brown } from '@mui/material/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
const theme = createTheme({
  palette: {
    mode: 'light',
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
    // subtitle1: {
    //   // fontWeight: 100,
    //   fontSize: '1.25em',
    // },
    // body2: {
    //   fontWeight: 100,
    //   fontSize: '1em',
    //   lineHeight: 1.5,
    // },
  },
})

export default theme
