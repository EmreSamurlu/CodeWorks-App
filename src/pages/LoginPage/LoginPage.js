import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import styles from './LoginPage.style';
import Button from '../../components/buttons/PrimaryBtn';
import Input from '../../components/Input';
import LoginValidator from './ValidationSchema';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = ({navigation}) => {
  const {loading} = useFetch();

  const handleLogin = async formValues => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('JobsPage');
    } catch (error) {
      console.log(error);
      /* showMessage({
        message: authErrorMessageParser(err.code),
        type: 'danger',
      }); */
    }
  };
  const handleSignup = () => {
    navigation.navigate('SignupPage');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/codeworks.png')}
        />
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={LoginValidator}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <Input
              autoCapitalize="none"
              placeholder={'user e-mail...'}
              onType={handleChange('email')}
              value={values.email}
            />
            {errors.email ? <Text>{errors.email}</Text> : null}
            <Input
              autoCapitalize="none"
              placeholder={'user password...'}
              onType={handleChange('password')}
              value={values.password}
              isSecure
            />
            {errors.password ? <Text>{errors.password}</Text> : null}
            <Button onPress={handleSubmit} text="Login" />
          </View>
        )}
      </Formik>
      <Button onPress={handleSignup} text="Sign Up" theme="secondary" />
    </SafeAreaView>
  );
};
export default LoginPage;
