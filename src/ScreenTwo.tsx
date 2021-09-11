import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ScreenTwo: React.FC = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is screen One</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('one')}>
        <Text style={styles.linkStyle}>Go to Owo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
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
