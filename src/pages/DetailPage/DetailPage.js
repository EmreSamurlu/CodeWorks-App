import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useRoute} from '@react-navigation/core';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  return (
    <SafeAreaView>
      <Text>Details Page</Text>
    </SafeAreaView>
  );
};

export default DetailPage;
