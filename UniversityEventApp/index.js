import React from 'react';
import {View, Image, Text, Linking, StyleSheet} from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
AppRegistry.registerComponent('YourAppName', () => App);
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to React Native</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://reactnative.dev')}>
        Read the docs
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  link: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
