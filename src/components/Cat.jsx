import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { saveData } from '../helper/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';




export const Cat = function Cat(nav) {
    const navigation = useNavigation()
    const [loaded] = useFonts({
      Bubblegum: require('../../assets/fonts/Bubblegum.ttf'),
    }) 
    let catInfos = nav.route.params.cat;

    let poids = (catInfos.max_weight + catInfos.min_weight)/2;
    let dureeVie = (catInfos.max_life_expectancy + catInfos.min_life_expectancy)/2;

    let sociabilite;
    switch (catInfos.other_pets_friendly) {
      case 0:
        sociabilite = 'Démoniaque'
        break;
      case 1:
        sociabilite = 'Très agressif'
        break;
      case 2:
        sociabilite = 'Agressif'
        break;
      case 3:
        sociabilite = 'Indifférent'
        break;
      case 4:
        sociabilite = 'Sociable'
        break;
      case 5:
        sociabilite = 'Très sociable'
        break;
      default: 
        sociabilite = 'Non renseigné'
    }

    let sante;
    switch (catInfos.general_health) {
      case 0:
        sante = 'Vulnérable'
        break;
      case 1:
        sante = 'Très fragile'
        break;
      case 2:
        sante = 'Fragile'
        break;
      case 3:
        sante = 'Douillet'
        break;
      case 4:
        sante = 'Robuste'
        break;
      case 5:
        sante = 'Très robuste'
        break;
      default : 
        sante = 'Non renseigné'
    }

    let intelligence;
    switch (catInfos.intelligence) {
      case 0:
        intelligence = 'Ahuri'
        break;
      case 1:
        intelligence = 'Très stupide'
        break;
      case 2:
        intelligence = 'Stupide'
        break;
      case 3:
        intelligence = 'Moyen'
        break;
      case 4:
        intelligence = 'Futé'
        break;
      case 5:
        intelligence = 'Très futé'
        break;
      default :
        intelligence = 'Non renseigné'
    }

    //Sauvegarde le chat dans les favoris

    const saveData = async () => {
    
        let storedValue = await AsyncStorage.getItem('@cat')
       /*  await AsyncStorage.clear()
        return; */
        if (storedValue !== null) {
          storedValue = await JSON.parse(storedValue)
          var liked = false;
          var data = []
          storedValue.forEach(element => {
            if (element.name == catInfos.name) {
              liked = true; 
              
            }
            else {
              data.push(element)
            } 

          });
          if (liked == true) {
            try {
              const jsonData = JSON.stringify(data)
              await AsyncStorage.setItem('@cat', jsonData) 
              
            } catch(error) {
              console.log(error);
            }
          } else {
            try {
              var storedData = [...storedValue, catInfos];
              const jsonData = JSON.stringify(storedData)
              await AsyncStorage.setItem('@cat', jsonData) 
              
            } catch(error) {
              console.log(error);
            }
          }
        } else {
          var storedData = [catInfos]
          const jsonData = JSON.stringify(storedData)
          await AsyncStorage.setItem('@cat', jsonData)  
        }

    }
    

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <Image  style={styles.image} source={{ uri: catInfos.image_link}}/>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color='white' size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.like} onPress={
                () => {saveData()}
              }>
            <Ionicons name="star" color='yellow' size={26} />
            </TouchableOpacity>
         </View>
         <Text style={styles.title}>{catInfos.name}</Text>
         <View style={styles.rowo}>
          <Ionicons name="heart" color='#595454' size={32} />
          <Text>{sante}</Text>
          </View>
         <View style={styles.rowo}>
          <Ionicons name="pulse-outline" color='#595454' size={32} />
          <Text>{dureeVie} ans</Text>
          </View>
         <View style={styles.rowo}>
          <Ionicons name="barbell-outline" color='#595454' size={32} />
          <Text>{poids}kg</Text>
          </View>
         <View style={styles.rowo}>
          <Ionicons name="bulb" color='#595454' size={32} />
          <Text>{intelligence}</Text>
          </View>
         <View style={styles.rowo}>
          <Ionicons name="happy" color='#595454' size={32} />
          <Text>{sociabilite}</Text>
          </View>
         <View style={styles.rowo}>
          <Ionicons name="flag" color='#595454' size={32} />
          <Text>{catInfos.origin}</Text>
          </View>
          </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      /* paddingTop :50, */
      backgroundColor : '#fff8da',
      minHeight:'100%', 
    },
    topContainer: {
      position: 'relative'
    },
    back: {
      position: 'absolute',
      top: 10,
      left: 10, 
      height : 42,
      opacity : .8,
      width : 42,
      backgroundColor: '#595454', 
      borderRadius : 30,
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    },
    like: {
      position: 'absolute',
      top: 10,
      right: 10, 
      opacity : .8,
      height : 42,
      width : 42,
      backgroundColor: '#595454', 
      borderRadius : 30,
      flex :1,
      justifyContent : 'center',
      alignItems : 'center'
    },
    rowo: {
      flex: 1,
      flexDirection: 'row',
      width : '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 75,
      alignItems: 'center',
      paddingVertical : 20,
      borderTopWidth: 1,
    },
    image: {
      height:300,
      width:'100%',
    },
    title: {
      fontFamily: 'Bubblegum',
      textAlign: 'center',
      paddingTop:25,
      fontSize:24,
      marginBottom: 50
    }
  })
