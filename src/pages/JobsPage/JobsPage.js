import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

import JobsCard from '../../components/cards/JobsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import styles from './JobsPage.style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const JobsPage = () => {
  const navigation = useNavigation();

  // const {data, loading, error} = useFetch(`${Config.API_URL}`);

  const handleJobPress = id => {
    navigation.navigate('DetailPage', id);
  };
  const renderJob = ({item}) => (
    <JobsCard job={item} onPress={handleJobPress} />
  );
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   console.log(error);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Jobs Page</Text>
      <FlatList data={DATA} renderItem={renderJob} />
    </SafeAreaView>
  );
};

export default JobsPage;
