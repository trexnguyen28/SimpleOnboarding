import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StepConfig, StepList} from './components/StepList';
import {BasicStep} from './BasicStep';
import {AdditionalStep} from './AdditionalStep';
import {PurposeStep} from './PurposeStep';
import PagerView from 'react-native-pager-view';
import {OnboardingContext, OnboardingDefaultState} from './OnboardingContext';
import {StepModel, StepId} from './OnboardingTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pager: {
    flex: 1,
  },
});

const INITIAL_PAGE = 0;

const STEP_CONFIGS: Array<StepConfig> = [
  {
    id: 'basic',
    stepNumber: 1,
    completed: false,
    stepTitle: 'Basic',
    stepView: BasicStep,
  },
  {
    id: 'additional',
    stepNumber: 2,
    completed: false,
    stepTitle: 'Additional',
    stepView: AdditionalStep,
  },
  {
    id: 'purpose',
    stepNumber: 3,
    completed: false,
    stepTitle: 'Purpose',
    stepView: PurposeStep,
  },
];

const Onboarding = () => {
  const pagerRef = useRef<PagerView>(null);
  //
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [onboardData, setOnboardData] = useState(OnboardingDefaultState);

  const setStepData = (id: StepId, stepData: StepModel) => {
    setOnboardData(prev => ({...prev, [id]: stepData}));
  };

  // TODO Check here
  const gotoPage = (stepNumber: number) => {
    if (pagerRef && pagerRef.current) {
      setCurrentPage(stepNumber - 1);
      pagerRef.current.setPage(stepNumber - 1);
    }
  };

  const onNext = () => {
    if (currentPage < STEP_CONFIGS.length - 1) {
      gotoPage(currentPage + 2);
    }
  };

  const onFinish = () => {
    // Do something
  };

  useEffect(() => {
    if (pagerRef && pagerRef.current) {
      pagerRef.current.setPage(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    console.log({data: onboardData});
  }, [onboardData]);

  return (
    <OnboardingContext.Provider
      value={{onboardData, setOnboardData: setStepData}}>
      <View style={styles.container}>
        <StepList
          configs={STEP_CONFIGS}
          onStepPressed={gotoPage}
          activeStep={currentPage + 1}
        />
        <PagerView
          ref={pagerRef}
          scrollEnabled={false}
          initialPage={INITIAL_PAGE}
          keyboardDismissMode={'on-drag'}
          style={styles.pager}>
          {STEP_CONFIGS.map((item, i: number) => {
            const StepView = item.stepView;
            //
            return (
              <StepView
                id={item.id}
                key={item.id}
                onNext={onNext}
                onFinish={onFinish}
                isActive={currentPage === i}
                isFinal={i === STEP_CONFIGS.length - 1}
              />
            );
          })}
        </PagerView>
      </View>
    </OnboardingContext.Provider>
  );
};

export {Onboarding};
