import React from 'react';
import 'react-native-gesture-handler';

// שאר הייבואים...

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

// import AuthStack from './navigation/AuthStack.tsx';
// import BottomTabNavigator from './navigation/BottomTabNavigator.tsx';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
