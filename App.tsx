import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MD3LightTheme, PaperProvider, Portal} from 'react-native-paper';

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
        <Portal>
          <Onboarding steps={OnboardStepConfig} views={OnboardViewConfig} />
        </Portal>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
