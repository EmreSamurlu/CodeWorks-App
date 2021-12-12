import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './JobsCard.style';

const id = Math.floor(Math.random() * 100);

const JobsCard = ({job, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.name}>{job.name}</Text>
          <Image
            source={{uri: `https://picsum.photos/${id}`}}
            style={styles.image}
          />
        </View>
        <Text style={styles.company_name}>{job.company.name}</Text>
        {!!job.levels &&
          job.levels.map(l => (
            <Text key={id} style={styles.company_name}>
              {l.name}
            </Text>
          ))}
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;
