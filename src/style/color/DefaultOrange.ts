import {ColorTheme} from '../type';
import {Palette} from './Palette';

// Define our light theme colors
export const DEFAULT_ORANGE_COLOR_THEME: ColorTheme = {
  background: {
    Primary: Palette.BaseOrange,
    Secondary: Palette.black,
  },
  Text: {
    primary: Palette.LightPurple,
    linkPrimary: Palette.onSurface,
  },
  ButtonAtom: {
    PrimaryBackGround: Palette.SecondaryOrange,
    SecondaryBackGround: Palette.LightOrange,
    Attention: Palette.Attention,
  },
};
