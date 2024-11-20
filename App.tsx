import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ServiceA, ServiceB, ServiceC } from './libs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Web App</Text>
      <Text>{ServiceA.useServiceB()}</Text>
      <Text>{ServiceB.useServiceC()}</Text>
      <Text>{ServiceC.useServiceA()}</Text>
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
