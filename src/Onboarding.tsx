import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StepConfig, StepList} from './components/StepList';
import {BasicStep} from './BasicStep';
import {AdditionalStep} from './AdditionalStep';
import {PurposeStep} from './PurposeStep';
import PagerView from 'react-native-pager-view';
import {Button, Text} from 'react-native-paper';

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
    id: '1',
    stepNumber: 1,
    completed: false,
    stepTitle: 'Basic',
    partView: BasicStep,
  },
  {
    id: '2',
    stepNumber: 2,
    completed: false,
    stepTitle: 'Additional',
    partView: AdditionalStep,
  },
  {
    id: '3',
    stepNumber: 3,
    completed: false,
    stepTitle: 'Purpose',
    partView: PurposeStep,
  },
];

const Onboarding = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const gotoPage = useCallback((stepNumber: number) => {
    if (pagerRef && pagerRef.current) {
      setCurrentPage(stepNumber - 1);
      pagerRef.current.setPage(stepNumber - 1);
    }
  }, []);

  const onNext = () => {
    if (currentPage < STEP_CONFIGS.length - 1) {
      gotoPage(currentPage + 2);
    }
  };

  useEffect(() => {
    if (pagerRef && pagerRef.current) {
      pagerRef.current.setPage(currentPage);
    }
  }, [currentPage]);

  return (
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
        style={styles.pager}>
        {STEP_CONFIGS.map((item, i: number) => {
          const WorkerOnboardingPartView = item.partView;
          //
          return (
            <View key={item.id}>
              <WorkerOnboardingPartView
                onNext={onNext}
                isFinalPart={i === STEP_CONFIGS.length - 1}
              />
            </View>
          );
        })}
      </PagerView>
    </View>
  );
};

export {Onboarding};
