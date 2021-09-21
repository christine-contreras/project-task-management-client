import React from 'react'
import BoardMenu from './BoardMenu'
import BoardModal from '../modal/BoardModal'
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Container,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Board = ({
  board,
  handleDeleteBoard,
  handleUpdateBoard,
  handleCreateBoard,
  mode,
}) => {
  const { name, tasks } = board

  //board menu to see more options
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
    <Grid item xs={12} sm={12} md={6} lg={4} className='board'>
      <Grid container alignContent='center' justifyContent='space-between'>
        <Typography variant='h6' component='h3' gutterBottom>
          {name}
        </Typography>
        <Box className='flex'>
          <Tooltip title='Board Options'>
            <IconButton
              aria-label='show options'
              aria-controls='board-options'
              aria-haspopup='true'
              onClick={handleMenuOpen}>
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>

      {/* popups */}
      <BoardMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleOpenModel={handleOpenModel}
        handleDeleteBoard={handleDeleteBoard}
        board={board}
      />

      <BoardModal
        board={board}
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        mode={mode}
        handleUpdateBoard={handleUpdateBoard}
      />
    </Grid>
  )
}

export default Board
