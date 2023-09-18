import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screen/LoginScreen';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { AuthContext, AuthContextProvider } from './src/context/NavigationContext';
import { HomePage } from './src/screen/HomePage';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomePage} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
    const authCtx = useContext(AuthContext);

  return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}





