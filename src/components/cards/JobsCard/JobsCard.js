import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './JobsCard.style';

const JobsCard = ({job, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>Selam</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;
