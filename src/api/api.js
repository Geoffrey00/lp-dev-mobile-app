import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import {text} from '../components/ListCats'

export const getDataUsingSimpleGetCall = async (queryParam) => {
  return await axios.get(`https://api.api-ninjas.com/v1/cats?name=${queryParam ? queryParam : 'a'}`, {
    headers: {
       'X-Api-Key': 'u+/FSkrEZfHvQ7zYoru5nw==ri6ZAziFqt3TcDck'
    }
  })
    .then((response) => response.data)
    .catch(function (error) {
      alert(error.message);
    })
}
