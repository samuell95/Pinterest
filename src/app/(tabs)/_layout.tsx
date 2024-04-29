import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react'; 
import { Tabs } from "expo-router";

import { View } from "react-native";

import { FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons";

import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { theme } from "@/theme";
import { StatusBar } from 'expo-status-bar';

export default function TabsLayout() {
  const bottomSheet = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheet.current?.expand()
  const handleBottomSheetClose = () => bottomSheet.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1}}>
      <StatusBar style='light'/>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
        }
      }}>

      <Tabs.Screen name="index" options={{
        tabBarIcon: ({color,size}) => (<Foundation name="home" size={size} color={color} />)
      }}/>

      <Tabs.Screen name="search" options={{
        tabBarIcon: ({color,size}) => (<Ionicons name="search" size={size} color={color} />)
      }}/>

      <Tabs.Screen name="menu" options={{
        tabBarIcon: ({color,size}) => (<FontAwesome5 name="plus" size={size} color={color} />)
        }}
        listeners={() => ({
          tabPress: (event) => {
            event.preventDefault()
            handleBottomSheetOpen()
          }
        })}
      />

      <Tabs.Screen name="messages" options={{
        tabBarIcon: ({color,size}) => (<Ionicons name="chatbubble-ellipses" size={size} color={color} />)
      }}/>

      <Tabs.Screen name="profile" options={{
        tabBarIcon: ({color}) => <Avatar selected={color === theme.colors.white} source={{uri: 'https://github.com/samuell95.png'}}/>
      }}/>
      </Tabs>
      <Menu ref={bottomSheet} onClose={handleBottomSheetClose}/>
    </View>
  )
}