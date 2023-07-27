import React from 'react';
import {View} from 'react-native';

interface HSpaceProps {
  value: number;
  color?: string;
}

const HSpace: React.FC<HSpaceProps> = ({value = 8, color = 'transparent'}) => {
  return <View style={{width: value, backgroundColor: color}} />;
};

export {HSpace};
