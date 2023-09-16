import React, {useState} from 'react';
import { AuthContent } from '../auth/AuthContent';
import { createUser } from '../firebase/auth';
import LoadingOverlay from '../component/LoadingOverlay';


export function SignUpScreen() {
   const [isAuthenticating, setIsAuthentiating] = useState(false);


  async function handleAuthentication({email, password}){
   setIsAuthentiating(true);
    await createUser(email, password);
     setIsAuthentiating(false);
   }

   if(isAuthenticating) {
      return <LoadingOverlay message="Create user" />
   }
   return <AuthContent isLogin={false} onAuthenticate={handleAuthentication} />

}
