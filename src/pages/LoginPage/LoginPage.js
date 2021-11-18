import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './LoginPage.style';
import colors from '../../style/colors';
import Button from '../../components/buttons/PrimaryBtn';

const LoginPage = ({navigation}) => {
  const handleSignup = () => {
    navigation.navigate('SignupPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/codeworks.png')}
        />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              autoCapitalize="none"
              placeholder={'user e-mail...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'user password...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button onPress={null} text="Login" />
          </View>
        )}
      </Formik>
      <Button onPress={handleSignup} text="Sign Up" theme="secondary" />
    </SafeAreaView>
  );
};
export default LoginPage;
