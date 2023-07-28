import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import {Onboarding} from './src/Onboarding';
import {OnboardingViewConfig} from './src/OnboardingViewConfig';
import {OnboardingStepConfig} from './src/OnboardingConfig';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Onboarding steps={OnboardingStepConfig} views={OnboardingViewConfig} />
    </SafeAreaView>
  );
};

export default App;
