import React from 'react';
import {View} from 'react-native';

interface VSpaceProps {
  value: number;
  color?: string;
}

const VSpace: React.FC<VSpaceProps> = ({value = 8, color = 'transparent'}) => {
  return <View style={{height: value, backgroundColor: color}} />;
};

export {VSpace};
