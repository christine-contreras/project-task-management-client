import React from 'react'

import { Menu, MenuItem, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const DropdownMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
  handleOpenModel,
  handleDelete,
  component,
  componentType,
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
        <IconButton
          size='large'
          aria-label={`edit ${componentType}`}
          color='inherit'>
          <CreateIcon />
        </IconButton>
        <p>{`Edit ${componentType} Details`}</p>
      </MenuItem>
      <MenuItem onClick={() => handleDelete(component)}>
        <IconButton
          size='large'
          aria-label={`delete ${componentType}`}
          color='inherit'>
          <DeleteIcon />
        </IconButton>
        <p>{`Delete ${componentType}`}</p>
      </MenuItem>
    </Menu>
  )
}

export default DropdownMenu
