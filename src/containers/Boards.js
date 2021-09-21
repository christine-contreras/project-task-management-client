import * as React from 'react'
import '../css/boards.css'
import Board from '../components/board/Board'
import { Grid } from '@mui/material'

const Boards = ({ boards, fetchProject }) => {
  return (
    <Grid container item className='boards-container'>
      {boards &&
        boards.map((board) => (
          <Board
            key={`board-${board.id}`}
            board={board}
            fetchProject={fetchProject}
          />
        ))}
    </Grid>
  )
}

export default Boards
