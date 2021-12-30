/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const getBigIntType = () => {
    // eslint-disable-next-line no-undef
    return typeof BigInt(10);
  };

  const isDebuggerMode = () => {
    return typeof atob !== 'undefined';
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.text}>{`Mode: ${
            isDebuggerMode() ? 'Debugging' : 'Not-debugging'
          }`}</Text>
          <Text style={styles.text}>BigInt Type: {getBigIntType()}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    padding: 10,
  },
  container: {
    padding: 20,
  }
});

export default App;
