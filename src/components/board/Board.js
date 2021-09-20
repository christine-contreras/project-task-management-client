import React from 'react'
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Container,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Board = ({ board }) => {
  const { name, tasks } = board
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
              onClick={console.log}>
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Board
