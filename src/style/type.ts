export interface ColorTheme {
  Palette: {
    primary: string;
    onPrimary: string;
    surface: string;
    onSurface: string;
    baseBackground: string;
  };
  Text: {
    primary: string;
  };
  ButtonAtom: {
    PrimaryBackGround: string;
    SecondaryBackGround: string;
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
}
