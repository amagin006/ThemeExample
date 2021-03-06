import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useThemeAwareObject} from '../style/ThemeHooks';
import {Theme} from '../style/type';

export const ScreenTwo: React.FC<{navigation: any}> = props => {
  const {styles} = useThemeAwareObject(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is screen Two</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('one')}>
        <Text style={styles.linkStyle}>Go to One</Text>
      </TouchableOpacity>
      <View style={styles.cricle} />
    </View>
  );
};

// Create a function which will generate our style sheet
// based on the received theme
// Note that we're working with theme interface values
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.background.Primary,
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
      color: theme.color.Text.linkPrimary,
      textDecorationLine: 'underline',
      marginVertical: theme.spacing.base_12,
    },
    buttonWrapper: {
      backgroundColor: theme.color.ButtonAtom.SecondaryBackGround,
      paddingVertical: theme.spacing.base_12,
      paddingHorizontal: theme.spacing.base_20,
      borderRadius: 14,
    },
    cricle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.color.background.Secondary,
      marginTop: theme.spacing.base_20,
    },
  });
  return styles;
};
