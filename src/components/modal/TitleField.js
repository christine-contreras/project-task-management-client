import React from 'react'
import { TextField } from '@mui/material'

const TitleField = ({ title, setTitle, labelName }) => {
  return (
    <TextField
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      label={labelName}
      variant='outlined'
      color='secondary'
      fullWidth
    />
  )
}

export default TitleField
