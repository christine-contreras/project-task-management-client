import * as React from 'react'
import { ProjectColors } from '../components/ProjectColors'
import { Typography, Grid, Tooltip, IconButton, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

const ProjectDashboard = ({
  match,
  patchProject,
  handleUpdatingProject,
  handleDeleteProject,
}) => {
  const [project, setProject] = React.useState([])
  const { boards } = project

  React.useEffect(() => {
    fetch(`http://localhost:9393/projects/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data.project))
  }, [match.params.id])

  const handleFavoringAProject = () => {
    const updatefavProject = { ...project, favorite: !project.favorite }
    setProject(updatefavProject)

    handleUpdatingProject(updatefavProject)
  }

  const currentColorScheme = ProjectColors(project)

  return (
    <>
      {project && (
        <Grid container alignContent='center' justifyContent='space-between'>
          <Box className='flex'>
            <Tooltip
              title={project.favorite ? 'Remove Favorite' : 'Add Favorite'}>
              <IconButton
                onClick={handleFavoringAProject}
                size='large'
                sx={{ color: currentColorScheme.colorDark }}>
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
                onClick={console.log}>
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      )}
    </>
  )
}

export default ProjectDashboard
