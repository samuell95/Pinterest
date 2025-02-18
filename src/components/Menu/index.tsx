import BottomSheet from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';

import { Text, View } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@/theme';
import { MenuButton } from '../MenuButton';

type MenuProps = {
  onClose: () => void;
}

export const  Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
  return (
   <BottomSheet 
    ref={ref} 
    index={0} 
    snapPoints={[0.01,230]} 
    backgroundStyle={styles.container}
    handleComponent={() => null}
   >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome name='close' size={24} color={theme.colors.white} onPress={onClose} />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}> 
          <MenuButton title= 'Pin' icon='home'/>
          <MenuButton title= 'Pasta' icon='paste'/>
          <MenuButton title= 'Colagem' icon='folder'/>
        </View>
      </View>
   </BottomSheet>
  );
})