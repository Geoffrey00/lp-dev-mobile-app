import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListCats } from './ListCats';
import { Cat } from './Cat';
import { likedCat } from './likedCat'; 
const Stack = createNativeStackNavigator();


export const ListStack = function ListStack() {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={ListCats} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Cat} options={{ headerShown: false }} />         
        </Stack.Navigator>
    );
  }

 export const ListStackLiked = function ListStack() {
    return (
        <Stack.Navigator initialRouteName="Liked">    
            <Stack.Screen name="Liked" component={likedCat} options={{ headerShown: false }} />  
            <Stack.Screen name="LikedDetails" component={Cat} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
  } 