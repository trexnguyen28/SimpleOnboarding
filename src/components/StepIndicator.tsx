import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Colors, fontStyles} from '@themes';
import {VSpace} from './VSpace';

interface StepIndicatorProps {
  width?: number;
  radius?: number;
  active?: boolean;
  title: string;
  stepNumber: number;
  completed?: boolean;
}

const styles = StyleSheet.create({
  indicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...fontStyles.Body2,
    color: Colors.Text,
    textAlign: 'center',
  },
});

const StepIndicator: React.FC<StepIndicatorProps> = ({
  title,
  stepNumber = 0,
  width = 80,
  radius = 18,
  active = false,
  completed = false,
}) => {
  const getContainerStyle = () => {
    return {minWidth: width, alignItems: 'center'} as StyleProp<ViewStyle>;
  };

  const getCircleProps = () => {
    return {
      r: radius,
      strokeWidth: 1,
      fill: completed || active ? Colors.Button.Primary : Colors.Background,
      stroke: completed || active ? Colors.Primary : Colors.Border.Dark,
    };
  };

  const getStepTextStyle = () => {
    return {
      ...fontStyles.Body2,
      color: completed || active ? Colors.Button.PrimaryText : Colors.Text,
    };
  };

  const textStyle = {
    ...fontStyles.Body2,
    textAlign: 'center',
    color: completed || active ? Colors.Primary : Colors.Text,
  } as StyleProp<TextStyle>;

  return (
    <View style={getContainerStyle()}>
      <View>
        <Svg width={(radius + 1) * 2} height={(radius + 1) * 2}>
          <Circle cx={'50%'} cy={'50%'} {...getCircleProps()} />
        </Svg>
        <View style={styles.indicatorContainer}>
          <Text style={getStepTextStyle()}>{stepNumber}</Text>
        </View>
      </View>
      <VSpace value={8} />
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

export {StepIndicator};
