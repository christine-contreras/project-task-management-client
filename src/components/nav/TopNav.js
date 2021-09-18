import * as React from 'react'
import '../../css/topnav.css'
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

const TopNav = ({ open, toggleDrawer, toggleTheme, mode }) => {
  const icon = !mode ? <Brightness7Icon /> : <Brightness2Icon />
  //const icon = <Brightness7Icon />

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
          <span class='logo'>
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 881.25 881.25'>
              <g id='surface1'>
                <path
                  class='logo-outer'
                  d='M440.62,0C197.27,0,0,197.27,0,440.62S197.27,881.25,440.62,881.25,881.25,684,881.25,440.62C881,197.39,683.86.27,440.62,0ZM376,34.5Q362.17,48.93,349.08,64L305.5,114.23A769.11,769.11,0,0,1,185.93,225.66,795.13,795.13,0,0,0,34.8,374.31,412.2,412.2,0,0,1,376,34.5ZM29.38,440.62c0-3.24.17-6.43.25-9.66l6.59-9.35A767,767,0,0,1,203.51,249.14,797.52,797.52,0,0,0,327.68,133.47L371.2,83.23c16.15-18.59,33.29-36.54,51-53.39,6.11-.27,12.24-.46,18.41-.46a408.54,408.54,0,0,1,181.7,42.44l-27.75,18.1A687.87,687.87,0,0,0,393,291.52a658.2,658.2,0,0,1-193,193.05A690.64,690.64,0,0,0,62.79,602.86,408.84,408.84,0,0,1,29.38,440.62Zm822.5,0c-.26,227-184.23,411-411.26,411.26-7.53,0-15-.24-22.45-.63A767.12,767.12,0,0,1,578.08,688.84,797.64,797.64,0,0,0,702.25,573.15l43.54-50.23a770.38,770.38,0,0,1,77.4-77.39l28.18-24.44C851.68,427.57,851.88,434.08,851.88,440.62ZM810.49,261A407.76,407.76,0,0,1,848,385.12L804,423.31a802.77,802.77,0,0,0-80.33,80.35L680,553.91A767.18,767.18,0,0,1,560.47,665.34a796.35,796.35,0,0,0-173.7,179l-2.49,3.55a408.1,408.1,0,0,1-115.85-34l65-93.17A794.45,794.45,0,0,1,563.14,501.51,824.09,824.09,0,0,0,802.85,272Zm-31.78-5.7A794.72,794.72,0,0,1,547.48,476.64,824,824,0,0,0,309.28,704L242,800.55a413.9,413.9,0,0,1-165.44-169A661,661,0,0,1,215.91,509.17a687.83,687.83,0,0,0,201.67-201.6,658.36,658.36,0,0,1,193-193l41-26.73A414.14,414.14,0,0,1,794.83,232.06Z'
                />
                <path
                  class='purple'
                  d='M236.78,380.1A44.07,44.07,0,1,0,192.71,336,44.06,44.06,0,0,0,236.78,380.1Zm0-58.75A14.69,14.69,0,1,1,222.09,336,14.69,14.69,0,0,1,236.78,321.35Z'
                />
                <path class='purple' d='M119.28,365.41h29.37v29.37H119.28Z' />
                <path class='purple' d='M324.9,189.16h29.38v29.38H324.9Z' />
                <path class='magenta' d='M515.84,306.66h29.37V336H515.84Z' />
                <path
                  class='magenta'
                  d='M354.28,453.54A58.75,58.75,0,1,0,413,512.29,58.75,58.75,0,0,0,354.28,453.54Zm0,88.12a29.38,29.38,0,1,1,29.37-29.37A29.37,29.37,0,0,1,354.28,541.66Z'
                />
                <path class='orange' d='M750.84,600.41h29.37v29.38H750.84Z' />
                <path class='pink' d='M677.4,233.22h29.38V262.6H677.4Z' />
                <path class='orange' d='M559.9,762h29.38v29.38H559.9Z' />
                <path class='pink' d='M222.09,688.54h29.37v29.37H222.09Z' />
                <path class='pink' d='M574.59,541.66H604V571H574.59Z' />
              </g>
            </svg>
          </span>
        </Typography>
        <div className='search-bar b-radius'>
          <TextField label='Search' variant='standard' />
          <SearchIcon />
        </div>

        <IconButton
          edge='end'
          color='inherit'
          aria-label='mode'
          onClick={toggleTheme}>
          {icon}
        </IconButton>

        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar src='https://lh3.googleusercontent.com/ogw/ADea4I7CeY53aWLoZ7OatzmqDINKOArp3Y1kU8BM2CwFuw=s32-c-mo' />
        <Typography
          component='h2'
          variant='h6'
          className='letter-spacing'
          sx={{ display: { xs: 'none', sm: 'block' } }}>
          Christine
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default TopNav
