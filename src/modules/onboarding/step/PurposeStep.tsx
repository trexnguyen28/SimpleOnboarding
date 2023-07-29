import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText} from 'react-native-paper';
//
import {ICheck} from '@assets';
//
import {Context} from '../context';
import {ONBOARD_PURPOSE_LIST} from '../constants';
import {Option, PurposeInfo, StepViewProps} from '../types';

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
  const {onboardData, setOnboardData} = useContext(Context);
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
        {ONBOARD_PURPOSE_LIST.map(purpose => {
          const isSelected = selected.some(x => x.id === purpose.id);
          //
          return (
            <Button
              key={purpose.id}
              testID={purpose.id}
              labelStyle={styles.label}
              rippleColor={'transparent'}
              contentStyle={styles.btnContent}
              onPress={() => onToggle(purpose, isSelected)}
              icon={() =>
                isSelected ? (
                  <ICheck width={25} height={25} fill={'black'} />
                ) : null
              }>
              {purpose.label}
            </Button>
          );
        })}
      </ScrollView>
      <Button
        testID={'submitBtn'}
        onPress={onSubmit}
        mode={'contained'}
        disabled={selected.length === 0}>
        {isFinal ? 'Complete' : 'Next'}
      </Button>
    </View>
  );
};

export {PurposeStep};
