import { FC, useState, useContext } from 'react';
import { Box, Toolbar, AppBar, IconButton, useMediaQuery } from '@mui/material';
import { SearchField } from 'components/atoms/textFields';
import { BarTitle } from 'components/atoms/titles';
import { useRouter } from 'next/router';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';
import { useAuth } from 'contexts/authContext';
import { MenuDrawer } from 'components/molecules';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { FlexBox } from 'components/atoms/layoutElement';

const iconButtonStyle = { width: '3rem', height: '3rem' } as const;

const TopBar: FC = () => {
  const router = useRouter();
  const auth = useAuth();
  const { setSearchInput, searchInput } = useContext(AppContext);
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);

  const [isSearchFieldOpen, setIsSearchFieldOpen] = useState<boolean>(false);

  const isLoggedIn = !!auth.user;

  const searchHandler = ({ key }: MuiKeyBoardEvent) => {
    const isNonEmptyString = !!searchInput.replace(/\s/g, '');

    if (key === 'Enter' && isNonEmptyString) {
      router.push({
        pathname: '/search',
        query: { input: searchInput, useCase: 'title' },
      });
    }
  };

  const handleOnChange = ({ target: { value } }: MuiOnChangeEvent) => {
    if (!value) {
      return;
    }
    setSearchInput(value);
  };

  const logOutHandler = () => {
    auth
      .logOut()
      .then(() => {
        router.push('/auth/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logInHandler = () => {
    router.push('/auth/login');
  };

  return (
    <AppBar position='fixed'>
      <Toolbar
        sx={{
          backgroundColor: '#ffff',
          height: '80px',
          justifyContent: 'space-between',
        }}
      >
        {isSearchFieldOpen ? (
          <>
            <IconButton
              sx={iconButtonStyle}
              onClick={() => {
                setIsSearchFieldOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
            <SearchField
              defaultValue={searchInput}
              onKeyPress={searchHandler}
              onChange={handleOnChange}
            />
          </>
        ) : (
          <>
            <FlexBox>
              <MenuDrawer
                isLoggedIn={isLoggedIn}
                anchor={isLargerThanIpad ? 'left' : 'top'}
                authHandler={isLoggedIn ? logOutHandler : logInHandler}
              />
              <BarTitle />
            </FlexBox>
            {isLargerThanIpad ? (
              <SearchField
                defaultValue={searchInput}
                onKeyPress={searchHandler}
                onChange={handleOnChange}
              />
            ) : (
              <IconButton
                sx={iconButtonStyle}
                onClick={() => {
                  setIsSearchFieldOpen(true);
                }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const Bar: FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <Box component='div' sx={{ mt: '8rem' }}>
        {children}
      </Box>
    </>
  );
};

export { Bar };
