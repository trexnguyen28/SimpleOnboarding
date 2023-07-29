import React, {useContext, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {VSpace} from '@components';

import {Context} from '../context';
import {AdditionalInfo, StepViewProps} from '../types';
import {EMAIL_PATTERN, VN_PHONE_PATTERN} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
  error: {
    paddingHorizontal: 0,
  },
});

const AdditionalStep: React.FC<StepViewProps> = ({
  id,
  onNext,
  isFinal,
  onFinish,
}) => {
  const {onboardData, setOnboardData} = useContext(Context);
  const {
    control,
    setValue,
    setFocus,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {...onboardData[id]} as AdditionalInfo});

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const isValidDateOfBirth = (value: string) => {
    const year = new Date(value).getFullYear();
    const curYear = new Date().getFullYear();

    return curYear - year >= 18;
  };

  const openDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onDatePickerConfirm = (date: Date) => {
    setValue('dateOfBirth', date.toDateString(), {shouldValidate: true});
    hideDatePicker();
  };

  const onSubmitSuccess = (data: AdditionalInfo) => {
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
          name={'email'}
          control={control}
          rules={{required: true, pattern: EMAIL_PATTERN}}
          render={({field: {...props}}) => (
            <TextInput
              label={'Email'}
              mode={'outlined'}
              returnKeyType={'next'}
              error={!!errors.email}
              onChangeText={props.onChange}
              keyboardType={'email-address'}
              onSubmitEditing={() => setFocus('phoneNumber')}
              {...props}
            />
          )}
        />
        {errors.email ? (
          <HelperText style={styles.error} type={'error'}>
            {errors.email.type === 'required'
              ? 'Email can not be empty'
              : 'Invalid email format'}
          </HelperText>
        ) : null}
        <VSpace />
        <Controller
          name={'phoneNumber'}
          control={control}
          rules={{required: true, pattern: VN_PHONE_PATTERN}}
          render={({field: {...props}}) => (
            <TextInput
              mode={'outlined'}
              label={'Phone Number'}
              returnKeyType={'next'}
              keyboardType={'number-pad'}
              error={!!errors.phoneNumber}
              onChangeText={props.onChange}
              onSubmitEditing={() => openDatePicker()}
              {...props}
            />
          )}
        />
        {errors.phoneNumber ? (
          <HelperText style={styles.error} type={'error'}>
            {errors.phoneNumber.type === 'required'
              ? 'Phone number can not be empty'
              : 'Invalid Vietnamese phone number format'}
          </HelperText>
        ) : null}
        <VSpace />
        <Controller
          control={control}
          rules={{required: true, validate: isValidDateOfBirth}}
          render={({field: {value}}) => (
            <Pressable onPress={openDatePicker}>
              <TextInput
                value={value}
                editable={false}
                mode={'outlined'}
                label={'Date of birth'}
                error={!!errors.dateOfBirth}
              />
            </Pressable>
          )}
          name={'dateOfBirth'}
        />
        {errors.dateOfBirth ? (
          <HelperText style={styles.error} type={'error'}>
            {errors.dateOfBirth.type === 'validate'
              ? 'We only allow new user over 18 year old'
              : 'Date of birth can not be empty'}
          </HelperText>
        ) : null}
      </ScrollView>
      <Button mode={'contained'} onPress={handleSubmit(onSubmitSuccess)}>
        {isFinal ? 'Complete' : 'Next'}
      </Button>
      <DateTimePickerModal
        mode={'date'}
        textColor={'black'}
        maximumDate={new Date()}
        isDarkModeEnabled={false}
        onConfirm={onDatePickerConfirm}
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        date={
          getValues('dateOfBirth')
            ? new Date(getValues('dateOfBirth'))
            : undefined
        }
      />
    </View>
  );
};

export {AdditionalStep};
