import React, {useState} from 'react'; 
import { View } from 'react-native';

import { Button } from '../component/Button';
import { Input } from './Input';

interface CredentialsInvalid {
  email: boolean;
  password: boolean;
}
interface AuthForm {
  isLogin: boolean;
  onSubmit: (credentials : {email: string; password: string}) => void;
  credentialsInvalid : CredentialsInvalid;
}

export function AuthForm({ isLogin, onSubmit, credentialsInvalid }: AuthForm) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
 

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: 'email' | 'password', enteredValue: string) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
    <View>
      <Input
        label="Email Address"
        onUpdateValue={(value) => updateInputValueHandler('email', value)}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      <Input
        label="Password"
        onUpdateValue={(value) => updateInputValueHandler('password', value)}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      <View>
        <Button onPress={submitHandler} >
          {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
      </View>
    </View>
  </View>
);
}


