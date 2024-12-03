import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to <Text style={styles.textBlue}>TypeWeather</Text></Text>
      <Text style={styles.textSecond}>Choose a location to see the weather forecast</Text>
      <TextInput style={styles.input} placeholder='Search Location'  placeholderTextColor='#7F7F98' />
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
    fontWeight: '700',  // Kalın yazı
    fontSize: 20,       // Yazı boyutu
    lineHeight: 28,     // Satır yüksekliği
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
  input: {
    color:"#7F7F98",
    width: '100%', 
    height: 56, 
    backgroundColor:"#1E1E29",
    paddingLeft: 10, 
    marginTop: 20, 
    borderRadius: 8, 
    fontSize:16,
   
  },
});
