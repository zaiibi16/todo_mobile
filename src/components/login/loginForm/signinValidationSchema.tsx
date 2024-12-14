import * as yup from 'yup';

export const signinValidationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});
