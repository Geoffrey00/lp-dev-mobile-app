import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';



export const Cat = function Cat(nav) {
    const [loaded] = useFonts({
      Bubblegum: require('../../assets/fonts/Bubblegum.ttf'),
    }) 
    let catInfos = nav.route.params.cat;
    console.log(nav.route.params.cat);

    let poids = (catInfos.max_weight + catInfos.min_weight)/2;
    let dureeVie = (catInfos.max_life_expectancy + catInfos.min_life_expectancy)/2;

    let sociabilite;
    if (catInfos.other_pets_friendly == 0){ sociabilite = 'Démoniaque'}
    else if (catInfos.other_pets_friendly == 1){ sociabilite = 'Très agressif'}
    else if (catInfos.other_pets_friendly == 2){ sociabilite = 'Agressif'}
    else if (catInfos.other_pets_friendly == 3){ sociabilite = 'Indifférent'}
    else if (catInfos.other_pets_friendly == 4){ sociabilite = 'Sociable'}
    else if (catInfos.other_pets_friendly == 5){ sociabilite = 'Très sociable'}

    let sante;
    if (catInfos.general_health == 0){ sante = 'Vulnérable'}
    else if (catInfos.general_health == 1){ sante = 'Très fragile'}
    else if (catInfos.general_health == 2){ sante = 'Fragile'}
    else if (catInfos.general_health == 3){ sante = 'Douillet'}
    else if (catInfos.general_health == 4){ sante = 'Robuste'}
    else if (catInfos.general_health == 5){ sante = 'Très robuste'}

    let intelligence;
    if (catInfos.general_health == 0){ intelligence = 'Ahuri'}
    else if (catInfos.general_health == 1){ intelligence = 'Très stupide'}
    else if (catInfos.general_health == 2){ intelligence = 'Stupide'}
    else if (catInfos.general_health == 3){ intelligence = ''}
    else if (catInfos.general_health == 4){ intelligence = 'Robuste'}
    else if (catInfos.general_health == 5){ intelligence = 'Très robuste'}


    return (
      <SafeAreaView style={styles.container}>
         <Image  style={styles.image} source={{ uri: catInfos.image_link}}/>
         <Text style={styles.title}>{catInfos.name}</Text>
         <View>
         <Ionicons name="list" color={24} size={24} />
          <Text>{sante}</Text>
          </View>
         <View>
          <Text>{dureeVie}</Text>
          </View>
         <View>
          <Text>{poids}</Text>
          </View>
         <View>
          <Text>{intelligence}</Text>
          </View>
         <View>
          <Text>{sociabilite}</Text>
          </View>
         <View>
          <Text>{catInfos.origin}</Text>
          </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop :50,
      backgroundColor : '#fff8da',
      minHeight:'100%'
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
    }
  })
