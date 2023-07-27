import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import {Onboarding} from './src/Onboarding';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Onboarding />
    </SafeAreaView>
  );
};

export default App;
