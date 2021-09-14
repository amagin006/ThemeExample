import {ColorTheme} from '../type';
import {Palette} from './Palette';

// Define our light theme colors
export const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  background: {
    Primary: Palette.primary,
    Secondary: Palette.onPrimary,
  },
  Text: {
    primary: Palette.BasePurple,
    linkPrimary: Palette.onSurface,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.white,
    SecondaryBackGround: Palette.BaseGray,
    Attention: Palette.Attention,
  },
};
