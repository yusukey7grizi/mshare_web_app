import { FC, useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  isLoggedIn: boolean;
  authHandler: () => void;
  anchor: "top" | "left";
};

const MenuDrawer: FC<Props> = ({ isLoggedIn, authHandler, anchor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ width: "3rem", height: "3rem" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon sx={{ color: "black" }} />
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
        <List sx={{ width: anchor === "left" ? "15rem" : "100%" }}>
          <ListItem href="/" button component={Link}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem href="/random" button component={Link}>
            <ListItemIcon>
              <ShuffleIcon />
            </ListItemIcon>
            <ListItemText primary="ガチャ検索" />
          </ListItem>
          <ListItem
            href={isLoggedIn ? "/movie/post" : "/auth/login"}
            button
            component={Link}
          >
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="映画を作成" />
          </ListItem>
          <ListItem
            href={isLoggedIn ? "/profile" : "/auth/login"}
            button
            component={Link}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="マイページ" />
          </ListItem>
          <ListItem onClick={authHandler} button component={Link}>
            <ListItemIcon>
              {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
            </ListItemIcon>
            <ListItemText primary={isLoggedIn ? "ログアウト" : "ログイン"} />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export { MenuDrawer };
