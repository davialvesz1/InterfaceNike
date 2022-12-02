import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native';
import Routes from './src/router';
import { useCallback } from 'react';
//import fonts
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';


export default function app() {
  //_________________Gambiarra Absurda para carregar as fontes_________________________
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Carregar as fontes na hora___________
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  if (!fontsLoaded) return null;
  //_________________________________________________
  return (
    <>
      <StatusBar style="ligth" backgroundColor='#000' translucent={true} />
      <Routes />
    </>
  );
}




