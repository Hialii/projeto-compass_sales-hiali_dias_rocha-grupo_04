import React, {useState} from 'react';
import LoadingOverlay from '../component/LoadingOverlay';
import { AuthContent } from '../auth/AuthContent';
import {signInWithEmailPassword} from '../firebase/auth';
import {Alert} from 'react-native';


export function LoginScreen() {
   const [isAuthenticating, setIsAuthentiating] = useState(false);


   async function handleAuthentication({email, password}){
    setIsAuthentiating(true);
    try{
       await signInWithEmailPassword(email, password);
    }catch(error) {
      Alert.alert('Authentication Failed. Try again');
    }
      setIsAuthentiating(false);
    }
    if(isAuthenticating) {
       return <LoadingOverlay message="Logging you in.." />
    }

   return <AuthContent isLogin={true} onAuthenticate={handleAuthentication}/>
};
