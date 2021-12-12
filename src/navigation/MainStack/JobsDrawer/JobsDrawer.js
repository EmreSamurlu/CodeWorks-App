import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FavsPage from '../../../pages/FavsPage';
import DetailStack from '../DetailStack';
import routes from '../../routes';

const Drawer = createDrawerNavigator();

const JobsDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={routes.JOBS_PAGE} component={DetailStack} />
      <Drawer.Screen name={routes.FAVORITES_DRAWER} component={FavsPage} />
    </Drawer.Navigator>
  );
};

export default JobsDrawer;
