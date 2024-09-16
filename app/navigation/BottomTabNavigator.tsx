import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { StyleSheet, Text, View } from 'react-native'

// import HomeScreen from '../screens/HomeScreen.tsx';
// import ShiftScreen from '../screens/ShiftScreen.tsx';
// import ScheduleScreen from '../screens/ScheduleScreen.tsx';
// import AdminDashboard from '../screens/AdminDashboard.tsx';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View>hello</View>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'בית' }} />
    //   <Tab.Screen name="Shift" component={ShiftScreen} options={{ title: 'משמרת' }} />
    //   <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'לוח משמרות' }} />
    //   {/* ניתן להסתיר את הטאב של המנהל מעובדים רגילים */}
    //   <Tab.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: 'דשבורד' }} />
    // </Tab.Navigator>
  );
};

export default BottomTabNavigator;
