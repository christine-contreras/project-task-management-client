import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Star from '@mui/icons-material/Star'

export const FavoritesList = ({ list }) => {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary='Favorites' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {list
            ? list.map((item) => {
                return (
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Star />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </List>
                )
              })
            : null}
        </Collapse>
      </List>
    </>
  )
}

export default FavoritesList
