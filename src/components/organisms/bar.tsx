import { FC, useEffect, useState } from 'react'
import { Drawer, Box, Divider, Toolbar, AppBar } from '@mui/material'
import { DrawerLinkList, DrawerMovieList } from 'components/molecules'
import { LogInLogOutButton } from 'components/atoms/buttons'
import { SearchField } from 'components/atoms/textFields'
import { SideBarTitle } from 'components/atoms/titles'
import { FlexBox, SideBarBox } from 'components/atoms/layoutElement'
import { useRouter } from 'next/router'
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types'
import { useAuth } from 'contexts/authContext'
import Cookies from 'js-cookie'

const drawerWidth = 240

type Props = {
  isLoggedIn: boolean
}

const SideBar: FC<Props> = ({ isLoggedIn }) => {
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
        <DrawerLinkList isLoggedIn={isLoggedIn} />
        <Divider />
        {isLoggedIn && <DrawerMovieList />}
      </SideBarBox>
    </Drawer>
  )
}

const TopBar: FC<Props> = ({ isLoggedIn }) => {
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
        router.push('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const logInHandler = () => {
    router.push('/auth/login')
  }

  return (
    <AppBar
      position='fixed'
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar
        sx={{ backgroundColor: '#ffff', justifyContent: 'space-between' }}
      >
        <Box component='div' sx={{ width: '100' }} />
        <SearchField onKeyPress={searchHandler} onChange={handleOnChange} />

        {isLoggedIn ? (
          <LogInLogOutButton onClick={logOutHandler} type='LogOut' />
        ) : (
          <LogInLogOutButton onClick={logInHandler} type='LogIn' />
        )}
      </Toolbar>
    </AppBar>
  )
}

const Bar: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const signedInUserId = Cookies.get('uid')
    if (!signedInUserId) {
      setIsLoggedIn(false)
      return
    }
    setIsLoggedIn(true)
  }, [router])

  return (
    <FlexBox>
      <TopBar isLoggedIn={isLoggedIn} />
      <SideBar isLoggedIn={isLoggedIn} />
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
