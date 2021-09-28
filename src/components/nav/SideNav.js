import * as React from 'react'
import '../../css/sidenav.css'
import ProjectList from './Projectlist'
import FavoriteList from './FavoriteList'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import { Typography, Toolbar, Divider } from '@mui/material'
import { Drawer } from '@mui/material'
import { useHistory } from 'react-router-dom'

const drawerWidth = 240

const Navigation = ({ projects, favorites, mode, fetchProjects }) => {
  let history = useHistory()
  const handleHomeClick = (event) => {
    history.push('/projects')
    fetchProjects()
  }

  return (
    <>
      <Toolbar className='flex'>
        <a onClick={handleHomeClick} href='#' className='flex link'>
          <Logo />
          <Typography
            className='letter-spacing'
            component='h1'
            variant='h6'
            noWrap
            sx={{ color: mode ? '#444' : '#fff' }}
            align='center'>
            Mercury
          </Typography>
        </a>
      </Toolbar>
      <FavoriteList list={favorites} />

      <Divider sx={{ display: { sm: 'none' } }} />

      <ProjectList list={projects} />
    </>
  )
}

const SideNav = ({
  open,
  toggleDrawer,
  window,
  projects,
  mode,
  fetchProjects,
}) => {
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
        <Navigation
          projects={projects}
          favorites={favorites}
          mode={mode}
          fetchProjects={fetchProjects}
        />
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
        <Navigation
          projects={projects}
          favorites={favorites}
          mode={mode}
          fetchProjects={fetchProjects}
        />
      </Drawer>
    </>
  )
}

export default SideNav
