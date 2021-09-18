import * as React from 'react'
import '../../css/project.css'
import { Card, CardContent, CardActionArea } from '@mui/material'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import LinearProgress from '@mui/material/LinearProgress'
import { Grid, Box } from '@mui/material'

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

const Project = () => {
  const [progress, setProgress] = React.useState(10)

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card className='b-radius project-card'>
        <CardActionArea>
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </CardActionArea>
        <CardContent>
          <Typography variant='h6' component='p'>
            Project 1 Title
          </Typography>
          <LinearProgressWithLabel value={progress} />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Project
