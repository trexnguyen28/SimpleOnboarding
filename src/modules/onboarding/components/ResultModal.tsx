import React from 'react';
import {Card, HelperText, Modal, Text} from 'react-native-paper';
//
import {OnboardingModel, StepConfig} from '../types';
import {ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  cardContainer: {
    margin: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    flex: 1,
  },
  rowContent: {},
});

interface ResultModalProps {
  visible: boolean;
  onDismiss: () => void;
  steps: Array<StepConfig>;
  result: OnboardingModel;
}

const ResultModal: React.FC<ResultModalProps> = ({
  steps,
  visible,
  onDismiss,
  result,
}) => {
  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <ScrollView>
        <HelperText style={styles.title} type={'info'}>
          Onboarding Result
        </HelperText>
        {steps.map(step => {
          return (
            <Card key={step.id} style={styles.cardContainer}>
              <Card.Title title={step.title} />
              <Card.Content>
                <Text>{JSON.stringify(result[step.id])}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </Modal>
  );
};

export {ResultModal};
