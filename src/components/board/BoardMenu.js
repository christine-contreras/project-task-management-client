import React from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const BoardMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
  board,
  handleDeleteBoard,
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
      <MenuItem onClick={console.log}>
        <IconButton size='large' aria-label='edit project' color='inherit'>
          <CreateIcon />
        </IconButton>
        <p>Edit Board Details</p>
      </MenuItem>
      <MenuItem onClick={() => handleDeleteBoard(board)}>
        <IconButton size='large' aria-label='delete project' color='inherit'>
          <DeleteIcon />
        </IconButton>
        <p>Delete Board</p>
      </MenuItem>
    </Menu>
  )
}

export default BoardMenu
