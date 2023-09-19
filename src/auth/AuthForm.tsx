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
  const [enteredName, setEnteredName] = useState('')
 

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: 'email' | 'password' | 'name', enteredValue: string) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
        case 'name':
          setEnteredName(enteredName);
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
      {!isLogin ? <Input 
        label="Name"
        onUpdateValue={setEnteredName}
        value={enteredName}
        keyboardType="default"
        isInvalid={false} />
      : null}
      <Input
        label="Email"
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
          {isLogin ? 'LOGIN' : 'SIGN UP'}
        </Button>
      </View>
    </View>
  </View>
);
}


