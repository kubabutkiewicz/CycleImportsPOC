import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as ServiceA from './libs/ServiceA';
import * as ServiceB from './libs/ServiceB';
import * as ServiceC from './libs/ServiceC';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Web App</Text>
      <Text>{ServiceA.doSomethingA()}</Text>
      <Text>{ServiceB.doSomethingB()}</Text>
      <Text>{ServiceC.doSomethingC()}</Text>
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
