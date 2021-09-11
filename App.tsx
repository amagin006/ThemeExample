import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DEFAULT_LIGHT_THEME} from './src/style/DefaultLight';
import {ThemeProvider} from './src/style/ThemeContext';

import {RootStack} from './src/RootStack';

// https://medium.com/supercharges-mobile-product-guide/reactive-styles-in-react-native-79a41fbdc404
const App = () => {
  return (
    <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
