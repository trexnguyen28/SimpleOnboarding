import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {VSpace} from './components/VSpace';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

const AdditionalStep = () => {
  return (
    <View style={styles.container}>
      <TextInput mode={'outlined'} label={'Email'} />
      <VSpace value={8} />
      <TextInput mode={'outlined'} label={'Phone number'} />
      <VSpace value={8} />
      <TextInput mode={'outlined'} label={'Date of birth'} />
    </View>
  );
};

export {AdditionalStep};
