import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText, Text} from 'react-native-paper';
import {ICheck} from './assets';
import {PartViewProps} from './components/StepList';

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
});

type PURPOSE_OPTION = {id: string; label: string};

const PURPOSE_LIST: Array<PURPOSE_OPTION> = [
  {id: 'money', label: 'Money transfer'},
  {id: 'pay', label: 'Payment'},
  {id: 'bill', label: 'Bill payment'},
  {id: 'loan', label: 'Loan'},
  {id: 'investment', label: 'Investment'},
  {id: 'saving', label: 'Saving'},
];

const PurposeStep: React.FC<PartViewProps> = ({onNext}) => {
  const [selected, setSelected] = useState<Array<string>>([]);

  const onUnSelect = (id: string) => {
    setSelected(prev => prev.filter(x => x !== id));
  };

  const onSelect = (id: string) => {
    setSelected(prev => [...prev, id]);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}>
        <HelperText variant={'titleMedium'} type={'info'}>
          Please let us know your purposes:
        </HelperText>
        {PURPOSE_LIST.map((x: PURPOSE_OPTION) => {
          const isSelected = selected.includes(x.id);

          const onPress = () => {
            if (isSelected) {
              onUnSelect(x.id);
            } else {
              onSelect(x.id);
            }
          };

          return (
            <Button
              key={x.id}
              onPress={onPress}
              rippleColor={'transparent'}
              labelStyle={{flex: 1, textAlign: 'left'}}
              contentStyle={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
              }}
              icon={() =>
                isSelected ? <ICheck width={25} height={25} /> : null
              }>
              {x.label}
            </Button>
          );
        })}
      </ScrollView>
      <Button mode={'contained'} onPress={onNext}>
        <Text style={{color: 'white'}}>NEXT</Text>
      </Button>
    </View>
  );
};

export {PurposeStep};
