import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeekWeathers = ({ forecastData }) => {
  // İkon seçimi için bir eşleme fonksiyonu
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "Thunderstorm":
        return require("../assets/icons/Thunder.png");
      case "Rain":
        return require("../assets/icons/rain.png");
      case "Clouds":
        return require("../assets/icons/sunclouds.png");
      case "Clear":
        return require("../assets/icons/Sun.png");
      case "Snow":
        return require("../assets/icons/sunrain.png");
      default:
        return require("../assets/icons/Moon.png");
    }
  };

  return (
    <View style={styles.container}>
      {forecastData.map((item, index) => {
        // Tarihi gün adına dönüştürme
        const day = new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
        });
        return (
          <View key={index} style={styles.card}>
            <Text style={styles.day}>{day}</Text>
            <Image
              source={getWeatherIcon(item.weather[0].main)}
              style={styles.icon}
            />
            <Text style={styles.maxTemp}>{Math.round(item.main.temp_max)}°C</Text>
            <Text style={styles.minTemp}>{Math.round(item.main.temp_min)}°C</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "21%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#16161F",
    padding: 10,
    borderRadius: 8,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
  day: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  maxTemp: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  minTemp: {
    color: "#aaa",
    fontSize: 14,
  },
});

export default WeekWeathers;
