import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MD3LightTheme, PaperProvider, Portal} from 'react-native-paper';

import {Onboarding, OnboardStepConfig, OnboardViewConfig} from '@modules';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

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
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Portal>
            <Onboarding steps={OnboardStepConfig} views={OnboardViewConfig} />
          </Portal>
        </SafeAreaProvider>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
