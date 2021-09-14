import {ColorTheme} from '../type';
import {Palette} from './Palette';
// Define our dark theme colors
export const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  Text: {
    primary: Palette.BaseGreen,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.LightPurple,
    SecondaryBackGround: Palette.BaseBlue,
    Attention: Palette.AttentionRed,
  },
};
