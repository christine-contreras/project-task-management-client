import * as React from 'react'
import MainList from './MainList'
import SecondaryList from './SecondaryList'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const drawerWidth = 240

const SideNav = ({ open, toggleDrawer, window }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <MuiDrawer
        container={container}
        variant='temporary'
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}>
        <Toolbar className='flex'>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            align='center'>
            Mercury
          </Typography>
        </Toolbar>
        <Divider />
        <MainList />
        <Divider />
        <SecondaryList />
      </MuiDrawer>

      <MuiDrawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: 'none',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.background.default
                : theme.palette.grey[900],
          },
        }}
        open>
        <Toolbar className='flex'>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            align='center'>
            Mercury
          </Typography>
        </Toolbar>

        <MainList />
        <SecondaryList />
      </MuiDrawer>
    </>
  )
}

export default SideNav
