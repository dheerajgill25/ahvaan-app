import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import AppRouter from './src/Navigator/Component/AppRouter';
import { useTheme } from './src/Hooks/useTheme';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={theme.style.layout.fill}>
        <AppRouter />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );

}

export default App;
