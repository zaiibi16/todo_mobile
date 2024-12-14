export class AuthToken {
  static token = '';
  static setToken = (token: string) => {
    this.token = token;
  };
  static getToken = () => {
    return this.token;
  };
}

// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

export const storeToken = async (value: object) => {
  try {
    await Keychain.setGenericPassword('@token', JSON.stringify(value));
  } catch (error) {
    console.error('Failed to store session token:', error);
  }
  // try {
  //   await AsyncStorage.setItem('@token', JSON.stringify(value));
  // } catch (e) {
  //   console.log(e);
  // }
};

export const clearToken = async () => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    console.error('Failed to clear session token:', error);
  }
  // try {
  //   await AsyncStorage.removeItem(key);
  // } catch (e) {
  //   console.log(e);
  // }
};

export const getToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      const sessionToken = credentials.password;
      return JSON.parse(sessionToken);
    } else {
      console.log('No session token found');
      return null;
    }
  } catch (error) {
    console.error('Failed to retrieve session token:', error);
    return null;
  }

  // try {
  //   const value = await AsyncStorage.getItem('@token');
  //   if (value !== null) {
  //     return JSON.parse(value);
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
};
