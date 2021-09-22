import React from 'react'
import '../css/task.css'
import Task from '../components/task/Task'
import { Grid, Typography, Container } from '@mui/material'

const Tasks = ({ tasks, boardId, mode }) => {
  return (
    <Grid container>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Task task={task} key={`task-${task.id}`} mode={mode} />
        ))
      ) : (
        <Grid container item alignItems='center' justifyContent='center'>
          <Typography
            variant='h6'
            component='p'
            gutterBottom
            sx={{ color: (theme) => theme.palette.text.disabled }}>
            No Tasks Yet
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default Tasks
