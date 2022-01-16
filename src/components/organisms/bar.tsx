import { FC, useState, useEffect } from "react";
import { Box, Toolbar, AppBar, IconButton } from "@mui/material";
import { SearchField } from "components/atoms/textFields";
import { BarTitle } from "components/atoms/titles";
import { useRouter } from "next/router";
import { MuiKeyBoardEvent, MuiOnChangeEvent } from "types";
import { useAuth } from "contexts/authContext";
import Cookies from "js-cookie";
import { useMediaQuery } from "utils/screenSize";
import { MenuDrawer } from "components/molecules";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  isLoggedIn: boolean;
};

const TopBar: FC<Props> = ({ isLoggedIn }) => {
  const router = useRouter();
  const auth = useAuth();
  const isLargeScreenSize = useMediaQuery(970);

  const [inputValue, setInputValue] = useState<string>("");
  const [isSearchFieldOpen, setIsSearchFieldOpen] = useState<boolean>(false);

  const searchHandler = ({ key }: MuiKeyBoardEvent) => {
    if (key === "Enter") {
      router.push({
        pathname: "/search",
        query: { input: inputValue, useCase: "title" },
      });
    }
  };

  const handleOnChange = ({ target: { value } }: MuiOnChangeEvent) => {
    if (!value) {
      return;
    }
    setInputValue(value);
  };

  const logOutHandler = () => {
    router.push("/auth/login");
    auth.logOut().catch((err) => {
      console.error(err);
    });
  };

  const logInHandler = () => {
    router.push("/auth/login");
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          backgroundColor: "#ffff",
          height: "80px",
          justifyContent: "space-between",
        }}
      >
        {isSearchFieldOpen ? (
          <>
            <IconButton
              sx={{ width: "3rem", height: "3rem" }}
              onClick={() => {
                setIsSearchFieldOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
            <SearchField onKeyPress={searchHandler} onChange={handleOnChange} />
          </>
        ) : (
          <>
            <Box>
              <MenuDrawer
                anchor={isLargeScreenSize ? "left" : "top"}
                authHandler={isLoggedIn ? logOutHandler : logInHandler}
                isLoggedIn
              />
              <BarTitle />
            </Box>
            {isLargeScreenSize ? (
              <SearchField
                onKeyPress={searchHandler}
                onChange={handleOnChange}
              />
            ) : (
              <IconButton
                sx={{ width: "3rem", height: "3rem" }}
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const signedInUserId = Cookies.get("uid");
    if (!signedInUserId) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
  }, [router]);

  return (
    <>
      <TopBar isLoggedIn={isLoggedIn} />
      <Box component="div" sx={{ pt: "7rem", pr: "4rem", pl: "4rem" }}>
        {children}
      </Box>
    </>
  );
};

export { Bar };
