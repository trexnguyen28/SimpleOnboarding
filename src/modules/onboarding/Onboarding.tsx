import React, {useEffect, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {StyleSheet, View} from 'react-native';
//
import {StepOverview} from './components';
import {OnboardingProps, StepModel, StepId} from './types';
import {Context} from './context';
import {findStepConfigIndexById, findViewConfigById} from './utils';
import {ONBOARD_DEFAULT_STATE} from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
});

const Onboarding: React.FC<OnboardingProps> = ({steps, views}) => {
  const pagerRef = useRef<PagerView>(null);
  //
  const [curStepId, setCurStepId] = useState(
    steps.length > 0 ? steps[0].id : 'basic',
  );
  const [onboardData, setOnboardData] = useState(ONBOARD_DEFAULT_STATE);

  const setStepData = (id: StepId, stepData: StepModel) => {
    setOnboardData(prev => ({...prev, [id]: stepData}));
  };

  const gotoStep = (stepId: StepId) => {
    if (pagerRef && pagerRef.current) {
      const iStep = findStepConfigIndexById(stepId, steps);
      //
      if (iStep > -1) {
        setCurStepId(stepId);
        pagerRef.current.setPage(iStep);
      }
    }
  };

  const onNext = () => {
    const iCurStep = findStepConfigIndexById(curStepId, steps);
    //
    if (iCurStep < steps.length - 1) {
      const nextStepId = steps[iCurStep + 1].id;
      gotoStep(nextStepId);
    }
  };

  const onFinish = () => {
    console.log('Do something');
  };

  useEffect(() => {
    console.log({data: onboardData});
  }, [onboardData]);

  return (
    <Context.Provider value={{onboardData, setOnboardData: setStepData}}>
      <View style={styles.container}>
        <StepOverview
          configs={steps}
          curStepId={curStepId}
          onStepPressed={gotoStep}
        />
        <PagerView
          ref={pagerRef}
          initialPage={0}
          scrollEnabled={false}
          keyboardDismissMode={'on-drag'}
          style={styles.pager}>
          {steps.map((step, i: number) => {
            const ViewConfig = findViewConfigById(step.id, views);
            const isFinal = i === steps.length - 1;

            if (!ViewConfig) {
              return null;
            }

            return (
              <ViewConfig.view
                id={step.id}
                key={step.id}
                onNext={onNext}
                isFinal={isFinal}
                onFinish={onFinish}
              />
            );
          })}
        </PagerView>
      </View>
    </Context.Provider>
  );
};

export {Onboarding};
