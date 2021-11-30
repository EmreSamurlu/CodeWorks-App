import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './JobsCard.style';

const JobsCard = ({job, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <Text>{job.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;
