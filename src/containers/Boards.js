import * as React from 'react'
import '../css/boards.css'
import Board from '../components/board/Board'
import CreateBoard from '../components/board/CreateBoard'
import BoardModal from '../components/modal/BoardModal'
import { Container, Grid } from '@mui/material'

const Boards = ({
  boards,
  projectId,
  mode,
  setBoards,
  fetchProject,
  colors,
}) => {
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
    })
      // .then((res) => {
      //   res.json()
      //   //fetchProject()
      // })
      .then((res) => res.json())
      .then((data) => {
        setBoards((prevBoards) => {
          return [...prevBoards, data.board]
        })
      })
  }

  //handle create board modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  return (
    <Container sx={{ overflow: 'scroll' }} maxWidth='xl'>
      <Grid container item className='boards-container'>
        {boards &&
          boards.map((board) => (
            <Board
              key={`board-${board.id}`}
              board={board}
              boards={boards}
              fetchProject={fetchProject}
              mode={mode}
              colors={colors}
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
    </Container>
  )
}

export default Boards
