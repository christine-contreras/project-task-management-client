import * as React from 'react'
import '../../css/project.css'
import { ProjectColors } from '../ProjectColors'
import ProjectModal from '../modal/ProjectModal'
import ProjectMenu from './ProjectMenu'
import { Link } from 'react-router-dom'
import LinearProgressWithLabel from './LinearProgressWithLabel'
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  Grid,
  Box,
  Tooltip,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

//progress bar for task completion
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

  const currentColorScheme = ProjectColors(project)

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
      <Link to={`/projects/${project.id}`} className='link'>
        <Card
          className='b-radius project-card'
          style={{ background: project.color, color: '#444' }}>
          <CardActionArea>
            <Tooltip
              title={project.favorite ? 'Remove Favorite' : 'Add Favorite'}>
              <IconButton
                onClick={handleFavoringAProject}
                style={{ color: '#444' }}>
                {project.favorite ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title='Project Options'>
              <IconButton
                style={{ color: '#444' }}
                aria-label='show options'
                aria-controls='project-options'
                aria-haspopup='true'
                onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </CardActionArea>
          <CardContent>
            <Typography variant='h6' component='p'>
              {project.title}
            </Typography>
            <LinearProgressWithLabel
              value={progress}
              barColor={currentColorScheme.color}
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

        <ProjectModal
          project={project}
          openModal={openModal}
          handleCloseModel={handleCloseModel}
          handleUpdatingProject={handleUpdatingProject}
          mode={mode}
        />
      </Link>
    </Grid>
  )
}

export default Project
