import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Transition} from './Transiction';
import {Wallet} from '../screens';
import {SplashScreen} from '../components/SplashScreen';

interface IScreenRoutes {
  initialRouteName?: string;
}

export const ScreenRoutes: React.FC<IScreenRoutes> = () => {
  const Stack = createStackNavigator();

  const options = {
    headerShown: false,
    ...Transition,
  };

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={options} initialRouteName={'WalletStart'}>
        <Stack.Screen name="Preload" component={SplashScreen} />
        <Stack.Screen name="WalletStart" component={Wallet.Start} />
        <Stack.Screen name="WalletRegister" component={Wallet.Register} />
        <Stack.Screen name="WalletCards" component={Wallet.MyCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
