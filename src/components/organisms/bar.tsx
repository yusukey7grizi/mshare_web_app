import { FC, MouseEventHandler, useState } from 'react'
import { Drawer, Box, Divider, Toolbar, AppBar } from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from 'components/molecules'
import { LogOutButton } from 'components/atoms/buttons'
import { SearchField } from 'components/atoms/textFields'
import { SideBarTitle } from 'components/atoms/titles'
import { FlexBox, SideBarBox } from 'components/atoms/layoutElement'
import { useRouter } from 'next/router'
import { MuiOnChangeEvent, MuiOnClickEvent } from 'types'
import { useAuth } from 'contexts/authContext'

const drawerWidth = 240

type MuiKeyBoardEvent = React.KeyboardEvent<HTMLInputElement>

const SideBar: FC = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          overflow: 'hidden',
        },
      }}
      variant='permanent'
      anchor='left'
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
  const router = useRouter()

  const [inputValue, setInputValue] = useState<string>('')

  const auth = useAuth()

  const searchHandler = ({ key }: MuiKeyBoardEvent) => {
    if (key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { input: inputValue, useCase: 'title' },
      })
    }
  }

  const handleOnChange = ({ target: { value } }: MuiOnChangeEvent) => {
    if (!value) {
      return
    }
    setInputValue(value)
  }

  const logOutHandler = () => {
    auth
      .logOut()
      .then(() => {
        router.push('/auth/login')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <AppBar
      position='fixed'
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar sx={{ backgroundColor: '#ffff' }}>
        <Box component='div' sx={{ flexGrow: 1.5 }} />
        <SearchField onKeyPress={searchHandler} onChange={handleOnChange} />
        <LogOutButton logOutHandler={logOutHandler} />
      </Toolbar>
    </AppBar>
  )
}

const Bar: FC = ({ children }) => {
  return (
    <FlexBox>
      <TopBar />
      <SideBar />
      <Box
        component='div'
        sx={{ pt: '7rem', margin: 'auto', overflowX: 'hidden' }}
      >
        {children}
      </Box>
    </FlexBox>
  )
}

export { Bar }
