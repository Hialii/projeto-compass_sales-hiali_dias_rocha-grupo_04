import React from 'react';
import { AuthContent } from '../auth/AuthContent';


export function LoginScreen() {
   function handleAuthentication(){}

   return <AuthContent isLogin={true} onAuthenticate={handleAuthentication}/>
};
