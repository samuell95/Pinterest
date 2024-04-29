import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';

type FilterProps = PressableProps &  {
   filter: string;
   selected: boolean;
}

export function Filter({filter,selected,...rest}: FilterProps) {
  return (
    <Pressable style={[styles.pressable, selected && styles.pressableSelected]} {...rest}>
      <Text style={styles.text}>
        {filter}
      </Text>
    </Pressable>
  );
}