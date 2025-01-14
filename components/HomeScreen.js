import React from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'

export default function HomeScreen() {
  
    return (
      <View>
        <Button title="Press" onPress={()=>alert("alert butonuna basıldı")}>alert butonu</Button>
        <Button title="Press" onPress={()=>alert("alert butonuna basıldı")}>alert butonu</Button>
      </View>
    );
  }

const styles = StyleSheet.create({})

