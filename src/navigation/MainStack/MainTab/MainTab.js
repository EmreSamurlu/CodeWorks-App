import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import JobsDrawer from '../JobsDrawer';
import UserPage from '../../../pages/UserPage';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Jobs" component={JobsDrawer} title="Jobs" />
      <Tab.Screen name="Profile" component={UserPage} />
    </Tab.Navigator>
  );
};

export default MainTab;
