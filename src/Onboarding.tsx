import React, {useCallback, useRef, useState} from 'react';
import {
  InteractionManager,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {StepConfig, StepList} from './components/StepList';
import {OnboardingPartList} from './components/OnboardingPartList';

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
    partView: () => <View style={{height: 200, backgroundColor: 'red'}} />,
  },
  {
    id: '2',
    stepNumber: 2,
    completed: false,
    stepTitle: 'Additional',
    partView: () => <View style={{height: 300, backgroundColor: 'blue'}} />,
  },
  {
    id: '3',
    stepNumber: 3,
    completed: false,
    stepTitle: 'Purpose',
    partView: () => <View style={{height: 400, backgroundColor: 'yellow'}} />,
  },
];

const Onboarding = () => {
  const listRef = useRef<any>();
  const dimensions = useWindowDimensions();
  const [activeStep, setActiveStep] = useState(1);

  const gotoPage = useCallback(
    (stepNumber: number) => {
      console.log({stepNumber});
      setActiveStep(stepNumber);
      //
      if (listRef && listRef.current) {
        InteractionManager.runAfterInteractions(() => {
          listRef.current.scrollTo({
            x: (stepNumber - 1) * dimensions.width,
            animated: true,
            y: 0,
          });
        });
      }
    },
    [dimensions.width],
  );

  return (
    <View style={styles.container}>
      <StepList
        configs={STEP_CONFIGS}
        activeStep={activeStep}
        onStepPressed={gotoPage}
      />
      <OnboardingPartList
        ref={listRef}
        goToPage={gotoPage}
        steps={STEP_CONFIGS}
        currentStep={activeStep}
      />
    </View>
  );
};

export {Onboarding};
