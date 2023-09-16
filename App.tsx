import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screen/LoginScreen';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { COLORS } from './src/constants/COLORS';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary  },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: COLORS.primary },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// function AuthenticatedStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: COLORS.primary  },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: COLORS.primary  },
//       }}
//     >
//       <Stack.Screen name="Welcome" component={HomePage} />
//     </Stack.Navigator>
//   );
// }

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}





