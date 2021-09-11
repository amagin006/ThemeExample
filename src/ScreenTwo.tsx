import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useThemeAwareObject} from './style/ThemeHooks';
import {Theme} from './style/type';

export const ScreenTwo: React.FC<{navigation: any}> = props => {
  const {styles, toggleTheme} = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is screen Two</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('one')}>
        <Text style={styles.linkStyle}>Go to One</Text>
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
      backgroundColor: theme.color.ButtonAtom.SecondaryBackGround,
      paddingVertical: theme.spacing.base_12,
      paddingHorizontal: theme.spacing.base_20,
      borderRadius: 14,
    },
  });
  return styles;
};
