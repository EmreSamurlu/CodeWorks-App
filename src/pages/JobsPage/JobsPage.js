import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import Config from 'react-native-config';

import JobsCard from '../../components/cards/JobsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import styles from './JobsPage.style';
import Button from '../../components/buttons/PrimaryBtn';
import routes from '../../navigation/routes';

const JobsPage = () => {
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const {data, loading, error} = useFetch(
    `${Config.API_URL}?page=${page}`,
    'results',
  );

  const handleJobPress = (id, name) => {
    navigation.navigate(routes.DETAIL_PAGE, {id, name});
  };
  const handlePageInrement = () => {
    setPage(prev => {
      if (prev <= 1) {
        return (prev = 50);
      } else {
        return prev - 1;
      }
    });
  };

  const handlePageDecrement = () => {
    setPage(prev => {
      if (prev >= 50) {
        return (prev = 1);
      } else {
        return prev + 1;
      }
    });
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
          onPress={handlePageInrement}
        />
        <Text style={styles.pageNumber}>{page}</Text>
        <Button
          theme="icon"
          icon="arrow-right-bold-outline"
          onPress={handlePageDecrement}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobsPage;
