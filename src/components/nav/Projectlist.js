import * as React from 'react'
import { Link } from 'react-router-dom'
import { ProjectColors } from '../../helpers/ProjectColors'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

export const ProjectList = ({ list }) => {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary='Projects' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {list
            ? list.map((item) => {
                const currentColorScheme = ProjectColors(item)
                return (
                  <List
                    component='div'
                    disablePadding
                    key={`menuitem-${item.id}`}>
                    <Link className='link' to={`/projects/${item.id}`} exact>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <DashboardIcon
                            style={{ color: currentColorScheme.colorDark }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </Link>
                  </List>
                )
              })
            : null}
        </Collapse>
      </List>
    </>
  )
}

export default ProjectList
