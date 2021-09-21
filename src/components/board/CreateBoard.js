import React from 'react'
import { Grid, Box, Tooltip, IconButton } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

const CreateBoard = ({ handleOpenModel }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Box className='flex'>
        <Tooltip title='Create New Board'>
          <IconButton
            aria-label='create board'
            color='inherit'
            onClick={handleOpenModel}>
            <ControlPointIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Grid>
  )
}

export default CreateBoard
