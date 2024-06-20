import React from 'react';

import {useFonts} from  'expo-font';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium,Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { View, Text } from 'react-native';
import { SignIn } from './src/screens/index';

import { StatusBar } from 'react-native';

import { Background } from './src/Background';

export default function App(){

const [fontsLoaded] = useFonts ({
  Inter_400Regular,
  Inter_500Medium,
  Rajdhani_500Medium,
  Rajdhani_700Bold
});
if (!fontsLoaded){
  return <AppLoading/>
}

  return(
    <Background>
    <StatusBar 
    barStyle='light-content' 
    backgroundColor={"transparent"} 
    translucent />
    <SignIn/>
    </Background>
  );

}