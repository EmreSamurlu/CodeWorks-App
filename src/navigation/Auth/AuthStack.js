import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
