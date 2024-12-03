import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/Vector.png')} style={styles.image} />
      <Image source={require('../assets/Vector1.png')} style={ styles.overlapImage} />
      <Text style={styles.text}>iWeather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignItems: 'baseline',
    padding: 30,
    
  },
  image: {
    width: 19,
    height: 16,
  },
  overlapImage: {
    width: 25,
    height: 24,
    marginLeft: -10, 
    marginBottom:8
  },
  text: {
    color: '#FAFAFA',
    fontSize: 25,
    marginLeft: 10, 
  },
});
