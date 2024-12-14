import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';

import { useTheme } from '~theme/ThemeContext';
import { ScreensName, Strings } from '~theme/Strings';
import { getStyles } from './styles';
import InputField from '~components/core/inputField';
import Button from '~components/core/button';
import TextButton from '~components/core/textButton';
import { signinValidationSchema } from './signupValidationSchema';
// import ErrorBlock from '~components/core/errorBlock';
import { navigate } from '~utils/NavigationUtils';
import Colors from '~theme/Colors';
import { IRegisterProps } from '~services/auth/types';
import { useRegisterService } from '~hooks/auth';


const SignUpForm = () => {
  const { fonts } = useTheme();
  const styles = getStyles();
  const {registerUser} = useRegisterService()
  const [errorText, setErrorText] = useState<any>('');

  const submitHandler = async (values: IRegisterProps) => {
    registerUser(values);
  };

  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{ username: '', password: '' }}
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
          isValid,
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
                title={Strings.REGISTER}
                disabled={
                  values.username === initialValues.username ||
                  values.password === initialValues.password
                }
                onPress={handleSubmit}
                customStyle={[styles.buttonStyle]}
              />
              <View style={styles.signupContainer}>
                <Text style={[fonts.pMedium, styles.donthaveAccountTextColor]}>
                  {Strings.ALREADYHAVEANACCOUNT}
                </Text>
                <TextButton
                  title={Strings.LOGIN}
                  onPress={() => {
                    navigate(ScreensName.LoginScreen);
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

export default SignUpForm;
