import React from 'react';
import {View, Text, TextInput} from 'react-native';

import { Button } from '../component/Button';

export function ForgotPasswordScreen(){
  function sendEmail(){}
   return (
   <View>
      <View>
         <Text>Forgot password</Text>
      </View>
      <View>
         <Text>Please, enter your email adress. You will receice a link to create a new password via email.</Text>
      </View>
      <View>
         <TextInput placeholder="Email" />
      </View>
      <Button onPress={sendEmail}>SEND</Button>
   </View>
   )
}