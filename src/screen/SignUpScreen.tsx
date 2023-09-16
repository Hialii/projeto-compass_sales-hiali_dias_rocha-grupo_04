import React, {useState} from 'react';
import { AuthContent } from '../auth/AuthContent';
import { createUser } from '../firebase/auth';
import LoadingOverlay from '../component/LoadingOverlay';
import {Alert} from 'react-native';


export function SignUpScreen() {
   const [isAuthenticating, setIsAuthentiating] = useState(false);


  async function handleAuthentication({email, password}){
   setIsAuthentiating(true);
   try{
      await createUser(email, password);
   }catch (error) {
      Alert.alert('Authentication Failed. Try again');
   }
   setIsAuthentiating(false);
}

   if(isAuthenticating) {
      return <LoadingOverlay message="Create user" />
   }
   return <AuthContent isLogin={false} onAuthenticate={handleAuthentication} />

}
