import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import Card from "./components/Card";
import WeatherDetail from "./components/WeatherDetail";
import WeekWeathers from "./components/WeekWeathers";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const API_KEY = "08e3bd25b52cb1d93d6c2abc15a27c28"; // OpenWeather API anahtarı

const App = () => {
  const [city, setCity] = useState(""); // Kullanıcıdan alınan şehir
  const [weatherData, setWeatherData] = useState(null); // API'den alınan veri
  const [loading, setLoading] = useState(false); // Yükleme durumu
  const [isSearched, setIsSearched] = useState(false); // Arama durumu kontrolü

  const fetchWeatherData = async () => {
    if (!city) {
      Alert.alert("Error", "Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.list[0].wind);

      if (data.cod !== "200") {
        Alert.alert("Error", "City not found.");
        setLoading(false);
        return;
      }

      // 5 günlük tahmin verisini düzenle
      const dailyData = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setWeatherData({ city: data.city, daily: dailyData });

      // Input alanını gizlemek için arama durumunu güncelle
      setIsSearched(true);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        source={require("./assets/Background.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          {/* Eğer arama yapılmadıysa input alanını göster */}
          {!isSearched && (
            <>
              <Header />
              <MainContent />
              <TextInput
                style={styles.input}
                placeholder="Search Location"
                placeholderTextColor="#7F7F98"
                value={city}
                onChangeText={setCity}
                onSubmitEditing={fetchWeatherData} // Enter tuşuna basıldığında veri çekilir
                returnKeyType="search" // Klavye Enter tuşunu "Search" olarak gösterir
                clearButtonMode="while-editing" // iOS'ta temizleme düğmesini gösterir
              />
            </>
          )}

          {/* Eğer veri varsa hava durumu detaylarını göster */}
          {loading && <Text style={styles.loadingText}>Loading...</Text>}

          {weatherData && isSearched && (
            <>
              <Card
                weather={weatherData.daily[0]}
                city={weatherData.city}
                setIsSearched={setIsSearched}
              />
              <WeatherDetail weather={weatherData.daily[0]} />
              <WeekWeathers forecastData={weatherData.daily} />
            </>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    color: "#7F7F98",
    width: "100%",
    height: 56,
    backgroundColor: "#1E1E29",
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 8,
    fontSize: 16,
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default App;
