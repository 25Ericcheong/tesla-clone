import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';

export default function App() {
  return (
    <View style = {styles.container}>

      {/* could possibly load car item component and include relevant data to be displayed or using cars.js provided, but in example, we will display an array of data which is found in car list using flatline */}
      {/* <CarItem 
      name = {"Model X"} 
      tagline = {"Order Online For"}
      taglineCTA = {"Touchlss Delivery"}
      image={require('./assets/images/Model3.jpeg')}
      /> */}

      <CarsList />

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
