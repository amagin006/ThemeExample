import {ColorTheme} from '../type';

// Define our light theme colors
export const DEFAULT_ORANGE_COLOR_THEME: ColorTheme = {
  Palette: {
    primary: '#03a9f4',
    onPrimary: '#ff5900',
    surface: '#fff',
    onSurface: '#000',
    baseBackground: '#ffc257',

    white: '#fff', // if always white even theme is changed, we can use.
    black: '#000', // if always black even theme is changed, we can use.s
  },
  Text: {
    primary: '#4a2f00',
  },
  ButtonAtom: {
    PrimaryBackGround: '#fae1b6',
    SecondaryBackGround: '#786749',
    Attention: '#ebac2f',
  },
};
