import * as React from 'react'
import '../../css/modal.css'

import {
  Typography,
  Modal,
  TextField,
  Button,
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'

const EditModal = ({
  openModal,
  handleCloseModel,
  mode,
  project,
  colors,
  handleUpdatingProject,
}) => {
  const [title, setTitle] = React.useState(project.title)
  const [color, setColor] = React.useState('')
  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedProject = { ...project, title: title, color: color }
    handleUpdatingProject(updatedProject)
  }

  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={handleCloseModel}
      aria-labelledby='modal-edit-project'
      aria-describedby='modal-edit-project-name-color'>
      <div
        className='modal-body edit-modal b-radius'
        style={{ background: !mode ? '#212121' : '#fff' }}>
        <Typography
          id='modal-modal-title'
          variant='h5'
          component='h3'
          gutterBottom>
          Project Details
        </Typography>

        <form
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
          className='form details-form'>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label='Project Title'
            variant='outlined'
            color='secondary'
            fullWidth
          />

          <FormControl xs={{ pb: 2 }}>
            <FormLabel>Project Color</FormLabel>
            <RadioGroup
              className='flex row'
              value={color}
              onChange={(e) => setColor(e.target.value)}>
              {colors.map((color) => (
                <FormControlLabel
                  control={<Radio />}
                  value={color.color}
                  label=''
                  sx={{
                    backgroundColor: color.color,
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Button type='submit' color='primary' variant='contained'>
            Save Project
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default EditModal
