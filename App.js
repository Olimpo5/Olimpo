import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsShowSplash(false);
    }, 3000)
  })
  return (
    <>{isShowSplash ? <SplashScreen></SplashScreen>: <MainStack></MainStack>}</>
    // <MainStack></MainStack>
  );
}