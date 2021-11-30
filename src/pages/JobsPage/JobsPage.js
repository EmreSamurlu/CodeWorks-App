import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import Config from 'react-native-config';

import JobsCard from '../../components/cards/JobsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import styles from './JobsPage.style';
import Button from '../../components/buttons/PrimaryBtn';

const JobsPage = () => {
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const {data, loading, error} = useFetch(
    `${Config.API_URL}?page=${page}`,
    'results',
  );

  const handleJobPress = (id, name) => {
    navigation.navigate('DetailPage', {id, name});
  };
  const renderJobDetail = ({item}) => (
    <JobsCard job={item} onPress={() => handleJobPress(item.id, item.name)} />
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
      <FlatList data={data} renderItem={renderJobDetail} />
      <View style={styles.btnContainer}>
        <Button
          theme="icon"
          icon="arrow-left-bold-outline"
          onPress={() =>
            setPage(prev => {
              if (prev <= 1) {
                return (prev = 50);
              } else {
                return prev - 1;
              }
            })
          }
        />
        <Text style={styles.pageNumber}>{page}</Text>
        <Button
          theme="icon"
          icon="arrow-right-bold-outline"
          onPress={() =>
            setPage(prev => {
              if (prev >= 50) {
                return (prev = 1);
              } else {
                return prev + 1;
              }
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default JobsPage;
