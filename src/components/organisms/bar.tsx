import { FC } from 'react'
import { Drawer, Box, Divider, Toolbar, AppBar } from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from '../molecules'
import { LogOutButton } from '../atoms/buttons'
import { SearchField } from '../atoms/textFields'
import { SideBarTitle } from '../atoms/titles'
import { FlexBox, SideBarBox } from '../atoms/layoutElement'

const drawerWidth = 240

const SideBar: FC = () => {
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
      <SideBarBox>
        <SideBarTitle />
        <DrawerLinkList />
        <Divider />
        <DrawerMovieList />
      </SideBarBox>
    </Drawer>
  )
}

const TopBar: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ backgroundColor: '#ffff' }}>
        <Box component="div" sx={{ flexGrow: 1.5 }} />
        <SearchField />
        <LogOutButton />
      </Toolbar>
    </AppBar>
  )
}

const Bar: FC = ({ children }) => {
  return (
    <FlexBox>
      <TopBar />
      <SideBar />
      <Box component="main">{children}</Box>
    </FlexBox>
  )
}

export { Bar }
