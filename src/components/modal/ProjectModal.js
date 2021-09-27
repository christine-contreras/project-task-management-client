import * as React from 'react'
import '../../css/modal.css'
import { palette } from '../../theme/palette'
import TitleField from './TitleField'
import ColorPicker from './ColorPicker'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'

const ProjectModal = ({
  openModal,
  handleCloseModel,
  mode,
  project,
  postProjects,
  handleUpdatingProject,
}) => {
  const [title, setTitle] = React.useState(project ? project.title : '')
  const [color, setColor] = React.useState(project ? project.color : '')

  React.useEffect(() => {
    setTitle(project ? project.title : '')
    setColor(project ? project.color : '')
  }, [project])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (project) {
      const updatedProject = { ...project, title: title, color: color }
      handleUpdatingProject(updatedProject)
    } else {
      const newProject = { title: title, color: color }
      postProjects(newProject)
      setTitle('')
      setColor('')
    }

    handleCloseModel()
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
          <TitleField
            title={title}
            setTitle={setTitle}
            labelName='Project Title'
          />
          <ColorPicker colors={palette} color={color} setColor={setColor} />

          <SaveButton title={project ? 'Save Project' : 'Create Project'} />
        </form>
      </div>
    </Modal>
  )
}

export default ProjectModal
