import React from 'react';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  DEFAULT_ORANGE_THEME,
} from './type';
import {Theme, EThemeID} from './type';

// Our context provider will provide this object shape
export interface ProvidedValue {
  theme: Theme;
  toggleTheme: (id?: EThemeID) => void;
}

// Creating our context
// Important: the defined object here is only received by the
// consumer components when there is no rendered context provider
// in the view hierarchy, so basically it will provide
// a fallback object
export const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

// Because our stateful context provider will be a React component
// we can define some props for it too
interface ThemeProviderProps {
  initial: Theme;
  children?: React.ReactNode;
}

// Creating our stateful context provider
// We are using React.memo for optimization
export const ThemeProvider = React.memo<ThemeProviderProps>(props => {
  // Store the actual theme as an internal state of the provider
  const [theme, setTheme] = React.useState<Theme>(props.initial);

  // Implement a method for toggling the Theme
  // We're using the React.useCallback hook for optimization
  const ToggleThemeCallback = React.useCallback((id?: EThemeID) => {
    // TODO: We can use AsyncStorage if it needs to persist the theme.
    //       And Get Device setting to get inital Theme Dark or Light if need.
    setTheme(currentTheme => {
      if (currentTheme.id === id || !id) {
        return currentTheme;
      }
      console.log('changeTheme', id);
      switch (id) {
        case EThemeID.DEFAULT_LIGHT_THEME_ID:
          return DEFAULT_LIGHT_THEME;
        case EThemeID.DEFAULT_DARK_THEME_ID:
          return DEFAULT_DARK_THEME;
        case EThemeID.DEFAULT_ORANGE_THEME_ID:
          return DEFAULT_ORANGE_THEME;
        default:
          return DEFAULT_LIGHT_THEME;
      }
    });
  }, []);
  // Building up the provided object
  // We're using the React.useMemo hook for optimization
  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);
  // Render our context provider by passing it the value to provide
  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});

// Creating a custom context consumer hook for function components
export const useTheme = () => React.useContext(Context);
