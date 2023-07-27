import React from 'react';
import {StyleSheet, useWindowDimensions, View, ScrollView} from 'react-native';
import {Colors} from '@themes';
import {StepConfig} from './StepList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Onboarding.Main,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.Onboarding.Main,
  },
});

interface OnboardingPartListProps {
  currentStep: number;
  steps: Array<StepConfig>;
  goToPage: (pageIndex: number) => void;
}

const OnboardingPartList = React.forwardRef<any, OnboardingPartListProps>(
  ({goToPage, currentStep, steps}, listRef) => {
    const dimensions = useWindowDimensions();
    const contentOffsetX = (currentStep - 1) * dimensions.width;

    return (
      <ScrollView
        horizontal
        ref={listRef}
        pagingEnabled={true}
        scrollEnabled={false}
        style={styles.content}
        contentOffset={{x: contentOffsetX, y: 0}}
        keyboardShouldPersistTaps={'handled'}>
        {steps.map((item, index) => {
          const WorkerOnboardingPartView = item.partView;
          //
          return (
            <View
              key={item.id}
              style={{width: dimensions.width, alignItems: 'stretch'}}>
              <WorkerOnboardingPartView onNext={() => goToPage(index + 1)} />
            </View>
          );
        })}
      </ScrollView>
    );
  },
);

export {OnboardingPartList};
