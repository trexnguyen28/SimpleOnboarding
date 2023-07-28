import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, HelperText, Text, TextInput} from 'react-native-paper';
import {VSpace} from './components/VSpace';
import {useForm, Controller} from 'react-hook-form';
import {PartViewProps} from './components/StepList';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 12,
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

const BasicStep: React.FC<PartViewProps> = ({onNext, isFinalPart}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      idNumber: '',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <VSpace value={8} />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              mode={'outlined'}
              label={'Full name'}
              onChangeText={onChange}
            />
          )}
          name={'fullName'}
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
              label={'Id number'}
              onChangeText={onChange}
            />
          )}
          name={'idNumber'}
        />
      </View>
      <Button mode={'contained'} onPress={onNext}>
        <Text style={{color: 'white'}}>NEXT</Text>
      </Button>
    </View>
  );
};

export {BasicStep};
