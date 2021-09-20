import * as React from 'react'
import '../../css/project.css'
import { colors } from '../colors'
import EditModal from './EditModal'
import ProjectMenu from './ProjectMenu'
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  Grid,
  Box,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import LinearProgress from '@mui/material/LinearProgress'

//progress bar for task completion
function LinearProgressWithLabel(props) {
  return (
    <Box className='flex'>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant='determinate'
          {...props}
          sx={{
            backgroundColor: 'rgb(78 78 78 / 20%)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: props.barColor,
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2'>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

const Project = ({
  project,
  mode,
  handleUpdatingProject,
  handleDeleteProject,
}) => {
  // handle progress bar
  const { tasks } = project
  const completedTasks = tasks.filter((task) => task.completed === true)
  const progress =
    completedTasks.length === 0
      ? 0
      : (completedTasks.length / tasks.length) * 100

  const currentColorScheme = colors.find((c) => c.color === project.color)

  //menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  const handleFavoringAProject = () => {
    const updatefavProject = { ...project, favorite: !project.favorite }

    handleUpdatingProject(updatefavProject)
  }

  //handle edit modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card
        className='b-radius project-card'
        style={{ background: project.color, color: '#444' }}>
        <CardActionArea>
          <IconButton
            onClick={handleFavoringAProject}
            style={{ color: '#444' }}>
            {project.favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
          <IconButton
            style={{ color: '#444' }}
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
          <LinearProgressWithLabel
            value={progress}
            barBackgroundColor={currentColorScheme.barBackgroundColor}
            barColor={currentColorScheme.barColor}
          />
        </CardContent>
      </Card>

      {/* pop ups */}
      <ProjectMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenModel={handleOpenModel}
        handleDeleteProject={handleDeleteProject}
        project={project}
      />

      <EditModal
        project={project}
        colors={colors}
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        handleUpdatingProject={handleUpdatingProject}
        mode={mode}
      />
    </Grid>
  )
}

export default Project
