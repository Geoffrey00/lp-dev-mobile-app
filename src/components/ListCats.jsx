import * as React from 'react';
import { View, Text,TextInput, ActivityIndicator, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {getDataUsingSimpleGetCall} from '../api/api'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';




export const ListCats = function ListCats() {
  const navigation = useNavigation()
  const [text, setText] = useState('');
  const [loaded] = useFonts({
    Bubblegum: require('../../assets/fonts/Bubblegum.ttf'),
  }) 
    const [data, setData] = useState(false)
    
    const handleApiCall = () => {
      getDataUsingSimpleGetCall(text).then(response => setData(response))
    }
    
    useEffect(() => {

      handleApiCall();
      
    }, [])
    
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.topLogo}>
          <Image  
                style={styles.logo}
                source={require('../../assets/logo.jpg')}
          />
          </View>
          <View>
              <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              />
              <Button
                title={'Rechercher'}
                onPress={handleApiCall}
              >
                Rechercher
              </Button>
            </View>
            <View>
              <Text>
                {text}
              </Text>
            </View>
           {(data) ? <FlatList data={data}
            renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {cat: item})}
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
           /> : <ActivityIndicator></ActivityIndicator>}
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
      height : 80,
      width : '60%',
      alignSelf: 'center',
      marginVertical: 10,
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