import { ThemeOptions } from "@material-ui/core";

export const MINI_DRAWER = 9;
export const MODE_DARK = 'dark';
export const MODE_LIGHT = 'light';

export const PRIMARY_COLOR = '#7367f0';

export const DARK_THEME_META: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary:{
      main: PRIMARY_COLOR,
    },
    background:{
      default:'#161d31',
      paper:'#283046'
    }
  },
}

export const LIGHT_THEME_META: ThemeOptions = {
  palette: {
    mode: 'light',
    primary:{
      main: PRIMARY_COLOR,
    },
    background:{
      default:'#f0f2f5',
      paper:'#ffffff'
    }
  },
}