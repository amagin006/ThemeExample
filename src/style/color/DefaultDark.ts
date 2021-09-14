import {ColorTheme} from '../type';
import {Palette} from './Palette';
// Define our dark theme colors
export const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  background: {
    Primary: Palette.DarkGray,
    Secondary: Palette.surface,
  },
  Text: {
    primary: Palette.BaseGreen,
    linkPrimary: Palette.onSurface,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.LightPurple,
    SecondaryBackGround: Palette.BaseBlue,
    Attention: Palette.AttentionRed,
  },
};
