import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';
import AuthStack from './Auth';
import MainTab from './MainStack/MainTab';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={routes.MAIN_STACK} component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
