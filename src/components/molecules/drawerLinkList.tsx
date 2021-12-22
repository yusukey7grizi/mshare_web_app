import { FC } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import PersonIcon from '@mui/icons-material/Person'

const DrawerLinkList: FC = () => {
  return (
    <List>
      <ListItem href="/" button component={Link}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button href="/search" component={Link}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="映画検索" />
      </ListItem>
      <ListItem href="/random" button component={Link}>
        <ListItemIcon>
          <ShuffleIcon />
        </ListItemIcon>
        <ListItemText primary="ガチャ検索" />
      </ListItem>
      <ListItem href="/movie/post" button component={Link}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="映画を作成" />
      </ListItem>
      <ListItem href="/profile" button component={Link}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="マイページ" />
      </ListItem>
    </List>
  )
}

export { DrawerLinkList }
