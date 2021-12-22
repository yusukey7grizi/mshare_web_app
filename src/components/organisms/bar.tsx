import { FC } from 'react'
import {
  Drawer,
  Box,
  Divider,
  Typography,
  Toolbar,
  AppBar,
  InputAdornment,
  CssBaseline,
  Button,
  Autocomplete,
  Link,
} from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from '../molecules'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 240

const SideBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box role="presentation" sx={{ width: '240px', overflowY: 'hidden' }}>
        <Typography sx={{ marginTop: '20px' }} align="center" variant="h4">
          MShare
        </Typography>
        <br />
        <Divider />
        <DrawerLinkList />
        <Divider />
        <DrawerMovieList />
      </Box>
    </Drawer>
  )
}

const TopBar: FC = () => {
  const options = [
    { id: 1, text: 'Genre 1' },
    { id: 2, text: 'Genre 2' },
    { id: 3, text: 'Genre 3' },
    { id: 4, text: 'Genre 4' },
    { id: 5, text: 'Genre 5' },
    { id: 6, text: 'Genre 6' },
  ]
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ backgroundColor: '#ffff' }}>
        <TextField
          variant="filled"
          sx={{ width: '400px' }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Link component={Button}>
          <Typography>ログアウト</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

const Bar: FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Box component="main">{children}</Box>
    </Box>
  )
}

export { Bar }
