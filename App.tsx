import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useServiceB} from './libs/ServiceA';
import {useServiceC} from './libs/ServiceB';
import {useServiceA} from './libs/ServiceC';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Web App</Text>
      <Text>{useServiceB()}</Text>
      <Text>{useServiceC()}</Text>
      <Text>{useServiceA()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});
