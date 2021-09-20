import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TopNav from '../components/nav/TopNav'
import SideNav from '../components/nav/SideNav'

const drawerWidth = 240

const Layout = ({
  children,
  toggleTheme,
  mode,
  projects,
  search,
  setSearch,
}) => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <TopNav
        open={open}
        toggleDrawer={toggleDrawer}
        toggleTheme={toggleTheme}
        mode={mode}
        search={search}
        setSearch={setSearch}
      />
      <SideNav open={open} toggleDrawer={toggleDrawer} projects={projects} />

      <Box
        component='main'
        sx={{
          //   backgroundColor: (theme) =>
          //     theme.palette.mode === 'light'
          //       ? theme.palette.grey[100]
          //       : theme.palette.grey[900],
          height: '100vh',
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          overflow: 'auto',
        }}>
        <Toolbar />
        <Container maxWidth='xl' sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className='container-paper'>{children}</Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Layout
