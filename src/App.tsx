import { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { customTheme } from './theme/customTheme';
import Home from './pages/home';
import ResponsiveAppBar from './components/app-bar';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
