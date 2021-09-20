import React from 'react'
import Project from '../components/project/Project'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
const Projects = ({
  projects,
  mode,
  handleUpdatingProject,
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
                mode={mode}
                project={project}
                key={`projectcard-${project.id}`}
                handleUpdatingProject={handleUpdatingProject}
                handleDeleteProject={handleDeleteProject}
              />
            ))
          : null}
      </Grid>
    </>
  )
}

export default Projects
