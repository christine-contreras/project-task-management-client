import React from 'react'
import { changeDate } from '../../helpers/changeDate'
import { priorityColor, statusColor } from '../../helpers/taskTags'
import {
  Card,
  Container,
  CardActionArea,
  Tooltip,
  Grid,
  Button,
  IconButton,
  CardContent,
  Typography,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ScheduleIcon from '@mui/icons-material/Schedule'

const Task = ({ task, mode, completeTask, updateTask }) => {
  const { name, due_date, priority, status } = task

  return (
    <Grid item xs={12}>
      <Card
        elevation={4}
        className='task-card b-radius-sm'
        sx={{
          backgroundColor: mode
            ? 'rgb(243 246 253 / 50%)'
            : 'rgb(255 255 255 / 5%)',
        }}>
        <CardActionArea className='card-actions'>
          <Tooltip title='complete task'>
            <IconButton onClick={() => completeTask(task)}>
              {task.completed ? (
                <CheckCircleIcon color='success' />
              ) : (
                <CheckCircleOutlineIcon color='inherit' />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title='Task Options'>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </CardActionArea>
        <CardContent>
          <Grid container flexDirection='column' className='flex'>
            <Typography variant='subtitle1' component='h4'>
              {name}
            </Typography>
            <Grid className='flex'>
              <IconButton size='small'>
                <ScheduleIcon fontSize='inherit' />
              </IconButton>
              <Typography variant='subtitle2'>
                {changeDate(due_date)}
              </Typography>
            </Grid>

            <Grid item container className='task-callouts flex'>
              <Button variant='contained' className={priorityColor(priority)}>
                {priority}
              </Button>
              <Button variant='contained' className={statusColor(status)}>
                {status}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Task
