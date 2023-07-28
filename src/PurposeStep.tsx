import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

const PURPOSE_LIST = [
  'Money transfer',
  'Payment',
  'Bill payment',
  'Loan',
  'Investment',
  'Saving',
];

const PurposeStep = () => {
  return (
    <View style={styles.container}>
      {PURPOSE_LIST.map((x: string, i: number) => (
        <View key={i.toString()}>
          <Text>{x}</Text>
        </View>
      ))}
    </View>
  );
};

export {PurposeStep};
