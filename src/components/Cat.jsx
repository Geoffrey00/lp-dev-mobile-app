import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export const Cat = function Cat(nav) {
    const navigation = useNavigation()
    const [loaded] = useFonts({
      Bubblegum: require('../../assets/fonts/Bubblegum.ttf'),
    }) 
    let catInfos = nav.route.params.cat;

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
    else if (catInfos.general_health == 3){ intelligence = 'Moyen'}
    else if (catInfos.general_health == 4){ intelligence = 'Futé'}
    else if (catInfos.general_health == 5){ intelligence = 'Très futé'}


    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <Image  style={styles.image} source={{ uri: catInfos.image_link}}/>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" color='white' size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.like}>
            <Ionicons name="heart" color='white' size={26} />
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
