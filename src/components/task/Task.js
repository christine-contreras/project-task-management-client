import React from 'react'
import { changeDate } from '../../helpers/changeDate'
import { priorityColor, statusColor } from '../../helpers/taskTags'
import TaskMenu from './TaskMenu'
import TaskModal from '../modal/TaskModal'
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

const Task = ({ task, mode, completeTask, updateTask, handleDeleteTask }) => {
  const { name, due_date, priority, status } = task

  //task menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  //handle edit modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

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
            <IconButton onClick={handleMenuOpen}>
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

      {/* popups */}
      <TaskMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenModel={handleOpenModel}
        handleDeleteTask={handleDeleteTask}
        task={task}
      />

      <TaskModal
        task={task}
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        mode={mode}
        //handleUpdateBoard={handleUpdateBoard}
      />
    </Grid>
  )
}

export default Task