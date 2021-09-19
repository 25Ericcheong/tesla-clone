import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
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

        // snap to a start of a component
        snapToAlignment = {'start'}

        // to hide scrolling indicator
        showsVerticalScrollIndicator = {false}

        // speed of animation when flat list move up or down
        decelerationRate = {'fast'}

        // send values on how big item is in flatlist - which will be the height of the item which is also the height of the screen
        snapToInterval = {Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
