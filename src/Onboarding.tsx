import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StepConfig, StepList} from './components/StepList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const STEP_CONFIGS: Array<StepConfig> = [
  {
    id: '1',
    stepNumber: 1,
    completed: false,
    stepTitle: 'Basic',
  },
  {
    id: '2',
    stepNumber: 2,
    completed: false,
    stepTitle: 'Additional',
  },
  {
    id: '3',
    stepNumber: 3,
    completed: false,
    stepTitle: 'Purpose',
  },
];

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <StepList
        activeStep={1}
        configs={STEP_CONFIGS}
        onStepPressed={() => {}}
      />
    </View>
  );
};

export {Onboarding};
