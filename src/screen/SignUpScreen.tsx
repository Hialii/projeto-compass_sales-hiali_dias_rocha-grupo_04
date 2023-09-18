import React, {useState, useContext} from 'react';
import { AuthContent } from '../auth/AuthContent';
import { createUser } from '../firebase/auth1';
import LoadingOverlay from '../component/LoadingOverlay';
import {Alert} from 'react-native';
import { AuthContext } from '../context/NavigationContext';


export function SignUpScreen() {
   const [isAuthenticating, setIsAuthentiating] = useState(false);
   const authCtx = useContext(AuthContext)


  async function handleAuthentication({email, password}){
   setIsAuthentiating(true);
   try{
     const token =  await createUser(email, password);
      authCtx.authenticate(token);
   }catch (error) {
      Alert.alert('Authentication Failed. Try again');
      setIsAuthentiating(false);
   }
}

   if(isAuthenticating) {
      return <LoadingOverlay message="Create user" />
   }
   return <AuthContent isLogin={false} onAuthenticate={handleAuthentication} />

}
