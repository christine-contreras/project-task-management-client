import React from 'react'
import BoardMenu from './BoardMenu'
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Container,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Board = ({ board, handleDeleteBoard }) => {
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

      <BoardMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        // handleOpenModel={handleOpenModel}
        handleDeleteBoard={handleDeleteBoard}
        board={board}
      />
    </Grid>
  )
}

export default Board
