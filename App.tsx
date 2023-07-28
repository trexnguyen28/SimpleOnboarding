import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

import {Onboarding, OnboardStepConfig, OnboardViewConfig} from '@modules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <PaperProvider theme={MD3LightTheme}>
        <Onboarding steps={OnboardStepConfig} views={OnboardViewConfig} />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
