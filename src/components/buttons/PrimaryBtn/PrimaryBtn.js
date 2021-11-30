import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './PrimaryBtn.style';
import Loading from '../../Loading';

const Button = ({icon, size, text, onPress, loading, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles[theme].btnContainer}>
          <Text style={styles[theme].title}>{text}</Text>
          <Icon name={icon} size={size} style={styles[theme].icon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
