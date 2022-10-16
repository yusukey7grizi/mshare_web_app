import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';

const theme = createTheme({
  spacing: 1,
  palette: {
    primary: {
      main: orange['A200'],
      dark: orange['A400'],
    },
    secondary: {
      main: red[500],
      dark: red[700],
    },
  },
});

const ThemeWrapper: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemeWrapper };
