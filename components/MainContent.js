import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';

export default function MainContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to <Text style={styles.textBlue}>TypeWeather</Text></Text>
      <Text style={styles.textSecond}>Choose a location to see the weather forecast</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    marginTop:120
  },
  text: {
    color:'#FAFAFA',
    fontWeight: '700',  
    fontSize: 20,       
    lineHeight: 28,    
    textAlign: 'center',
  },
  textBlue: {
    color: 'cornflowerblue',  
  },
  textSecond: {
    color:'#BFBFD4',
    fontWeight: '400',  // Kalın yazı
    fontSize: 14,       // Yazı boyutu
    lineHeight: 20,     // Satır yüksekliği
    textAlign: 'center',
  },
 
});
