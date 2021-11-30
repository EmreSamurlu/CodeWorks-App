import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useRoute} from '@react-navigation/core';
import Config from 'react-native-config';
import RenderHTML from 'react-native-render-html';
import {useDispatch} from '@react-redux';

import useFetch from '../../hooks/useFetch';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const source = {
    html: `${data.contents}`,
  };

  const {data, loading, error} = useFetch(`${Config.URL_API}/${id}`);

  return (
    <SafeAreaView>
      <Text>{data.name}</Text>
      <RenderHTML source={source} />
    </SafeAreaView>
  );
};

export default DetailPage;
