import React, {useMemo} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
//
import {StepIndicator} from './StepIndicator';
import {StepConfig, StepId} from '../types';
import {findStepConfigIndexById} from '../utils';

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

const Separator: React.FC<{top: number; active: boolean}> = ({
  top = 0,
  active = false,
}) => {
  const theme = useTheme<MD3Theme>();

  const style = {
    height: 2,
    width: 16,
    marginTop: top,
    marginHorizontal: 2,
    backgroundColor: active
      ? theme.colors.primary
      : theme.colors.surfaceDisabled,
  };

  return <View style={style} />;
};

interface StepOverviewProp {
  curStepId: StepId;
  configs: Array<StepConfig>;
  onStepPressed: (id: StepId) => void;
}

const StepOverview: React.FC<StepOverviewProp> = ({
  curStepId,
  configs,
  onStepPressed = () => {},
}) => {
  const {width} = useWindowDimensions();
  const theme = useTheme<MD3Theme>();
  const iCurStep = useMemo(
    () => findStepConfigIndexById(curStepId, configs),
    [curStepId, configs],
  );

  const onPress = (id: StepId) => {
    const iNextStep = findStepConfigIndexById(id, configs);

    // Only allow to go back
    if (iNextStep < iCurStep) {
      onStepPressed(id);
    }
  };

  return (
    <View
      style={{
        width,
        padding: 16,
        backgroundColor: theme.colors.surface,
      }}>
      <FlatList
        data={configs}
        horizontal={true}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={({leadingItem}: {leadingItem: StepConfig}) => {
          const iStep = findStepConfigIndexById(leadingItem.id, configs);

          return <Separator top={15} active={iStep < iCurStep} />;
        }}
        renderItem={({item, index}) => (
          <Pressable disabled={false} onPress={() => onPress(item.id)}>
            <StepIndicator
              width={64}
              radius={15}
              title={item.title}
              stepNumber={index + 1}
              active={index === iCurStep}
              completed={index < iCurStep}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export {StepOverview};
