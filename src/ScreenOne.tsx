import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ScreenOne: React.FC = props => {
  const _changeTheme = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is screen One</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('two')}>
        <Text style={styles.linkStyle}>Go to Two</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_changeTheme}>
        <Text style={styles.linkStyle}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: '#fff',
  },
  linkStyle: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 30,
    textDecorationLine: 'underline',
  },
});
