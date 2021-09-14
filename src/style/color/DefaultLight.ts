import {ColorTheme} from '../type';

// Define our light theme colors
export const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  Palette: {
    primary: '#03a9f4',
    onPrimary: '#240080',
    surface: '#fff',
    onSurface: '#000',
    baseBackground: '#dedede',

    white: '#fff', // if always white even theme is changed, we can use.
    black: '#000', // if always black even theme is changed, we can use.
  },
  Text: {
    primary: '#250966',
  },
  ButtonAtom: {
    PrimaryBackGround: '#fff',
    SecondaryBackGround: '#adaba6',
    Attention: '#ebac2f',
  },
};
