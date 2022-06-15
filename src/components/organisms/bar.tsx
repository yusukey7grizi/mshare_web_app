import { FC, useState, useContext } from 'react';
import { Box, Toolbar, AppBar, IconButton, useMediaQuery } from '@mui/material';
import { SearchField } from 'components/atoms/textFields';
import { BarTitle } from 'components/atoms/titles';
import { useRouter } from 'next/router';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';
import { MenuDrawer } from 'components/molecules';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { FlexBox } from 'components/atoms/layoutElement';
import { useAuth0 } from '@auth0/auth0-react';

const iconButtonStyle = { width: '3rem', height: '3rem' } as const;

const TopBar: FC = () => {
  const router = useRouter();
  const { setSearchInput, searchInput } = useContext(AppContext);
  const isLargerThanIpad = useMediaQuery(ScreenSize.largerThanIpad);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [isSearchFieldOpen, setIsSearchFieldOpen] = useState<boolean>(false);

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
                isLoggedIn={isAuthenticated}
                authHandler={isAuthenticated ? logout : loginWithRedirect}
                anchor={isLargerThanIpad ? 'left' : 'top'}
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
