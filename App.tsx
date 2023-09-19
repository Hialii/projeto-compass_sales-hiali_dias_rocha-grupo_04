import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screen/LoginScreen';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { AuthContext, AuthContextProvider } from './src/context/NavigationContext';
import { HomePage } from './src/screen/HomePage';
import { ForgotPasswordScreen } from './src/screen/ForgotPasswordScreen';
import {ExitIconButton} from './src/component/ExitIconButton';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{  headerShadowVisible: false, title: '', headerStyle: {backgroundColor: '#f3f3f3'} }}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{  headerShadowVisible: false, title: '',  headerStyle: {backgroundColor: '#f3f3f3'} }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title: '', headerShadowVisible: false, headerStyle: {backgroundColor: '#f3f3f3'}}}/>
      </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomePage} options={{ headerShadowVisible: false, title: '', headerStyle: {backgroundColor: '#f3f3f3'}, headerRight: () => <ExitIconButton onPress={authCtx.logout} />}}/>
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
    <StatusBar
          backgroundColor="#EEEEEE"
          barStyle="dark-content"
        />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}





