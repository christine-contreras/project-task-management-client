import * as React from 'react'
import '../../css/topnav.css'
import { Logo } from './Logo'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const drawerWidth = 240

const TopNav = ({
  open,
  toggleDrawer,
  toggleTheme,
  mode,
  search,
  setSearch,
}) => {
  const icon = !mode ? <Brightness7Icon /> : <Brightness2Icon />

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
          sx={{ mr: 0, display: { sm: 'none' } }}
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
          <Logo />
        </Typography>
        <div
          className='search-bar b-radius'
          style={{ background: !mode ? '#212121' : '#fff' }}>
          <TextField
            label='Search'
            variant='standard'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SearchIcon />
        </div>
        <IconButton
          edge='end'
          color='inherit'
          aria-label='mode'
          onClick={toggleTheme}>
          {icon}
        </IconButton>
        {/* <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton> */}
        <Avatar sx={{ bgcolor: '#f77062' }}>UN</Avatar>
        <Typography
          component='h2'
          variant='h6'
          className='letter-spacing'
          sx={{ display: { xs: 'none', sm: 'block' } }}>
          User's Name
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default TopNav
