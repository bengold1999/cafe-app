import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoginScreen from '../screens/LoginScreen.tsx';
// import SignUpScreen from '../screens/SignUpScreen.js';
// import LoginScreen from '../screens/LoginScreen.js';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen.tsx';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'התחברות' }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'הרשמה' }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
