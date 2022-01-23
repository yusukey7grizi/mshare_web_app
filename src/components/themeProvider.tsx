import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange['A200'],
      dark: orange['A400'],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const ThemeWrapper: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeWrapper };
