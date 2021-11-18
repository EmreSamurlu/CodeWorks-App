import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './SignupPage.style';
import colors from '../../style/colors';
import Button from '../../components/buttons/PrimaryBtn';

const SignupPage = ({navigation}) => {
  const handleBack = () => {
    navigation.navigate('LoginPage');
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
        initialValues={{
          name: '',
          email: '',
          password: '',
          repassword: '',
          gender: '',
          profession: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              autoCapitalize="none"
              placeholder={'Name...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'E-mail Address...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'Password...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'Repassword...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('repassword')}
              onBlur={handleBlur('repassword')}
              value={values.repassword}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'Select Gender...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
            />
            <TextInput
              autoCapitalize="none"
              placeholder={'Profession...'}
              placeholderTextColor={colors.secondary}
              style={styles.input}
              onChangeText={handleChange('profession')}
              onBlur={handleBlur('profession')}
              value={values.profession}
            />

            <Button onPress={null} text="Signup" />
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
