import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { LIGHT_THEME_META, DARK_THEME_META, LOGIN_URL } from './consts';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './compontents/Login';
import { WorkSpace } from './compontents/WorkSpace';

const App = observer(() => {
  const theme = createTheme(LIGHT_THEME_META);

  return (
    <ThemeProvider theme={theme}>
      <Switch> 
        <Route path={ LOGIN_URL } component={Login}></Route>
        <Route path="/workspace/:moduleId?" component={WorkSpace}></Route>
        <Redirect to={ LOGIN_URL } from='/' /> 
      </Switch>
    </ThemeProvider>
  );
})

export default App;
