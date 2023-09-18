import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screen/LoginScreen';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { AuthContext, AuthContextProvider } from './src/context/NavigationContext';
import { HomePage } from './src/screen/HomePage';
import { ForgotPasswordScreen } from './src/screen/ForgotPasswordScreen';
import {ExitIconButton} from './src/component/ExitIconButton'


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{  title: '', headerStyle: {backgroundColor: '#EEEEEE'} }}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{ title: '',  headerStyle: {backgroundColor: '#EEEEEE'} }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: '',  headerStyle: {backgroundColor: '#EEEEEE'}}}/>
      </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomePage} options={{ title: '', headerStyle: {backgroundColor: '#EEEEEE'}, headerRight: () => <ExitIconButton onPress={authCtx.logout} />}}/>
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





