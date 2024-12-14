export class AuthToken {
  static token = '';
  static setToken = (token: string) => {
    this.token = token;
  };
  static getToken = () => {
    return this.token;
  };
}
import * as Keychain from 'react-native-keychain';

export const storeToken = async (value: object) => {
  try {
    await Keychain.setGenericPassword('@token', JSON.stringify(value));
  } catch (error) {
    console.error('Failed to store session token:', error);
  }
};

export const clearToken = async () => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    console.error('Failed to clear session token:', error);
  }
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
};
