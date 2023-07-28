import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText} from 'react-native-paper';
//
import {ICheck} from './assets';
import {OnboardingContext} from './OnboardingContext';
import {OnboardingPurposeConfig} from './OnboardingConfig';
import {Option, PurposeInfo, StepViewProps} from './OnboardingTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  btnContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    textAlign: 'left',
  },
});
const PurposeStep: React.FC<StepViewProps> = ({
  id,
  onNext,
  isFinal,
  onFinish,
}) => {
  const {onboardData, setOnboardData} = useContext(OnboardingContext);
  const [selected, setSelected] = useState(onboardData[id] as PurposeInfo);

  const onToggle = (purpose: Option, isSelected: boolean) => {
    if (isSelected) {
      setSelected(prev => prev.filter(x => x.id !== purpose.id));
    } else {
      setSelected(prev => [...prev, purpose]);
    }
  };

  const onSubmit = () => {
    setOnboardData(id, selected);
    //
    if (isFinal) {
      onFinish();
    } else {
      onNext();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}>
        <HelperText variant={'titleMedium'} type={'info'}>
          Please let us know your purposes:
        </HelperText>
        {OnboardingPurposeConfig.map(purpose => {
          const isSelected = selected.some(x => x.id === purpose.id);
          //
          return (
            <Button
              key={purpose.id}
              labelStyle={styles.label}
              rippleColor={'transparent'}
              contentStyle={styles.btnContent}
              onPress={() => onToggle(purpose, isSelected)}
              icon={() =>
                isSelected ? <ICheck width={25} height={25} /> : null
              }>
              {purpose.label}
            </Button>
          );
        })}
      </ScrollView>
      <Button
        onPress={onSubmit}
        mode={'contained'}
        disabled={selected.length === 0}>
        {isFinal ? 'Complete' : 'Next'}
      </Button>
    </View>
  );
};

export {PurposeStep};
