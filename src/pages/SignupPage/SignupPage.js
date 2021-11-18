import React from 'react';
import {View, Image} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './SignupPage.style';
import Button from '../../components/buttons/PrimaryBtn';
import Input from '../../components/Input';

const initialValues = {
  name: '',
  email: '',
  password: '',
  repassword: '',
  gender: '',
  profession: '',
};

const SignupPage = ({navigation}) => {
  const handleSignup = () => {
    values => console.log(values);
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
      <Formik initialValues={initialValues} onSubmit={handleSignup}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input
              placeholder={'Name...'}
              onType={handleChange('name')}
              value={values.name}
            />
            <Input
              autoCapitalize="none"
              placeholder={'E-mail Address...'}
              onType={handleChange('email')}
              value={values.email}
            />
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
            <Input
              autoCapitalize="none"
              placeholder={'Profession...'}
              onType={handleChange('profession')}
              value={values.profession}
            />

            <Button onPress={handleSubmit} text="Signup" />
          </View>
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
