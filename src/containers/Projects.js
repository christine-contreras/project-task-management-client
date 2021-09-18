import React from 'react'
import Project from '../components/project/Project'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
const Projects = ({
  projects,
  handleFavoringAProject,
  handleDeleteProject,
}) => {
  return (
    <>
      <Typography variant='h2' gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects
          ? projects.map((project) => (
              <Project
                project={project}
                key={`projectcard-${project.id}`}
                handleFavoringAProject={handleFavoringAProject}
                handleDeleteProject={handleDeleteProject}
              />
            ))
          : null}
      </Grid>
    </>
  )
}

export default Projects
