import React from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const ProjectMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
  handleOpenModel,
  handleDeleteProject,
  project,
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
        <p>Edit Project Details</p>
      </MenuItem>
      <MenuItem onClick={() => handleDeleteProject(project)}>
        <IconButton size='large' aria-label='delete project' color='inherit'>
          <DeleteIcon />
        </IconButton>
        <p>Delete Project</p>
      </MenuItem>
    </Menu>
  )
}

export default ProjectMenu
