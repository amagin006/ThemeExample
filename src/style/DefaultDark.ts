import {ColorTheme, EThemeID, Theme} from './type';
import {DEFAULT_SPACING_THEME} from './DefaultSpacing';

// Define our dark theme colors
const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  Palette: {
    primary: '#03a9f4',
    onPrimary: '#fff',
    surface: '#545454',
    onSurface: '#fff',
    baseBackground: '#3f3f3f',
  },
  Text: {
    primary: '#ddf7c3',
  },
  ButtonAtom: {
    PrimaryBackGround: '#ebc0df',
    SecondaryBackGround: '#b8c7d4',
  },
};

export const DEFAULT_DARK_THEME: Theme = {
  id: EThemeID.DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME, // we can create another spacinge theme depends on theme
};
