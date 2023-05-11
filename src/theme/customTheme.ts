import { createTheme, ThemeOptions } from '@mui/material/styles';

/*
 creating or customizing default theme of MUI
 https://github.com/mui/material-ui/blob/v5.12.3/packages/mui-material/src/styles/createTheme.js
*/

export const customTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      light: '#470c0c',
      main: '#270808',
      dark: '#2f0c0c',
    },
  },
});
