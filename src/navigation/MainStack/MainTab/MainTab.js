import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import JobsDrawer from '../JobsDrawer';
import UserPage from '../../../pages/UserPage';
import routes from '../../routes';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={routes.JOBS_DRAWER}
        component={JobsDrawer}
        title="Jobs"
      />
      <Tab.Screen name={routes.PROFILE_TAB} component={UserPage} />
    </Tab.Navigator>
  );
};

export default MainTab;
