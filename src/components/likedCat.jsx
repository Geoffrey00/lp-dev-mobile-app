import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useFocusEffect, useCallback } from 'react';
import { useIsFocused } from '@react-navigation/native';



export const likedCat = function LikedCat() {
  const navigation = useNavigation()
  const [data, setData] = useState(false)
  const isFocused = useIsFocused();

  const [loaded] = useFonts({
    Bubblegum: require('../../assets/fonts/Bubblegum.ttf'),
  }) 
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cat')
      if(value !== null) {
        let formattedValue = JSON.parse(value);
        /* console.log(formattedValue) */
        return formattedValue;
      }
    } catch(e) {
       console.log(e) 
    }
  }
  useEffect(() => {
   getData().then(response => setData(response));
  }, [isFocused])
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.topLogo}>
          <Image  
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
          />
          </View>
          {(data) ? <FlatList data={data}
            renderItem={({item}) =>
             <TouchableOpacity
              onPress={() => navigation.navigate('LikedDetails', {cat: item})}
              activeOpacity={0.8}
            > 
            <View style={styles.item}>
            <Image style={styles.imageCard} source={{ uri: item.image_link}}/>
            <View style={styles.titleBlock}>           
              <Text style={styles.titleCard}>
                {item.name}
              </Text>
              </View>
            </View>
             </TouchableOpacity> 
            }
           /> : <Text style={styles.titre}>Vous n'avez pas de favoris</Text>} 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop :20,
    backgroundColor : '#fff8da',
    minHeight : '100%',
    paddingBottom : 75,
  },
  logo: {
    height : 87,
    width : '65%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  titre:{
    alignSelf:'center',
    /* fontFamily :'Bubblegum', */
  },
  imageCard: {
    height:300,
    width:'100%',
    position:'relative',
    borderRadius:25
  },
  titleBlock:{
    position:'absolute',
    bottom:0,
    height:'15%',
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'rgba(0, 0, 0, 0.4)',
    borderBottomRightRadius:25,
    borderBottomLeftRadius :25
  },
  titleCard: {
    color:'white',
    fontFamily :'Bubblegum',
  },
  item: {
    width: '80%',
    marginBottom:'10%',
    alignSelf:'center',
    borderRadius:50
  }
})