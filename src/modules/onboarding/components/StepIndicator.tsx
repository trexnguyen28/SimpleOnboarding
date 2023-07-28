import React from 'react';
import {Text, View, StyleSheet, StyleProp, TextStyle} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {VSpace} from '@components';
import {MD3Theme, useTheme} from 'react-native-paper';
import {ICheck} from '@assets';

interface StepIndicatorProps {
  title: string;
  width?: number;
  radius?: number;
  active?: boolean;
  stepNumber: number;
  completed?: boolean;
}

const styles = StyleSheet.create({
  indicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StepIndicator: React.FC<StepIndicatorProps> = ({
  title,
  width = 80,
  radius = 18,
  stepNumber = 0,
  active = false,
  completed = false,
}) => {
  const theme = useTheme<MD3Theme>();

  const circleProps = {
    r: radius,
    strokeWidth: 1,
    fill: completed || active ? theme.colors.primary : theme.colors.background,
    stroke:
      completed || active ? theme.colors.primary : theme.colors.surfaceDisabled,
  };

  const textStyle = {
    textAlign: 'center',
    color: completed || active ? theme.colors.primary : 'black',
  } as StyleProp<TextStyle>;

  return (
    <View style={{minWidth: width, alignItems: 'center'}}>
      <View>
        <Svg width={(radius + 1) * 2} height={(radius + 1) * 2}>
          <Circle cx={'50%'} cy={'50%'} {...circleProps} />
        </Svg>
        <View style={styles.indicatorContainer}>
          {completed ? (
            <ICheck fill={'white'} />
          ) : (
            <Text style={{color: active ? 'white' : theme.colors.primary}}>
              {stepNumber}
            </Text>
          )}
        </View>
      </View>
      <VSpace />
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

export {StepIndicator};
