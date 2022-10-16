import { FC, useState, useContext, memo } from 'react';
import { Toolbar, AppBar, IconButton, useMediaQuery } from '@mui/material';
import { SearchField } from 'components/atoms/textFields';
import { BarTitle } from 'components/atoms/titles';
import { useRouter } from 'next/router';
import { MuiKeyBoardEvent, MuiOnChangeEvent } from 'types';
import { MenuDrawer } from 'components/molecules';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { BasePixel, IconButtonStyle, ScreenSize } from 'components/constants';
import { AppContext } from 'contexts/appContext';
import { FlexBox } from 'components/atoms/layoutElement';
import { useAuth0 } from '@auth0/auth0-react';

// eslint-disable-next-line react/display-name
const Bar: FC = memo(() => {
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

  const styles = {
    appBar: { backgroundColor: '#ffff' },
    toolBar: {
      height: BasePixel * 20,
      justifyContent: 'space-between',
      marginLeft: BasePixel * 2,
      marginRight: BasePixel * 6,
      '&.MuiToolbar-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    iconButton: IconButtonStyle,
  } as const;

  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Toolbar sx={styles.toolBar}>
        {isSearchFieldOpen ? (
          <>
            <IconButton
              sx={styles.iconButton}
              onClick={() => {
                setIsSearchFieldOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
            <SearchField
              width={BasePixel * 60}
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
                width={BasePixel * 120}
                defaultValue={searchInput}
                onKeyPress={searchHandler}
                onChange={handleOnChange}
              />
            ) : (
              <IconButton
                sx={styles.iconButton}
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
});

export { Bar };
