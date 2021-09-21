import * as React from 'react'
import '../css/boards.css'
import Board from '../components/board/Board'
import { Grid } from '@mui/material'

const Boards = ({ boards, handleDeleteBoard }) => {
  return (
    <Grid container item className='boards-container'>
      {boards &&
        boards.map((board) => (
          <Board
            key={`board-${board.id}`}
            board={board}
            handleDeleteBoard={handleDeleteBoard}
          />
        ))}
    </Grid>
  )
}

export default Boards
