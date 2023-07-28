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
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <PaperProvider theme={MD3LightTheme}>
        <Onboarding steps={OnboardingStepConfig} views={OnboardingViewConfig} />
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
