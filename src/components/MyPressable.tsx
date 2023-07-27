import React from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
  LayoutChangeEvent,
  GestureResponderEvent,
} from 'react-native';
import {Hooks} from '@kailash-js/react-native-bases';

interface MyPressableProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const MyPressable: React.FC<MyPressableProps> = ({
  onPress,
  disabled = false,
  children = [],
  pressableProps = {},
  onLayout = () => {},
  styleFunc = () => ({}),
}) => {
  const onPressedAction = Hooks.useUserActionLock();
  //
  const _onPress = (event: GestureResponderEvent) => {
    onPressedAction(() => {
      onPress && onPress(event);
    });
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onLayout={onLayout}
      style={({pressed}) => {
        return styleFunc(pressed);
      }}
      {...pressableProps}>
      {children}
    </Pressable>
  );
};

export {MyPressable};
