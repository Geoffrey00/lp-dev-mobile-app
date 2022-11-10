import * as React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import {getDataUsingSimpleGetCall} from '../api/api'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const HomeScreen = function HomeScreen() {
    const [data, setData] = useState(false)
   
    useEffect(() => {

      getDataUsingSimpleGetCall().then(response => setData(response))
      
    }, [])


    return (
      <View style={styles.container}>
           {(data) ? <FlatList data={data}
            renderItem={({item}) =>
            <View style={styles.item}>
            <Image style={styles.imageCard} source={{ uri: item.image_link}}/>
            <View style={styles.titleBlock}>           
              <Text style={styles.titleCard}>
                {item.name}
              </Text>
              </View>
            </View>
            }
           /> : <ActivityIndicator></ActivityIndicator>}
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      paddingHorizontal:'10%'
    },
    imageCard: {
      height:300,
      width:'100%',
      position:'relative'
    },
    titleBlock:{
      position:'absolute',
      bottom:0,
      height:'15%',
      width:'100%',
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'rgba(0, 0, 0, 0.4)'
    },
    titleCard: {
      color:'white',
    },
    item: {
      width: '100%',
      marginBottom:'10%',
    }
  })