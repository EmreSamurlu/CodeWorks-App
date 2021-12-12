import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from '../routes';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name={routes.LOGIN_STACK} component={LoginPage} />
      <Stack.Screen name={routes.SIGN_IN_STACK} component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
