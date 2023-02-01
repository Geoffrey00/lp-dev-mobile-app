import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(){
    try {
      var storedValue = await AsyncStorage.getItem('@cat')
      if (storedValue !== null) {
        storedValue = await JSON.parse(storedValue)
        var storedData = [...storedValue, catInfos];
      } else {
        var storedData = [catInfos]
      }
      const jsonData = JSON.stringify(storedData)
      await AsyncStorage.setItem('@cat', jsonData) 
    } catch (error) {
      console.log(error)
    }
  }