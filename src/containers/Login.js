import React from 'react'
import { Logo } from '../components/nav/Logo'
import { Grid, Typography, Button, Box } from '@mui/material'

const Login = ({ history }) => {
  return (
    <Grid
      sx={{ height: '100vh', width: '100vw', backgroundColor: '#fff' }}
      className='home-container'
      alignContent='center'
      justifyContent='center'>
      <Box
        sx={{ height: '100vh', width: '100vw', p: 3 }}
        className='flex column'>
        <Box className='flex'>
          <Logo />
          <Typography variant='h1' component='h1'>
            Mercury
          </Typography>
        </Box>
        <Box className='flex column'>
          <Typography component='h2' variant='h6' align='center'>
            Worry about your <em>job</em> not your <em>time</em>.
          </Typography>
          <Typography
            component='p'
            align='center'
            className='title-thin padding-bottom'>
            A project management tool to help you keep your life organized.
          </Typography>
          <Button
            onClick={() => history.push('/projects')}
            variant='contained'
            size='large'
            className='btn-login'
            color='primary'>
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default Login
