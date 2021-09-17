import * as React from 'react'
import '../../css/topnav.css'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'

const drawerWidth = 240

const TopNav = ({ open, toggleDrawer }) => {
  return (
    <MuiAppBar
      color='transparent'
      enableColorOnDark
      position='fixed'
      open={open}
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}>
      <Toolbar className='flex'>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          align='center'
          sx={{ display: { xs: 'block', sm: 'none' } }}>
          M
        </Typography>
        <div className='search-bar b-radius'>
          <TextField label='Search' variant='standard' />
          <SearchIcon />
        </div>

        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar src='https://lh3.googleusercontent.com/ogw/ADea4I7CeY53aWLoZ7OatzmqDINKOArp3Y1kU8BM2CwFuw=s32-c-mo' />
        <Typography>Christine</Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default TopNav
