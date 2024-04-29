import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@/theme';

type MenuButtonProps = PressableProps & {
  title: string
  icon: keyof typeof FontAwesome.glyphMap;
}

export function MenuButton({title,icon,...rest}:MenuButtonProps) {
  return (
    <Pressable style={styles.container} {...rest}>
      <FontAwesome name={icon} size={32} color={theme.colors.white} style={styles.icon}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}