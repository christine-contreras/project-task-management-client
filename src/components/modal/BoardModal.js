import React from 'react'
import TitleField from './TitleField'
import { SaveButton } from './SaveButton'
import { Typography, Modal } from '@mui/material'

const BoardModal = ({
  board,
  openModal,
  handleCloseModel,
  handleUpdateBoard,
  mode,
}) => {
  const [name, setName] = React.useState(board ? board.name : '')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (board) {
      const updatedBoard = { ...board, name: name }
      handleUpdateBoard(updatedBoard)
    } else {
      const newBoard = { name: name }
      // postProjects(newProject)
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
          <TitleField title={name} setTitle={setName} labelName='Board Name' />
          <SaveButton title={board ? 'Save Board' : 'Create Board'} />
        </form>
      </div>
    </Modal>
  )
}

export default BoardModal
