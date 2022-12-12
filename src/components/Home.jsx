import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const Home = function Home() {
    return (
      <SafeAreaView style={styles.container}>
        <Image  
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor : '#fff8da',
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    logo: {
        width: '80%',
        height: 107
    },
  })