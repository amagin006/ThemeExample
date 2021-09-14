import {ColorTheme} from '../type';
import {Palette} from './Palette';

// Define our light theme colors
export const DEFAULT_ORANGE_COLOR_THEME: ColorTheme = {
  Text: {
    primary: Palette.BaseOrange,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.SecondaryOrange,
    SecondaryBackGround: Palette.LightOrange,
    Attention: Palette.Attention,
  },
};
