import * as React from 'react'
import Project from '../components/project/Project'
import ProjectModal from '../components/modal/ProjectModal'
import { Typography, Grid, IconButton, Tooltip, Box } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const Projects = ({
  projects,
  mode,
  postProjects,
  handleUpdatingProject,
  handleDeleteProject,
}) => {
  //handle edit modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <>
      <Grid container alignContent='center' justifyContent='space-between'>
        <Typography variant='h2' gutterBottom>
          Projects
        </Typography>
        <Box className='flex'>
          <Tooltip title='Create New Project'>
            <IconButton
              size='large'
              aria-label='edit project'
              color='inherit'
              onClick={handleOpenModel}>
              <ControlPointIcon fontSize='large' />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        {projects
          ? projects.map((project) => (
              <Project
                mode={mode}
                project={project}
                key={`projectcard-${project.id}`}
                handleUpdatingProject={handleUpdatingProject}
                handleDeleteProject={handleDeleteProject}
              />
            ))
          : null}

        {/* create new project modal */}
        <ProjectModal
          project={null}
          openModal={openModal}
          handleCloseModel={handleCloseModel}
          postProjects={postProjects}
          mode={mode}
        />
      </Grid>
    </>
  )
}

export default Projects
