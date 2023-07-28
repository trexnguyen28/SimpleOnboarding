import React from 'react';
import {Text, Button} from 'react-native-paper';

interface SubmitButtonProps {
  isFinalSubmit?: boolean;
  onNext: () => void;
  onFinish: () => void;
}

const SubmitButton = () => {
  return (
    <Button mode={'contained'} onPress={onNext}>
      <Text style={{color: 'white'}}>NEXT</Text>
    </Button>
  );
};
