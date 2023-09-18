import React, {useState} from 'react';
import {View} from 'react-native';

import { Button } from '../component/Button';
import { Title } from '../component/Title';
import { Input } from '../auth/Input';
import { TextGuide } from '../component/TextGuide';
import {auth} from '../firebase/util'
import {sendPasswordResetEmail}  from 'firebase/auth';
import {Alert} from 'react-native'



export function ForgotPasswordScreen(){
  const [email, setEmail] = useState('')

  async function sendEmail() {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Password Reset Email Sent',
      );
    } catch (error) {
      Alert.alert('Password Reset Failed', error.message);
    }
  }

   return (
   <View>
      <View>
         <Title>Forgot password</Title>
      </View>
      <View>
         <TextGuide>Please, enter your email adress. You will receice a link to create a new password via email.</TextGuide>
      </View>
      <Input
        label="Email"
        onUpdateValue={setEmail}
        value={email}
        keyboardType="email-address"
        isInvalid={false}
      />
      <Button onPress={sendEmail}>SEND</Button>
   </View>
   )
}
