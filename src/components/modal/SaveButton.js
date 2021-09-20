import React from 'react'
import { Button } from '@mui/material'
export const SaveButton = ({ title }) => {
  return (
    <Button type='submit' color='primary' variant='contained'>
      {title}
    </Button>
  )
}
