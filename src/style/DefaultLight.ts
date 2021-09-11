import {ColorTheme, EThemeID, Theme} from './type';
import {DEFAULT_SPACING_THEME} from './DefaultSpacing';

// Define our light theme colors
const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  Palette: {
    primary: '#03a9f4',
    onPrimary: '#fff',
    surface: '#fff',
    onSurface: '#000',
    baseBackground: '#dedede',
  },
  Text: {
    primary: '#250966',
  },
  ButtonAtom: {
    PrimaryBackGround: '#d4d433',
    SecondaryBackGround: '#bf1321',
  },
};

export const DEFAULT_LIGHT_THEME: Theme = {
  id: EThemeID.DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME, // we can create another spacinge theme depends on theme
};
