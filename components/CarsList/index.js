import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CarItem from '../CarItem';

import styles from './styles'
import cars from './cars'

const CarsList = (props) => {
  return (
    <View style = {styles.container}>
      <FlatList 
        data = {cars}

        // function will be called on each car in cars array
        renderItem = {({item}) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;
