import {ColorTheme} from '../type';

// Define our dark theme colors
export const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  Palette: {
    primary: '#03a9f4',
    onPrimary: '#800026',
    surface: '#545454',
    onSurface: '#fff',
    baseBackground: '#3f3f3f',

    white: '#fff', // if always white even theme is changed, we can use.
    black: '#000', // if always black even theme is changed, we can use.
  },
  Text: {
    primary: '#ddf7c3',
  },
  ButtonAtom: {
    PrimaryBackGround: '#ebc0df',
    SecondaryBackGround: '#b8c7d4',
    Attention: '#ff1f4f',
  },
};
