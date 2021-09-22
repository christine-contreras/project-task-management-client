import React from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const TaskMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
  task,
  handleDeleteTask,
  handleOpenModel,
}) => {
  return (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id='project-options'
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleOpenModel}>
        <IconButton size='large' aria-label='edit project' color='inherit'>
          <CreateIcon />
        </IconButton>
        <p>Edit Task</p>
      </MenuItem>
      <MenuItem onClick={() => handleDeleteTask(task)}>
        <IconButton size='large' aria-label='delete project' color='inherit'>
          <DeleteIcon />
        </IconButton>
        <p>Delete Task</p>
      </MenuItem>
    </Menu>
  )
}

export default TaskMenu
