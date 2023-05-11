import { ThemeProvider, CssBaseline } from '@mui/material';
import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import Home from './pages/home';
import { store } from './redux/store';
import { customTheme } from './theme/customTheme';
import ResponsiveAppBar from './components/app-bar';

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
