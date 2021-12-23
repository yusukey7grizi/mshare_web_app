import { FC } from 'react'
import { Drawer, Box, Divider, Toolbar, AppBar } from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from 'components/molecules'
import { LogOutButton } from 'components/atoms/buttons'
import { SearchField } from 'components/atoms/textFields'
import { SideBarTitle } from 'components/atoms/titles'
import { FlexBox, SideBarBox } from 'components/atoms/layoutElement'

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
      <Box component="div" sx={{ p: '3rem', pt: '7rem', margin: 'auto' }}>
        {children}
      </Box>
    </FlexBox>
  )
}

export { Bar }
