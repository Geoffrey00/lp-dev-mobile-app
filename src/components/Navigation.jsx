import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { HomeScreen } from './HomeScreen.jsx'; 
import { SettingsScreen } from './SettingsScreen.jsx'; 


const Tab = createBottomTabNavigator();



 function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="home" color={color} size={size} />
      )}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="settings" color={color} size={size} />
      )}} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
      <MyTabs />
  );
}