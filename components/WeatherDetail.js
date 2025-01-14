import React from "react";
import { Text, StyleSheet, View, Button, StatusBar } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

export default function WeatherDetail({ weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome5 name="temperature-high" size={20} color="#fff" />
        <Text style={styles.label}>Thermal sensation</Text>
        <Text style={styles.value}>{Math.round(weather.main.temp)}</Text>
      </View>
      <View style={styles.row}>
        <Feather name="cloud-rain" size={20} color="#fff" />
        <Text style={styles.label}>Feels Like</Text>
        <Text style={styles.value}>{weather.main.feels_like}</Text>
      </View>
      <View style={styles.row}>
        <Feather name="wind" size={20} color="#fff" />
        <Text style={styles.label}>Wind speed</Text>
        <Text style={styles.value}>{weather.wind.speed} km/h</Text>
      </View>
      <View style={styles.row}>
        <Feather name="droplet" size={20} color="#fff" />
        <Text style={styles.label}>Air humidity</Text>
        <Text style={styles.value}>{Math.round(weather.main.humidity)}%</Text>
      </View>
      <View style={styles.row2}>
        <Feather name="sun" size={20} color="#fff" />
        <Text style={styles.label}>Sea Level</Text>
        <Text style={styles.value}>{weather.main.sea_level}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "36%",
    backgroundColor: "#16161F",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1, // Alt sınır genişliği
    borderBottomColor: "#333", // Alt sınır rengi
    paddingBottom: 17,
    marginTop: 8,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 20,
  },
  label: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});
