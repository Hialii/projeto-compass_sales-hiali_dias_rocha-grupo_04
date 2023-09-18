import React, { useState } from 'react';
import { Alert, View, StyleSheet, Image } from 'react-native';
import { FlatButton } from '../component/FlatButton';
import { AuthForm } from './AuthForm';
import {useNavigation} from '@react-navigation/native';
import { Title } from '../component/Title';
import { TextGuide } from '../component/TextGuide';

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
      navigation.navigate('ForgotPassword');
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

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordIsValid = password.length >= 6;


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
      <Title>
      {isLogin ? 'Login' : 'Sing Up'}
      </Title>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Forgot your password?' : 'Already have an account?'}
        </FlatButton>
        <View style={styles.guide}>
          <TextGuide>
           {isLogin ? 'Or login with social account' : 'Or sign up with social account'}
          </TextGuide>
          <View style={styles.socials}>
            <Image source={require('../assets/Google.png')}/>
            <Image source={require('../assets/Facebook.png')}/>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  guide: {
    marginTop: 133,
    alignItems: 'center',
  },
  socials: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

