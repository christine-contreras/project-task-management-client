import * as React from 'react'
import BoardMenu from './BoardMenu'
import BoardModal from '../modal/BoardModal'
import Tasks from '../../containers/Tasks'
import {
  Grid,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Button,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddIcon from '@mui/icons-material/Add'

const Board = ({
  board,
  handleDeleteBoard,
  handleUpdateBoard,
  colors,
  mode,
}) => {
  const { name, id } = board
  const [tasks, setTasks] = React.useState([])

  React.useEffect(() => {
    setTasks(board.tasks)
  }, [board])

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
    <Grid
      item
      className='board b-radius-sm'
      flexDirection='column'
      sx={{
        backgroundColor: (theme) =>
          mode ? colors.colorLight : theme.palette.grey[800],
      }}>
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

      <Tasks tasks={tasks} boardId={id} mode={mode} setTasks={setTasks} />

      {/* add task button */}
      <Button
        className='btn-add'
        color='inherit'
        onClick={console.log}
        startIcon={<AddIcon />}
        variant='outlined'>
        Add Task
      </Button>
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
