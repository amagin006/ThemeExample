import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Theme} from './style/type';
import {useThemeAwareObject} from './style/ThemeHooks';

export const ScreenOne: React.FC<{navigation: any}> = ({navigation}) => {
  const {styles, toggleTheme} = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is screen One</Text>
      <TouchableOpacity onPress={() => navigation.navigate('two')}>
        <Text style={styles.linkStyle}>Go to Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTheme}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.linkStyle}>Change Light Theme</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Create a function which will generate our style sheet
// based on the received theme
// Note that we're working with theme interface values
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.Palette.baseBackground,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 30,
      color: theme.color.Text.primary,
    },
    linkStyle: {
      fontSize: 20,
      color: theme.color.Palette.onSurface,
      textDecorationLine: 'underline',
      marginVertical: theme.spacing.base_12,
    },
    buttonWrapper: {
      backgroundColor: theme.color.ButtonAtom.PrimaryBackGround,
      paddingVertical: theme.spacing.base_12,
      paddingHorizontal: theme.spacing.base_20,
      borderRadius: 14,
    },
  });
  return styles;
};
