import React, {useState, useContext} from 'react';
import LoadingOverlay from '../component/LoadingOverlay';
import { AuthContent } from '../auth/AuthContent';
import {signInWithEmailPassword} from '../firebase/auth';
import {Alert} from 'react-native';
import { AuthContext } from '../context/NavigationContext';



export function LoginScreen() {
   const [isAuthenticating, setIsAuthentiating] = useState(false);

   const authCtx = useContext(AuthContext);


   async function handleAuthentication({email, password}){
    setIsAuthentiating(true);
    try{
       const token = await signInWithEmailPassword(email, password);
       authCtx.authenticate(token);
    }catch (error) {
      Alert.alert('Authentication Failed. Try again');
    }
      setIsAuthentiating(false);
    }
    if(isAuthenticating) {
       return <LoadingOverlay message="Logging you in.." />
    }

   return <AuthContent isLogin={true} onAuthenticate={handleAuthentication}/>
};
