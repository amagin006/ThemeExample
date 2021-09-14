import {DEFAULT_DARK_COLOR_THEME} from './color/DefaultDark';
import {DEFAULT_LIGHT_COLOR_THEME} from './color/DefaultLight';
import {DEFAULT_ORANGE_COLOR_THEME} from './color/DefaultOrange';
import {DEFAULT_SPACING_THEME} from './space/DefaultSpacing';

export interface ColorPalette {
  primary: string;
  onPrimary: string;
  surface: string;
  onSurface: string;

  Attention: string;
  AttentionRed: string;

  BaseGray: string;
  DarkGray: string;
  BaseGreen: string;
  BasePurple: string;
  BaseBlue: string;
  LightPurple: string;

  BaseOrange: string;
  SecondaryOrange: string;
  LightOrange: string;

  white: string;
  black: string;
}

export interface ColorTheme {
  background: {
    Primary: string;
    Secondary: string;
  };
  Text: {
    primary: string;
    linkPrimary: string;
  };
  ButtonAtom: {
    PrimaryBackGround: string;
    SecondaryBackGround: string;
    Attention: string;
  };
}

export interface SpacingTheme {
  base: number;
  base_8: number;
  base_10: number;
  base_12: number;
  base_20: number;
}

export interface Theme {
  id: EThemeID;
  color: ColorTheme;
  spacing: SpacingTheme;
}

export enum EThemeID {
  DEFAULT_DARK_THEME_ID = 'default-dark',
  DEFAULT_LIGHT_THEME_ID = 'default-light',
  DEFAULT_ORANGE_THEME_ID = 'default-orange',
}

// Dark Theme
export const DEFAULT_DARK_THEME: Theme = {
  id: EThemeID.DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME, // we can create another spacinge theme depends on theme
};

// Light Theme
export const DEFAULT_LIGHT_THEME: Theme = {
  id: EThemeID.DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME, // we can create another spacinge theme depends on theme
};

// Orange Theme
export const DEFAULT_ORANGE_THEME: Theme = {
  id: EThemeID.DEFAULT_ORANGE_THEME_ID,
  color: DEFAULT_ORANGE_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME, // we can create another spacinge theme depends on theme
};
