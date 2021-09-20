import React from 'react'
import {
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'

const ColorPicker = ({ color, colors, setColor }) => {
  return (
    <FormControl xs={{ pb: 2 }}>
      <FormLabel>Project Color</FormLabel>
      <RadioGroup
        className='flex row'
        value={color}
        onChange={(e) => setColor(e.target.value)}>
        {colors.map((color) => (
          <FormControlLabel
            control={<Radio />}
            value={color.mainColor}
            label=''
            sx={{
              backgroundColor: color.mainColor,
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default ColorPicker
