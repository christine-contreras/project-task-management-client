import * as React from 'react'
import { ProjectColors } from '../components/ProjectColors'
import ProjectMenu from '../components/project/ProjectMenu'
import ProjectModal from '../components/modal/ProjectModal'
import Boards from './Boards'
import {
  Typography,
  Grid,
  Tooltip,
  IconButton,
  Box,
  Container,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

const ProjectDashboard = ({
  match,
  history,
  mode,
  handleUpdatingProject,
  handleDeleteProject,
}) => {
  //handle projects
  const [project, setProject] = React.useState([])
  const [boards, setBoards] = React.useState([])

  React.useEffect(() => {
    fetchProject()
  }, [match.params.id])

  const fetchProject = () => {
    fetch(`http://localhost:9393/projects/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project)
        setBoards(data.project.boards)
      })
  }

  const handleFavoringAProject = () => {
    const updatefavProject = { ...project, favorite: !project.favorite }
    setProject(updatefavProject)
    handleUpdatingProject(updatefavProject)
  }

  const handleChange = (changedProject) => {
    setProject(changedProject)
    handleUpdatingProject(changedProject)
  }

  const handleDelete = (deleteProject) => {
    handleDeleteProject(deleteProject)
    history.push('/projects/')
  }

  //get colors for project
  const currentColorScheme = ProjectColors(project)

  //project menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)
  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  //project edit modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <>
      {project && (
        <>
          <Container maxWidth='xl' sx={{ height: '80vh' }}>
            <Grid
              item
              container
              alignContent='center'
              justifyContent='space-between'
              sx={{ pb: 6 }}>
              <Box className='flex'>
                <Tooltip
                  title={project.favorite ? 'Remove Favorite' : 'Add Favorite'}>
                  <IconButton
                    onClick={handleFavoringAProject}
                    size='large'
                    sx={{
                      color: currentColorScheme
                        ? currentColorScheme.colorDark
                        : 'inherit',
                    }}>
                    {project.favorite ? (
                      <StarIcon fontSize='large' />
                    ) : (
                      <StarBorderIcon fontSize='large' />
                    )}
                  </IconButton>
                </Tooltip>
                <Typography variant='h3' component='h2'>
                  {project.title}
                </Typography>
              </Box>

              <Box className='flex'>
                <Tooltip title='Project Options'>
                  <IconButton
                    aria-label='show options'
                    aria-controls='project-options'
                    aria-haspopup='true'
                    onClick={handleMenuOpen}>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              <ProjectMenu
                moreAnchorEl={moreAnchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
                handleOpenModel={handleOpenModel}
                handleDeleteProject={handleDelete}
                project={project}
              />

              <ProjectModal
                project={project}
                openModal={openModal}
                handleCloseModel={handleCloseModel}
                handleUpdatingProject={handleChange}
                mode={mode}
              />
            </Grid>

            <Boards
              boards={boards}
              setBoards={setBoards}
              fetchProject={fetchProject}
              mode={mode}
              colors={currentColorScheme}
              projectId={project.id}
            />
          </Container>
        </>
      )}
    </>
  )
}

export default ProjectDashboard
