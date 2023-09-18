import React, {createContext, ReactNode, useState} from 'react';


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

   function authenticate(token) {
      setAuthToken(token);
   }

   function logout() {
      setAuthToken('');
   }

   const value = {
      token: authToken, 
      isAuthenticated: !!authToken,
      authenticate: authenticate,
      logout: logout,
   }
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

