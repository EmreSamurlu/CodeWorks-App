import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
// import showMessage from 'react-native-flash-message';

import styles from './SignupPage.style';
import Button from '../../components/buttons/PrimaryBtn';
import Input from '../../components/Input';
import SignupValidator from './ValidationSchema';

const initialValues = {
  email: '',
  password: '',
  repassword: '',
};

const SignupPage = () => {
  const navigation = useNavigation();
  const handleSignup = async formValues => {
    /* if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler Eşleşmedi',
        type: 'danger',
      });
      return;
    } */
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.repassword,
      );
      console.log(formValues);
      navigation.navigate('LoginPage');
    } catch (err) {
      console.log(err);
    }
  };
  const handleBack = () => {
    navigation.navigate('LoginPage');
  };
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
        onSubmit={handleSignup}
        validationSchema={SignupValidator}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <Input
              autoCapitalize="none"
              placeholder={'E-mail Address...'}
              onType={handleChange('email')}
              value={values.email}
            />
            {errors.email ? <Text>{errors.email}</Text> : null}
            <Input
              autoCapitalize="none"
              placeholder={'Password...'}
              onType={handleChange('password')}
              value={values.password}
            />
            <Input
              autoCapitalize="none"
              placeholder={'Repassword...'}
              onType={handleChange('repassword')}
              value={values.repassword}
            />
            <Button onPress={handleSubmit} text="Signup" />
          </>
        )}
      </Formik>
      <Button
        onPress={handleBack}
        text="Back to Login Page"
        theme="secondary"
      />
    </SafeAreaView>
  );
};

export default SignupPage;
