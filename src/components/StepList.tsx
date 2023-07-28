import React from 'react';
import {
  View,
  FlatList,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '@themes';

import {StepIndicator} from './StepIndicator';
import {StepId, StepViewProps} from '../OnboardingTypes';

const STEP_WIDTH = 64;

const STEP_RADIUS = 15;

const HORIZONTAL_PADDING = 16;

const SPACE_BETWEEN_STEP = 16;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

const Separator: React.FC<{top: number; active: boolean}> = ({
  top = 0,
  active = false,
}) => {
  const getStyle = () => {
    return {
      height: 2,
      marginTop: top,
      marginHorizontal: 2,
      width: SPACE_BETWEEN_STEP,
      backgroundColor: active ? Colors.Primary : Colors.Border.Dark,
    } as StyleProp<ViewStyle>;
  };

  return <View style={getStyle()} />;
};

export type StepConfig = {
  id: StepId;
  stepTitle: string;
  completed: boolean;
  stepNumber: number;
  stepView: React.FC<StepViewProps>;
};

interface MultiStepIndicatorsProps {
  activeStep: number;
  configs: Array<StepConfig>;
  onStepPressed: (stepNumber: number) => void;
}

const StepList: React.FC<MultiStepIndicatorsProps> = ({
  activeStep,
  onStepPressed = () => {},
  configs = [],
}) => {
  const {width} = useWindowDimensions();

  const buildContainerStyle = () => {
    return {
      width,
      padding: HORIZONTAL_PADDING,
      backgroundColor: Colors.Onboarding.Sub,
    } as StyleProp<ViewStyle>;
  };

  return (
    <View style={buildContainerStyle()}>
      <FlatList
        data={configs}
        horizontal={true}
        scrollEnabled={false}
        ItemSeparatorComponent={({leadingItem}) => {
          return (
            <Separator
              top={STEP_RADIUS}
              active={leadingItem.stepNumber < activeStep}
            />
          );
        }}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <Pressable
            disabled={false}
            onPress={() => onStepPressed(item.stepNumber)}>
            <StepIndicator
              width={STEP_WIDTH}
              radius={STEP_RADIUS}
              title={item.stepTitle}
              completed={item.completed}
              stepNumber={item.stepNumber}
              active={activeStep === item.stepNumber}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export {StepList};
