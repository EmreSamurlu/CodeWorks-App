import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

import JobsCard from '../../components/cards/JobsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import styles from './JobsPage.style';

const JobsPage = ({navigation}) => {
  const {data, loading, error} = useFetch(`${Config.API_URL}`);
  const handleJobPress = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderJob = ({item}) => (
    <JobsCard job={item} onPress={() => handleJobPress(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Jobs Page</Text>
      <FlatList data={data} renderItem={renderJob} />
    </SafeAreaView>
  );
};

export default JobsPage;
