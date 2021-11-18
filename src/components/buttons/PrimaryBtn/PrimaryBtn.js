import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './PrimaryBtn.style';
import Loading from '../../Loading';

const Button = ({text, onPress, loading, theme = 'primary'}) => {
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
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
