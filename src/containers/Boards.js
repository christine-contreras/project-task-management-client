import React from 'react'
import '../css/boards.css'
import Board from '../components/board/Board'
import { Grid, Container } from '@mui/material'

const Boards = ({ boards }) => {
  return (
    <Grid container item className='boards-container'>
      {boards &&
        boards.map((board) => (
          <Board key={`board-${board.id}`} board={board} />
        ))}
    </Grid>
  )
}

export default Boards
