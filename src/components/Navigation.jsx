import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { ListCats } from './ListCats.jsx'; 
import { SettingsScreen } from './SettingsScreen.jsx'; 
import { Home } from './Home';
import { ListStack, ListStackLiked } from './ListStack.jsx';
import { likedCat } from './likedCat.jsx';


const Tab = createBottomTabNavigator();



 function MyTabs() {
  return (
    <Tab.Navigator style={styles.navBar} screenOptions={() => ({
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#454045', 
      tabBarInactiveTintColor:'#A19FA1', 
      tabBarActiveBackgroundColor: '#fdd83a', 
      tabBarInactiveBackgroundColor :'#fdd83a',
      headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="home" color={color} size={size} />
      )}} />
      <Tab.Screen name="listCats" component={ListStack} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="list" color={color} size={size} />
      )}} />
      <Tab.Screen name="LikedCat" component={ListStackLiked} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="heart" color={color} size={size} />
      )}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon: ({color, size}) => (
        <Ionicons name="person" color={color} size={size} />
      )}} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
      <MyTabs />
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#fdd83a",
  }
})