import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';

import { Filter } from '@/components/Filter';

type FiltersProps = {
  filters: string[];
  filter: string;
  onChange: (value: string) => void;
}

export function Filters({filter,filters,onChange}: FiltersProps) {
  return (
   <FlatList
    data={filters}
    keyExtractor={(item) => item}
    renderItem={({item}) => <Filter filter={item} selected={item === filter} onPress={() => onChange(item)} />}
    horizontal
    showsHorizontalScrollIndicator= {false}
    style={styles.list}
    contentContainerStyle={styles.content}
   />
  );
}