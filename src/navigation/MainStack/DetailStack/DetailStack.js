import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import JobsPage from '../../../pages/JobsPage';
import DetailPage from '../../../pages/DetailPage';
import routes from '../../routes';

const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.JOBS} component={JobsPage} />
      <Stack.Screen name={routes.DETAIL_PAGE} component={DetailPage} />
    </Stack.Navigator>
  );
};

export default DetailStack;
