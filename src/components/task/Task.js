import * as React from 'react'
import { changeDate } from '../../helpers/changeDate'
import { priorityColor, statusColor } from '../../helpers/taskTags'
import DropdownMenu from '../DropdownMenu'
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
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ScheduleIcon from '@mui/icons-material/Schedule'

const Task = ({
  task,
  mode,
  completeTask,
  updateTask,
  handleDeleteTask,
  boards,
  currentBoardId,
}) => {
  const { name, due_date, priority, status } = task

  const formattedDate = changeDate(due_date)

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
            <Typography variant='subtitle1' component='h4' align='center'>
              {name}
            </Typography>
            <Grid className='flex'>
              <IconButton size='small'>
                <ScheduleIcon fontSize='inherit' />
              </IconButton>
              <Typography variant='subtitle2'>{formattedDate}</Typography>
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
      <DropdownMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenModel={handleOpenModel}
        handleDelete={handleDeleteTask}
        component={task}
        componentType='Task'
      />

      <TaskModal
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        mode={mode}
        task={task}
        boards={boards}
        currentBoardId={currentBoardId}
        updateTask={updateTask}
      />
    </Grid>
  )
}

export default Task
