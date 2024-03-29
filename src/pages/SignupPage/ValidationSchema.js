import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('E-mail Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Password Required'),
  repassword: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Password Required'),
});

export default SignupSchema;
