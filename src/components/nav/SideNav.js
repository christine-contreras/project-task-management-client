import * as React from 'react'
import '../../css/sidenav.css'
import ProjectList from './Projectlist'
import FavoriteList from './FavoriteList'
import { Logo } from './Logo'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'

const drawerWidth = 240

const Navigation = ({ projects, favorites }) => {
  return (
    <>
      <Toolbar className='flex'>
        <Logo />
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
        <Navigation projects={projects} favorites={favorites} />
      </MuiDrawer>

      {/* desktop */}
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
        <Navigation projects={projects} favorites={favorites} />
      </MuiDrawer>
    </>
  )
}

export default SideNav
