import React, {createContext, ReactNode, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuthContextInterface {
   token: string,
   isAuthenticated: boolean;
   authenticate: (token: string) => void;
   logout:() => void;
}
export const AuthContext = createContext<AuthContextInterface>({
   token: '',
   isAuthenticated: false,
   authenticate: () => {},
   logout: () => {},
});

interface ContextProvider {
   children: ReactNode,
}


 export function AuthContextProvider({children}: ContextProvider){
   const [authToken, setAuthToken] = useState<string>('');

   useEffect(() => {
      async function fetchToken() {
         const token = await AsyncStorage.getItem('token');

         if(token) {
            setAuthToken(token)
         }
      }
      fetchToken()
   }, [])

   function authenticate(token) {
      setAuthToken(token);
      AsyncStorage.setItem('token', token);
   }

   function logout() {
      setAuthToken('');
      AsyncStorage.removeItem('token')
   }

   const value = {
      token: authToken, 
      isAuthenticated: !!authToken,
      authenticate: authenticate,
      logout: logout,
   }
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

