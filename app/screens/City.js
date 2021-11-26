import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import MapView from "react-native-maps";
import useWeatherSimple from "../hooks/useWeatherSimple";

export default function City() {
  const { params } = useRoute();
  const { cityId, cityName, latitude, longitude } = params;

  const {
    response: cityData,
    isLoading,
    hasError,
    setLatitude,
    setLongitude,
  } = useWeatherSimple();

  useEffect(() => {
    setLatitude(latitude);
    setLongitude(longitude);
  }, [latitude, longitude]);

  const getIcon = (iconId) => {
    let route = "";

    route = getImage(iconId);

    return (
      <Image
        source={route}
        resizeMode="cover"
        style={{ width: 150, height: 150 }}
      />
    );
  };

  return (
    <ScrollView>
      <Text style={styles.title}>{cityName}</Text>

      {isLoading ? (
        <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 10 }}>
          Obteniedo clima... <ActivityIndicator color={"#13b5f1"} />
        </Text>
      ) : hasError ? (
        <Text>Hubo un error al obtener el clima</Text>
      ) : (
        cityData && (
          <Card containerStyle={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row" }}>
              {getIcon(cityData.weather[0].icon)}
              <View>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                  {cityData.weather[0].description}
                </Text>

                <Text style={styles.measureTitle}>Temperatura actual</Text>

                <Text style={styles.temperature}>
                  <Icon name="thermometer" type="material-community" />
                  {cityData.main.temp} °C
                </Text>

                <Text style={styles.measureTitle}>Sensación térmica</Text>
                <Text style={styles.temperature}>
                  <Icon name="thermometer" type="material-community" />
                  {cityData.main.feels_like} °C
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={styles.measure}>
                <Icon name="water-percent" type="material-community" />
                <Text style={{ textAlign: "center" }}>
                  {cityData.main.humidity} %
                </Text>
              </View>
              <View style={styles.measure}>
                <Icon name="gauge" type="material-community" />
                <Text style={{ textAlign: "center" }}>
                  {cityData.main.pressure} hPa
                </Text>
              </View>
              <View style={styles.measure}>
                <Icon name="weather-windy" type="material-community" />
                <Text style={{ textAlign: "center" }}>
                  {cityData.wind.speed} m/s
                </Text>
              </View>
            </View>
          </Card>
        )
      )}

      <MapView
        style={{ height: 400, width: "100%" }}
        region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </ScrollView>
  );
}

function getImage(input) {
  switch (input) {
    case "01d":
      return require("../../assets/open-weather-icons/01d.png");
    case "01n":
      return require("../../assets/open-weather-icons/01n.png");
    case "02d":
      return require("../../assets/open-weather-icons/02d.png");
    case "02n":
      return require("../../assets/open-weather-icons/02n.png");
    case "03d":
    case "03n":
      return require("../../assets/open-weather-icons/03d.png");
    case "04d":
    case "04n":
      return require("../../assets/open-weather-icons/04d.png");
    case "09d":
    case "09n":
      return require("../../assets/open-weather-icons/09d.png");
    case "10d":
      return require("../../assets/open-weather-icons/10d.png");
    case "10n":
      return require("../../assets/open-weather-icons/10n.png");
    case "11d":
    case "11n":
      return require("../../assets/open-weather-icons/11d.png");
    case "13d":
    case "13n":
      return require("../../assets/open-weather-icons/13d.png");
    case "50d":
    case "50n":
      return require("../../assets/open-weather-icons/50d.png");
    default:
      return require("../../assets/open-weather-icons/no-icon.png");
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 20,
    textAlign: "center",
  },
  measure: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  measureTitle: {
    fontSize: 18,
  },
});
