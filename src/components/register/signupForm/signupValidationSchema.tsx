import * as yup from 'yup';

export const signinValidationSchema = yup.object().shape({
  username: yup
  .string()
  .matches(/^[a-zA-Z0-9]*$/, 'Username can only contain alphabets and numbers')
  .max(10, 'Username cannot be longer than 10 characters')
  .required('Username is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
