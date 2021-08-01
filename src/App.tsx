import { Box, createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import MiniDrawer from './compontents/MiniDrawer';
import {observer} from 'mobx-react';
import { LIGHT_THEME_META } from './consts';

const App = observer(() => {
  const theme = createTheme(LIGHT_THEME_META);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        dd
        </Box>
      </Box>
    </ThemeProvider>
  );
})

export default App;
