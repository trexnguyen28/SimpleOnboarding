import React, {useContext} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';

import {VSpace} from '@components';
import {OnboardingContext} from './OnboardingContext';
import {BasicInfo, StepViewProps} from './OnboardingTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
});

const VN_ID_REGEX = /^(\d{9}|\d{12})$/;

const BasicStep: React.FC<StepViewProps> = ({
  id,
  onNext,
  isFinal,
  onFinish,
}) => {
  const {onboardData, setOnboardData} = useContext(OnboardingContext);

  const {
    control,
    setFocus,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {...onboardData[id]} as BasicInfo});

  const onSubmitSuccess = (data: BasicInfo) => {
    setOnboardData(id, data);
    if (isFinal) {
      onFinish();
    } else {
      onNext();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardDismissMode={'on-drag'} style={styles.content}>
        <Controller
          name={'fullName'}
          control={control}
          rules={{required: true}}
          render={({field: {...props}}) => (
            <TextInput
              mode={'outlined'}
              label={'Full name'}
              returnKeyType={'next'}
              error={!!errors.fullName}
              onChangeText={props.onChange}
              onSubmitEditing={() => setFocus('idNumber')}
              {...props}
            />
          )}
        />
        {errors.fullName ? (
          <HelperText style={{paddingHorizontal: 0}} type={'error'}>
            {'Full name can not be empty'}
          </HelperText>
        ) : null}
        <VSpace />
        <Controller
          name={'idNumber'}
          control={control}
          rules={{required: true, pattern: VN_ID_REGEX}}
          render={({field: {...props}}) => (
            <TextInput
              mode={'outlined'}
              label={'Id number'}
              returnKeyType={'done'}
              error={!!errors.idNumber}
              keyboardType={'number-pad'}
              onChangeText={props.onChange}
              {...props}
            />
          )}
        />
        {errors.idNumber ? (
          <HelperText style={{paddingHorizontal: 0}} type={'error'}>
            {errors.idNumber.type === 'required'
              ? 'Id number can not be empty'
              : 'Invalid Vietnamese id format'}
          </HelperText>
        ) : null}
      </ScrollView>
      <Button mode={'contained'} onPress={handleSubmit(onSubmitSuccess)}>
        {isFinal ? 'Complete' : 'Next'}
      </Button>
    </View>
  );
};

export {BasicStep};
