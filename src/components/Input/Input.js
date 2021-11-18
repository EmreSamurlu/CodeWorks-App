import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';
import colors from '../../style/colors';

const Input = ({placeholder, value, onType, autoCapitalize, isSecure}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
