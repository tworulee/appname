import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Card({ city, setIsSearched, weather }) {
  const dateTime = weather.dt_txt;
  const date = dateTime.split(" ")[0];
  return (
    <>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setIsSearched(false)} // Arama durumunu sıfırla
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/image.png")}
          style={styles.background}
        >
          <Text style={styles.text1}>{city.name}</Text>

          <Text style={styles.text2}>{date}</Text>
          <View style={styles.textCont}>
            <View>
              <Text style={styles.text3}>
                {Math.round(weather.main.temp)}ºc
              </Text>
              <Text style={styles.text4}>
                {Math.round(weather.main.temp_min)}ºc /{" "}
                {Math.round(weather.main.temp_max)}ºc
              </Text>
              <Text style={styles.text5}>{weather.weather[0].main}</Text>
            </View>
            <Image
              source={require("../assets/icons/Moonstarsandcloud.png")}
              style={styles.image}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "38%",
    backgroundColor: "#16161F",
    borderRadius: 8,
    padding: 12,
  },
  background: {
    flex: 1,
    borderRadius: 8,
  },
  text1: {
    color: "#FAFAFA",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 22,
    marginTop: 20,
    marginLeft: 20,
  },
  text2: {
    color: "#FAFAFA",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 16,
    marginLeft: 20,
  },
  textCont: {
    marginTop: 100,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 57,
    marginBottom: 5,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 22,
  },
  text5: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 19,
  },
  image: {
    width: 120, // Resmin genişliği
    height: 120, // Resmin yüksekliği
    marginRight: 20,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16161F",
    padding: 8,
    borderRadius: 5,
    marginBottom:5
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
