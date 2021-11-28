import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JobsPage from './pages/JobsPage';
import FavsPage from './pages/FavsPage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="JobsPage" component={JobsPage} />
    </Stack.Navigator>
  );
};

const AppDrawer = () => {
  const dispatch = useDispatch();
  return (
    <Drawer.Navigator initialRouteName="Jobs">
      <Drawer.Screen
        name="JobsPage"
        component={JobsPage}
        options={{
          headerRight: () => (
            <Icon
              name="logout"
              size={30}
              color="white"
              onPress={() => dispatch({type: 'REMOVE_USER'})}
            />
          ),
        }}
      />
      <Drawer.Screen name="Favs" component={FavsPage} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  const userSession = useSelector(s => s.user);
  return (
    <NavigationContainer>
      {!userSession ? <AuthStack /> : <AppDrawer />}
    </NavigationContainer>
  );
};

export default Router;
