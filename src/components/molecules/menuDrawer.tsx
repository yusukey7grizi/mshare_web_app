import { FC, useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  IconButton,
  SwipeableDrawer,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

type Props = {
  isLoggedIn: boolean;
  authHandler: () => void;
  anchor: 'top' | 'left';
};

const MenuDrawer: FC<Props> = ({ isLoggedIn, authHandler, anchor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const getColor = (path: string) => {
    return path === router.asPath ? 'primary' : 'inherit';
  };

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <>
      <IconButton
        size='large'
        color='inherit'
        aria-label='menu'
        sx={{ width: '3rem', height: '3rem' }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon color='primary' />
      </IconButton>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onOpen={() => {
          setIsOpen(true);
        }}
      >
        <List sx={{ width: anchor === 'left' ? '15rem' : '100%' }}>
          <ListItem
            onClick={() => {
              router.push('/');
            }}
            button
            component={Link}
          >
            <ListItemIcon>
              <HomeIcon color={getColor('/')} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: getColor('/'),
              }}
              primary='Home'
            />
          </ListItem>
          <ListItem
            onClick={() => {
              router.push('/random');
            }}
            button
            component={Link}
          >
            <ListItemIcon>
              <ShuffleIcon color={getColor('/random')} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: getColor('/random'),
              }}
              primary='???????????????'
            />
          </ListItem>
          <ListItem
            onClick={() => {
              router.push('/movie/post');
            }}
            button
            component={Link}
          >
            <ListItemIcon>
              <AddIcon color={getColor('/movie/post')} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: getColor('/movie/post'),
              }}
              primary='???????????????'
            />
          </ListItem>
          <ListItem
            onClick={() => {
              router.push('/profile');
            }}
            button
            component={Link}
          >
            <ListItemIcon>
              <PersonIcon color={getColor('/profile')} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: getColor('/profile'),
              }}
              primary='???????????????'
            />
          </ListItem>
          <ListItem onClick={authHandler} button component={Link}>
            <ListItemIcon>
              {isLoggedIn ? <LogoutIcon /> : <LoginIcon color='secondary' />}
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={
                isLoggedIn
                  ? {}
                  : {
                      color: 'secondary',
                    }
              }
              primary={isLoggedIn ? '???????????????' : '???????????? / ????????????'}
            />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export { MenuDrawer };
