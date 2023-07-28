import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {VSpace} from './components/VSpace';
import {Controller, useForm} from 'react-hook-form';
import {PartViewProps} from './components/StepList';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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

const AdditionalStep: React.FC<PartViewProps> = ({onNext, isFinalPart}) => {
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
    },
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const openDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setValue('dateOfBirth', date.toDateString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode={'outlined'}
              label={'Email'}
              onChangeText={onChange}
            />
          )}
          name={'email'}
        />
        <VSpace value={8} />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode={'outlined'}
              label={'Phone Number'}
              onChangeText={onChange}
            />
          )}
          name={'phoneNumber'}
        />
        <VSpace value={8} />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {value}}) => (
            <TextInput
              value={value}
              editable={false}
              mode={'outlined'}
              label={'Date of birth'}
              onPressOut={openDatePicker}
            />
          )}
          name={'dateOfBirth'}
        />
      </View>
      <Button mode={'contained'} onPress={onNext}>
        <Text style={{color: 'white'}}>NEXT</Text>
      </Button>
      <DateTimePickerModal
        mode={'date'}
        date={
          getValues('dateOfBirth')
            ? new Date(getValues('dateOfBirth'))
            : undefined
        }
        isDarkModeEnabled={false}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        textColor={'black'}
      />
    </View>
  );
};

export {AdditionalStep};
