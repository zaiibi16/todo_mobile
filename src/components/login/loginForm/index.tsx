import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';

import {useTheme} from '~theme/ThemeContext';
import {ScreensName, Strings} from '~theme/Strings';
import {getStyles} from './styles';
import InputField from '~components/core/inputField';
import Button from '~components/core/button';
import TextButton from '~components/core/textButton';
import {signinValidationSchema} from './signinValidationSchema';
import {ISigninForm} from './types';
import {navigate} from '~utils/NavigationUtils';
import {useLoginService} from '~hooks/auth';

const LoginForm = () => {
  const {fonts} = useTheme();
  const styles = getStyles();
  const {loginUser} = useLoginService();
  const [errorText, setErrorText] = useState<any>('');

  const submitHandler = async (values: ISigninForm) => {
    loginUser(values);
  };

  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={signinValidationSchema}
        onReset={() => {
          setErrorText('');
        }}
        onSubmit={values => submitHandler(values)}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleReset,
          initialValues,
        }) => (
          <View style={styles.formContainer}>
            <View>
              <InputField
                label={Strings.USERNAME}
                placeholder={Strings.USERNAME}
                onChangeText={handleChange('username')}
                value={values.username}
                error={touched.username ? errors.username : null}
              />
              <InputField
                label={Strings.PASSWORD}
                placeholder={Strings.PASSWORD}
                password
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                error={touched.password ? errors.password : null}
              />
            </View>
            <View>
              <Button
                title={Strings.LOGIN}
                disabled={
                  values.username === initialValues.username ||
                  values.password === initialValues.password
                }
                onPress={handleSubmit}
                customStyle={[styles.buttonStyle]}
              />
              <View style={styles.signupContainer}>
                <Text style={[fonts.pMedium, styles.donthaveAccountTextColor]}>
                  {Strings.DONTHAVEANACCOUNT}
                </Text>
                <TextButton
                  title={Strings.REGISTER}
                  onPress={() => {
                    navigate(ScreensName.SignUpScreen);
                    handleReset();
                  }}
                  textColor={styles.registerButtonColor}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
