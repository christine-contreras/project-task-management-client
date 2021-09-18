import React from 'react'
import Project from '../components/project/Project'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
const Projects = () => {
  return (
    <>
      <Typography variant='h2' gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Project />
      </Grid>
    </>
  )
}

export default Projects
