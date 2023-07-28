import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {VSpace} from './components/VSpace';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

const BasicStep = () => {
  return (
    <View style={styles.container}>
      <TextInput mode={'outlined'} label={'Full name'} />
      <VSpace value={8} />
      <TextInput mode={'outlined'} label={'Id number'} />
    </View>
  );
};

export {BasicStep};
