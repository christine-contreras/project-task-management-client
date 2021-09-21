import * as React from 'react'
import '../css/boards.css'
import Board from '../components/board/Board'
import CreateBoard from '../components/board/CreateBoard'
import BoardModal from '../components/modal/BoardModal'
import { Grid } from '@mui/material'

const Boards = ({ boards, projectId, mode, setBoards, fetchProject }) => {
  //handle boards
  const handleDeleteBoard = (deleteBoard) => {
    const updatedBoards = boards.filter((board) => board.id !== deleteBoard.id)

    fetch(`http://localhost:9393/boards/${deleteBoard.id}`, {
      method: 'DELETE',
    })

    setBoards(updatedBoards)
  }

  const handleUpdateBoard = (updatedBoard) => {
    const updatedBoards = boards.map((board) =>
      board.id === updatedBoard.id ? updatedBoard : board
    )

    fetch(`http://localhost:9393/boards/${updatedBoard.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        name: updatedBoard.name,
      }),
    })

    setBoards(updatedBoards)
  }

  const handleCreateBoard = (newBoard) => {
    fetch('http://localhost:9393/boards/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        name: newBoard.name,
        project_id: projectId,
      }),
    }).then(() => {
      fetchProject()
    })
  }

  //handle create board modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <Grid container item className='boards-container'>
      {boards &&
        boards.map((board) => (
          <Board
            key={`board-${board.id}`}
            board={board}
            mode={mode}
            handleUpdateBoard={handleUpdateBoard}
            handleDeleteBoard={handleDeleteBoard}
            handleCreateBoard={handleCreateBoard}
          />
        ))}

      <CreateBoard handleOpenModel={handleOpenModel} />

      <BoardModal
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        mode={mode}
        handleCreateBoard={handleCreateBoard}
      />
    </Grid>
  )
}

export default Boards
