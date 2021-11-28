import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import JobsPage from '../../../pages/JobsPage';
import FavsPage from '../../../pages/FavsPage';

const Drawer = createDrawerNavigator();

const JobsDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="JobsPage" component={JobsPage} />
      <Drawer.Screen name="Favs" component={FavsPage} />
    </Drawer.Navigator>
  );
};

export default JobsDrawer;
