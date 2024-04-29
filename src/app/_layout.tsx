import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Roboto_400Regular,Roboto_500Medium,Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  
  if(!fontsLoaded) {
   SplashScreen.hideAsync()
  }
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar backgroundColor='transparent' style='light'/>
      <Slot/>
    </GestureHandlerRootView>
  );
}