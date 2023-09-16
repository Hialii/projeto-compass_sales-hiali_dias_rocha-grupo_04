import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { FlatButton } from '../component/FlatButton';
import { AuthForm } from './AuthForm';
import {useNavigation} from '@react-navigation/native';

interface CredentialsInvalid {
  email: boolean;
  password: boolean;
}

interface AuthContentProps {
  isLogin: boolean;
  onAuthenticate: (credentials: { email: string; password: string }) => void;
}

export function AuthContent({ isLogin, onAuthenticate }: AuthContentProps) {
   const navigation: any = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState<CredentialsInvalid>({
    email: false,
    password: false,
  });

  function switchAuthModeHandler() {
   console.log('Switching auth mode');
    if (isLogin) {
      navigation.navigate('SignUp');
    } else {
      navigation.navigate('Login');
    }
  }

  function submitHandler(credentials: {
    email: string;
    password: string;

  }) {
    let { email, password} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;


    if (
      !emailIsValid ||
      !passwordIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

