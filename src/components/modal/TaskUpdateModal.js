import React from 'react'
import { changeDate, changeDateToApiFormat } from '../../helpers/changeDate'
import { priorityColor, statusColor } from '../../helpers/taskTags'
import TitleField from './TitleField'
import { SaveButton } from './SaveButton'
import {
  Typography,
  Modal,
  TextField,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

const TaskModal = ({
  task,
  openModal,
  handleCloseModel,
  updateTask,
  //   handleCreateBoard,
  mode,
}) => {
  const [name, setName] = React.useState(task.name)
  //change to input task date
  const [date, setDate] = React.useState(changeDate(task.due_date))
  const [status, setStatus] = React.useState(task.status)
  const [priority, setPriority] = React.useState(task.priority)
  const [description, setDescription] = React.useState(task.description)

  const status_options = [
    'Not Started',
    'In Progress',
    'Pending',
    'Changes Needed',
    'Complete',
  ]

  const priority_options = ['Low', 'Medium', 'High']

  const handleSubmit = (event) => {
    event.preventDefault()

    if (task) {
      const updatedTask = {
        ...task,
        name: name,
        due_date: changeDateToApiFormat(date),
        status: status,
        priority: priority,
        description: description,
      }
      updateTask(updatedTask)
    } else {
      const newTask = { name: name }
      //   handleCreateBoard(newTask)
      setName('')
    }

    handleCloseModel()
  }

  const handleChange = (event) => {
    const newdate = changeDateToApiFormat(event)
    debugger
  }

  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={handleCloseModel}
      aria-labelledby='modal-edit-task'
      aria-describedby='modal-edit-task-details'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          className='modal-body edit-modal b-radius'
          style={{ background: !mode ? '#212121' : '#fff' }}>
          <Typography
            id='modal-modal-title'
            variant='h5'
            component='h3'
            gutterBottom>
            Task Details
          </Typography>

          <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
            className='form task-form padding-top'>
            <TitleField title={name} setTitle={setName} labelName='Task Name' />
            <FormGroup className='task-input'>
              <InputLabel id='dueDate'>Due Date:</InputLabel>
              <DatePicker
                value={date}
                name='dueDate'
                onChange={(newDate) => {
                  setDate(newDate)
                }}
                renderInput={(params) => (
                  <TextField {...params} variant='standard' />
                )}
              />
            </FormGroup>

            <FormGroup className='task-input'>
              <InputLabel id='status-label'>Status:</InputLabel>
              <Select
                labelId='status-label'
                id='status-select'
                value={status}
                label='status'
                variant='standard'
                onChange={(event) => setStatus(event.target.value)}>
                {status_options.map((s) => {
                  return (
                    <MenuItem value={s} key={s}>
                      <Button variant='contained' className={statusColor(s)}>
                        {s}
                      </Button>
                    </MenuItem>
                  )
                })}
              </Select>
            </FormGroup>

            <FormGroup className='task-input padding-bottom-lg'>
              <InputLabel id='priority-label'>Priority:</InputLabel>
              <Select
                labelId='priority-label'
                id='priority-select'
                value={priority}
                label='priority'
                variant='standard'
                onChange={(event) => setPriority(event.target.value)}>
                {priority_options.map((p) => {
                  return (
                    <MenuItem value={p} key={p}>
                      <Button variant='contained' className={priorityColor(p)}>
                        {p}
                      </Button>
                    </MenuItem>
                  )
                })}
              </Select>
            </FormGroup>

            <div className='padding-bottom-lg'>
              <TextField
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                label='Description'
                variant='outlined'
                color='secondary'
                fullWidth
                multiline
                rows={5}
              />
            </div>

            <SaveButton title='Save Task' />
          </form>
        </div>
      </LocalizationProvider>
    </Modal>
  )
}

export default TaskModal