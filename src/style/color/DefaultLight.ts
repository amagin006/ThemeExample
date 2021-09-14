import {ColorTheme} from '../type';
import {Palette} from './Palette';

// Define our light theme colors
export const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  Text: {
    primary: Palette.BasePurple,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.white,
    SecondaryBackGround: Palette.BaseGray,
    Attention: Palette.Attention,
  },
};
