import * as React from 'react'
import '../../css/project.css'
import { Card, CardContent, CardActionArea } from '@mui/material'
import { Typography, Menu, MenuItem } from '@mui/material'
import { IconButton, Badge } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import LinearProgress from '@mui/material/LinearProgress'
import { Grid, Box } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

const Project = ({ project, handleFavoringAProject }) => {
  const [progress, setProgress] = React.useState(10)
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  const renderProjectMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id='project-options'
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem>
        <IconButton size='large' aria-label='edit project' color='inherit'>
          <CreateIcon />
        </IconButton>
        <p>Edit Project Details</p>
      </MenuItem>
      <MenuItem>
        <IconButton size='large' aria-label='edit project' color='inherit'>
          <DeleteIcon />
        </IconButton>
        <p>Delete Project</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className='b-radius project-card'>
        <CardActionArea>
          <IconButton onClick={() => handleFavoringAProject(project)}>
            {project.favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          <IconButton
            aria-label='show options'
            aria-controls='project-options'
            aria-haspopup='true'
            onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </CardActionArea>
        <CardContent>
          <Typography variant='h6' component='p'>
            {project.title}
          </Typography>
          <LinearProgressWithLabel value={progress} />
        </CardContent>
      </Card>
      {renderProjectMenu}
    </Grid>
  )
}

export default Project
