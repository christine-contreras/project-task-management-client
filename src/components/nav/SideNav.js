import * as React from 'react'
import '../../css/sidenav.css'
import ProjectList from './Projectlist'
import FavoriteList from './FavoriteList'
import { Logo } from './Logo'
import { Typography, Toolbar, Divider } from '@mui/material'
import { Drawer } from '@mui/material'

const drawerWidth = 240

const Navigation = ({ projects, favorites }) => {
  return (
    <>
      <Toolbar className='flex'>
        <Logo />
        <Typography
          className='letter-spacing'
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          align='center'>
          Mercury
        </Typography>
      </Toolbar>
      <FavoriteList list={favorites} />

      <Divider sx={{ display: { sm: 'none' } }} />

      <ProjectList list={projects} />
    </>
  )
}

const SideNav = ({ open, toggleDrawer, window, projects }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined

  const favorites = projects
    ? projects.filter((project) => project.favorite === true)
    : []

  return (
    <>
      {/* mobile */}
      <Drawer
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
        <Navigation projects={projects} favorites={favorites} />
      </Drawer>

      {/* desktop */}
      <Drawer
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
        <Navigation projects={projects} favorites={favorites} />
      </Drawer>
    </>
  )
}

export default SideNav
