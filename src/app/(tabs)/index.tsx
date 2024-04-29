import { FILTERS } from '@/utils/filters';
import { Filters } from '@/components/Filters';
import { theme } from '@/theme';
import {  View } from 'react-native';
import { useState } from 'react';
import { Posts } from '@/components/Posts';
import { POSTS } from '@/utils/post';
import { StatusBar } from 'expo-status-bar';



export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.black, paddingTop: 52, padding:12}}> 
      <StatusBar style='light' backgroundColor='transparent'/>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter}/>
      <Posts posts={POSTS}/>
    </View>
  );
}
